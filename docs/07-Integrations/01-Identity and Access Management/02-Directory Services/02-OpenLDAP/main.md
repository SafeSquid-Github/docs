---
title: OpenLDAP Integration
description: Integrate OpenLDAP directory services with SafeSquid for centralized user authentication, group-based access policies, and identity management.
keywords:
  - SafeSquid OpenLDAP integration
  - LDAP authentication proxy
  - OpenLDAP user authentication
  - directory service integration
  - centralized user management
  - LDAP group policies
---

# Integrate OpenLDAP with SafeSquid

## Overview
Here I am integrating my Active Directory with following information.

**IP Address: 192.168.247.10**

**Domain of Active Directory: safesquid.net**

**Base Dn : dc=safesquid,dc=net**

**User Name: cn=admin,dc=safesquid,dc=net**


## Prerequisites
Make sure that all the values (LDAP server FQDN, LDAP server IP, Username, password, base dn, domain ) in configuration are correct. If any value is wrong SafeSquid will fail to fetch the entries.

## [Access the SafeSquid User Interface](/docs/01-Getting%20Started/Access%20the%20SafeSquid%20Interface.md)

## Go to configure Page
![Access configure page to Integrate OpenLDAP with safesquid](/img/How_To/Integrate_OpenLDAP_With_SafeSquid/image1.webp)

## Go to Application Setup
![Go to Application setup to Integrate OpenLDAP with safesquid](/img/How_To/Integrate_OpenLDAP_With_SafeSquid/image2.webp)

## Go to Integrate LDAP
![Go to Integrate LDAP section to integrate OpenLDAP with safesquid](/img/How_To/Integrate_OpenLDAP_With_SafeSquid/image3.webp)

## Enable Integrate LDAP
![Enable global section as True in Integrate LDAP section to integrate OpenLDAP with safesquid](/img/How_To/Integrate_OpenLDAP_With_SafeSquid/image4.webp)

![Enable global section as True in Integrate LDAP section to integrate OpenLDAP with safesquid](/img/How_To/Integrate_OpenLDAP_With_SafeSquid/image5.webp)

![Enable global section as True in Integrate LDAP section to integrate OpenLDAP with safesquid](/img/How_To/Integrate_OpenLDAP_With_SafeSquid/image6.webp)

![Save policy after enable global section as True in Integrate LDAP section to integrate OpenLDAP with safesquid](/img/How_To/Integrate_OpenLDAP_With_SafeSquid/image7.webp)

## Go to LDAP servers
![Select LDAP server to integrate OpenLDAP with safesquid](/img/How_To/Integrate_OpenLDAP_With_SafeSquid/image8.webp)

##  Add a new entry
![Add new entry in LDAP server section to integrate OpenLDAP with safesquid](/img/How_To/Integrate_OpenLDAP_With_SafeSquid/image9.webp)

![In new entry enabled policy as a true in LDAP server section to integrate OpenLDAP with safesquid](/img/How_To/Integrate_OpenLDAP_With_SafeSquid/image10.webp)

![Leave Host name to blank in LDAP server section to integrate OpenLDAP with safesquid](/img/How_To/Integrate_OpenLDAP_With_SafeSquid/image11.webp)

![Enter LDAP server IP in LDAP server section to integrate OpenLDAP with safesquid](/img/How_To/Integrate_OpenLDAP_With_SafeSquid/image12.webp)

![Leave default entry field as it is in LDAP server section to integrate OpenLDAP with safesquid](/img/How_To/Integrate_OpenLDAP_With_SafeSquid/image13.webp)

![Enter Ldap username in LDAP server section to integrate OpenLDAP with safesquid](/img/How_To/Integrate_OpenLDAP_With_SafeSquid/image14.webp)

![Click on icon enter password in LDAP server section to integrate OpenLDAP with safesquid](/img/How_To/Integrate_OpenLDAP_With_SafeSquid/image15.webp)

![Enter admin password and confirm to fetch the entries from LDAP server](/img/How_To/Integrate_OpenLDAP_With_SafeSquid/image16.webp)

![Encrypt admin password to fetch the entries from LDAP server](/img/How_To/Integrate_OpenLDAP_With_SafeSquid/image17.webp)

![Encrypted admin password will show to fetch the entries from LDAP server](/img/How_To/Integrate_OpenLDAP_With_SafeSquid/image18.webp)

![Enter Basedn details to fetch the entries from LDAP server](/img/How_To/Integrate_OpenLDAP_With_SafeSquid/image19.webp)

![Enter LDAP Domain name to fetch the entries from LDAP server](/img/How_To/Integrate_OpenLDAP_With_SafeSquid/image20.webp)

![Save policy to fetch the entries from LDAP server](/img/How_To/Integrate_OpenLDAP_With_SafeSquid/image21.webp)

![Click on LDAP entires to check fetched entries from LDAP server](/img/How_To/Integrate_OpenLDAP_With_SafeSquid/image22.webp)

## Test User extraction
![Result of user extraction ](/img/How_To/Integrate_OpenLDAP_With_SafeSquid/image23.webp)

## Save Configuration
![Save Configuration of policy of integrate OpenLDAP with safesquid](/img/How_To/Integrate_OpenLDAP_With_SafeSquid/image24.webp)

When you click on Save config, it will give a prompt for asking the confirmation to store your configuration into the cloud.

Select Yes only in below cases:

1. if you want to use this same configuration in other SafeSquid instances.
2. if your total configuration in all sections is completed and validated.

Otherwise select No and click on submit

