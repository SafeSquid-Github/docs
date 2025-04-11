## What is SafeSquid SSO Authentication?

SafeSquid SSO authentication is non-interactive authentication process.

SafeSquid SSO Authentication support is particularly useful for Enterprise networks that have a Microsoft AD based Domain controller.

By properly configuring the necessary Kerberos related factors with SafeSquid, your enterprise Internet users can enjoy SSO Authentication.

SafeSquid SSO authentication ensures that your users do not have to manually provide their user credentials as username / password to access your networked enterprise resources and services, yet their access restricted as specified. SafeSquid SSO authentication, thus not only just adds convenience to the overall user experience, but also enhances security.

## Testing Kerberos SSO Authentication Setup

### Configure Authentication in SafeSquid's Access Restrictions

SafeSquid's WebGUI is used to create/modify policy configuration. We can access the WebGUI from any authorized system, depending on Access Restrictions configuration section (by default ALL are allowed). To ensure that we do not get locked up, we will in the following steps configure the Access Restrictions section of SafeSquid to enable the SSO authentication, and then to enable authentication for only our Test Client **windows7.safesquid.test (My client machine)**. You may choose **AD browser** for testing purpose.

My Test Client machine: **windows7.safesquid.test (Connect in your domain and should able to resolve. Verify time synchronization)**

