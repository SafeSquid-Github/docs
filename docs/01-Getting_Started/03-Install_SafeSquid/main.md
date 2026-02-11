---
title: Install SafeSquid
slug: /Getting_Started/Install_SafeSquid
description: Choose an installation method for SafeSquid — Appliance Builder (SAB), cloud deployment, or Linux TAR package.
keywords:
  - SafeSquid installation
  - SafeSquid Appliance Builder
  - SAB
  - SafeSquid cloud deployment
  - SafeSquid TAR install
---


# Choose SAB, cloud, or Linux TAR installation

Three installation methods are available: Appliance Builder (SAB) for full OS plus SafeSquid, cloud deployment for cloud VMs, and Linux TAR for existing servers. Choose based on environment. After installation, activate the license and connect clients.



## Installation method guides

### [SafeSquid Appliance Builder](/docs/Getting_Started/Install_SafeSquid/SafeSquid_Appliance_Builder/)
New deployments on bare metal or VM need a turnkey image with OS, SafeSquid, and supporting services. SAB produces a security-hardened image with SafeSquid, Monit, BIND9, and disk layout. Fastest path for new deployments. Follow this document to build and deploy the appliance.

### [Cloud Deployment](/docs/Getting_Started/Install_SafeSquid/Cloud_Deployment/)
AWS, Azure, DigitalOcean, or private cloud require SafeSquid on a cloud VM. Cloud Deployment covers image or cloud-init based deployment. SafeSquid runs in the cloud with the same policy and inspection capabilities. Use this document to deploy SafeSquid in the cloud.

### [Linux Server](/docs/Getting_Started/Install_SafeSquid/Linux_Server/)
Existing Linux servers need SafeSquid binary only without a full appliance. Linux Server describes installing from the TAR package on an existing distro. Administrators configure OS and services separately. Follow this document when adding SafeSquid to an existing Linux host.

