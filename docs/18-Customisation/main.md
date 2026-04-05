---
title: Customisation
slug: /Customisation
description: "Customize SafeSquid's behavior through custom templates for error pages and branding, and startup parameters for performance tuning and operational configuration."
keywords:
  - SafeSquid customization
  - custom templates
  - startup parameters
  - proxy configuration
  - SafeSquid tuning
---


# Customize SafeSquid templates and startup parameters

SafeSquid customization covers custom templates (error pages, branding) and startup parameters (performance and operational configuration). The documents below describe each.



## Custom templates and startup configuration guides

### [Custom Templates](/18-Customisation/01-Custom_Templates)
Organizations face user confusion when blocked content displays generic error messages without branding or escalation procedures. Custom templates enable branded error pages in any language with company logos, help desk contacts, and policy explanations. User awareness and corporate identity improve while support tickets decrease. Use the document to configure custom templates for blocking scenarios.

### [Startup Parameters](/18-Customisation/02-Startup_Parameters)
Default SafeSquid configurations may not match enterprise requirements for threading, memory, logging, cluster sync, or socket tuning. Startup parameters control listening interfaces, thread management, buffer sizes, and master-slave configurations. Organizations optimize proxy performance and enable clustering or remote logging. Use the document to configure startup.ini and tune the proxy.

## Next steps

After tuning, verify with [Verify Your Setup](/01-Getting_Started/06-Verify_Your_Setup) and [Performance Plot](/15-Audit_Forensics/03-Performance_Plot); for clustering see [Proxy Clustering](/17-Proxy_Clustering/main).
