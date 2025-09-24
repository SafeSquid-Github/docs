---
title: Troubleshooting Installation Issues  
description: A detailed troubleshooting guide for resolving common SafeSquid installation problems such as network misconfiguration, ISO failures, and system requirements.  
keywords:  
- safesquid installation troubleshooting  
- safesquid installer errors  
- safesquid sab iso failed  
- safesquid network configuration  
- safesquid bad archive mirror  
---

A comprehensive guide for troubleshooting common issues encountered during the installation of SafeSquid.

It is designed to help users navigate through potential problems and find effective solutions.

## Before Installation
Common issues in this stage include system compatibility, creating a bootable USB or attaching the appropriate .iso file, and correctly setting up the BIOS/UEFI settings.

Solutions involve checking system requirements, verifying the integrity of the installation media, and ensuring correct boot order.

## During Installation
Issues during installation can range from partitioning errors, and network configuration problems, to software selection difficulties.

Resolutions may include checking disk space, reviewing network settings, and ensuring proper selection of software packages.

For network-related issues such as those mentioned below, you can use the installer console to identify the root cause of the issue and act based on it.

![using the installer console to identify the root cause of the issue and act based on them](/img/Troubleshooting/Troubleshooting_issues_during_installation_of_SafeSquid/image1.webp)

## Network Checks for Issue Identification
Network issues can significantly impact the installation and functionality of SafeSquid.

Administrators can perform various checks to identify and resolve network-related problems:

1.  **Network Configuration**: Review and modify network settings using the `ip` commands.
![Reviewing and modifying network settings using the `ip` commands](/img/Troubleshooting/Troubleshooting_issues_during_installation_of_SafeSquid/image2.webp)

And route command to check your default gateway and route.

![route command to check your default gateway and route.](/img/Troubleshooting/Troubleshooting_issues_during_installation_of_SafeSquid/image3.webp)

Ensure correct IP addressing and gateway configuration.

2.  **DNS Resolution and Ping check**: Since busybox is a minimal version of Linux and nslookup or dig command is not present, we can check name resolution using the ping command and check connectivity to external servers.

For example, `ping google.com` can confirm DNS resolution and internet connectivity.

![pinging google.com` to confirm DNS resolution and internet connectivity](/img/Troubleshooting/Troubleshooting_issues_during_installation_of_SafeSquid/image4.webp)

3.  **Firewall Rules**: check your network firewall rules for possible port blocking.

By performing these network checks and using the available networking commands, administrators can pinpoint network-related problems and take corrective actions.

Once you have identified and solved your network problem, come back to the installer tty using ctrl + alt + F1 and select continue.

![coming back to the installer tty using ctrl + alt + F1 and selecting continue ](/img/Troubleshooting/Troubleshooting_issues_during_installation_of_SafeSquid/image5.webp)

Select continue again.

![selecting continue again](/img/Troubleshooting/Troubleshooting_issues_during_installation_of_SafeSquid/image6.webp)

Select the "Download debconf preconfiguration file" step.

![selecting "Download debconf preconfiguration file" step.](/img/Troubleshooting/Troubleshooting_issues_during_installation_of_SafeSquid/image7.webp)

Follow the steps of standard installation and continue your installation process.

## Conclusion
This guide aims to cover the most common issues encountered during the SafeSquid installation process. For additional assistance, users are encouraged to consult the SafeSquid forums and community resources.


## ISO Installation Failure
### Issues
When you misconfigure any of your DNS IP, Gateway, or the NIC card, you will face issues such as "**Failed to retrieve the pre-configuration file**".

The IP address that you assigned for the SafeSquid proxy if blocked because of the firewall, will face the issue of a "**Bad archive mirror**". This is typically an error with the server failing to connect to the Internet.

:::note
If you face any error while installing SafeSquid Appliance Builder (SAB-ISO), you will get debugging logs information by pressing **ALT+F4**. To return to the previous screen press **ALT+F1**.
:::

![Bad Archive Mirror Template](/img/Troubleshooting/ISO_installation_failure/image1.webp)

![Failed to retrieve the pre-configuration file error template](/img/Troubleshooting/ISO_installation_failure/image2.webp)
