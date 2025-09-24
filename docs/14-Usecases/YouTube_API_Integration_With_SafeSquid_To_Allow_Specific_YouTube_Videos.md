---
title: YouTube API Integration
description: Learn how to integrate YouTube API with SafeSquid to control and restrict YouTube video access based on categories, improving productivity and bandwidth management.
keywords:
- youtube api safesquid
- safesquid youtube category restriction
- block youtube videos safesquid
- integrate youtube api safesquid
- safesquid content filtering youtube
---

## Overview
YouTube is a video-sharing website which provides a wide variety of videos. YouTube video content categories organize channels and videos on YouTube website. YouTube has lots of videos for entertainment like comedy, music, movies, web series, sports, etc. YouTube also provides lots of educational and training content used by students, employees, faculties, etc. in day-to-day life.

In every organization YouTube video should be used for Productive purposes like learning, Marketing, etc. YouTube's recommendations become confused over time, and begin showing you irrelevant or useless content. Watching unnecessary YouTube videos without any restriction, reduces work productivity and increases bandwidth utilization.

Restriction on watching unnecessary YouTube Videos will save lots of productive time and internet bandwidth. You can restrict unwanted videos from YouTube site on the basis of the video category. To identify the category of any video YouTube provides YouTube API.

SafeSquid SWG integrates with YouTube API which is used to identify the Category of the Requested YouTube Video. YouTube Video categories are enumerated in SafeSquid SWG. Now policies can be created on the basis of these categories so that Specific category of YouTube Videos can allow/block easily.

## Client Scenario (Case Study)
Ganpat University provides graduate programs to various colleges. All the staff's PC/Laptop traffic is going via SafeSquid SWG.

Ganpat University wants to block entire youtube.com for faculty and students, but wants some of the YouTube channels allowed which are helpful for faculty/students.

Ganpat University challenges are:

All staff/Students should not be allowed to access www.youtube.com. If any faculty/student try to access YouTube then he/she should get blocked template.

Only few of the specified YouTube channel and its playlist should be allowed. These YouTube channel contains educational and knowledge sharing videos.

SafeSquid SWG give them solution for the above requirement.

You can achieve this by creating policy in Request Profiles Section and bind it with policies in Access Profiles Section.

You need YouTube Channel-ID and List-ID of playlist, you want to allow.

You have to extract Channel-ID and List-ID of the playlist from YouTube URL before creating policies in SafeSquid.All the

Mr. Haresh is the system administrator of Ganpat University. From last few months he received the request from faculty for allowing many other videos/Playlist/channels etc.

Of course, all the videos/Playlist/channel etc. are educational and knowledge sharing.

But he faces some difficulty for extracting Channel-ID and List-ID of the requested playlist/channel regularly.

SafeSquid SWG has given them the fantastic solution for Mr. Haresh difficulty.

The latest Version of SafeSquid (Versions August onward) includes **YouTube API Integration with SafeSquid-SWG**. That means you can now create Policies on the basis of YouTube Categories.

You can now allow/block specific category of videos on YouTube.

![Find category to allow or block Youtube video](/img/How_To/YouTube_API_Integration_With_SafeSquid_To_Allow_Specific_YouTube_Videos/image1.webp)

## Prerequisites
HTTPS Inspection should be enabled in SafeSquid. If not enabled, you can check our document - How to enable HTTPS Inspection

## Create a YouTube V3 API using your Google Account.
To Request the Category of Specific Video

To extract Video Category from Video ID

Go To https://console.developers.google.com/apis/library [Link](https://console.cloud.google.com/apis/library)

![Create a Youtube V3 API using google account for Youtube API integration with safesquid](/img/How_To/YouTube_API_Integration_With_SafeSquid_To_Allow_Specific_YouTube_Videos/image2.webp)

:::note
What happens over here is If you don't Create a Project over here, Google will Automatically Create a new Project for you Named as "My First Project" when you ENABLE the YouTube Data API v3.
:::

People doing it for the first time and have requirement to use YouTube Data API v3 to integrate it with SafeSquid-SWG.

I recommend creating a New Project with a Proper name so that you can later identify it.

Since they have specified Per Day Quota i.e. No of Request to find Information about a Particular video and its details.

Make sure that this Google Account is not using YouTube API for any other purposes as this will reduce the No of Request

## CREATE A NEW PROJECT
![Click on select a project to integrate Youtube API with safesquid](/img/How_To/YouTube_API_Integration_With_SafeSquid_To_Allow_Specific_YouTube_Videos/image3.webp)

![Click on project to integrate Youtube API with safesquid](/img/How_To/YouTube_API_Integration_With_SafeSquid_To_Allow_Specific_YouTube_Videos/image4.webp)

### NAME AS: YouTubeAPI-For-SafeSquid
![Name and create a project to integrate Youtube API with safesquid](/img/How_To/YouTube_API_Integration_With_SafeSquid_To_Allow_Specific_YouTube_Videos/image5.webp)

![Redirect to API Library in API & Services section](/img/How_To/YouTube_API_Integration_With_SafeSquid_To_Allow_Specific_YouTube_Videos/image6.webp)

