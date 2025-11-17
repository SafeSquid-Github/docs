---
title: Integrated DNS Security
Description: 

Keywords:
- Secure Web Gateway Components
- Integrated DNS Security
- DNSBL Service
---

# Integrated DNS Security

## DNSBL service

For DNS Security, SafeSquid blocks the DNS resolution of malicious domains by integrating with the DNSBL service. When any user requests a domain or IP, SafeSquid queries the A record to the DNSBL service. DNSBL checks whether the IP or domain is associated with malicious or harmful traffic in its blacklist. If DNSBL flags the site as blacklisted, SafeSquid blocks access.
