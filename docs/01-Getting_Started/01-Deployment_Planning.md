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

Undersized hardware breaks policy enforcement. Sessions drop. SSL decryption stalls. Logs fall behind. A single point of failure takes all web traffic offline.

Without planning, you get:
- Policy failures under load (latency spikes, dropped sessions)
- SLA breaches and audit findings (SOC 2, ISO 27001 expect documented resilience)
- Costly recovery from DR events (capacity and topology weren't validated)

Planning delivers:
- Capacity that matches peak load
- Resilience when hardware or links fail
- Audit-ready documentation
- Predictable performance at go-live

## Requirement Capture

Gather the following before you size hardware or choose a topology:

- **Concurrent connection estimate** — Peak or typical so you can use the [Hardware sizing](#hardware-sizing) table.
- **Network layout** — LAN/WAN segments, VLANs, and proxy placement for NIC sizing and bonding (see [Network: NICs and bonding](#network-nics-and-bonding)).
- **Deployment goal** — Single node for pilot or eval; for production, decide HA and DR before go-live (see [Deployment scenario recommendations](#deployment-scenario-recommendations)).

Then complete **Prepare the host before install** (below) on each target host before you run the installer.

## Hardware sizing

### Estimating Concurrent Connections

If you only have user counts, estimate **8 concurrent connections per active user** during peak hours:

**Example:** 200 active users × 8 connections = 1,600 concurrent connections → Use **8 cores, 16 GB RAM** from the table below.

For more accurate sizing, monitor your existing proxy (if any) or estimate:
- Average session duration: 3-5 minutes
- Peak usage windows: 9-11 AM, 2-4 PM
- Connection multiplier: Each browser tab, background app, or API call creates separate connections

Use **peak** concurrent connections (not average) to avoid dropped sessions during bursts.

### Sizing Matrix

Match CPU, RAM, and NICs to your expected **peak** concurrent connections (not average) so you avoid latency and dropped sessions. Ensure the CPU supports **AES-NI** (Advanced Encryption Standard New Instructions) — CPUs without AES-NI suffer 3-5× slower SSL decryption, causing latency spikes and connection drops under HTTPS load. Use NVMe SSDs for log and cache (see [Disk and log storage](#disk-and-log-storage)).

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

Allocate enough physical ports for LAN and WAN. For up to 1,500 peak connections, two 1GbE ports (WAN + LAN) is the minimum. Above 1,500, use 10GbE or faster — 1GbE saturates under SSL inspection at high connection counts. At 3,000+, use at least four ports for VLAN isolation and monitoring.

### Link aggregation (LACP)

**LACP bonding** (Link Aggregation Control Protocol) combines multiple network interfaces into one logical link for higher bandwidth and redundancy. Implement link aggregation to protect against single-port failures and bandwidth ceiling constraints. Without bonding, a failed NIC can cause complete service loss.

| **NICs**  | **Recommended Bonding Configuration** |
| --------- | ------------------------------------- |
| 2 Ports   | Single Active-Backup bond             |
| 4 Ports   | Two bonded pairs (2×2)                |
| 8 Ports   | Two high-throughput bonds (2×4)       |
| 16 Ports  | Dual 8-port LACP bonds                |

## Disk and log storage

SafeSquid performs high-frequency disk writes for session logging, behavioural analysis, and threat detection. Use NVMe (not SATA) for `/var/log/safesquid`, `/var/db/safesquid`, and `/var/lib/safesquid` — SATA SSDs cause logging delays and missed entries under load.

**Capacity guidelines**

| **Peak burst**  | **Recommended disk** |
| --------------: | -------------------- |
| Up to 1,500     | 500 GB – 1 TB        |
| 3,000+          | 2 TB – 4 TB+         |

**Default retention:** SafeSquid retains logs locally for 30 days. At 3,000 concurrent connections, expect ~50-100 GB per day.

For compliance retention (90+ days), configure log forwarding to:
- External syslog (rsyslog, Splunk, ELK)
- SafeSquid Reporting Service (see [Reporting Service](/docs/SafeSquid_SWG/Reporting_Service/))
- Cloud storage (S3, Azure Blob)

Monitor `/var/log/safesquid` disk usage weekly to avoid log truncation.

## Deployment scenario recommendations

| Scenario | When to use it | Key constraints | Next action |
|----------|----------------|-----------------|-------------|
| **Single node (pilot)** | Evaluation, lab, or low-availability pilot | No failover; plan for HA before production | [Install SafeSquid](/docs/Getting_Started/Install_SafeSquid/main/) |
| **Branch or small office** | One site, moderate user count | Size to [Hardware sizing](#hardware-sizing); use NVMe for logs | Single node or [Proxy Clustering](/docs/Proxy_Clustering/main/) for local HA |
| **High availability** | Production; cannot tolerate single-node outage | Master-slave or active-active; load balancer in front | [Proxy Clustering](/docs/Proxy_Clustering/main/), then [Disaster Recovery](/docs/Disaster_Recovery/main/) |
| **Cloud (AWS, Azure, etc.)** | No on-prem hardware; cloud-first | Match instance type to hardware matrix; use cloud NVMe/storage | [Cloud Deployment](/docs/Getting_Started/Install_SafeSquid/Cloud_Deployment/) |

## Disaster recovery

Deploy a separate SafeSquid stack in a geographically distant zone to maintain web security during regional outages.

**DR site requirements:**
- **Geography:** Different city, data center, and power grid than primary (co-location negates continuity)
- **Capacity:** Mirror production sizing (CPU, RAM, NICs, disk) — DR must handle full load during failover
- **Configuration:** Sync policies using [Configuration Sync](/docs/Proxy_Clustering/Configuration_Sync/) or manual replication

**Recovery objectives:**
- **RTO (Recovery Time Objective):** Time to redirect traffic to DR (typically 5-30 minutes with DNS or BGP failover)
- **RPO (Recovery Point Objective):** Acceptable policy/config lag (real-time sync = 0 RPO; manual sync = hours)

**Failover methods:**
- DNS-based (change A records to DR IP) — RTO: 5-30 min depending on TTL
- BGP Anycast (advertise same IP from DR) — RTO: <5 min
- Load balancer health checks (automatic redirect) — RTO: <1 min

Test DR failover quarterly and document procedure for audits.

## Prepare the host before install

Prepare the target environment before installation:

1. **Update the OS** — use a supported distribution (Debian recommended for SAB deployments).
2. **Configure network interfaces** — assign static IPs, verify gateway and DNS resolution.
3. **Set up NTP** — ensure time synchronisation across all nodes.
4. **Verify resource reservations** — for virtual or cloud deployments, confirm CPU, RAM, and disk allocations match the hardware matrix above.
5. **Test outbound connectivity** — the server must reach SafeSquid update and licensing endpoints (below).
6. **Configure firewall rules** — Allow:
   - Inbound: 8080 (HTTP proxy), 8443 (HTTPS admin), 53 (DNS if using integrated DNS security)
   - Outbound: 80/443 (web access), 53 (upstream DNS), SafeSquid licensing endpoints (below)
7. **SafeSquid licensing endpoints** (must be reachable):
   - `key.safesquid.com` (license activation)
   - `updates.safesquid.com` (package updates)
   - `repo.safesquid.net` (repository access)
8. **Disable conflicting services** — Stop and disable SELinux (or configure permissive mode) and AppArmor if present; they can block proxy operations.

## Verify and document for audits

After installation, validate against your plan:

- **Interface checks** — In the [Configuration Portal](/docs/SafeSquid_SWG/Configuration_Portal/), confirm network, proxy, and application settings match the planned topology.
- **Performance baseline** — Under light load:
  - Session latency: <50ms (check `/var/log/safesquid/extended.log`)
  - CPU usage: <20% idle
  - Disk I/O wait: <5%
- **Stress test** — Simulate peak concurrent connections (use `ab` or `curl` loops); verify session counts match [Hardware sizing](#hardware-sizing) table without dropped connections.
- **Logs** — Check `/var/log/safesquid` and `journalctl -u safesquid` for resource warnings or connectivity errors.

**If verification fails:**
- CPU saturation → Undersized hardware or missing AES-NI
- Disk I/O wait >10% → SATA instead of NVMe
- Connection drops → NIC saturation or bonding misconfigured

Document sizing decisions, topology diagram, and stress test results for change control and compliance audits (SOC 2, ISO 27001).

## Next steps

Proceed to [Install SafeSquid](/docs/Getting_Started/Install_SafeSquid/main/). After installation, [Verify Your Setup](/docs/Getting_Started/Verify_Your_Setup/) to confirm proxy and client connectivity.

**Related:** [Activate Your License](/docs/Getting_Started/Activate/) for licensing and endpoint list · [Proxy Clustering](/docs/Proxy_Clustering/main/) for HA cluster setup
