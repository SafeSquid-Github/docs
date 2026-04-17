---
title: Prerequisites
description: Baseline prerequisites and installation method selection for a SafeSquid pilot deployment.
keywords:
  - SafeSquid prerequisites
  - system requirements
  - network requirements
  - SafeSquid installation
  - install method
---

# Meet deployment prerequisites first

Pilot installs fail when sizing, ports, DNS, or certificate rollout are undefined: proxy traffic never reaches SafeSquid, the administration interface stays unreachable, or HTTPS inspection breaks trust for users.

Validating prerequisites first means:

- Fewer rebuilds and change windows
- Clear handoffs between security, network, and desktop owners
- Evidence-ready pilot scope (what is in-path versus out-of-scope)

## Validate system and platform requirements

- Minimum `4 vCPU` and `8 GB RAM` for a pilot node
- Supported deployment targets: physical server, VM, or supported cloud image
- Root or sudo access on the host

Use [Deployment Planning](/Deployment_Planning) to select a production-ready sizing model.

## Validate network and control prerequisites

- Inbound `8080/tcp` for proxy traffic from client networks
- Inbound `8443/tcp` for the administration interface
- Outbound internet access for downloads and license validation
- DNS resolution and NTP synchronization on the host

## Validate identity and trust prerequisites

- Admin account with rights to configure proxy on pilot clients
- Certificate deployment path for HTTPS inspection (GPO, MDM, or manual import)
- Firewall change window approved for pilot routing

## Choose your installation method

Once prerequisites are validated, pick one installation method based on your infrastructure:

| **Environment** | **Recommended Method** | **Why** |
|-----------------|------------------------|---------|
| New bare metal server | [SafeSquid Appliance Builder](/SafeSquid_Appliance_Builder) | Turnkey image with hardened OS and all dependencies |
| New VM (VMware, Hyper-V, KVM) | [SafeSquid Appliance Builder](/SafeSquid_Appliance_Builder) | Pre-configured networking, monitoring, and DNS |
| AWS, Azure, DigitalOcean | [Cloud Deployment](/Cloud_Deployment) | Cloud-optimized images and cloud-init support |
| Existing Linux server | [Linux Server](/Linux_Server) | Minimal footprint; you manage OS and services |
| Private cloud (OpenStack, Proxmox) | [SafeSquid Appliance Builder](/SafeSquid_Appliance_Builder) | Complete appliance for self-managed infrastructure |

**Still unsure?** Start with [Deployment Planning](/Deployment_Planning) to size hardware and plan topology.

### [Cloud Deployment](/Cloud_Deployment)

Deploy SafeSquid on AWS, Azure, DigitalOcean, or private cloud using cloud images or cloud-init. Full policy and inspection capabilities in the cloud with auto-scaling and cloud-native networking.

**Use this when:** You're deploying to public or private cloud infrastructure.

**Installation time:** ~10–15 minutes (cloud instance provisioning + SafeSquid setup).

---

### [SafeSquid Appliance Builder](/SafeSquid_Appliance_Builder)

**Recommended for new deployments.** SAB builds a turnkey ISO with a security-hardened OS, SafeSquid, Monit, BIND9, and optimized disk layout. Boot from ISO, answer a few prompts, and deploy.

**Use this when:** You need a complete appliance on bare metal or a new VM.

**Installation time:** ~15–20 minutes (10 min prompts + 5–10 min automated install).

---

### [Linux Server](/Linux_Server)

Install SafeSquid from a TAR package on an existing Debian, Ubuntu, or RHEL-based server. You manage OS updates, networking, and supporting services separately.

**Use this when:** You already have a configured Linux server and want to add SafeSquid only.

**Installation time:** ~5–15 minutes (extract TAR + dependency install + service setup).
