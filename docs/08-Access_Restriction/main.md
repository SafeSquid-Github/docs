---
title: Access Restriction
slug: /Access_Restriction
description: Configure granular web access control policies in SafeSquid based on user identity, time, location, and content type for security and compliance enforcement.
keywords:
  - SafeSquid access restriction
  - web access control policies
  - user-based access control
  - time-based web filtering
  - content access policies
  - proxy access management
---
<section class="section-strip">


# Granular web access control for policy and compliance

:::info CISO takeaway
**Risk:** Uncontrolled web access increases malware, data loss, and compliance gaps (e.g. unacceptable use, access to restricted categories). **Control:** Access restriction enforces allow/deny/redirect by user, group, time, URL, category, and application with profiles for SSL inspection, headers, and DLP. **Evidence:** Access and security logs record policy hits; Reporting Module and Security Logs provide reports and exports for SOC 2, acceptable-use, and audit.
:::

</section>

<section class="section-strip">

## Granular web access control enforces policy and compliance

Enterprises need to allow or block web access by user, group, time, destination, and content type. Broad allow/deny rules create gaps; overly strict rules block legitimate use. SafeSquid access restriction combines identity, time profiles, URL and category matching, and request/response profiles so administrators enforce least-privilege access and meet compliance requirements.

</section>

<section class="section-strip">

## Access policies and profiles define what is allowed

Access restriction in SafeSquid uses policies and profiles. Policies define conditions (user, group, time, URL, category, application). Profiles attach to policies and carry actions (allow, deny, redirect, or apply SSL inspection, header filter, cookie filter, and similar controls). The [Configuration Portal](/docs/SafeSquid_SWG/Configuration_Portal/) provides the interface to create and order these policies. Identity comes from [Authentication](/docs/Authentication/main/); HTTPS visibility comes from [SSL Inspection](/docs/SSL_Inspection/main/). Configure access restriction in the Configuration Portal under the relevant restriction and real-time content security sections.

</section>