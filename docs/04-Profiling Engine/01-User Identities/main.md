---
title: User Identification
---

## Overview

User identity drives policy enforcement, defines digital boundaries, and governs behavior. SafeSquid enables identity recognition through modular methods tailored to network architecture, trust design, and user mobility. Each method not only shapes access but also impacts the authentication experience.

### [IP-Based Recognition](/docs/06-User%20Identification/03-IP-Based%20Authentication/main.md)

In static networks, identity begins with IP. SafeSquid maps static IP addresses to users or groups, validating identity by network origin. It requires no prompts, credentials, or interaction---identity is inferred and immediate. Ideal where user-device relationships remain constant.

### [OpenLDAP Integration](/docs/07-Integrations/01-Identity%20and%20Access%20Management/02-Directory%20Services/02-OpenLDAP/main.md)

As environments adopt directory services, OpenLDAP introduces structured identity. SafeSquid supports two authentication paths:

- **Kerberos SSO** System login provides identity. No user prompts. SafeSquid reads the Kerberos ticket from the session and authenticates silently. Suitable for managed, domain-aware environments.

- **Simple** Where SSO isn't feasible, SafeSquid prompts for credentials. User input is validated against OpenLDAP. Interaction is explicit, but effective for guest or unmanaged devices.

### [Active Directory Integration](/docs/07-Integrations/01-Identity%20and%20Access%20Management/02-Directory%20Services/01-Active%20Directory/main.md)

For enterprise environments, Active Directory too offers seamless integration with:

- **Kerberos SSO**
- **Simple**

### Without Directory Services

Where directories are absent, SafeSquid provides internal mechanisms:

- [Credential-Based Authentication](/docs/04-Profiling%20Engine/01-User%20Identities/02-Local%20Credential%20Store.md) User accounts and encrypted credentials are stored locally. SafeSquid presents a login prompt, validates inputs internally, and applies identity-based policies. Entirely self-contained.

- **PAM Authentication** In Linux-based environments, SafeSquid leverages the Pluggable Authentication Module (PAM) framework for user identification. PAM enables SafeSquid to authenticate users through the host system's authentication stack, which may include system accounts, RADIUS, smartcards, biometric modules, or custom PAM configurations.

### Multifactor Authentication

For elevated security, SafeSquid combines identity sources. A typical flow begins with IP-based recognition---identifying the device---followed by a credential challenge through AD, OpenLDAP, PAM, or local store. Access is granted only when both factors align, ensuring dual-layer assurance without external token systems.
