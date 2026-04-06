---
title: Prerequisites
description: Baseline prerequisites for a successful SafeSquid pilot deployment.
keywords:
  - SafeSquid prerequisites
  - system requirements
  - network requirements
---

# Meet deployment prerequisites first

## Problems skipped prerequisites cause

Pilot installs fail when sizing, ports, DNS, or certificate rollout are undefined: proxy traffic never reaches SafeSquid, the administration interface stays unreachable, or HTTPS inspection breaks trust for users.

## Benefits of validating prerequisites first

- Fewer rebuilds and change windows
- Clear handoffs between security, network, and desktop owners
- Evidence-ready pilot scope (what is in-path versus out-of-scope)

## Advantages (source-backed only)

| Claim | Status |
| ----- | ------ |
| This page lists concrete ports (`8080`, `8443`) and host prep expectations | **Confirmed** — matches fields below |
| Comparative sizing vs other SWG vendors | **Missing — escalate to CTO** — no benchmark in repo |

## Call to action

Complete the checklists below, then continue to [Install SafeSquid](/01-Getting_Started/03-Install_SafeSquid/main).

Prepare these prerequisites before you install SafeSquid.

## Validate system and platform requirements

- Minimum `4 vCPU` and `8 GB RAM` for a pilot node
- Supported deployment targets: physical server, VM, or supported cloud image
- Root or sudo access on the host

Use [Deployment Planning](/01-Getting_Started/01-Deployment_Planning) to select a production-ready sizing model.

## Validate network and control prerequisites

- Inbound `8080/tcp` for proxy traffic from client networks
- Inbound `8443/tcp` for the administration interface
- Outbound internet access for downloads and license validation
- DNS resolution and NTP synchronization on the host

## Validate identity and trust prerequisites

- Admin account with rights to configure proxy on pilot clients
- Certificate deployment path for HTTPS inspection (GPO, MDM, or manual import)
- Firewall change window approved for pilot routing

## Next steps

Continue with [Install SafeSquid](/01-Getting_Started/03-Install_SafeSquid/main).
