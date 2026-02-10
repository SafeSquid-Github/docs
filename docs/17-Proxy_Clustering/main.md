---
title: Proxy Clustering
slug: /Proxy_Clustering
description: Scale SafeSquid with master-slave clustering, configuration sync, and load balancer integration for high availability and horizontal scaling.
keywords:
  - SafeSquid proxy clustering
  - SafeSquid high availability
  - SafeSquid master-slave setup
  - proxy failover configuration
  - SafeSquid configuration sync
  - enterprise proxy scaling
---
<section class="section-strip">


# Master-slave clustering for high availability

SafeSquid supports clustered deployments for high availability, failover, and horizontal scaling. A master node holds policy and reporting; slave nodes enforce policy and forward data. Use a load balancer in front of slaves for distribution and failover. The documents below cover master-slave setup and configuration sync.

</section>

<section class="section-strip">

## Clustering configuration guides

### [Master-Slave](/docs/Proxy_Clustering/Master_Slave/)
Single-node deployments lack failover and scale limits. Master-Slave describes how to configure a master node for policy and reporting and slave nodes for traffic enforcement. Centralized policy and unified reporting reduce administrative overhead. Follow this document to set up master-slave relationships.

### [Configuration Sync](/docs/Proxy_Clustering/Configuration_Sync/)
Configuration drift across nodes causes inconsistent enforcement and troubleshooting difficulty. Configuration Sync enables automatic propagation of policy and configuration from master to slaves. All nodes stay aligned without manual copy. Configure sync using this document.

</section>