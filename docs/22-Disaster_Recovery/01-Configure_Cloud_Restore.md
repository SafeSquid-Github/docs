---
title: Configure Cloud Restore
description: Required setup, how Cloud Restore works, and step-by-step configuration to restore SafeSquid configuration and SSL certificates from the cloud.
keywords:
  - SafeSquid cloud restore setup
  - configure cloud restore
  - restore configuration SSL
  - disaster recovery procedure
---
<section class="section-strip">


# Configure Cloud Restore

</section>

<section class="section-strip">

## How SafeSquid Cloud Restore works

1. Bob is an administrator of Stark tech.
2. Bob is creating some policies for star tech employees and saving it on cloud.
3. Due to system failure Bob is losing configuration and wants quick and efficient recovery of configuration.
4. Bob is now creating new appliance freshly and activate product using same activation key.
5. He wants to take recovery of configuration on this new appliance. So, he clicks **on Cloud Restore option** from **SafeSquid Interface**.
6. As soon as he clicks on cloud restore option from new appliance SafeSquid is prompting "You can get configuration file and SSL certificate shared with activation key".
7. Bob clicks on Restore button and he should find one more prompt to Restore Configuration
**downloaded:/usr/local/safesquid/security/policies/config.xml**

**downloaded:/usr/local/safesquid/security/ssl/ROOT_X509File.cer downloaded:/usr/local/safesquid/security/ssl/ROOT_PrivateKeyFile.pem**

8. This line only comes when SafeSquid find new backup of configuration on cloud.
9. In the SafeSquid interface, open Configure to verify; all policy configuration should match the restored state.

</section>

<section class="section-strip">

## Required setup

Monit must be up and running. Monit is required to start the SafeSquid service automatically.

</section>

<section class="section-strip">

## Configure Cloud Restore

</section>

<section class="section-strip">

## [Access the SafeSquid User Interface](/docs/SafeSquid_SWG/Configuration_Portal/)
![Access the SafeSquid User Interface to configure cloud restore](/img/How_To/Setup_Cloud_Restore/image1.webp)

![verify same Activation key before configure cloud restore ](/img/How_To/Setup_Cloud_Restore/image2.webp)

![Select configure cloud restore option](/img/How_To/Setup_Cloud_Restore/image3.webp)

![Click on restore to configure cloud restore](/img/How_To/Setup_Cloud_Restore/image4.webp)

![Confirmation of configure cloud restore](/img/How_To/Setup_Cloud_Restore/image5.webp)

</section>