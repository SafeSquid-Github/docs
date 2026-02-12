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

## Why deployment planning matters

Undersized hardware, misconfigured networking, or insufficient disk I/O cause policy failures, latency spikes, and data loss under load. The gateway becomes the bottleneck: sessions drop, SSL decryption stalls, and logs fall behind. A single point of failure means an outage takes all web traffic offline — no inspection, no policy, no visibility. SLA breaches trigger penalties and customer loss; auditors (SOC 2, ISO 27001) expect documented availability and resilience, and recovery from an unplanned failover or DR event is costly and slow if capacity and topology were not planned up front.

Planning before install avoids that. It delivers capacity that matches load, resilience when something fails, and evidence you can show auditors:

- **Capacity that matches load** — Size to peak concurrent connections so policies apply under load.
- **Resilience when it matters** — Use HA (active-passive or active-active) and DR in a separate zone so a single or regional outage doesn’t take the proxy offline.
- **Predictable performance at go-live** — Right-size NICs and use NVMe for logs (see [Disk and log storage](#disk-and-log-storage)) so rollout doesn’t bring latency or logging gaps.
- **Audit-ready evidence** — Document sizing and topology for SOC 2 and ISO 27001.

## Requirement Capture

Gather the following before you size hardware or choose a topology:

- **Concurrent connection estimate** — Peak or typical so you can use the [Hardware sizing](#hardware-sizing) table (~8 per active user if you only have user count).
- **Network layout** — LAN/WAN segments, VLANs, and proxy placement for NIC sizing and bonding (see [Network: NICs and bonding](#network-nics-and-bonding)).
- **Deployment goal** — Single node for pilot or eval; for production, decide HA and DR before go-live (see [Deployment scenario recommendations](#deployment-scenario-recommendations)).

Then complete **Prepare the host before install** (below) on each target host before you run the installer.

## Hardware sizing

Match CPU, RAM, and NICs to your expected **peak** concurrent connections (not average) so you avoid latency and dropped sessions. Ensure the CPU supports **AES-NI** (Advanced Encryption Standard New Instructions) for SSL decryption; use NVMe SSDs for log and cache (see [Disk and log storage](#disk-and-log-storage)).

| **CPU**    | **RAM**   | **NICs**       | **Max Concurrent Connections** |
|:-----------|:----------|:---------------|-------------------------------:|
| 4 cores    | 8 GB      | 2 × 1 Gbps     | 400                            |
| 8 cores    | 16 GB     | 2 × 1 Gbps     | 1,500                          |
| 16 cores   | 32 GB     | 4 × 1 Gbps     | 3,000                          |
| 24 cores   | 64 GB     | 8 × 1 Gbps     | 4,000                          |
| 32 cores   | 64 GB     | 8 × 1 Gbps     | 6,000                          |
| 64 cores   | 128 GB    | 16 × 1 Gbps    | 8,000                          |

Beyond 4,000 concurrent connections, assign multiple WAN IPs and consider [Proxy Clustering](/docs/Proxy_Clustering/main/) for HA.

## Network: NICs and bonding

### NIC sizing

Allocate enough physical ports for LAN and WAN. Up to 1,500 peak burst, two ports (WAN + LAN) are the minimum; above that, use 10GbE or faster (1GbE saturates under SSL inspection) and at least four ports for VLAN isolation and monitoring.

### Link aggregation (LACP)

**LACP bonding** (Link Aggregation Control Protocol) combines multiple network interfaces into one logical link for higher bandwidth and redundancy. Implement link aggregation to protect against single-port failures and bandwidth ceiling constraints. Without bonding, a failed NIC can cause complete service loss.

| **Available NIC Ports** | **Recommended Bonding Configuration** |
| ----------------------: | ------------------------------------- |
|                 2 Ports | Single Active-Backup bond             |
|                 4 Ports | Two bonded pairs (2x2)                |
|                 8 Ports | Two high-throughput bonds (2x4)       |
|                16 Ports | Dual 8-port LACP bonds                |



## Disk and log storage

SafeSquid performs high-frequency disk writes for session logging, behavioural analysis, and threat detection. Use NVMe (not SATA) for `/var/log/safesquid`, `/var/db/safesquid`, and `/var/lib/safesquid` — SATA SSDs cause logging delays and missed entries under load.

**Capacity guidelines**

| **Peak burst** | **Recommended disk** |
| --------------: | -------------------- |
|  Up to 1,500   | 500 GB – 1 TB        |
|  3,000+        | 2 TB – 4 TB+         |

For extended retention, offload to an external syslog or reporting node.

## Deployment scenario recommendations

| Scenario | When to use it | Key constraints | Next action |
|----------|----------------|-----------------|-------------|
| **Single node (pilot)** | Evaluation, lab, or low-availability pilot | No failover; plan for HA before production | [Install SafeSquid](/docs/Getting_Started/Install_SafeSquid/main/) |
| **Branch or small office** | One site, moderate user count | Size to [Hardware sizing](#hardware-sizing); use NVMe for logs | Single node or [Proxy Clustering](/docs/Proxy_Clustering/main/) for local HA |
| **High availability** | Production; cannot tolerate single-node outage | Master-slave or active-active; load balancer in front | [Proxy Clustering](/docs/Proxy_Clustering/main/), then [Disaster Recovery](/docs/Disaster_Recovery/main/) |
| **Cloud (AWS, Azure, etc.)** | No on-prem hardware; cloud-first | Match instance type to hardware matrix; use cloud NVMe/storage | [Cloud Deployment](/docs/Getting_Started/Install_SafeSquid/Cloud_Deployment/) |

## Disaster recovery

Deploy a separate SafeSquid stack in a geographically distant zone, configured to mirror production capacity. Place the DR site in a different city, data centre, and power grid than the primary — co-locating DR in the same facility or region negates continuity during regional failures.

## Prepare the host before install

Prepare the target environment before installation:

1. **Update the OS** — use a supported distribution (Debian recommended for SAB deployments).
2. **Configure network interfaces** — assign static IPs, verify gateway and DNS resolution.
3. **Set up NTP** — ensure time synchronisation across all nodes.
4. **Verify resource reservations** — for virtual or cloud deployments, confirm CPU, RAM, and disk allocations match the hardware matrix above.
5. **Test outbound connectivity** — the server must reach SafeSquid update and licensing endpoints (see [Activate Your License](/docs/Getting_Started/Activate/) for the full endpoint list).



## Verify and document for audits

After installation, validate against your plan:

- **Interface checks** — In the [Configuration Portal](/docs/SafeSquid_SWG/Configuration_Portal/), confirm proxy and application settings match the planned topology.
- **Logs** — Check `/var/log/safesquid` and system journal for resource or connectivity errors under load.
- **Performance** — Compare session counts and latency to the [Hardware sizing](#hardware-sizing) table.

Document sizing choices (peak burst, topology) and retain for change control; post-install session counts and logs support availability and capacity audits.

## Next steps

Proceed to [Install SafeSquid](/docs/Getting_Started/Install_SafeSquid/main/). After installation, [Verify Your Setup](/docs/Getting_Started/Verify_Your_Setup/) to confirm proxy and client connectivity.

**Related:** [Activate Your License](/docs/Getting_Started/Activate/) for licensing and endpoint list · [Proxy Clustering](/docs/Proxy_Clustering/main/) for HA cluster setup

