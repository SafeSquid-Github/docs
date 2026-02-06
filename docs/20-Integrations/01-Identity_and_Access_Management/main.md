---
title: Identity and Access Management Integration
description: Integrate SafeSquid with enterprise directory services and SSO for identity-driven policy enforcement.
keywords:
  - SafeSquid IAM
  - identity and access management
  - directory services integration
  - SSO SafeSquid
  - Active Directory OpenLDAP
---

# Identity and Access Management Integration

SafeSquid integrates with enterprise identity and access management (IAM) systems to enforce user-based and group-based policies. Identity comes from directory services and single sign-on; policy enforcement uses that identity for access restriction, logging, and reporting.

## Documents in this section

Identity and Access Management configuration in SafeSquid is implemented through **Authentication** and **Directory Services**. For setup and procedures, use the following:

### [Directory Services](/docs/Authentication/Directory%20Services/main)

Configure Active Directory and OpenLDAP for centralized user authentication, group membership, and SSO. Directory Services covers:

- [Active Directory](/docs/Authentication/Directory%20Services/Active%20Directory/main): Simple and SSO authentication with Microsoft Active Directory
- [OpenLDAP](/docs/Authentication/Directory%20Services/OpenLDAP/main): Simple and SSO authentication with OpenLDAP

Configure directory services there, then reference those identities in SafeSquid access restriction policies and profiles.
