---
title: Integration of LDAP  
description: Learn how to integrate Microsoft Active Directory or OpenLDAP with SafeSquid Secure Web Gateway to enable centralized authentication, user profiling, and access control. This guide includes step-by-step configuration for LDAP servers, bind methods, and advanced filtering options.  
keywords:  
- safesquid ldap integration  
- connect active directory to safesquid  
- ldap authentication safesquid  
- configure ldap proxy authentication  
---

Here I am integrating my Active Directory with the following information.

1. Active Directory FQDN: ad.safesquid.test
1. IP Address: 192.168.221.1
1. User Name: administrator@safesquid.test
1. Domain of Active Directory: safesquid.test
1. Basedn : dc=safesquid,dc=test

## Prerequisites
Make sure that all the values (LDAP server FQDN, LDAP server IP, Username, password, base DN, domain) in the configuration are correct. If any value is inappropriate, SafeSquid will fail to fetch the LDAP entries.

## [Access SafeSquid interface](/docs/08-SafeSquid%20Interface/Accessing%20the%20SafeSquid%20Interface.md)

![clicking on configure in safesquid interface](/img/Configure/Application_Setup/Integration_of_LDAP/image1.webp)

## Go to Application Setup
![clicking on application setup in sidebar](/img/Configure/Application_Setup/Integration_of_LDAP/image2.webp)

## Go to Integrate LDAP
![going to integrate LDAP](/img/Configure/Application_Setup/Integration_of_LDAP/image3.webp)

## Global
Integrate with Microsoft Active Directory or OpenLDAP.

SafeSquid can also use the Directory Server to authenticate the users.

This will be useful especially when a user cannot be authenticated via Kerberos/SSO.

![by default the global section is false](/img/Configure/Application_Setup/Integration_of_LDAP/image4.webp)

#### Enabled
Enable or disable the use of LDAP

**TRUE**: Enable the LDAP section.

**FALSE**: Disable the LDAP section.

![clicking on edit policy to enable the global section](/img/Configure/Application_Setup/Integration_of_LDAP/image5.webp)

![selecting true from the drop down menu](/img/Configure/Application_Setup/Integration_of_LDAP/image6.webp)

![clicking on save policy](/img/Configure/Application_Setup/Integration_of_LDAP/image7.webp)

## LDAP servers
You can configure more than one LDAP server here.

Users from all the enabled entries are fetched by SafeSquid and can be viewed in 'LDAP Entries'.

![clicking on LDAP servers tab](/img/Configure/Application_Setup/Integration_of_LDAP/image8.webp)

#### Create the New LDAP entry
![creating a new LDAP entry by clicking on add new button](/img/Configure/Application_Setup/Integration_of_LDAP/image9.webp)

#### Enabled
Enable or Disable this entry.

**TRUE**: Enable this entry.

**FALSE**: Disable this entry.

#### Comment
For documentation and future references, explain the relevance of this entry with your policies.

That is, by reading the policies, a future user can understand the purpose of that entry.

![some default values are set to some options. leaving enabled as true and writing comment for future reference](/img/Configure/Application_Setup/Integration_of_LDAP/image10.webp)

#### Host Name
Specify the hostname of the SafeSquid.

In a network with multiple LDAP Servers and multiple SafeSquid Proxy Servers deployed in Master-Slave mode, this field can be used to specify the Host Name of the Proxy Server that communicates with the LDAP Server configured.

Leave this field blank if this is the only SafeSquid proxy, or if you want all the proxies to communicate with the LDAP server configured.

#### LDAP FQDNIP
Enter FQDN of LDAP Server.

Use the **IP address of the LDAP Server** if you are not going to **negotiate authentication**.

![some default values are set to some options. leaving enabled as true and writing comment for future reference](/img/Configure/Application_Setup/Integration_of_LDAP/image10.webp)

