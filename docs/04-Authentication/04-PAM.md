---
title: PAM Authentication
description: Configure PAM (Pluggable Authentication Modules) integration with SafeSquid for system-level authentication.
keywords:
  - PAM authentication
  - SafeSquid PAM
  - Pluggable Authentication Modules
  - system authentication proxy
---


:::info CISO takeaway
**Risk:** Separate proxy credentials increase sprawl and weaken accountability tied to OS identity. **Control:** PAM integration validates proxy users against the system PAM stack so one credential set applies to OS and proxy. **Evidence:** Identity and access logs record authenticated usernames; demonstrate alignment with access control objectives (e.g. ISO 27001 A.9, SOC 2).
:::

# PAM Authentication



## Problem: System credentials must align with proxy authentication

Organizations that use PAM for login and access control need the proxy to validate users against the same credentials. Without PAM integration, users may have to maintain separate proxy credentials or cannot use identity-based policies tied to OS accounts. SafeSquid PAM integration allows the gateway to validate users via the system PAM stack so one set of credentials applies to both login and proxy access.



## Key benefits

Single set of credentials for OS and proxy reduces credential sprawl and support burden. Identity-based access policies apply using the same usernames as the operating system. PAM fits environments that already rely on PAM for authentication (e.g. Linux login, SSH). Logged usernames support audit and compliance (e.g. ISO 27001 A.9, SOC 2 access control evidence). **Limitation:** PAM applies only where SafeSquid runs on a PAM-capable OS (typically Linux); use [Bypass Authentication](/docs/Authentication/Bypass_Authentication/) or separate rules for flows that must not require auth.



## Prerequisites

- SafeSquid installed on a host that uses PAM (typical for Linux deployments).
- PAM configured on the system for the desired authentication (e.g. local, LDAP via PAM).
- Admin access to SafeSquid configuration interface and to Access Restrictions / Access Profiles.



## Call to action: Enable PAM in the access rule

1. Open the [SafeSquid Configuration Portal](/docs/SafeSquid_SWG/Configuration_Portal/) and click **Configure**.
2. Navigate to **Application Setup** → **Access Restrictions** → **Allow List**.
3. Edit the entry that matches the client IP or profile, or add a new entry and set the matching IP/subnet.
4. Set **PAM Authentication** to **TRUE**. Leave **Username** and **Password** empty when using PAM only.
5. Save the rule. Ensure the system PAM stack (e.g. `/etc/pam.d/`) is configured to validate the same users (local or via LDAP/PAM).



## Verification and Evidence

- Browsing through the proxy triggers authentication; credentials accepted by the OS (e.g. Linux login) are accepted by SafeSquid when PAM is enabled.
- Logs (`identity.log`, `access.log`) show the authenticated username for requests.



## Troubleshooting

| Issue | Resolution |
|-------|------------|
| PAM authentication not prompting | Ensure PAM is set to TRUE in the access rule and the rule matches the client IP or profile. |
| Valid OS credentials rejected | Verify the system PAM stack (e.g. `/etc/pam.d/`) allows the same service or that SafeSquid is using the expected PAM configuration. |
| Mixed auth requirements | Use [Bypass Authentication](/docs/Authentication/Bypass_Authentication/) for destinations that must not require auth; use separate access rules for PAM vs. BASIC if needed. |



## Next steps

- [Authentication](/docs/Authentication/main/)
- [Directory Services](/docs/Authentication/Directory_Services/main/)
- [Bypass Authentication](/docs/Authentication/Bypass_Authentication/)
- [Local Credential Store (BASIC)](/docs/Authentication/BASIC/)

