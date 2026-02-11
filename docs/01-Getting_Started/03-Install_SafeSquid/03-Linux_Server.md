---
title: Linux Server (TAR)
description: Install SafeSquid SWG from a TAR package on any Linux distribution — Red Hat, CentOS, SUSE, Debian, Ubuntu, and others.
keywords:
  - SafeSquid TAR install
  - SafeSquid Linux installation
  - manual SafeSquid installation
---


# Install from TAR Package

Use this method to install SafeSquid on an existing Linux server. Works on any distribution — Red Hat, CentOS, SUSE, Debian, Ubuntu, etc.

## Problem Statement

You already have a Linux server and want to add SafeSquid without replacing the OS or using a full appliance image. The TAR method gives you the SafeSquid binary and installer only; you retain control over OS hardening, disk layout, and supporting services. Trade-off: you must configure Monit, DNS, and other dependencies yourself.

:::info
This method installs the SafeSquid binary only. You are responsible for OS hardening, disk partitioning, and supporting services. For a fully automated setup, use the [Appliance Builder](/docs/Getting_Started/Install_SafeSquid/SafeSquid_Appliance_Builder/) instead.
:::

## Prerequisites

- Linux server meeting [minimum requirements](/docs/Getting_Started/Install_SafeSquid/main/) (4 CPU, 8 GB RAM, 100 GB disk)
- Root or sudo access
- Internet connectivity for downloads



## Steps

1. **Verify prerequisites**

   Before installing, confirm you have:
   - Root or sudo access (run `sudo -v` to verify)
   - Internet connectivity (run `ping -c 3 google.com` to test)
   - At least 10 GB free disk space (run `df -h /` to check)

2. **Download and extract** the SafeSquid package:

   ```bash
   cd /usr/local/src
   wget http://downloads.safesquid.net/appliance/binary/safesquid_latest.tar.gz
   tar -zxvf safesquid_latest.tar.gz
   ```

   **Expected output:** Directory `_mkappliance` extracted with installation scripts.

3. **Run the installer:** Ensure you have root or sudo access. From the directory where you extracted the TAR (e.g. `/usr/local/src`), run:

   ```bash
   _mkappliance/installation/setup.sh
   ```

   The installer checks dependencies, creates system users, and installs SafeSquid binaries to `/opt/safesquid/`.

4. **Check for missing dependencies:**

   ```bash
   ldd /opt/safesquid/bin/safesquid
   ```

   If any library shows `not found`, install the missing package using your distribution's package manager (`apt`, `yum`, `zypper`, etc.).

5. **Start SafeSquid:**

   ```bash
   /etc/init.d/safesquid start
   ```



## Verification and Evidence

```bash title="Confirm SafeSquid is listening on port 8080"
netstat -tulnp | grep safesquid
```

SafeSquid listens on port **8080** by default. If it appears in the output, the installation succeeded. From a browser configured to use this host as the HTTP proxy, open `http://safesquid.cfg/` to confirm the configuration interface loads.

## Troubleshooting

| Symptom | Likely cause | Fix |
| ------- | ------------ | --- |
| `ldd` shows "not found" for a library | Missing system dependency | Install the required package (e.g. `libssl`, `libpcre`) using your distro's package manager. |
| SafeSquid fails to start | Permissions, port in use, or config error | Check `/var/log/safesquid/` for errors; ensure port 8080 is free (e.g. run `netstat -lntp` and confirm nothing else uses 8080); run as root or with correct sudo. |
| Installer script fails | Insufficient disk, no root/sudo, or network | Ensure at least 10 GB free, run with sudo/root, and verify outbound connectivity to downloads. See [Troubleshooting](/docs/Troubleshooting/main/). |

## Configure Supporting Services

SAB handles these automatically, but TAR installs require manual setup:

- **[Monit](/docs/SafeSquid_SWG/Supporting_Services/Monit/)** — process monitoring and auto-restart for SafeSquid
- **[BIND9](/docs/SafeSquid_SWG/Supporting_Services/Bind/)** — local DNS resolver used by SafeSquid

:::tip
Configure Monit before going to production. Without it, a crashed SafeSquid process will not restart automatically.
:::



## Next Steps

1. **[Activate your license](/docs/Getting_Started/Activate/)**
  2. **[Connect a browser](/docs/Getting_Started/Connect_Your_Client/main/)** to verify traffic flows
  3. **[Enable SSL Inspection](/docs/SSL_Inspection/main/)** for HTTPS visibility

