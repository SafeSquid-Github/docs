---
title: Simple Authentication
description: Learn how to integrate OpenLDAP with SafeSquid for simple authentication, including configuration steps for LDAP server, user extraction, and testing.
keywords:
  - openldap integration
  - simple authentication with openldap
  - safesquid ldap authentication
  - configure openldap for safesquid
  - openldap setup for safesquid
---

## Overview
Here i am integrating my Active Directory with following information.

**IP Address**: 192.168.247.10

**Domain of Active Directory**: safesquid.net

**Base Dn**: dc=safesquid,dc=net

**User Name**: cn=admin,dc=safesquid,dc=net


## Prerequisites
Make sure that all the values (LDAP server FQDN, LDAP server IP, Username, password, base dn, domain) in configuration are correct. If any value is wrong SafeSquid will fail to fetch the entries.

## [Access the SafeSquid User Interface](/docs/08-SafeSquid%20Interface/Accessing%20the%20SafeSquid%20Interface.md)

## Go to configure Page
![clicking on configure in safesquid interface](/img/How_To/Integrate_openLDAP_for_simple_authentication/image1.webp)

## Go to Application Setup 
![clicking on application setup](/img/How_To/Integrate_openLDAP_for_simple_authentication/image2.webp)

## Go to Integrate LDAP
![going to integrate LDAP in application setup section](/img/How_To/Integrate_openLDAP_for_simple_authentication/image3.webp)

## Enable Integrate LDAP 
![ensuring the LDAP section is enabled. By default, it is set as false](/img/How_To/Integrate_openLDAP_for_simple_authentication/image4.webp)

![clicking on the global edit ](/img/How_To/Integrate_openLDAP_for_simple_authentication/image5.webp)

![selecting true from the drop down menu](/img/How_To/Integrate_openLDAP_for_simple_authentication/image6.webp)

![clicking on save policy](/img/How_To/Integrate_openLDAP_for_simple_authentication/image7.webp)

## Go to LDAP servers
![going to LAP servers tab](/img/How_To/Integrate_openLDAP_for_simple_authentication/image8.webp)

## Add a new entry 
![creating a new entry by clicking add new button](/img/How_To/Integrate_openLDAP_for_simple_authentication/image9.webp)

![some default values are set to some options. leaving enabled as true and writing comment for future reference](/img/How_To/Integrate_openLDAP_for_simple_authentication/image10.webp)

![leaving host name field blank](/img/How_To/Integrate_openLDAP_for_simple_authentication/image11.webp)

![entering your LDAP server IP ](/img/How_To/Integrate_openLDAP_for_simple_authentication/image12.webp)

![entring admin details as for example cn=admin,dc=safesquid,dc=test ](/img/How_To/Integrate_openLDAP_for_simple_authentication/image13.webp)

![clicking on encrypt password icon](/img/How_To/Integrate_openLDAP_for_simple_authentication/image14.webp)

![entering admin password and confirming the password by entering in respective field](/img/How_To/Integrate_openLDAP_for_simple_authentication/image15.webp)

![clicking on encrypt to encrypt the password](/img/How_To/Integrate_openLDAP_for_simple_authentication/image16.webp)

![showing that the password is now encrypted](/img/How_To/Integrate_openLDAP_for_simple_authentication/image17.webp)

![entering your basedn as dc=safesquid,dc=test ( example)](/img/How_To/Integrate_openLDAP_for_simple_authentication/image18.webp)

![entering your ldap domain name. example: safesquid.test](/img/How_To/Integrate_openLDAP_for_simple_authentication/image19.webp)

![clicking on save policy](/img/How_To/Integrate_openLDAP_for_simple_authentication/image20.webp)

![clicking on ldap entries tab to check for entries](/img/How_To/Integrate_openLDAP_for_simple_authentication/image21.webp)

## Test User extraction 
![showing all the users from LDAP server in ldap entries tab](/img/How_To/Integrate_openLDAP_for_simple_authentication/image22.webp)

## Save Configuration 
![clicking on save config to save it](/img/How_To/Integrate_openLDAP_for_simple_authentication/image23.webp)

**When you click on Save config, it will give a prompt for asking the confirmation to store your configuration into the cloud.**

**Select Yes only in below cases:**

1. if you want to use this same configuration in other SafeSquid instances.
2. if your total configuration in all sections is completed and validated.

Otherwise select No and click on submit.
