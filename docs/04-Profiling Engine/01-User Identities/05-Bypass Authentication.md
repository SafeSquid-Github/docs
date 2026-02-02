---
title: Bypass Authentication
description: Bypass authentication for specific applications like Dropbox in SafeSquid, allowing automatic updates while maintaining secure internet usage tracking.
keywords:
  - bypass authentication safesquid
  - safesquid proxy authentication bypass
  - bypass proxy authentication dropbox
  - safesquid authentication policy
  - allow application without authentication safesquid
---

## Business Challenge

An organization with 200 employees uses proxy authentication to track internet usage. Automatic updates (antivirus, Microsoft, etc.) fail because they cannot authenticate. Applications like Dropbox that do not support proxy authentication require authentication bypass.

## Solution

SafeSquid allows bypassing authentication for specific applications while maintaining tracking for other traffic.

## Setup Guide

1. Access the [SafeSquid User Interface](/docs/01-Getting%20Started/Access%20the%20SafeSquid%20Interface.md) and click **Configure**.

   ![SafeSquid Configure](/img/How_To/Bypass_Authentication/image1.webp)

2. Click **Search**.

   ![Search function](/img/How_To/Bypass_Authentication/image2.webp)

3. Search for **BYPASS AUTHENTICATION**.

   ![Search results](/img/How_To/Bypass_Authentication/image3.webp)

4. Edit the policy and set **Enabled** to **TRUE**.

   ![Edit policy](/img/How_To/Bypass_Authentication/image4.webp)

   ![Enable bypass authentication](/img/How_To/Bypass_Authentication/image5.webp)

## Create Custom Bypass Policy (Example: Dropbox)

5. Click **Add New** to create a custom bypass policy.

   ![Add new policy](/img/How_To/Bypass_Authentication/image6.webp)

6. Navigate to **Request Types** section.

   ![Request Types section](/img/How_To/Bypass_Authentication/image7.webp)

7. Click **Add New** to create a new request type.

   ![Add new request type](/img/How_To/Bypass_Authentication/image8.webp)

8. Create a policy for Dropbox:
   - Enter the domain pattern for Dropbox
   - Set **Smart TLD** to **True** to match all Dropbox domains

   ![Dropbox policy configuration](/img/How_To/Bypass_Authentication/image9.webp)

   ![Smart TLD setting](/img/How_To/Bypass_Authentication/image10.webp)

9. Assign a unique name in the **Added Request Type** field.

   ![Request type name](/img/How_To/Bypass_Authentication/image11.webp)

10. Navigate to **Access Profiles** under Restriction Policies.

    ![Access Profiles section](/img/How_To/Bypass_Authentication/image12.webp)

11. Create a policy binding the request type:
    - Add the created request type to **Request Types** field
    - Assign a name in **Added Profiles**
    - Add a descriptive comment

    ![Bind request type](/img/How_To/Bypass_Authentication/image13.webp)

    ![Policy configuration](/img/How_To/Bypass_Authentication/image14.webp)

12. Click **Save Policy**.

    ![Save policy](/img/How_To/Bypass_Authentication/image15.webp)
