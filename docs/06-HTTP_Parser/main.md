---
title: HTTP Parser
slug: /HTTP_Parser
description: SafeSquid's HTTP parsing engine for deep inspection and manipulation of HTTP/HTTPS traffic.
keywords:
  - HTTP parser
  - SafeSquid HTTP inspection
---
<section class="section-strip">


# HTTP Parser

</section>

<section class="section-strip">

## HTTP Parser parses, inspects, and manipulates proxy traffic

The HTTP Parser is the core engine that parses, inspects, and manipulates HTTP and HTTPS request and response traffic through SafeSquid. It normalizes requests and responses so downstream modules can apply policies consistently. Deep inspection of headers and body enables access control, [SSL Inspection](/docs/SSL_Inspection/main/), [Access Restriction](/docs/Access_Restriction/main/), [Header Obfuscation](/docs/Header_Obfuscation/main/), [Cookie Inspection](/docs/Cookie_Inspection/main/), [Content Modifier](/docs/Content_Modifier/main/), and [Data Leakage Prevention](/docs/Data_Leakage_Prevention/main/).

</section>

<section class="section-strip">

## Parser enables policy and content modules

The parser exposes structured request and response data to the profiling engine, restriction profiles, and real-time content security sections. Header and body handling support URL rewriting, MIME detection, and pattern-based rules. Administrators do not configure the parser directly; configuration of policies and profiles in the [Configuration Portal](/docs/SafeSquid_SWG/Configuration_Portal/) drives how parsed traffic is evaluated and enforced.

</section>

<section class="section-strip">

## Related

- [Configuration Portal](/docs/SafeSquid_SWG/Configuration_Portal/) — policy and profile configuration
- [SSL Inspection](/docs/SSL_Inspection/main/) — HTTPS visibility for the parser
- [Access Restriction](/docs/Access_Restriction/main/) — policy enforcement using parsed data

</section>