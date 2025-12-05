---
title: Hardware Provisioning
description: Understand how to size, configure, and prepare infrastructure for deploying SafeSquid Secure Web Gateway, the industry's most advanced HTTP Proxy Server for Zero-Trust and Application Layer Security.
keywords:
  - SafeSquid
  - Secure Web Gateway
  - HTTP Proxy Server
  - Application Layer Security
  - Zero-Trust Web Security
  - SWG Capacity Planning
  - SafeSquid Hardware Requirements
  - SafeSquid High Availability
  - Network Bonding LACP
  - AES-NI CPU
---

## Overview

SafeSquid deployment success depends on infrastructure alignment. Many environments lack sufficient CPU cores, disk I/O capacity, or NIC density, causing policy failures, latency spikes, and data loss during operational surges. Misconfigured nodes and legacy hardware often create systemic bottlenecks.

## System Requirements by Deployment Scale

### Baseline Server Planning: Single Node Deployments

Organizations deploying SafeSquid must align CPU, memory, and NIC density with their expected user base and session concurrency. Misalignment leads to session drops, proxy timeouts, and degraded inspection throughput. Key considerations include concurrent connection handling, AES-NI support, and memory provisioning per session.

**Provisioning Guidelines:**

- Ensure CPU supports **AES-NI** (Advanced Encryption Standard New Instructions) for accelerated SSL decryption.
- Use NVMe SSDs for log and cache operations.
- Scale NICs to prevent I/O bottlenecks under burst load.

**Single Server Hardware Matrix**

| **CPU** | **RAM** | **NIC** | **Ideal Concurrent Connections** | **Peak Burst of Concurrent Connections** | **Approx. Users** | **AES-NI Required** |
| ------: | ------: | ------: | -------------------------------: | ---------------------------------------: | ----------------: | :-----------------: |
|       4 |       8 |       2 |                              150 |                                      400 |               100 |         Yes         |
|       8 |      16 |       2 |                              800 |                                     1500 |               350 |         Yes         |
|      16 |      32 |       4 |                             2000 |                                     3000 |               750 |         Yes         |
|      24 |      64 |       8 |                             2500 |                                     4000 |              1000 |         Yes         |
|      32 |      64 |       8 |                             3000 |                                     6000 |              1500 |         Yes         |
|      64 |     128 |      16 |                             4000 |                                     8000 |              2000 |         Yes         |

### High Availability: Redundancy Constraints and Runtime Hazards

#### Active-Passive: SLA Compliance Without Runtime Optimisation

Organizations that prioritize zero downtime frequently deploy Active-Passive clusters. Failover incidents expose architectural weaknesses when passive nodes lack real-time sync, full compute parity, or resilient heartbeat protocols. Failback often creates service gaps or DNS misroutes.

**Diagram:**&#x20;

![](/img/Deployment_Provisioning/image1.webp)

**Hardware Specifications (Per Server in Pair):**

| **No. of Instances** | **CPU** | **RAM** | **NIC** | **Ideal** | **Peak Bursts** | **Approx. Users** |
| -------------------: | ------: | ------: | ------: | --------: | --------------: | ----------------: |
|                    2 |       4 |       8 |       2 |       150 |             400 |               100 |
|                    2 |       8 |      16 |       2 |       800 |            1500 |               350 |
|                    2 |      16 |      32 |       4 |      2000 |            3000 |               750 |
|                    2 |      24 |      64 |       8 |      2500 |            4000 |              1000 |
|                    2 |      32 |      64 |       8 |      3000 |            6000 |              1500 |
|                    2 |      64 |     128 |      16 |      4000 |            8000 |              2000 |

#### Active-Active: Efficiency Trade-Offs Under Fault Load

Enterprises aiming for hardware efficiency frequently opt for Active-Active designs. However, node-level failures immediately force a single instance to absorb 100% traffic, often exceeding safe operating thresholds. Load balancer misrouting or stale health checks further degrade service continuity.

**Diagram:**&#x20;

![](/static/img/Deployment_Provisioning/image2.webp)

**Hardware Specifications (Per Server in Cluster):**

