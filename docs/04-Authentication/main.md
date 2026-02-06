---
title: Authentication
description: Configure user authentication in SafeSquid using BASIC, Network Signature, Directory Services (including Kerberos SSO), PAM, and bypass rules.
keywords:
  - SafeSquid authentication
  - proxy authentication
  - SSO
  - Kerberos
---

# Authentication

SafeSquid supports multiple authentication methods to identify users accessing the proxy. These methods can be used individually or in combination to suit enterprise requirements.

## Documents in this section

### [Local Credential Store (BASIC)](01-BASIC.md)
Organizations without a directory need identity-based access control. Local credential store enables browser-based authentication with usernames and passwords managed in SafeSquid. Configure BASIC auth for user-level policies without LDAP or Active Directory.

### [Network Signature](02-Network%20Signature.md)
Access rules must apply by source IP when user identity is not available. Network Signature divides users by IP or subnet for group-based policies. Use for IP-based access restriction and integration with access restriction groups.

### [Directory Services](03-Directory%20Services/main.md)
Enterprises require centralized identity for consistent policy enforcement. Directory Services integrates Active Directory and OpenLDAP for authentication and group membership. Configure for SSO and identity-driven access control.

### [PAM Authentication](04-PAM.md)
System-level authentication must align with OS credentials. PAM integration allows SafeSquid to validate users via Pluggable Authentication Modules. Use for environments that rely on PAM for login and access.

### [Bypass Authentication](05-Bypass%20Authentication.md)
Applications that cannot send proxy credentials break when authentication is required. Bypass rules allow specific destinations or applications to skip authentication while others remain tracked. Configure to allow automatic updates and non-interactive clients.
