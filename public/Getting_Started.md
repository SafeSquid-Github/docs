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

**Problem:** HTTPS-default web use bypasses coarse network controls; operators need application-layer policy, optional inspection, and auditable evidence.

**Outcome:** This section moves from concept to a controlled pilot: prerequisites, install paths, activation, admin access, client routing, and verification—then points to hardening topics (SSL inspection, authentication, DNS security).

## Introduction

### What is SafeSquid SWG?

Understand what SafeSquid controls and what risk it reduces. Read: [What is SafeSquid SWG?](/01-Getting_Started/09-What_is_SafeSquid_SWG)

### Who should use SafeSquid SWG?

Identify operator teams, stakeholders, and deployment contexts. Read: [Who should use SafeSquid SWG?](/01-Getting_Started/10-Who_should_use_SafeSquid_SWG)

### Core concepts

Learn the control model: traffic path, policy context, and evidence outputs. Read: [Core concepts](/01-Getting_Started/11-Core_concepts)

### Architecture

Review trust boundaries and component relationships before deployment design. Read: [Architecture](/01-Getting_Started/12-Architecture)

## Quickstart

Use this path to deploy a pilot with verifiable controls.

### Prerequisites

Validate system requirements, platform support, networking, identity, certificates, DNS, and firewall requirements. Read: [Prerequisites](/01-Getting_Started/07-Prerequisites)

### Install SafeSquid

Install using appliance, cloud image, or Linux package based on your environment. Read: [Install SafeSquid](/01-Getting_Started/03-Install_SafeSquid/main). Then complete [Verify Your Setup](/01-Getting_Started/06-Verify_Your_Setup) as part of installation validation.

### Access the Interface

Use `https://YOUR-SERVER-IP:8443` before proxy setup and `https://safesquid.cfg` after proxy routing is active. Read: [Access the Interface](/01-Getting_Started/08-Access_the_Interface)

### License Activation

Register, obtain your key, and activate license status in the interface. Read: [Activate Your License](/01-Getting_Started/04-Activate)

## Client Configuration

### Connect Your Client

Configure explicit proxy, PAC file, system-wide settings, or enterprise rollout profiles. Read: [Connect Your Client](/01-Getting_Started/05-Connect_Your_Client/main)

## Troubleshooting

If the UI does not load, activation fails, or clients cannot connect, use the troubleshooting guides for symptom-led diagnosis and fixes. Read: [Troubleshooting](/23-Troubleshooting/main)

## Next Steps

After pilot validation, harden policy in this order. Items 1-3 establish baseline control. Items 4-7 extend detection and prevention.

1. **[SSL Inspection](/05-SSL_Inspection/main)** — Most web traffic is encrypted. Enable SSL Inspection so SafeSquid can actually see and filter HTTPS content.

2. **[Authentication](/04-Authentication/main)** — Tie policy to directory users and groups, and use network signatures where devices cannot log in. For MFA, integrate with directory or PAM backends that enforce MFA; SafeSquid delegates credential validation (see that hub’s note on MFA).

3. **[Integrated DNS Security](/03-DNS_Security/main)** — Block malicious DNS queries, enforce policy-aware resolution, and mitigate DNS tunneling.

4. **[Profiling Engine](/07-Profiling_Engine/main)** — Profile requests by identity, application, content, and time so policies apply to the right traffic.

5. **[Access Restriction](/08-Access_Restriction/main)** — Define access control rules by URL category, application, user, and time window.

6. **[Malware Scanners](/14-Malware_Scanners/main)** — Scan downloads and content streams for malicious payloads.

7. **[Data Leakage Prevention](/09-Data_Leakage_Prevention/main)** — Prevent sensitive data exfiltration in uploads, downloads, and web posts using compliance templates and content rules.

### Production Deployment

When moving to production:
- Push client proxy settings to all endpoints using PAC, GPO, or MDM
- Deploy HA topology based on your continuity requirements
- Configure reporting, forensics, and retention for audit and incident response
- Integrate IAM, SIEM, and threat intelligence workflows
