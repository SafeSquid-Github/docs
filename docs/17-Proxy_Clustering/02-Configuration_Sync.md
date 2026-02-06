---
title: Configuration Sync
description: Discover how to enable configuration synchronization across a SafeSquid proxy cluster to ensure consistent policy deployment, reduce administrative overhead, and improve system reliability and security.
keywords:
  - SafeSquid configuration sync
  - Proxy cluster synchronization
  - SafeSquid master-slave sync
  - Sync proxy configuration SafeSquid
  - SafeSquid centralized policy update
---

# Keep all proxy nodes in sync with master configuration

Without configuration synchronization, each proxy node must be updated manually. Inconsistencies cause policy gaps, vulnerabilities, and extra maintenance. SafeSquid configuration sync propagates policy and settings from the master to slave nodes so all nodes stay uniform and administrative overhead is reduced.

## Enable configuration sync for the proxy cluster
:::note
Before starting, in an enterprise network where proxy authentication is enforced for all users, create a policy for the slave proxy server to access SafeSquid's web interface on the master proxy server.
:::

Below is an example on how to create a new user group for slave proxy instance.

![A screenshot of a computer](/img/How_to_Setup_Configuration_Sync_in_a_SafeSquid_Proxy_Cluster/image1.webp)

To enable policy configuration, follow the steps below on the secondary/slave proxy server.

## Access the web interface and go to Support
![accessing safesquid web interface and going to support ](/img/How_to_Setup_Configuration_Sync_in_a_SafeSquid_Proxy_Cluster/image2.webp)

## Select Startup Params
![selecting setup params option](/img/How_to_Setup_Configuration_Sync_in_a_SafeSquid_Proxy_Cluster/image3.webp)

## Click on the edit button.
![clicking on edit button](/img/How_to_Setup_Configuration_Sync_in_a_SafeSquid_Proxy_Cluster/image4.webp)

## Add the master proxy server IP address
![Adding the master proxy server IP address](/img/How_to_Setup_Configuration_Sync_in_a_SafeSquid_Proxy_Cluster/image5.webp)

## Add the master proxy server port number
![Adding the master proxy server port number](/img/How_to_Setup_Configuration_Sync_in_a_SafeSquid_Proxy_Cluster/image6.webp)

## Now click on the correct icon to save the configuration.
![clicking on the correct icon to save the configuration](/img/How_to_Setup_Configuration_Sync_in_a_SafeSquid_Proxy_Cluster/image7.webp)

## Now click on restart for applying changes.
![clicking on restart for applying changes](/img/How_to_Setup_Configuration_Sync_in_a_SafeSquid_Proxy_Cluster/image8.webp)

Click **Yes** to back up SafeSquid configuration to the cloud, or **No** to skip cloud backup.

Click **Submit** after selecting the appropriate option.

![clicking on submit after selecting yes or no for backup configuration](/img/How_to_Setup_Configuration_Sync_in_a_SafeSquid_Proxy_Cluster/image9.webp)

Once the master instance has been restarted, all configuration and further changes synchronize to the slave instance of SafeSquid.
