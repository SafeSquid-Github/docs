## Overview

Cookie Filter allows you to choose which hosts(websites), the browsers are allowed to send and receive the cookies.

An HTTP cookie (also called web cookie, Internet cookie, browser cookie or simply cookie) is a small piece of data sent from a website and stored in the user's web browser while the user is browsing.

You can control the cookie exchange precisely, between remote websites and users.

You can manage the user privacy (Username & Preferences).

You can also disable the users from logging into their personal accounts.

**Example:** You can block cookies from advertising websites like tribalfusion.com and doubleclick.net to prevent private information from being transferred to them.

Users can query the search engines (google, yahoo) but they are not able to login to their personal accounts (Gmail, shopping websites, trading websites).

## [Access SafeSquid interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

## Go to configure page

![](/img/Configure/Restriction_Profiles/Cookie_Filter/image1.webp)

## Global

### Enabled

Enable or Disable the cookie filtering section.

-   **TRUE:** Enable cookie filtering section.

-   **FALSE:** Disable the cookie filtering section.

![](/img/Configure/Restriction_Profiles/Cookie_Filter/image2.webp)

### Policy

Select the default action to take, when no matching entry for a requested cookie is found.

-   **ALLOW:** When Policy is set to Allow, a requested cookie is allowed, when no matching entry is found.

-   **DENY:** When Policy is set to Deny, a requested cookie is denied, if no matching entry is found.

## Allow

![](/img/Configure/Restriction_Profiles/Cookie_Filter/image3.webp)

When the Policy is Deny, rules defined under this sub-section, are exclusively allowed access.

Here you can add a new allow entry, that would explicitly result in acceptance or allowance of cookie transfer to all or a specific set of conditions.

This effectively allows you to set a variety of intelligently and creatively defined Cookie Transfer whitelist(s).

### Enabled

Enable or Disable this entry

**TRUE:** Enable this entry.

**FALSE:** Disable this entry.

### Comment

For documentation and future references, explain the relevance of this entry with your policies.

### Profiles

Specify the Profiles applicable for this entry.

This entry will be applicable only if the connection has any one of the specified profiles.

Leave it Blank, to apply for all connections irrespective of any applied profile.

To avoid application to a connection that has a profile, use a negated profile (! profile).

### Expiry year range

Mention the cookie expiry year range this entry applies to.

The cookie from a particular host (website), will be expired after this range.

**Example:** 2016-2017, here cookie will expire after the year 2017.

### Expiry month range

Select the cookie expiry month range this entry applies to.

The cookie from a particular host (website), will be expired after this range.

**Example:** January -- March, here cookie expires after March.

### Expiry day range

The cookie expiry day range this entry applies to.

The cookie from a particular host (website), will be expired after this range.

**Example:** 1-20, here cookie will expire after the 20th day.

### Expiry weekday range

The cookie expiry weekday ranges this entry applies to.

The cookie from a particular host (website), will be expired after this range.

**Example:** Monday -- Friday, here cookie will expire after Friday.

### Expiry hour range

The cookie expiry hour ranges this entry applies to.

The cookie from a particular host (website), will be expired after this range.

**Example:** 1-10, Here cookie will expire after 10 AM.

### Expiry minute range

The cookie expiry minute range this entry applies to.

The cookie from a particular host (website), will be expired after this range.

**Example:** 15-30, Here cookie will expire after 10:30 AM.

In the above example, Hours are included in the Hour range.

### Domain

Here you can mention the domain (website) names by separating with pipe (|) which you want to allow or deny. You can use regular expressions to match the domains.

**Example:** safesquid.com|google.com.

### Path

A regular expression matching the cookie's path attribute.

### Direction

The direction of the cookie this entry applies to; can be either in (Set-cookie sent by website), out (Cookie sent by browser), or both.

-   **IN:** For Inbound Connections only. That is only for the cookies sent by the hosts(websites).

-   **OUT:** For Outbound Connections only. That is only for the cookies sent by the browser.

-   **BOTH:** For Both Inbound and Outbound connections. For cookies sent by the websites as well as cookies sent by the browser.

### Time match mode

Select the appropriate mode to match the multiple time ranges.

**ABSOLUTETIME:**

When the absolute time match mode is used, any time between the starting and ending time will be matched.

Example: The weekday range specified is Monday to Friday and the Hour Range is 9 to 17.

The Absolute match mode will match any time starting Monday, 9 AM and ending Friday, 17 PM.

So, it will be active from Monday 9 AM to Friday 5 PM.

**ALLRANGES:**

With all ranges time match mode, however, a time within all of the ranges will match.

Example: The weekday range specified is Monday to Friday and the Hour Range is 9 to 17.

