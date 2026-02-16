---
title: Documentation Features Guide
description: How to use enhanced features in SafeSquid SWG documentation including PDF export, version selector, and advanced search.
keywords:
  - documentation features
  - PDF export
  - version selector
  - search documentation
---
import PDFExportButton from '@site/src/components/PDFExport';

# Documentation Features Guide

This page describes the enhanced features available in SafeSquid SWG documentation to support enterprise workflows, compliance needs, and efficient navigation.

---

## Quick Links (Homepage)

The documentation homepage now features **Quick Access** cards for common tasks:

- **Quick Start (15 min)** — Deploy SafeSquid in 15 minutes
- **SSL Inspection** — Enable HTTPS inspection
- **Data Leakage Prevention** — Configure DLP policies
- **Troubleshooting** — Common issue resolution
- Plus 4 additional links for Access Restriction, Authentication, Reporting, and Use Cases

**Primary links** (Quick Start, SSL Inspection, DLP, Troubleshooting) have enhanced styling with thicker borders to highlight high-priority paths.

---

## PDF Export for Compliance Documentation

Enterprise users often need printed or PDF versions of configuration guides for audit evidence and offline reference.

### How to Export

1. Navigate to any documentation page (e.g. SSL Inspection, DLP, Authentication)
2. Click the **Export to PDF** button (when available on compliance-critical pages)
3. Use your browser's print dialog
4. Select **Save as PDF** as the destination
5. The page will automatically apply print-optimized styling (removes navigation, sidebar, and other UI elements)

### Adding PDF Export to a Page

For documentation maintainers: Import and add the PDFExportButton component to any MDX page:

\`\`\`mdx
import PDFExportButton from '@site/src/components/PDFExport';

<PDFExportButton />
\`\`\`

Place it near the top or bottom of compliance-critical docs (SSL Inspection, DLP, Access Restriction, Authentication, Disaster Recovery, etc.).

---

## Version Selector

The documentation supports versioning to maintain separate docs for different SafeSquid releases.

### Current Version

The version dropdown in the navbar shows **Latest** (current development docs). As new SafeSquid versions are released, archived versions will appear in the dropdown.

### Accessing Older Versions

When multiple versions exist:

1. Click the **Latest** dropdown in the navbar
2. Select the desired version (e.g. "2024.1", "2023.12")
3. The sidebar and content will update to reflect that version's documentation

---

## Enhanced Search (Algolia)

SafeSquid documentation uses Algolia for fast, context-aware search.

### Search Features

- **Contextual results** — Results prioritize pages in your current section
- **Snippet previews** — See matching content before clicking
- **Keyboard navigation** — Use arrow keys to navigate results, Enter to open
- **Highlighted matches** — Search terms are highlighted in results

### Search Tips

1. **Use specific terms** — "SSL certificate import Firefox" is better than "certificate"
2. **Search by section** — Results group by section (Getting Started, SSL Inspection, etc.)
3. **Combine keywords** — "DLP compliance template" finds Data Leakage Prevention compliance docs
4. **Use quotes for exact phrases** — "Bypass SSL Inspection" finds that exact heading

### Search Keyboard Shortcuts

- **Ctrl+K** (Windows/Linux) or **Cmd+K** (Mac) — Open search
- **Esc** — Close search
- **Arrow keys** — Navigate results
- **Enter** — Open selected result

---

## Breadcrumbs

Every documentation page shows breadcrumbs at the top:

\`\`\`
Home > SSL Inspection > Configure HTTPS Inspection
\`\`\`

Click any breadcrumb segment to navigate up the hierarchy.

---

## Table of Contents (On This Page)

Long documentation pages display a **Table of Contents** in the right sidebar on desktop (collapses on mobile).

- Includes all headings from H2 to H4
- Highlights the current section as you scroll
- Click any heading to jump directly to that section

---

## Last Updated Timestamps

Every page displays:

- **Last update time** (from git commit)
- **Author** (from commit author)

This helps enterprise users assess content freshness for audit confidence.

---

## CISO Callouts

Compliance-heavy pages (SSL Inspection, DLP, Authentication, Access Restriction) include **CISO takeaway** boxes at the top:

\`\`\`markdown
:::info CISO takeaway
**Risk:** [brief risk statement]  
**Control:** [what SafeSquid does]  
**Evidence:** [what auditors can verify]
:::
\`\`\`

These boxes summarize risk, control, and audit evidence for quick executive review.

---

## Print Styles

All documentation pages include optimized print styles:

- Navigation, sidebar, footer removed
- Content optimized for A4 paper
- Tables, code blocks, and admonitions kept together (avoid page breaks)
- Forced light mode for better ink economy

Use **Ctrl+P** (Windows/Linux) or **Cmd+P** (Mac) to print, or use the **Export to PDF** button where available.

---

## Mobile Optimizations

- Collapsible sidebar (hamburger menu on mobile)
- Responsive tables (horizontal scroll on small screens)
- Touch-friendly navigation (44px minimum touch targets)
- Optimized table of contents (collapsible on mobile)

---

## Accessibility Features

- Keyboard navigation for all interactive elements
- WCAG AA color contrast (4.5:1 minimum)
- Screen reader-friendly markup
- Focus indicators for keyboard users
- Alt text for all images

---

## Feature Requests & Feedback

To request new documentation features or report issues:

1. Use the **feedback** widget (bottom-right corner of every page)
2. Or post in the [SafeSquid Forum](https://help.safesquid.com/portal/en/community/safesquid-labs)

---

**Last Updated:** This page documents features implemented as of February 2026.
