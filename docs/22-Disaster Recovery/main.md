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

## Disasters cause config and certificate loss; cloud restore recovers them

Disasters can strike at any time due to network or system failure. An outage can cause loss of configuration and SSL certificates. Reworking and resuming the last configuration is time-consuming without a backup. SafeSquid addresses this with a cloud backup feature.

SafeSquid Cloud Restore serves as a disaster recovery plan (DRP). Use the same activation key to load saved configuration and SSL certificates from the cloud.

- Recover the last configuration saved in cloud backup after a disaster
- Create a new appliance and restore configuration multiple times
- Load configuration to various remote locations for clustered SafeSquid

## Client Scenario
**Case1**: Stark tech lose configuration of SafeSquid due to network or system failure. The administrator of Stark tech wants quick and efficient recovery of policy configuration as well as configuration of SSL certificate.

**Scenario 2**: Stark tech has 10 remote locations and stark tech wants SafeSquid in clusters.

**Scenario 3**: Stark tech creates new appliance freshly and activate product using same activation key. Now stark tech wants to restore configuration which is saved on cloud.

## Solution
SafeSquid Cloud Restore is a solution that proposed for Stark tech.

SafeSquid Cloud restore feature is introduced as a disaster recovery plan (DRP).

## Benefit
Quick and efficient recovery of all the policy configuration as well as configuration of SSL certificate.

Same policy configuration as well as SSL configuration on new appliance or multiple instances easily.

## How SafeSquid Cloud Restore works?

1.  Bob is an administrator of Stark tech.
2.  Bob is creating some policies for star tech employees and saving it on cloud.
3.  Due to system failure Bob is losing configuration and wants quick and efficient recovery of configuration.
4.  Bob is now creating new appliance freshly and activate product using same activation key.
5.  He wants to take recovery of configuration on this new appliance. So, he clicks **on Cloud Restore option** from **SafeSquid Interface**.
6.  As soon as he clicks on cloud restore option from new appliance SafeSquid is prompting "You can get configuration file and SSL certificate shared with activation key".
7.  Bob clicks on Restore button and he should find one more prompt to Restore Configuration
**downloaded:/usr/local/safesquid/security/policies/config.xml**

**downloaded:/usr/local/safesquid/security/ssl/ROOT_X509File.cer downloaded:/usr/local/safesquid/security/ssl/ROOT_PrivateKeyFile.pem**

8.  This line only comes when SafeSquid find new backup of configuration on cloud.
9.  In the SafeSquid interface, open Configure to verify; all policy configuration should match the restored state.

## Required setup

Monit must be up and running. Monit is required to start the SafeSquid service automatically.

## Configure Cloud Restore
## [Access the SafeSquid User Interface](/docs/SafeSquid%20SWG/Configuration%20Portal)
![Access the SafeSquid User Interface to configure cloud restore](/img/How_To/Setup_Cloud_Restore/image1.webp)

![verify same Activation key before configure cloud restore ](/img/How_To/Setup_Cloud_Restore/image2.webp)

![Select configure cloud restore option](/img/How_To/Setup_Cloud_Restore/image3.webp)

![Click on restore to configure cloud restore](/img/How_To/Setup_Cloud_Restore/image4.webp)

![Confirmation of configure cloud restore](/img/How_To/Setup_Cloud_Restore/image5.webp)

<!-- Merged from: SafeSquid SWG / Configuration Backup and Restore -->

