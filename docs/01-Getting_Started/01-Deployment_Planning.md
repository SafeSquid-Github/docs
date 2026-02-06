---
title: Deployment Planning
description: Plan and size infrastructure for SafeSquid SWG deployment. Includes hardware provisioning, network and storage planning, environment configuration, and DR considerations.
keywords:
  - SafeSquid
  - Secure Web Gateway
  - HTTP Proxy Server
  - Application Layer Security
  - Zero-Trust Web Security
  - SafeSquid SWG capacity planning
  - SafeSquid Hardware Requirements
  - SafeSquid High Availability
  - Network Bonding LACP
  - AES-NI CPU
  - deployment planning
  - hardware provisioning
---

# Deployment Planning

Plan your infrastructure before installing SafeSquid. Undersized hardware, misconfigured networking, or insufficient disk I/O will cause policy failures, latency spikes, and data loss under load.

## System Requirements by Deployment Scale

### Single Node Deployments

Match CPU, memory, and NIC count to your expected user base and session concurrency. Ensure the CPU supports **AES-NI** for accelerated SSL decryption. Use NVMe SSDs for log and cache operations. Scale NICs to prevent I/O bottlenecks under burst load.

**Hardware Matrix**

| **CPU** | **RAM** | **NIC** | **Ideal Concurrent Connections** | **Peak Burst** | **Approx. Users** | **AES-NI Required** |
| ------: | ------: | ------: | -------------------------------: | -------------: | ----------------: | :-----------------: |
|       4 |       8 |       2 |                              150 |            400 |               100 |         Yes         |
|       8 |      16 |       2 |                              800 |           1500 |               350 |         Yes         |
|      16 |      32 |       4 |                             2000 |           3000 |               750 |         Yes         |
|      24 |      64 |       8 |                             2500 |           4000 |              1000 |         Yes         |
|      32 |      64 |       8 |                             3000 |           6000 |              1500 |         Yes         |
|      64 |     128 |      16 |                             4000 |           8000 |              2000 |         Yes         |

### High Availability Deployments

#### Active-Passive

Deploy Active-Passive clusters for zero-downtime SLA compliance. Ensure the passive node has full compute parity, real-time configuration sync, and resilient heartbeat protocols. Test failback procedures — stale DNS or incomplete sync will cause service gaps during recovery.

![Active-Passive cluster diagram with two nodes and failover path](/img/Deployment_Provisioning/image1.webp)
*Active-Passive cluster topology*

**Hardware Specifications (Per Server in Pair):**

| **No. of Instances** | **CPU** | **RAM** | **NIC** | **Ideal** | **Peak Burst** | **Approx. Users** |
| -------------------: | ------: | ------: | ------: | --------: | -------------: | ----------------: |
|                    2 |       4 |       8 |       2 |       150 |            400 |               100 |
|                    2 |       8 |      16 |       2 |       800 |           1500 |               350 |
|                    2 |      16 |      32 |       4 |      2000 |           3000 |               750 |
|                    2 |      24 |      64 |       8 |      2500 |           4000 |              1000 |
|                    2 |      32 |      64 |       8 |      3000 |           6000 |              1500 |
|                    2 |      64 |     128 |      16 |      4000 |           8000 |              2000 |

#### Active-Active

Deploy Active-Active clusters for better hardware utilisation. Account for the fact that a single node failure forces the surviving instance to absorb 100% of traffic. Size each node to handle peak burst alone. Configure health checks on the load balancer to avoid misrouting during partial failures.

![Active-Active cluster diagram with load-balanced nodes](/img/Deployment_Provisioning/image2.webp)
*Active-Active cluster topology*

**Hardware Specifications (Per Server in Cluster):**

| **No. of Instances** | **CPU** | **RAM** | **NIC** | **Ideal** | **Peak Burst** | **Approx. Users** |
| -------------------: | ------: | ------: | ------: | --------: | -------------: | ----------------: |
|                    1 |       4 |       8 |       2 |       150 |            400 |               100 |
|                    2 |       4 |       8 |       2 |       800 |           1500 |               350 |
|                    2 |       8 |      16 |       4 |      2000 |           3000 |               750 |
|                    2 |      12 |      32 |       8 |      2500 |           4000 |              1000 |
|                    2 |      32 |      32 |       8 |      3000 |           6000 |              1500 |
|                    2 |      32 |      64 |      16 |      4000 |           8000 |              2000 |

## Network Configuration

### NIC Planning

Allocate sufficient physical ports to avoid contention between LAN and WAN traffic. Deployments using 1GbE ports for multi-gigabit traffic will saturate during peak hours, especially with SSL inspection enabled.

- **Up to 1,500 Peak Burst:** Two physical ports (WAN + LAN) are the minimum. Expect a chokepoint under sustained load.
- **Above 1,500 Peak Burst:** Use 10GbE or faster NICs. Provision at least four physical ports to support VLAN isolation and monitoring interfaces.

### Network Bonding (LACP)

Implement link aggregation to protect against single-port failures and bandwidth ceiling constraints. Without bonding, a failed NIC can cause complete service loss.

| **Available NIC Ports** | **Recommended Bonding Configuration** |
| ----------------------: | ------------------------------------- |
|                 2 Ports | Single Active-Backup bond             |
|                 4 Ports | Two bonded pairs (2x2)                |
|                 8 Ports | Two high-throughput bonds (2x4)       |
|                16 Ports | Dual 8-port LACP bonds                |

## Disk I/O Planning

SafeSquid performs high-frequency concurrent disk writes for session logging, behavioural analysis, and threat detection. SATA SSDs will cause logging delays and missed entries under concurrent sessions. Use NVMe SSDs.

**Critical Directories:**
- `/var/log/safesquid`
- `/var/db/safesquid`
- `/var/lib/safesquid`

**Capacity Guidelines:**

| **Peak Burst** | **Recommended Disk** |
| -------------: | -------------------- |
|  Up to 1,500   | 500 GB – 1 TB        |
|  3,000+        | 2 TB – 4 TB+         |

For extended log retention, offload to an external syslog or reporting node.

## Disaster Recovery (DR)

Deploy a separate SafeSquid stack in a geographically distant zone, configured to mirror production capacity. Place the DR site in a different city, data centre, and power grid than the primary. Co-locating DR in the same facility or region negates continuity guarantees during regional failures.

## Environment Preparation

Prepare the target environment before installation:

1. **Update the OS** — use a supported distribution (Debian recommended for SAB deployments).
2. **Configure network interfaces** — assign static IPs, verify gateway and DNS resolution.
3. **Set up NTP** — ensure time synchronisation across all nodes.
4. **Verify resource reservations** — for virtual or cloud deployments, confirm CPU, RAM, and disk allocations match the hardware matrix above.
5. **Test outbound connectivity** — the server must reach SafeSquid update and licensing endpoints (see [Activate Your License](04-Activate.md) for the full endpoint list).

## Verify Your Plan

After installation, validate your deployment against the plan:

- **Interface Checks:** Confirm in the [Configuration Portal](../02-SafeSquid_SWG/01-Configuration_Portal.md) that proxy and application settings match the planned topology.
- **Log Analysis:** Review SafeSquid and system logs for resource or connectivity errors under expected load.
- **Performance Validation:** Monitor session counts and latency against the ideal/peak thresholds in the hardware matrix.

## Next Steps

Proceed to [Install SafeSquid](03-Install_SafeSquid/main.md).

**Related:** [License Activation](04-Activate.md) · [Proxy Clustering](../17-Proxy_Clustering/main.md)
