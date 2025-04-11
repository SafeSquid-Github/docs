---
title: Content Filtering
description: Learn how to configure SafeSquid to filter inappropriate content, including pornography, by using custom categorization, image filters, and text analyzers.
keywords:
- content filtering safesquid
- block inappropriate content safesquid
- block pornographic content safesquid
- image filter safesquid
- text analyzer safesquid
---

## Overview

Prevent the users to access the inappropriate content like pornography.

## Prerequisites

HTTPS Inspection should be enabled in SafeSquid. If not enabled, you can check our document - [How to enable HTTPS Inspection](/docs/07-SSL%20Inspection/Setup%20SSL%20Inspection.md)

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

Read more about [How to block inappropriate images by using Image Analyzer](/docs/11-Deep%20Content%20Security/02-Content%20Moderation/Image%20Analzer.md)

## Text Analyzer

You have to just check the default section is enable or not.By default it should be Enable as FALSE

Make the Global Section Enabled to TRUE.

Then click on Filtering Policies and Enable policies to Enable as TRUE.


Read more about [Image Analyzer](/docs/11-Deep%20Content%20Security/02-Content%20Moderation/Image%20Analzer.md) and [Text Analyzer](/docs/11-Deep%20Content%20Security/02-Content%20Moderation/Text%20Analyzer.md)

## Testing

Access any pornographic content from your browser, then you will see the blocked template of SafeSquid. And Pornographic images will be blocked due to image analyzer.
