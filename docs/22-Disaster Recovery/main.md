---
title: Disaster Recovery
description: Restore SafeSquid configuration and SSL certificates after failure or in clusters using Cloud Restore and the same activation key.

keywords:
  - SafeSquid disaster recovery
  - SafeSquid cloud restore
  - Restore SafeSquid configuration
  - SafeSquid backup and recovery
  - SafeSquid SSL recovery
---

# Disaster Recovery

## Disasters cause config and certificate loss; cloud restore recovers them

Disasters can strike at any time due to network or system failure. An outage can cause loss of configuration and SSL certificates. Reworking and resuming the last configuration is time-consuming without a backup. SafeSquid addresses this with a cloud backup feature.

SafeSquid Cloud Restore serves as a disaster recovery plan (DRP). Use the same activation key to load saved configuration and SSL certificates from the cloud.

- Recover the last configuration saved in cloud backup after a disaster
- Create a new appliance and restore configuration multiple times
- Load configuration to various remote locations for clustered SafeSquid

## Client scenarios and benefit

**Case 1**: Stark tech lose configuration of SafeSquid due to network or system failure. The administrator of Stark tech wants quick and efficient recovery of policy configuration as well as configuration of SSL certificate.

**Scenario 2**: Stark tech has 10 remote locations and stark tech wants SafeSquid in clusters.

**Scenario 3**: Stark tech creates new appliance freshly and activate product using same activation key. Now stark tech wants to restore configuration which is saved on cloud.

SafeSquid Cloud Restore provides quick and efficient recovery of all policy configuration and SSL certificate configuration. The same policy and SSL configuration can be applied on a new appliance or multiple instances easily.

## Documents in this section

### [Configure Cloud Restore](01-Configure%20Cloud%20Restore.md)
Recovery requires Cloud Restore to be configured and the same activation key. This document covers how Cloud Restore works, required setup (Monit), and step-by-step configuration in the SafeSquid interface to restore configuration and SSL certificates from the cloud. Use it to implement and run disaster recovery.