All ranges will match any time between 9 AM to 17 PM, on all weekdays from Monday to Friday.

So, it will be active every day from Monday to Friday between 9 AM to 5 PM.

### Example

#### Rule#1

I want to allow cookie filtering for connections with the profile "COOKIE ALLOW". Users who require access to log-in webpages and personal accounts need cookie access. We can use the cookie -> Allow subsection to allow Cookies.

![](/img/Configure/Restriction_Profiles/Cookie_Filter/image4.webp)

#### Rule#2

I want to allow cookies for domain safesquid.com Despite the deny rule, connections to domain safesquid.com will not drop cookies This can be used in a situation where login is required for mission-critical applications.

![](/img/Configure/Restriction_Profiles/Cookie_Filter/image5.webp)

## Deny

When the Policy is Allow, rules defined under this sub-section, are exclusively denied access.

Here, you can add rules under Deny that would explicitly result in blocking or denial of cookie transfer to all or a specific set of conditions.

This effectively allows you to set a variety of intelligently and creatively defined Cookie Transfer Blacklist(s).

![](/img/Configure/Restriction_Profiles/Cookie_Filter/image6.webp)

### Enabled

Enable or Disable this entry

-   **TRUE:** Enable this entry.

-   **FALSE:** Disable this entry.

### Comment

For documentation and future references, explain the relevance of this entry with your policies.

### Profiles

Specify the Profiles applicable for this entry.

This entry will be applicable only if the connection has any one of the specified profiles.

Leave it Blank, to apply for all connections irrespective of any applied profile.

To avoid application to a connection that has a profile, use a negated profile (! profile).

### Expiry year range

Mention the cookie expiry year range this entry applies to

The cookie from a particular host (website), will be expired after this range.

**Example:** 2016-2017, here cookie will expire after the year 2017.

### Expiry month range

Select the cookie expiry month range this entry applies to.

The cookie from a particular host (website), will be expired after this range.

**Example:** January -- March, here cookie expires after March.

### Expiry day range

The cookie expiry day range this entry applies to.

The cookie from a particular host (website), will be expired after this range.

Example: 1-20, here cookie will expire after the 20th day.

### Expiry weekday range

The cookie expiry weekday ranges this entry applies to.

The cookie from a particular host (website), will be expired after this range.

**Example:** Monday -- Friday, here cookie will expire after Friday.

### Expiry hour range

The cookie expiry hour ranges this entry applies to.

The cookie from a particular host (website), will be expired after this range.

**Example:** 1-10, Here cookie will expire after 10 AM.

### Expiry minute range

The cookie expiry minute range this entry applies to.

The cookie from a particular host (website), will be expired after this range.

**Example:** 15-30, Here cookie will expire after 10:30 AM.

In the above example, Hours are included in the Hour range.

### Domain

Here you can mention the domain(website) names by separating with pipe (|) which you want to allow or deny. You can use regular expressions to match the domains.

**Example:** safesquid.com|google.com

### Path

A regular expression matching the cookie's path attribute.

### Direction

The direction of the cookie this entry applies to; can be either in (Set-cookie sent by website), out (Cookie sent by browser), or both.

-   **IN:** For Inbound Connections only. That is only for the cookies sent by the hosts(websites).

-   **OUT:** For Outbound Connections only. That is only for the cookies sent by the browser.

-   **BOTH:** For Both Inbound and Outbound connections. For cookies sent by the websites as well as cookies sent by the browser.

### Time match mode

Select the appropriate mode to match the multiple time ranges.

**ABSOLUTETIME:**

When the absolute time match mode is used, any time between the starting and ending time will be matched.

Example: The weekday range specified is Monday to Friday and the Hour Range is 9 to 17.

The Absolute match mode will match any time starting Monday, 9 AM and ending Friday, 5 PM.

So, it will be active from Monday 9 AM to Friday 5 PM.

**ALLRANGES:**

With all ranges time match mode, however, a time within all of the ranges will match.

Example: The weekday range specified is Monday to Friday and the Hour Range is 9 to 17.

All ranges will match any time between 9 AM to 17 PM, on all weekdays from Monday to Friday.

So, it will be active every day from Monday to Friday between 9 AM to 5 PM.

### Example

#### Rule#1

The default rule for dropping cookies is used by SafeSquid.

Connections with the profile "READ ONLY" will ensure users are unable to log in.

Cookies sent in both directions are dropped.

![](/img/Configure/Restriction_Profiles/Cookie_Filter/image7.webp)

#### Rule#2

Connections with the profile "DROP COOKIES FOR GOOGLE" will drop all cookies for the domain google.com.

Cookies will be dropped for both incoming and outgoing requests.

![](/img/Configure/Restriction_Profiles/Cookie_Filter/image8.webp)