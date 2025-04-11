---
title: Templates  
description: Learn how to configure and customize SafeSquid templates for error messages, content filtering notifications, and branding purposes. Manage template profiles, content types, and response codes effectively.  
keywords:  
- safesquid templates  
- custom error pages  
- content filtering messages  
- customize safesquid ui  
---

## Overview

Customized templates can be useful:

When you would want the error messages to be displayed in a language other than English.

When you would want to display the Company logo, Warnings, Custom messages, and notifications.

Templates are used throughout SafeSquid as a replacement for pages that can\'t be displayed due to filtering, error, or other conditions.

SafeSquid has many default templates. You can replace the default templates with your customized templates.

A template may not necessarily be an HTML but can also be almost about anything like an audio file, flash file or an executable.

## Enabling the Template section on the SafeSquid User Interface

## [Access SafeSquid interface](/docs/08-SafeSquid%20Interface/Accessing%20the%20SafeSquid%20Interface.md)

## Go to the configure page.

![clicking on configure in safesquid interface ](/img/Configure/Custom_Settings/Templates/image1.webp)

![clicking on custom settings in the sidebar](/img/Configure/Custom_Settings/Templates/image2.webp)

## Go to Templates

## Manage Templates

![showing Manage Templates section in templates](/img/Configure/Custom_Settings/Templates/image3.webp)

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

### Name

Specify the name of the template here, for identification, and this is used in other sections for reference purposes.

### File

Specify the filename of the template, here. You must mention the path(location) of the file here.

A template may not necessarily be in an HTML pattern but can be almost about anything like an audio file, flash file or an executable one.

### Mime Type

Specify the type of the template here.

While using an executable template, this is set, by having the external program send an HTTP response header.

### Response code

The response code is to be used when sending the template.

### Type

Specify the type of the template.

-   **FILE:** The contents of the file will be sent.

-   **EXECUTABLE:** The file is executed and whatever is its output on the STDOUT, is sent as the template.

### Parsable

Choose here whether to substitute the variables present in the HTML codes used to display the template.

There are several variables that can be used in templates if the Parsable option is selected which will be replaced with information about the request currently being handled. These variables can be used to generate content in real-time.

-   TRUE: Select Parsable to true if you want to parse the template.

-   FALSE: Select Parsable to False if you do not want to parse the template.