**We already done** [Preparatory Steps](https://help.safesquid.com/portal/en/kb/articles/validate-ip-addresses-and-the-systems-are-reachable-on-the-network) (Verify it once before setting proxy)

Configure your Internet browser to use **sabproxy.safesquid.test** : **port_usually_8080** as your proxy server.

**Note**: You should NOT be using the **IP address: port** format now. Always use **FQDN of Proxy Server**

![configuring your browser to use safesquid proxy by setting your FQDN and por](/img/How_To/Testing_your_Kerberos_SSO_authentication_setup/image1.webp)

### [Access the SafeSquid User Interface](/docs/08-SafeSquid%20Interface/Accessing%20the%20SafeSquid%20Interface.md)

### Go to Configure Page

![clicking on configure in safesquid interface](/img/How_To/Testing_your_Kerberos_SSO_authentication_setup/image2.webp)

### Go to Application Setup

![clicking on application setup](/img/How_To/Testing_your_Kerberos_SSO_authentication_setup/image3.webp)

### Go to Access Restrictions

![going to integrate LDAP in application setup section]

### Enable SSO Authentication

![Enabling SSO authentication in global section](/img/How_To/Testing_your_Kerberos_SSO_authentication_setup/image5.webp)

### Go to Allow list

![going to allow list](/img/How_To/Testing_your_Kerberos_SSO_authentication_setup/image6.webp)

### Change the order of Default entries

To avoid locking yourself to the SafeSquid User Interface.

**See the working of each default Entry here**

![clicking on move down icon to move the entry down](/img/How_To/Testing_your_Kerberos_SSO_authentication_setup/image7.webp)

## Add LDAP users

![clicking on edit policies ](/img/How_To/Testing_your_Kerberos_SSO_authentication_setup/image8.webp)

![selecting true in enabled field from the drop down menu](/img/How_To/Testing_your_Kerberos_SSO_authentication_setup/image9.webp)

![commenting for future reference](/img/How_To/Testing_your_Kerberos_SSO_authentication_setup/image10.webp)

> **Note**: If your LDAP server is not integrated then you will not see any users list in the drop-down menu.

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


# Kerberos SSO Authentication Setup

## Objective 
 The main aim/objective of this particular authentication is that the user doesn't have to enter its credentials the software will automatically detect from which user group does the user belong and will set the restrictions accordingly. 

## Overview

After installation of Windows Server and integrating AD with SafeSquid we need to configure the DNS settings in Windows Server. This document will give you the step-by-step instructions on how to configure DNS. After completing this we need to add the same credentials we used while setting up our DNS, into the Browser. Then we will be able to view the user group that we have created, in Developer Tools section in our Browser.

## Prerequisite

Microsoft Windows server need to be installed and running on any of the machine. Steps to install Windows Server: [Get started with Windows Server 2019 | Microsoft Docs](https://www.microsoft.com/en-us/evalcenter/evaluate-windows-server-2019)

Microsoft AD needs to be integrated with the SafeSquid for the SSO authentication: Link to do it: https://help.safesquid.com/portal/en/kb/articles/integrate-active-directory-for-sso-authentication.

## Client Scenario

Since we want to use FQDN proxy server and not the IP Address format we need to create a new host and assign a required domain name. For this we will go to the AD which we created named 'mann-ad.safesquid.' Create New host and stet its name as 'sabproxy'. In the FQDN we will enter 'sabproxy.mann-ad.safesquid' and IP address as '192.168.56.101'. Now go to the Browser Settings, select Manual Proxy Configuration. Here we will enter HTTPS proxy as sabproxy.mann-ad.safesquid. Now we would be able to see all the created users in Network Tab in Developer Tools.

## Procedure

### Step 1: Configure the DNS settings:

If you want to achieve this then you will not be using the IP address: port format. We will be using the FQDN of the proxy server. In order to setup the DNS for the FQDN follow the following steps.

1.  Open the Server Manager in the Windows Server and click on tools in the top right corner of the Menu.

![Select Tools option in sever manager to configure the DNS settings for Kerberos SSO Authentication Setup](/img/How_To/Kerberos_SSO_Authentication_Setup/image1.webp)

2.  Now select the DNS option.

![Select DNS to configure the DNS settings for Kerberos SSO Authentication Setup](/img/How_To/Kerberos_SSO_Authentication_Setup/image2.webp)

A window like this will appear.

![Click on Forward Lookup Zones Kerberos SSO Authentication Setup](/img/How_To/Kerberos_SSO_Authentication_Setup/image3.webp)

3.  Click on Forward Lookup Zones.

![Select Forward lookup option for Kerberos SSO Authentication Setup](/img/How_To/Kerberos_SSO_Authentication_Setup/image4.webp)

4.  Select the AD which you created or Integrated with the safesquid in my case it is mann-ad.safequid.

![Select Active Directory Kerberos SSO Authentication Setup](/img/How_To/Kerberos_SSO_Authentication_Setup/image5.webp)

5.  Right click on it and select New Host (A or AAAA).

![Add New Host by selecting New Host option for Kerberos SSO Authentication Setup](/img/How_To/Kerberos_SSO_Authentication_Setup/image6.webp)

6.  Now this is the most important step. For this step you need to know your domain name. To find it use hostname -f command in the safesquid machine. You will find your domain name over here. So, domain name in my case is sabproxy.

![Add Domain name by selecting New Host option for Kerberos SSO Authentication Setup](/img/How_To/Kerberos_SSO_Authentication_Setup/image7.webp)

7.  Enter the following credentials in the fields. Note: The IP address should be the IP of the SafeSquid machine.

![Enter Domain name, FQDN, IP address to add host for Kerberos SSO Authentication Setup](/img/How_To/Kerberos_SSO_Authentication_Setup/image8.webp)

8.  Click on Add Host. It will add the DNS host.

![verify Host](/img/How_To/Kerberos_SSO_Authentication_Setup/image9.webp)

### Step 2: Configuring Settings in the Browser

1.  Now in order to use the proxy open the web browser and go to settings and search for proxy settings.

2.  Select the manual configuration option. Enter the FQDN which you just created in the step no 7 in the Proxy field and enter 8080 as the port number.

![Configuring Settings in the Browser to apply manual proxy configuration ](/img/How_To/Kerberos_SSO_Authentication_Setup/image10.webp)​​​​​​

3.  Click on Okay and restart the browser.

## Output

1.  Now go to any website and right click on it and select on inspect element.

![Verify Configuring Settings in the network setting of Browser to apply manual proxy configuration ](/img/How_To/Kerberos_SSO_Authentication_Setup/image11.webp)

2.  Select the network option from the navigation menu.

![Verify Configuring Settings in the network setting of Browser to apply manual proxy configuration ](/img/How_To/Kerberos_SSO_Authentication_Setup/image12.webp)

3.  Reload the page and select any field.

![Check User Group in the network setting of Browser to apply manual proxy configuration ](/img/How_To/Kerberos_SSO_Authentication_Setup/image13.webp)

4.  You will see the usergroup which you have created.

![Confirmation of User Group in the network setting of Browser to apply manual proxy configuration ](/img/How_To/Kerberos_SSO_Authentication_Setup/image14.webp)



### Kerberos Authentication

You can integrate a LDAP service like OpenLDAP or Microsoft AD to setup Kerberos Proxy Authentication.

The major difference and which makes the life of the users much easier is that it automatically identifies User. This means that the user no longer needs to enter its credentials for the authentication purpose.

The setup of this is trickier than LDAP user but once it's done then it will be much easier to Authenticate the user without remembering the username and password or entering them again and again.

Read more about [Integrate a Linux Host with a Windows AD for Kerberos SSO authentication](https://help.safesquid.com/portal/en/kb/articles/integrate-a-linux-host-with-a-windows-ad-for-kerberos-sso-authentication)
