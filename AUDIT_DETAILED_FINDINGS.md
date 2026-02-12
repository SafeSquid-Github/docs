# Detailed Audit Findings by File

**Generated:** February 12, 2026  
**Source:** Automated pattern analysis + manual review

This document provides a line-by-line breakdown of all identified ambiguities, sorted by file and priority.

---

## Legend

- 🔴 **High Priority:** Requires immediate attention (incomplete paths, undefined terms)
- 🟡 **Medium Priority:** Impacts clarity (vague references, screenshots)
- 🟢 **Low Priority:** Minor improvements (link context)
- ✅ **Fixed:** Issue resolved
- ⏳ **In Progress:** Partial fix applied
- 🔧 **Tech Team:** Requires domain knowledge or UI access

---

## Top 20 Files by Issue Count

### 1. `05-SSL_Inspection/01-Configure_HTTPS_Inspection.md` (51 issues)

#### Vague Location References (7) 🟡
- Line 59: "click the **Manage Certificate** button" — ✅ **Good:** Button name specified
- Line 67: "Click the Generate button" — ✅ **Good:** Button name + section specified

#### Screenshot Dependencies (44) 🟡🔧
- Lines 61-207: Multiple screenshots without text alternatives
- **Recommendation:** Add step-by-step text for:
  - Certificate generation workflow
  - HTTPS inspection policy configuration
  - Trust store import process

---

### 2. `04-Authentication/03-Directory_Services/02-OpenLDAP/02-SSO_Authentication.md` (37 issues)

#### Vague Location References (2) 🟡
- Needs review for specific locations

#### Screenshot Dependencies (35) 🟡🔧
- **Recommendation:** Document OpenLDAP SSO setup with text-based instructions for:
  - LDAP server configuration fields
  - SSO authentication flow
  - Group mapping settings

---

### 3. `21-Use_Cases/09-Allowing_Specific_Page_on_Facebook.md` (35 issues)

#### Screenshot Dependencies (35) 🟡🔧
- **Pattern:** Heavy reliance on UI screenshots for policy configuration
- **Recommendation:** Create reusable templates for access policy documentation
- **Alternative approach:** Use configuration examples (YAML/JSON) alongside UI instructions

---

### 4. `21-Use_Cases/08-Allow_Specific_YouTube_Channel_and_its_Playlist.md` (30 issues)

#### Vague Location References (8) 🟡
- Multiple "click" instructions without section context
- **Recommendation:** Add numbered steps with clear navigation paths

#### Undefined Terminology (1) 🔴🔧
- Line 112: "as shown below" — Needs specific reference to policy/table/screenshot

#### Screenshot Dependencies (21) 🟡🔧
- **Recommendation:** Combine screenshots with configuration examples

---

### 5. `19-Operational_Modes/05-Proxy_Chain.md` (26 issues)

#### Vague Location References (1) 🟡
- Review needed

#### Implicit Assumptions (1) 🟡
- Line 61: "Just deploy the parent proxy" — ⏳ **Needs fix:** Add prerequisites

#### Incomplete Decision Paths (1) 🔴🔧
- Line 58: "If one proxy fails" — No failure symptoms or detection method described
- **Required info:**
  - How to detect proxy failure (logs, monitoring)
  - Automatic failover behavior
  - Manual intervention steps

#### Screenshot Dependencies (23) 🟡🔧
- **Recommendation:** Add command-line configuration examples

---

### 6. `04-Authentication/03-Directory_Services/01-Active_Directory/02-Simple_Authentication.md` (26 issues)

#### Vague Location References (1) 🟡
- Review needed

#### Incomplete Decision Paths (1) 🔴🔧
- Line 145: "Fix: Adjust filters" — Needs specific examples
- **Required info:**
  - Common filter syntax errors
  - Test commands for filter validation
  - Sample working filters for typical AD setups

#### Screenshot Dependencies (24) 🟡🔧
- **Recommendation:** Critical for AD integration; prioritize text alternatives

---

### 7. `04-Authentication/03-Directory_Services/01-Active_Directory/03-SSO_Authentication.md` (26 issues)

#### Incomplete Decision Paths (1) 🔴🔧
- SSO failure scenarios need symptom documentation
- **Required info:**
  - Kerberos ticket validation errors
  - Clock skew symptoms and resolution
  - Browser SSO configuration issues

#### Screenshot Dependencies (25) 🟡🔧
- **Recommendation:** High-value page; add comprehensive text alternatives

---

