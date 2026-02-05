---
title: DNS Security
description: SafeSquid's DNS-level security features including DNSBL, GeoIP filtering, and homograph attack detection.
keywords:
  - SafeSquid DNS security
  - DNSBL
  - GeoIP
  - homograph detection
---

# DNS Security

SafeSquid provides DNS-level security at the domain resolution layer. Features include DNS-based blacklisting, geographic IP filtering, and detection of internationalized domain name (IDN) homograph attacks.

## Documents in this section

### [DNS Blacklisting](01-DNSBL.md)
Malicious domains reach users when resolution is unrestricted. DNSBL blocks dangerous sites before connection by querying DNS-based blacklist services. Configure DNSBL in Real-time content security to reduce exposure to known-bad domains.

### [Server Geo-Location](02-GeoIP.md)
Organizations face regional compliance and threat exposure when destination geography is unknown. Server Geo-Location classifies destinations by country and ASN for location-aware policies. Enable geo profiles to enforce country-based access and meet compliance.

### [Homograph Detection](03-Homograph%20Detection.md)
IDN homograph attacks use visually similar characters to impersonate legitimate domains. Homograph detection identifies and blocks these impersonation attempts at DNS resolution. Configure to protect users from lookalike domain attacks.
