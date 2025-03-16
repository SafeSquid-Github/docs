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
