---
title: Getting Started
description: Learn how to get started with SafeSquid Secure Web Gateway, the world's most advanced HTTP Proxy Server for Application Layer Security.
keywords:
  - SafeSquid
  - Secure Web Gateway
  - HTTP Proxy Server
  - Application Layer Security
  - Zero-Trust Web Security
---

## Welcome to SafeSquid!

SafeSquid is the world's most advanced HTTP Proxy Server, specifically designed for Application Layer Security. The purpose-oriented architecture promises scalable performance while ensuring comprehensive mitigation of Layer 7 threats. SafeSquid-based Secure Web Gateway (SWG) shields enterprises from advanced cyber‑threats by delivering robust perimeter-level application layer security.

Learn more [about SafeSquid SWG!](/docs/01-About%20SafeSquid%20SWG/main.md)

## Typical High-Level Solution Architecture

![Solution Architecture](/img/Getting-Started/Getting_Started_with_SafeSquid_Secure_Web_Gateway/image1.webp)

In a typical organization setting, the amalgamation of [SafeSquid Application Eco-system](/docs/02-SafeSquid%20SWG/01-Application%20Ecosystem.md) constitutes the complete SWG solution.

## Hardware Provisioning

Engineered for adaptability, SafeSquid is a fully software-based open-architecture solution supporting non-proprietary hardware, platform-agnostic deployment, and seamless integration with all network solutions. SafeSquid SWG is compatible with standard Intel architecture server-class hardware, operable as a virtual guest on varied virtualization platforms, or configurable in private cloud settings.

You can self-host for 10 users with resources as low as 4 cores, 4GB RAM.

To cater to your organization's web traffic load, estimate the Hardware Requirements optimal to deploy SafeSquid.

## Get activation key

The product activation key is the unique secret required to activate and validate the authenticity of your SafeSquid.

To generate the product activation key, create an account on the SafeSquid Self-Service portal. Registration is free and quick and does not require credit card details. Using a business email unlocks enterprise account benefits, like team onboarding and POC support. After registration, download the activation key.

## Installation

You can set up your secure web gateway using different installation mechanisms based on your deployment plan.

### [SafeSquid Appliance Builder (Recommended)](/docs/03-Installation/02-On-Premise/main.md)

[SafeSquid Appliance Builder(SAB)](https://downloads.safesquid.com/appliance/safesquid.iso) is a security-enhanced ISO of the latest minimal Ubuntu LTS. On booting from the SAB ISO, Ubuntu is automatically installed, and SafeSquid SWG is downloaded and deployed with all necessary dependency libraries, and services. Using the SAB ISO, you may [create a virtual appliance on any virtualization infrastructure or create a hardware appliance on standard Intel Server hardware.](/docs/03-Installation/02-On-Premise/main.md)

### SafeSquid On Cloud

To setup SafeSquid SWG on your preferred Cloud PaaS platform or your private cloud infrastructure, use our [cloud-init script](https://raw.githubusercontent.com/SafeSquid-Github/safesquid_cloud-init/main/safesquid_cloud-init.yaml).

### Building from source

If you want to setup SafeSquid on already existing infrastructure or if you want to use another Operating System in the Linux family other than Ubuntu, you can use the [TAR package](https://downloads.safesquid.com/appliance/binary/safesquid-2024.0715.1656.3-swg-concept.tar.gz). You will need to make some additional configurations, like [Monit](/docs/13-System%20Audit/Monit.md) and [BIND9](/docs/14-Performance%20Optimisation/01-Internalisae%20DNS/Bind.md) services used by SafeSquid.

## Activate your SafeSquid

After successful installation, you must [activate your SafeSquid instance](/docs/04-License%20Activation/main.md).

Configure your browser to use SafeSquid as the HTTP(S) proxy, access SafeSquid Interface [http://safesquid.cfg/](http://safesquid.cfg/), and upload the activation key.

You can validate the activation under the license details section under the Support tab on the Interface.

:::note

The same key must be uploaded on every SafeSquid instance in the proxy cluster to ensure seamless synchronisation between them.

:::

## SSL Inspection

Since most of the web traffic is now encrypted, [enable HTTPS Inspection](/docs/07-SSL%20Inspection/Setup%20SSL%20Inspection.md) to safeguard from hidden threats.

On the [Self-Service Portal](/docs/05-Architecture/Management_of_Self-Service_Portal.md), configure your Enterprise CA (Certificate Authority) as the Root SSL certificate. If you do not have an Enterprise CA, generate SafeSquid 's Self-Signed Certificate. Import the Root SSL certificate into client browsers' trusted authorities.

## User Authentication

SafeSquid SWG has a robust user and group identity management system, with multiple authentication options.

You can set up user authentication based on [device-specific network identifiers](/docs/06-User%20Identification/03-Network%20Identifiers/main.md), or your preferred credential verification system. Integrate with enterprise-grade directory services like [Microsoft® Windows Active Directory](/docs/06-User%20Identification/02-Directory%20Services/Active%20Directory/main.md),and [OpenLDAP](/docs/06-User%20Identification/02-Directory%20Services/OpenLDAP/main.md).

Furthermore, configure user verification via [basic authentication](/docs/06-User%20Identification/Browser%20Based%20Authentication.md) or [Kerberos (SSO)](/docs/06-User%20Identification/Kerberos%20SSO.md) for seamless domain network access.

## [Custom Categories](/docs/09-Profiling%20Engine/Website%20Categorization.md)

Manually classify websites into custom categories on the SafeSquid Self-Service Portal or SafeSquid interface as per the business use case.

## Security Policies

Achieve Zero-Trust Web Security strategy by enforcing the organization's web usage policies using SafeSquid's Polymath Profiling Engine, and Advanced Traffic Flow Management.

## [Reporting](/docs/13-System%20Audit/Real%20Time%20Statistics-Repoorting%20Module.md)

SafeSquid offers in-depth reporting for process audit, system performance, and traffic forensic analysis. The reporting suite includes detailed web usage reports, threat prevention reports, system reports, and performance reports. An interactive real-time dashboard, also, offers customization, export, and distribution options to suit the organization's needs.

## Integrate with other security systems

Integrate with existing security infrastructure, such as firewalls, endpoint protection platforms, third-party malware detection systems, and SIEM systems, for a cohesive security posture.

## Customisation

SafeSquid provides extensive options for customization to meet specific organizational demands and user experiences.

You may alter the dashboard, reporting interfaces, and analytics to suit user preferences and requirements. You can also [customize blocking templates](/docs/18-Custom%20Templates/main.md) to conform to organizational branding and communication styles. For specialized tasks and automation, administrators can use our comprehensive customisation library or create their custom bash scripts.

## [Troubleshooting](/docs/21-Troubleshooting/main.md)

Troubleshooting is a cakewalk for any average Linux technician using the comprehensive SafeSquid Logs.

You will find all the logs under **/var/log/safesquid/** directory. Tweak the LOGLEVEL to control the depth of logging required. In addition to this, you will find prompt assistance from the SafeSquid Community at any time.
