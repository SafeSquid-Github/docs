---
title: Content Modifier
description: Configure SafeSquid's Content Modifier to dynamically alter HTML, headers, and data in real-time. Remove or replace JavaScript, ActiveX, cookies, and modify content types to improve security and enforce custom web policies.
keywords:
  - content modification proxy
  - regex based content rewriting
  - SafeSquid real-time content inspection
  - modify client and server headers
  - web page filtering proxy
---

## Overview
Use 'Content modifier' to remove or modify contents like ActiveX, JavaScript, and Cookies from selected websites.

It enables you to modify the contents of web pages, files, the client header, and the server header in real time.

## Enabling the Content modifier section on the SafeSquid User Interface
## [Access SafeSquid interface](/docs/01-Getting%20Started/Access%20the%20SafeSquid%20Interface.md)
## Go to Configure Page
![Goto configure.webp](/img/Configure/Real_Time_Content_Activity/Content_modifier/image1.webp)

## Go to Real-time content security
![Go to real time content security.webp](/img/Configure/Real_Time_Content_Activity/Content_modifier/image2.webp)

## Go to the Content modifier section
![ContentmodifierSlide1 (1).webp](/img/Configure/Real_Time_Content_Activity/Content_modifier/image3.webp)

## Global
### Enabled
Enable or Disable this section.
-   **TRUE**: Enable content rewriting.
-   **FALSE**: Disable content rewriting.

![ContentmodifierSlide1 (2).webp](/img/Configure/Real_Time_Content_Activity/Content_modifier/image4.webp)

![ContentmodifierSlide1 (3).webp](/img/Configure/Real_Time_Content_Activity/Content_modifier/image5.webp)

![ContentmodifierSlide1 (4).webp](/img/Configure/Real_Time_Content_Activity/Content_modifier/image6.webp)

## Rewriting Policies
![ContentmodifierSlide1 (5).webp](/img/Configure/Real_Time_Content_Activity/Content_modifier/image7.webp)

![ContentmodifierSlide1 (6).webp](/img/Configure/Real_Time_Content_Activity/Content_modifier/image8.webp)

![Contentmodi-policy.jpg](/img/Configure/Real_Time_Content_Activity/Content_modifier/image9.webp)

List of regular expression substitutions to apply to matching files.

### Enabled
Enable or Disable this Entry.
-   **TRUE**: Enable this Entry.
-   **FALSE**: Disable this Entry.

### Comment
For documentation and future references, explain the relevance of this entry with your policies.

That is, by reading the policies, a future user can understand the purpose of that entry.

### Profiles
Specify the Profiles applicable for this entry.

This entry will be applicable only if the connection has any one of the specified profiles.

Leave it Blank, to apply for all connections irrespective of any applied profile.

To avoid application to a connection that has a profile, use a negated profile (!profile).

### Mime type
Specify regular expressions matching the MIME types for which this entry is applicable.

According to their nature and format, MIME-type is a way of identifying files on the Internet.

It is highly advisable that you set this to some mime type; otherwise, all files will be checked.

**Example**: text/html, ^image/, ^application/, application/x-shockwave-flash.

### Pattern
A regular expression pattern matching the area of text inside the file, 'to modify'.

This may be trailed with a '/' followed by flag characters like in Perl to modify options used to compile the regular expression and must be if a '/' is used anywhere else in the regular expression.

### Replace

Speify the replacement text to use in place of the area of text matching the pattern mentioned in the above field.

It may contain back-references to strings captured using parenthesis in the pattern.

### Applies to
This option is to select what the rewrite entry applies to.

-   **BODY**: Rewrite the body of the webpage or file.
-   **CLIENT**: Rewrite the client header, this happens before Middleman parses it so be careful not to remove any headers needed to handle the request properly.
-   **SERVER**: Rewrite the header from the remote web server, the same conditions from the client header apply.
-   **POST:** Rewrite POST/PUT data sent when submitting a form or uploading a file.

## Example
### Rule#1
I want to modify the title tag of webpages which will indicate that it has been the webpage is inspected by SafeSquid. This rule is to be applied to every connection. To ensure the title tag is modified the chunked response needs to be buffered. Using regex (Regular Expression) we can use pattern matching to select the title tag of webpages. Replace with the title tag Inspected by SafeSquid.

![Presentation1-cntInspection.webp](/img/Configure/Real_Time_Content_Activity/Content_modifier/image10.webp)

### Rule#2
We want to request PNG & JPG images instead of AVIF & WEBP from a remote server.

AVIF images and ignore by SafeSquid's image analyser.

Using regex (Regular Expression) we can use pattern matching to select the header request sent from the client to SafeSquid.

Modify the header response and request for PNG & JPG images instead of AVIF & WEBP.

![Slide2-cntInspection.webp](/img/Configure/Real_Time_Content_Activity/Content_modifier/image11.webp)

![Slide3-cntInspection.webp](/img/Configure/Real_Time_Content_Activity/Content_modifier/image12.webp)