---
title: Bypass Authentication
description: Learn how to bypass authentication for specific applications like Dropbox in SafeSquid, allowing automatic updates and ensuring secure internet usage tracking.
keywords:
  - bypass authentication safesquid
  - safesquid proxy authentication bypass
  - bypass proxy authentication dropbox
  - safesquid authentication policy
  - allow application without authentication safesquid
---

## Business challenge

Stark tech has 200 employees. Star tech need to use proxy authentication to track employees Internet usage. The issue faced by Stark tech for automatic updates (AV, MS, etc), which can't get out because of the proxy authentication. Since for user identification they have enabled authentication. For certain applications (like dropbox) which does not support proxy authentication, they want to bypass authentication for that application.

## How SafeSquid bypass Authentication?

### [Access the SafeSquid User Interface](/docs/01-Getting%20Started/Access%20the%20SafeSquid%20Interface.md)

![clicking on configure in safesquid intgerface](/img/How_To/Bypass_Authentication/image1.webp)

![clicking on search](/img/How_To/Bypass_Authentication/image2.webp)

### Search policy: "BYPASS AUTHENTICATION" to Search

![searching for "BYPASS AUTHENTICATION" policy](/img/How_To/Bypass_Authentication/image3.webp)

### Edit policy to Enable as TRUE (Access Restrictions)

![clicking on edit to edit the policy](/img/How_To/Bypass_Authentication/image4.webp)

![edit policy to bypass authentication for applications and for categories](/img/How_To/Bypass_Authentication/image5.webp)

![cliking on add new to create a new policy as an example to bypass authentication](/img/How_To/Bypass_Authentication/image6.webp)

### How to create new policy to bypass authentication for dropbox?

![creating an example of dropbox](/img/How_To/Bypass_Authentication/image6.webp)

### Go to Request Types

![going to request types](/img/How_To/Bypass_Authentication/image7.webp)

![clicking on add new to add a new request type](/img/How_To/Bypass_Authentication/image8.webp)

![creating a policy as an example to bypass HTTPS inspection for DROPBOX](/img/How_To/Bypass_Authentication/image9.webp)

![setting smart TLD as true to match all the dropbox websites](/img/How_To/Bypass_Authentication/image10.webp)

![giving a unique name for the policy in added request type](/img/How_To/Bypass_Authentication/image11.webp)

### Go to Access Profiles

![for binding the created request type, go to access profiles in Restriction policies section](/img/How_To/Bypass_Authentication/image12.webp)

![creating a policy which will bind the created requst type by adding that in request type and giving a name for the policy in added profiles and writing relevant comment ](/img/How_To/Bypass_Authentication/image13.webp)

![creating a policy which will bind the created requst type by adding that in request type and giving a name for the policy in added profiles and writing relevant comment ](/img/How_To/Bypass_Authentication/image14.webp)

![clicking on save policy to save the policy](/img/How_To/Bypass_Authentication/image15.webp)
