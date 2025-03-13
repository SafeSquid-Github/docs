## Overview

This section allows you to configure the overall operation to handle scanning of connections under HTTPS (HTTP over SSL).

SSL (Secure Sockets Layer), is the standard security technology for encrypting a connection between a web server and a browser.

Once established, this connection will encrypt all traffic and ensure that all data passed between the web server and browser remains private.

You must set this carefully, depending on the usage of web applications handling HTTPS requests, particularly web 2.0 applications.

All HTTPS requests are matched with the rules defined under the HTTPS scanning policies and actions are taken based on the matching entry.

## HTTPS Inspection Features

Having HTTPS inspection features some interesting things that you can do with this SafeSquid SWG

-   Block access to consumer Google accounts

-   Give Read-only access to the Facebook and Twitter sites. Users can able to login into their accounts but they cannot able to do post, comment, like, or chat.

-   Enforce safe search or safety mode-based searches in Google, Bing, and Yahoo search engines, and, we can enforce in any websites that are offering safety mode-based search.

-   Block images over Google

-   Filter text and images over HTTP and HTTPS sites

-   Allow specified users to access or log into specified HTTP and HTTPS sites and block others

-   Can use Virus scanning for both HTTP and HTTPS sites.

-   Blocking attachments to Gmail and Block Gmail ChatWU.

## Prerequisites

### Generate SSL certificates from self-service portal

First, generate SSL certificates from the self-service portal before configuring HTTPS inspection.

