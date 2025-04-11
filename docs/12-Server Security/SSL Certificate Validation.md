---
title: SSL Certificate Validation
description: Learn how to import SafeSquid SSL certificates into Chrome, Internet Explorer, and Firefox, and download them from the SafeSquid interface to enable seamless HTTPS inspection and secure encrypted web traffic.
keywords:
- SafeSquid SSL certificate
- HTTPS inspection setup
- import certificate Chrome Firefox
- download SSL SafeSquid
- enable HTTPS proxy
---

## Importing SSL Certificate Into Internet Explorer or Chrome

### Overview 

You would need to install SafeSquid SSL certificate in IE or Chrome browsers to allow users to seamlessly browse HTTPS sites.

This article will help you with installation of SafeSquid SSL Certificate on IE or Chrome browser. This may vary depends on your browser versions.

**Note: If you want to use SafeSquid web security client then no need to import your certificates into Chrome or IE.**

### Open Certificate

Open the SafeSquid SSL certificate downloaded from SSL inspection section or from https://key.safesquid.com/portal.html

![opening downloaded safesquid certificate](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image1.webp)

### Click on Install Certificate

![clicking on install certificate](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image2.webp)

### Select Store Location 

![clicking on next](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image3.webp)

### Select Certificate store

![clicking on browse](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image4.webp)

### Select the Trusted Root Certification Authorities and Click on OK button to continue.

![clicking on OK](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image5.webp)

### Click on Next button to continue with importing of SSL certificate.

![clicking on next](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image6.webp)

### Click on Finish button to complete the process.

![clicking on finish](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image7.webp)

### Message will be displayed on the screen for import successful

![clicking on OK](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image8.webp)

![clicking on OK ](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image9.webp)


## Importing SSL Certificate Into Firefox

### Overview

You would need to install SafeSquid SSL certificate in Firefox to allow users to seamlessly browse HTTPS sites.

This article will help you with Installation of SafeSquid SSL Certificate into Mozilla Firefox browser.

### Go to Application Menu

![clicking on application menu in firefox browser](/img/How_To/Importing_Your_SSL_Certificate_Into_Firefox/image1.webp)

### Select Settings

![selecting settings option in application menu](/img/How_To/Importing_Your_SSL_Certificate_Into_Firefox/image2.webp)

### Open Privacy & Security Section 

![opening privacy & security section in settings](/img/How_To/Importing_Your_SSL_Certificate_Into_Firefox/image3.webp)

![scrolling down to find certificates section and clicking on view certificate button](/img/How_To/Importing_Your_SSL_Certificate_Into_Firefox/image4.webp)

![showing certificate manager](/img/How_To/Importing_Your_SSL_Certificate_Into_Firefox/image5.webp)

### Import Certificate 

![clicking on import in certificate manager](/img/How_To/Importing_Your_SSL_Certificate_Into_Firefox/image6.webp)

![selecting the certificate and clicking on open](/img/How_To/Importing_Your_SSL_Certificate_Into_Firefox/image7.webp)

![clicking on ok](/img/How_To/Importing_Your_SSL_Certificate_Into_Firefox/image8.webp)

![clicking on ok](/img/How_To/Importing_Your_SSL_Certificate_Into_Firefox/image9.webp)

### Testing

Note: Make sure you must have [enabled HTTPS inspection in SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/enabling-https-inspection-on-safesquid-user-interface) before testing.

While accessing any HTTPS website you can click on Lock icon before website URL in the address bar. It will display the Certificate Authority verified by SafeSquid.

![accessing any https site and checking the certificate ](/img/How_To/Importing_Your_SSL_Certificate_Into_Firefox/image10.webp)


## Download SSL Certificate From Interface

### Overview 

This article will show download of SafeSquid SSL certificate from the interface.

### Prerequisites

You must have already generated your certificates from the Self-Service Portal. If not see our document [Setting up SSL certificates from Self Service Portal](https://help.safesquid.com/portal/en/kb/articles/download-ssl-certificate-from-interface)

Note: You must restart your SafeSquid service once after generation of SSL certificates from Self-Service portal - Restart SafeSquid from SafeSquid Interface https://help.safesquid.com/portal/en/kb/articles/restart-the-safesquid-service-from-interface

### [Access The SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

#### Go to Configure 

![click on configure in safesquid interface](/img/How_To/Download_SSL_Certificate_From_Interface/image1.webp)

#### Go to Real Time Content Security

![going to real time content security](/img/How_To/Download_SSL_Certificate_From_Interface/image2.webp)

#### Go to HTTPS inspection

![going to HTTPS inspection](/img/How_To/Download_SSL_Certificate_From_Interface/image3.webp)

#### Go to SSL Certs/Cache

![going to SSL Certs/Cache tab](/img/How_To/Download_SSL_Certificate_From_Interface/image4.webp)

#### Download SSL certificate

![download the certificate by clicking on download button](/img/How_To/Download_SSL_Certificate_From_Interface/image5.webp)

Save the downloaded certificate on to disk and import that certificate into client browsers.



### Does SafeSquid inspect HTTPS traffic?

Yes of course, SafeSquid inspect HTTPS traffic.

HTTPS Inspection is the standard Security technology for encrypting a connection between the client and web server.

### When should I enable HTTPS Inspection?

Enable HTTPS inspection on SafeSquid SWG to inspect traffic that encrypted by the Secure Sockets Layer (SSL) protocol. By that SafeSquid do deep content inspection of encrypted HTTPS traffic. Encrypted content filtered easily.


### When should I bypass HTTPS Inspection?

The HTTPS inspection Bypass option enables you to define specific websites that are not subject to decryption as they flow through the proxy.

Some websites may include personal identification information that should not be decrypt.

To avoid liability for inspecting this type of information, you may want to specify some or all these sites for decryption bypass.

The selected sites will not be decrypt even if the category or categories that the sites belong to selected for SSL analysis.


### What are the benefits of HTTPS inspection in SafeSquid?

### Having HTTPS inspection feature some interesting things that you can do with this SafeSquid SWG

You should block access to personal Google accounts.

You should give Read only access to the Facebook, Twitter sites. Users can able to login into their accounts but they cannot able to do post or comment or like or chat.

You should enforce safe search or safety mode-based searches in Google, Bing and Yahoo search engines and also, we can enforce in any websites that are offering safety mode-based search.

You should block images over Google

You should filter text, Images over HTTP, and HTTPS sites

You should allow specified users to access or to login into specified HTTP and HTTPS sites and block others

You should use Virus scanning for both HTTP and HTTPS sites?

You should block attachments to Gmail and Block Gmail Chat

### What is an SSL certificate?

SSL Certificates are small data files that digitally bind a cryptographic key to an organization's details.

When installed on a web server, it activates the padlock and the https protocol and allows secure connections from a web server to a browser.

SSL Certificates provide secure, encrypted communications between a website and an internet browser.

SSL stands for Secure Sockets Layer, the protocol which provides the encryption.

SSL Certificates installed on pages that require end-users to submit sensitive information over the internet like credit card details or passwords.

### Where can I get an SSL certificate?

You should get SSL certificate on **SafeSquid self-service portal** at - https://www.safesquid.com/

You can generate new self-signed certificate also.

Follow - LINK


### Can I use my SSL certificates generated from my Enterprise CA?

Yes, you can use your SSL certificate generated from you Enterprise CA if you have. SafeSquid provides you a facility to use SSL certificate generated from Enterprise CA.
