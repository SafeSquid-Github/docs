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

SAB is a security-hardened **Debian Linux** ISO that installs the OS, partitions disks, and deploys SafeSquid with all dependencies in about 15 minutes.

## Why Use SAB?

Setting up a Secure Web Gateway manually requires installing and hardening the Linux OS, partitioning disks appropriately, downloading and configuring dependency libraries, and installing supporting services. This process demands expertise and time.

SAB automates all of it — reducing configuration errors, ensuring optimal performance, and applying security best practices by default. Even evaluation deployments benefit from this streamlined approach.

**Download:** [safesquid.iso](https://downloads.safesquid.com/appliance/safesquid.iso)

:::info Minimum Disk
100 GB (NVMe SSD recommended). See [Production Planning](../01-Deployment_Planning.md) for full sizing guidance.
:::

## Prerequisites

### Physical Hardware

1. **Burn the ISO** to USB (e.g., Rufus) or DVD.
2. **Set BIOS boot order:** primary = hard disk, secondary = bootable media.
3. **Back up** any existing data on the target disk — SAB will overwrite it.

### Virtual Machine

1. **Create a VM** on any Type 1 or Type 2 hypervisor.
2. **Attach the ISO** as a virtual CD/DVD.
3. **Configure networking:** Bridged (direct network access) or NAT.

## Installation Steps

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

7. **Continue via SSH** *(optional).* Connect an SSH client to the server IP if preferred.

   ![SSH notice](/img/SAB_Debian/pptx_image13.png)

8. **Confirm disk and GRUB target.** SAB auto-partitions the disk. Select the target drive (typically `/dev/sda`) for both partitioning and the GRUB bootloader.

   ![Disk selection](/img/SAB_Debian/pptx_image14.png)
   ![GRUB](/img/SAB_Debian/pptx_image15.png)

   :::caution
   Installing GRUB on the wrong drive can make the system unbootable. Confirm you selected the correct disk.
   :::

9. **Wait for installation** (~15 minutes). The preseed script installs all components, then the system reboots.

   ![Finishing](/img/SAB_Debian/pptx_image16.png)

10. **Log in** with the default credentials.

    ![Login](/img/SAB_Debian/pptx_image17.png)

    :::caution
    Default credentials: **administrator** / **safesquid**. You must change the password on first login.
    :::

## What Gets Installed

| Component | Location / Detail |
| --------- | ----------------- |
| SafeSquid proxy service | `/opt/safesquid/` — listens on port **8080** |
| Monit | Process monitoring, auto-restarts SafeSquid |
| BIND9 | Local DNS resolver |
| Logs | `/var/log/safesquid/` |
| Configuration interface | [http://safesquid.cfg/](http://safesquid.cfg/) (via proxy) |

## Next Steps

1. **[Activate your license](../../04-Activate.md)**
  2. **[Connect a browser](../../05-Connect_Your_Client/main.md)** to verify traffic flows
  3. **[Enable SSL Inspection](../../05-SSL_Inspection/main.md)** for HTTPS visibility
