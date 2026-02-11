---
title: Bypass Authentication
description: Configure authentication bypass for specific destinations or applications in SafeSquid so automatic updates and non-interactive clients work while other traffic remains authenticated and logged.
keywords:
  - bypass authentication SafeSquid
  - SafeSquid proxy authentication bypass
  - bypass proxy authentication dropbox
  - SafeSquid authentication policy
  - allow application without authentication SafeSquid
---


:::info CISO takeaway
**Risk:** Unauthenticated proxy traffic has no user attribution and weakens audit and acceptable-use enforcement. **Control:** Bypass rules limit unauthenticated access to an explicit list of destinations or request types; all other traffic remains subject to authentication and logging. **Evidence:** Bypass configuration is auditable; logs show which traffic was bypassed (no user identity) versus authenticated—demonstrate narrow scope of bypass for auditors.
:::



## Problem: Applications that cannot send proxy credentials break or fail

Organizations enforce proxy authentication to attribute access and enforce policy. Automatic updates (antivirus, OS, applications) and non-interactive clients (e.g. Dropbox, some backup tools) cannot send proxy credentials and fail when authentication is required. Blocking them disrupts operations; allowing all unauthenticated traffic removes accountability. SafeSquid bypass rules let specific destinations or request types skip authentication while the rest of the traffic remains authenticated and tracked.



## Key benefits

Automatic updates and approved applications work without user interaction. Policy and logging stay in place for all other traffic. Bypass list is explicit and configurable so scope is auditable. **Trade-off:** Bypassed traffic is not attributed to a user; keep the bypass list minimal and document it for compliance.



## Prerequisites

### Client-side

- Proxy configured on clients; authentication enabled for normal browsing.

### SafeSquid-side

- SafeSquid deployed with authentication enabled in access rules.
- Admin access to [Configuration Portal](/docs/SafeSquid_SWG/Configuration_Portal/) and permission to edit Request Types and Access Profiles.



## Call to action: Enable bypass and define bypassed destinations

### Enable bypass authentication

1. Access the [SafeSquid User Interface](/docs/SafeSquid_SWG/Configuration_Portal/) and click **Configure**.

   ![SafeSquid Configure](/img/How_To/Bypass_Authentication/image1.webp)

2. Click **Search**.

   ![Search function](/img/How_To/Bypass_Authentication/image2.webp)

3. Search for **BYPASS AUTHENTICATION**.

   ![Search results](/img/How_To/Bypass_Authentication/image3.webp)

4. Edit the policy and set **Enabled** to **TRUE**.

   ![Edit policy](/img/How_To/Bypass_Authentication/image4.webp)

   ![Enable bypass authentication](/img/How_To/Bypass_Authentication/image5.webp)

### Create custom bypass policy (example: Dropbox)

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



## Verification and Evidence

- **Bypassed destination:** From a client, trigger traffic to the bypassed destination (e.g. update service, Dropbox); request succeeds without authentication prompt. Check identity or access logs; bypassed requests show no user identity or show bypass indicator.
- **Authenticated traffic:** Browse a non-bypassed site; authentication prompt appears and access is logged with username.
- **Interface:** Search for BYPASS AUTHENTICATION and confirm Enabled is TRUE; review Request Types and Access Profiles to confirm bypass list scope for audit.



## Troubleshooting

| Issue | Likely cause | Resolution |
|-------|--------------|------------|
| Bypass not applied | Request type not in access profile or rule order | Ensure the request type is in the bypass Access Profile and the profile is applied to the matching access rule; check rule order. |
| Wrong traffic bypassed | Pattern too broad (e.g. Smart TLD) | Tighten domain pattern or disable Smart TLD; test with a single FQDN first. |
| Updates still fail | Destination not in bypass list or different domain | Add the actual update domains to a request type and include in bypass profile; verify with logs. |



## Next steps

- [Local Credential Store (BASIC)](/docs/Authentication/BASIC/)
- [PAM Authentication](/docs/Authentication/PAM/)
- [Access Restriction](/docs/Access_Restriction/main/)

