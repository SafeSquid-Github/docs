---
title: SSL Inspection
slug: /SSL_Inspection
description: Configure HTTPS inspection in SafeSquid to decrypt and analyze encrypted traffic for web security, malware detection, and policy enforcement.
keywords:
  - SafeSquid HTTPS inspection
  - SSL inspection SafeSquid
  - decrypt HTTPS traffic SafeSquid
  - web filtering encrypted traffic
  - SSL certificate configuration SafeSquid
  - HTTPS scanning enterprise proxy
---
<section class="section-strip">


# HTTPS inspection for policy and threat visibility

Encrypted HTTPS traffic conceals malicious payloads, phishing attempts, and data leakage. Enterprises need visibility for web usage policies, malware scanning, and data exfiltration prevention. SafeSquid inspects HTTPS traffic with policy-based bypass so privacy-sensitive domains (e.g. banking, healthcare) can remain uninspected for compliance.

This section links to the document that covers certificate setup, enabling inspection, and verification.

</section>

<section class="section-strip">

## HTTPS inspection configuration and verification

### [Configure HTTPS Inspection](/docs/SSL_Inspection/Configure_HTTPS_Inspection/)
HTTPS traffic must be decrypted for policy enforcement and threat prevention. The document covers prerequisites, certificate generation or import via the Self-Service Portal, and enabling inspection in the Configuration Portal. Bypass rules and client Root CA import support compliance-sensitive domains and audit evidence. Follow the document to deploy and validate HTTPS inspection end-to-end.

### [Import Certificate into Chrome or IE](/docs/SSL_Inspection/Import_Certificate_Chrome_IE/)
Clients must trust the SafeSquid Root CA for HTTPS inspection to work without certificate warnings. This guide provides step-by-step import of the SafeSquid SSL certificate into the Windows Trusted Root Certification Authorities store used by Chrome and Internet Explorer. Complete this after enabling HTTPS inspection to eliminate browser trust errors.

</section>