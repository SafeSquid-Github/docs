## Overview

Use this section to prevent users from viewing pornographic image content.

This section allows you to block inappropriate images by analysing the graphical content of an image, in real time.

The default template replaces the blocked image with a checkered box.

## Global

![Image-global.jpg](/img/Configure/Real_Time_Content_Activity/Image_analyzer/image1.webp)

### Enabled

Enable or Disable this section.

-   **TRUE:** Enable image scanning.

-   **FALSE:** Disable image scanning.

### Default template

Specify the template or notification message to be sent, when entry content is matched.

The default template replaces the blocked image with a checkered box.

## Filtering policies

Add policies to apply to the matching entries.

Images are given scores by analysing the graphical content of an image, in real time.

-10.0 is unlikely to be porn, 0 is very likely.

Images are blocked based on the threshold score.

![Image-policy.jpg](/img/Configure/Real_Time_Content_Activity/Image_analyzer/image2.webp)

### Enabled

Enable or Disable this Policy.

-   **TRUE**: Enable this entry.

-   **FALSE**: Disable this entry.

### Comment

For documentation and future references, explain the relevance of this entry with your policies.

That is, by reading the policies, a future user can understand the purpose of that entry.

### Bypass Image Scanning

Enable or disable bypass image filter scanning.

-   **TRUE**: Enable bypass image scanning if you want this entry to be applied for image scanning.

-   **FALSE**: Disable bypass image scanning if you do not want this entry to be applied for image scanning.

### Profiles

Specify the Profiles applicable for this entry.

This entry will be applicable only if the connection has any one of the specified profiles.

Leave it Blank, to apply for all connections irrespective of any applied profile.

To avoid application to a connection that has a profile, use a negated profile (!profile).

### Threshold

Specify the threshold score to block images.

Images are given scores by analysing the graphical content of an image, in real time.

-10.0 is unlikely to be porn, 0 is very likely.

Images are blocked based on the threshold score.

### Template

Specify the template to replace when this entry is matched.

Templates are used throughout Safesquid as a replacement for pages which can't be displayed due to filtering, error, or other conditions.

Specify the template name that should be displayed on a user's screen when this entry matches.

The name should be selected from template section. In template section you can find template name.

The default template replaces the blocked image with a checkered box.

### Debug

Enable to just debug, without blocking.

-   **TRUE**: Do not block, just blur the image if possibly pornographic.

-   **FALSE**: Block images if score is higher than threshold.

## Example

### Rule#1

I want to bypass image filtering for my marketing team users.

Marketing team uses social media for digital marketing, I want to bypass image filtering only for my marketing team users.

However general rule will be applied to marketing team where all adult and blacklisted websites will be blocked.

Using the profile "Bypass image filtering" I can create an access policy which will bypass image filter for Marketing Team.

![Slide1-imgFltr.webp](/img/Configure/Real_Time_Content_Activity/Image_analyzer/image3.webp)

### Rule#2

I want enhanced image scanning for connections with profile "ENFORCE PARANOID IMAGE SCAN'.

Threshold for image scanning is set to -1.0, which will block images where the skin exposure is even slightest compared with the score 0.0.

![Slide2-imgFltr.webp](/img/Configure/Real_Time_Content_Activity/Image_analyzer/image4.webp)

### Rule#3

I want the connections with profile "IMAGE ANALYZER DEBUG" to render the score for each image it scans but it should not blur the images.

This can be helped to understand how Image scanning works.

![Slide3-imgFltr.webp](/img/Configure/Real_Time_Content_Activity/Image_analyzer/image5.webp)

### Rule#4

I want standard image scanning rule which will be applied to every connection.

Images which are adult images will be blocked.

Blocked images will render as blurred images.

![Slide4-imgFltr.webp](/img/Configure/Real_Time_Content_Activity/Image_analyzer/image6.webp)
