---
title: Directory Services
slug: /Authentication/Directory_Services
description: Configure SafeSquid integration with Active Directory and OpenLDAP for centralized authentication and identity-based policy enforcement.
keywords:
  - SafeSquid directory services
  - Active Directory authentication
  - OpenLDAP integration
  - LDAP proxy authentication
---
<section class="section-strip">


# Centralized authentication via Active Directory or OpenLDAP

SafeSquid integrates with directory services for user authentication and group-based policy. Identity from the directory drives access restriction and reporting. This section links to Active Directory and OpenLDAP setup and authentication options.

</section>

<section class="section-strip">

## Directory service integration guides

### [Active Directory](01-Active_Directory/main.md)
Enterprises using Microsoft Active Directory need proxy authentication and group membership from AD. Active Directory integration configures LDAP connectivity and supports simple (username/password) or SSO (Kerberos) authentication. One directory drives identity across the proxy. Follow the Active Directory documents to configure AD and choose simple or SSO.

### [OpenLDAP](02-OpenLDAP/main.md)
Organizations using OpenLDAP or compatible LDAP need proxy authentication from the directory. OpenLDAP integration configures the LDAP server, bind, and base DN and supports simple or SSO authentication. Existing directory investment is reused. Follow the OpenLDAP documents to configure LDAP and enable simple or SSO.

</section>