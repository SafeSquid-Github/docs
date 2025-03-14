# Create User Groups based on network IP and LDAP (Active directory)

## Overview 

SafeSquid's Access Restriction section provides you an option to divide your users into specific user groups and use that user groups to define different set of Access Rules to that specific user groups.

You want to define an access restriction to your users based on their role, then you can add the users into separate User Groups in Access Restriction section and use that User Groups to set the access rules.

For example, in my organization I have to divide users into different groups such as HR TEAM, SALES TEAM, MANAGERS, GENERAL USERS...etc.

The access policies for that groups defined as follows:

Full internet access to the MANAGERS

Only Job Portals to the HR TEAM

Only Marketing Related websites to SALES TEAM

Deny total internet to the GENERAL USERS, they are allowed to access internal websites only.

Deny the access to consumer google accounts to ALL GROUPS

So, I added those users or groups into separate User Groups in Access Restriction section of SafeSquid, and I used that User Groups to define the access policies mentioned same as above.

You can also define the access policies based on user's network IP addresses.

## Prerequisites

You must have integrated LDAP setup, if you want to create user groups based on LDAP users.

## Creating User Groups 

Below are the different ways to define your User Groups

## Define User Groups that correspond to role-based groups in LDAP. (User-group based Policies)

If you have an LDAP server integrated with SafeSquid and you want to define the access policies based on the LDAP users or Groups, then follow this method

Read more about [Define User Groups That Correspond to Role-based Groups In LDAP](https://help.safesquid.com/portal/en/kb/articles/define-user-groups-that-correspond-to-role-based-groups-in-ldap)

## Define User Groups that correspond to specific users

If you don't have LDAP server to integrate with SafeSquid, but you want to assign usernames and passwords to your users, then follow this method

Read more about Define User Groups that correspond to specific users

## Define User Groups that include or exclude users based on their Network IP (IP based Policies)

If you want to define the access rules based on users network IP addresses then follow this method.

Read more about [Define User Groups that include or exclude users based on their Network IP](https://help.safesquid.com/portal/en/kb/articles/define-user-groups-that-include-or-exclude-users-based-on-their-network-ip)
