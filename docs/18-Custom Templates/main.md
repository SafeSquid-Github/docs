---
title: Custom Templates  
Description: Learn how to create and configure custom templates in SafeSquid to personalize error messages, display company branding, or replace blocked content with dynamic responses using HTML, images, or executable files.

Keywords:
- SafeSquid custom templates  
- SafeSquid template configuration  
- SafeSquid error page customization  
- Create HTML template SafeSquid  
- SafeSquid UI template management  
---

## Overview

Templates are used throughout SafeSquid as a replacement for pages which can't be displayed due to filtering, error, or other conditions. Customized templates can be really useful, when you would want the error messages to be displayed in a language other than English. It can also be used to display your company logo, warning or message like 'If you feel this site was unnecessarily blocked, please notify the administrator on helpdisk@mycompany.com'.

A template may not necessarily be an html, but can be almost about anything like an audio file, flash file or an executable. It can be used to invoke a file for a specific condition. For example, SafeSquid has 3 built-in templates - tinygif (a 1x1 transparent gif image), checkeredgif (a 4x4 gray and transparent checkered pattern), and tinyswf (an empty flash animation). The checkeredgif template is used by default, to replace images that it blocked by the Pornographic Image Filter add-on module that is used to block pornographic images in real time. So, when the page is displayed to a user, a block of checkered boxes is displayed instead of the blocked image.

## Prerequisites

Create your own html file and place that file in the below paths

for windows version of SafeSquid:

**c:ProgramDatausrlocalsafesquidui_roottemplates**

The path for Linux version of SafeSquid is:

**/usr/local/safesquid/ui_root/templates/**

**Note**: If you want to use any images in the html file make sure that the image also exist in the same path.

## Example:

Here i am creating below html page:

![](/img/How_To/Create_Custom_Templates/image1.webp)

I Am saving this file with name:

**Custom_template.html**

I will use this file in the below configuration

## [Access the SafeSquid user interface](/docs/08-SafeSquid%20Interface/Accessing%20the%20SafeSquid%20Interface.md)

### Go to Configure Page

![Clicking on configure in SafeSquid interface](/img/How_To/Create_Custom_Templates/image2.webp)

### Go to Custom Settings

![Clicking to custom settings](/img/How_To/Create_Custom_Templates/image3.webp)

### Go to Templates

![Clicking on templates ](/img/How_To/Create_Custom_Templates/image4.webp)

### Clone existing entry

![Cloning the existing entry by clicking on clone](/img/How_To/Create_Custom_Templates/image5.webp)

### Edit the original entry

![Clicking on edit to edit the policies](/img/How_To/Create_Custom_Templates/image6.webp)

You must edit the original entry, because the entries in template section are processed from top to bottom

![Editing the comment as per your entry](/img/How_To/Create_Custom_Templates/image7.webp)

![In profiles, selecting the required profile in the drop down menu](/img/How_To/Create_Custom_Templates/image8.webp)

![Do not change the "name" field](/img/How_To/Create_Custom_Templates/image9.webp)

![Giving the name of your html file in file field](/img/How_To/Create_Custom_Templates/image10.webp)

![clicking on save policy to save it](/img/How_To/Create_Custom_Templates/image11.webp)

![Saved rule](/img/How_To/Create_Custom_Templates/image12.webp)

## Testing

![Testing the template](/img/How_To/Create_Custom_Templates/image13.webp)

## Saving the Configuration 

![clicking on save config to save the policy](/img/How_To/Create_Custom_Templates/image14.webp)

