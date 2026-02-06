---
title: Getting Started
description: Get SafeSquid Secure Web Gateway running in 15 minutes — free, no agents, no credit card.
keywords:
  - SafeSquid
  - Secure Web Gateway
  - getting started
  - quick start
---

# Getting Started

## Welcome to SafeSquid!

SafeSquid is the world's most advanced HTTP Proxy Server, designed specifically for Application Layer Security. The purpose-oriented architecture delivers scalable performance while ensuring comprehensive mitigation of Layer 7 threats. SafeSquid-based Secure Web Gateway (SWG) shields enterprises from advanced cyber‑threats by delivering robust perimeter-level application layer security.

Learn more [about SafeSquid SWG](/docs/SafeSquid%20SWG/main).

:::info What You'll Need
- A server or VM — minimum 4 CPU cores, 8 GB RAM, 2 NICs
- Internet connectivity for downloads and license activation
- A browser on a machine that can reach the server
:::

## Steps to a Working SWG

1. **[Plan your deployment](/docs/Getting%20Started/Deployment%20Planning)** — Size hardware, plan network topology, and prepare your environment.
2. **[Register and get your activation key](/docs/Getting%20Started/Register)** — Create an account on the Self-Service Portal and download your key.
3. **[Install SafeSquid](/docs/Getting%20Started/Install%20SafeSquid/main)** — Deploy using the Appliance Builder ISO, cloud-init, or a TAR package.
4. **[Activate your license](/docs/Getting%20Started/Activate)** — Upload your activation key and verify the license.
5. **[Connect your client](/docs/Getting%20Started/Connect%20Your%20Client/main)** — Configure a browser or deploy proxy settings across your environment.

:::tip Not sure which installation method to choose?
Most users should start with the **Appliance Builder (SAB)** — it's the fastest way to a production-ready setup. See the **[Installation](/docs/Getting%20Started/Install%20SafeSquid/main)** page for a full comparison.
:::

## Solution Architecture

![Solution Architecture](/img/Getting-Started/Getting_Started_with_SafeSquid_Secure_Web_Gateway/image1.webp)
*The amalgamation of the SafeSquid Application Eco-system constitutes the complete SWG solution.*

## After Setup

Once your gateway is running:

- **[Verify your setup](/docs/Getting%20Started/Verify%20Your%20Setup)** — Run quick smoke tests to confirm everything works end-to-end.
- **[Next Steps](/docs/Getting%20Started/Next%20Steps)** — SSL inspection, authentication, security policies, and scaling.

### Essential Configuration

| Feature | Why It Matters |
|---------|---------------|
| **[SSL Inspection](/docs/SSL%20Inspection/main)** | Most web traffic is encrypted. Enable HTTPS inspection so SafeSquid can see and filter content. |
| **[Authentication](/docs/Authentication/main)** | Connect Active Directory, OpenLDAP, or use network-based identity so policies apply per user. |
| **[Custom Categories](/docs/Profiling%20Engine/Web%20Categorization)** | Classify websites into custom categories on the Self-Service Portal or SafeSquid interface. |
| **[Security Policies](/docs/Profiling%20Engine/main)** | Enforce Zero-Trust Web Security using SafeSquid's Polymath Profiling Engine. |
| **[Reporting](/docs/Audit%20&%20Forensics/main)** | In-depth forensics, usage reports, threat prevention reports, and real-time dashboards. |

### Integration

SafeSquid integrates with existing security infrastructure — firewalls, endpoint protection, third-party malware detection systems (ICAP), DLP systems, and SIEM platforms. See [Integrations](/docs/Integrations/main).

### Customisation

Alter dashboards, reporting interfaces, and [blocking templates](/docs/Customisation/Custom%20Templates) to match organizational branding. Administrators can also create custom bash scripts for specialized automation. See [Customisation](/docs/Customisation/main).

## Troubleshooting

All logs are under `/var/log/safesquid/`. Adjust `LOGLEVEL` to control verbosity. For detailed guidance, see [Troubleshooting](/docs/Troubleshooting/main).
