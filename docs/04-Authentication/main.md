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

# Identify users for access control and audit

SafeSquid supports multiple authentication methods to identify users accessing the proxy. Methods can be used individually or in combination to suit enterprise requirements and support identity-based access control and audit.

## Choose your authentication method

| Method | Use When | User Experience | Infrastructure Required |
|--------|----------|-----------------|-------------------------|
| [Local Credential Store (BASIC)](/docs/Authentication/BASIC/) | No directory service available | Browser login prompt | None |
| [Network Signature](/docs/Authentication/Network_Signature/) | IP-based policy needed (devices, legacy apps) | Transparent (no login) | Known IP ranges |
| [Directory Services](/docs/Authentication/Directory_Services/main/) | Centralized identity required | Browser prompt or SSO | Active Directory or OpenLDAP |
| [PAM Authentication](/docs/Authentication/PAM/) | OS credentials should apply to proxy | Browser login prompt | PAM-capable OS |
| [Bypass Authentication](/docs/Authentication/Bypass_Authentication/) | Some apps cannot authenticate | Transparent for bypassed apps | None |

## Authentication methods

### [Local Credential Store (BASIC)](/docs/Authentication/BASIC/)
Browser-prompt authentication with credentials stored in SafeSquid. No directory infrastructure required; credentials managed locally. Use when you need identity-based policies without Active Directory or LDAP.

### [Network Signature](/docs/Authentication/Network_Signature/)
Maps source IPs or subnets to user-groups for group-based access restriction and reporting. No user login required; policy applies by IP. Use when user identity is unavailable (device-only, legacy apps) but you need group-based rules.

### [Directory Services](/docs/Authentication/Directory_Services/main/)
Integrates Active Directory or OpenLDAP for centralized authentication and group-based access. Supports simple authentication (browser prompt) and SSO (Kerberos with AD). Use when you need enterprise identity management and group policies.

### [PAM Authentication](/docs/Authentication/PAM/)
Validates proxy users via the system PAM stack so OS and proxy share credentials. Use when you want a single credential set for both OS login and proxy access in PAM-based environments (Linux, Unix).

### [Bypass Authentication](/docs/Authentication/Bypass_Authentication/)
Allows specific destinations or request types to skip authentication while other traffic remains authenticated. Use for automatic updates or apps that cannot send proxy credentials.

## Combining authentication methods

SafeSquid evaluates access rules in order. Common combinations:

- **Directory + Bypass:** AD/LDAP for users, bypass for OS updates and app sync
- **Network Signature + Directory:** IP-based groups for IoT/devices, AD for user workstations
- **PAM + Bypass:** OS credentials for interactive users, bypass for service accounts

:::tip
Apply authentication rules from most specific to most general. Place narrow bypass rules before broader authentication requirements.
:::

## Verification

After configuring authentication:

1. **Test login flow:** Browse through the proxy from a client; confirm authentication prompt appears (or SSO succeeds)
2. **Check identity logs:** Verify `identity.log` or access logs show authenticated usernames
3. **Test bypass (if configured):** Confirm bypassed destinations work without prompts

## Next steps

1. Choose an authentication method above and configure it
2. Combine with [Access Restriction](/docs/Access_Restriction/main/) for identity-based policies
3. Enable [SSL Inspection](/docs/SSL_Inspection/main/) so HTTPS traffic is attributed to users
