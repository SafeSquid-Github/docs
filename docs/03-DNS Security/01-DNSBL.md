---
title: DNS Blacklisting
description: Configure SafeSquid DNSBL to block access to dangerous sites using DNS-based blacklist services.
keywords:
  - dns blacklist SafeSquid
  - block websites dnsbl SafeSquid
  - dns blacklist configuration SafeSquid
  - dns filtering SafeSquid
  - block dangerous websites SafeSquid
---

## DNSBL blocks dangerous sites before connection
Set the DNSBL reference service to prevent users from visiting dangerous websites.

Before establishing a connection with "www.example.com", SafeSquid performs a DNS lookup for "example.com.in.dnsbl.org".

SafeSquid caches the DNS query results for efficiency.

## [Access the SafeSquid User Interface](/docs/SafeSquid%20SWG/Configuration%20Portal)
## Go to Configure Page
![Goto configure.webp](/img/Configure/Real_Time_Content_Activity/DNS_blacklist/image1.webp)

## Go to Real-time content security.
![Go to real time content security.webp](/img/Configure/Real_Time_Content_Activity/DNS_blacklist/image2.webp)

## Go to DNS Blacklist Section
![DNS blcaklist Slide1 (1).webp](/img/Configure/Real_Time_Content_Activity/DNS_blacklist/image3.webp)

![DNS blcaklist Slide1 (2).webp](/img/Configure/Real_Time_Content_Activity/DNS_blacklist/image4.webp)

![DNS blcaklist Slide1 (3).webp](/img/Configure/Real_Time_Content_Activity/DNS_blacklist/image5.webp)

![DNS blcaklist Slide1 (4).webp](/img/Configure/Real_Time_Content_Activity/DNS_blacklist/image6.webp)

## Global
### Enabled
Enable or Disable the use of DNSBL service.

Disable this section to skip querying DNS blacklist services

-   **TRUE**: Enable DNS blacklist section
-   **FALSE**: Disable the DNS blacklist section

### Template
Name of the template to send when the domain is found to be blocked.

Leave this blank, to use the default Template "blocked".

### Domain
This field needs to be filled in, only for making queries to blacklist services like DNSBL.

The website to query is appended with DNSBL's domain name.

**For example**: If you set DNSBL's domain name as "in.dnsbl.org", then before establishing a connection with "example.com", SafeSquid performs a DNS lookup for "example.com.in.dnsbl.org".

:::note
Administrators can use any service that provides a similar DNS blacklist.
:::

### Blocked IP addresses
Enter the comma-separated list of IP address ranges that can be returned by DNS blacklist queries after matching which cause the page to be blocked.

**Example**: With domain "in.dnsbl.org", the service returns an IP in the range 127.0.0.1 to 127.0.0.6 for listed servers.

Returned IP Convention for domain "in.dnsbl.org" are:

"127.0.0.2"=>"UCE", "127.0.0.3"=>"Fraud", "127.0.0.4"=>"Spam Promo", "127.0.0.5"=>"Illegal Content",

"127.0.0.6"=>"Pre-emptive", "127.0.0.7"=>"Improper List Practices" "127.0.0.8"=>"Botnet Activity / Malware".

## Example configuration
### Block sites via DNSBL server
Block websites using a DNS blacklisting server. Use the blacklisting domain in.dnsbl.org. Set blocked IP addresses to 127.0.0.1–127.0.0.6. SafeSquid blocks all matching domains and displays the blocked_bypass template.

Use DNS blacklisting when a SOC provides the block list or when many domains must be blocked. After configuration, SafeSquid looks up the URL against the configured DNSBL domain (e.g. google.com.in.dnsbl.org). If the DNS record exists, SafeSquid blocks the URL; otherwise the page loads.

![Slide1-dnsbl.webp](/img/Configure/Real_Time_Content_Activity/DNS_blacklist/image7.webp)
