---
title: SafeSquid SWG Overview
slug: /SafeSquid_SWG
description: SafeSquid Secure Web Gateway architecture and components — configuration portal, proxy cluster, reporting, DNS security, and supporting services.
keywords:
  - SafeSquid SWG
  - Secure Web Gateway
  - Web Proxy
  - Application Layer Firewall
  - Configuration Portal
  - Proxy Cluster
  - Zero-Trust Web Security
---

# SafeSquid SWG architecture and components

SafeSquid Secure Web Gateway (SWG) is a purpose-built HTTP proxy for application-layer security. It intercepts HTTP/HTTPS traffic, inspects Layer 7 content, and enforces access control, URL filtering, SSL inspection, and data leakage prevention. This section describes the SWG architecture and links to configuration and component documentation.

SafeSquid SWG consolidates proxy enforcement, policy management, self-service portal, reporting, integrated DNS security, and supporting services into one platform. The documents below guide administrators through each component.

## SWG component and configuration guides

### [Configuration Portal](01-Configuration_Portal.md)
Administrators need a single interface to define and manage proxy policies. Configuration Portal provides the web-based administrative interface for SafeSquid policy and profile configuration. The centralized console reduces errors and ensures consistent enforcement across access restriction, SSL inspection, and content security. Use the Configuration Portal to configure and verify policies.

### [Application Ecosystem](02-Application_Ecosystem.md)
Enterprises need to understand how SafeSquid components work together. Application Ecosystem describes the proxy cluster, policy console, self-service portal, reporting, DNS security, and supporting services. The document clarifies architecture and integration points for deployment planning. Reference Application Ecosystem to plan deployment and integration.

### [SafeSquid Proxy Cluster](03-SafeSquid_Proxy_Cluster.md)
High availability and scale require multiple proxy nodes. SafeSquid Proxy Cluster documents the central enforcement layer for HTTP/HTTPS traffic and cluster topology. Load balancing and failover enable production resilience. Configure the proxy cluster using this document for scaling and availability.

### [Self-Service Portal](04-Self-Service_Portal.md)
Activation keys and Root CA certificates require a cloud-managed workflow. Self-Service Portal covers the web portal for activation keys, license management, and SSL certificate generation. Organizations reduce dependency on support for routine tasks. Use the Self-Service Portal to obtain activation keys and manage certificates.

### [Reporting Service](05-Reporting_Service.md)
Visibility into traffic and policy enforcement is required for compliance and troubleshooting. Reporting Service describes dashboards, reports, and forensic logging. Audit trails and usage analytics support evidence for audits. Configure reporting using this document for dashboards and export options.

### [Integrated DNS Security](06-Integrated_DNS_Security.md)
DNS is a common vector for bypass and malware. Integrated DNS Security documents the hardened internal DNS resolver and policy-aware resolution. Blocking malicious domains and mitigating DNS tunneling improves defense-in-depth. Enable and configure Integrated DNS Security using this document.

### [Supporting Services](07-Supporting_Services/main.md)
Production deployments need monitoring and dependency services. Supporting Services covers Monit, BIND, and NTP used by SafeSquid. High availability and correct time and DNS depend on these services. Configure Supporting Services using this document for production readiness.
