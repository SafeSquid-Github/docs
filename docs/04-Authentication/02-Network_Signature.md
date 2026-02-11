---
title: Network Signature
description: Configure IP-based grouping in SafeSquid to apply access policies by source IP or subnet when user identity is not available.
keywords:
  - ip based authentication SafeSquid
  - SafeSquid ip access control
  - restrict ip access SafeSquid
  - SafeSquid authentication by ip
  - block ip address SafeSquid
---


:::info CISO takeaway
**Risk:** When user identity is unavailable (device-only, legacy apps), policy cannot be enforced per user; access may be unaccountable or over-broad. **Control:** Network Signature assigns source IPs or subnets to user-groups so access restriction and reporting apply by network segment. **Evidence:** Logs and reports show traffic by IP/subnet and assigned group; user-level attribution is not available for bypassed flows—document as a limitation for compliance.
:::



## Problem: Policy by source when user identity is unavailable

Access rules must apply by source IP or subnet when user identity is not available (e.g. device-only access, legacy applications, shared kiosks). Without IP-based grouping, all such traffic is either blocked or subject to a single default policy. Unattributed access increases misuse risk and complicates audit. SafeSquid Network Signature maps client IP addresses or ranges to user-groups so different access restriction rules and reporting apply per segment.



## Key benefits

Group-based policies apply by IP or subnet without directory or user login. Access Restriction and reporting integrate with the assigned user-group. Organizations can segment by location, VLAN, or device type. **Limitation:** Traffic is attributed to IP/subnet and group, not to a named user; where regulations require user-level attribution, combine with user authentication or document the scope of IP-only policies.



## Prerequisites

### Client-side

- Clients use the proxy from known IPs or subnets (static or predictable ranges).

### SafeSquid-side

- SafeSquid deployed and operational; admin access to the configuration interface.
- [Configuration Portal](/docs/SafeSquid_SWG/Configuration_Portal/) access.
- For **user**-based groups (LDAP/AD): directory integration. For **IP-only** Network Signature policies: no directory required.



## Call to action: Configure IP-based user-groups

1. Access the [SafeSquid User Interface](/docs/SafeSquid_SWG/Configuration_Portal/) and click **Configure**.

   ![SafeSquid Configure page](/img/How_To/IP_based_authentication/image1.webp)

2. Navigate to **Access Restrictions** under Application Setup.

   ![Access Restrictions section](/img/How_To/IP_based_authentication/image2.webp)

3. Click the **Allow List** subsection.

   ![Allow List tab](/img/How_To/IP_based_authentication/image3.webp)

4. Click **Add New** to create a new policy.

   ![Add New button](/img/How_To/IP_based_authentication/image4.webp)

5. Enter the IP address or range in the **IP Address** field. Comma-separated addresses or IP ranges are supported.

   ![IP Address field](/img/How_To/IP_based_authentication/image5.webp)

6. Specify a unique User-Group name in the **Add to User-Groups** field (e.g. **IP BASED AUTHENTICATION**).

   ![User-Groups field](/img/How_To/IP_based_authentication/image6.webp)

7. Save the policy. Optionally set **PAM Authentication** or **Username/Password** on the same rule if that IP range must also require user login.



## Verification and Evidence

- From a client in the configured IP range, send traffic through the proxy. The client is assigned the configured user-group and the matching access restriction rule applies.
- **Interface:** Access Restrictions → Allow List shows the rule with the IP range and user-group.
- **Logs:** Identity or access logs show the client IP and assigned user-group. Use reports to demonstrate which traffic is subject to which policy for audit.
- If the rule also requires authentication (PAM or credentials), a login prompt appears and only authenticated users from that IP get the rule; otherwise policy applies by IP/subnet only.



## Troubleshooting

| Issue | Likely cause | Resolution |
|-------|--------------|------------|
| Wrong policy applied | Client IP not in range or rule order | Verify client IP and rule order in Allow List; place more specific rules above broader ones. |
| No group assigned | IP mismatch or typo in range | Confirm IP field (single IP, comma-separated list, or range); test from known IP. |
| Unexpected auth prompt | Rule has PAM or credentials set | For IP-only policy with no user login, set PAM to FALSE and leave username/password empty for that rule. |



## Next steps

- [Local Credential Store (BASIC)](/docs/Authentication/BASIC/)
- [Directory Services](/docs/Authentication/Directory_Services/main/)
- [Access Restriction](/docs/Access_Restriction/main/)

