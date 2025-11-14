---
title: Allow Anydesk
description: Learn how to configure SafeSquid to securely allow access to Anydesk and other remote desktop applications while maintaining granular control through user profiles, SSL inspection bypass, and request type filters.
keywords:
- Allow Anydesk SafeSquid
- bypass SSL inspection Anydesk
- SafeSquid remote desktop access
- SafeSquid user-agent filtering
- SafeSquid access profile configuration
---

## Overview
For security reasons, you blocked all the traffic to all users. However, some of the users in your network need to access remote applications. Using SafeSquid you can allow specific users in your network to access remote applications.

## How it works?
When a user tries to access a remote application, First SafeSquid checks for that user and decides whether this user is allowed to access a remote application or not, if yes then SafeSquid gives access to that user, and before giving the access it will check for user-agent. If access is allowed to both users and the application, then only the user can able to access that application. If the user **Samidha wants access** to the XYZ application but is trying to access the **ABC** application, SafeSquid will block to user Samidha.

:::note
Remote applications like Anydesk® and Ammyadmin™ do not support SSO authentication. If SSO authentication is enabled, you must bypass it.
:::

Remote applications like **Remote desktop applications, Download managers**, etc. (Anydesk and Teamviewer®) should get automatically blocked if HTTPS inspection is enabled. No need to configure any policy for blocking purposes.

## [Access the SafeSquid interface](/docs/08-SafeSquid%20Interface/Accessing%20the%20SafeSquid%20Interface.md)
## Go to configure page
![Go to configure page to Allow anydesk](/img/How_To/Allow_anydesk/image1.webp)

## Go to Real-time content security: HTTPS Inspection
![Select HTTPS Inspection option in Real time content security section to Allow anydesk](/img/How_To/Allow_anydesk/image2.webp)

![Enabled Global section as true to allow anydesk](/img/How_To/Allow_anydesk/image3.webp)

![Bypass SSL inspection by editing policy in Inspection policy section](/img/How_To/Allow_anydesk/image4.webp)

![Select enabled as true of Bypass SSL Inspection policy to allow anydesk](/img/How_To/Allow_anydesk/image5.webp)

![Save Bypass SSL Inspection policy to allow anydesk](/img/How_To/Allow_anydesk/image6.webp)

## Go to Restriction Policies
![Select Access profiles in Restriction policies section to allow anydesk](/img/How_To/Allow_anydesk/image7.webp)

![Default Restrict remote desktop application policies present in policies and profiles section](/img/How_To/Allow_anydesk/image8.webp)

![Edit one of clone policy in policies and profile section to allow anydesk](/img/How_To/Allow_anydesk/image9.webp)

![Edit and entry comment and request type in policy to allow anydesk](/img/How_To/Allow_anydesk/image10.webp)

![Select Bypass SSL Inspection in added profiles section to allow anydesk](/img/How_To/Allow_anydesk/image11.webp)

![Save Allow anydesk policy](/img/How_To/Allow_anydesk/image12.webp)![Save configuration of policy to allow anydesk](/img/How_To/Allow_anydesk/image13.webp)

## Configuration on Anydesk®
### Set proxy on Anydesk application
If authentication is enabled you must specify your Username and Password on any desk application.

Anydesk should not take auto proxy settings: If you set proxy in IE browser or Chrome browser and you select the "Try to detect the proxy server" option on Anydesk, it should not take proxy automatically. You must configure a proxy on the Anydesk application.

Any desk and Ammyadmin do not support SSO authentication. If SSO authentication is enabled, you must bypass it.

### How to create policy without Application Signature
Remote applications are already categorized in the SafeSquid Application Signatures. First, you need to check whether the Application is categorized or not.

If an application is not categorized under default Application Signatures, find the User-agent using SafeSquid's extended logs or any other traffic-capturing tool.

### Add that User-agent or website into Request Types
Bind that created user group and Request Type in Access Profiles and decide whether to block or allow.
