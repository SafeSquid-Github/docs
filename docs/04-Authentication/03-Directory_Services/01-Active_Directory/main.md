---
title: Active Directory
slug: /Authentication/Directory_Services/Active_Directory
description: Integrate Active Directory with SafeSquid for centralized user authentication, group-based access policies, and optional SSO.
keywords:
  - active directory integration
  - ldap integration with SafeSquid
  - add users to active directory
  - integrate ldap with SafeSquid
  - ldap configuration for SafeSquid
---
<section class="section-strip">


# Integrate SafeSquid with Microsoft Active Directory

SafeSquid integrates with Microsoft Active Directory via LDAP so user and group data from AD drive access restriction and reporting. Configure AD and LDAP connectivity first, then choose simple (username/password) or SSO (Kerberos) authentication.

</section>

<section class="section-strip">

## Active Directory integration options

### [Setup Active Directory Integration](/docs/Authentication/Directory_Services/Active_Directory/Setup_Active_Directory_Integration/)
SafeSquid must see AD users and groups to enforce identity-based policy. The document describes adding users in AD, linking LDAP Admin, and configuring Integrate LDAP in SafeSquid. Centralized identity from AD avoids a duplicate user store. Follow the document to add users in AD and connect SafeSquid so LDAP Entities list AD users.

### [Simple Authentication](/docs/Authentication/Directory_Services/Active_Directory/Simple_Authentication/)
Enterprises need LDAP-backed authentication without Kerberos or SSO infrastructure. Simple Authentication uses browser username/password validated against AD with group membership. No AD schema changes; standard LDAP bind is used. Configure LDAP server and bind in SafeSquid, then use access rules with LDAP profiles using this document.

### [SSO Authentication](/docs/Authentication/Directory_Services/Active_Directory/SSO_Authentication/)
Users should sign in once (domain login) and use the proxy without a second prompt. SSO Authentication uses Kerberos with AD so domain-authenticated users get proxy access without re-entering credentials. Better user experience and consistent identity. Configure LDAP with Negotiate bind, ensure time sync and DNS, then verify SSO using this document.

</section>