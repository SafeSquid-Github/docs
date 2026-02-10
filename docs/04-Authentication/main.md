---
title: Authentication
slug: /Authentication
description: Configure user authentication in SafeSquid using BASIC, Network Signature, Directory Services (including Kerberos SSO), PAM, and bypass rules.
keywords:
  - SafeSquid authentication
  - proxy authentication
  - SSO
  - Kerberos
---
<section class="section-strip">


# Identify users for access control and audit

SafeSquid supports multiple authentication methods to identify users accessing the proxy. Methods can be used individually or in combination to suit enterprise requirements and support identity-based access control and audit.

</section>

<section class="section-strip">

## Authentication methods and when to use them

### [Local Credential Store (BASIC)](01-BASIC.md)
Organizations without a directory need identity-based access control and audit attribution. Local credential store provides browser-prompt authentication and user-level policies without LDAP or Active Directory. No directory infrastructure is required; credentials are managed in SafeSquid. Follow the document to enable authentication in the access rule and add users via the interface or Linux.

### [Network Signature](02-Network_Signature.md)
Policy must apply by source IP or subnet when user identity is unavailable (e.g. device-only, legacy apps). Network Signature maps IPs or ranges to user-groups for group-based access restriction and reporting. No directory or user login is required for IP-only rules. Use the document to add Allow List entries with IP range and user-group.

### [Directory Services](03-Directory_Services/main.md)
Enterprises require centralized identity for consistent policy and group membership. Directory Services integrates Active Directory and OpenLDAP for authentication and group-based access. SSO (Kerberos with AD) and identity-driven policies are supported. Follow the Directory Services docs to configure AD or OpenLDAP and simple or SSO authentication.

### [PAM Authentication](04-PAM.md)
Proxy authentication should use the same credentials as the operating system to avoid sprawl. PAM integration validates users via the system PAM stack so one credential set applies to OS and proxy. This fits Linux and other PAM-based environments. Use the document to set PAM to TRUE in the access rule and verify with OS credentials.

### [Bypass Authentication](05-Bypass_Authentication.md)
Applications that cannot send proxy credentials (e.g. automatic updates) fail when authentication is required. Bypass rules let specific destinations or request types skip authentication while the rest remains authenticated and logged. A narrow, auditable bypass list preserves control. Follow the document to enable bypass and define request types for bypassed destinations.

</section>