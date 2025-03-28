# White Listed Website is Blocked

## Issues

The company policy is all the websites that come under the social network category are blocked for all employees, but the company wants to whitelist a few social networking websites. We add those websites to the whitelist category but still while accessing showing a block template.

I want to allow our corporate website, so I have done the necessary configuration for whitelisting, but still, our employees are not able to access our corporate website.

Note: Whitelist category means the category that we have to allow. The blacklist category means the category which we have to block.

## Solution

Make sure that the **sscore** section is enabled. And the categorization engine is loaded successfully. You can check this from the SafeSquid Statistics page from the interface.

Read more about [the SafeSquid Statistics Page.](https://help.safesquid.com/portal/en/kb/articles/use-statistics-to-view-safesquid-stats)

**You need to add your corporate website to the whitelist category from the Categorize Web-sites section under Custom Settings from SafeSquid UI.**

Refer to the link - [Allow specific website through SafeSquid](https://help.safesquid.com/portal/en/kb/articles/allow-specific-website-through-safesquid)

## Steps

1.  [Access the SafeSquid interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

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

Follow [LINK](https://help.safesquid.com/portal/en/kb/articles/how-to-block-or-allow-the-existing-categories) for more information on Aon allowing whitelist websites for all users and gives exceptions from blocking policies.

Use Categorize websites to Create and add websites to the "whitelist category".

Follow the link: [How to allow specific website through category](https://help.safesquid.com/portal/en/kb/articles/how-to-allow-specific-website-through-category#Client_Scenario)
