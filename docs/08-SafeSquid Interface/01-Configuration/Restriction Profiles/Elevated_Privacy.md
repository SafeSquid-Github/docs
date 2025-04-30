---
title: Elevated Privacy  
description: Use SafeSquid's Elevated Privacy to block third-party cookies, hide referrers, and mask user agents. Enhance user privacy across the web by preventing online tracking and securing sensitive browsing activities.  
keywords:  
- third-party cookie blocking  
- SafeSquid privacy control  
- hide HTTP referrer  
- elevated privacy filter  
- user agent masking  
---

## Overview
Use Elevated Privacy to protect privacy activity across different websites.

Otherwise, third-party cookies will be tracking your activities.

**Example:** When you are surfing the internet by logging into any of your accounts like Hotmail, Yahoo, Gmail, Online Banking...etc. Your activities will be tracked by third party and referral domains.

## Global
![](/img/Configure/Restriction_Profiles/Elevated_Privacy/image1.webp)

### Enabled
Enable or Disable this section.

-   **TRUE:** Enable strict privacy and third-party cookies blocking.
-   **FALSE:** Disable strict privacy and third-party cookies blocking.

## Elevated policies
![](/img/Configure/Restriction_Profiles/Elevated_Privacy/image2.webp)

Create the Policies for Elevated Privacy.

ALL The Following Entries will be tested from top to bottom.

Click on Add below, to add a new entry.

**Example:** After enabling this section and creating a policy, you are unable to log into websites with third-party account details, such as you are unable to log into Flipkart or Amazon with Facebook or Gmail accounts.

### Enabled
Enable or Disable this entry

-   **TRUE:** Enable this entry.
-   **FALSE:** Disable this entry.

### Comment
For documentation and future references, explain the relevance of this entry with your policies.

### Profiles
Specify the Profiles applicable for this entry.

This entry will be applicable only if the connection has any one of the specified profiles.

Leave it Blank, to apply for all connections irrespective of any applied profile.

To avoid application to a connection that has a profile, use a negated profile (! profile).

### Privacy Levels
Apply 'Privacy Level' as per your requirement.

:::caution
 If you select 'Paranoid' level privacy, it may cause problems for web servers that give responses based on User-Agent.
:::

-   **NOT_REQUIRED:** Select this if you want to disable 'Elevated Privacy'.
-   **LOW:** Select this, if you want to block Third-Party Cookies only.
-   **STANDARD:** Select this, if you want to block Third-Party Cookies and hide the HTTP & HTTPS referrer.
-   **PARANOID:** Select this, if you want to block Third-Party Cookies and hide the HTTP & HTTPS referrer and also hide different User Agents.
     

## Example
### Rule#1
We want to block online tracking for privacy concerns.

Some websites use third party cookies to track us online or use referrers to track user activity.

Information such as user agents can help others determine browser version, operating system, and system architecture.

We want to enhance our privacy protection by:

-   Removing third-party cookies
-   Hiding referrer
-   Modifying user-agent

Users will not be able to login to websites that use third party cookies.

Websites such as Stack Overflow require third party cookies when using Google SSO.

Connections with the profile "ENFORCE PARANOID LEVEL PRIVACY CHECK" will be ensured to have a paranoid level privacy check.

![](/img/Configure/Restriction_Profiles/Elevated_Privacy/image3.webp)

### Rule#2
For applications for which we require third-party websites to sign in, Elevated privacy must be bypassed.

For connections with the profile "BYPASS ELEVATED PRIVACY" a privacy check will not be required.

Connections with "BYPASS ELEVATED PRIVACY" CAN use third-party cookies for authentication purposes.

![](/img/Configure/Restriction_Profiles/Elevated_Privacy/image4.webp)