### 8. `21-Use_Cases/13-Block_Particular_User_Login_To_Facebook_Or_Gmail.md` (25 issues)

#### Vague Location References (5) 🟡
- Multiple navigation steps without context
- **Recommendation:** Create navigation breadcrumbs (e.g., Configure > Access Policies > Block Rules)

#### Screenshot Dependencies (20) 🟡🔧
- **Recommendation:** Add configuration snippet examples

---

### 9. `04-Authentication/03-Directory_Services/02-OpenLDAP/01-Simple_Authentication.md` (24 issues)

#### Incomplete Decision Paths (1) 🔴🔧
- LDAP connection failure scenarios need documentation
- **Required info:**
  - Port 389 vs 636 (LDAP vs LDAPS)
  - Certificate validation errors
  - Bind DN permission issues

#### Screenshot Dependencies (23) 🟡🔧
- **Recommendation:** Pair with sample ldapsearch commands

---

### 10. `21-Use_Cases/11-Block_Emails_or_Files_including_archives_or_Social_Posts_using_Keywords.md` (23 issues)

#### Vague Location References (5) 🟡
- Policy configuration steps need clearer navigation

#### Screenshot Dependencies (18) 🟡🔧
- **Recommendation:** Add regex examples for keyword matching

---

## Pattern-Specific Details

### Implicit Assumptions (22 total)

#### Files Fixed ✅
1. ✅ `07-Profiling_Engine/04-Content_Analyser/main.md`
   - Line 72: "just check" → "Check"
2. ✅ `07-Profiling_Engine/04-Content_Analyser/03-Image_Analyser_AI.md`
   - Line 94: "just debug" → "debugging mode"
   - Line 96: "just blur" → "blur the image"
3. ✅ `21-Use_Cases/18-YouTube_API_Integration_With_SafeSquid_To_Allow_Specific_YouTube_Videos.md`
   - Line 189: "just need to" → "restart the"

#### Files Needing Fixes 🔧

**"simply" usage:**
- `25-FAQs/main.md` (Line 144): "simply take information" — Review for necessity
- `15-Audit_Forensics/05-Directory_Structure.md` (Line 136): "easily added or removed" — Explain process

**"easily" usage:**
- `02-SafeSquid_SWG/02-Application_Ecosystem.md` (Line 94): "can easily integrate" — Be specific about integration steps
- `19-Operational_Modes/02-Transparent_Proxy.md` (Line 77): "more easily" — Rephrase comparatively

**"obviously" usage:**
- None found ✅

---

### Undefined Terminology (7 total)

#### Files Fixed ✅
1. ✅ `07-Profiling_Engine/07-Time_Profiles.md`
   - Line 72: "(see below)" → "See the **Time Match Modes** section below"

#### Files Needing Fixes 🔧

1. 🔴 `24-Upgrade_SafeSquid/01-Version_Upgrade/main.md`
   - Line 42: "as shown below" — Specify "as shown in the version output below"

2. 🔴 `15-Audit_Forensics/02-Security_Logs.md`
   - Line 65: "as shown in the table below" — Name the table (e.g., "LOGLEVEL Configuration Table")

3. 🔴 `15-Audit_Forensics/04-Monit.md`
   - Line 33: "as shown below" — Specify section or configuration block

4. 🔴 `21-Use_Cases/08-Allow_Specific_YouTube_Channel_and_its_Playlist.md`
   - Line 112: "as shown below" — Specify policy or screenshot

5. 🔴 `23-Troubleshooting/05-Failed_To_Fetch_LDAP_Entries.md`
   - Line 144: "as shown below" — Specify error message or output

6. 🔴 `23-Troubleshooting/12-Custom_Categorisation_Not_Working.md`
   - Line 31: "see below output" — Name the command or section

---

### Incomplete Decision Paths (18 total)

**Critical areas requiring tech team input:**

#### Authentication Failures
- `04-Authentication/03-Directory_Services/01-Active_Directory/02-Simple_Authentication.md`
- `04-Authentication/03-Directory_Services/01-Active_Directory/03-SSO_Authentication.md`
- `04-Authentication/03-Directory_Services/02-OpenLDAP/01-Simple_Authentication.md`
- `04-Authentication/03-Directory_Services/02-OpenLDAP/02-SSO_Authentication.md`

**Needed documentation:**
- Error message library (LDAP, Kerberos, PAM)
- Log file locations and grep patterns
- Test commands (ldapsearch, kinit, etc.)
- Common misconfigurations and fixes