| **No. of Instances** | **CPU** | **RAM** | **NIC** | **Ideal** | **Peak Bursts** | **Approx. Users** |
| -------------------: | ------: | ------: | ------: | --------: | --------------: | ----------------: |
|                    1 |       4 |       8 |       2 |       150 |             400 |               100 |
|                    2 |       4 |       8 |       2 |       800 |            1500 |               350 |
|                    2 |       8 |      16 |       4 |      2000 |            3000 |               750 |
|                    2 |      12 |      32 |       8 |      2500 |            4000 |              1000 |
|                    2 |      32 |      32 |       8 |      3000 |            6000 |              1500 |
|                    2 |      32 |      64 |      16 |      4000 |            8000 |              2000 |

### Network Configuration: Capacity Misalignment and Redundancy Gaps

#### Network Interfaces (NICs): Physical Port Planning

Underestimating NIC density leads to frequent contention between internal LAN traffic and upstream WAN access. Deployments using 1GbE ports for multi-gigabit traffic often suffer saturation during peak hours, especially in SSL-inspection scenarios. Hardware with only two ports lacks segmentation flexibility and limits future scaling.

- Deployments supporting up to 1,500 Peak Bursts often operate with minimal port availability---two physical ports typically split between WAN and LAN, introducing a chokepoint.
- Environments exceeding 1,500 Peak Bursts require high-throughput NICs (10GbE or faster) and a minimum of four physical ports to support VLAN isolation and monitoring interfaces.

#### Network Bonding (LACP): Single Link Vulnerability

Failure to implement link aggregation exposes proxy nodes to single-port failures and bandwidth ceiling constraints. Without bonding, a failed NIC can result in complete service loss or partial path isolation, disrupting proxy-to-Internet or proxy-to-LAN connectivity.

- Low-port systems (2 ports) should apply Active-Backup bonding to mitigate failover risks with minimal complexity.
- Systems with 4 to 8 ports benefit from symmetric bonding---dual-port pairs or quad-port aggregation---splitting load across WAN and LAN planes.
- High-density deployments (16+ ports) must implement dual 8-port bonds, ensuring parallel high-capacity paths with full link-level redundancy.

| **Available NIC Ports** | **Recommended Bonding Configuration** |
| ----------------------: | ------------------------------------- |
|                 2 Ports | Single Active-Backup bond             |
|                 4 Ports | Two bonded pairs (2x2)                |
|                 8 Ports | Two high-throughput bonds (2x4)       |
|                16 Ports | Dual 8-port LACP bonds                |

### Disk I/O Saturation: Logging Underperformance and Data Loss

Proxy services demand high-frequency, concurrent disk writes---especially under policies that enforce full session logging, behavioral analysis, and threat detection. Environments with SATA SSDs experience logging delays, missed entries, and data corruption under concurrent sessions.

- **Critical Directories:** /var/log/safesquid, /var/db/safesquid, /var/lib/safesquid

- **Recommended Media:** NVMe SSD

- **Capacity Guidelines:**

  - Up to 1,500 Peak Bursts: 500 GB -- 1 TB
  - 3,000+ Peak Bursts: 2 TB -- 4 TB+
  - Extended Retention: Offload to external syslog/reporting nodes

## Disaster Recovery (DR) Site: Regional Continuity Assurance

Organizations preparing for large-scale disruptions often overlook physical and geographic isolation between production and DR environments. Deployments within the same city, data center, or grid render DR failover plans ineffective during seismic or regional infrastructure failures.

DR readiness requires deploying a separate SafeSquid stack in a distant geographic zone, configured to mirror production capacity. Without isolation, disaster scenarios result in simultaneous primary and DR site failure, negating all continuity guarantees.

## Next Steps: Transition to SafeSquid Installation

Once hardware, network, and storage prerequisites align with organisational load and resilience goals, the environment is ready for the [SafeSquid installation phase](/docs/01-Getting%20Started/02-Installation%20Guide/main.md). The next step involves preparing the operating system, deploying SafeSquid packages, and configuring policy, proxy, and access control components.
