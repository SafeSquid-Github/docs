---
title: SSO Authentication
description: "Integrate Active Directory for SSO in SafeSquid: LDAP config, user extraction verification, and troubleshooting."
keywords:
  - active directory sso SafeSquid
  - integrate ldap with SafeSquid
  - kerberos authentication SafeSquid
  - sso setup SafeSquid
  - safequd active directory authentication
---

## Example: integrate Active Directory for SSO

This example integrates an Active Directory for SSO authentication.

**Active Directory (AD) FQDN**: ad.safesquid.test (Obtain the AD FQDN from: Start > Control Panel > System > Full Computer name)

**Active Directory (AD) IP Address**: 192.168.221.1

**Domain of Active Directory (AD)**: safesquid.test

**Base Dn of AD**: dc=safesquid,dc=test

**User Name**: administrator@safesquid.test (**User name should be any user from AD having administrative permissions**)

Monit service must be Up.
Verify it using command:

```bash
pidof monit
```
19940

See the Integrate LDAP section for the purpose of each field.

SSO flow with [Active Directory](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview) and Kerberos:

```mermaid
sequenceDiagram
  participant Client
  participant SafeSquid
  participant AD as Active Directory
  Client->>SafeSquid: HTTPS request
  SafeSquid->>AD: Validate user ticket
  AD-->>SafeSquid: User identity
  SafeSquid->>SafeSquid: Apply policy
  SafeSquid-->>Client: Allow or deny
```

## Prerequisites
Make sure that all the values (LDAP server FQDN, LDAP server IP, Username, password, base dn, domain) while configuration are correct. If any value is inappropriate then SafeSquid will fail to fetch the entries.

**Step 1**: Specify Name Server Addresses.

**Step 2**: Specify Time Synchronization Server.
:::note
Time Synchronization of AD server and Proxy server should be same. Verify it using "date" command
:::
**Step 3**: Add DNS entry of the SafeSquid server in the Active Directory server.

**Step 4**: Ensure the AD domain is resolvable from all clients and the SafeSquid server. See troubleshooting if needed.

After completing all steps above, SSO configuration can proceed.

## [Access the SafeSquid User Interface](/docs/SafeSquid%20SWG/Configuration%20Portal)

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

Leave this field blank if this is the only SafeSquid proxy, or if all proxies should use the same LDAP server.

![entering LDAP server FQDN and IP in ad.safesquid.test192.168.221.1 (example) format](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image12.webp)

![leaving ldap port and use SSL to their default ](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image13.webp)

![clicking on ldap bind method and selecting negotiate from the drop down menu](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image14.webp)

![entering adminstrator username. example: administrator@safesquid.test](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image15.webp)

Use any Active Directory user with **Administrator permissions**

![clicking on encrypt password icon](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image16.webp)

![entering admin password and confirming the password by entering in respective field](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image17.webp)

![clicking on encrypt to encrypt the password](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image18.webp)

![showing that the password is now encrypted](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image19.webp)

![entering base DN as dc=safesquid,dc=test (example)](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image20.webp)

![entering LDAP domain name, example: safesquid.test](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image21.webp)

![clicking on save policy](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image22.webp)

## Test User Extraction
Troubleshooting:

When the administrator saves the policy with NEGOTIATE_LDAP_AUTH selected

**kerberos.sh*** script will automatically run from path
```bash
/usr/local/safesquid/ui_root/cgi-bin
```
1.Verify below files at path:
```bash
/usr/local/safesquid/security
```
HTTP.keytab

krb5.conf

krb.tkt

2. SafeSquid creates the stub zone for DNS resolution of the Active Directory server.

The file with stub zone will create with the name: **safesquid.dns.conf**

At path:

/usr/local/safesquid/security/dns

Run command:
```bash
cat safesquid.dns.conf
```
zone safesquid.test \{

type stub;

masters \{192.168.221.1;\};

\};

Also, it will automatically copy at given path:

/etc/bind/

Run command:
```bash
cat safesquid.dns.conf
```
zone safesquid.test \{
type stub;
masters \{192.168.221.1;\};

\};
:::warning
Monit service must be up.
:::
![clicking on ldap entries tab to check for entries](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image23.webp)

:::warning
Ensure the AD domain is resolvable from all clients and the SafeSquid server.
:::

For troubleshooting Follow Link

![showing all the users from directory in ldap entries tab](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image24.webp)

Save Configuration

If no entries appear in the LDAP Entries subsection, validate all fields in the LDAP servers subsection.

If all fields are correct then

Find the error cause

Troubleshooting Steps

![clicking on save config to save it](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image25.webp)

Clicking Save config prompts for confirmation to store the configuration in the cloud.

**Select Yes only when:**
1. The same configuration will be used on other SafeSquid instances.
2. All sections are fully configured and validated.

Otherwise select No and click Submit.
