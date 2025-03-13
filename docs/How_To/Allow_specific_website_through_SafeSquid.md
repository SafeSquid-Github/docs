# Allow Specific Website Through SafeSquid

## Client Scenario

Stark Tech has 200 employees. Stark Tech distributes all 200 employees into different **'User Groups'**. Now Stark tech blocked all the websites for defined 'User Group' say 'General Users'

Stark tech challenges are:

-   General users are allowed to access specific websites, namely, www.safesquid.com,etc.When users access those websites get a block template. The general user should not be able to access anything else apart from the mentioned websites.

-   Suppose websites like 'google' are blocked for defined User groups. The users of that user group should be able to access google.com, google.co.in, google.co.uk.

## Solution

The SafeSquid Custom Category feature is a solution proposed for Stark tech. The solution is to 'white list' the mentioned websites(safesquid.com) from the Custom Category and apply an allow action to it.

Suppose websites like 'google' want to allow for defined User groups, white list the 'google' website from the Custom Category feature of SafeSquid and apply allow action to it So that you will get access to both google.com, google.co.in, and google.co.uk

**Note**: if your white list is 'google' it will match google.com, google.co.in, and google.co.uk, but if your white list is 'google.com' then google.co.in will not match.

## Prerequisites

HTTPS Inspection should be enabled in SafeSquid. If not enabled, you can check our document - [How to enable HTTPS Inspection.](https://help.safesquid.com/portal/en/kb/articles/setup-https-inspection)

![access blocked template](/img/How_To/Allow_specific_website_through_SafeSquid/image1.webp)

## [Access SafeSquid interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

## Go to configure page

![click on configure in safesquid interface](/img/How_To/Allow_specific_website_through_SafeSquid/image2.webp)

## Go to Custom Settings: Categorize Websites

![go to categorized web-sites under custom settings section and enter the desired website](/img/How_To/Allow_specific_website_through_SafeSquid/image3.webp)

## Add your website to the custom category

![click on search to add the website into a category](/img/How_To/Allow_specific_website_through_SafeSquid/image4.webp)

![shows default categories for entered website](/img/How_To/Allow_specific_website_through_SafeSquid/image5.webp)

![add custom category "whitelist"](/img/How_To/Allow_specific_website_through_SafeSquid/image6.webp)

![click on modify to modify the website's category](/img/How_To/Allow_specific_website_through_SafeSquid/image7.webp)

![success message showing category is added successfully for the website](/img/How_To/Allow_specific_website_through_SafeSquid/image8.webp)

## Go to Search

![click on search in access profiles](/img/How_To/Allow_specific_website_through_SafeSquid/image9.webp)

## Search policy: "WHITELIST"

![searching for "WHITELIST" ](/img/How_To/Allow_specific_website_through_SafeSquid/image10.webp)

![clicking on edit to edit the Enabled](/img/How_To/Allow_specific_website_through_SafeSquid/image11.webp)

![showing default category "whitelist" to allow websites](/img/How_To/Allow_specific_website_through_SafeSquid/image12.webp)

![selecting "allow" action to allow for all users](/img/How_To/Allow_specific_website_through_SafeSquid/image13.webp)

![showing profile unique name ](/img/How_To/Allow_specific_website_through_SafeSquid/image14.webp)

![Making sure this policy is above GLOBAL BLOCK policy and saving it](/img/How_To/Allow_specific_website_through_SafeSquid/image15.webp)
