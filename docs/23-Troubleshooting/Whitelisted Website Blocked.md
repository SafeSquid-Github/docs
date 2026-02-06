---
title: Whitelisted Websites Blocked
description: Resolve whitelisted sites still blocked in SafeSquid by verifying categorization, editing category assignments, and adjusting access policies.
keywords:
  - SafeSquid whitelist not working
  - whitelisted website blocked SafeSquid
  - SafeSquid allow specific website
  - SafeSquid categorize websites
  - SafeSquid access policies
  - unblock whitelisted domain
  - troubleshoot SafeSquid category block
  - SafeSquid whitelist category
  - SafeSquid custom web filtering
  - SafeSquid category management
---

## Whitelisted sites still blocked

Company policy blocks the social network category for all employees, but a few social networking sites must be whitelisted. Those sites are added to the whitelist category yet still show a block template. Similarly, after whitelisting the corporate website, employees may still be unable to access it.

Note: Whitelist category is the category to allow. Blacklist category is the category to block.

## Enable sscore and add site to whitelist category

Ensure the **sscore** section is enabled and the categorization engine is loaded. Verify from the SafeSquid Statistics page in the interface. See [the SafeSquid Statistics Page](/docs/Audit%20&%20Forensics/Reporting%20Module). Add the corporate website to the whitelist category from Custom Settings → Categorize Web-sites in the SafeSquid UI.

## Procedure

1.  [Access the SafeSquid interface](/docs/SafeSquid%20SWG/Configuration%20Portal)
2.  Go to configure page

![click on configure in SafeSquid Interface](/img/Troubleshooting/White_listed_website_is_blocked/image1.webp)

3.  Go to the **Categorize Web-sites section under Custom Settings** and search website/domain from the **search for category** option.
![Access Blocked Template](/img/Troubleshooting/White_listed_website_is_blocked/image2.webp)
4.  Modify that website with a whitelist category. (A whitelist is a custom category that is made to allow blocked websites)

![Go to categorize web-sites under custom settings section](/img/Troubleshooting/White_listed_website_is_blocked/image3.webp)

![enter the website to be whitelisted and click search](/img/Troubleshooting/White_listed_website_is_blocked/image4.webp)

![Whitelisted website blocked troubleshooting step or policy edit](/img/Troubleshooting/White_listed_website_is_blocked/image5.webp)

![Modify that website with whitelist category](/img/Troubleshooting/White_listed_website_is_blocked/image6.webp)

![click on Modify](/img/Troubleshooting/White_listed_website_is_blocked/image7.webp)

![success message of adding category to the category server](/img/Troubleshooting/White_listed_website_is_blocked/image8.webp)

5.  Go to Access profiles for default policy and verify whether the policy is enabled or not. (Make it enabled)
![go to default whitelist policy in access profiles](/img/Troubleshooting/White_listed_website_is_blocked/image9.webp)

![Showing the category "whitelist"](/img/Troubleshooting/White_listed_website_is_blocked/image10.webp)

![Showing the unique name given to the default policy](/img/Troubleshooting/White_listed_website_is_blocked/image11.webp)

![Making sure this policy is above GLOBAL BLOCK policy and saving it](/img/Troubleshooting/White_listed_website_is_blocked/image12.webp)


Use Categorize websites to Create and add websites to the "whitelist category".

## Solution Verification

- **Interface Checks**: In [Configuration Portal](/docs/SafeSquid%20SWG/Configuration%20Portal), Custom Settings → Categorize Web-sites: site shows whitelist category. Restriction Policies → Access profiles: default whitelist policy is enabled and above GLOBAL BLOCK.
- **Log Analysis**: Access logs show allowed response for the whitelisted URL; no block template or category block for that domain.
- **Performance Validation**: From a client, open the whitelisted site; page loads without block template.

**Related**: [Web Categorization](/docs/Profiling%20Engine/Web%20Categorization), [Access Restriction](/docs/Access%20Restriction/main), [Reporting](/docs/Audit%20&%20Forensics/Reporting%20Module), [Troubleshooting](/docs/Troubleshooting/main)