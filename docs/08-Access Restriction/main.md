---
title: Access Restriction
description: Configure granular web access control policies in SafeSquid based on user identity, time, location, and content type for security and compliance enforcement.
keywords:
  - SafeSquid access restriction
  - web access control policies
  - user-based access control
  - time-based web filtering
  - content access policies
  - proxy access management
---

## Granular web access control enforces policy and compliance

Enterprises need to allow or block web access by user, group, time, destination, and content type. Broad allow/deny rules create gaps; overly strict rules block legitimate use. SafeSquid access restriction combines identity, time profiles, URL and category matching, and request/response profiles so administrators enforce least-privilege access and meet compliance requirements.

## Access policies and profiles define what is allowed

Access restriction in SafeSquid uses policies and profiles. Policies define conditions (user, group, time, URL, category, application). Profiles attach to policies and carry actions (allow, deny, redirect, or apply SSL inspection, header filter, cookie filter, and similar controls). The [Configuration Portal](/docs/SafeSquid%20SWG/Configuration%20Portal) provides the interface to create and order these policies. Identity comes from [Authentication](/docs/Authentication/main); HTTPS visibility comes from [SSL Inspection](/docs/SSL%20Inspection/main). Configure access restriction in the Configuration Portal under the relevant restriction and real-time content security sections.
