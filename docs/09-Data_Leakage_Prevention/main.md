---
title: Data Leakage Prevention
slug: /Data_Leakage_Prevention
description: Protect against data exfiltration with SafeSquid DLP — compliance templates and content analysis for regulatory requirements.
keywords:
  - data leakage prevention
  - SafeSquid DLP
  - compliance templates
  - sensitive data detection
  - PCI HIPAA GDPR
---
<section class="section-strip">


# Detect and block sensitive data in transit

:::info CISO takeaway
**Risk:** Uncontrolled exfiltration of sensitive data (PII, PHI, card data) creates regulatory and legal exposure (GDPR, HIPAA, PCI-DSS). **Control:** SafeSquid DLP uses compliance templates and content analysis to detect and block or log sensitive data in transit. **Evidence:** DLP events and blocks are logged; reports and security logs can be exported for audit. Configure bypass rules for legitimate channels (e.g. approved file transfer) to avoid false positives.
:::

Sensitive data leaving the network creates regulatory, legal, and reputational risk. SafeSquid DLP uses content analysis, request profiling, and compliance templates to detect and block or log sensitive data in transit. This section links to the Compliance Templates document; Text Analyser, Image Analyser, and Request Profiles are documented in Profiling Engine and Content Analyser.

</section>

<section class="section-strip">

## DLP configuration guides

### [Compliance Templates](/docs/Data_Leakage_Prevention/Compliance_Templates/)
Organizations must detect sensitive data in transit to meet PCI-DSS, HIPAA, GDPR, and similar requirements. Compliance Templates provide pre-configured patterns for credit card numbers, SSN, PHI, and PII for use with SafeSquid Text Analyser. Block or log matches and combine with Access Restriction for enforcement. Configure Text Analyser with the templates and link to Access Restriction policies using this document.

</section>