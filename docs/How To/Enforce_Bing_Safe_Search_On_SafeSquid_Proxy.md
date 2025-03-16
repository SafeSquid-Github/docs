# Enforce Bing Safe Search On SafeSquid Proxy

## Overview

Enforce Safe Search on Google search results. SafeSquid forcefully enforce the Safe Search on Google Search engine. It will not allow you to disable the SafeSearch.

When you're using Bing Search at work or at home, SafeSearch can help you filter sexually explicit content from your results. Although SafeSearch isn't 100% accurate, but it's designed to help block explicit results, like pornography, from your Bing search results.

## Prerequisites

SSL Inspection should be enabled in SafeSquid. If not enabled, you can check our document - [How to Enable HTTPS Inspection](https://help.safesquid.com/portal/en/kb/articles/setup-https-inspection)

## [Access The SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

### Go to Configure Page

![Go to configure page in safesquid interface](/img/How_To/Enforce_Bing_Safe_Search_On_SafeSquid_Proxy/image1.webp)

![Search for "ENFORCE BING SAFE SEARCH" in the default policies](/img/How_To/Enforce_Bing_Safe_Search_On_SafeSquid_Proxy/image2.webp)

### Enable the default entry

![clicking on edit policies to edit the default policy](/img/How_To/Enforce_Bing_Safe_Search_On_SafeSquid_Proxy/image3.webp)

![selecting true in enabled field to make this policy true](/img/How_To/Enforce_Bing_Safe_Search_On_SafeSquid_Proxy/image4.webp)

![clicking on save policy](/img/How_To/Enforce_Bing_Safe_Search_On_SafeSquid_Proxy/image5.webp)

### Go to Real time content security

![Go to Real time content security](/img/How_To/Enforce_Bing_Safe_Search_On_SafeSquid_Proxy/image6.webp)

### Go to Redirect

![Clicking on redirect section ](/img/How_To/Enforce_Bing_Safe_Search_On_SafeSquid_Proxy/image7.webp)

![By default the global is false in redirect section ](/img/How_To/Enforce_Bing_Safe_Search_On_SafeSquid_Proxy/image8.webp)

### Enable Redirect Section 

![clicking on edit policies in global](/img/How_To/Enforce_Bing_Safe_Search_On_SafeSquid_Proxy/image9.webp)

![selecting the true in enabled field on global](/img/How_To/Enforce_Bing_Safe_Search_On_SafeSquid_Proxy/image10.webp)

![clicking on save policy to save it as true](/img/How_To/Enforce_Bing_Safe_Search_On_SafeSquid_Proxy/image11.webp)

### Go to Redirection policies

![Going to redirect polices tab in redirect section](/img/How_To/Enforce_Bing_Safe_Search_On_SafeSquid_Proxy/image12.webp)

### Check the default entry in Redirection policies

![By default the "ENFORCE BING SAFE SEARCH" rule is true. if it is false then set this to true](/img/How_To/Enforce_Bing_Safe_Search_On_SafeSquid_Proxy/image13.webp)

## Testing

![Testing the policy by searching porn in bing search](/img/How_To/Enforce_Bing_Safe_Search_On_SafeSquid_Proxy/image14.webp)

**Troubleshoot:**

[Safe Search is not working](https://help.safesquid.com/portal/en/kb/articles/safe-search-is-not-working)

## Save Configuration

![saving the configuration by clicking on save config](/img/How_To/Enforce_Bing_Safe_Search_On_SafeSquid_Proxy/image15.webp)
