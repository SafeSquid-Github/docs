---
title: OpenLDAP Integration
slug: /Authentication/Directory_Services/OpenLDAP
description: Integrate OpenLDAP with SafeSquid for centralized user authentication, group-based access policies, and identity management.
keywords:
  - SafeSquid OpenLDAP integration
  - LDAP authentication proxy
  - OpenLDAP user authentication
  - directory service integration
  - centralized user management
  - LDAP group policies
---

# Integrate SafeSquid with OpenLDAP

SafeSquid integrates with OpenLDAP (and compatible LDAP servers) so user and group data from the directory drive access restriction and reporting. Enable LDAP, add the OpenLDAP server and bind credentials, then configure simple or SSO authentication in access rules.

## OpenLDAP authentication options

### [Simple Authentication](Simple_Authentication.md)
Organizations using OpenLDAP need proxy authentication validated against the directory without Kerberos. Simple Authentication uses browser username/password validated against OpenLDAP with group membership. Standard LDAP bind works without extra SSO infrastructure. Enable Integrate LDAP, add the LDAP server with bind DN and Base DN, run user extraction, then use access rules with LDAP profiles using this document.

### [SSO Authentication](SSO_Authentication.md)
LDAP users should use the proxy with minimal prompts after domain or directory login. SSO Authentication provides a flow so authenticated directory users get access without re-entering credentials. Consistent identity and better user experience result. Enable authentication in Access Restrictions, configure LDAP profiles and user groups, then verify SSO using this document.
