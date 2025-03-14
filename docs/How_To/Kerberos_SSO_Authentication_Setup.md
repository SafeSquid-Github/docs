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
