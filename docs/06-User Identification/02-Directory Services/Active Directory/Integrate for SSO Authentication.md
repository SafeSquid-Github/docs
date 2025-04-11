---
title: Integrate AD for SSO Authentication
description: Learn how to integrate Active Directory for Single Sign-On (SSO) authentication in SafeSquid, including configuring LDAP, verifying user extraction, and troubleshooting.
keywords:
- active directory sso safesquid
- integrate ldap with safesquid
- kerberos authentication safesquid
- sso setup safesquid
- safequd active directory authentication
---

## Overview

In given example we are integrating an Active Directory for SSO authentication.

**Your Active directory (AD) FQDN**: ad.safesquid.test (You should get your AD FQDN from this location : AD ( Start > Control Panel > System > Full Computer name))

**Your Active directory (AD) IP Address**: 192.168.221.1

**Domain of Active Directory (AD)**: safesquid.test

**Base Dn of AD**: dc=safesquid,dc=test

**User Name**: administrator@safesquid.test (**User name should be any user from AD having administrative permissions**)

Monit service must be Up. Verify it using command:

root@sabproxy: ~## pidof monit

19940

See more about Integrate LDAP section, here we explained the working of each field in the Integrate LDAP section.

## Prerequisites

Make sure that all the values (LDAP server FQDN, LDAP server IP, Username, password, base dn, domain) while configuration are correct. If any value is inappropriate then SafeSquid will fail to fetch the entries.

**Step 1**: Specify Name Server Addresses. 
**Step 2**: Specify Time Synchronization Server. 

(**Note**: Time Synchronization of AD server and Proxy server should be same. Verify it using "date" command)

**Step 3**: Add DNS entry of SafeSquid server in your Active Directory Server. 

**Step 4**: Make sure that your AD Domain must be resolvable from all clients and SafeSquid Server. For troubleshooting.

Once you complete all the above steps correctly then you are ready for SSO Configuration.

## [Access the SafeSquid User Interface](/docs/08-SafeSquid%20Interface/Accessing%20the%20SafeSquid%20Interface.md)

![clicking on configure in safesquid interface](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image1.webp)

## Go to Application Setup

![clicking on application setup](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image2.webp)

## Go to Integrate LDAP

![going to integrate LDAP in application setup section](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image3.webp)

## Ensure LDAP Section is enabled

![ensuring the LDAP section is enabled. by default it is set as false](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image4.webp)

![clicking on the global edit ](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image5.webp)

![selecting true from the drop down menu](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image6.webp)

![clicking on save policy](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image7.webp)

## Go to LDAP servers

![going to LAP servers tab](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image8.webp)

## Creating new entry

![creating a new entry by clicking add new button](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image9.webp)

![some default values are set to some options. leaving enabled as true and writing comment for future reference](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image10.webp)

![leaving host name field blank](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image11.webp)

**why?**

In a network with multiple LDAP Servers, and multiple SafeSquid Proxy Servers deployed in Master-Slave mode, this field can be used to specify the Host Name of the Proxy Server, which will communicate with the LDAP Server configured.

Leave this field blank if this is the only SafeSquid proxy, or if you want all the proxies to communicate with the LDAP server configure.

![entering your LDAP server FQDN and IP in ad.safesquid.test192.168.221.1 (example) format](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image12.webp)

![leaving ldap port and use SSL to their default ](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image13.webp)

![clicking on ldap bind method and selecting negotiate from the drop down menu](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image14.webp)

![entering adminstrator username. example: administrator@safesquid.test](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image15.webp)

You can use any user from Active Directory who is having **Administrator permissions**

![clicking on encrypt password icon](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image16.webp)

![entering admin password and confirming the password by entering in respective field](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image17.webp)

![clicking on encrypt to encrypt the password](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image18.webp)

![showing that the password is now encrypted](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image19.webp)

![entering your basedn as dc=safesquid,dc=test ( example)](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image20.webp)

![entering your ldap domain name. example: safesquid.test](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image21.webp)

![clicking on save policy](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image22.webp)

## Test User Extraction

Troubleshooting:

As soon as you Save policy by selecting NEGOTIATE_LDAP_AUTH

**kerberos.sh*** script will automatically run from path

/usr/local/safesquid/ui_root/cgi-bin

1.Verify below files at path:

/usr/local/safesquid/security

HTTP.keytab

krb5.conf

krb.tkt

2. SafeSquid will create the stub zone for DNS resolution of your Active Directory server.

The file with stub zone will create with the name: **safesquid.dns.conf**

At path:

/usr/local/safesquid/security/dns

Run command:

> cat safesquid.dns.conf

zone safesquid.test \{

type stub;

masters \{192.168.221.1;\};

\};

Also, it will automatically copy at given path:

/etc/bind/

Run command:

> cat safesquid.dns.conf

zone safesquid.test \{

type stub;

masters \{192.168.221.1;\};

\};

**(Note: Monit service must be up.)**

![clicking on ldap entries tab to check for entries](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image23.webp)

Step: Make sure that your AD Domain must be resolvable from all clients and SafeSquid Server.

For troubleshooting Follow Link

![showing all the users from directory in ldap entries tab](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image24.webp)

Save Configuration

If you did not find any entries on LDAP Entries subsection, then validate whether all fields in LDAP servers subsection are correct or not.

If all fields are correct then

Find the error cause

Troubleshooting Steps

![clicking on save config to save it](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image25.webp)

When you click on Save config, it will give a prompt for asking the confirmation to store your configuration into the cloud.

Select Yes only in below cases:

If you want to use this same configuration in other SafeSquid instances.

If your total configuration in all sections is completed and validated.

Otherwise select No and click on submit button.

Enable SSO authentication for LDAP users

Read more about Testing your Kerberos SSO authentication setup