For Kerberos SSO (single sign-on) setup specify a value like FQDNIP (Ex: 'ad.safesquid.test192.168.221.1') and select 'Negotiate'(NEGOTIATE_LDAP_AUTH) bind type.

![entering your LDAP server FQDN and IP in ad.safesquid.test192.168.221.1 (example) format](/img/Configure/Application_Setup/Integration_of_LDAP/image11.webp)

#### Ldap Port
Specify the Port for LDAP service. The default LDAP Port is 389.

#### Use SSL
Communicate with the LDAP service using TLS protocol by copying the LDAP service CA certificate into the security directory and renaming the CA certificate to the LDAP_CA_FILE.cer file.

:::note
If you do not wish to verify the server certificate then do not mention the CA certificate. SafeSquid performs SSL without requesting a server certificate.
:::

**TRUE**: Select this for SSL-based LDAP communications.

**FALSE**: Select this for simple LDAP communications.

![leaving ldap port and use SSL to their default ](/img/Configure/Application_Setup/Integration_of_LDAP/image12.webp)

#### LDAP Bind Method
Choose the best method for Binding (authenticating) with your Directory Server according to appropriate binding mechanisms.

![clicking on ldap bind method and selecting appropriate method from the drop down menu](/img/Configure/Application_Setup/Integration_of_LDAP/image13.webp)

1. Simple: Select this, if your Directory Server supports Simple LDAP Authentication.
2. NTLM: Select, if your Directory Server supports NTLM-based LDAP Authentication.
3. Negotiate: Select, if your Directory Server supports Negotiate-based LDAP Authentication.

![clicking on ldap bind method and selecting negotiate method from the drop down menu](/img/Configure/Application_Setup/Integration_of_LDAP/image14.webp)

#### Query Record Limit
Specify the maximum number of records that should be fetched in a single LDAP query.

#### LDAP User Filter
SafeSquid applies an LDAP user filter to narrow the scope of entries requested, to search the users in the LDAP.

By default, configuration, the LDAP server returns only entries that necessarily match the requirement of objectclass="person and" also have at least one of the attributes of UserPrincipalName or sAMAccountname or uid set.

#### LDAP Group Filter
Specify the LDAP Group Filter. This is required if the LDAP server does not support Reverse Group Membership.

:::note
 Microsoft Windows AD server normally supports Reverse Group Membership.
:::

Legacy OpenLDAP implementations may not have support for Reverse Group Membership.

If the LDAP server supports Reverse Group Membership, then leave this field blank.

SafeSquid will apply this filter to narrow the scope of entries requested, to search the groups in the LDAP.

