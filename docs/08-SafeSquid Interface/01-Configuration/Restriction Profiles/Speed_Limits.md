---
title: Speed Limits  
description: Manage internet bandwidth and control data usage with SafeSquid's Speed Limits feature. Define download/upload limits, request caps, and bandwidth throttling to optimize performance and enforce usage policies.  
keywords:  
- SafeSquid speed limits  
- bandwidth control  
- internet usage policy  
- download rate limiting  
- data transfer restrictions  
---

## Overview

The SafeSquid Limits feature allows you to define User Limits, for accessing content from the Internet.

You can create rules to limit the maximum size of individual files that are fetched from the Internet.

These rules can also pre-set the speed limits at which the content may be accessed.

And use this section restricts the user to a Maximum Number of Requests.

## Global

Set data transfer rate (speed or QoS) limits.

![](/img/Configure/Restriction_Profiles/Speed_Limits/image1.webp)
### Enabled

Enable or Disable limits section to apply data transfer rate (speed or QoS) limits.

**TRUE:** Enable limits section.

**FALSE:** Disable the limits section.

## Set Limits

Here you can create the policies to restrict the data limit, speed limit and Request limit.

The list of entries below is processed from top to down.

If more than one entry matches to single profile then the entry having the lowest download transfer rate will be applied.

Each entry describes limitations on users for accessing content from the Internet.

Disable entries, to ignore limitations.

Every entry that matches the connection parameters specified in the entry is processed for that connection.

**Example:** If you create a policy as:

Download transfer limit:40M

Download rate:10K

Adjust transfer limit: per request

Then you are unable to download files that are more than 40Mb and you can access the content from the internet with 10Kbps.

![](/img/Configure/Restriction_Profiles/Speed_Limits/image2.webp)

### Enabled

Enable or Disable this entry.

**TRUE:** Enable this entry.

**FALSE:** Disable this entry.

### Comment

For documentation and future references, explain the relevance of this entry with your policies.

### Profiles

Specify the Profiles applicable for this entry.

This entry will be applicable only if the connection has any one of the specified profiles.

Leave it Blank, to apply for all connections irrespective of any applied profile.

To avoid application to a connection that has a profile, use a negated profile (! profile).

### Action

Select the appropriate action to apply when this entry matches.

**Example:** Select Allow if you desire to set a limit on data transfer or the number of requests that can be made. When the limit is reached action will be denied automatically.

If the action is set to deny then any request falling into the specified time range will be blocked, otherwise, the request is allowed.

**ALLOW:** Connections will be allowed after matching this entry.

**DENY:** Connections will be denied after matching this entry.

**Example:** If you set the data transfer limit as 10Mb, then if you download more than 10Mb files, or if you use more than 10Mb, all connections are blocked automatically.

A blocked page will be displayed if you select deny action and the internet will be not accessible.

### Template

Templates are used throughout Safesquid as a replacement for pages that can't be displayed due to filtering, error, or other conditions.

Specify the template name that should be displayed on a user's screen when this entry matches. The name should be selected from the template section. You can find the template name in the template section.

Leave this rule blank, to use the default template.

### Download transfer limit

Specify the maximum number of bytes (download limit) to restrict the users, to download or access the data.

No download limit is applied if specified as zero (0).

**Example:** If you set the download transfer limit as 20Mb, then you are unable to download the files more than 20Mb and you are unable to access the internet once the 20Mb data is completed.

### Upload transfer limit

Specify the maximum number of bytes to restrict the user to upload the files.

No upload limit is applied if specified as zero (0).

**Example:** If you set the upload transfer limit as 20Mb, then you are unable to upload the files more than 20Mb.

### Request limit

Specify the maximum number of requests, that user can request.

No request limit is applied if specified as zero (0).

**For example:** if you set the request limit as 10, then you are unable to send more than 10 requests.

### Download rate

Specify the maximum download transfer rate (download rate) that should be allowed.

No download transfer rate is applied if specified as zero (0).

**Example:** If you specified the download rate as 10kb, then you will get access with the speed of 10kbps.

### Adjust Transfer Limits

Select one or more options affecting how transfer limits should be applied to fine-tune the rule.

**LIMIT CACHE TRANSFERS**: This limit will be applied only if the content is being served from the cache.

**PER-REQUEST LIMIT:** This limit will be applied to each single request. Example: If you set the download transfer limit as 20Mb then each and every matching connection is allowed up to 20Mb.

**GROUP LIMIT:** Share transfer limit between all matching connections. Example: If you set the download transfer limit as 20Mb, then 20Mb is shared between all the matching connections.

**For example:**
When download transfer limit is set as 5 MB.
For Per-request limit each and every matching request will be allowed 5 MB.
For Group limit 5 MB will be shared between all the matching connections.


## Example

### Rule#1

Speed limits are used to set restrictions on bandwidth usage.

Speed limits are useful in situations where we have limits on internet bandwidth consumption.

We want to create a standard speed limit for each request

The download limit for each request is set to 50 Mbps Download rate is set to 25Mbps

Average connection speed is maintained for all users.

![](/img/Configure/Restriction_Profiles/Speed_Limits/image3.webp)