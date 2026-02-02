---
title: Allow Specific YouTube Channel and its Playlist
description: Learn how to configure SafeSquid to block YouTube access for students while allowing specific channels and playlists for educational purposes.
keywords:
  - allow specific youtube channel safesquid
  - safesquid youtube playlist access
  - block youtube except channels safesquid
  - youtube channel policy safesquid
  - safesquid content filtering youtube
---

## Client Scenario
Ganpat University provides graduate programs to various colleges. Ganpat University distributes the internet to its students. Ganpat University wants to block entire www.youtube.com for their students, but wants some of the YouTube channels allowed which are helpful for students.

Ganpat University's challenges are:

All Students should not be allowed to access www.youtube.com. If any student tries to access YouTube, then he/she should get a blocked template.

Only a few of the specified YouTube channels and their playlists should be allowed. This YouTube channel contains educational and knowledge-sharing videos.

## Solution
You can achieve this by creating a policy in the Request Profiles Section and binding it with policies in the Access Profiles Section.

## Prerequisites
HTTPS Inspection should be enabled in SafeSquid. If not enabled, you can check our document - [How to enable HTTPS Inspection.](/docs/03-SSL%20Inspection/main.md)

You need the YouTube **Channel-ID** and **List-ID** of the playlist you want to allow. You have to extract the Channel-ID and List-ID of the playlist from the YouTube URL before creating rules in SafeSquid.

## Channel-ID and List-ID Extraction
### Extract Channel-ID from YouTube Channel

1. Open the YouTube channel you want to Allow. Here we have taken CBT Nuggets Channel as an example.

Here you will get Channel-ID from the referrer URL. **Channel-ID** is the preceding portion of the URL after the **'channel/'** part. Save this part on a notepad for reference.

CBT Nuggets Channel URL: https://www.youtube.com/channel/UClIFqsmxnwVNNlsvjH1D1Aw

**Channel-ID: UClIFqsmxnwVNNlsvjH1D1Aw**

Select any playlist of this Channel and click on **PLAY ALL** link on the page as shown below. Here we have selected playlist **CBT Nuggets Webinars**.

![Extract Channel-ID from YouTube Channel to Allow Specific YouTube Channel and its Playlist](/img/How_To/Allow_Specific_YouTube_Channel_and_its_Playlist/image1.webp)

2. You can extract List-ID from the selected playlist.

**List-ID** is the preceding portion of the URL after the **'&list='** part. Save this part on a notepad for reference.

In our case we have taken playlist **CBT Nuggets Webinars** and its URL is https://www.youtube.com/watch?v=PcB0j6uBJCA&list=PLQVJk9oC5JKo_bMWae3xsavpPMKAzIeGb

Extracted **List-ID: PLQVJk9oC5JKo_bMWae3xsavpPMKAzIeGb**

![Extract List-ID from YouTube Channel to Allow Specific YouTube Channel and its Playlist](/img/How_To/Allow_Specific_YouTube_Channel_and_its_Playlist/image2.webp)

You can check any videos from the playlist. You will observe every Video in the playlist contains the same List-ID.

URL for next video in CBT Nuggets Webinars playlist: https://www.youtube.com/watch?v=q802E2jsByI&list=PLQVJk9oC5JKo_bMWae3xsavpPMKAzIeGb&index=2

**List-ID: PLQVJk9oC5JKo_bMWae3xsavpPMKAzIeGb**

![Verify List-ID from YouTube Channel to Allow Specific YouTube Channel and its Playlist](/img/How_To/Allow_Specific_YouTube_Channel_and_its_Playlist/image3.webp)

## Policy Creation
### Create Policy in Request Types Section

3. After extracting the Channel-ID and List-ID we have to create policies in SafeSquid.

Go to SafeSquid Web-GUI and click on Configure to create Policies.

![Click on Configure to create policy that will allow Specific YouTube Channel and its Playlist](/img/How_To/Allow_Specific_YouTube_Channel_and_its_Playlist/image4.webp)

4. Click on Custom Settings to open the Request Types Section.
![Click on Custom Settings to open Request Types Section to allow Specific YouTube Channel and its Playlist](/img/How_To/Allow_Specific_YouTube_Channel_and_its_Playlist/image5.webp)

5. Click on the Request Types Section to create the policy.
![Click on Request Types Section to create the policy to allow Specific YouTube Channel and its Playlist](/img/How_To/Allow_Specific_YouTube_Channel_and_its_Playlist/image6.webp)

6. Make sure the Global of Request Types Section is Enabled to True.
![Select Global of Request Types Section is Enabled to True to Allow Specific YouTube Channel and its Playlist](/img/How_To/Allow_Specific_YouTube_Channel_and_its_Playlist/image7.webp)

