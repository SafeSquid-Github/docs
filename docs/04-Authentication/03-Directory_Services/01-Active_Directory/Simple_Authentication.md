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
<section class="section-strip">


:::info CISO takeaway
**Risk:** Per-user web access control requires validated identity from a trusted source. **Control:** AD simple (LDAP) authentication validates users against Active Directory and applies group-based policies without Kerberos. **Evidence:** LDAP bind and user extraction are logged; identity and access logs show authenticated usernames for audit (e.g. SOC 2, ISO 27001 A.9).
:::

</section>

<section class="section-strip">

## Problem: Centralized identity without SSO infrastructure

Enterprises need user and group-based proxy policies backed by Active Directory without deploying Kerberos or SSO. Simple LDAP bind validates users against AD and provides group membership for access rules. No AD schema changes are required; real-time validation and group caching support policy mapping and audit attribution.

</section>

<section class="section-strip">

## Key benefits

Centralized identity from AD; user-specific and group-based access control. No SSO infrastructure; browser username/password prompt with AD credentials. LDAP bind and group sync support audit and compliance evidence. **Limitation:** Users enter credentials at the proxy; for single sign-on use [SSO Authentication](SSO_Authentication).

</section>

<section class="section-strip">

## Prerequisites
Make sure that all the values (LDAP server FQDN, LDAP server IP, Username, password, base dn, domain ) in configuration are correct. If any value is wrong SafeSquid will fail to fetch the entries.

</section>

<section class="section-strip">

## Call to action: LDAP configuration

Example values used in this procedure:

- Active Directory FQDN : ad.safesquid.test
- IP Address : 192.168.221.1
- Domain of Active Directory : safesquid.test
- Base Dn : dc=safesquid,dc=test
- Username : administrator@safesquid.test


### [Access the SafeSquid user interface](../../../02-SafeSquid_SWG/01-Configuration_Portal.md)
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

</section>

<section class="section-strip">

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

</section>

<section class="section-strip">

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

</section>