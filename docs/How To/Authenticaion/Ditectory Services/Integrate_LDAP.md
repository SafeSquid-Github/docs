# Integration of LDAP

Here I am integrating my Active Directory with following information.

**Active Directory FQDN**: ad.safesquid.test

**IP Address**: 192.168.221.1

**User Name**: administrator@safesquid.test

**Domain of Active Directory**: safesquid.test

**Basedn**: dc=safesquid,dc=test

## Prerequisites

Make sure that all the values (LDAP server FQDN, LDAP server IP, Username, password, base dn, domain) in configuration are correct. If any value is inappropriate then SafeSquid will fail to fetch the LDAP entries.

## [Access the SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

![clicking on configure in safesquid interface](/img/How_To/Integrate_LDAP/image1.webp)

## Go to Application Setup

![clicking on application setup in sidebar](/img/How_To/Integrate_LDAP/image2.webp)

## Go to Integrate LDAP

![going to integrate LDAP](/img/How_To/Integrate_LDAP/image3.webp)

## Global

Integrate with Microsoft Active Directory or OpenLDAP.

SafeSquid can also use the Directory Server for authenticating the users.

This will be useful specially when a user cannot be authenticated via Kerberos/SSO.

![by default the global section is false](/img/How_To/Integrate_LDAP/image4.webp)

### Enabled

Enable or Disable the use of LDAP

**TRUE**: Enable LDAP section.

**FALSE**: Disable LDAP section

![clicking on edit policy to enable the global section](/img/How_To/Integrate_LDAP/image5.webp)

![selecting true from the drop down menu](/img/How_To/Integrate_LDAP/image6.webp)

![clicking on save policy](/img/How_To/Integrate_LDAP/image7.webp)

## LDAP servers

You can configure more than one LDAP server here

Users from all the enabled entries are fetched by SafeSquid and can be viewed in 'LDAP Entries'.

![clicking on LDAP servers tab](/img/How_To/Integrate_LDAP/image8.webp)

### Create the New LDAP entry

![creating a new LDAP entry by clicking on add new button](/img/How_To/Integrate_LDAP/image9.webp)

### Enabled

Enable or Disable this entry.

**TRUE**: Enable this entry.

**FALSE**: Disable this entry.

### Comment

For documentation, and future references, explain the relevance of this entry with your policies.

That is, by reading the policies, a future user can understand the purpose of that entry.

![some default values are set to some options. leaving enabled as true and writing comment for future reference](/img/How_To/Integrate_LDAP/image10.webp)

### **Host Name**

Specify host name of the SafeSquid.

In a network with multiple LDAP Servers, and multiple SafeSquid Proxy Servers deployed in Master-Slave mode, this field can be used to specify the Host Name of the Proxy Server, which communicates with the LDAP Server configured.

Leave this field blank if this is the only SafeSquid proxy, or if you want all the proxies to communicate with the LDAP server configure.

### **Ldap FQDNIP**

Enter FQDN of LDAP Server.

Use **IP address of LDAP Server** if you are not going for **negotiate authentication**.

![entering your LDAP server IP in Ldap FQDNIP field](/img/How_To/Integrate_LDAP/image11.webp)

For **Kerberos SSO** (single sign on) setup specify value like **FQDNIP** (Ex: 'ad.safesquid.test192.168.221.1') and select 'Negotiate'(NEGOTIATE_LDAP_AUTH) bind type.

![entering your LDAP server FQDN and IP in ad.safesquid.test192.168.221.1 (example) format](/img/How_To/Integrate_LDAP/image12.webp)

### **Ldap Port**

Specify the Port for LDAP service. Default Ldap Port is 389.

### **Use SSL**

Communicate with LDAP service using TLS protocol by copying LDAP service CA certificate into security directory and rename CA certificate to LDAP_CA_FILE.cer file.

**Note**: If you do not wish to verify server certificate then do not mention CA certificate. SafeSquid performs SSL without requesting server certificate.

**TRUE** : Select this for SSL based LDAP communications.

**FALSE**: Select this for simple LDAP communications.

![leaving ldap port and use SSL to their default ](/img/How_To/Integrate_LDAP/image13.webp)

### **Ldap Bind Method**

Choose the best method for Binding (authenticating) with your Directory Server according to appropriate binding mechanisms.

![clicking on ldap bind method and selecting appropriate method from the drop down menu](/img/How_To/Integrate_LDAP/image14.webp)

**Simple** : Select this, if your Directory Server supports Simple LDAP Authentication.

**NTLM** : Select, if your Directory Server supports NTLM based LDAP Authentication.

**Negotiate** : Select, if your Directory Server supports Negotiate based LDAP Authentication.

![clicking on ldap bind method and selecting negotiate method from the drop down menu](/img/How_To/Integrate_LDAP/image15.webp)

### **Query Record Limit**

Specify the maximum number of records that should be fetched in a single LDAP query.

### **Ldap User Filter**

SafeSquid applies LDAP user filter to narrow the scope of entries requested, to search the users in the LDAP.

By default configuration, LDAP server returns only entries that necessarily match the requirement of objectclass="person and" also have at least one of the attributes of UserPrincipalName or sAMAccountname or uid set.

### **Ldap Group Filter**

Specify the LDAP Group Filter. This is required if the LDAP server does not support Reverse Group Membership.

**Note**: Microsoft Windows AD server normally supports Reverse Group Membership.

