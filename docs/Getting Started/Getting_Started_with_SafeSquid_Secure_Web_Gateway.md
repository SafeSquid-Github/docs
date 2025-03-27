---
title: Getting Started with SafeSquid Secure Web Gateway
description: Learn how to get started with SafeSquid Secure Web Gateway, the world's most advanced HTTP Proxy Server for Application Layer Security.
keywords:
  - SafeSquid
  - Secure Web Gateway
  - HTTP Proxy Server
  - Application Layer Security
  - Zero-Trust Web Security
image: /img/Getting-Started/Getting_Started_with_SafeSquid_Secure_Web_Gateway/image1.webp
---

## Welcome to SafeSquid!

SafeSquid is the world's most advanced HTTP Proxy Server, specifically designed for Application Layer Security.

The purpose-oriented architecture promises scalable performance while ensuring comprehensive mitigation of Layer 7 threats.

SafeSquid-based Secure Web Gateway (SWG) shields enterprises from advanced cyber‑threats by delivering robust perimeter-level application layer security.

Learn more [about SafeSquid SWG!](https://help.safesquid.com/portal/en/kb/articles/about-safesquid-secure-web-gateway)

## Typical High-Level Solution Architecture

![Solution Architecture](/img/Getting-Started/Getting_Started_with_SafeSquid_Secure_Web_Gateway/image1.webp)

In a typical organization setting, the amalgamation of [SafeSquid Application Eco-system](https://help.safesquid.com/portal/en/kb/articles/application-eco-system) constitutes the complete SWG solution.

## Deployment Provisioning

Engineered for adaptability, SafeSquid is a fully software-based open-architecture solution supporting non-proprietary hardware, platform-agnostic deployment, and seamless integration with all network solutions.

SafeSquid SWG is compatible with standard Intel architecture server-class hardware, operable as a virtual guest on varied
virtualization platforms, or configurable in private cloud settings.

To cater to your organisation's web traffic load, estimate the Hardware Requirements optimal to deploy SafeSquid.


| **CPU (cores)** | **RAM (GB)** | **HDD**  | **Max Concurrent Connections** | **Approx Users** |
|----------------|-------------|---------|------------------------------|-----------------|
| 4             | 4           | 160GB   | 40                           | 10              |
| 4             | 8           | 500GB   | 100                          | 25              |
| 4             | 16          | 1TB     | 500                          | 150             |
| 8             | 16          | 2TB     | 1000                         | 350             |
| 8             | 32          | 4TB     | 1500                         | 600             |
| 16            | 32          | 4TB     | 2000                         | 1000            |
| 16            | 64          | 8TB     | 3000                         | 1500            |

  Add 2 CPU cores and 4GB RAM per 100 concurrent connections
  Use processors with "AES-NI"

## Get activation key

The product activation key is the unique secret required to activate and validate the authenticity of your SafeSquid.

To generate the product activation key, create an account on the SafeSquid Self-Service portal. Registration is free and quick and does not require credit card details. Using a business email unlocks enterprise account benefits, like team onboarding and POC support. After registration, download the activation key.

## Installation

You can set up your secure web gateway using different installation mechanisms based on your deployment plan.

### [SafeSquid Appliance Builder (Recommended)](https://help.safesquid.com/portal/en/kb/articles/install-safesquid-secure-web-gateway-using-safesquid-appliance-builder)

[SafeSquid Appliance Builder(SAB)](https://downloads.safesquid.com/appliance/safesquid.iso) is a security-enhanced ISO of the latest minimal Ubuntu LTS. On booting from the SAB ISO, Ubuntu is automatically installed, and SafeSquid SWG is downloaded and deployed with all necessary dependency libraries, and services. Using the SAB ISO, you may [create a virtual appliance on any virtualization infrastructure or create a hardware appliance on standard Intel Server hardware.](https://help.safesquid.com/portal/en/kb/articles/install-safesquid-secure-web-gateway-using-safesquid-appliance-builder)

### SafeSquid On Cloud

To setup SafeSquid SWG on your preferred Cloud PaaS platform or your private cloud infrastructure, use our [cloud-init script](https://raw.githubusercontent.com/SafeSquid-Github/safesquid_cloud-init/main/safesquid_cloud-init.yaml).

### Building from source

If you want to setup SafeSquid on already existing infrastructure or if you want to use another Operating System in the Linux family other than Ubuntu, you can use the [TAR package](https://downloads.safesquid.com/appliance/binary/safesquid-2024.0715.1656.3-swg-concept.tar.gz). You will need to make some additional configurations, like [Monit](https://help.safesquid.com/portal/en/kb/articles/setup-monit-for-safesquid-monitoring) and [BIND9](https://help.safesquid.com/portal/en/kb/articles/bind-configuration-with-safesquid) services used by SafeSquid.

## Activate your SafeSquid

After successful installation, you must [activate your SafeSquid instance](https://help.safesquid.com/portal/en/kb/articles/activate-a-safesquid-instance).

[Configure your browser to use SafeSquid as the HTTP(S) proxy](https://help.safesquid.com/portal/en/kb/articles/how-to-configure-proxy-in-a-browser), access SafeSquid Interface [http://safesquid.cfg/](http://safesquid.cfg/), and upload the activation key.

You can validate the activation under the license details section under the Support tab on the Interface.

Note: The same key must be uploaded on every SafeSquid instance in the proxy cluster to ensure seamless synchronisation between them.

## SSL Inspection

Since most of the web traffic is now encrypted, [enable HTTPS Inspection](https://help.safesquid.com/portal/en/kb/articles/https-inspection) to safeguard from hidden threats.

On the [Self-Service Portal](https://help.safesquid.com/portal/en/kb/articles/access-the-self-service-portal), configure your Enterprise CA (Certificate Authority) as the Root SSL certificate. If you do not have an Enterprise CA, generate SafeSquid \'s Self-Signed Certificate. Import the Root SSL certificate into client browsers' trusted authorities.

## User Authentication

SafeSquid SWG has a robust user and group identity management system, with multiple authentication options.

You can set up user authentication based on [device-specific network identifiers](https://help.safesquid.com/portal/en/kb/articles/device-specific-network-identifiers), or your preferred credential verification system. Choose a combination of [in-built local credential storage](https://help.safesquid.com/portal/en/kb/articles/in-built-local-credential-storage),
[Linux-PAM](https://help.safesquid.com/portal/en/kb/articles/linux-pam), or [integrate with enterprise-grade directory services](https://help.safesquid.com/portal/en/kb/articles/integrate-with-enterprise-grade-directory-services),
like [Microsoft® Windows Active Directory](https://help.safesquid.com/portal/en/kb/articles/a-comprehensive-guide-on-how-to-integrate-windows-active-directory),and [OpenLDAP](https://help.safesquid.com/portal/en/kb/articles/integrate-openldap-with-safesquid).

Furthermore, configure user verification via [basic authentication](https://help.safesquid.com/portal/en/kb/articles/integrate-active-directory-for-simple-authentication) or [Kerberos (SSO)](https://help.safesquid.com/portal/en/kb/articles/kerberos-sso-authentication-setup) for seamless domain network access. You may also implement [Multi-Factor Authentication](https://help.safesquid.com/portal/en/kb/articles/multi-factor-authentication) by combining IP-based and credential-based authentication for heightened security.

## [Custom Categories](https://help.safesquid.com/portal/en/kb/articles/manage-custom-web-site-categorization)

Manually classify websites into custom categories on the SafeSquid Self-Service Portal or SafeSquid interface as per the business use case.

## Security Policies

Achieve Zero-Trust Web Security strategy by enforcing the organisation's web usage policies using SafeSquid's Polymath Profiling Engine, and Advanced Traffic Flow Management.

Refer to [How To](https://help.safesquid.com/portal/en/kb/how-to-s) section to gauge all configurations possible with SafeSquid.

## [Reporting](https://help.safesquid.com/portal/en/kb/articles/reporting-dashboard)

SafeSquid offers in-depth reporting for process audit, system performance, and traffic forensic analysis. The reporting suite includes detailed web usage reports, threat prevention reports, system reports, and performance reports. An interactive real-time dashboard, also, offers customization, export, and distribution options to suit the organization\'s needs.

## Integrate with other security systems

Integrate with existing security infrastructure, such as firewalls, endpoint protection platforms, third-party malware detection systems, and SIEM systems, for a cohesive security posture.

## Customisation

SafeSquid provides extensive options for customization to meet specific organizational demands and user experiences.
 
You may alter the dashboard, reporting interfaces, and analytics to suit user preferences and requirements. You can also [customize blocking templates](https://help.safesquid.com/portal/en/kb/articles/create-custom-templates) to conform to organizational branding and communication styles. For specialized tasks and automation, administrators can use our comprehensive customisation library or create their custom bash scripts.

## [Troubleshooting](https://help.safesquid.com/portal/en/kb/troubleshooting)

Troubleshooting is a cakewalk for any average Linux technician using the comprehensive SafeSquid Logs.

You will find all the logs under **/var/log/safesquid/** directory.
Tweak the LOGLEVEL to control the depth of logging required. In addition to this, you will find prompt assistance from [the SafeSquid Community](https://help.safesquid.com/portal/en/community) at any time.
