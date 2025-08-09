---
title: SSL Inspection
Description: Learn how to configure HTTPS inspection in SafeSquid to decrypt and analyze encrypted traffic for enhanced web security, malware detection, and policy enforcement.  
Keywords:  
- SafeSquid HTTPS inspection  
- SSL inspection SafeSquid  
- decrypt HTTPS traffic SafeSquid  
- SafeSquid web proxy HTTPS  
- web filtering encrypted traffic  
- SSL certificate configuration SafeSquid  
- HTTPS scanning enterprise proxy  
- enable SSL inspection SafeSquid  
---
## Overview

Encrypted HTTPS traffic conceals malicious payloads, phishing attempts, and data leakage, bypassing traditional perimeter security. Enterprises need visibility into this traffic for enforcing web usage policies, malware scanning, and preventing data exfiltration. At the same time, privacy-sensitive domains (e.g., banking and healthcare) must remain uninspected to comply with regulations like GDPR and HIPAA.

SafeSquid enables deep inspection of HTTPS traffic with minimal administrative overhead and no end-user disruption. It supports Zero-Trust architecture, granular policy-based bypass, and real-time threat prevention, delivering:

-   Comprehensive visibility into encrypted sessions.
-   Seamless user experience without certificate errors.
-   Granular control over bypass policies for compliance.
-   Enhanced security posture with contextual intelligence.

## How SafeSquid SSL Inspection Works

