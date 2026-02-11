---
title: Getting Started
slug: /Getting_Started
description: Get SafeSquid Secure Web Gateway running — deployment planning, registration, installation, activation, and client connectivity.
keywords:
  - SafeSquid
  - Secure Web Gateway
  - getting started
  - quick start
---

# Getting Started

## [What is SafeSquid SWG?](/docs/SafeSquid_SWG/main/)

SafeSquid SWG (Secure Web Gateway) is the full product: proxy, policy console, reporting, and DNS security. SafeSquid is a multi-threaded HTTP Proxy Server, specially designed for Layer 7 Perimeter Security. Zero Trust Web Security architecture promises scalable performance while ensuring comprehensive mitigation of Layer 7 threats.

![SafeSquid SWG: proxy layer, policy and configuration, reporting, and DNS security](/img/Getting-Started/Getting_Started_with_SafeSquid_Secure_Web_Gateway/image1.webp)
*SafeSquid SWG: proxy layer, policy and configuration, reporting, and DNS security.*

SafeSquid SWG enforces granular web access control, deep content mitigation, and real-time visibility in enterprise web traffic.

This section is the fastest path to a working pilot: administrators and evaluators follow a linear sequence from sizing and registration through installation, license activation, and client connectivity. By the end you have a deployed SafeSquid node, an active license, and clients sending web traffic through the proxy.

## Quickstart to pilot SWG deployment

### [Deployment Planning](/docs/Getting_Started/Deployment_Planning/)

SafeSquid is platform-agnostic: single node, HA (active-passive or active-active), cloud VMs, or existing Linux hosts. The deployment guide covers sizing, hardware matrix, network bonding, and DR. Single node for pilot; plan HA and DR before production.

:::tip For pilot evaluation, you'll need:
* A server or VM — minimum 4 CPU cores, 8 GB RAM, 2 NICs
* Internet connectivity for downloads and license activation
* A browser on a machine that can reach the server 
:::

### [Register and get your key](/docs/Getting_Started/Register/) 

Register on the [SafeSquid Self Service portal](https://key.safesquid.com) and download the activation key.

:::info Key is generated automatically immediately after sign-up
:::

### [Install SafeSquid](/docs/Getting_Started/Install_SafeSquid/main/)

SafeSquid can be installed via Appliance Builder ISO (SAB), cloud image, or as a TAR package.

:::tip Not sure which installation method to choose?
* **SAB (Recommended)** — new bare metal or VM; fastest to production-ready
* **Cloud** — AWS, Azure, DigitalOcean, or private cloud; use the cloud deployment guide.
* **Linux TAR** — existing Linux server; add SafeSquid only, no full appliance.
:::

### [Activate Your License](/docs/Getting_Started/Activate/)
Upload the activation key in the SafeSquid admin interface (e.g. [https://safesquid.cfg](https://safesquid.cfg) or your server's URL) to activate the license.

The activation key must be uploaded and the license verified before the gateway is fully operational.

:::info Gateway will be operational after license verification
:::

### [Connect Your Client](/docs/Getting_Started/Connect_Your_Client/main/) 
Clients can be configured to use the proxy in the browser settings, via a PAC (Proxy Auto-Configuration) file, or as system-wide proxy pushed via MDM or GPO (Group Policy) policy.

:::tip For the fastest check, use Explicit proxy on one browser, then [Verify Your Setup](/docs/Getting_Started/Verify_Your_Setup/).
:::

## Next Steps
We recommend configuring security policies in order — each builds on the previous.

1. Most web traffic is encrypted. Enable [SSL Inspection](/docs/SSL_Inspection/main/) so SafeSquid can actually see and filter content.

2. For [Authentication](/docs/Authentication/main/), combine Active Directory user groups with network-signatures for multi-factor authentication.

3. [Integrated DNS Security](/docs/DNS_Security/main/) blocks malicious DNS queries, enforces policy-aware resolution, and mitigates DNS tunneling.

4. Configure [Profiling Engine](/docs/Profiling_Engine/main/) to profile requests by identity, application, content, and time so policies apply to the right traffic.

5. Define [Access Restriction](/docs/Access_Restriction/main/) rules by URL category, application, user, and time window.

6. Scan downloads and content with [Malware Scanners](/docs/Malware_Scanners/main/) for detecting malicious content.

7. [Prevent Data Leakage](/docs/Data_Leakage_Prevention/main/) in uploads, downloads, and web posts using compliance templates and content rules.

:::info When going to production:
* Push client configuration to all endpoints using PAC files, system-wide proxy, GPO or MDM
* We strongly recommend clustering SafeSquid Instances for High Availability before deploying in production.
* Configure traffic forensics, usage reports, and real-time dashboards for visibility and compliance.
:::

## [Troubleshooting](/docs/Troubleshooting/main/)

If the UI doesn't load, activation fails, or clients can't reach the proxy, see Troubleshooting for logs and common fixes. Logs, diagnostics, and community support when help is needed.