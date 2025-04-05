## If my SSO authentication fails is LDAP fail over functionality available in SafeSquid?

If user unable to get access for network enterprise in case, user should not face any problem of authentication because SafeSquid gives you a fantastic functionality known as LDAP fail-over.

If user face any issue while SSO authentication he/she should give LDAP valid credentials i.e. Username and Password.

Once username and password validated user should get access for network enterprise.


## Can I integrate an LDAP service like Microsoft Active Directory or OpenLDAP with SafeSquid?

Yes, you can integrate an LDAP service like Microsoft Active Directory or OpenLDAP with SafeSquid if your network enterprises that many users have, popularly manage user credentials via a centralized system.

Microsoft's Active Directory, and OpenLDAP based various Directory Services are extremely popular for setting up a centralized user identity management system.

A Web Gateway when integrated to a Directory Service, can:

Authenticate the users, based on their Directory Service Credentials,

Control their access to the web depending upon their enterprise role and hierarchy,

Log and report their activity, in a manner that the HR managers can analyse internet usage individually and of groups of people.


# Enable authentication for LDAP users

## [Access the SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

## Enable Authentication

### Click on configure

![Click on configure](/img/How_To/Enable_authentication_for_LDAP_users/image1.webp)

![clicking on application setup](/img/How_To/Enable_authentication_for_LDAP_users/image2.webp)

![clicking on access restriction in application setup ](/img/How_To/Enable_authentication_for_LDAP_users/image3.webp)

By default, SSO is TRUE don't change anything here

Dont change Anything in Global Section