Legacy OpenLDAP implementations may not have support for Reverse Group Membership.

If the LDAP server supports Reverse Group Membership, then leave this field blank.

SafeSquid will apply this filter to narrow the scope of entries requested, to search the groups in the LDAP.

**For example if**: LDAP Group Filter: (|(objectclass="posixGroup)(objectclass=groupofNames)) and, Group" Identifier : member, members, memberof

SafeSquid will constructs filter: (|(objectclass="posixGroup)(objectclass=groupofNames)) and set" member, members, member of as the attributes that may be returned in the ldap search queries.

Thus, LDAP server will return only entries that necessarily match the requirement of objectclass="posixGroup or objectclass=groupofNames.The DN of the resulting entries are considered as Groups and values assigned to attributes of member or members or memberof as the users belonging to the respective Groups.

![leaving the Ldap port ,use SSL, Query Record Limit, ldap user filter, Ldap group filter as default](/img/How_To/Integrate_LDAP/image16.webp)

### **Ldap Username**

Specify any one Username to bind LDAP Server. Most OpenLDAP servers allow binding anonymously. In such cases, you may leave this blank.

For Microsoft AD Servers specify a UserPrincipalName (username@domain.com) or sAMAccountname (Username).

![entering adminstrator username. example: administrator@safesquid.test](/img/How_To/Integrate_LDAP/image17.webp)

### **Ldap Password**

Specify the Encrypted Password for the above username to bind to Microsoft AD or LDAP Server. When you click on 'Utilities', you will get a dialog box to enter password for encrytion.

Click on 'Encrypt' button to proceed with password encryption process.

**For Example** : Test1 is an user present in Microsoft AD Servers. Enter same password for user Test1, encrypt the password and copy the encrypted password.

![clicking on encrypt password icon](/img/How_To/Integrate_LDAP/image18.webp)![entering admin password and confirming the password by entering in respective field](/img/How_To/Integrate_LDAP/image19.webp)

![clicking on encrypt to encrypt the password](/img/How_To/Integrate_LDAP/image20.webp)

### **Ldap Basedn**

Specify the Basedn of the LDAP Server in Ldap format

**For example**: For Domain of Active Directory: safesquid.test, enter your Basedn as: dc=safesquid,dc=test

![entering your basedn as dc=safesquid,dc=test ( example)](/img/How_To/Integrate_LDAP/image21.webp)

### **Ldap Domain**

Specify the LDAP Domain name, for the users, who must be authenticated as users of this LDAP server.

If you have multiple LDAP servers, SafeSquid selects the appropriate LDAP server to identify and validate a user, by using this as the identifier.

**For example:** If you set LDAP Domain of Active Directory: safesquid.test, then all users who present their credentials as username@safesquid.test are identified and validated from this LDAP server.

**Note**: Setting this is extremely important, particularly if you are using multiple LDAP servers.

![entering your ldap domain name. example: safesquid.test](/img/How_To/Integrate_LDAP/image22.webp)

### **Login Attribute**

Specify the attributes of a user's entry in LDAP server, that can be permitted for being used for validating user's credentials. Any or all attributes that are unique for each user in the LDAP server, can be specified here.

SafeSquid extracts the user's DN using these attributes, and uses the DN, and the user's supplied password to bind with the LDAP server.

**For example** : if you could set: Login Attributes: sAMAccountname,uid,UserPrinicipalName,mail and thus allow your users to use their sAMAccountname or uid or UserPrinicipalName or emailid for the purpose of authentication and profiling. Specifying Attributes that may not be supported by the LDAP server is permissible, though not effective.

**Note** : The list of Login Attributes is comma separated, and unnecessary spaces must be removed.

### **Group Identifier**

Specify the LDAP Attributes that may be used to as Group Identifiers, identify a user's group membership.

**For example**: Group Identifiers: member, memberof, members, memberuid, memberid, uniquemember.

If Reverse Group Membership has been implemented on the LDAP server the values assigned to these attributes for a user, are considered as their group memberships.

In such cases the entries resulting in the LDAP query for user search, on the basis of Login Attributes, all values assigned to the specified Group Identifiers are considered as groups to which the user subscribes to.

Typically, in case of Microsoft AD, you could have left the text box for Group Filter empty, and values assigned to memberof attributes would have been considered as the user's groups.

Legacy implementations of OpenLDAP does not support Reverse Group Membership by default. In such case you would have specified an appropriate value in the Group Filter text box.

SafeSquid would then be able to extract all the entries in LDAP that qualify as Groups. Then the values assigned to the attributes listed in the Group Filter for each of the entries would be considered as users belonging to these Groups.

**Note** : Specifying Attributes that may not be supported by the LDAP server are harmless, though not effective &The list of Group Identifier must be comma separated, and unnecessary spaces must be removed.

![clicking on save policy](/img/How_To/Integrate_LDAP/image23.webp)

## LDAP Entries

View list of LDAP entries that are fetched by SafeSquid from the LDAP service(s) configured.

![clicking on ldap entries tab to check for entries](/img/How_To/Integrate_LDAP/image24.webp)

![showing all the users from directory in ldap entries tab](/img/How_To/Integrate_LDAP/image25.webp)

**Note:** You can use Search Text Box to search users from AD(Active Directory) / Open LDAP. Login Attribute menu is used to search users or OU(Organizational Unit) from AD(Active Directory) / Open LDAP.
