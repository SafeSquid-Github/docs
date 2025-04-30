---
title: Installation
description: Learn how to get install SafeSquid Secure Web Gateway, the world's most advanced HTTP Proxy Server for Application Layer Security.
keywords:
  - SafeSquid
  - Secure Web Gateway
  - HTTP Proxy Server
  - Application Layer Security
  - Zero-Trust Web Security
  - Install SWG
  - Install SafeSquid

---

## Install SafeSquid Secure Web Gateway

You can setup your secure web gateway using different installation mechanisms based on your deployment plan.

### [SafeSquid Appliance Builder (Recommended)](/docs/03-Installation/02-On-Premise/main.md)

[SafeSquid Appliance Builder (SAB)](https://downloads.safesquid.com/appliance/safesquid.iso) is a security-enhanced Ubuntu Linux ISO, customised for SafeSquid installation on any physical or virtual hardware within 15 minutes. SAB automatically configures dependency libraries, services, and custom partitioning. On booting from the SAB ISO, Ubuntu is automatically
installed, and SafeSquid SWG is downloaded and deployed with all necessary dependency libraries, and services.

### [SafeSquid On Cloud](/docs/03-Installation/01-On%20Cloud/main.md)

With the rise of distributed workforces, backchanneling all traffic to an on-premise solution is not efficient. To setup SafeSquid SWG on your preferred Cloud PaaS platform or your private cloud infrastructure, use the SafeSquid cloud image or [cloud-init script](https://raw.githubusercontent.com/SafeSquid-Github/safesquid_cloud-init/main/safesquid_cloud-init.yaml).

### [Install using SafeSquid TAR file](/docs/03-Installation/03-Manual/main.md)

If you want to setup SafeSquid on already existing infrastructure or if you want to use another Operating System in the Linux family other than Ubuntu, you can [download the SafeSquid tarball](https://downloads.safesquid.com/appliance/binary/) and manually install it. You will need to partition the disks appropriately, fine-tune some of the features, and make some additional configurations to services used by SafeSquid, like [Monit](/docs/13-System%20Audit/Monit.md) and [BIND9](/docs/14-Performance%20Optimisation/01-Internalisae%20DNS/Bind.md).
