---
title: SSO Authentication
description: "Integrate OpenLDAP for SSO in SafeSquid: LDAP settings, user groups, and verification."
keywords:
  - OpenLDAP integration
  - SSO authentication
  - SafeSquid LDAP setup
  - LDAP configuration
  - SafeSquid authentication
---


:::info CISO takeaway
**Risk:** Repeated proxy login reduces usability and can lead to workarounds. **Control:** SSO with LDAP allows directory-authenticated users to use the proxy with minimal prompts. **Evidence:** Identity and access logs show authenticated usernames for audit.
:::



## Problem: Enable SSO for LDAP users

LDAP (or AD) users should use the proxy with minimal prompts after directory authentication. Access rules with LDAP profiles and SSO enabled apply identity-based policy; configure Allow List entries and LDAP profiles so the correct user groups get access.



## Key benefits

Single sign-on experience for directory users; consistent identity and group-based policy. No separate proxy credential store when using LDAP profiles. Supports audit via identity and access logs.



## Prerequisites

- [Integrate LDAP](/docs/Authentication/Directory_Services/OpenLDAP/main/) configured and user extraction successful.
- Access to [Configuration Portal](/docs/SafeSquid_SWG/Configuration_Portal/).



## [Access the SafeSquid User Interface](/docs/SafeSquid_SWG/Configuration_Portal/)



## Enable authentication: Configure access rules

### Open Configure and Access Restrictions
![Click on configure](/img/How_To/Enable_authentication_for_LDAP_users/image1.webp)

![clicking on application setup](/img/How_To/Enable_authentication_for_LDAP_users/image2.webp)

![clicking on access restriction in application setup ](/img/How_To/Enable_authentication_for_LDAP_users/image3.webp)

Leave the Global Section unchanged; SSO is **TRUE** by default.

![By default SSO is TRUE don't change any thing here](/img/How_To/Enable_authentication_for_LDAP_users/image4.webp)

![SafeSquid includes default entries under the allow list; administrators can edit or create entries as needed](/img/How_To/Enable_authentication_for_LDAP_users/image5.webp)

See the working of each Entry [here](/docs/Use_Cases/working_of_default_entries_in_access_restrictions/)

![default entry given for adding LDAP users into a single user group](/img/How_To/Enable_authentication_for_LDAP_users/image6.webp)

![clicking on edit policies to edit the default policy](/img/How_To/Enable_authentication_for_LDAP_users/image7.webp)

![by default enabled field is false. make it true ](/img/How_To/Enable_authentication_for_LDAP_users/image8.webp)

![adding comment for future reference](/img/How_To/Enable_authentication_for_LDAP_users/image9.webp)

![Set trace entry to true when tracing an entry; otherwise leave it false](/img/How_To/Enable_authentication_for_LDAP_users/image10.webp)

![in LDAP profiles selecting the users or user groups you want to set the authentication for](/img/How_To/Enable_authentication_for_LDAP_users/image11.webp)

To authenticate all users from the directory, leave this field empty.
:::note
If this field is left blank, the user or IP address used to access the SafeSquid interface must be exempt from authentication.
:::
![leaving the profiles,Interface and IP address fields blank](/img/How_To/Enable_authentication_for_LDAP_users/image12.webp)

![leaving PAM authentication true as it is](/img/How_To/Enable_authentication_for_LDAP_users/image13.webp)

![leaving the username and password field empty](/img/How_To/Enable_authentication_for_LDAP_users/image14.webp)

![Use the access list to remove or grant interface access to users](/img/How_To/Enable_authentication_for_LDAP_users/image15.webp)

![after removing the config it will show the information about web interface in the drop down](/img/How_To/Enable_authentication_for_LDAP_users/image16.webp)

![Leaving Bypass, Interface username and Interface password fields blank](/img/How_To/Enable_authentication_for_LDAP_users/image17.webp)

![adding a name in the add to user group section](/img/How_To/Enable_authentication_for_LDAP_users/image18.webp)

![clicking on save policy](/img/How_To/Enable_authentication_for_LDAP_users/image19.webp)

![after saving the entry will look something like this](/img/How_To/Enable_authentication_for_LDAP_users/image20.webp)

![Clone the previous entry to set up authentication for other users, or create a new entry](/img/How_To/Enable_authentication_for_LDAP_users/image21.webp)

![adding the new users to the clone entry created](/img/How_To/Enable_authentication_for_LDAP_users/image22.webp)

![clicking on edit policies](/img/How_To/Enable_authentication_for_LDAP_users/image23.webp)

![entering comment for future reference,clicking on LDAP profiles and selecting the user group from the drop down menu and adding the user group name ](/img/How_To/Enable_authentication_for_LDAP_users/image24.webp)

![clicking on save policy](/img/How_To/Enable_authentication_for_LDAP_users/image25.webp)

![showing of original entry and cloned entry](/img/How_To/Enable_authentication_for_LDAP_users/image26.webp)

![Default entry for network administrators; add network administrators to this entry](/img/How_To/Enable_authentication_for_LDAP_users/image27.webp)

![clicking on editing policy](/img/How_To/Enable_authentication_for_LDAP_users/image28.webp)

![clicking on drop down menu to select the administrators](/img/How_To/Enable_authentication_for_LDAP_users/image29.webp)

![Keep the default user group as admins or change it as needed](/img/How_To/Enable_authentication_for_LDAP_users/image30.webp)

![clicking on the save policy](/img/How_To/Enable_authentication_for_LDAP_users/image31.webp)

![default entry to authenticate all users from AD which are not added in earlier entries](/img/How_To/Enable_authentication_for_LDAP_users/image32.webp)



## Verification and Evidence

Open **Reports** → **Detailed logs** and confirm that requests show the authenticated username. This confirms SSO authentication is applied and supports audit evidence.

![Clicking on reports in the SafeSquid dashboard](/img/How_To/Enable_authentication_for_LDAP_users/image33.webp)

![clicking on detailed logs](/img/How_To/Enable_authentication_for_LDAP_users/image34.webp)

![Confirming SSO authentication by seeing the username in SafeSquid detailed logs](/img/How_To/Enable_authentication_for_LDAP_users/image35.webp)

**Related:** [Simple Authentication](Simple_Authentication), [Working of Default Entries in Access Restrictions](/docs/Use_Cases/working_of_default_entries_in_access_restrictions/), [SSO Authentication Fail](/docs/Troubleshooting/SSO_Authentication_Fail/)

