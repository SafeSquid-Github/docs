# Data Loss Prevention

## Overview

DLP is nothing **but a Data Loss Prevention** module in Safequid. DLP module was introduced in SafeSquid to restrict end users from sending sensitive or critical information outside the corporate network. You can achieve this simply by creating rule(s) in the DLP section for blocking the predefined content type.

## Prerequisites

HTTPS Inspection should be enabled in SafeSquid. If not enabled, you can check our document - [How to enable HTTPS Inspection](https://help.safesquid.com/portal/en/kb/articles/https-inspection#Overview).

## [Access the SafeSquid Interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

## Go to Configure Page 

![DLP 1.PNG](/img/Configure/Real_Time_Content_Activity/DLP/image1.webp)

## Go to the DLP Section

![DLP 2.PNG](/img/Configure/Real_Time_Content_Activity/DLP/image2.webp)
![DLP 3.PNG](/img/Configure/Real_Time_Content_Activity/DLP/image3.webp)

## Global

### Enabled

Enable or Disable the DLP section.

-   **TRUE:** Enable Data leak prevention.

-   **FALSE**: Disable Data leak prevention.

![DLP 4.PNG](/img/Configure/Real_Time_Content_Activity/DLP/image4.webp)

![DLP 5.PNG](/img/Configure/Real_Time_Content_Activity/DLP/image5.webp)

### Save the Global part of the DLP Section.

![DLP 6.PNG](/img/Configure/Real_Time_Content_Activity/DLP/image6.webp)

### Open the DLP section to change the configuration.

![DLP 7.PNG](/img/Configure/Real_Time_Content_Activity/DLP/image7.webp)

## DLP policies

Create a list of Entries to implement your DLP Policies. Safesquid evaluates the entries in the order of top to bottom.

### Click on the ADD icon to create a new policy.

![DLP 8.PNG](/img/Configure/Real_Time_Content_Activity/DLP/image8.webp)

### Click on the Add New button to create a new DLP policy.

![DLP 9.PNG](/img/Configure/Real_Time_Content_Activity/DLP/image9.webp)

ALL the Following Entries will be tested from top to bottom.

### Enabled

Enable or Disable this entry.

-   **TRUE**: Enable this entry.

-   **FALSE**: Disable this entry.

### Comment

For documentation and future references, explain the relevance of this entry with your policies.

That is, by reading the policies, a future user can understand the purpose of that entry.

### Profiles

Specify the list of Profiles that should be applicable for this entry.

This entry will be applicable only if the connection has any one of the specified profiles.

Leave it Blank, to apply for all connections irrespective of any applied profile.

To avoid application to a connection that has a profile, use a negated profile (!profile).

### Upload Content type

Select the list of upload content types or content categories, to which this entry will be applicable.

The connection should have been already profiled to have one or more of these content types or content categories to match.

Use Negation "!", to match this entry, only when specified content types or content categories are not applied to the connection.

Leave it blank to match this entry irrespective of applied content types or content categories.

If you set this to "Image, Pdf, Audio, !Text, !Jpeg ", then this entry will be applicable to only those connections that have been profiled as Image, Pdf, or Audio,

or not profiled as Text or Jpeg.

### Action

Specify action to enforce on matched connections.

-   **DO_NOT_BYPASS:** Select this, if you want to strictly block the websites.

-   **ALLOW**: Select this, if you want to allow requests matching this policy.

-   **DENY:** Select this, if you want to block requests matching this policy. Will not block the requests to those users who have allowed bypass set from the access section.

## Example

### Rule#1

We want to block the upload of all office files which are Macro Enabled for connections with profile "BLOCKED MACRO ENABLED FILES"

Office files which are macro-enabled -- ms-word, ms-excel, ms-powerpoint.

When users try Uploading macro-enabled documents it will fail.

![Slide1-DLP.webp](/img/Configure/Real_Time_Content_Activity/DLP/image10.webp)

### Rule#2

I want all audio and video files to be blocked when tried to upload.

Upload of audio and video files will only be blocked for connections with the profile "Block All Audio&Video Files."

![Slide2-DLP.webp](/img/Configure/Real_Time_Content_Activity/DLP/image11.webp)

### Rule#3

I want to allow the upload of all office documents for only users who are part of the user group "HR Group".

All office documents will be allowed to be uploaded only for the user group "HR Team".

![Slide3-DLP.webp](/img/Configure/Real_Time_Content_Activity/DLP/image12.webp)
