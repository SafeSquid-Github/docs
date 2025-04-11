---
title: Setup Configuration Sync in a SafeSquid Proxy Cluster  
Description: Discover how to enable configuration synchronization across a SafeSquid proxy cluster to ensure consistent policy deployment, reduce administrative overhead, and improve system reliability and security.

Keywords:
- SafeSquid configuration sync  
- Proxy cluster synchronization  
- SafeSquid master-slave sync  
- Sync proxy configuration SafeSquid  
- SafeSquid centralized policy update  
---

## Overview

The lack of configuration synchronization in proxy clusters presents notable challenges.

Inconsistencies across proxy servers without automated sync can lead to errors, system vulnerabilities, and inefficient performance.

Each server requires individual configuration, increasing maintenance efforts and the likelihood of downtimes, which negatively affects service availability and customer experience.

Implementing configuration synchronization in SafeSquid addresses these issues effectively.

It ensures uniform settings across all proxy nodes, reducing errors and enhancing network stability and security.

This leads to improved system performance and reliability. Moreover, it streamlines maintenance, reducing administrative overhead.

## Enable configuration Sync for your proxy cluster.

**Note**: Before getting started, in an enterprise network where you have enforced proxy authentication for all users, you are required to create a policy for the slave proxy server to access SafeSquid's web interface of your master proxy server.

Below is an example on how to create a new user group for slave proxy instance.

![A screenshot of a computer](/img/How_to_Setup_Configuration_Sync_in_a_SafeSquid_Proxy_Cluster/image1.webp)

To enable policy configuration, follow the steps below in your secondary/slave proxy server.

## Access your web interface and go to support.

![accessing safesquid web interface and going to support ](/img/How_to_Setup_Configuration_Sync_in_a_SafeSquid_Proxy_Cluster/image2.webp)

## Select Startup Params

![selecting setup params option](/img/How_to_Setup_Configuration_Sync_in_a_SafeSquid_Proxy_Cluster/image3.webp)

## Click on the edit button.

![clicking on edit button](/img/How_to_Setup_Configuration_Sync_in_a_SafeSquid_Proxy_Cluster/image4.webp)

## Add your Master proxy server's IP address.

![adding your master proxy server's IP address](/img/How_to_Setup_Configuration_Sync_in_a_SafeSquid_Proxy_Cluster/image5.webp)

## Add your Master proxy server's port Number.

![adding your master proxy server's port number](/img/How_to_Setup_Configuration_Sync_in_a_SafeSquid_Proxy_Cluster/image6.webp)

## Now click on the correct icon to save the configuration.

![clicking on the correct icon to save the configuration](/img/How_to_Setup_Configuration_Sync_in_a_SafeSquid_Proxy_Cluster/image7.webp)

## Now click on restart for applying changes.

![clicking on restart for applying changes](/img/How_to_Setup_Configuration_Sync_in_a_SafeSquid_Proxy_Cluster/image8.webp)

Click on "Yes" if you would like to backup your SafeSquid configuration to cloud and "No" if you wish not to back up your SafeSquid configuration to cloud.

Click on submit once you have selected the appropriate radio button.

![clicking on submit after selecting yes or no for backup configuration](/img/How_to_Setup_Configuration_Sync_in_a_SafeSquid_Proxy_Cluster/image9.webp)

Once your master instance has been restarted all the configuration and further changes will be synchronized with your slave instance of SafeSquid.
