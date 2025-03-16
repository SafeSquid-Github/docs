# Setup Cloud Restore

## Overview

A disaster can strike at any time, it may due to network or system failure.

Any outage may lead to losing your configuration and SSL certificates. Process to rework and resume your last configuration is very much time-consuming unless you have taken a backup of it.

To overcome this problem SafeSquid introduced cloud backup feature.

SafeSquid Cloud restore feature was introduced as a disaster recovery plan (DRP). You need to use same Activation key to load your saved configuration and SSL certificates from cloud.

- You can now recover your last configuration saved on cloud backup if any disaster occurs.

- You can now create new appliance freshly and restore your configuration multiple times.

- You can now load your configuration to various remote locations if you want SafeSquid in clusters.

## Client Scenario

**Case1**: Stark tech lose configuration of SafeSquid due to network or system failure. The administrator of Stark tech wants quick and efficient recovery of policy configuration as well as configuration of SSL certificate.

**Case2**: Stark tech has 10 remote locations and stark tech wants SafeSquid in clusters.

**Case3**: Stark tech creates new appliance freshly and activate product using same activation key. Now stark tech wants to restore configuration which is saved on cloud.

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

7.  Bob clicks on Restore button and he should find one more prompt to Restore Configuration > **downloaded:/usr/local/safesquid/security/policies/config.xml downloaded:/usr/local/safesquid/security/ssl/ROOT_X509File.cer downloaded:/usr/local/safesquid/security/ssl/ROOT_PrivateKeyFile.pem**

8.  This line only comes when SafeSquid find new backup of configuration on cloud.

9.  When he clicks on **Configure from SafeSquid** interface to verify policy configuration should get all the (policy) configuration as it is.

## Prerequisites

Your monit service must be up and running. Monit service is required to start SafeSquid service automatically.

## Configure Cloud Restore

## [Access the SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

![Access the SafeSquid User Interface to configure cloud restore](/img/How_To/Setup_Cloud_Restore/image1.webp)

![verify same Activation key before configure cloud restore ](/img/How_To/Setup_Cloud_Restore/image2.webp)

![Select configure cloud restore option](/img/How_To/Setup_Cloud_Restore/image3.webp)

![Click on restore to configure cloud restore](/img/How_To/Setup_Cloud_Restore/image4.webp)

![Confirmation of configure cloud restore](/img/How_To/Setup_Cloud_Restore/image5.webp)
