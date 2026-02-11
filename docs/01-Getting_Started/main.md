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
<section class="section-strip">

# Getting Started

</section>

<section class="section-strip">

## Welcome to SafeSquid!

SafeSquid is a multi-threaded HTTP Proxy Server, specially designed for Layer 7 Perimeter Security. Zero Trust Web Security architecture promises scalable performance while ensuring comprehensive mitigation of Layer 7 threats.

SafeSquid-based Secure Web Gateway (SafeSquid SWG) enforces granular web access control, deep content mitigation, and real-time visibility in enterprise web traffic. This section guides deployment from planning through activation and client configuration.

Learn more [about SafeSquid SWG](/docs/SafeSquid_SWG/main/) — architecture overview, components, and configuration options.

</section>

<section class="section-strip">

## Deployment and connectivity guides

### [Deployment Planning](/docs/Getting_Started/Deployment_Planning/) — hardware sizing, network topology, and environment preparation
Organizations must size hardware and plan network topology before deploying a web gateway. This guide covers CPU/RAM/NIC requirements, disk I/O planning, HA topologies, and DR considerations. Use this document to avoid under- or over-provisioning and to align with network architecture.

### [Register](/docs/Getting_Started/Register/) — create account and download activation key
SafeSquid requires an activation key from the Self-Service Portal. This guide walks through account creation, license selection (trial or purchased), and key download. Organizations obtain keys without credit card for evaluation or purchase.

### [Install SafeSquid](/docs/Getting_Started/Install_SafeSquid/main/) — compare installation methods and deploy using SAB, cloud, or TAR
SafeSquid can be installed via Appliance Builder (SAB), cloud deployment, or Linux TAR package. This section compares methods and provides step-by-step installation for each option. Choosing the right method avoids rework and fits the organization's infrastructure.

### [Activate](/docs/Getting_Started/Activate/) — upload license key and verify activation
The activation key must be uploaded and the license verified before the gateway is fully operational. This guide covers uploading the key via the Self-Service Portal or SafeSquid interface, confirming license status, and troubleshooting activation failures.

### [Connect Your Client](/docs/Getting_Started/Connect_Your_Client/main/) — configure browsers, PAC files, system-wide proxy, or enterprise deployment
Clients must be configured to use the proxy. This section covers explicit proxy (manual browser config), PAC file (auto-discovery), system-wide proxy (OS-level), enterprise deployment (Group Policy, MDM), and application-specific configuration.

### [Verify Your Setup](/docs/Getting_Started/Verify_Your_Setup/) — smoke tests for connectivity and policy enforcement
Deployment must be validated before production use. This guide provides quick checks to confirm end-to-end connectivity, DNS resolution, SSL inspection, authentication, and basic policy enforcement.

### [Next Steps](/docs/Getting_Started/Next_Steps/) — post-deployment roadmap for SSL, authentication, policies, and scaling
After the gateway is running, SSL inspection, authentication, and security policies are typically configured. This guide points to SSL Inspection, Authentication, Profiling Engine, and scaling so administrators know where to continue.

</section>

<section class="section-strip">

## Solution Architecture

![Solution Architecture](/img/Getting-Started/Getting_Started_with_SafeSquid_Secure_Web_Gateway/image1.webp)
The SafeSquid Application Ecosystem constitutes the complete SWG solution.

</section>