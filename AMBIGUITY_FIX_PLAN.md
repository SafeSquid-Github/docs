# SafeSquid Docs Ambiguity Fix Plan

**Created:** 2026-02-11  
**Status:** In Progress

## Scheduled Jobs
- **Comprehensive Audit (Option 1):** Scheduled for 2026-02-12 03:00 IST
  - Reviews all 120+ markdown files
  - Applies checklist to identify patterns
  - Delivers report + immediate fixes

## Low-Hanging Fixes (Current Phase)

### Pattern 1: Vague UI Location References
**Problem:** "Click X" without UI context  
**Fix:** Add breadcrumb navigation paths

**Examples to fix:**
- ❌ "Click Configure"
- ✅ "In the SafeSquid interface header → click **Configure**"

**Target files:** SSL Inspection, Authentication, Access Restriction tutorials

### Pattern 2: Missing Cross-Reference Context
**Problem:** Links without purpose hints  
**Fix:** Add brief descriptions of what the link contains

**Examples to fix:**
- ❌ `[Configuration Portal](/docs/SafeSquid_SWG/Configuration_Portal/)`
- ✅ `[Configuration Portal](/docs/SafeSquid_SWG/Configuration_Portal/) — web interface for policy and system settings`

**Target files:** All main.md landing pages, Getting Started guides

### Pattern 3: Implicit Assumptions
**Problem:** Steps assume unstated prior knowledge  
**Fix:** Add prerequisite sections or inline checks

**Examples to fix:**
- ❌ Step 1: "Run the installer"
- ✅ Step 1: "Ensure you have root access. Run the installer: `/path/to/setup.sh`"

**Target files:** Installation guides, configuration tutorials

### Pattern 4: Undefined Terminology
**Problem:** Technical terms used without definition  
**Fix:** Inline definitions on first use or link to glossary

**Examples to fix:**
- ❌ "Configure LACP bonding"
- ✅ "Configure **LACP bonding** (Link Aggregation Control Protocol — combines multiple network interfaces for bandwidth and redundancy)"

**Target files:** Deployment Planning, Networking, Proxy Clustering

### Pattern 5: Incomplete Decision Paths
**Problem:** Troubleshooting without failure symptoms  
**Fix:** Add "You'll see..." or "Error message:" indicators

**Examples to fix:**
- ❌ "If installation fails, check network settings"
- ✅ "If you see 'Bad archive mirror' or 'Failed to retrieve pre-configuration', check DNS and gateway settings"

**Target files:** All Troubleshooting section, Installation guides

### Pattern 6: Screenshot-Dependent Instructions
**Problem:** "As shown" without text description  
**Fix:** Describe what the screenshot contains

**Examples to fix:**
- ❌ "Click the button as shown below"
- ✅ "Click the **Generate** button (green button in the Certificate Management section) as shown below"

**Target files:** SSL Inspection, Self-Service Portal guides

## Flag for Tech Team

### Missing Screenshots
- [ ] Identify steps with `![alt text](missing-or-todo.png)`
- [ ] List config screens mentioned but not shown

### Outdated UI References
- [ ] Find version-specific notes ("In versions after June 2017...")
- [ ] Flag for verification against current UI

### Missing Configuration Values
- [ ] Default port numbers not stated
- [ ] File paths mentioned without full path
- [ ] Service names without package/binary names

## Next Phase: Option 2 (Prioritized Manual Review)

### High-Traffic Sections (In Order)
1. **Getting Started** — First user experience, highest impact
2. **SSL Inspection** — Most complex setup, common pain point
3. **Authentication** — Directory integration is tricky
4. **Troubleshooting** — Users arrive here frustrated, needs clarity
5. **Access Restriction** — Policy syntax is not intuitive
6. **Use Cases** — Examples should be bulletproof

### Review Checklist for Each Section
- [ ] All 6 ambiguity patterns addressed
- [ ] Prerequisites stated upfront
- [ ] Commands have full paths and expected output
- [ ] Error conditions explained with symptoms
- [ ] Links have context
- [ ] Screenshots have text fallbacks
- [ ] Technical terms defined on first use

## Metrics

### Before (Baseline)
- Total files: 120+
- Patterns identified: 6 types
- Sample review: 6 files

### After (Target)
- [ ] Zero vague location references in top 10 docs
- [ ] All cross-references have context
- [ ] Prerequisites stated in all tutorials
- [ ] Technical terms defined or linked
- [ ] Troubleshooting has symptoms for all errors
- [ ] Screenshots have descriptive captions

## Timeline
- **2026-02-11 13:45 IST:** Low-hanging fixes start
- **2026-02-12 03:00 IST:** Comprehensive audit runs
- **2026-02-12 morning:** Review audit report, merge fixes
- **2026-02-12 onward:** Option 2 prioritized review

## Notes
- Preserve Docusaurus frontmatter and components
- Don't change existing image paths
- Test internal links after edits
- Commit changes incrementally
