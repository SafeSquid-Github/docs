---
title: Install SafeSquid
slug: /Getting_Started/Install_SafeSquid
description: Choose an installation method for SafeSquid — Appliance Builder (SAB), cloud deployment, or Linux TAR package.
keywords:
  - SafeSquid installation
  - SafeSquid Appliance Builder
  - SAB
  - SafeSquid cloud deployment
  - SafeSquid TAR install
---

# Install SafeSquid

## Problems this page prevents

Deployment stalls when teams pick the wrong install path for their environment. That causes rework, downtime windows, and delayed policy validation.

## Benefits of choosing the right method early

- Faster pilot time-to-value with fewer rebuilds
- Lower rollout risk by matching method to infrastructure
- Cleaner handoff to activation, client routing, and verification

## Advantages (source-backed only)

| Claim | Status |
| ----- | ------ |
| Three supported install paths (SAB, cloud, Linux TAR) | **Confirmed** — this page and linked child guides |
| Turnkey speed and automation for SAB path | **Confirmed** — [SAB guide](/01-Getting_Started/03-Install_SafeSquid/01-SafeSquid_Appliance_Builder) |
| Comparative performance vs other SWG installers | **Missing — escalate to CTO** |

## Call to action

Pick one method below, complete installation, then continue with [Activate Your License](/01-Getting_Started/04-Activate).

SafeSquid offers three installation paths depending on your infrastructure:

- **Appliance Builder (SAB)** — Full turnkey image (OS + SafeSquid + services) for bare metal or VM
- **Cloud Deployment** — Deploy on AWS, Azure, DigitalOcean, or private cloud
- **Linux Server** — Install SafeSquid on an existing Linux server using TAR package

All methods produce an operational node ready for license activation and client connectivity.

:::note
**Prerequisites**

- Complete [Deployment Planning](/01-Getting_Started/01-Deployment_Planning) to size hardware and prepare your environment
- Download your [activation key](/01-Getting_Started/02-Register) (you'll need it after installation)
- Server or VM meeting [hardware requirements](/01-Getting_Started/01-Deployment_Planning#hardware-sizing)

:::

## Which Method Should I Use?

| **Environment** | **Recommended Method** | **Why** |
|-----------------|------------------------|---------|
| New bare metal server | [SafeSquid Appliance Builder](/01-Getting_Started/03-Install_SafeSquid/01-SafeSquid_Appliance_Builder) | Turnkey image with hardened OS and all dependencies |
| New VM (VMware, Hyper-V, KVM) | [SafeSquid Appliance Builder](/01-Getting_Started/03-Install_SafeSquid/01-SafeSquid_Appliance_Builder) | Pre-configured networking, monitoring, and DNS |
| AWS, Azure, DigitalOcean | [Cloud Deployment](/01-Getting_Started/03-Install_SafeSquid/02-Cloud_Deployment) | Cloud-optimized images and cloud-init support |
| Existing Linux server | [Linux Server](/01-Getting_Started/03-Install_SafeSquid/03-Linux_Server) | Minimal footprint; you manage OS and services |
| Private cloud (OpenStack, Proxmox) | [SafeSquid Appliance Builder](/01-Getting_Started/03-Install_SafeSquid/01-SafeSquid_Appliance_Builder) | Complete appliance for self-managed infrastructure |

**Still unsure?** Start with [Deployment Planning](/01-Getting_Started/01-Deployment_Planning) to size hardware and plan topology.

## Installation Methods

### [SafeSquid Appliance Builder](/01-Getting_Started/03-Install_SafeSquid/01-SafeSquid_Appliance_Builder)

**Recommended for new deployments.** SAB builds a turnkey ISO with a security-hardened OS, SafeSquid, Monit, BIND9, and optimized disk layout. Boot from ISO, answer a few prompts, and deploy.

**Use this when:** You need a complete appliance on bare metal or a new VM.

**Installation time:** ~15-20 minutes (10 min prompts + 5-10 min automated install).

---

### [Cloud Deployment](/01-Getting_Started/03-Install_SafeSquid/02-Cloud_Deployment)

Deploy SafeSquid on AWS, Azure, DigitalOcean, or private cloud using cloud images or cloud-init. Full policy and inspection capabilities in the cloud with auto-scaling and cloud-native networking.

**Use this when:** You're deploying to public or private cloud infrastructure.

**Installation time:** ~10-15 minutes (cloud instance provisioning + SafeSquid setup).

---

### [Linux Server](/01-Getting_Started/03-Install_SafeSquid/03-Linux_Server)

Install SafeSquid from a TAR package on an existing Debian, Ubuntu, or RHEL-based server. You manage OS updates, networking, and supporting services separately.

**Use this when:** You already have a configured Linux server and want to add SafeSquid only.

**Installation time:** ~5-15 minutes (extract TAR + dependency install + service setup).

## After Installation

Once SafeSquid is installed, complete these steps in order:

1. **[Activate Your License](/01-Getting_Started/04-Activate)** — Upload your activation key to make the gateway fully operational
2. **[Connect Your Client](/01-Getting_Started/05-Connect_Your_Client/main)** — Configure at least one browser or endpoint to use the proxy
3. **[Verify Your Setup](/01-Getting_Started/06-Verify_Your_Setup)** — Confirm the service is running, licensed, and proxying traffic

Once verified, proceed to [SSL Inspection](/05-SSL_Inspection/main) to enable HTTPS filtering.
