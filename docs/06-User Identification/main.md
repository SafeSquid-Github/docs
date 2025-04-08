## [Setup User Identities](https://help.safesquid.com/portal/en/kb/articles/setup-authentication)

SafeSquid has a dynamic user and group identity management system with configurable identification options.

### [Profile clients based on network identifiers](https://help.safesquid.com/portal/en/kb/articles/ip-based-authentication)

In shared workstations, guest, and static IP networks, the access control policies are defined based on device-specific network signatures. Moreover, devices that do not support credential verification, like printers, and IoT devices, are identified based on IP address. It also enables you to secure varied network segments differently.

### Integrate your enterprise directory service

For enterprises with centralized user management infrastructure, connect your LDAP-based directory services, like [Microsoft® Windows Active Directory](https://help.safesquid.com/portal/en/kb/articles/a-comprehensive-guide-on-how-to-integrate-windows-active-directory) or [OpenLDAP](https://help.safesquid.com/portal/en/kb/articles/integrate-openldap-with-safesquid), with SafeSquid to authenticate users.

SafeSquid is also optimised to concurrently connect with multiple directory services. When credentials are entered, SafeSquid intelligently verifies the user from the appropriate directory service and efficiently caches user data.

Furthermore, SafeSquid can be configured for [Kerberos-based authentication](https://help.safesquid.com/portal/en/kb/articles/kerberos-sso-authentication-setup) for Single Sign On (SSO).

### Integrate with PAM service

For flexible and modular authentication, SafeSquid supports integration with all Linux-PAM authentication modules, including biometric, and custom authentication schemes.

### Verify user credentials with an in-built credential store

If you do not have an enterprise credential store, you can [create users and passwords in SafeSquid](https://help.safesquid.com/portal/en/kb/articles/adding-users-using-safesquid-interface-for-authentication).

### Multi-Factor Authentication

For heightened security, combine network-based and credential-based authentication.

### [Create User Groups](https://help.safesquid.com/portal/en/kb/articles/create-user-groups-based-on-network-ip-and-ldap-active-directory)

For applying uniform security policies based on the specific roles, responsibilities, and risk profiles of different user sets, you can add user profiles to groups.

On integrating your enterprise directory service, SafeSquid automatically extracts group membership information.

## [Bypass Authentication for an application](https://help.safesquid.com/portal/en/kb/articles/bypass-authentication)

Applications that do not support proxy authentication need to be bypassed to ensure no disruption for them while maintaining user authentication for other applications.
