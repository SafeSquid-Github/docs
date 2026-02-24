---
title: SafeSquid Appliance Builder
description: Deploy SafeSquid Secure Web Gateway using the SAB ISO — a security-hardened Debian Linux installer with automated configuration.
keywords:
  - SafeSquid Appliance Builder
  - SAB installation
  - SafeSquid ISO deployment
  - secure web gateway deployment
---

# SafeSquid Appliance Builder (SAB)

## What is SAB?

SAB (SafeSquid Appliance Builder) is a security-hardened **Debian Linux** ISO that installs the OS, partitions disks, and deploys SafeSquid with all dependencies in about 15 minutes.

**Manual installation** requires: OS hardening, optimal disk partitioning, dependency libraries, network configuration, and supporting services (Monit, BIND9). One mistake in partitioning or networking delays deployment by hours.

**SAB automates all of it:**
- Security-hardened Debian base
- Optimized disk layout (separate partitions for logs, cache, database)
- Pre-configured Monit (process monitoring), BIND9 (local DNS)
- All SafeSquid dependencies installed and tested
- Production-ready in 15 minutes from ISO boot

:::info System Requirements

- **Minimum disk:** 100 GB (NVMe SSD recommended for production)
- **CPU:** 4+ cores with AES-NI
- **RAM:** 8 GB minimum
- See [Deployment Planning](/docs/Getting_Started/Deployment_Planning/) for full sizing guidance

:::

