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
