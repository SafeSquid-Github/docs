# DNS Blacklist

## Overview

Set the DNSBL reference service to prevent users from visiting dangerous websites.

Before establishing a connection with "www.example.com", SafeSquid performs a DNS lookup for "example.com.in.dnsbl.org".

SafeSquid caches the DNS query results for efficiency.

## [Access the SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface#Overview)

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

Disable this section if you do not want to query DNS blacklist services

-   **TRUE**: Enable DNS blacklist section.

-   **FALSE**: Disable the DNS blacklist section.

### Template

Name of the template to send when the domain is found to be blocked.

Leave this blank, to use the default Template "blocked".

### Domain

This field needs to be filled in, only for making queries to blacklist services like DNSBL.

The website to query is appended with DNSBL's domain name.

**For example**: If you set DNSBL's domain name as "in.dnsbl.org", then before establishing a connection with "example.com", SafeSquid performs a DNS lookup for "example.com.in.dnsbl.org".

**NOTE:** You can also use any other service that provides similar DNS blacklist service.

### Blocked IP addresses

Enter the comma-separated list of IP address ranges that can be returned by DNS blacklist queries after matching which cause the page to be blocked.

**For example**: If You set the domain name as "in.dnsbl.org" then it returns an IP in the range 127.0.0.1 to 127.0.0.6 for malafide servers.

Returned IP Convention for domain "in.dnsbl.org" are:

"127.0.0.2"=>"UCE", "127.0.0.3"=>"Fraud", "127.0.0.4"=>"Spam Promo", "127.0.0.5"=>"Illegal Content",

"127.0.0.6"=>"Pre-emptive", "127.0.0.7"=>"Improper List Practices" "127.0.0.8"=>"Botnet Activity / Malware".

## Example

### Rule#1

I want to block websites using my DNS blacklisting server.

I want to use the blacklisting domain as in.dnsbl.org.

The blocked IP address is to be set to 127.0.0.1-127.0.0.6.

For all the matching entries block the domain.

The blocked domain will display SafeSquid's blocked_bypass template.

DNS Blacklisting is used in a situation where the Blocking of websites is done by a SOC-provided list of websites.

DNS Blacklisting should also be considered in a situation where there are many domains to be blocked.

Once the DNSB blacklisting is configured, SafeSquid will look for the entry of the URL and the dnsbl domain you have configured. Example: SafeSquid will check for the DNS record of google.com.in.dnsblbl.org in the db.in.dnsbl.org file, if found then the URL will be blocked else the page will be loaded.

![Slide1-dnsbl.webp](/img/Configure/Real_Time_Content_Activity/DNS_blacklist/image7.webp)