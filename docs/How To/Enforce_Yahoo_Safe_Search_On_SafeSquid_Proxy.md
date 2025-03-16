# Enforce Yahoo Safe Search On SafeSquid Proxy

## Overview

Enforce SafeSearch on Yahoo search results. SafeSquid forcefully enforce the Safe Search on yahoo Search engine. It will not allow you to disable the SafeSearch.

When you're using Yahoo Search at work or at home, SafeSearch can help you filter sexually explicit content from your results. Although SafeSearch isn't 100% accurate, but it's designed to help block explicit results, like pornography, from your Yahoo search results.

## Prerequisites

SSL Inspection should be enabled in SafeSquid. If not enabled, you can check our document - [How To Enable HTTPS Inspection](https://help.safesquid.com/portal/en/kb/articles/setup-https-inspection)

## [Access The SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

### Go to Configure Page

![Go to configure page in safesquid interface](/img/How_To/Enforce_Yahoo_Safe_Search_On_SafeSquid_Proxy/image1.webp)

![Search for "ENFORCE YAHOO SAFE SEARCH" in the default policies](/img/How_To/Enforce_Yahoo_Safe_Search_On_SafeSquid_Proxy/image2.webp)

### Enable the default entry in Policies and profiles

![clicking on edit policies to edit the default policy](/img/How_To/Enforce_Yahoo_Safe_Search_On_SafeSquid_Proxy/image3.webp)

![selecting true in enabled field to make this policy true](/img/How_To/Enforce_Yahoo_Safe_Search_On_SafeSquid_Proxy/image4.webp)

![clicking on save policy](/img/How_To/Enforce_Yahoo_Safe_Search_On_SafeSquid_Proxy/image5.webp)

### Go to Real time Content Security

![Go to Real time content security](/img/How_To/Enforce_Yahoo_Safe_Search_On_SafeSquid_Proxy/image6.webp)

### Go to Redirect 

![Clicking on redirect section ](/img/How_To/Enforce_Yahoo_Safe_Search_On_SafeSquid_Proxy/image7.webp)

![By default the global is false in redirect section ](/img/How_To/Enforce_Yahoo_Safe_Search_On_SafeSquid_Proxy/image8.webp)

### Enable Redirection Policies

![clicking on edit policies in global](/img/How_To/Enforce_Yahoo_Safe_Search_On_SafeSquid_Proxy/image9.webp)

![selecting the true in enabled field on global](/img/How_To/Enforce_Yahoo_Safe_Search_On_SafeSquid_Proxy/image10.webp)

![clicking on save policy to save it as true](/img/How_To/Enforce_Yahoo_Safe_Search_On_SafeSquid_Proxy/image11.webp)

### Go to Redirection policies

![Going to redirect polices tab in redirect section](/img/How_To/Enforce_Yahoo_Safe_Search_On_SafeSquid_Proxy/image12.webp)

### Check the default entry in Redirection Policies

![By default the "ENFORCE YAHOO SAFE SEARCH" rule is true. if it is false then set this to true](/img/How_To/Enforce_Yahoo_Safe_Search_On_SafeSquid_Proxy/image13.webp)

## Testing

![Testing the policy by searching porn in yahoo search](/img/How_To/Enforce_Yahoo_Safe_Search_On_SafeSquid_Proxy/image14.webp)

**Troubleshoot:**

[Safe Search is not working](https://help.safesquid.com/portal/en/kb/articles/safe-search-is-not-working)

## Save configuration 

Click on bottom left Icon to save the configuration.

![saving the configuration by clicking on save config](/img/How_To/Enforce_Yahoo_Safe_Search_On_SafeSquid_Proxy/image15.webp)
