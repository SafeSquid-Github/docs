---
title: Content Moderation
description: Learn how to configure SafeSquid to filter inappropriate content, including pornography, by using custom categorization, image filters, and text analyzers.
---

## Overview
Prevent the users to access the inappropriate content like pornography.

## Prerequisites
HTTPS Inspection should be enabled in SafeSquid. If not enabled, you can check our document - [How to enable HTTPS Inspection](/docs/03-SSL%20Inspection/main.md)

## Select the Filters to block 
To block inappropriate content from web, SafeSquid provides different types of filters.

If know the domains then you can use **custom categorization** to block all websites.

If you want to block pornographic images, you can use image filter.

If you want to block pornographic content, you can use text analyzer.

SafeSquid provides you with some default rules in "Text analyzer" to block pornographic content from web.

And in image filter also there is one default policy exist, to block the pornographic images.

## Custom Categorization
SafeSquid comes with sample policy, helping you in policy creation.

Click on 'Configuration' which is at top right of the SafeSquid Interface.

In SafeSquid sample policies " Inappropriate content Strictly block for all users" policy is already present. You have to just enable certain policies, so that it becomes applicable.

You will come across a page with some policies already in place. Search for 'GLOBAL BLOCK'.

![blocking inappropriate content for all users](/img/How_To/Content_Filtering/image1.webp)

Edit the policy and enable the policy by setting Enabled as TRUE and save (Save button is placed at right bottom)

## Image Analyzer
You have to just check the default section is enable or not.By default it should be Enable as TRUE

Make the Global Section Enabled to TRUE.

Then click on Filtering Policies and Enable policy to Enable as TRUE

Read more about [How to block inappropriate images by using Image Analyzer](/docs/05-Content%20Security/06-Content%20Moderation/Image%20Analzer.md)

## Text Analyzer
You have to just check the default section is enable or not.By default it should be Enable as FALSE

Make the Global Section Enabled to TRUE.

Then click on Filtering Policies and Enable policies to Enable as TRUE.


Read more about [Image Analyzer](/docs/05-Content%20Security/06-Content%20Moderation/Image%20Analzer.md) and [Text Analyzer](/docs/05-Content%20Security/06-Content%20Moderation/Text%20Analyzer.md)

## Testing
Access any pornographic content from your browser, then you will see the blocked template of SafeSquid. And Pornographic images will be blocked due to image analyzer.



SafeSquid’s content moderation engine analyzes and filters web content in real-time to enforce compliance, safety, and productivity policies.

## Included Modules
- [Image Analyzer](/docs/05-Content%20Security/06-Content%20Moderation/Image%20Analzer.md): Detects inappropriate or non-compliant visual content using AI-powered image analysis.
- [Text Analyzer](/docs/05-Content%20Security/06-Content%20Moderation/Text%20Analyzer.md): Scans and classifies textual content for profanity, hate speech, and policy violations.

Use these tools to build a safer and policy-compliant browsing environment.
