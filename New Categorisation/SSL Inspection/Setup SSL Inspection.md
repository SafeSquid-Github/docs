# Setup HTTPS Inspection

## Overview

Over the past couple of years, the internet has changed its dimensions in terms of security. The web is shifting towards HTTPS, to deliver secure services to users. "The main motivation for HTTPS is authentication of the visited website and protection of the privacy and integrity of the exchanged data". The authentication happens based on the public key of the website verified by the client browser using trusted certificate authority. So, the users know, they are talking to the right websites and their data is safe.

Until 2010 only 20% of websites were using HTTPS protocol and the rest of 80% of websites were on HTTP. This equation started changing in 2010. For example, Earlier Google services including Google Search were running on HTTP, for security reasons Google started services on HTTPS over HTTP. This change in the web has thrown challenges to security vendors and customers, but both are ready for better web & security.

HTTP traffic is plain text-based message transfer over the network, the traffic can be seen and filtered by any device in the middle. Malware detection and data leak prevention are performed by security products on HTTP traffic to keep users and organizations safe. But HTTPS traffic is encrypted and traffic cannot be seen, or filtered without decrypting traffic and decryption is only possible by trusted parties.

Decrypting HTTPS traffic for scanning is called HTTPS Inspection. If security products do not scan HTTPS traffic, then some users can upload confidential documents to Google Drive and share to wherever they want. Also, such users can download a malicious file and spread it on the company network which can completely hit on organizational productivity. There are lots more that can happen, So Security experts always recommend the usage of HTTPS inspection-enabled products for enhanced security.

Most of the old security products implemented before 2010 cannot scan HTTPS traffic including SafeSquid NTLM editions. SafeSquid SWG was implemented in 2012 with HTTPS inspection support and continually improved HTTPS inspection performance with SSL context caching and session resumption techniques.

