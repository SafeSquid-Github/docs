---
title: Profiling Engine
slug: /Profiling_Engine
description: Identity-driven traffic profiling for granular web access control — user identities, categorization, application signatures, and content analysis.
keywords:
  - SafeSquid profiling engine
  - web traffic profiling
  - identity-based access control
  - application signature detection
  - web categorization SafeSquid
  - content fingerprinting
---

# Classify traffic by identity, category, and content

SafeSquid Profiling Engine classifies web traffic by user identity, request and response attributes, application signatures, and time so policies can be enforced with context. This section links to documents for user identities, web categorization, application signatures, content analysis, and request, response, and time profiles. For authentication and identity methods, see [Authentication](../04-Authentication/main.md).

## Profiling configuration and reference guides

### [User Identities](01-User_Identities/main.md)
Policies require user or group context for identity-based access control and reporting. User Identities describes user groups and how SafeSquid associates traffic with users. Identity-driven policies and audit attribution depend on this configuration. Configure user identities and groups using this document.

### [Web Categorization](02-Web_Categorization.md)
Website access control requires classification by content category for productivity and security policies. Web Categorization enables SafeSquid to classify sites into categories and apply category-based rules. Fine-tuned policy enforcement by user group relies on categorization. Use the Category Editor in Custom Settings to modify and audit categorization.

### [Application Signatures](03-Application_Signatures.md)
Applications using encrypted or complex protocols bypass URL-only filtering. Application Signatures enable SafeSquid to identify traffic by application through keyword and behavioral detection. Granular application control and shadow IT visibility result. Manage keyword signatures in the Self-Service Portal using this document.

### [Content Analyser](04-Content_Analyser/main.md)
File extension spoofing and disguised content require analysis of actual content type and text or images. Content Analyser covers true MIME fingerprinting, text analysis, and image analysis for response and upload inspection. Disguised malware and policy-violating content are detected before delivery. Configure content analyser and related profiles using the linked documents.

### [Request Profiles](05-Request_Profiles.md)
Access control must consider HTTP method, protocol, user agent, and other request attributes. Request Profiles enable SafeSquid to classify and control traffic by request characteristics. Safe search, social media restrictions, and HTTPS bypass rules use request profiling. Configure request profiling in the Request Types section using this document.

### [Response Profiles](06-Response_Profiles.md)
Server responses vary by MIME type, file extension, and content; policies must apply accordingly. Response Profiles enable SafeSquid to analyze responses by MIME type, extension, size, and headers. MIME-based filtering and content-aware policies depend on response profiling. Configure response profiling in the Response Types section using this document.

### [Time Profiles](07-Time_Profiles.md)
Productivity and bandwidth policies often require time-based allow or block rules. Time Profiles enable SafeSquid to enforce policies by time range (month, day, hour, minute). Business hours, shift patterns, and scheduled access use time profiles. Configure time-based rules in the Time Profiler section using this document.
