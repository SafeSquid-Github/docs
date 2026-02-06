---
title: Install SafeSquid
description: Choose an installation method for SafeSquid Secure Web Gateway — Appliance Builder ISO, cloud deployment, or Linux TAR package.
keywords:
  - SafeSquid installation
  - SafeSquid Appliance Builder
  - SAB
  - SafeSquid cloud deployment
  - SafeSquid TAR install
---

# Install SafeSquid

Three installation methods are available. Choose based on your environment.

| Method | Best For | What You Get |
| ------ | -------- | ------------ |
| **[Appliance Builder (SAB)](/docs/Getting%20Started/Install%20SafeSquid/SafeSquid%20Appliance%20Builder)** | New deployments on bare metal or VM | Full OS + SafeSquid + supporting services |
| **[Cloud Deployment](/docs/Getting%20Started/Install%20SafeSquid/Cloud%20Deployment)** | AWS, Azure, DigitalOcean, private cloud | SafeSquid on cloud VM via image or cloud-init |
| **[Linux Server (TAR)](/docs/Getting%20Started/Install%20SafeSquid/Linux%20Server)** | Existing Linux servers (any distro) | SafeSquid binary only — configure services yourself |

:::tip Recommendation
Start with the **Appliance Builder (SAB)** unless you have a specific reason not to. It produces a security-hardened Debian server with SafeSquid, Monit, BIND9, and disk partitioning preconfigured.
:::

## Minimum Requirements

- **CPU:** 4 cores (AES-NI required)
- **RAM:** 8 GB
- **Disk:** 100 GB (NVMe SSD recommended)
- **NICs:** 2
- **Connectivity:** Internet access for downloads and license activation

For production sizing and high-availability planning, see [Production Planning](/docs/Getting%20Started/Deployment%20Planning).

## After Installation

1. **[Activate your license](/docs/Getting%20Started/Activate)**
2. **[Connect your client](/docs/Getting%20Started/Connect%20Your%20Client/main)**
