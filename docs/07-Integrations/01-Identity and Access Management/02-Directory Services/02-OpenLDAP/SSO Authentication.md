---
title: SSO Authentication
description: Learn how to integrate OpenLDAP for Single Sign-On (SSO) authentication in SafeSquid. This guide covers configuring LDAP settings, creating user groups, and verifying SSO authentication.
keywords:
  - OpenLDAP integration
  - SSO authentication
  - SafeSquid LDAP setup
  - LDAP configuration
  - SafeSquid authentication
---

## [Access the SafeSquid User Interface](/docs/01-Getting%20Started/Access%20the%20SafeSquid%20Interface.md)
## Enable Authentication
### Click on configure
![Click on configure](/img/How_To/Enable_authentication_for_LDAP_users/image1.webp)

![clicking on application setup](/img/How_To/Enable_authentication_for_LDAP_users/image2.webp)

![clicking on access restriction in application setup ](/img/How_To/Enable_authentication_for_LDAP_users/image3.webp)

By default, SSO is TRUE don't change anything here

Dont change Anything in Global Section

![By default SSO is TRUE don't change any thing here](/img/How_To/Enable_authentication_for_LDAP_users/image4.webp)

![safesquid comes with some default entries under allow list. You can edit or create a new entry as per your requirement](/img/How_To/Enable_authentication_for_LDAP_users/image5.webp)

See the working of each Entry [here](/docs/14-Usecases/working-of-default-entries-in-access-restrictions.md)

![default entry given for adding LDAP users into a single user group](/img/How_To/Enable_authentication_for_LDAP_users/image6.webp)

![clicking on edit policies to edit the default policy](/img/How_To/Enable_authentication_for_LDAP_users/image7.webp)

![by default enabled field is false. make it true ](/img/How_To/Enable_authentication_for_LDAP_users/image8.webp)

![adding comment for future reference](/img/How_To/Enable_authentication_for_LDAP_users/image9.webp)

![when your want to trace an entry make it true in the trace entry field otherwise leave it as false](/img/How_To/Enable_authentication_for_LDAP_users/image10.webp)

![in LDAP profiles selecting the users or user groups you want to set the authentication for](/img/How_To/Enable_authentication_for_LDAP_users/image11.webp)

If you want to Authenticate all users from Active Directory Leave this field empty.
:::note
If you want to leave this field blank make sure that the user or IP address from where you are accessing SafeSquid interface must be free from authentication.
:::
![leaving the profiles,Interface and IP address fields blank](/img/How_To/Enable_authentication_for_LDAP_users/image12.webp)

![leaving PAM authentication true as it is](/img/How_To/Enable_authentication_for_LDAP_users/image13.webp)

![leaving the username and password field empty](/img/How_To/Enable_authentication_for_LDAP_users/image14.webp)

![Clicking on access list, you can remove or give the interface access to the users](/img/How_To/Enable_authentication_for_LDAP_users/image15.webp)

![after removing the config it will show the information about web interface in the drop down](/img/How_To/Enable_authentication_for_LDAP_users/image16.webp)

![leaving Bypass, Interface username and Interface password field balnk](/img/How_To/Enable_authentication_for_LDAP_users/image17.webp)

![adding a name in the add to user group section](/img/How_To/Enable_authentication_for_LDAP_users/image18.webp)

![clicking on save policy](/img/How_To/Enable_authentication_for_LDAP_users/image19.webp)

![after saving the entry will look something like this](/img/How_To/Enable_authentication_for_LDAP_users/image20.webp)

![cloning the previous entry to setup authentication for other users. you can create a new entry as well ](/img/How_To/Enable_authentication_for_LDAP_users/image21.webp)

![adding the new users to the clone entry created](/img/How_To/Enable_authentication_for_LDAP_users/image22.webp)

![clicking on edit policies](/img/How_To/Enable_authentication_for_LDAP_users/image23.webp)

![entering comment for future reference,clicking on LDAP profiles and selecting the user group from the drop down menu and adding the user group name ](/img/How_To/Enable_authentication_for_LDAP_users/image24.webp)

![clicking on save policy](/img/How_To/Enable_authentication_for_LDAP_users/image25.webp)

![showing of original entry and cloned entry](/img/How_To/Enable_authentication_for_LDAP_users/image26.webp)

![default entry for network administrators. adding your network administrators to this entry](/img/How_To/Enable_authentication_for_LDAP_users/image27.webp)

![clicking on editing policy](/img/How_To/Enable_authentication_for_LDAP_users/image28.webp)

![clicking on drop down menu to select the administrators](/img/How_To/Enable_authentication_for_LDAP_users/image29.webp)

![you can keep the default user group as admins or can change](/img/How_To/Enable_authentication_for_LDAP_users/image30.webp)

![clicking on the save policy](/img/How_To/Enable_authentication_for_LDAP_users/image31.webp)

![default entry to authenticate all users from AD which are not added in earlier entries](/img/How_To/Enable_authentication_for_LDAP_users/image32.webp)

### Verifying SSO Authentication
![clicking on reports in the safesquid dashboard](/img/How_To/Enable_authentication_for_LDAP_users/image33.webp)

![clicking on detailed logs](/img/How_To/Enable_authentication_for_LDAP_users/image34.webp)

![confirming that the SSO authentication is working by seeing the username of the user in safesquid detailed logs](/img/How_To/Enable_authentication_for_LDAP_users/image35.webp)

