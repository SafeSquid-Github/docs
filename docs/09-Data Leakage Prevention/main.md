---
title: Data Leakage Prevention
description: Protect against data exfiltration with SafeSquid's DLP engine — content analysis, request profiling, and compliance templates for regulatory requirements.
keywords:
  - data leakage prevention
  - SafeSquid DLP
  - insider threat protection
  - content filtering
  - compliance templates
  - sensitive data detection
  - PCI HIPAA GDPR
---

# Data Leakage Prevention

## Multi-layered protection against data exfiltration

Data loss ranks as the top security concern for organizations. Whether from malicious insiders, careless employees, or compromised accounts, sensitive data leaving the network represents significant risk. SafeSquid's DLP capabilities address data leakage through multiple layers of inspection and control.

## DLP Components

| Component | Function | Documentation |
|-----------|----------|---------------|
| **Text Analyser** | Score text content using signatures, heuristics, and pattern matching | [Text Analyser](/docs/Profiling%20Engine/Content%20Analyser/Text%20Analyser) |
| **Image Analyser** | Analyze images in real-time for inappropriate content | [Image Analyser](/docs/Profiling%20Engine/Content%20Analyser/Image%20Analyser%20AI) |
| **Request Profiles** | Classify traffic by destination, application, and behavior | [Request Profiles](/docs/Profiling%20Engine/Request%20Profiles) |
| **Compliance Templates** | Pre-built patterns for PCI-DSS, HIPAA, GDPR | [Compliance Templates](01-Compliance%20Templates.md) |
| **ICAP Integration** | External DLP and antivirus via ICAP protocol | [Malware Scanners](/docs/Malware%20Scanners/main) |

## Using Request Profiles for DLP

Request Profiles classify traffic by destination, enabling targeted DLP enforcement. Instead of scanning all traffic, apply DLP rules only to high-risk channels.

### Pattern: Targeted DLP Enforcement

1. **Create Request Profile** for high-risk destinations (e.g., personal cloud storage)
   - Host pattern: `dropbox\.com|drive\.google\.com` (personal accounts)
   - Added Profile: `PERSONAL_CLOUD`

2. **Create Text Analyser rule** that triggers only for the profile
   - Profiles: `PERSONAL_CLOUD`
   - Keywords: Credit card or PII patterns
   - Action: Block

3. **Result:** Sensitive data detection only on risky channels, reducing false positives

### Example: Block Credit Cards to Personal Email

```
Request Profile:
- Host Name: mail\.google\.com|mail\.yahoo\.com|outlook\.live\.com
- Added Profile: PERSONAL_WEBMAIL

Text Analyser:
- Profiles: PERSONAL_WEBMAIL
- Keywords: (?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})
- Score: 100
- Threshold: 100
- Action: Block
```

### Example: Detect Large Uploads to File Sharing

```
Request Profile:
- Host Name: wetransfer\.com|sendspace\.com|mediafire\.com
- Method: POST, PUT
- Minimum Post Data Size: 5242880 (5 MB)
- Added Profile: LARGE_UPLOAD_FILESHARE

Access Restriction:
- Profiles: LARGE_UPLOAD_FILESHARE
- Action: Block or require approval
```

## Protection Layers

| Layer | Capability | Detects |
|-------|------------|---------|
| **Destination** | Request Profiles | Where data is going (cloud, email, social) |
| **Content** | Text Analyser | What the data contains (PII, secrets, keywords) |
| **Visual** | Image Analyser | Inappropriate images, sensitive screenshots |
| **File Type** | MIME Filtering | Prohibited file formats (executables, archives) |
| **Size** | Upload Limits | Unusually large transfers |
| **Identity** | Role-Based Access | Who is attempting the transfer |

## Common DLP Scenarios

### Block Credit Card Uploads to Personal Cloud
1. Create Request Profile for personal cloud services
2. Create Text Analyser rule with credit card patterns for that profile
3. Block and log matches

### Detect Source Code Exfiltration
1. Create patterns for code syntax (`function`, `class`, `import`)
2. Combine with Request Profiles for file sharing sites
3. Alert security team on matches above threshold

### Prevent Medical Record Leakage
1. Use HIPAA compliance templates (SSN, MRN, PHI keywords)
2. Apply to all outbound traffic or specific high-risk channels
3. Block and generate compliance report

## Deployment Approach

### Phase 1: Visibility
Enable Request Profiles and logging to understand baseline activity. Identify high-risk channels and user behaviors.

### Phase 2: Detection
Configure Text Analyser with [Compliance Templates](01-Compliance%20Templates.md). Run in logging mode to assess detection accuracy.

### Phase 3: Enforcement
Enable blocking for high-confidence detections. Start with most sensitive data categories (PCI, PHI) and expand coverage.

### Phase 4: Reporting
Configure regular DLP reports for compliance audits. Track trends via [Reporting Module](/docs/Audit%20&%20Forensics/Reporting%20Module).

## On-Premises Advantage

All DLP processing occurs on-premises:
- Sensitive content never transmitted to external services
- Full log ownership for audit requirements
- No dependency on cloud availability
- Compliant with data residency regulations

**Related**: [Compliance Templates](01-Compliance%20Templates.md), [Text Analyser](/docs/Profiling%20Engine/Content%20Analyser/Text%20Analyser), [Image Analyser](/docs/Profiling%20Engine/Content%20Analyser/Image%20Analyser%20AI), [Request Profiles](/docs/Profiling%20Engine/Request%20Profiles), [Access Restriction](/docs/Access%20Restriction/main)
