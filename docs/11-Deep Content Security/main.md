---
title: Deep Content Security
---

## [Integrate with a DNS Blacklisting service (DNSBL)](https://help.safesquid.com/portal/en/kb/articles/dns-blacklist)
DNS tunnelling attacks evade the legacy HTTP-based security solutions as the exploit is carried out via DNS queries, which are traditionally perceived as non-threatful. Integrating with a customisable DNSBL server enables your Security Operations Centre (SOC) to effectively block domains at the DNS level.

## Filter IP based on geolocation
To defend against state-sponsored cyberattacks and regional malware outbreaks, SafeSquid's Geo-IP can block traffic from specific geographical regions.

## Enforce Content Security Policy (CSP)
By restricting the sources of executable scripts and resources, enforcing CSP at the secure web gateway mitigates the risk of Cross-Site Scripting (XSS) and other injection attacks.

## Configure Antivirus Engines
To block virus uploads and downloads, SafeSquid offers diverse antivirus setups to ensure comprehensive protection against various threats. To defend against Zero-Day malware, we recommend minimising the vulnerability window using a multi-layered antivirus scanning approach.

### [SqScan](/docs/08-SafeSquid%20Interface/01-Configuration/Real%20Time%20Content%20Security/SqScan.md)
SafeSquid's integrated on-the-wire malware scanner employs advanced heuristic techniques to evaluate and sanitize all payloads, including those that are compressed or encrypted.

### [ClamAV](https://www.clamav.net/)
SafeSquid seamlessly integrates with the ClamAV engine for signature-based malware detection. Furthermore, its customisable
configuration empowers security administrators to add PCRE keyword expressions sensitive to the organisation. Thus, enabling deep packet inspection for confidential information in archive files, emails, and Instant Messaging (IM) traffic.

### [Generic ICAP Threat Detection Interface](/docs/08-SafeSquid%20Interface/01-Configuration/Real%20Time%20Content%20Security/ICAP.md)
SafeSquid facilitates simultaneous connection with various ICAP-based threat detection services for broader security coverage. With its Intelligent Threat Quarantine Mechanism, SafeSquid automatically isolates content flagged by ICAP services.

## [Filter inappropriate content](https://help.safesquid.com/portal/en/kb/articles/content-filtering)
SafeSquid's Content Analyser has a keyword scoring system to thoroughly inspect all textual, and multimedia content in real-time to prevent exposure to unsuitable materials such as pornography or violence.
Furthermore, you can utilise Perl Compatible Regular Expressions for sophisticated keyword detection in content filtering. User-adjustable settings allow fine-tuning the sensitivity of the content detection system. The [image-filtering](https://help.safesquid.com/portal/en/kb/articles/image-analyzer) AI systems update in real time for up-to-date and effective visual
content analysis.

## [Protect user privacy](https://help.safesquid.com/portal/en/kb/articles/block-third-party-cookies)
Websites generally use third-party cookies for tracking user activity.
[Blocking third-party cookies](https://help.safesquid.com/portal/en/kb/articles/block-third-party-cookies) is essential for user privacy and security. SafeSquid offers you a user-configurable option to limit the tracking data received by remote websites, bolstering user privacy.