**Download:** [safesquid.iso](https://downloads.safesquid.com/appliance/safesquid.iso)

## Before You Begin

:::caution Back Up Data First

SAB will **erase and repartition** the target disk. Back up any existing data before proceeding.

:::

**Prepare your activation key:**
- Download your activation key from the [Self-Service Portal](/docs/Getting_Started/Register/) (you'll upload it after installation)

**For physical hardware:**
1. Burn the ISO to USB (use Rufus, Etcher, or `dd`) or DVD
2. Set BIOS boot order: primary = hard disk, secondary = USB/DVD
3. Verify CPU supports AES-NI (required for SSL inspection performance)

**For virtual machines:**
1. Create a VM on VMware, Hyper-V, KVM, or VirtualBox
2. Attach the ISO as a virtual CD/DVD drive
3. Configure networking: Bridged (recommended) for direct network access, or NAT
4. Allocate minimum 4 CPU cores, 8 GB RAM, 100 GB disk

## Installation Steps

**Total time:** ~15 minutes (10 min prompts + 5 min automated install)

1. **Select Standard Installation** (recommended) at the boot menu.

   ![SAB Boot Menu](/img/SAB_Debian/pptx_image1.png)
   *SAB Boot Menu*

2. **Configure networking.** Select **Yes** for DHCP or **No** for static IP.

   ![DHCP prompt](/img/SAB_Debian/pptx_image2.png)

3. **Select locale and keyboard** — language, location (timezone), and keyboard layout.

   ![Language](/img/SAB_Debian/pptx_image3.png)
   ![Location](/img/SAB_Debian/pptx_image4.png)
   ![Keyboard](/img/SAB_Debian/pptx_image5.png)

4. **Enter static IP details** *(skip if DHCP).* Provide IP/CIDR (e.g., `192.168.1.50/24`), gateway, and DNS.

   ![Static IP](/img/SAB_Debian/pptx_image6.png)
   ![Gateway](/img/SAB_Debian/pptx_image7.png)
   ![DNS](/img/SAB_Debian/pptx_image8.png)

5. **Set hostname and domain** consistent with your network naming.

   ![Hostname](/img/SAB_Debian/pptx_image9.png)
   ![Domain](/img/SAB_Debian/pptx_image10.png)

6. **Select Debian mirror** — choose the geographically nearest mirror. Leave the HTTP proxy blank unless your network requires one.

   ![Mirror](/img/SAB_Debian/pptx_image11.png)
   ![HTTP proxy](/img/SAB_Debian/pptx_image12.png)

   :::tip Continue via SSH (Optional)

   After network configuration completes, you can connect via SSH to the server IP and continue the installation remotely instead of using the console.

   ![SSH notice](/img/SAB_Debian/pptx_image13.png)

   :::

7. **Confirm disk and GRUB target.** SAB auto-partitions the disk. Select the target drive (typically `/dev/sda`) for both partitioning and the GRUB bootloader.

   ![Disk selection](/img/SAB_Debian/pptx_image14.png)
   ![GRUB](/img/SAB_Debian/pptx_image15.png)

   :::caution
   Installing GRUB on the wrong drive can make the system unbootable. Confirm you selected the correct disk.
   :::

8. **Wait for installation** (~5-10 minutes). The automated preseed script:
   - Partitions the disk (separate `/`, `/var/log/safesquid`, `/var/lib/safesquid`)
   - Installs Debian base + security updates
   - Installs SafeSquid, Monit, BIND9, and dependencies
   - Applies security hardening (disables unnecessary services, configures firewall)
   - Configures SafeSquid to start on boot
   
   The system reboots automatically when complete.

   ![Finishing installation](/img/SAB_Debian/pptx_image16.png)

9. **Log in** with the default credentials after reboot.

   ![Login prompt](/img/SAB_Debian/pptx_image17.png)

   :::caution Change Default Password

   Default credentials: **administrator** / **safesquid**
   
   You **must** change the password immediately after first login. Run `passwd` at the shell or change it via the SafeSquid interface after activation.

   :::

## What Gets Installed

| Component | Location / Detail |
| --------- | ----------------- |
| **SafeSquid proxy** | `/opt/safesquid/` — listens on port **8080** (HTTP proxy) |
| **Monit** | Process monitoring and auto-restart for SafeSquid |
| **BIND9** | Local DNS resolver (port 53) |
| **Logs** | `/var/log/safesquid/` |
| **Admin interface** | `https://safesquid.cfg/` (accessible only via the proxy after client configuration) |
| **Direct admin access** | `https://SERVER-IP:8443/` (before proxy is configured) |

## Verify Installation

**From the server console or SSH:**

```bash
# Check SafeSquid is running
systemctl status safesquid

# Verify port 8080 is listening
netstat -lntp | grep 8080
```

**Expected output:** SafeSquid process listening on `0.0.0.0:8080`

**From a browser (before proxy is configured):**

Navigate to `https://SERVER-IP:8443/` — you should see the SafeSquid admin login.

If the interface loads and prompts for license activation, installation succeeded.

## Troubleshooting

| Symptom | Likely cause | Fix |
| ------- | ------------ | --- |
| System does not boot from media | Boot order or secure boot enabled | Set BIOS/UEFI boot priority (USB/DVD first); disable Secure Boot |
| Installation hangs at mirror selection | Network or proxy required | Ensure outbound HTTP/HTTPS access; enter proxy details if prompted |
| "Failed to partition disk" error | Disk in use or too small | Check disk is ≥100 GB; disconnect other drives during install |
| Port 8080 not listening after reboot | SafeSquid failed to start | Run `systemctl status safesquid` and check `/var/log/safesquid/safesquid.log` |
| Cannot access admin interface at :8443 | Firewall blocking port | Check firewall rules: `iptables -L` or configure firewall to allow 8443 |
| SSH connection refused | SSH not enabled or wrong IP | Verify IP with `ip addr`; check SSH is running: `systemctl status ssh` |

## Next Steps

1. **[Activate Your License](/docs/Getting_Started/Activate/)** — Upload your activation key to make SafeSquid fully operational
2. **[Connect Your Client](/docs/Getting_Started/Connect_Your_Client/main/)** — Configure a browser to use the proxy
3. **[Verify Your Setup](/docs/Getting_Started/Verify_Your_Setup/)** — Confirm traffic flows through SafeSquid
4. **[Enable SSL Inspection](/docs/SSL_Inspection/main/)** — Decrypt and inspect HTTPS traffic
