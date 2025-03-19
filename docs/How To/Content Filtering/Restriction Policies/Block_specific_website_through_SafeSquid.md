# Block specific website through SafeSquid

## Client Scenario

Stark tech is having 200 employees. Stark tech distributes all 200 employees into different 'User Groups'. Now Stark tech wants to blocked specific websites for defined 'User Group' say 'MANAGERS'

Stark tech challenges are:

All Managers should not allow to access specific websites e.g. Facebook.com. When managers access those websites should get blocked template.

Suppose website like 'google' (search engine) is blocked for defined User groups. The users of that user group should not be able to access google.com, google.co.in, google.co.uk.

## Solution

The SafeSquid Custom Category feature is a solution that proposed for Stark tech.

The solution is 'blacklist' mentioned websites from Custom Category and apply Do not bypass action to it.

Suppose you want to block 'facebook.com'.

Create Custom Category: blacklist and apply Action: Do not bypass So that you should get block template.

**Note:**

If you blacklist 'google' it will match google.com, google.co.in, google.co.uk

But if you blacklist 'google.com' then google.co.in will not match.

## Prerequisites

HTTPS Inspection should be enabled in SafeSquid. If not enabled, you can check our document - [How to enable HTTPS Inspection](https://help.safesquid.com/portal/en/kb/articles/setup-https-inspection)

**Note**: Even though HTTPS inspection is disabled it will work. But it will not show the block template.

Enable SSqore as TRUE which is under application setup (By default SSqore should be Enabled as TRUE)

## [Access the SafeSquid interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

### Go to configure page

![click on configure in safesquid interface](/img/How_To/Block_specific_website_through_SafeSquid/image1.webp)

### Go to Categorize Web-Sites under Custom Settings

![going to Categorize Web-Sites under Custom Settings](/img/How_To/Block_specific_website_through_SafeSquid/image2.webp)

![click on search after entering the website](/img/How_To/Block_specific_website_through_SafeSquid/image3.webp)

![showing default categories of the entered website](/img/How_To/Block_specific_website_through_SafeSquid/image4.webp)

### Add your website to the custom category

![adding website to the desired category](/img/How_To/Block_specific_website_through_SafeSquid/image5.webp)

![showing success message after successfully adding the website to the category](/img/How_To/Block_specific_website_through_SafeSquid/image6.webp)

### Go to Access Profiles in Restriction Policies

![going to access profiles to create a new policy](/img/How_To/Block_specific_website_through_SafeSquid/image7.webp)

![selecting the website category in categories parameter](/img/How_To/Block_specific_website_through_SafeSquid/image8.webp)

![selection of category ](/img/How_To/Block_specific_website_through_SafeSquid/image9.webp)

![selecting action as Do_Not_Bypass so that safesquid will use applied profiles to block website](/img/How_To/Block_specific_website_through_SafeSquid/image10.webp)

![section of action Do_Not_Bypass](/img/How_To/Block_specific_website_through_SafeSquid/image11.webp)

![giving unique name to the policy ](/img/How_To/Block_specific_website_through_SafeSquid/image12.webp)

![saving the created policy by clicking on save](/img/How_To/Block_specific_website_through_SafeSquid/image13.webp)

![clicking on global save to save it globally](/img/How_To/Block_specific_website_through_SafeSquid/image14.webp)

![for blocking multiple websites, list out the websitess in a .txt file and upload in categorize web-sites section](/img/How_To/Block_specific_website_through_SafeSquid/image15.webp)

![example of the txt file](/img/How_To/Block_specific_website_through_SafeSquid/image16.webp)

![selecting the default category/add custom category ](/img/How_To/Block_specific_website_through_SafeSquid/image17.webp)

![clicking on upload to create a category of those uploaded websites](/img/How_To/Block_specific_website_through_SafeSquid/image18.webp)
