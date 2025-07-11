---
title: User Identification
---

## [Setup User Identities](/docs/06-User%20Identification/Setup%20Authentication.md)

SafeSquid has a dynamic user and group identity management system with configurable identification options.

### [Profile clients based on network identifiers](/docs/06-User%20Identification/03-Network%20Identifiers/IP-Based%20Authentication.md)

In shared workstations, guest, and static IP networks, the access control policies are defined based on device-specific network signatures. Moreover, devices that do not support credential verification, like printers, and IoT devices, are identified based on IP address. It also enables you to secure varied network segments differently.

### [Integrate your enterprise directory service](/docs/06-User%20Identification/02-Directory%20Services/main.md)

For enterprises with centralized user management infrastructure, connect your LDAP-based directory services, like [Microsoft® Windows Active Directory](/docs/06-User%20Identification/02-Directory%20Services/Active%20Directory/main.md) or [OpenLDAP](/docs/06-User%20Identification/02-Directory%20Services/OpenLDAP/main.md), with SafeSquid to authenticate users.

SafeSquid is also optimised to concurrently connect with multiple directory services. When credentials are entered, SafeSquid intelligently verifies the user from the appropriate directory service and efficiently caches user data.

Furthermore, SafeSquid can be configured for [Kerberos-based authentication](/docs/06-User%20Identification/Kerberos%20SSO.md) for Single Sign On (SSO).

### [Create User Groups](/docs/06-User%20Identification/03-Network%20Identifiers/Network%20Identifiers.md)

For applying uniform security policies based on the specific roles, responsibilities, and risk profiles of different user sets, you can add user profiles to groups.

On integrating your enterprise directory service, SafeSquid automatically extracts group membership information.

## [Bypass Authentication for an application](/docs/06-User%20Identification/Bypass%20Authentication.md)

Applications that do not support proxy authentication need to be bypassed to ensure no disruption for them while maintaining user authentication for other applications.
