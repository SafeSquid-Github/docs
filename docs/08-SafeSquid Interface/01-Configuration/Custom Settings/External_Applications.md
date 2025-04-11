---
title: External Applications  
description: Learn how to integrate external programs or scripts with SafeSquid to parse and filter web content. Configure policies, execution methods, and content processing strategies.  
keywords:  
- safesquid external parsers  
- web content filtering  
- integrate external applications  
- custom script web filtering  
---

## Overview

The external feature allows you to use any program or script to parse the contents of a file.

The external parser must send a complete HTTP request or response header, which overrides the ones sent by the browser or Web server.

If nobody is sent after the header, the original body with modified headers is used.

## Enabling the External application section on the SafeSquid User Interface

## [Access SafeSquid interface](/docs/08-SafeSquid%20Interface/Accessing%20the%20SafeSquid%20Interface.md)

## Go to the configure page

![clicking on configure in safesquid interface](/img/Configure/Custom_Settings/External_Applications/image1.webp)

![clicking on custom settings in sidebar](/img/Configure/Custom_Settings/External_Applications/image2.webp)

## Global

### Enabled

Enable or Disable the external applications section.

-   TRUE: Enable the external applications section.

-   FALSE: Disable the external applications section.

![showing global section of external applications section](/img/Configure/Custom_Settings/External_Applications/image3.webp)

## Application Policies

List of external parsers to process content with.

![showing application policies section in external applications](/img/Configure/Custom_Settings/External_Applications/image4.webp)

### Enabled

Enable or Disable this entry

-   TRUE: Enable this entry.

-   FALSE: Disable this entry.

### Comment

For documentation and future references, explain the relevance of this entry with your policies.

### Profiles

Specify the Profiles applicable for this entry.

This entry will be applicable only if the connection has any one of the specified profiles.

Leave it Blank, to apply for all connections irrespective of any applied profile.

To avoid application to a connection that has a profile, use a negated profile (! profile).

### Executable

The path to the executable; if no absolute path is given, the path as given in the PATH environment variable is searched. Any number of arguments can be passed by separating them by spaces; if you're using a temporary file as the method to pass the contents of the file, its path is the last argument. If an executable returns with a non-zero status code, the original content is returned.

### Type

The method with which content is passed to the external program; if set to Pipe the content is piped to the program's STDIN, if set to File the content is stored in a temporary file and its path is passed as the last argument.

### Applies to

Select whether the external parser is used on the request, response, or both.

### Run once per session:

Run an external parser for every request in a session until it returns a non-zero status code. This is useful for performing authentication through an external program.

### Send header

Which header(s), if any, to send to the external program before sending the body. The response header option only applies to external programs that process the response. If both headers are sent, the request header is sent first.
