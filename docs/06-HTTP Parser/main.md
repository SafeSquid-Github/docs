---
title: HTTP Parser
description: SafeSquid's HTTP parsing engine for deep inspection and manipulation of HTTP/HTTPS traffic.
keywords:
  - HTTP parser
  - SafeSquid HTTP inspection
---

# HTTP Parser

## HTTP Parser parses, inspects, and manipulates proxy traffic

The HTTP Parser is the core engine that parses, inspects, and manipulates HTTP and HTTPS request and response traffic through SafeSquid. It normalizes requests and responses so downstream modules can apply policies consistently. Deep inspection of headers and body enables access control, [SSL Inspection](/docs/SSL%20Inspection/main), [Access Restriction](/docs/Access%20Restriction/main), [Header Obfuscation](/docs/Header%20Obfuscation/main), [Cookie Inspection](/docs/Cookie%20Inspection/main), [Content Modifier](/docs/Content%20Modifier/main), and [Data Leakage Prevention](/docs/Data%20Leakage%20Prevention/main).

## Parser enables policy and content modules

The parser exposes structured request and response data to the profiling engine, restriction profiles, and real-time content security sections. Header and body handling support URL rewriting, MIME detection, and pattern-based rules. Administrators do not configure the parser directly; configuration of policies and profiles in the [Configuration Portal](/docs/SafeSquid%20SWG/Configuration%20Portal) drives how parsed traffic is evaluated and enforced.
