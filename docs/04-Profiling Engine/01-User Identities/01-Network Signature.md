---
title: Network Signature
description: Configure IP-based authentication in SafeSquid to control web access based on IP addresses, ensuring secure access for trusted users and blocking suspicious addresses.
keywords:
  - ip based authentication safesquid
  - safesquid ip access control
  - restrict ip access safesquid
  - safesquid authentication by ip
  - block ip address safesquid
---

## Overview

SafeSquid Access Restriction enables dividing users into specific groups and defining different access rules per group. Access restrictions can be based on user roles or network IP addresses.

**Example:** An organization divides users into groups with different policies:
- **MANAGERS:** Full internet access
- **HR TEAM:** Only job portals
- **SALES TEAM:** Only marketing-related websites
- **GENERAL USERS:** Internal websites only (no internet)
- **ALL GROUPS:** Block consumer Google accounts

## Prerequisites

- LDAP integration required for user groups based on LDAP users
- SafeSquid WebGUI access

## Setup Guide

1. Access the [SafeSquid User Interface](/docs/01-Getting%20Started/Access%20the%20SafeSquid%20Interface.md) and click **Configure**.

   ![SafeSquid Configure page](/img/How_To/IP_based_authentication/image1.webp)

2. Navigate to **Access Restrictions** under Application Setup.

   ![Access Restrictions section](/img/How_To/IP_based_authentication/image2.webp)

3. Click the **Allow List** subsection.

   ![Allow List tab](/img/How_To/IP_based_authentication/image3.webp)

4. Click **Add New** to create a new policy.

   ![Add New button](/img/How_To/IP_based_authentication/image4.webp)

5. Enter the IP address in the **IP Address** field. Comma-separated addresses or IP ranges are supported.

   ![IP Address field](/img/How_To/IP_based_authentication/image5.webp)

6. Specify a unique User-Group name in the **Add to User-Groups** field (e.g., **IP BASED AUTHENTICATION**).

   ![User-Groups field](/img/How_To/IP_based_authentication/image6.webp)

7. Save the policy.

## Verification

Access any website from the specified IP address (e.g., 192.168.0.10). An authentication prompt appears requiring the Linux machine username and password.

If the policy specifies Username and Password fields, only that user can access the web from the specified IP.
