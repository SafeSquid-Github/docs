---
title: Simple Authentication
description: "Integrate Active Directory for simple authentication in SafeSquid: configuration, LDAP enablement, and troubleshooting."
keywords:
  - active directory integration
  - ldap authentication SafeSquid
  - simple authentication SafeSquid
  - ldap configuration
  - sso authentication SafeSquid
---

##  Overview
Integrate SafeSquid SWG with Microsoft Active Directory using LDAP simple authentication to enforce user-specific web access policies without deploying SSO or Kerberos. This setup enables centralized identity management, real-time LDAP-based user validation, and group-aware access control, all without modifying the AD schema. With support for transient session handling, efficient group caching, and resilient LDAP connectivity, SafeSquid ensures compatibility across distributed enterprise environments where policy mapping and user verification are critical, especially when infrastructure modifications are restricted.

## Prerequisites
Make sure that all the values (LDAP server FQDN, LDAP server IP, Username, password, base dn, domain ) in configuration are correct. If any value is wrong SafeSquid will fail to fetch the entries.

## LDAP Configuration Steps
Here I am integrating my Active Directory with following information.

- Active Directory FQDN : ad.safesquid.test
- IP Address : 192.168.221.1
- Domain of Active Directory : safesquid.test
- Base Dn : dc=safesquid,dc=test
- Username : administrator@safesquid.test


### [Access the SafeSquid user interface](/docs/SafeSquid%20SWG/Configuration%20Portal)
![Application Setup](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image1.webp)

### Go to application setup
![Integrate LDAP](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image2.webp)

### Go to integrate LDAP
![Ensure LDAP Enabled](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image3.webp)

![Ensure LDAP Enabled](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image4.webp)

### Ensure LDAP section is enabled
![Go to LDAP Servers](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image5.webp)

![Go to LDAP Servers](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image6.webp)

![Go to LDAP Servers](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image7.webp)

### Go to LDAP servers
![Create New Entry](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image8.webp)

### Create the new entry
![Additional Screenshots](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image9.webp)

![Additional Screenshots](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image10.webp)

![Additional Screenshots](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image11.webp)

![Additional Screenshots](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image12.webp)

![Additional Screenshots](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image13.webp)

![Additional Screenshots](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image14.webp)

![Additional Screenshots](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image15.webp)

![Additional Screenshots](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image16.webp)

![Additional Screenshots](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image17.webp)

![Additional Screenshots](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image18.webp)

![Additional Screenshots](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image19.webp)

![Additional Screenshots](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image20.webp)

![Test User Extraction](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image21.webp)

### Test user extraction
![Save Configuration](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image22.webp)

![Save Configuration](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image23.webp)

### Save configuration
![Final Screenshot](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image24.webp)

:::note
Clicking Save config prompts to store the configuration in the cloud. Select Yes only when: the same configuration will be used on other SafeSquid instances, or all sections are fully configured and validated.
- Otherwise, select No and click on submit
:::

## Validation Checklist

| Task                 | Method                                         | Expected Outcome               |
| -------------------- | ---------------------------------------------- | ------------------------------ |
| Test User Extraction | Use UI extraction tool                         | List of user DNs displayed     |
| Proxy Authentication | Access web via proxy with AD credentials       | Login success                  |
| Log Review           | `/var/log/safesquid.log` or `Real-Time Logs`   | LDAP bind, group sync, auth OK |
| Connection to LDAP   | `ping <host>`, `ldapsearch` command-line tests | Success responses              |

Example `ldapsearch` command:

```bash
ldapsearch -x -h 192.168.1.10 -b "dc=example,dc=local" -D "administrator@example.local" -w password
```

## Troubleshooting Guide

### No LDAP entries fetched

* **Cause**: Incorrect Base DN or Bind DN, wrong password, network failure
* **Fix**: Run `ldapsearch` to test configuration, check host reachability

### Authentication fails

* **Cause**: Wrong Bind DN format, credential mismatch, date/time skew
* **Fix**:

  * Ensure Bind DN uses full UPN (e.g., [user@example.local](mailto:user@example.local))
  * Sync system time via `ntpdate`
  * Check real-time logs for error details

### Group membership missing

* **Cause**: `memberOf` attribute not visible
* **Fix**: Use higher privilege bind account, ensure group visibility in AD

### SafeSquid UI shows empty or failure in extraction test

* **Cause**: Incorrect filters or AD object not reachable
* **Fix**: Adjust filters; use LDAP browser tool to validate user location