To perform HTTPS inspection, SafeSquid should have a trusted [certificate authority (CA).](https://en.wikipedia.org/wiki/Certificate_authority) You can use your enterprise CA as SafeSquid CA or You can generate a self-signed CA for an organization using SafeSquid\'s Self-Service Portal.

## Client Scenario

The director of network security in a financial organization wants to protect the enterprise network from any external threats coming from the web in the form of malware. To accomplish this, the director appoints a Network administrator to make sure the computer network is up to date and operating as intended. The Network administrator needs to gain visibility into these sites otherwise bypass encrypted traffic and control access to malicious websites. The Network administrator should do the following:

Intercept and examine all the traffic, including SSL/TLS (encrypted traffic), coming in and going out of the enterprise network.

Bypass interception of requests to websites containing sensitive information, such as user financial information or emails.

Block access to harmful URLs identified as serving harmful or adult content.

Identify end users (employees) in the enterprise who are accessing malicious websites and block internet access for these users or block harmful URLs.

## Solution

To achieve all the above, the Network administrator should set up a SafeSquid Secure Web Gateway (SWG) in the organization. The proxy server checks all the encrypted and unencrypted traffic passing through the enterprise network. It prompts for user authentication and associates the traffic with a user. URL categories can be specified to block access to Illegal/Harmful, Adult, Malware, and SPAM websites.

## Benefits of HTTPS inspection

-   Forbid the use of a personal Google account for any Google application like Gmail, YouTube, etc.

-   Permit users with bypass privileges to access Facebook in Read Only mode. Users are not allowed to make posts, share, or play games, chat with other Facebook Users, post on their timelines, or Like posts made by others

-   Enforce SafeSearch for users accessing Google Search, Yahoo Search, Bing Search, and YouTube.

-   Permit use of Google SSO for login to web applications

-   Use Virus scanning for both HTTP and HTTPS sites.

-   Forbid users from uploading files to any website.

## Configure the HTTPS inspection 

![Setting up HTTPS inspection](/img/How_To/Setup_HTTPS_Inspection/image1.webp)

## Generate SSL (Self-Signed) certificates from self-service portal

You must generate an SSL certificate from the self-service portal before configuring HTTPS inspection.

[Setup your SSL (Self Signed) certificates from self-service portal](https://help.safesquid.com/portal/en/kb/articles/setting-up-ssl-certificates-from-self-service-portal)

Download [the SSL (Self Signed) Certificate from SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/download-ssl-certificate-from-interface)

Importing SafeSquid SSL certificate into your browser

When SafeSquid is installed in your network with HTTPS inspection enabled and the SSL certificate is not installed into the browser, then you will get an error while accessing the HTTPS websites. You must install the SafeSquid SSL certificate into the browsers.

-   

-   [Importing into Mozilla Firefox ](https://help.safesquid.com/portal/en/kb/articles/importing-your-ssl-certificate-into-firefox)

-   [Importing into Internet Explorer or Chrome Browser](https://help.safesquid.com/portal/en/kb/articles/importing-your-ssl-certificate-into-internet-explorer-or-chrome)[Enabling HTTPS inspection on SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/enabling-https-inspection-on-safesquid-user-interface)

-   

-   [How does HTTPS work?](https://help.safesquid.com/portal/en/kb/articles/how-does-https-work)

## [How does HTTPS inspection work with SafeSquid?](https://help.safesquid.com/portal/en/kb/articles/how-does-https-inspection-work-with-safesquid)Troubleshooting

-   

-   [SSL certificate downloaded with zero size OR unable to download SSL certificate](https://help.safesquid.com/portal/en/kb/articles/ssl-certificate-downloaded-with-zero-size-or-unable-to-download-ssl-certificate)

-   [Application not working with HTTPS inspection](https://help.safesquid.com/portal/en/kb/articles/application-not-working-with-https-inspection)

-   [SSL certification errors](https://help.safesquid.com/portal/en/kb/articles/ssl-certification-errors)

## [Certificate manageability](https://help.safesquid.com/portal/en/kb/articles/certificate-manageability)See Also

-   [Integrate AD or OpenLDAP with SafeSquid](https://help.safesquid.com/portal/en/kb/articles/integrate-ad-or-openldap-with-safesquid)

-   [Enforce Safe Searches ](https://help.safesquid.com/portal/en/kb/articles/how-to-enforce-safesearch)

-   [Enforce YouTube Restricted Mode ](https://help.safesquid.com/portal/en/kb/articles/how-to-enforce-youtube-restricted-mode)

-   [Defend Against Malware and External Attacks](https://help.safesquid.com/portal/en/kb/articles/defend-against-malware-and-external-attacks)



# Enabling HTTPS inspection on SafeSquid User Interface

## [Access the SafeSquid interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

## Go to Configure Page

![clicking on configure in safesquid interface](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image1.webp)

## Open Real time content security side menu

![clicking on Real Time Content Security in the sidebar](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image2.webp)

## Open HTTPS Inspection section

![clicking and opening HTTPS inspection section](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image3.webp)

## Enable HTTPS Inspection

**Note: In newer versions of SafeSquid which are released after June-2017, setup tab is removed. You will see only three subsections in HTTPS inspection section.**

![showing global tab of HTTPS inspection](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image4.webp)

## Open Global part of HTTPS Inspection section and make the Enabled as True.

![clicking on edit policy in global tab ](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image5.webp)![selecting true in drop down menu](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image6.webp)

![clicking on save policy](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image7.webp)

## Open Inspection Policies Tab

Make sure all the policies should be Enabled as True.

![clicking on inspection policy tab](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image8.webp)

![showing of default policies in Inspection policies tab](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image9.webp)

![clicking on edit on last rule of Enforce SSL scanning for all websites](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image10.webp)

![clicking on true in the drop down menu of the policy](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image11.webp)

![clicking on the save policy](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image12.webp)

## Save Configuration

Click on Save Configuration icon situated at bottom left corner.

![clicking on save conf to save the configuration](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image13.webp)

When you click on Save config, it will give a prompt for asking the confirmation to store your configuration into the cloud.

Select Yes only in below cases:

if you want to use this same configuration in other SafeSquid instances.

if your total configuration in all sections is completed and validated.

Otherwise select No and click on submit



# How does HTTPS inspection work with SafeSquid?

![HTTPS inspection flow](/img/How_To/How_does_HTTPS_inspection_work_with_SafeSquid/image1.webp)

1. When user/client request a secure webpage say https://www.xyz.com (a HTTPS site) from the browser, SafeSquid will get CONNECT request from the client browser.

2. SafeSquid will check configuration whether the user is allowed or denied to access to https://www.xyz.com. If access is denied to such websites, then, SafeSquid will send blocked template to that user's browser and closes connection.

3. If access to https://www.xyz.com allowed to client then SafeSquid checks whether SSL inspection enabled for site or not?

If HTTPS inspection is disabled then SafeSquid resolve IP of xyz.com with the help of DNS and establishes connection to the www.xyz.com. Client browser checks the trust of the www.xyz.com server. Client browser encrypts data using server public key and sends back to server. There is no possibility for SafeSquid to check what client is sending to server and what is coming to client's browser from the server. SafeSquid will not check what is going on inside connection.

If HTTPS inspection enabled then

1. SafeSquid resolves IP of www.xyz.com with the help of DNS and establishes connection to the www.xyz.com.

2. SafeSquid performs SSL handshake with server.

SafeSquid sends client hello message to the server in the process of SSL handshake.

SafeSquid will get server public key in server hello message from the server in the process of SSL handshake.

SafeSquid will check the trust of the www.xyz.com certificate with the help of trusted root ca bundle.

If SafeSquid finds that certificate expired or invalid then SafeSquid allows or blocks the access to the site based on configuration.

If SafeSquid finds that server certificate is valid then SafeSquid performs SSL handshake with client.

After this SafeSquid uses server certificate (public key) to encrypt the data that will be sent to server. Further server can decrypt the data sent by the SafeSquid and returns response accordingly.

3. SafeSquid performs SSL handshake with client

Client browsers send client hello message to the SafeSquid server in the process of SSL handshake.

SafeSquid will check whether public key and private key for www.xyz.com site does exist in the disk or not. If site does not exist then SafeSquid will create public key and private key for www.xyz.com and store them in the disk for reusability.

SafeSquid will send back created server public key in server hello message to the client browsers in the process of SSL handshake with client.

Client browsers further verify the trust of the certificate (public key) sent by SafeSquid. To verify the trusted certificate clients, need to import Safesquid.cer certificate into their browsers trusted authority.

After this client uses SafeSquid created certificate (public key) to encrypt the data that will be sent to SafeSquid. SafeSquid can decrypt the data sent by clients with the help of created private key and checks the data and sends it to server by encrypting data with the server public key.



# How does HTTPS work?

When you prepare your web server to use HTTPS you will be asked a few questions about your website and your company including your web site's domain name and your company's name and location. Your web server then creates two cryptographic keys: a private key and a public key. Your private key must remain private or the HTTPS connection could be made vulnerable. The public key does not need to be secret and is placed into a [Certificate Signing Request](https://www.sslshopper.com/what-is-a-csr-certificate-signing-request.html) or CSR, a piece of encrypted text that you will submit to a certificate authority. The certificate authority will validate your details and issue the SSL certificate which you can then install to the web server with the private key to enable HTTPS. For more information, see [SSL For Newbs](https://www.sslshopper.com/article-ssl-for-newbs.html).

![showing flow chart of how https works](/img/How_To/How_does_HTTPS_work/image1.webp)

You can enable or disable HTTPS scanning from SafeSquid HTTPS inspection section.


# Importing SSL Certificate Into Internet Explorer or Chrome

## Overview 

You would need to install SafeSquid SSL certificate in IE or Chrome browsers to allow users to seamlessly browse HTTPS sites.

This article will help you with installation of SafeSquid SSL Certificate on IE or Chrome browser. This may vary depends on your browser versions.

**Note: If you want to use SafeSquid web security client then no need to import your certificates into Chrome or IE.**

## Open Certificate

Open the SafeSquid SSL certificate downloaded from SSL inspection section or from https://key.safesquid.com/portal.html

![opening downloaded safesquid certificate](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image1.webp)

## Click on Install Certificate

![clicking on install certificate](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image2.webp)

## Select Store Location 

![clicking on next](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image3.webp)

## Select Certificate store

![clicking on browse](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image4.webp)

## Select the Trusted Root Certification Authorities and Click on OK button to continue.

![clicking on OK](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image5.webp)

## Click on Next button to continue with importing of SSL certificate.

![clicking on next](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image6.webp)

## Click on Finish button to complete the process.

![clicking on finish](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image7.webp)

## Message will be displayed on the screen for import successful

![clicking on OK](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image8.webp)

![clicking on OK ](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image9.webp)


# Importing SSL Certificate Into Firefox

## Overview

You would need to install SafeSquid SSL certificate in Firefox to allow users to seamlessly browse HTTPS sites.

This article will help you with Installation of SafeSquid SSL Certificate into Mozilla Firefox browser.

## Go to Application Menu

![clicking on application menu in firefox browser](/img/How_To/Importing_Your_SSL_Certificate_Into_Firefox/image1.webp)

## Select Settings

![selecting settings option in application menu](/img/How_To/Importing_Your_SSL_Certificate_Into_Firefox/image2.webp)

## Open Privacy & Security Section 

![opening privacy & security section in settings](/img/How_To/Importing_Your_SSL_Certificate_Into_Firefox/image3.webp)

![scrolling down to find certificates section and clicking on view certificate button](/img/How_To/Importing_Your_SSL_Certificate_Into_Firefox/image4.webp)

![showing certificate manager](/img/How_To/Importing_Your_SSL_Certificate_Into_Firefox/image5.webp)

## Import Certificate 

![clicking on import in certificate manager](/img/How_To/Importing_Your_SSL_Certificate_Into_Firefox/image6.webp)

![selecting the certificate and clicking on open](/img/How_To/Importing_Your_SSL_Certificate_Into_Firefox/image7.webp)

![clicking on ok](/img/How_To/Importing_Your_SSL_Certificate_Into_Firefox/image8.webp)

![clicking on ok](/img/How_To/Importing_Your_SSL_Certificate_Into_Firefox/image9.webp)

## Testing

Note: Make sure you must have [enabled HTTPS inspection in SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/enabling-https-inspection-on-safesquid-user-interface) before testing.

While accessing any HTTPS website you can click on Lock icon before website URL in the address bar. It will display the Certificate Authority verified by SafeSquid.

![accessing any https site and checking the certificate ](/img/How_To/Importing_Your_SSL_Certificate_Into_Firefox/image10.webp)


# Download SSL Certificate From Interface

## Overview 

This article will show download of SafeSquid SSL certificate from the interface.

## Prerequisites

You must have already generated your certificates from the Self-Service Portal. If not see our document [Setting up SSL certificates from Self Service Portal](https://help.safesquid.com/portal/en/kb/articles/download-ssl-certificate-from-interface)

Note: You must restart your SafeSquid service once after generation of SSL certificates from Self-Service portal - Restart SafeSquid from SafeSquid Interface https://help.safesquid.com/portal/en/kb/articles/restart-the-safesquid-service-from-interface

## [Access The SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

### Go to Configure 

![click on configure in safesquid interface](/img/How_To/Download_SSL_Certificate_From_Interface/image1.webp)

### Go to Real Time Content Security

![going to real time content security](/img/How_To/Download_SSL_Certificate_From_Interface/image2.webp)

### Go to HTTPS inspection

![going to HTTPS inspection](/img/How_To/Download_SSL_Certificate_From_Interface/image3.webp)

### Go to SSL Certs/Cache

![going to SSL Certs/Cache tab](/img/How_To/Download_SSL_Certificate_From_Interface/image4.webp)

### Download SSL certificate

![download the certificate by clicking on download button](/img/How_To/Download_SSL_Certificate_From_Interface/image5.webp)

Save the downloaded certificate on to disk and import that certificate into client browsers.



# Enabling HTTPS inspection on SafeSquid User Interface

## [Access the SafeSquid interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

## Go to Configure Page

![clicking on configure in safesquid interface](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image1.webp)

## Open Real time content security side menu

![clicking on Real Time Content Security in the sidebar](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image2.webp)

## Open HTTPS Inspection section

![clicking and opening HTTPS inspection section](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image3.webp)

## Enable HTTPS Inspection

**Note: In newer versions of SafeSquid which are released after June-2017, setup tab is removed. You will see only three subsections in HTTPS inspection section.**

![showing global tab of HTTPS inspection](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image4.webp)

## Open Global part of HTTPS Inspection section and make the Enabled as True.

![clicking on edit policy in global tab ](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image5.webp)![selecting true in drop down menu](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image6.webp)

![clicking on save policy](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image7.webp)

## Open Inspection Policies Tab

Make sure all the policies should be Enabled as True.

![clicking on inspection policy tab](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image8.webp)

![showing of default policies in Inspection policies tab](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image9.webp)

![clicking on edit on last rule of Enforce SSL scanning for all websites](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image10.webp)

![clicking on true in the drop down menu of the policy](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image11.webp)

![clicking on the save policy](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image12.webp)

## Save Configuration

Click on Save Configuration icon situated at bottom left corner.

![clicking on save conf to save the configuration](/img/How_To/Enabling_HTTPS_inspection_on_SafeSquid_User_Interface/image13.webp)

When you click on Save config, it will give a prompt for asking the confirmation to store your configuration into the cloud.

Select Yes only in below cases:

if you want to use this same configuration in other SafeSquid instances.

if your total configuration in all sections is completed and validated.

Otherwise select No and click on submit


## Does SafeSquid inspect HTTPS traffic?

Yes of course, SafeSquid inspect HTTPS traffic.

HTTPS Inspection is the standard Security technology for encrypting a connection between the client and web server.

## When should I enable HTTPS Inspection?

Enable HTTPS inspection on SafeSquid SWG to inspect traffic that encrypted by the Secure Sockets Layer (SSL) protocol. By that SafeSquid do deep content inspection of encrypted HTTPS traffic. Encrypted content filtered easily.


## When should I bypass HTTPS Inspection?

The HTTPS inspection Bypass option enables you to define specific websites that are not subject to decryption as they flow through the proxy.

Some websites may include personal identification information that should not be decrypt.

To avoid liability for inspecting this type of information, you may want to specify some or all these sites for decryption bypass.

The selected sites will not be decrypt even if the category or categories that the sites belong to selected for SSL analysis.


## What are the benefits of HTTPS inspection in SafeSquid?

## Having HTTPS inspection feature some interesting things that you can do with this SafeSquid SWG

You should block access to personal Google accounts.

You should give Read only access to the Facebook, Twitter sites. Users can able to login into their accounts but they cannot able to do post or comment or like or chat.

You should enforce safe search or safety mode-based searches in Google, Bing and Yahoo search engines and also, we can enforce in any websites that are offering safety mode-based search.

You should block images over Google

You should filter text, Images over HTTP, and HTTPS sites

You should allow specified users to access or to login into specified HTTP and HTTPS sites and block others

You should use Virus scanning for both HTTP and HTTPS sites?

You should block attachments to Gmail and Block Gmail Chat

## What is an SSL certificate?

SSL Certificates are small data files that digitally bind a cryptographic key to an organization's details.

When installed on a web server, it activates the padlock and the https protocol and allows secure connections from a web server to a browser.

SSL Certificates provide secure, encrypted communications between a website and an internet browser.

SSL stands for Secure Sockets Layer, the protocol which provides the encryption.

SSL Certificates installed on pages that require end-users to submit sensitive information over the internet like credit card details or passwords.

## Where can I get an SSL certificate?

You should get SSL certificate on **SafeSquid self-service portal** at - https://www.safesquid.com/

You can generate new self-signed certificate also.

Follow - LINK

## Can I use my SSL certificates generated from my Enterprise CA?

Yes, you can use your SSL certificate generated from you Enterprise CA if you have. SafeSquid provides you a facility to use SSL certificate generated from Enterprise CA.
