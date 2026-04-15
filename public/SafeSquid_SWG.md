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

# SafeSquid SWG Architecture and Components

SafeSquid Secure Web Gateway (SWG) is a purpose-built HTTP proxy for application-layer security. It intercepts HTTP/HTTPS traffic, inspects Layer 7 content, and enforces access control, URL filtering, SSL inspection, and data leakage prevention.

This section covers the SWG architecture, components, and supporting services.

## Core Components

### [Configuration Portal](/02-SafeSquid_SWG/01-Configuration_Portal)

The web-based administrative interface for defining and managing proxy policies. Configure access restriction, SSL inspection, authentication, DLP, and operational settings through a centralized console.

**Access:** `http://safesquid.cfg/` (embedded Rest UI interface built into SafeSquid; accessible only when your client uses the proxy, but NOT resolved by SafeSquid's DNS resolver) or `https://SERVER-IP:8443/` (direct access)

---

### [Application Ecosystem](/02-SafeSquid_SWG/02-Application_Ecosystem)

Overview of how SafeSquid components work together: proxy cluster, policy console, self-service portal, reporting, DNS security, and supporting services. Understanding the ecosystem helps with deployment planning and integration.

**Use for:** Architecture planning, understanding component relationships

---

### [SafeSquid Proxy Cluster](/02-SafeSquid_SWG/03-SafeSquid_Proxy_Cluster)

The central enforcement layer for HTTP/HTTPS traffic. Multiple proxy nodes can be deployed for high availability and load balancing with centralized policy management.

**Details:** [Proxy Clustering](/17-Proxy_Clustering/main)

---

### [Self-Service Portal](/02-SafeSquid_SWG/04-Self-Service_Portal)

Cloud-based portal for activation keys, license management, and SSL certificate generation. Reduces dependency on support for routine licensing and certificate tasks.

**Access:** [https://key.safesquid.com](https://key.safesquid.com)

---

### [Reporting Service](/02-SafeSquid_SWG/05-Reporting_Service)

Centralized log aggregation, dashboards, and forensic logging. Provides visibility into traffic patterns, policy enforcement, and compliance evidence.

**Use for:** Audit trails, usage analytics, incident investigation

---

### [Integrated DNS Security](/02-SafeSquid_SWG/06-Integrated_DNS_Security)

Policy-aware DNS resolution with DNSBL integration. Blocks malicious domains and mitigates DNS tunneling attacks.

**Details:** [DNS Security](/03-DNS_Security/main)

---

### [Supporting Services](/02-SafeSquid_SWG/07-Supporting_Services/main)

Operational services that ensure reliability and performance:

- **[Monit](/02-SafeSquid_SWG/07-Supporting_Services/01-Monit)** — Process monitoring and auto-restart
- **[BIND](/02-SafeSquid_SWG/07-Supporting_Services/02-Bind)** — Local DNS resolver for performance
- **[NTP](/02-SafeSquid_SWG/07-Supporting_Services/03-NTP)** — Time synchronization for SSO and TLS

**Critical for production:** Monit prevents service downtime; BIND improves DNS performance; NTP ensures authentication works correctly.

## Next Steps

1. **[Getting Started](/01-Getting_Started/main)** — Install and activate SafeSquid if you haven't already
2. **[SSL Inspection](/05-SSL_Inspection/main)** — Enable HTTPS decryption for policy enforcement
3. **[Authentication](/04-Authentication/main)** — Integrate with Active Directory or LDAP
4. **[Access Restriction](/08-Access_Restriction/main)** — Configure URL filtering and content policies
