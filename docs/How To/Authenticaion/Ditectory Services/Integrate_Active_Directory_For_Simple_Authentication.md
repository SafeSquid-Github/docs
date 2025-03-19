# Integrate Active Directory For Simple Authentication 

## Overview

Here I am integrating my Active Directory with following information. 

Active Directory FQDN : ad.safesquid.test

IP Address : 192.168.221.1

Domain of Active Directory : safesquid.test

Base Dn : dc=safesquid,dc=test

User Name : administrator@safesquid.test

See more about [Integrate LDAP](https://help.safesquid.com/portal/en/kb/articles/1-2-integration-of-ldap) section, here we explained the working of each field in the Integrate LDAP section. 

## Prerequisites

Make sure that all the values (LDAP server FQDN, LDAP server IP, Username, password, base dn, domain ) in configuration are correct. If any value is wrong SafeSquid will fail to fetch the entries.

## [Access the SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

![Application Setup](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image1.webp)

### Go to Application Setup



![Integrate LDAP](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image2.webp)

### Go to Integrate LDAP



![Ensure LDAP Enabled](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image3.webp)

![Ensure LDAP Enabled](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image4.webp)

### Ensure LDAP Section is Enabled



![Go to LDAP Servers](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image5.webp)

![Go to LDAP Servers](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image6.webp)

![Go to LDAP Servers](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image7.webp)

### Go to LDAP Servers

![Create New Entry](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image8.webp)

### Create the New Entry



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

### Test User Extraction



![Save Configuration](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image22.webp)

![Save Configuration](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image23.webp)

### Save Configuration

![Final Screenshot](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image24.webp)

When you click on Save config, it will give a prompt for asking the confirmation to store your configuration into the cloud.
Select Yes only in below cases:

if you want to use this same configuration in other SafeSquid instances.

if your total configuration in all sections is completed and validated. 

Otherwise select No and click on submit.

### Enable authentication for LDAP users

Read more about [Enable authentication for LDAP users](https://help.safesquid.com/portal/en/kb/articles/enable-authentication-for-ldap-users)

### Troubleshooting

[LDAP entries are not fetched](https://help.safesquid.com/portal/en/kb/articles/ldap-entries-are-not-fetched)

[Authentication is not working](https://help.safesquid.com/portal/en/kb/articles/authentication-is-not-working)
