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
<section class="section-strip">


# DNS Blacklisting

</section>

<section class="section-strip">

## Unrestricted resolution allows access to known-bad domains

Unrestricted DNS resolution lets users reach domains listed as malicious in threat feeds. The risk is malware delivery, phishing, and botnet callback traffic. Business impact includes incident response cost, regulatory findings, and reputational damage. DNSBL blocks resolution of blacklisted domains before a connection is established. SafeSquid integrates with [Integrated DNS Security](/docs/SafeSquid_SWG/Integrated_DNS_Security/) to query DNS-based blacklist services and block matching destinations.

</section>

<section class="section-strip">

## DNSBL reduces exposure and supports audit evidence

Enabling DNSBL blocks access to domains and IPs flagged by the configured blacklist service. The control reduces exposure to known-malicious sites and supports compliance objectives that require blocking harmful content. Blocked requests are logged; [Security Logs](/docs/Audit_Forensics/Security_Logs/) and the [Reporting Module](/docs/Audit_Forensics/Reporting_Module/) provide evidence for auditors. Limitations: DNSBL effectiveness depends on list quality and availability; bypass rules and direct IP access can circumvent the control; false positives may require allow-listing.

</section>

<section class="section-strip">

## Prerequisites

- SafeSquid SWG installed and operational. See [Getting Started](/docs/Getting_Started/main/).
- DNS resolution handled by SafeSquid (e.g. [Integrated DNS Security](/docs/SafeSquid_SWG/Integrated_DNS_Security/) or consistent resolver).
- DNSBL service or domain available (e.g. in.dnsbl.org or SOC-provided list).
- Administrative access to Configuration Portal.

</section>

<section class="section-strip">

## Configure DNSBL in Real-time content security

1. [Access the SafeSquid User Interface](/docs/SafeSquid_SWG/Configuration_Portal/).
2. Open the Configure page.
3. Go to Real-time content security.

![Go to Real time content security](/img/Configure/Real_Time_Content_Activity/DNS_blacklist/image1.webp)

![Configure page and Real-time content security](/img/Configure/Real_Time_Content_Activity/DNS_blacklist/image2.webp)

4. Open the DNS Blacklist section.

![DNS blacklist section](/img/Configure/Real_Time_Content_Activity/DNS_blacklist/image3.webp)

![DNS blacklist configuration options](/img/Configure/Real_Time_Content_Activity/DNS_blacklist/image4.webp)

![DNS blacklist domain and blocked IPs](/img/Configure/Real_Time_Content_Activity/DNS_blacklist/image5.webp)

![DNS blacklist global settings](/img/Configure/Real_Time_Content_Activity/DNS_blacklist/image6.webp)

5. Set Global options:
   - **Enabled**: TRUE to enable DNSBL; FALSE to skip querying blacklist services.
   - **Template**: Name of the template when the domain is blocked. Leave blank for default "blocked".
   - **Domain**: DNSBL domain for queries (e.g. in.dnsbl.org). Before connecting to example.com, SafeSquid looks up example.com.in.dnsbl.org.
   - **Blocked IP addresses**: Comma-separated IP ranges returned by the DNSBL that trigger a block (e.g. 127.0.0.1–127.0.0.6 for in.dnsbl.org).

:::note
Administrators can use any service that provides a similar DNS blacklist.
:::

Returned IP convention for in.dnsbl.org: 127.0.0.2 UCE, 127.0.0.3 Fraud, 127.0.0.4 Spam Promo, 127.0.0.5 Illegal Content, 127.0.0.6 Pre-emptive, 127.0.0.7 Improper List Practices, 127.0.0.8 Botnet Activity / Malware.

6. Save. SafeSquid caches DNSBL query results for efficiency.

### Example: block sites via DNSBL server

Use blacklisting domain in.dnsbl.org and blocked IP addresses 127.0.0.1–127.0.0.6. SafeSquid blocks all matching domains and displays the blocked template. Use DNSBL when a SOC provides the list or when many domains must be blocked.

![DNSBL example configuration](/img/Configure/Real_Time_Content_Activity/DNS_blacklist/image7.webp)

</section>

<section class="section-strip">

## Verify configuration and blocked requests

- **Interface**: Confirm DNS Blacklist is enabled, Domain and Blocked IP addresses are set, and Template is correct.
- **Block test**: Request a domain known to be listed; expect block page and no connection to origin.
- **Logs**: In [Security Logs](/docs/Audit_Forensics/Security_Logs/), confirm entries for blocked requests (action/result indicating DNSBL block).
- **Audit**: Run a report filtered by block reason or DNSBL; export for evidence that the control is active and blocking malicious domains.

</section>

<section class="section-strip">

## Troubleshooting

| Issue | Symptom | Resolution |
|-------|---------|-------------|
| DNSBL domain unreachable | Blocks not applied; resolution timeouts | Check network and firewall to the DNSBL service; verify Domain value; see [DNS Failure](/docs/Troubleshooting/DNS_Failure/) for resolution issues. |
| Wrong blocked-IP range | No blocks or incorrect blocks | Align Blocked IP addresses with the DNSBL provider’s return values (e.g. 127.0.0.1–127.0.0.6 for in.dnsbl.org). |
| Cache | Stale block or allow after list update | SafeSquid caches DNSBL results; allow cache expiry or restart if immediate consistency is required. |
| False positive | Legitimate site blocked | Allow-list the domain or IP in policy if the DNSBL listing is incorrect; consider a different list or provider. |

Escalate to SafeSquid support when configuration is correct but blocks or resolution fail consistently.

</section>