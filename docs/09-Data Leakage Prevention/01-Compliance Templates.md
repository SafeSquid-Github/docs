---
title: Compliance Templates
description: Pre-configured DLP patterns for PCI-DSS, HIPAA, GDPR, and other regulatory compliance requirements using SafeSquid Text Analyser.
keywords:
  - SafeSquid compliance templates
  - PCI-DSS DLP patterns
  - HIPAA data protection
  - GDPR compliance proxy
  - regulatory compliance filtering
  - sensitive data detection
  - credit card number detection
  - PII protection SafeSquid
---

# Compliance Templates

## Pre-built patterns for regulatory requirements

SafeSquid's Text Analyser supports pattern-based detection of sensitive data. Use these compliance templates as starting points for PCI-DSS, HIPAA, GDPR, and other regulatory requirements.

:::note
These templates provide detection patterns. Combine them with [Access Restriction](/docs/Access%20Restriction/main) policies to block, log, or alert on matches.
:::

## PCI-DSS (Payment Card Industry)

Detect credit card numbers, CVV codes, and cardholder data in transit.

### Credit Card Number Patterns

| Card Type | Pattern (Regex) | Example |
|-----------|-----------------|---------|
| Visa | `4[0-9]{12}(?:[0-9]{3})?` | 4111111111111111 |
| Mastercard | `5[1-5][0-9]{14}` | 5500000000000004 |
| American Express | `3[47][0-9]{13}` | 340000000000009 |
| Discover | `6(?:011\|5[0-9]{2})[0-9]{12}` | 6011000000000004 |
| All Major Cards | `(?:4[0-9]{12}(?:[0-9]{3})?\|5[1-5][0-9]{14}\|3[47][0-9]{13}\|6(?:011\|5[0-9]{2})[0-9]{12})` | — |

### Configuration Example

1. Navigate to **Configure → Real Time Content Security → Text Analyser**
2. Add a new policy with:
   - **Comment:** PCI-DSS Credit Card Detection
   - **Mime type:** `text/.*|application/json|application/xml`
   - **Keyword(s):** `(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})`
   - **Score:** 100
3. Set **Threshold** to 100 to block on first match

### Additional PCI Patterns

| Data Type | Pattern |
|-----------|---------|
| CVV/CVC | `\b[0-9]{3,4}\b` (use with context) |
| Expiry Date | `(0[1-9]\|1[0-2])\/([0-9]{2}\|[0-9]{4})` |
| Track Data | `%B[0-9]{13,19}\^[A-Z\s]{2,26}\^[0-9]{4}` |

---

## HIPAA (Healthcare)

Detect Protected Health Information (PHI) including medical record numbers, SSNs, and health-related terms.

### Social Security Number

| Format | Pattern |
|--------|---------|
| With dashes | `[0-9]{3}-[0-9]{2}-[0-9]{4}` |
| Without dashes | `(?<![0-9])[0-9]{9}(?![0-9])` |
| Both formats | `[0-9]{3}-?[0-9]{2}-?[0-9]{4}` |

### Medical Record Identifiers

| Data Type | Pattern | Notes |
|-----------|---------|-------|
| MRN (generic) | `MRN[:\s]?[0-9]{6,10}` | Prefix-based |
| NPI (Provider) | `[0-9]{10}` | National Provider Identifier |
| DEA Number | `[A-Z]{2}[0-9]{7}` | Drug Enforcement Administration |

### PHI Keywords (High-Risk Terms)

```regex
(diagnosis|prognosis|treatment|prescription|medication|patient|medical.record|health.insurance|HIV|AIDS|cancer|diabetes|mental.health|psychiatric|substance.abuse)
```

### Configuration Example

1. Create a Text Analyser policy:
   - **Comment:** HIPAA PHI Detection
   - **Keyword(s):** SSN pattern + PHI keywords
   - **Score:** 50 per match
2. Set **Threshold** to 100 (blocks when multiple indicators present)

---

## GDPR (European Union)

Detect Personally Identifiable Information (PII) for EU data subjects.

### EU National ID Patterns

| Country | Data Type | Pattern |
|---------|-----------|---------|
| UK | National Insurance | `[A-Z]{2}[0-9]{6}[A-Z]` |
| Germany | Personalausweis | `[0-9]{10}` |
| France | INSEE | `[12][0-9]{2}(0[1-9]\|1[0-2])[0-9]{8}` |
| Spain | DNI | `[0-9]{8}[A-Z]` |
| Italy | Codice Fiscale | `[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]` |

### IBAN (Bank Account)

```regex
[A-Z]{2}[0-9]{2}[A-Z0-9]{4}[0-9]{7}([A-Z0-9]?){0,16}
```

### Email Addresses

```regex
[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}
```

### Phone Numbers (International)

```regex
\+?[0-9]{1,3}[-.\s]?(\([0-9]{1,4}\)|[0-9]{1,4})[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}
```

### GDPR-Sensitive Keywords

```regex
(personal.data|data.subject|consent|right.to.erasure|data.portability|processing.agreement|controller|processor|DPO|data.protection)
```

---

## Financial Services

### Bank Account Numbers

| Type | Pattern |
|------|---------|
| US Routing | `[0-9]{9}` |
| US Account | `[0-9]{10,12}` |
| SWIFT/BIC | `[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?` |

### Tax Identifiers

| Country | Type | Pattern |
|---------|------|---------|
| US | EIN | `[0-9]{2}-[0-9]{7}` |
| US | ITIN | `9[0-9]{2}-[0-9]{2}-[0-9]{4}` |
| UK | UTR | `[0-9]{10}` |

---

## Intellectual Property

### Source Code Detection

Detect code snippets that may indicate IP leakage:

```regex
(function\s+[a-zA-Z_]+\s*\(|class\s+[A-Z][a-zA-Z]+|import\s+[a-z]+|#include\s*<|package\s+[a-z]+|def\s+[a-z_]+\s*\()
```

### Confidential Markers

```regex
(CONFIDENTIAL|PROPRIETARY|TRADE.SECRET|INTERNAL.ONLY|DO.NOT.DISTRIBUTE|NDA|RESTRICTED)
```

---

## Implementation Guidelines

### Step 1: Assess Requirements
Identify which regulations apply to your organization and which data types require protection.

### Step 2: Configure Detection
Add Text Analyser policies using patterns from this document. Start with logging mode to assess false positive rates.

### Step 3: Tune Thresholds
Adjust scores and thresholds based on observed traffic:
- **High threshold** (200+): Reduces false positives, may miss some violations
- **Medium threshold** (100): Balanced detection
- **Low threshold** (50): Aggressive detection, more false positives

### Step 4: Enable Enforcement
After tuning, enable blocking for high-confidence matches. Use templates to display compliance messaging.

### Step 5: Monitor and Report
Use [Reporting Module](/docs/Audit%20&%20Forensics/Reporting%20Module) to track DLP events for compliance audits.

---

## Custom Templates

Create organization-specific patterns for:
- Employee ID formats
- Internal project codes
- Customer account numbers
- Proprietary terminology

**Related**: [Text Analyser](/docs/Profiling%20Engine/Content%20Analyser/Text%20Analyser), [Image Analyser](/docs/Profiling%20Engine/Content%20Analyser/Image%20Analyser%20AI), [Access Restriction](/docs/Access%20Restriction/main), [Reporting Module](/docs/Audit%20&%20Forensics/Reporting%20Module)
