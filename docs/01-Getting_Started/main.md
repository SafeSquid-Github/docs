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

# Deploy SafeSquid SWG from planning to client connectivity

## Deployment path from planning through client configuration

SafeSquid is an HTTP proxy server for application-layer security. SafeSquid-based Secure Web Gateway (SWG) provides perimeter-level security for enterprise web traffic. This section guides deployment from planning through activation and client configuration.

Learn more [about SafeSquid SWG](../02-SafeSquid_SWG/main.md).

## Deployment and connectivity guides

### [Deployment Planning](01-Deployment_Planning.md)
Organizations must size hardware and plan network topology before deploying a web gateway. Deployment Planning addresses capacity, NICs, and environment preparation so the SWG fits the target environment. Use this document to avoid under- or over-provisioning and to align with network architecture. Follow the steps to plan deployment and prepare the environment.

### [Register](02-Register.md)
SafeSquid requires an activation key from the Self-Service Portal. Register creates an account and downloads the product activation key so installation and activation can proceed. Organizations obtain keys without credit card for evaluation or purchase. Create an account on the Self-Service Portal and download the activation key.

### [Install SafeSquid](03-Install_SafeSquid/main.md)
SafeSquid must be installed via Appliance Builder (SAB), cloud deployment, or Linux TAR package. Install SafeSquid compares methods and provides step-by-step installation for each option. Choosing the right method avoids rework and fits the organization's infrastructure. Follow the guide to deploy the proxy using SAB, cloud, or Linux TAR.

### [Activate](04-Activate.md)
The activation key must be uploaded and the license verified before the gateway is fully operational. Activate describes uploading the key and confirming license status in the SafeSquid interface. Verification ensures the product is licensed and support is available. Upload the activation key and verify the license using this document.

### [Connect Your Client](05-Connect_Your_Client/main.md)
Clients must be configured to use the proxy (browser, PAC, system-wide, or enterprise deployment). Connect Your Client covers explicit proxy, PAC file, system-wide proxy, enterprise deployment, and application-specific configuration. Administrators choose the appropriate method for the environment. Configure clients using the relevant guide in this section.

### [Verify Your Setup](06-Verify_Your_Setup.md)
Deployment must be validated with smoke tests before production use. Verify Your Setup provides quick checks to confirm end-to-end connectivity and policy enforcement. Validation reduces risk of misconfiguration and supports handover to operations. Run the verification steps to confirm the setup.

### [Next Steps](07-Next_Steps.md)
After the gateway is running, SSL inspection, authentication, and security policies are typically configured. Next Steps points to SSL Inspection, Authentication, Profiling Engine, and scaling so administrators know where to continue. Use this document to plan the next configuration phase.

## Solution Architecture

![Solution Architecture](/img/Getting-Started/Getting_Started_with_SafeSquid_Secure_Web_Gateway/image1.webp)
The SafeSquid Application Ecosystem constitutes the complete SWG solution.
