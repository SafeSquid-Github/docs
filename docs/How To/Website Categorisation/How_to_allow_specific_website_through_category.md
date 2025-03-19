# How to Allow Specific Website through Category

## Client Scenario

Stark tech is having 200 employees. Stark tech distributes all 200 employees into different '**User Groups**'. Now Stark tech blocked all the websites for defined 'User Group' say 'General Users'

Stark tech challenges are:

General users allow to access specific websites, namely, www.safesquid.com,etc.When users access those websites get block template. The general user should not be able to access anything else apart from the mentioned websites.

Suppose websites like 'google' is blocked for defined User groups. The users of that user group should be able to access google.com, google.co.in, google.co.uk.

## Solution

The SafeSquid Custom Category feature is a solution that proposed for Stark tech.

The solution is 'white list' mentioned websites(safesquid.com) from Custom Category and apply allow action to it.

Suppose websites like 'google' wants to allow for defined User groups, white list the 'google' website from Custom Category feature of SafeSquid and apply allow action to it So that you will get access of both google.com, google.co.in, google.co.uk

Note: if your white list 'google' it will match google.com, google.co.in, google.co.uk

but if your white list 'google.com' then google.co.in will not match.

## Prerequisites

HTTPS Inspection should be enabled in SafeSquid. If not enabled, you can check our document - How to enable HTTPS Inspection

![Access blocked Template](/img/How_To/How_to_allow_specific_website_through_category/image1.webp)

## [Access SafeSquid interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface) 

## Go to configure page

![Access configure page to allow specific website through category](/img/How_To/How_to_allow_specific_website_through_category/image2.webp)

## Go to Custom Settings: Categorize Web-sites

![Select categorize website under Custom setting to allow specific website through category](/img/How_To/How_to_allow_specific_website_through_category/image3.webp)

## Add your website to the custom category

![Click on search to add website to the custom category](/img/How_To/How_to_allow_specific_website_through_category/image4.webp) ![View default categories to added website to the custom category](/img/How_To/How_to_allow_specific_website_through_category/image5.webp) ![Add website to the custom category](/img/How_To/How_to_allow_specific_website_through_category/image6.webp) ![Click on modify to Add website to the custom category](/img/How_To/How_to_allow_specific_website_through_category/image7.webp) ![Confirmation of website added successfully to the custom category](/img/How_To/How_to_allow_specific_website_through_category/image8.webp)

## Go to Search

![View Default policies under policies and profiles](/img/How_To/How_to_allow_specific_website_through_category/image9.webp)

## Search policy: "WHITELIST"

![Search 'WHITELIST' policy to allow specific website through category](/img/How_To/How_to_allow_specific_website_through_category/image10.webp)

![Edit and Enabled 'WHITELIST' policy true to allow specific website through category](/img/How_To/How_to_allow_specific_website_through_category/image11.webp)

!['WHITELIST' is default category to allow specific website through category](/img/How_To/How_to_allow_specific_website_through_category/image12.webp)

![Select Action as allow to allow specific website through category](/img/How_To/How_to_allow_specific_website_through_category/image13.webp)

![Give policy name to allow specific website through category](/img/How_To/How_to_allow_specific_website_through_category/image14.webp)

![Save policy and keep allow specific website through category policy above global block policy](/img/How_To/How_to_allow_specific_website_through_category/image15.webp)
