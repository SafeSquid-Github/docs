---
title: HTTP Parser
slug: /HTTP_Parser
description: SafeSquid's HTTP parsing engine for deep inspection and manipulation of HTTP/HTTPS traffic.
keywords:
  - HTTP parser
  - SafeSquid HTTP inspection
---

# HTTP Parser

## HTTP Parser parses, inspects, and manipulates proxy traffic

The HTTP Parser is the core engine that parses, inspects, and manipulates HTTP and HTTPS request and response traffic through SafeSquid. It normalizes requests and responses so downstream modules can apply policies consistently. Deep inspection of headers and body enables access control, [SSL Inspection](../05-SSL_Inspection/main.md), [Access Restriction](../08-Access_Restriction/main.md), [Header Obfuscation](../11-Header_Obfuscation/main.md), [Cookie Inspection](../12-Cookie_Inspection/main.md), [Content Modifier](../13-Content_Modifier/main.md), and [Data Leakage Prevention](../09-Data_Leakage_Prevention/main.md).

## Parser enables policy and content modules

The parser exposes structured request and response data to the profiling engine, restriction profiles, and real-time content security sections. Header and body handling support URL rewriting, MIME detection, and pattern-based rules. Administrators do not configure the parser directly; configuration of policies and profiles in the [Configuration Portal](../02-SafeSquid_SWG/01-Configuration_Portal.md) drives how parsed traffic is evaluated and enforced.

## Related

- [Configuration Portal](../02-SafeSquid_SWG/01-Configuration_Portal.md) — policy and profile configuration
- [SSL Inspection](../05-SSL_Inspection/main.md) — HTTPS visibility for the parser
- [Access Restriction](../08-Access_Restriction/main.md) — policy enforcement using parsed data
