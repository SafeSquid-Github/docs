# Testing Kerberos SSO Authentication Setup

## Configure Authentication in SafeSquid's Access Restrictions

SafeSquid's WebGUI is used to create/modify policy configuration. We can access the WebGUI from any authorized system, depending on Access Restrictions configuration section (by default ALL are allowed). To ensure that we do not get locked up, we will in the following steps configure the Access Restrictions section of SafeSquid to enable the SSO authentication, and then to enable authentication for only our Test Client **windows7.safesquid.test (My client machine)**. You may choose **AD browser** for testing purpose.

My Test Client machine: **windows7.safesquid.test (Connect in your domain and should able to resolve. Verify time synchronization)**

**We already done** [Preparatory Steps](https://help.safesquid.com/portal/en/kb/articles/validate-ip-addresses-and-the-systems-are-reachable-on-the-network) (Verify it once before setting proxy)

Configure your Internet browser to use **sabproxy.safesquid.test** : **port_usually_8080** as your proxy server.

**Note**: You should NOT be using the **IP address: port** format now. Always use **FQDN of Proxy Server**

![configuring your browser to use safesquid proxy by setting your FQDN and por](/img/How_To/Testing_your_Kerberos_SSO_authentication_setup/image1.webp)

## [Access the SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

## Go to Configure Page

![clicking on configure in safesquid interface](/img/How_To/Testing_your_Kerberos_SSO_authentication_setup/image2.webp)

## Go to Application Setup

![clicking on application setup](/img/How_To/Testing_your_Kerberos_SSO_authentication_setup/image3.webp)

## Go to Access Restrictions

![going to integrate LDAP in application setup section]

## Enable SSO Authentication

![Enabling SSO authentication in global section](/img/How_To/Testing_your_Kerberos_SSO_authentication_setup/image5.webp)

## Go to Allow list

![going to allow list](/img/How_To/Testing_your_Kerberos_SSO_authentication_setup/image6.webp)

## Change the order of Default entries

To avoid locking yourself to the SafeSquid User Interface.

**See the working of each default Entry here**

![clicking on move down icon to move the entry down](/img/How_To/Testing_your_Kerberos_SSO_authentication_setup/image7.webp)

## Add LDAP users

![clicking on edit policies ](/img/How_To/Testing_your_Kerberos_SSO_authentication_setup/image8.webp)

![selecting true in enabled field from the drop down menu](/img/How_To/Testing_your_Kerberos_SSO_authentication_setup/image9.webp)

![commenting for future reference](/img/How_To/Testing_your_Kerberos_SSO_authentication_setup/image10.webp)

**Note**: If your LDAP server is not integrated then you will not see any users list in the drop-down menu.

![clicking on LDAP profiles and selecting the LDAP user and LDAP group from your LDAP server from the drop down menu](/img/How_To/Testing_your_Kerberos_SSO_authentication_setup/image11.webp)

Here I am selecting the manager group from my AD so this policy will only applicable for the users from this group (manager group).

If you want to apply rule for all the users, then keep this entry blank.

![leaving the PAM authentication field as true](/img/How_To/Testing_your_Kerberos_SSO_authentication_setup/image12.webp)

![select or deselect CONFIG option for the safesquid interface access ](/img/How_To/Testing_your_Kerberos_SSO_authentication_setup/image13.webp)

![clicking on close icon to remove CONFIG from access](/img/How_To/Testing_your_Kerberos_SSO_authentication_setup/image14.webp)

![clicking on save policy](/img/How_To/Testing_your_Kerberos_SSO_authentication_setup/image15.webp)

Access the internet, confirm that you can access the web the way should be. '(**'It should not ask you for authentication prompt**)

Take a look at the output of the **tail command** that you had earlier left running on the Linux console.

You will see request from the user that had logged into the **windows7.safesquid.test** system and the user should be getting identified as username@SAFESQUID.TEST@ 192.168.221.212

On the console leave this tail command running.

tail -f /opt/safesquid/safesquid/logs/extended/extended.log

Here we will be validating the SSO authentication, and the log lines here will reveal the success of our undertaken steps.

If you can confirm that, hurrah you are done!

To enable Windows Integrated authentication for the rest of your enterprise, modify the entry you created in the Access Restrictions for IP 192.168.221.212 and simply leave the IP address field blank.
