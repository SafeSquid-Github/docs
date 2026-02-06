---
title: Proxy Clustering
description: Scale SafeSquid deployments with master-slave clustering, configuration sync, and load balancer integration for enterprise environments.
keywords:
  - SafeSquid proxy clustering
  - SafeSquid high availability
  - SafeSquid master-slave setup
  - proxy failover configuration
  - distributed proxy deployment
  - SafeSquid configuration sync
  - enterprise proxy scaling
  - horizontal scaling proxy
---

# Proxy Clustering

## Scale horizontally to meet enterprise demands

SafeSquid supports clustered deployments for organizations that require high availability, failover redundancy, and horizontal scaling. Add nodes as traffic grows — there is no single-appliance ceiling.

## Deployment Patterns

| Pattern | Nodes | Use Case |
|---------|-------|----------|
| **Standalone** | 1 | Small offices, PoC, up to 500 users |
| **Active-Passive** | 2 | High availability with automatic failover |
| **Active-Active** | 2+ | Load distribution, horizontal scaling |
| **Distributed** | N | Multi-site deployments with centralized policy |

## Architecture Overview

```
                    ┌─────────────────┐
                    │  Load Balancer  │
                    └────────┬────────┘
                             │
           ┌─────────────────┼─────────────────┐
           │                 │                 │
           ▼                 ▼                 ▼
    ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
    │  SafeSquid  │   │  SafeSquid  │   │  SafeSquid  │
    │   Node 1    │   │   Node 2    │   │   Node N    │
    │   (Slave)   │   │   (Slave)   │   │   (Slave)   │
    └──────┬──────┘   └──────┬──────┘   └──────┬──────┘
           │                 │                 │
           └─────────────────┼─────────────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │     Master      │
                    │   (Policy &     │
                    │   Reporting)    │
                    └─────────────────┘
```

## Key Capabilities

### Centralized Policy Management
Configure policies once on the master node. Changes propagate automatically to all slave instances, eliminating configuration drift and reducing administrative overhead.

### Unified Reporting
Slave nodes forward reporting data to the master, providing a single view of traffic, threats, and user activity across the entire cluster.

### Automatic Failover
When combined with a load balancer, traffic automatically routes around failed nodes. No manual intervention required.

### Independent Operation
Each slave node operates independently for traffic inspection. If the master becomes temporarily unavailable, slaves continue enforcing the last-known policy.

## Sizing Guidelines

| Users | Recommended Configuration |
|-------|---------------------------|
| Up to 500 | Single node, 4 cores, 8 GB RAM |
| 500–2,000 | 2 nodes active-active, load balanced |
| 2,000–5,000 | 3–4 nodes, dedicated master |
| 5,000–10,000 | 4–6 nodes, master + reporting cluster |
| 10,000+ | Multi-cluster with geographic distribution |

:::tip Performance Scaling
Each SafeSquid node handles approximately 500–1,500 concurrent connections depending on SSL inspection depth and content analysis policies. Add nodes linearly as connection requirements grow.
:::

## Included Topics

- **[Master-Slave Setup](/docs/Proxy%20Clustering/Master-Slave)** — Configure master-slave relationships for centralized policy and reporting
- **[Configuration Sync](/docs/Proxy%20Clustering/Configuration%20Sync)** — Enable automatic configuration synchronization across nodes

## Load Balancer Integration

SafeSquid clusters work with standard TCP/HTTP load balancers:

- **HAProxy** — Open-source, high-performance
- **NGINX** — Reverse proxy with load balancing
- **F5 BIG-IP** — Enterprise ADC
- **AWS ALB/NLB** — Cloud-native load balancing
- **Azure Load Balancer** — Cloud-native for Azure deployments

Configure health checks against SafeSquid's management port to detect node availability.

## High Availability Checklist

- [ ] Deploy minimum 2 nodes for production
- [ ] Configure load balancer with health checks
- [ ] Enable configuration sync from master to slaves
- [ ] Verify reporting data flows to master
- [ ] Test failover by stopping a slave node
- [ ] Document recovery procedures

**Related**: [Master-Slave Setup](01-Master-Slave.md), [Configuration Sync](02-Configuration%20Sync.md), [VPN Integration](/docs/Integrations/VPN/main), [Disaster Recovery](/docs/Disaster%20Recovery/main)
