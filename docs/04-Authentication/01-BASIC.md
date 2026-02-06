---
title: Local Credential Store
description: Configure SafeSquid for browser-based user authentication without Active Directory using local credential storage.
keywords:
  - browser-based authentication
  - SafeSquid user login
  - local credential proxy
  - SafeSquid access control
  - local user authentication
  - credential management
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

Organizations without Active Directory often struggle to enforce identity-based web access due to the absence of centralized directory services. SafeSquid enables authentication via browser prompts by assigning usernames and passwords stored locally. This configuration eliminates LDAP dependency, simplifies access control, and enforces user-level policies using HTTP Basic Authentication integrated into SafeSquid’s credential manager.

## Requirements Overview

### User-Side Requirements

- Modern browser with HTTP Basic Authentication support
- Pre-configured proxy in browser settings (manual or via PAC file)

### SafeSquid-Side Preparation

- SafeSquid deployed and operational on internal network
- Admin access to SafeSquid's configuration interface
- "Enable Authentication" set in access profiles
- Policy management interface available via HTTP/HTTPS

## Setup Browser Authentication

1. **Ensure SafeSquid is Installed and Running**\
   Access the SafeSquid configuration interface at `http://safesquid.cfg/` through a browser using the SafeSquid proxy.

2. **Navigate to Access Restrictions**\
   From the left menu: `Application Setup` → `Access Restrictions` → `Allow List`.\
   Click the orange `+` icon to add a new entry.\
   ![Going in the access restrictions section in application setup](/img/How_To/Setup_Authentication/image2.webp)

3. **Disable PAM Authentication**\
   In the new rule window, set `PAM Authentication` to `FALSE`.\
   ![Making the PAM authentication false and adding username and password in the username password field](/img/How_To/Setup_Authentication/image3.webp)

4. **Save the Configuration**\
   Click the checkmark to save the rule. A browser prompt will now appear asking for username and password when accessing the internet.

## Add User

<Tabs>
  <TabItem
    value="From SafeSquid Interface"
    label="From SafeSquid Interface"
    default
  >
    ![clicking on configure in safesquid interface](/img/How_To/Adding_users_using_SafeSquid_interface_for_authentication/image1.webp)

    ![click on search in access profiles](/img/How_To/Adding_users_using_SafeSquid_interface_for_authentication/image2.webp)

    ![Access profiles search or policy list](/img/How_To/Adding_users_using_SafeSquid_interface_for_authentication/image4.webp)

    ![Edit or add BASIC auth user entry](/img/How_To/Adding_users_using_SafeSquid_interface_for_authentication/image6.webp)

    ![BASIC authentication user form or credentials](/img/How_To/Adding_users_using_SafeSquid_interface_for_authentication/image8.webp)

    ![Save BASIC auth user or policy](/img/How_To/Adding_users_using_SafeSquid_interface_for_authentication/image10.webp)

    ![BASIC auth profile applied to access restriction](/img/How_To/Adding_users_using_SafeSquid_interface_for_authentication/image12.webp)

    ![Configuration saved for BASIC authentication](/img/How_To/Adding_users_using_SafeSquid_interface_for_authentication/image14.webp)
  </TabItem>

  <TabItem value="From Linux Terminal" label="From Linux Terminal" default>
    Instead of using the SafeSquid configuration interface, users can also be created directly on the Linux machine where SafeSquid is installed:

    1. **Create a New User**\
       Run the following command in terminal:
       ```bash
       useradd name_of_the_user
       ```
    2. **Set the Password**\
       Assign a password using:

       ```bash
       passwd name_of_the_user
       ```

       It will prompt to enter and confirm a new password.

    ![Changing the password ](/img/How_To/Setup_Authentication/image4.webp)
  </TabItem>
</Tabs>

## Authentication Verification

- Attempt to browse any external site
- Username/password prompt should appear
- Enter credentials as configured
- Access granted if authentication is successful

### Log Verification

Check `identity.log` or `access.log` for user authentication entries.

## Issue Resolution Matrix

| Issue             | Symptom               | Likely Cause                                | Resolution                                    |
| ----------------- | --------------------- | ------------------------------------------- | --------------------------------------------- |
| No login prompt   | Direct access granted | Auth not enabled in access rule             | Enable PAM to `FALSE` and add credentials     |
| Login fails       | Repeated prompts      | Incorrect credentials or misconfigured rule | Verify username/password fields               |
| Rule not enforced | Open access for all   | IP mismatch or missing fields               | Ensure IP and access permissions are accurate |