1.  SafeSquid intercepts HTTPS CONNECT requests and establishes dual SSL tunnels:

    -   Client ⇌ SafeSquid (using SafeSquid-generated certificate)
    -   SafeSquid ⇌ Destination Server (using server's actual certificate)

2.  Decrypts data streams to enforce security policies:

    -   Malware scanning
    -   Data Loss Prevention (DLP)
    -   URL filtering and access control

3.  Re-encrypts and forwards traffic back to clients.

4.  Key features include:

    -   On-the-fly TLS/SSL decryption.
    -   Real-time SSL certificate validation and chain repair.
    -   SNI-aware transparent proxying.

## Prerequisites

### Client-Side Preparations

-   Deploy SafeSquid Root CA certificate to all client systems and browsers.
-   Update endpoint security solutions to trust SafeSquid's MITM certificates.
-   Verify compatibility with applications enforcing SSL pinning.

### SafeSquid-Side Preparations

-   Generate or import enterprise-approved Root CA certificates.
-   Configure Trusted Root CA store for validating upstream certificates.
-   Prepare role-based policies for bypassing sensitive domains and services.

## Configuring HTTPS Inspection

### Generating SSL Certificates

**[Access the Self-Service Portal](https://help.safesquid.com/portal/en/kb/articles/access-the-self-service-portal)**

Log in to the Self-Service Portal - [https://key.safesquid.com](https://key.safesquid.com/) 

The Self-Service Portal for managing your SafeSquid deployments, facilitates easy creation of Trusted Root CA Certificates. 

![interface of self service portal, Picture](/img/SSL_Inspection/image1.webp) 

![clicking on manage certificate, Picture](/img/SSL_Inspection/image2.webp) 

**Generate SafeSquid Certificate**

Using Self-Signed Certificate. 

:::note
When you see the "Generate" button it means that SafeSquid's SSL certificate has not been generated yet. 
:::

![clicking on generate, Picture](/img/SSL_Inspection/image3.webp) 

**Note**: The passphrase entered in step #3 is non-recoverable. Remember to save the passphrase if in case you want to reuse the same certificate with a different activation key. 

![selecting general self signed and entering passphrase for self signed certificate and clicking on generate, Picture](/img/SSL_Inspection/image4.webp)

![clicking on close to continue, Picture](/img/SSL_Inspection/image5.webp)

Using Enterprise CA Certificate 

*With a Passphrase*

Generating SafeSquid certificate using an enterprise CA certificate which has a passphrase. 

![clicking on regenerate, uploading the enterprise CA cert and selecting have passphrase option, Picture](/img/SSL_Inspection/image6.webp) 

![selecting CA cert files, Picture](/img/SSL_Inspection/image7.webp) 

![entering the passphrase and clicking on validate private key, Picture](/img/SSL_Inspection/image8.webp) 

![selecting retain password and clicking on upload, Picture](/img/SSL_Inspection/image9.webp) 

![clicking on close to continue, Picture](/img/SSL_Inspection/image10.webp) 

*Without a Passphrase*

![clicking on regenerate, uploading the enterprise CA cert and selecting does not have passphrase option , Picture](/img/SSL_Inspection/image11.webp) 

![selecting the CA cert files, Picture](/img/SSL_Inspection/image12.webp)

**Note**: The passphrase entered in step #6 is non-recoverable. Remember to save the passphrase if in case you want to reuse the same certificate with a different activation key. 

![entering new passphrase and clicking on upload, Picture](/img/SSL_Inspection/image13.webp) 

![clicking on close to continue, Picture](/img/SSL_Inspection/image14.webp) 

**Download Certificate**

From the Self-Service Portal 

![Rectangle 1, Textbox](/img/SSL_Inspection/image15.webp)
![clicking on download to download your self signed certificate, Picture](/img/SSL_Inspection/image16.webp)

### Enabling SSL Inspection

[**Access the SafeSquid interface**](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface) 

Go to Configure Page 

![clicking on configure in safesquid interface, Picture](/img/SSL_Inspection/image17.webp) 

**Open Real time content security side menu**

![clicking on Real Time Content Security in the sidebar, Picture](/img/SSL_Inspection/image18.webp) 

**Open HTTPS Inspection section**

![](/img/SSL_Inspection/image19.webp) 

**Enable HTTPS Inspection**

**Note: In newer versions of SafeSquid which are released after June-2017, setup tab is removed. You will see only three subsections in HTTPS inspection section.** 

![](/img/SSL_Inspection/image20.webp) 

**Open Global part of HTTPS Inspection section and make the Enabled as True.**

 ![clicking on edit policy in global tab , Picture](/img/SSL_Inspection/image21.webp)![selecting true in drop down menu, Picture](/img/SSL_Inspection/image22.webp) ![clicking on save policy, Picture](/img/SSL_Inspection/image23.webp)

 
**Open Inspection Policies Tab**

Make sure all the policies should be Enabled as True. 

 ![clicking on inspection policy tab, Picture](/img/SSL_Inspection/image24.webp) 

![showing of default policies in Inspection policies tab, Picture](/img/SSL_Inspection/image25.webp) 

![clicking on edit on last rule of Enforce SSL scanning for all websites, Picture](/img/SSL_Inspection/image26.webp) 

![clicking on true in the drop down menu of the policy, Picture](/img/SSL_Inspection/image27.webp) 

![clicking on the save policy, Picture](/img/SSL_Inspection/image28.webp)


**Save Configuration**

Click on Save Configuration icon situated at bottom left corner. 

 ![clicking on save conf to save the configuration, Picture](/img/SSL_Inspection/image29.webp)

When you click on Save config, it will give a prompt for asking the confirmation to store your configuration into the cloud.  

-   Select Yes only in below cases: 

    -   If you want to use this same configuration in other SafeSquid instances. 

    -   If your total configuration in all sections is completed and validated.  

-   Otherwise, select No and click on submit 

## Bypass Inspection

**To bypass HTTPS Inspection enabled SafeSquid default configuration, follow the below steps:**

**[Access the SafeSquid User Interface](/docs/08-SafeSquid%20Interface/Accessing%20the%20SafeSquid%20Interface.md)**

![clicking on configure in safesquid interface, Picture](/img/SSL_Inspection/image30.webp) 

![clicking on search, Picture](/img/SSL_Inspection/image31.webp) 

**Search policy: "BYPASS SSL INSPECTION" to Search**

![searching "BYPASS SSL INSPECTION", Picture](/img/SSL_Inspection/image32.webp) 

**Edit policy to Enable as TRUE (Inspection Policies)**

![search results for "BYPASS SSL INSPECTION" and clicking on edit to enable the rule as true, Picture](/img/SSL_Inspection/image33.webp) 

![selecting the true value in enabled, Picture](/img/SSL_Inspection/image34.webp) 

![clicking on save policy to save it, Picture](/img/SSL_Inspection/image35.webp) 

**Edit policies and profiles to Enable as TRUE **

![editing the default policies to bypass ssl inspection for applications and categories, Picture](/img/SSL_Inspection/image36.webp) 

**How to create new policy to bypass HTTPS Inspection **

![example of how to create new policy to bypass SSL inspection, Picture](/img/SSL_Inspection/image37.webp) 

**Go to Request Types **

![going to request types in request types section in sidebar, Picture](/img/SSL_Inspection/image38.webp) 

![clicking on add new to create a new policy, Picture](/img/SSL_Inspection/image39.webp) 

![writing comment for reference and entering regular expression of dropbox as an example to match all the dropbox websites, Picture](/img/SSL_Inspection/image40.webp) 

![writing comment for reference and entering regular expression of dropbox as an example to match all the dropbox websites, Picture](/img/SSL_Inspection/image40.webp) 

![enabling smart TLD as true to match all the dropbox websites, Picture](/img/SSL_Inspection/image41.webp) 

 

**Go to Access Policies **

![creating a new policy in access profiles, Picture](/img/SSL_Inspection/image42.webp) 

![writing relevant comment, adding the created request type in request type parameter and mentioning the BYPASS SSL INSPECTION in Added profiles, Picture](/img/SSL_Inspection/image43.webp) 

![click on save policy to save, Picture](/img/SSL_Inspection/image44.webp) 

:::note
Configure Proxy settings in drop box and upload/download files to validate the working
:::
