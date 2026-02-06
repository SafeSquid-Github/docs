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

:::info
This method installs the SafeSquid binary only. You are responsible for OS hardening, disk partitioning, and supporting services. For a fully automated setup, use the [Appliance Builder](01-SafeSquid_Appliance_Builder.md) instead.
:::

## Prerequisites

- Linux server meeting [minimum requirements](main.md) (4 CPU, 8 GB RAM, 100 GB disk)
- Root or sudo access
- Internet connectivity for downloads

## Steps

1. **Download and extract** the SafeSquid package:

   ```bash
   cd /usr/local/src
   wget http://downloads.safesquid.net/appliance/binary/safesquid_latest.tar.gz
   tar -zxvf safesquid_latest.tar.gz
   ```

2. **Run the installer:**

   ```bash
   _mkappliance/installation/setup.sh
   ```

3. **Check for missing dependencies:**

   ```bash
   ldd /opt/safesquid/bin/safesquid
   ```

   If any library shows `not found`, install the missing package using your distribution's package manager (`apt`, `yum`, `zypper`, etc.).

4. **Start SafeSquid:**

   ```bash
   /etc/init.d/safesquid start
   ```

## Verify

```bash title="Confirm SafeSquid is listening on port 8080"
netstat -tulnp | grep safesquid
```

SafeSquid listens on port **8080** by default. If it appears in the output, the installation succeeded.

## Configure Supporting Services

SAB handles these automatically, but TAR installs require manual setup:

- **[Monit](../../02-SafeSquid_SWG/07-Supporting_Services/01-Monit.md)** — process monitoring and auto-restart for SafeSquid
- **[BIND9](../../02-SafeSquid_SWG/07-Supporting_Services/02-Bind.md)** — local DNS resolver used by SafeSquid

:::tip
Configure Monit before going to production. Without it, a crashed SafeSquid process will not restart automatically.
:::

## Next Steps

1. **[Activate your license](../../04-Activate.md)**
  2. **[Connect a browser](../../05-Connect_Your_Client/main.md)** to verify traffic flows
  3. **[Enable SSL Inspection](../../05-SSL_Inspection/main.md)** for HTTPS visibility
