---
title: Allow Remote Applications to Particular Users
description: Learn how to allow specific users in your network to access remote applications securely using SafeSquid, including how to create policies without application signatures.
keywords:
- remote application access safesquid
- safesquid user access control
- safesquid policy creation
- network access policy safesquid
---

## Overview
For security reasons, you blocked all the traffic to all users. However, some of the users in your network need to access remote applications. Using SafeSquid you can allow specific users in your network to access remote applications.

## How it works?
When a user tries to access remote application software, First SafeSquid checks for that user and decides whether this user is allowed to access the remote application or not, if yes then SafeSquid gives access to that user, and before giving the access it will check for user-agent or website which you added in Custom Settings > Request types section. If access is allowed to both users and the application, then only the user can able to access that application. If the user **Samidha wants access** to the **XYZ** application but is trying to access the **ABC** application, SafeSquid will block the user Samidha.

## How to Allow Remote Applications?
Follow the Link: [Allow anydesk](/docs/14-Usecases/Allow_anydesk.md)

## How to create policy without Application Signature
1.  Remote applications are already categorized in the SafeSquid Application Signatures. First, you need to check whether the Application is categorized or not.
2.  If the application is not categorized under default Application Signatures, find the User-agent using SafeSquid's extended logs or any other traffic-capturing tool.
3.  Add that User-agent or website into Request Types.
4.  Bind that created user group and Request Type in Access Profiles and decide whether to block or allow