#### SSL/TLS Issues
- `23-Troubleshooting/03-SSL_Inspection_Issues.md`

**Needed documentation:**
- Certificate error codes (S_X509_DNS_MISMATCH, etc.)
- Browser-specific symptoms
- Certificate cache locations
- Validation process explanation

#### Network Connectivity
- `23-Troubleshooting/09-Connection_Failure_on_Websites.md`
- `23-Troubleshooting/10-Website_Not_Accessible.md`

**Needed documentation:**
- Proxy vs. non-proxy diagnostic workflow
- DNS resolution troubleshooting
- Firewall rule verification
- Log correlation techniques

#### Service Failures
- `19-Operational_Modes/05-Proxy_Chain.md`
- `16-Performance_Accelerators/05-WCCP.md`

**Needed documentation:**
- Health check mechanisms
- Failover behavior and detection
- Service restart procedures
- Cluster status monitoring

---

## Screenshot Dependency Analysis

### By Section

| Section | Screenshot Count | Priority | Recommendation |
|---------|-----------------|----------|----------------|
| SSL Inspection | 44 | High | Core feature; needs full text alternatives |
| Authentication (AD/LDAP) | 107 | High | Complex setup; add config examples |
| Use Cases | 180 | Medium | Template approach for similar use cases |
| Performance Accelerators | 60 | Medium | Add CLI examples |
| Profiling Engine | 85 | Medium | Mix of UI and concept explanation |
| Troubleshooting | 95 | High | Critical for support; needs diagnostic text |
| Other | 200 | Low | Review individually |

### Recommended Approach

#### Phase 1: High-Traffic Pages (Top 20 by views)
1. Add text-based navigation paths
2. Document expected UI states ("You should see...")
3. Provide configuration file examples where applicable

#### Phase 2: Feature Documentation (SSL, Auth, DLP)
1. Create step-by-step text instructions
2. Add command-line alternatives
3. Document default values and common configurations

#### Phase 3: Complete Overhaul
1. Establish screenshot naming convention
2. Create alt text standards
3. Implement MDX components for consistency

---

## Quick Wins (Can Fix Today)

### 1. Replace "see above/below" (7 instances)
- Find: `(see below)`, `see above`, `as mentioned`
- Replace with: Specific section name or "See the [Section Name] section below"

### 2. Remove "just" (12 remaining instances)
- Find: `just` in instruction context
- Replace with: Direct instruction or remove word

### 3. Add context to "Select" statements (20+ instances)
- Find: `Select the X`
- Add: Where to find X (dropdown, menu, sidebar, etc.)

### 4. Name tables and figures (15+ instances)
- Find: Unnamed references
- Add: Descriptive names (e.g., "Configuration Options Table", "Authentication Flow Diagram")

---

## Maintenance Recommendations

### Documentation Standards
1. **Never use:** just, simply, easily, obviously, clearly
2. **Always specify:** UI element location (section/tab/menu)
3. **Always name:** Tables, figures, diagrams, screenshots
4. **Always provide:** Text alternative for screenshots
5. **Always document:** Error conditions with symptoms

### Review Checklist
Before publishing any doc:
- [ ] All screenshots have descriptive alt text
- [ ] All instructions work without images
- [ ] All error scenarios have symptoms and solutions
- [ ] All cross-references are named
- [ ] No assumption words (just, simply, etc.)
- [ ] All UI paths are explicit (Configure > Settings > X)

### MDX Component Proposal
```jsx
// UI navigation path
<UIPath>Configure → Custom Settings → Time Profiler</UIPath>

// Screenshot with required description
<Screenshot 
  src="/img/path.webp" 
  alt="Time Profiler configuration page"
  caption="Set hour range to 9-17 for office hours"
/>

// Error documentation
<ErrorBlock
  code="S_X509_DNS_MISMATCH"
  message="SSL Certificate has DNS errors"
  symptoms={["Browser shows certificate warning", "HTTPS sites fail to load"]}
  solution="Clear SSL certificate cache: /var/db/safesquid/ssl/certs/"
/>
```

---

## Conclusion

**Files reviewed:** 151  
**Issues identified:** 897  
**Issues fixed:** 21 (2.3%)  
**Writer-fixable remaining:** 76  
**Requires tech team:** 821  

**Biggest impact opportunity:** Screenshot alternatives project (771 issues, 86% of total)

**Next action:** Review and prioritize Phase 1 quick wins (76 writer-fixable issues)

---

**Compiled by:** Squid 🦑  
**For questions:** Refer to AUDIT_REPORT.md for methodology
