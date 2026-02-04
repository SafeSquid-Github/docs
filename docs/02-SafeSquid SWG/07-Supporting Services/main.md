---
title: "Supporting Services Overview"
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

# Supporting Services Overview

## Continuous reliability and performance safeguards
Supporting services harden SafeSquid SWG operations. These services sustain availability, speed, and correctness across network and system layers.

## Host-level and network service enablement

### Document 1: Monit Service Governance (01-Monit.md)
Monit addresses service failure, performance drift, and stale runtime artifacts. Monit restores failed processes and keeps SafeSquid healthy. Monit adds automated resilience compared to manual restarts. Implement Monit to auto-heal SafeSquid services and validate through status dashboards and logs.

### Document 2: BIND Local DNS Resolver (02-Bind.md)
DNS latency and upstream outages degrade browsing and threat lookups. A local BIND resolver accelerates resolutions and reduces dependency on external DNS. Local recursion, caching, and root-hints improve consistency over public DNS. Deploy BIND with secure recursion, validate with dig tests, and monitor cache hit rate.

### Document 3: NTP Time Synchronization (03-NTP.md)
Clock drift breaks SSO, TLS validation, and log correlation. Enterprise NTP maintains precise time for authentication and certificate checks. Accurate time gives reliable audits versus drift-prone hosts. Configure NTP against enterprise sources and confirm sync with ntpq and authentication workflows.
