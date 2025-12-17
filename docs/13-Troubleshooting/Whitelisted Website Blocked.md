---
title: Whitelisted Websites Blocked  
Description: Learn how to resolve issues where websites added to the whitelist category are still blocked in SafeSquid. This guide walks you through verifying the categorization engine, editing website categorization, and adjusting access policies for effective web filtering.  
Keywords:  
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

## Issues
The company policy is all the websites that come under the social network category are blocked for all employees, but the company wants to whitelist a few social networking websites. We add those websites to the whitelist category but still while accessing showing a block template.

I want to allow our corporate website, so I have done the necessary configuration for whitelisting, but still, our employees are not able to access our corporate website.

Note: Whitelist category means the category that we have to allow. The blacklist category means the category which we have to block.

## Solution
Make sure that the **sscore** section is enabled. And the categorization engine is loaded successfully. You can check this from the SafeSquid Statistics page from the interface.

Read more about [the SafeSquid Statistics Page.](/docs/06-Audit%20&%20Forensics/01-Reporting%20Module.md)

**You need to add your corporate website to the whitelist category from the Categorize Web-sites section under Custom Settings from SafeSquid UI.**


## Steps

1.  [Access the SafeSquid interface](/docs/01-Getting%20Started/Access%20the%20SafeSquid%20Interface.md)
2.  Go to configure page

![click on configure in SafeSquid Interface](/img/Troubleshooting/White_listed_website_is_blocked/image1.webp)

3.  Go to the **Categorize Web-sites section under Custom Settings** and search website/domain from the **search for category** option.
![Access Blocked Template](/img/Troubleshooting/White_listed_website_is_blocked/image2.webp)
4.  Modify that website with a whitelist category. (A whitelist is a custom category that is made to allow blocked websites)

![Go to categorize web-sites under custom settings section](/img/Troubleshooting/White_listed_website_is_blocked/image3.webp)

![enter the website to be whitelisted and click search](/img/Troubleshooting/White_listed_website_is_blocked/image4.webp)

![](/img/Troubleshooting/White_listed_website_is_blocked/image5.webp)

![Modify that website with whitelist category](/img/Troubleshooting/White_listed_website_is_blocked/image6.webp)

![click on Modify](/img/Troubleshooting/White_listed_website_is_blocked/image7.webp)

![success message of adding category to the category server](/img/Troubleshooting/White_listed_website_is_blocked/image8.webp)

5.  Go to Access profiles for default policy and verify whether the policy is enabled or not. (Make it enabled)
![go to default whitelist policy in access profiles](/img/Troubleshooting/White_listed_website_is_blocked/image9.webp)

![Showing the category "whitelist"](/img/Troubleshooting/White_listed_website_is_blocked/image10.webp)

![Showing the unique name given to the default policy](/img/Troubleshooting/White_listed_website_is_blocked/image11.webp)

![Making sure this policy is above GLOBAL BLOCK policy and saving it](/img/Troubleshooting/White_listed_website_is_blocked/image12.webp)


Use Categorize websites to Create and add websites to the "whitelist category".