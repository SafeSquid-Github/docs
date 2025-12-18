---
title: Block Specific YouTube Channel
description: Learn how to block a specific YouTube channel, such as T-Series, using SafeSquid by creating policies based on Channel-ID and List-ID for targeted video restriction.
keywords:
- block specific youtube channel safesquid
- safesquid youtube video restriction
- youtube channel blocking safesquid
- safesquid block youtube content
- youtube category restriction safesquid
---

## Overview
Prevent users to access specific YouTube Channel like 'T-Series'.

:::note
Blocking of Specific YouTube channel and allowing all the other YouTube videos is a hypothetical scenario. YouTube website is not designed for such hypothetical situation. However, this how-to will demonstrate to block a specific YouTube Channel and one of its playlist videos.
:::

## Prerequisites
HTTPS Inspection should be enabled in SafeSquid. If not enabled, you can check our document - [How to enable HTTPS Inspection.](/docs/03-SSL%20Inspection/main.md)

You need the YouTube **Channel-ID** and **List-ID**. You have to extract Channel-ID and List-ID from YouTube URL before creating rules in SafeSquid.

## Policy Creation
We can achieve the above by following steps --

### Extract Channel-ID from YouTube Channel

1. Open the YouTube channel you want to block. Here T-Series channel is taken as an example.

Here you will get Channel-ID from the referrer URL. **Channel-ID** is the preceding portion of the URL after **'channel/**' part. Save this part on notepad for reference.

T-Series Channel URL: https://www.youtube.com/channel/UCq-Fj5jknLsUf-MWSy4_brA

**Channel-ID: UCq-Fj5jknLsUf-MWSy4_brA**

For **List-ID** extraction click on **PLAY ALL** link on the page as shown below.

![Extract Channel-ID from YouTube Channel to block specific YouTube channel](/img/How_To/Block_Specific_Youtube_Channel/image1.webp)

### Extract List-ID from YouTube Channel

2. Extract **List-ID** from any of the subsequent URL.

**List-ID** is the preceding portion of the URL after **'&list=**' part. Save this part on notepad for reference.

T-Series Channel subsequent URL: https://www.youtube.com/watch?v=IgKdXLfxgQQ&list=PL9bw4S5ePsEE2KMw53rY40A00t4I-otqy

**List-ID: PL9bw4S5ePsEE2KMw53rY40A00t4I-otqy**

![Extract List-ID from YouTube Channel to block specific YouTube channel](/img/How_To/Block_Specific_Youtube_Channel/image2.webp)

You will find every Video in the list contain List-ID of the channel.

T-Series Channel subsequent URL: https://www.youtube.com/watch?v=IgKdXLfxgQQ&list=PL9bw4S5ePsEE2KMw53rY40A00t4I-otqy

**List-ID: PL9bw4S5ePsEE2KMw53rY40A00t4I-otqy**

![Extract List-ID from any of the subsequent YouTube Channel to block specific YouTube channel](/img/How_To/Block_Specific_Youtube_Channel/image3.webp)

3. After extracting the Channel-ID and List-ID we have create policies in SafeSquid.

Go to SafeSquid Web-GUI and click on Configure to create Policies.

![Go to configure section under safesquid web interface to block specific YouTube channel](/img/How_To/Block_Specific_Youtube_Channel/image4.webp)

### Create Policy in Request Types Section

4. Click on Custom Settings to open Request Types Section.

![Select custom setting to open Request types section under safesquid web interface to block specific YouTube channel](/img/How_To/Block_Specific_Youtube_Channel/image5.webp)

6. Make sure the Global of Request Types Section is Enabled to True.

![Enabled Global Request types as True to block specific YouTube channel](/img/How_To/Block_Specific_Youtube_Channel/image6.webp)

7. Click on Request Types tab to create new policy.

![Select Request types to create new policy to block specific YouTube channel](/img/How_To/Block_Specific_Youtube_Channel/image7.webp)

8. Add YouTube Channels in Request Types Field. Create new Request Profile as **T-SERIES CHANNEL** in Added Request Types Field.

![Create new Request Profile as T-SERIES CHANNEL in Added Request Types Field to block specific youtube channel](/img/How_To/Block_Specific_Youtube_Channel/image8.webp)

9. You have to add Channel-ID and List-Id in File Field. You have already saved them in notepad for your reference. Refer to Channel-ID extraction and List-Id extraction.

Here for T-Series channel we added **(UCq-Fj5jknLsUf-MWSy4_brA|PL9bw4S5ePsEE2KMw53rY40A00t4I-otqy)** in File Field.

Save the Policy created.

![Add and save channel ID and List ID in policy to block specific youtube channel](/img/How_To/Block_Specific_Youtube_Channel/image9.webp)

### Create Policy in Access Profiles Section

10. Go to Access Profiles section.

![Create policy in access profile section to block specific YouTube channel](/img/How_To/Block_Specific_Youtube_Channel/image10.webp)

11. Edit the Default Policy already created in SafeSquid named **BLOCK YOUTUBE CHANNELS**. Select **T-SERIES CHANNEL** in Request Types Field. Set Action Field as **DO_NOT_BYPASS.**

![Edit T-series channel in request types field and set action field as DO not bypass to block specific youtube channel ](/img/How_To/Block_Specific_Youtube_Channel/image11.webp)

12. Save the policy created in Access Restrictions.

![Save Block YouTube Channels policy to block specific YouTube channel ](/img/How_To/Block_Specific_Youtube_Channel/image12.webp)

## Test the YouTube Channel Blocked
13. Now try to open the YouTube Channel of T-Series https://www.youtube.com/channel/UCq-Fj5jknLsUf-MWSy4_brA.

All the YouTube channel of T-series will be blocked and Access block Template will be shown.

![Test result of the YouTube Channel Blocked](/img/How_To/Block_Specific_Youtube_Channel/image13.webp)

If you try to open any of the subsequent YouTube videos of T-Series Channel like https://www.youtube.com/watch?v=IgKdXLfxgQQ&list=PL9bw4S5ePsEE2KMw53rY40A00t4I-otqy.

It will be blocked and Access block Template will be shown.

![Blocked and Access block Template will be shown](/img/How_To/Block_Specific_Youtube_Channel/image14.webp)

:::note
This configuration will work only for videos sourced from the channel page and not from the feeds links or YouTube Videos embedded in website.

To block every video of any specific YouTube Channel you have to insert List-ID's (of every playlist in that channel) and file part (of each individual unlisted videos) of URL in the File field of Request Types Section.
:::