### SELECT A PROJECT
![Select a project to integrate Youtube API with safesquid](/img/How_To/YouTube_API_Integration_With_SafeSquid_To_Allow_Specific_YouTube_Videos/image7.webp)

![Get a access of API Library](/img/How_To/YouTube_API_Integration_With_SafeSquid_To_Allow_Specific_YouTube_Videos/image8.webp)

![Select YOUTUBE DATA API V3 to integrate Youtube API with safesquid](/img/How_To/YouTube_API_Integration_With_SafeSquid_To_Allow_Specific_YouTube_Videos/image9.webp)

### ENABLE YOUTUBE DATA API V3
![ENABLE YOUTUBE DATA API V3 to](/img/How_To/YouTube_API_Integration_With_SafeSquid_To_Allow_Specific_YouTube_Videos/image10.webp)

### CREATE CREDENTIALS
![Select a Create credentials to integrate Youtube API with safesquid](/img/How_To/YouTube_API_Integration_With_SafeSquid_To_Allow_Specific_YouTube_Videos/image11.webp)

![Click on Create credentials to integrate Youtube API with safesquid](/img/How_To/YouTube_API_Integration_With_SafeSquid_To_Allow_Specific_YouTube_Videos/image12.webp)

### SELECT API KEY
![select API key to create API keys ](/img/How_To/YouTube_API_Integration_With_SafeSquid_To_Allow_Specific_YouTube_Videos/image13.webp)

![Google generate Youtube API keys](/img/How_To/YouTube_API_Integration_With_SafeSquid_To_Allow_Specific_YouTube_Videos/image14.webp)

## Integrate the YouTube API Key in SafeSquid.
**To identify the category of the YouTube video**

Now we are going to Integrating this Key in SafeSquid-SWG.

To do that, Go to SafeSquid console.

Go to the path using below command:

```bash
cd /var/lib/safesquid/
```
Create the directory using below command:

```bash
mkdir youtube
```
Give the permission using below command:

chmod 774 youtube

chown ssquid:root youtube

root@safesquid-swg:/var/lib/safesquid# ll

total 56

drwxrwxr-- 12 ssquid root 4096 Aug 29 15:35 ./

drwxr-xr-x 48 root root 4096 Jul 4 19:06 ../

drwxrwxr-- 3 ssquid root 4096 Jan 21 2019 application_signatures/

drwxrwxr-- 2 ssquid root 4096 Sep 5 14:03 category/

drwxrwxr-- 3 ssquid root 4096 Apr 2 18:44 content_signatures/

drwxrwxr-- 2 ssquid root 4096 Jan 21 2019 imgfilter/

drwxrwxr-- 3 ssquid root 12288 Sep 5 13:47 sqscan/

drwxrwxr-- 3 ssquid root 4096 May 30 14:17 sscore/

drwxrwxr-- 4 ssquid root 4096 Sep 5 14:03 sscore2/

drwxrwxr-- 2 ssquid root 4096 Jun 13 19:12 ssqore/

drwxrwxr-- 4 ssquid root 4096 Sep 5 14:03 svscan/

drwxrwxr-- 2 ssquid root 4096 Aug 23 14:53 youtube/

Go to youtube directory using command:

root@safesquid-swg:/var/lib/safesquid#cd youtube

Copy YouTube API Key using WinSCP or any other tool at given path **/var/lib/safesquid/youtube/**

root@safesquid-swg:/var/lib/safesquid/youtube# ll

total 16

drwxrwxr-- 2 ssquid root 4096 Aug 23 14:53 ./

drwxrwxr-- 12 ssquid root 4096 Aug 29 15:35 ../

-rw-rw-r-- 1 ssquid root 40 Jul 3 14:11 keys

-rw-rw-r-- 1 ssquid root 947 Jul 3 14:12 legends

After adding key, the file will look like this

root@safesquid-swg:cat /var/lib/safesquid/youtube/keys

AIz******************************o

After doing so, you just need to **RESTART SafeSquid Service** from SafeSquid Interface or by command line.

```bash
/etc/init.d/safesquid restart
```
:::note
Please Restart SafeSquid Twice in order to Integrate YouTube API properly.
:::

You have successfully integrated YouTube API with SafeSquid-SWG.

Now, Go ahead with Policy creation on the basis of YouTube Categories.

To do so, I will help you out in creating a simple Policy which will only allow Specific YouTube Category VIA SafeSquid all other YouTube Videos will be blocked.

![Click on configure to integrate Youtube API with safesquid](/img/How_To/YouTube_API_Integration_With_SafeSquid_To_Allow_Specific_YouTube_Videos/image15.webp)

![Policy to integrate Youtube API with safesquid](/img/How_To/YouTube_API_Integration_With_SafeSquid_To_Allow_Specific_YouTube_Videos/image16.webp)

![Youtube Video policy to allow specific video](/img/How_To/YouTube_API_Integration_With_SafeSquid_To_Allow_Specific_YouTube_Videos/image17.webp)

![Youtube Video policy to allow specific video](/img/How_To/YouTube_API_Integration_With_SafeSquid_To_Allow_Specific_YouTube_Videos/image18.webp)
