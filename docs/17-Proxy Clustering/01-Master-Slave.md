---
title: Master-Slave
description: Configure SafeSquid master-slave architecture for centralized policy sync and reporting across slave instances.
keywords:
  - SafeSquid master-slave configuration
  - Configure SafeSquid slave server
  - Centralized policy management SafeSquid
  - SafeSquid multi-instance setup
  - SafeSquid synchronization
---

## What does Master/Slave mean?
In computer networking, master/slave is a model for a communication in which one device or process (known as the master) controls one or more other devices or processes (known as slaves). Once the master/slave relationship is established, the direction of control is always from the master to the slave(s).

In a master-slave configuration of SafeSquid, a specific instance of SafeSquid (the master server) manages other instances of SafeSquid (the slave servers). The stand-alone and slave instances are almost identical in functionality.

Control and policy flow from master to slaves; reporting data flows from slaves to master:

```mermaid
flowchart TB
  Master[Master SafeSquid]
  Slave1[Slave 1]
  Slave2[Slave 2]
  Master -->|policies and tasks| Slave1
  Master -->|policies and tasks| Slave2
  Slave1 -->|reporting data| Master
  Slave2 -->|reporting data| Master
```

A slave server acts as a single (stand-alone) instance of SafeSquid, managing network computers. Furthermore, the slave server receives policies and tasks from its master server.

The master server does not have its own managed computers, but it indirectly manages those of its slave servers by assigning policies and tasks to them. Another purpose of the master server is to provide you with information on the network security status, by centralizing data from all managed servers. In this way, you can get centralized results from all the clients of the slave servers in a single report.

## Prerequisites
SafeSquid should be installed and activated using same product activation key on all the machines (master as well as slave)

## Master Slave configuration
## [Access the SafeSquid User Interface](/docs/SafeSquid%20SWG/Configuration%20Portal)
## Configuration on Slave Server
## Go to Support
![clicking on support in safesquid interface in top right corner ](/img/How_To/Master_Slave_configuration/image1.webp)

## Go to Startup params
![clicking on start up params](/img/How_To/Master_Slave_configuration/image2.webp)

![clicking on edit button](/img/How_To/Master_Slave_configuration/image3.webp)

![entering the master IP address](/img/How_To/Master_Slave_configuration/image4.webp)

![entering the port of master server](/img/How_To/Master_Slave_configuration/image5.webp)

![clicking on submit button](/img/How_To/Master_Slave_configuration/image6.webp)

![clicking on restart button](/img/How_To/Master_Slave_configuration/image7.webp)

![clicking on yes for backup current configuration to cloud](/img/How_To/Master_Slave_configuration/image8.webp)

## Configuration on Master Server if authentication is Enabled
## Go to Access Restriction under Application Setup

![Going to Access Restriction under Application Setup](/img/How_To/Master_Slave_configuration/image9.webp)

![If authentication is enabled on master server you have to configure policies as shown on master server](/img/How_To/Master_Slave_configuration/image9.webp)

## Go to Allow list
![going to allow list tab in access restrictions](/img/How_To/Master_Slave_configuration/image10.webp)

![enabling the policy as true](/img/How_To/Master_Slave_configuration/image11.webp)

![enabling the policy as true for giving access to slave server](/img/How_To/Master_Slave_configuration/image12.webp)

![clicking on save to save the policy](/img/How_To/Master_Slave_configuration/image13.webp)

![policy saved](/img/How_To/Master_Slave_configuration/image14.webp)

## Verify the synchronization of defined sections on Slave server
![Verifying the synchronization of defined sections on Slave server](/img/How_To/Master_Slave_configuration/image15.webp)

## Solution Verification

- **Interface Checks**: On the slave, open [Configuration Portal](/docs/SafeSquid%20SWG/Configuration%20Portal) and confirm Support → Startup params show the master IP and port. On the master, confirm Access Restriction → Allow list includes the slave and policies are enabled.
- **Log Analysis**: Check slave logs for successful sync events; config and policy updates from master should appear after changes on the master.
- **Performance Validation**: Make a configuration change on the master and confirm it propagates to the slave; verify centralized [Reporting](/docs/Audit%20&%20Forensics/Reporting%20Module) shows data from all slaves.

**Related**: [Configuration Sync](02-Configuration%20Sync.md), [Configuration Portal](/docs/SafeSquid%20SWG/Configuration%20Portal), [Reporting Module](/docs/Audit%20&%20Forensics/Reporting%20Module), [Troubleshooting](/docs/Troubleshooting/main)
