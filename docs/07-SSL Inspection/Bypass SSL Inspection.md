---
title: Bypass HTTPS Inspection 
Description: Learn how to configure SafeSquid Secure Web Gateway to bypass HTTPS inspection for specific websites using request types. Protect privacy and meet compliance by excluding sensitive traffic from decryption.  
Keywords:  
- SafeSquid HTTPS inspection bypass  
- SSL decryption exclusion SafeSquid  
- SafeSquid request types configuration  
- Bypass SSL inspection specific websites  
- SafeSquid web proxy HTTPS control  
- Compliance proxy SSL inspection  
- SafeSquid decryption rules  
---

## Business challenge

The HTTPS inspection Bypass option enables you to define specific websites that are not subject to decryption as they flow through the proxy. Some websites may include personal identification information that should not be decrypt. In order to avoid liability for inspecting this type of information, you may want to specify some or all of these sites for decryption bypass. The selected sites will not be decrypt even if the category or categories that the sites belong to are selected for SSL analysis.

## To bypass HTTPS Inspection enabled SafeSquid default configuration

### [Access the SafeSquid User Interface](/docs/08-SafeSquid%20Interface/Accessing%20the%20SafeSquid%20Interface.md)

![clicking on configure in safesquid interface](/img/How_To/Bypass_HTTPS_Inspection_by_using_Request_Types/image1.webp)

![clicking on search ](/img/How_To/Bypass_HTTPS_Inspection_by_using_Request_Types/image2.webp)

### Search policy: "BYPASS SSL INSPECTION" to Search

![searching "BYPASS SSL INSPECTION"](/img/How_To/Bypass_HTTPS_Inspection_by_using_Request_Types/image3.webp)

### Edit policy to Enable as TRUE (Inspection Policies)

![search results for "BYPASS SSL INSPECTION" and clicking on edit to enable the rule as true](/img/How_To/Bypass_HTTPS_Inspection_by_using_Request_Types/image4.webp)

![selecting the true value in enabled](/img/How_To/Bypass_HTTPS_Inspection_by_using_Request_Types/image5.webp)

![clicking on save policy to save it](/img/How_To/Bypass_HTTPS_Inspection_by_using_Request_Types/image6.webp)

### Edit policies and profiles to Enable as TRUE

![editing the default policies to bypass ssl inspection for applications and categories](/img/How_To/Bypass_HTTPS_Inspection_by_using_Request_Types/image7.webp)

### How to create new policy to bypass HTTPS Inspection

![example of how to create new policy to bypass SSL inspection](/img/How_To/Bypass_HTTPS_Inspection_by_using_Request_Types/image8.webp)

### Go to Request Types

![going to request types in request types section in sidebar](/img/How_To/Bypass_HTTPS_Inspection_by_using_Request_Types/image9.webp)

![clicking on add new to create a new policy](/img/How_To/Bypass_HTTPS_Inspection_by_using_Request_Types/image10.webp)

![writing comment for reference and entering regular expression of dropbox as an example to match all the dropbox websites](/img/How_To/Bypass_HTTPS_Inspection_by_using_Request_Types/image11.webp)

![writing comment for reference and entering regular expression of dropbox as an example to match all the dropbox websites](/img/How_To/Bypass_HTTPS_Inspection_by_using_Request_Types/image11.webp)

![enabling smart TLD as true to match all the dropbox websites](/img/How_To/Bypass_HTTPS_Inspection_by_using_Request_Types/image12.webp)

![giving a unique name for the created request type in Added request Types](/img/How_To/Bypass_HTTPS_Inspection_by_using_Request_Types/image13.webp)

### Go to Access Policies

![creating a new policy in access profiles](/img/How_To/Bypass_HTTPS_Inspection_by_using_Request_Types/image14.webp)

![writing relevant comment, adding the created request type in request type parameter and mentioning the BYPASS SSL INSPECTION in Added profiles](/img/How_To/Bypass_HTTPS_Inspection_by_using_Request_Types/image15.webp)

![click on save policy to save](/img/How_To/Bypass_HTTPS_Inspection_by_using_Request_Types/image16.webp)

> **Note**: Configure Proxy settings in drop box and upload/download files to validate the working
