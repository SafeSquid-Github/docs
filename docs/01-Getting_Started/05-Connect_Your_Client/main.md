---
title: Connect Your Client
slug: /Getting_Started/Connect_Your_Client
description: Configure browsers and applications to use SafeSquid as an HTTP proxy — from explicit proxy to enterprise deployment.
keywords:
  - SafeSquid proxy setup
  - browser proxy configuration
  - explicit proxy
  - PAC file
  - enterprise proxy deployment
---


# Route client traffic through SafeSquid proxy

Web traffic reaches SafeSquid only when clients use it as their proxy. This section covers how to configure clients: from explicit proxy (single browser or quick test) through PAC file, system-wide proxy, and enterprise rollout via GPO or MDM. Outcome: traffic from chosen clients flows through SafeSquid for policy enforcement and inspection.

## Client configuration guides

### [Explicit Proxy](/docs/Getting_Started/Connect_Your_Client/Explicit_Proxy/)
Single-browser or quick verification requires manual proxy settings in the browser. Explicit Proxy describes configuring the browser to use the SafeSquid IP and port. Suitable for testing and controlled environments. Use this document for quick verification or single-browser setup.

### [PAC File](/docs/Getting_Started/Connect_Your_Client/PAC_File/)
All browsers on a machine can use one proxy configuration via a Proxy Auto-Configuration (PAC) file. PAC File covers creating and deploying a PAC file for automated proxy selection and optional load balancing. Reduces per-browser configuration. Follow this document to deploy PAC-based proxy selection.

### [System-Wide Proxy](/docs/Getting_Started/Connect_Your_Client/System_Wide_Proxy/)
All applications on a machine must use the proxy for full coverage. System-Wide Proxy describes configuring the OS so every application uses SafeSquid. Non-browser apps and CLI tools are covered. Use this document for machine-wide proxy configuration.

### [Enterprise Deployment](/docs/Getting_Started/Connect_Your_Client/Enterprise_Deployment/)
Organizations need proxy settings rolled out at scale via GPO, Active Directory, or configuration management. Enterprise Deployment covers group policy, AD, Puppet, Ansible, and similar methods. Consistent configuration across the organization. Follow this document for organization-wide deployment.

### [Application-Specific Configuration](/docs/Getting_Started/Connect_Your_Client/Application_Specific_Configuration/)
Individual applications (Git, npm, Docker, email clients, CLI tools) require their own proxy configuration. Application-Specific Configuration describes proxy settings for each. Ensures non-browser traffic is inspected. Use this document to configure proxy for specific applications.

## Next steps

1. [Verify Your Setup](/docs/Getting_Started/Verify_Your_Setup/) — run smoke tests to confirm the proxy is receiving traffic.
2. [SSL Inspection](/docs/SSL_Inspection/main/) — enable HTTPS decryption so SafeSquid can inspect and filter encrypted traffic.