---
title: Cloud Deployment
description: Deploy SafeSquid Secure Web Gateway on AWS, Azure, DigitalOcean, or any cloud platform using Cloud-IMG, cloud-init, or SAB ISO.
keywords:
  - SafeSquid cloud deployment
  - SafeSquid cloud-init
  - SafeSquid Cloud-IMG
  - cloud SWG
---

# Cloud Deployment

Deploy SafeSquid on any cloud or private cloud infrastructure. Four methods are available — pick the one that fits your platform.

## Why Cloud SWG?

Traditional on-premises SWG worked when all employees shared a single LAN gateway. As organizations expand globally and adopt BYOD and remote work, web traffic originates from endpoints outside the central network. Backhauling this traffic to an on-premises SWG creates latency, doubles bandwidth through the gateway, and degrades user experience.

Cloud SWG eliminates backhauling. Remote workers route directly to the nearest SWG instance. Traffic from remote offices consolidates at edge devices (e.g., SD-WAN) before reaching the cloud SWG. Inspected traffic then routes directly to the internet.

**Benefits:**
- Decentralized inspection reduces bottlenecks and latency
- Cloud scalability — dynamically allocate resources based on demand
- Pay-as-you-go model reduces capital expenses
- No reliance on N+1 redundancy at a single site

SafeSquid is cloud-agnostic — deploy on AWS, Azure, GCP, DigitalOcean, or any private cloud without vendor lock-in.

## Deployment Methods

### Option 1: Cloud-IMG (Fastest)

Import the prebuilt SafeSquid image directly into your cloud platform's custom image system.

**Download:** [safesquid-swg.img](http://downloads.safesquid.com/appliance/cloud-img/safesquid-swg.img)

1. **Upload** the image to your cloud provider (e.g., AWS AMI import, Azure managed disk, DigitalOcean custom image).
2. **Launch** an instance from the imported image.
3. **Log in** via SSH with default credentials: `administrator` / `safesquid`.

### Option 2: Cloud-Init

Use the SafeSquid cloud-init script for automated provisioning on any cloud-init-compatible platform (AWS, Azure, DigitalOcean, GCP, etc.).

```bash title="Download the cloud-init configuration"
curl -O https://raw.githubusercontent.com/SafeSquid-Github/safesquid_cloud-init/main/safesquid_cloud-init.yaml
```

1. **Pass the YAML** as user-data when launching your instance.
2. **Wait** for provisioning to complete (check `/var/log/cloud-init-output.log`).
3. **Log in** via SSH.

:::tip
Review and customise the cloud-init YAML before deploying — adjust network settings, hostname, and disk layout as needed.
:::

### Option 3: SAB ISO on Cloud VM

Attach the [SAB ISO](https://downloads.safesquid.com/appliance/safesquid.iso) to a cloud VM and follow the [Appliance Builder installation steps](01-SafeSquid_Appliance_Builder.md).

### Option 4: TAR Package on Existing Cloud VM

If you already have a Linux VM running, install SafeSquid using the [TAR package method](03-Linux_Server.md).

## Verify the Deployment

SSH into the instance and confirm SafeSquid is running:

```bash title="Check port 8080"
netstat -lntp | grep 8080
```

```bash title="Check service status"
/etc/init.d/safesquid status
```

```bash title="Check storage layout"
lsblk
```

## Security Configuration

:::caution
Do not expose port 8080 to the public internet without authentication and access controls.
:::

- **Restrict inbound access** to port 8080 using security groups or cloud firewall rules. Allow only trusted source IPs or VPN ranges.
- **Use VPN or ZTNA** for remote user access to the proxy.
- **Place SafeSquid in a private subnet** where possible, fronted by a load balancer or VPN gateway.

## Next Steps

1. **[Activate your license](../../04-Activate.md)**
  2. **[Connect a browser](../../05-Connect_Your_Client/main.md)** to verify traffic flows
  3. **[Enable SSL Inspection](../../05-SSL_Inspection/main.md)** for HTTPS visibility