[Setup your SSL certificates from self-service portal](https://help.safesquid.com/portal/en/kb/articles/setting-up-ssl-certificates-from-self-service-portal)

[Download SSL Certificate from SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/download-ssl-certificate-from-interface)

### SSL Certs/Cache

[Download SSL Certificate from SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/download-ssl-certificate-from-interface)

**Download**: Download the SafeSquid certificate.

**Upload**: Upload the SafeSquid Certificate.

**Cache Refresh**: Refresh the cache.

### Importing SafeSquid SSL certificate into your browser

Install SafeSquid SSL certificates into the browsers. If you did not install a certificate into the browser and HTTPS inspection is enabled, then you will get an error while accessing the HTTPS websites.

[Importing into Mozilla Firefox](https://help.safesquid.com/portal/en/kb/articles/importing-your-ssl-certificate-into-firefox)

[Importing into Internet Explorer or Chrome Browser](https://help.safesquid.com/portal/en/kb/articles/importing-your-ssl-certificate-into-internet-explorer-or-chrome)

## Enabling HTTPS inspection on the SafeSquid User Interface

### [Access the SafeSquid interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

### Go to Configure Page

![Goto configure.webp](/img/Configure/Real_Time_Content_Activity/HTTPS_Inspection/image1.webp)

### Go to Real-time content security

![Go to real time content security.webp](/img/Configure/Real_Time_Content_Activity/HTTPS_Inspection/image2.webp)

### Go to HTTPS Inspection

![HTTPS Inspection4.webp](/img/Configure/Real_Time_Content_Activity/HTTPS_Inspection/image3.webp)

### Global

#### Enabled

Enable or Disable this section.

TRUE: Enable HTTPS inspection section.

FALSE: Disable HTTPS inspection section.

![HTTPS Inspection5.webp](/img/Configure/Real_Time_Content_Activity/HTTPS_Inspection/image4.webp)

![HTTPS Inspection6.webp](/img/Configure/Real_Time_Content_Activity/HTTPS_Inspection/image5.webp)

![HTTPS Inspection7.webp](/img/Configure/Real_Time_Content_Activity/HTTPS_Inspection/image6.webp)

![HTTPS Inspection8.webp](/img/Configure/Real_Time_Content_Activity/HTTPS_Inspection/image7.webp)

### Inspection Policies

Each CONNECT request is tested only once for the applicability of the following entries. The first matching entry is applied, and the rest are ignored.

If the matching entry deems that a DeepScan should not be performed, the CONNECT request is handled WITHOUT inspecting the subsequent requests.

If, however, the matching entry deems a DeepScan should be performed, the connection to the remote web server is security-checked for SSL properties as per the rule in the matched entry.

If the remote web server fails to meet the desired standards, connection to that webserver is terminated.

**Note**: DeepScan should only be performed on encrypted connections if the underlying application protocol is HTTP. Applications like Google Drive, Subversion Client, WinScp, etc., do not work if you attempt a DeepScan on them.

![HTTPS Inspection9.webp](/img/Configure/Real_Time_Content_Activity/HTTPS_Inspection/image8.webp)

![HTTPS Inspection10.webp](/img/Configure/Real_Time_Content_Activity/HTTPS_Inspection/image9.webp)

SafeSquid comes with some default Inspection policies as follows

Disable SSL scanning for specific websites. Add websites under the BYPASS HTTPS category to bypass SSL inspection

Allow specific websites to be accessed with exceptions. SafeSquid may not have complete trusted CA certificates, in those cases, websites can be accessed with exceptions.

Enforce SSL scanning for all websites.

Enable or Disable the above policies as per the requirement or add a new policy for the new requirement.

#### Enabled

Enable or Disable this entry

**TRUE**: Enable this entry.

**FALSE**: Disable this entry.

#### Comment

For documentation and future references, explain the relevance of this entry with your policies.

That is, by reading the policies, a future user can understand the purpose of that entry.

#### Profiles

Specify the Profiles applicable for this entry.

This entry will be applicable only if the connection has any one of the specified profiles.

Leave it Blank, to apply for all connections irrespective of any applied profile.

To avoid application to a connection that has a profile, use a negated profile (!profile).

#### DeepScan

Decide if you want to enable scanning within encrypted SSL connections matching this entry.

**TRUE**: Select this option to enable Deep Scanning.

**FALSE**: Select this option to disable Deep Scanning.

#### Block Access to Sites which do not have an SSL Certificate

Decide whether Sites that do not have SSL certificates should be blocked or not.

**TRUE**: This is the default and safe option.

**FALSE**: Select this option only if you want to allow SSL access to websites without SSL certificates.

#### Acceptable Errors in SSL Verification

SafeSquid verifies the SSL certificate to remote SSL web servers.

You can specify here, the acceptable level of error.

Only in specific or exceptional cases choose anything besides X509_V_OK.

#### Block domain mismatch in the website SSL certificate

Decide whether domain name mismatch is to be allowed or not.

SafeSquid validates the DNS and Common Name in the SSL certificates supplied by the remote web server.

Only in exceptional cases set this as FALSE.

**TRUE**: This is the default and safe option.

**FALSE:** Select this option only if you want to allow SSL access to websites that are using certificates issued to domains other than the website.

### Example

#### Rule#1

I want to allow websites that are self-hosted with self-signed certificates.

Connection with profile "ALLOW SELF SIGNED CERT WEBSITES" will bypass SSL error ERR_SELF_SIGNED_CERT_IN_CHAIN.

![Slide1-HttpsInspection.webp](/img/Configure/Real_Time_Content_Activity/HTTPS_Inspection/image10.webp)

### Save Configuration

![Save config final.webp](/img/Configure/Real_Time_Content_Activity/HTTPS_Inspection/image11.webp)

### No configuration required in the Setup tab

**Note:** In new versions of SafeSquid released after June 2017, the setup tab is removed. You will see only three subsections in the HTTPS inspection section.

### Setup

List of Security Passphrase(s) or Server Policies required to generate or load an existing ROOT CA SSL Certificate (RCSC).

The first matching entry below is used and the remaining is ignored.

RCSC is automatically created if none exists already.

If an RCSC exists, a passphrase in the applicable entry is used to load it.

The Private key of the generated RCSC can be used only with the passphrase used to generate it.

The passphrase prevents the private key of your RCSC from being stolen or fraudulent use.

After the RCSC has been successfully generated, the public key of your RCSC can be downloaded from http://safesquid.cfg/safesquid.cer.

The public key must be installed on all the web clients and browsers that are subjected to Deep Scan.

Click on Add below, to add a new entry.

![Ssl-setup.jpg](/img/Configure/Real_Time_Content_Activity/HTTPS_Inspection/image12.webp)

#### Enabled

Enable or Disable this entry

**TRUE:** Enable this entry.

**FALSE:** Disable this entry.

#### Comment

For documentation and future references, explain the relevance of this entry with your policies.

#### Proxy Host

Please enter the hostname of the proxy server as specified in the Startup Parameters.

#### Encrypted Password

Please enter the Encrypted password for disk-based caching of SSL certificates.

#### SSL Cache Store Size

Please enter the size of memory for SSL session information.