**For example, if**: LDAP Group Filter: (|(objectclass="posixGroup) (objectclass=groupofNames)) and, Group" Identifier: member, members, memberof

SafeSquid will construct filter: (|(objectclass="posixGroup) (objectclass=groupofNames)) and set" member, members, member of as the attributes that may be returned in the LDAP search queries.

Thus, the LDAP server will return only entries that necessarily match the requirement of objectclass="posixGroup or objectclass=groupofNames. The DN of the resulting entries are considered as Groups and values assigned to attributes of member or members or memberof as the users belonging to the respective Groups.

![leaving the Ldap port ,use SSL, Query Record Limit, ldap user filter, Ldap group filter as default](/img/Configure/Application_Setup/Integration_of_LDAP/image15.webp)

#### LDAP Username
Specify any one Username to bind the LDAP Server. Most OpenLDAP servers allow binding anonymously. In such cases, you may leave this blank.

For Microsoft AD Servers specify a UserPrincipalName (username@domain.com) or sAMAccountname (Username).

![entering adminstrator username. example: administrator@safesquid.test](/img/Configure/Application_Setup/Integration_of_LDAP/image16.webp)

#### LDAP Password
Specify the Encrypted Password for the above username to bind to Microsoft AD or LDAP Server. When you click on 'Utilities', you will get a dialog box to enter a password for encryption.

Click on the 'Encrypt' button to proceed with the password encryption process.

**For Example,** Test1 is a user present in Microsoft AD Servers. Enter the same password for user Test1, encrypt the password and copy the encrypted password.

![clicking on encrypt password icon](/img/Configure/Application_Setup/Integration_of_LDAP/image17.webp)

![entering admin password and confirming the password by entering in respective field](/img/Configure/Application_Setup/Integration_of_LDAP/image18.webp)

![clicking on encrypt to encrypt the password](/img/Configure/Application_Setup/Integration_of_LDAP/image19.webp)

#### LDAP Basedn
Specify the Basedn of the LDAP Server in LDAP format.

**For example**: For Domain of Active Directory: safesquid.test, enter your Basedn as: dc=safesquid,dc=test

![entering your basedn as dc=safesquid,dc=test ( example)](/img/Configure/Application_Setup/Integration_of_LDAP/image20.webp)

#### LDAP Domain
Specify the LDAP Domain name, for the users, who must be authenticated as users of this LDAP server.

If you have multiple LDAP servers, SafeSquid selects the appropriate LDAP server to identify and validate a user, by using this as the identifier.

**For example:** If you set LDAP Domain of Active Directory: safesquid.test, then all users who present their credentials as username@safesquid.test are identified and validated from this LDAP server.

:::note
Setting this is extremely important, particularly if you are using multiple LDAP servers.
:::

![entering your ldap domain name. example: safesquid.test](/img/Configure/Application_Setup/Integration_of_LDAP/image21.webp)

#### Login Attributes
Specify the attributes of a user's entry in the LDAP server, that can be permitted for being used for validating user's credentials. Any or all attributes that are unique for each user in the LDAP server, can be specified here.

SafeSquid extracts the user's DN using these attributes and uses the DN, and the user's supplied password to bind with the LDAP server.

**For example**: you could set: Login Attributes: sAMAccountname,uid, UserPrinicipalName, mail and thus allow your users to use their sAMAccountname or uid or UserPrinicipalName or emailid for authentication and profiling. Specifying Attributes that may not be supported by the LDAP server is permissible, though not effective.

:::note
The list of Login Attributes is comma-separated, and unnecessary spaces must be removed.
:::
#### Group Identifier

Specify the LDAP Attributes that may be used as Group Identifiers, and identify a user's group membership.

**For example**: Group Identifiers: member, memberof, members, memberuid, memberid, uniquemember.

If Reverse Group Membership has been implemented on the LDAP server the values assigned to these attributes for a user, are considered as their group memberships.

In such cases, the entries resulting in the LDAP query for user search, based on Login Attributes, all values assigned to the specified Group Identifiers are considered as groups to which the user subscribes.

Typically, in the case of Microsoft AD, you could have left the text box for Group Filter empty, and values assigned to memberof attributes would have been considered as the user's groups.

Legacy implementations of OpenLDAP do not support Reverse Group Membership by default. In such a case, you would have specified an appropriate value in the Group Filter text box.

SafeSquid would then be able to extract all the entries in LDAP that qualify as Groups. Then the values assigned to the attributes listed in the Group Filter for each of the entries would be considered as users belonging to these Groups.

:::note
Specifying Attributes that may not be supported by the LDAP server are harmless, though not effective &The list of Group Identifiers must be comma separated, and unnecessary spaces must be removed.

![clicking on save policy](/img/Configure/Application_Setup/Integration_of_LDAP/image22.webp)

## LDAP Entries
View a list of LDAP entries that are fetched by SafeSquid from the LDAP service(s) configured.

![clicking on ldap entries tab to check for entries](/img/Configure/Application_Setup/Integration_of_LDAP/image23.webp)

![showing all the users from directory in ldap entries tab](/img/Configure/Application_Setup/Integration_of_LDAP/image24.webp)

:::note
You can use Search Text Box to search users from AD (Active Directory) / Open LDAP. The login Attribute menu is used to search users or OU (Organizational Unit) from AD (Active Directory) / Open LDAP.
:::