7. Click on the Request Types tab to create a new policy.
![Click on Request Types tab to create new policy to Allow Specific YouTube Channel and its Playlist](/img/How_To/Allow_Specific_YouTube_Channel_and_its_Playlist/image8.webp)

8. Insert appropriate comments for future use.
![Insert appropriate comment for future use that describe policy of Allow Specific YouTube Channel and its Playlist](/img/How_To/Allow_Specific_YouTube_Channel_and_its_Playlist/image9.webp)

9. You have to select **YouTube** Channels in the Request Types field.
![Select YouTube Channels in Request Types field to Allow Specific YouTube Channel and its Playlist](/img/How_To/Allow_Specific_YouTube_Channel_and_its_Playlist/image10.webp)

10. You have to add Channel-ID and List-Id in File Field and Save the policy. You have already saved them in Notepad for your reference.

Here for CBT Nuggets channel, we added **(UClIFqsmxnwVNNlsvjH1D1Aw|PLQVJk9oC5JKo_bMWae3xsavpPMKAzIeGb)** in File field.

![add Channel-ID and List-Id in File Field and Save the policy to Allow Specific YouTube Channel and its Playlist](/img/How_To/Allow_Specific_YouTube_Channel_and_its_Playlist/image11.webp)

11. Create new Request Types as **NUGGET CHANNEL** in the Added Request Types Field.
![Create new Request Types as NUGGET CHANNEL in Added Request Types Field to Allow Specific YouTube Channel and its Playlist](/img/How_To/Allow_Specific_YouTube_Channel_and_its_Playlist/image12.webp)

12. Save the Policy Created in the Request Types Section.
![Save the Policy Created in Request Types Section to Allow Specific YouTube Channel and its Playlist](/img/How_To/Allow_Specific_YouTube_Channel_and_its_Playlist/image13.webp)

### Create Policy in Access Profiles Section
13. Go to the Access Profiles section to bind with Profiles.

![Select Access Profiles section to bind with Profiles to Allow Specific YouTube Channel and its Playlist](/img/How_To/Allow_Specific_YouTube_Channel_and_its_Playlist/image14.webp)

14. Edit these two default policies with the profile name **BLOCK YOUTUBE CHANNEL** as shown below.

:::note
You can create two new policies if you don't want to modify default policies.
:::

![Edit these two default policies with profiles name BLOCK YOUTUBE CHANNEL to Allow Specific YouTube Channel and its Playlist](/img/How_To/Allow_Specific_YouTube_Channel_and_its_Playlist/image15.webp)

15. Edit the 1st, Policy. Set Enabled to TRUE and Save the Policy.

![Edit one out of two default policy as True with profiles name BLOCK YOUTUBE CHANNEL to Allow Specific YouTube Channel and its Playlist](/img/How_To/Allow_Specific_YouTube_Channel_and_its_Playlist/image16.webp)

16. Edit the 2nd, Policy. Set this policy Enabled to TRUE.

![Edit second one out of two default policy as True with profiles name BLOCK YOUTUBE CHANNEL to Allow Specific YouTube Channel and its Playlist](/img/How_To/Allow_Specific_YouTube_Channel_and_its_Playlist/image17.webp)

17. Insert appropriate comments for future use.

![Insert appropriate comment for future use in policy which made to allow Specific YouTube Channel and its Playlist](/img/How_To/Allow_Specific_YouTube_Channel_and_its_Playlist/image18.webp)

18. You have to select **NUGGET CHANNEL** in the Request Types field which we have created in Step #10. Save the Policy.

![Select NUGGET CHANNEL in Request Types field in policy that allow Specific YouTube Channel and its Playlist](/img/How_To/Allow_Specific_YouTube_Channel_and_its_Playlist/image19.webp)

19. You should check the modified Policies after saving to confirm whether it's created properly or not.

![saving to confirm whether its created properly or not policy that allow Specific YouTube Channel and its Playlist](/img/How_To/Allow_Specific_YouTube_Channel_and_its_Playlist/image20.webp)

## Test the Scenario
Now try to open videos other than the CBT Nuggets Webinars playlist of the YouTube Channel CBT Nuggets.

All the other videos will be blocked and the below template will be shown.

![Test policy that Allow Specific YouTube Channel and its Playlist](/img/How_To/Allow_Specific_YouTube_Channel_and_its_Playlist/image21.webp)

You can check the videos from the CBT Nuggets Webinars playlist of the CBT Nuggets channel. Only these videos will be allowed.

:::note
This configuration will work only for videos sourced from the channel page and not from the feeds links or YouTube Videos embedded in website.

To allow all the videos of any specific YouTube Channel you have to insert List-ID's (of every playlist in that channel) and file part (of each individual unlisted video) of the URL in the File field of the Request Types Section.
:::