![By default SSO is TRUE don't change any thing here](/img/How_To/Enable_authentication_for_LDAP_users/image4.webp)

![safesquid comes with some default entries under allow list. You can edit or create a new entry as per your requirement](/img/How_To/Enable_authentication_for_LDAP_users/image5.webp)

See the working of each Entry [here](https://help.safesquid.com/portal/en/kb/articles/working-of-default-entries-in-access-restrictions)

![default entry given for adding LDAP users into a single user group](/img/How_To/Enable_authentication_for_LDAP_users/image6.webp)

![clicking on edit policies to edit the default policy](/img/How_To/Enable_authentication_for_LDAP_users/image7.webp)

![by default enabled field is false. make it true ](/img/How_To/Enable_authentication_for_LDAP_users/image8.webp)

![adding comment for future reference](/img/How_To/Enable_authentication_for_LDAP_users/image9.webp)

![when your want to trace an entry make it true in the trace entry field otherwise leave it as false](/img/How_To/Enable_authentication_for_LDAP_users/image10.webp)

![in LDAP profiles selecting the users or user groups you want to set the authentication for](/img/How_To/Enable_authentication_for_LDAP_users/image11.webp)

If you want to Authenticate all users from Active Directory Leave this field empty.

Note: If you want to leave this field blank make sure that the user or IP address from where you are accessing SafeSquid interface must be free from authentication.

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


# Define User Groups That Correspond To Role-based Groups In LDAP

## Overview

Creating User Groups based on LDAP users or Groups and enabling SSO authentication for that user.

## Prerequisites

Integrate LDAP server with SafeSquid. If not see our document - [Integrate Active Directory for SSO Authentication](https://help.safesquid.com/portal/en/kb/articles/integrate-active-directory-for-sso-authentication)

Note: [Avoid Locking Yourself to SafeSquid Interface When You Are Configuring Policies in Access Restrictions](https://help.safesquid.com/portal/en/kb/articles/avoid-locking-yourself-when-you-are-configuring-policies-in-access-restrictions)

## [Access The SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

## Go to Configure Page

![Go to Configure Page Section to define User Groups That Correspond To Role-based Groups In LDAP](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image1.webp)

## Go to Application Setup

![Go to Application Setup to define User Groups That Correspond To Role-based Groups In LDAP](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image2.webp)

## Go to Access Restrictions

![Go to Access Restrictions to define User Groups That Correspond To Role-based Groups In LDAP](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image3.webp)

## Enable SSO Authentication

![How to Enable SSO Authentication](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image4.webp)

## Go to Allow list

![Go to Allow list section](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image5.webp)

## Change the order of Default entries

[To avoid locking yourself to the SafeSquid User Interface.](https://help.safesquid.com/portal/en/kb/articles/avoid-locking-yourself-when-you-are-configuring-policies-in-access-restrictions)

**See the working of each default Entry** here

![How to Change the order of Default entries by clicking move down icon](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image6.webp)

## Add LDAP users

![Edit Policies to add LDAP users](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image7.webp)

![Edit Policies to add LDAP users 2 Enabled True option](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image8.webp)

![Edit Policies to add LDAP users - add comment](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image9.webp)

If your LDAP server is not integrated then you will not see any users list in the drop-down menu

![Edit Policies to add LDAP users - select LDAP User or Group](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image10.webp)

![Edit Policies to add LDAP users - PAM Authentication](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image11.webp)

![Edit Policies to add LDAP users - select Access option](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image12.webp)

The config value in Access represents the SafeSquid Interface access

![Edit Policies to add LDAP users - Remove Access option ](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image13.webp)

![Edit Policies to add LDAP users - Select Access option](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image14.webp)

![Edit Policies to add LDAP users - Add Usergroup](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image15.webp)

![Edit Policies to add LDAP users - Save policy](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image16.webp)

## Creating Multiple User Groups

You can also create the new entry at the bottom, but again you want to re order the entries. So, clone is the better way to add new user groups.

![Clone Entry to add more entry for more user or group](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image17.webp)

![Edit policies to add new user groups -](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image18.webp)

![Edit comment ](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image19.webp)

![Select LDAP User or Group](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image20.webp)

![PAM Authentication for user](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image21.webp)

![Create New user Group or select existing user group](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image22.webp)

![Modify Entry in allow list to define user group that correspond to role based groups in LDAP](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image23.webp)

## Adding Administrators in ADMINS entry

![Adding Administrators in ADMINS entry](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image24.webp)

Here you should Add the logged in user with his Username and Password.

Example:

**Now, I am accessing my SafeSquid interface from my Active Directory server with the following details**

**User: Administrator@safeSquid.test**

**Password: sarva@12345**

**Then I will add this user in the ADMINS entry.**

![View Administrator from LDAP server in LDAP profile](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image25.webp)

![Select PAM authentication for Administrator from LDAP server in LDAP profile as true](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image26.webp)

![Save policy for with PAM authentication for Administrator from LDAP server in LDAP profile as true](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image27.webp)

![After saving policy for with PAM authentication for Administrator from LDAP server in LDAP profile as true can be view in allow list](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image28.webp)

## Check the Entry for General Users

![Check entry for general users in allow list](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image29.webp)

## Testing User Authentication

![To view User Authentication click on reports](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image30.webp)

![To view User Authentication click on detailed log](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image31.webp)

![Authenticated user can be seen in detailed log section](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image32.webp)

![Click on statistics to view list of Authentication Failures](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image33.webp)

## Check for Authentication Failures

![Check for user list of Authentication Failures](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image34.webp)

## Save Configuration

When you click on Save config, it will give you a prompt for asking the confirmation to store your configuration into the cloud.

Select Yes only in below cases:

1## ) if you want to use this same configuration in other SafeSquid instances.

2## ) if your total configuration in all sections is completed and validated.

Otherwise select No and click on submit

![Save configuration of policy that define user or user group](/img/How_To/Define_User_Groups_That_Correspond_To_Role-based_Groups_In_LDAP/image35.webp)


# Integrate OpenLDAP for Simple Authentication

## Overview

Here i am integrating my Active Directory with following information.

**IP Address**: 192.168.247.10

**Domain of Active Directory**: safesquid.net

**Base Dn**: dc=safesquid,dc=net

**User Name**: cn=admin,dc=safesquid,dc=net

See more about Integrate LDAP section, here we explained the working of each field in the Integrate LDAP section.

## Prerequisites

Make sure that all the values (LDAP server FQDN, LDAP server IP, Username, password, base dn, domain) in configuration are correct. If any value is wrong SafeSquid will fail to fetch the entries.

## [Access the SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

## Go to configure Page

![clicking on configure in safesquid interface](/img/How_To/Integrate_openLDAP_for_simple_authentication/image1.webp)

## Go to Application Setup 

![clicking on application setup](/img/How_To/Integrate_openLDAP_for_simple_authentication/image2.webp)

## Go to Integrate LDAP

![going to integrate LDAP in application setup section](/img/How_To/Integrate_openLDAP_for_simple_authentication/image3.webp)

## Enable Integrate LDAP 

![ensuring the LDAP section is enabled. by default it is set as false](/img/How_To/Integrate_openLDAP_for_simple_authentication/image4.webp)

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

**if you want to use this same configuration in other SafeSquid instances.**

**if your total configuration in all sections is completed and validated.**

**Otherwise select No and click on submit.**


# Integrate OpenLDAP with SafeSquid

## Overview

Here I am integrating my Active Directory with following information.

**IP Address: 192.168.247.10**

**Domain of Active Directory: safesquid.net**

**Base Dn : dc=safesquid,dc=net**

**User Name: cn=admin,dc=safesquid,dc=net**

See more about [**Integrate LDAP section**](https://help.safesquid.com/portal/en/kb/articles/integrate-ldap), here we explained the working of each field in the Integrate LDAP section.

## Prerequisites

Make sure that all the values (LDAP server FQDN, LDAP server IP, Username, password, base dn, domain ) in configuration are correct. If any value is wrong SafeSquid will fail to fetch the entries.

## [Access the SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

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

if you want to use this same configuration in other SafeSquid instances.

if your total configuration in all sections is completed and validated.

Otherwise select No and click on submit


### LDAP Users

You can integrate a LDAP service like OpenLDAP or Microsoft AD to setup Basic Proxy Authentication

The openLDAP service is much simpler to implement and managing the users through LDAPadmin is much easier than the SafeSquid Users and the SafeSquid Linux Machine Users.

Microsoft AD need to up and running on the Windows server and it is also easy to manage through LDAPadmin.

These methods could be used it the number of the users in an organization are roughly around 50-65.

The integration part is a bit tricky but once it is done then there won't be any problem in the future.

Read more about [How to integrate AD or OpenLDAP with SafeSquid](https://help.safesquid.com/portal/en/kb/articles/integrate-ad-or-openldap-with-safesquid)
