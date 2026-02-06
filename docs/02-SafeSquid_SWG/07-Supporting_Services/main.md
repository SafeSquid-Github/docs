---
title: "Supporting Services"
slug: /SafeSquid_SWG/Supporting_Services
description: "Operational services that ensure SafeSquid SWG reliability, performance, and accuracy"
keywords:
  - SafeSquid SWG
  - supporting services
  - Monit
  - DNS
  - BIND
  - NTP
  - time synchronization
---

# Monit, BIND, and NTP for reliability and accuracy

## Continuous reliability and performance safeguards
Supporting services harden SafeSquid SWG operations. These services sustain availability, speed, and correctness across network and system layers.

## Supporting service guides

### [Monit](01-Monit.md)
Service failure and performance drift cause downtime without automated recovery. Monit monitors and restores SafeSquid and dependent processes. Automated resilience reduces manual restarts and unplanned outages. Implement Monit using this document and validate through status dashboards and logs.

### [Bind](02-Bind.md)
DNS latency and upstream outages degrade browsing and threat lookups. A local BIND resolver accelerates resolutions and reduces dependency on external DNS. Local recursion and caching improve consistency. Deploy BIND using this document and validate with dig and cache hit rate.

### [NTP](03-NTP.md)
Clock drift breaks SSO, TLS validation, and log correlation. NTP maintains precise time for authentication and certificate checks. Accurate time supports reliable audits and authentication. Configure NTP against enterprise sources using this document and confirm sync with ntpq.
