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
<section class="section-strip">


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info CISO takeaway
**Risk:** Without user identity, access policies cannot be enforced per user; anonymous proxy access increases misuse and complicates audit. **Control:** Local credential store (BASIC) provides browser-prompt authentication and user-level policies without a directory. **Evidence:** Identity and access logs record authenticated usernames; policies tie to user identity for audit trail.
:::

</section>

<section class="section-strip">

## Problem: Identity-based access without a directory

Organizations without Active Directory need identity-based web access control. Absence of centralized directory prevents per-user policies and audit attribution. SafeSquid local credential store (BASIC) enables authentication via browser prompts with usernames and passwords stored in SafeSquid. User-level policies and logs then support accountability and compliance.

</section>

<section class="section-strip">

## Key benefits

Eliminates LDAP dependency for small or isolated environments. Access control and logging apply per user. HTTP Basic Authentication is integrated into SafeSquid credential manager. No directory infrastructure is required. Supports audit evidence for user-level access (e.g. SOC 2, ISO 27001 A.9); identity and access logs show authenticated usernames for auditors. **Limitation:** Credentials are stored in SafeSquid; no SSO or directory-backed MFA. Use when a directory is not available; for centralized identity, use [Directory Services](03-Directory_Services/main.md).

</section>

<section class="section-strip">

## Prerequisites

### Client-side

- Modern browser with HTTP Basic Authentication support
- Proxy configured in browser (manual or via PAC file)

### SafeSquid-side

- SafeSquid deployed and operational on internal network
- Admin access to SafeSquid configuration interface
- "Enable Authentication" set in access profiles
- Policy management interface available via HTTP/HTTPS

</section>

<section class="section-strip">

## Call to action: Setup browser authentication

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
   Click the checkmark to save the rule. A browser prompt will appear for username and password when accessing the internet.

</section>

<section class="section-strip">

## Call to action: Add user

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

  <TabItem value="From Linux Terminal" label="From Linux Terminal">
    Alternatively, create users on the Linux host where SafeSquid is installed:

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

</section>

<section class="section-strip">

## Verification and Evidence

- Browse an external site; username/password prompt should appear.
- Enter configured credentials; access is granted when authentication succeeds.
- **Interface:** Access Restrictions → Allow List shows the rule with authentication enabled and credentials or PAM set to FALSE.
- **Logs:** Check `identity.log` or `access.log` for authenticated username entries. Use these logs to demonstrate user-level access for audit.

</section>

<section class="section-strip">

## Troubleshooting

| Issue | Symptom | Likely cause | Resolution |
|-------|---------|--------------|------------|
| No login prompt | Direct access granted | Authentication not enabled in access rule | Set PAM to FALSE and add credentials in the rule |
| Login fails | Repeated prompts | Incorrect credentials or misconfigured rule | Verify username/password and rule configuration |
| Rule not enforced | Open access for all | IP mismatch or missing fields | Ensure IP and access permissions match the client |

</section>

<section class="section-strip">

## Next steps

- [Network Signature](02-Network_Signature.md) for IP-based policy without login.
- [Directory Services](03-Directory_Services/main.md) for Active Directory or OpenLDAP.
- [PAM Authentication](04-PAM.md) for OS credential integration.
- [Bypass Authentication](05-Bypass_Authentication.md) for exempt destinations or request types.

</section>