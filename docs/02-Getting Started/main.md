---
title: Getting Started with SafeSquid Secure Web Gateway
description: Learn how to get started with SafeSquid Secure Web Gateway, the world's most advanced HTTP Proxy Server for Application Layer Security.
keywords:
  - SafeSquid
  - Secure Web Gateway
  - HTTP Proxy Server
  - Application Layer Security
  - Zero-Trust Web Security
---

## Welcome to SafeSquid!

SafeSquid is the world's most advanced HTTP Proxy Server, specifically designed for Application Layer Security.

The purpose-oriented architecture promises scalable performance while ensuring comprehensive mitigation of Layer 7 threats.

SafeSquid-based Secure Web Gateway (SWG) shields enterprises from advanced cyber‑threats by delivering robust perimeter-level application layer security.

Learn more [about SafeSquid SWG!](/docs/01-About%20SafeSquid%20SWG/main.md)

## Typical High-Level Solution Architecture

![Solution Architecture](/img/Getting-Started/Getting_Started_with_SafeSquid_Secure_Web_Gateway/image1.webp)

In a typical organization setting, the amalgamation of [SafeSquid Application Eco-system](/docs/05-Architecture/Application_Eco-System.md) constitutes the complete SWG solution.

## Deployment Provisioning

Engineered for adaptability, SafeSquid is a fully software-based open-architecture solution supporting non-proprietary hardware, platform-agnostic deployment, and seamless integration with all network solutions.

SafeSquid SWG is compatible with standard Intel architecture server-class hardware, operable as a virtual guest on varied
virtualization platforms, or configurable in private cloud settings.

To cater to your organisation's web traffic load, estimate the Hardware Requirements optimal to deploy SafeSquid.


| **CPU (cores)** | **RAM (GB)** | **HDD**  | **Max Concurrent Connections** | **Approx Users** |
|----------------|-------------|---------|------------------------------|-----------------|
| 4             | 4           | 160GB   | 40                           | 10              |
| 4             | 8           | 500GB   | 100                          | 25              |
| 4             | 16          | 1TB     | 500                          | 150             |
| 8             | 16          | 2TB     | 1000                         | 350             |
| 8             | 32          | 4TB     | 1500                         | 600             |
| 16            | 32          | 4TB     | 2000                         | 1000            |
| 16            | 64          | 8TB     | 3000                         | 1500            |

  Add 2 CPU cores and 4GB RAM per 100 concurrent connections
  Use processors with "AES-NI"

The above-specified Minimal Hardware should enable you to do a functional setup of SafeSquid.

However, provisioning it for active servicing of a platform with at least 8 CPU cores, and 8GB RAM should be a great starting point.

SafeSquid is
[SMP-aware](https://en.wikipedia.org/wiki/Symmetric_multiprocessing), enabling seamless scale-up by increasing CPU cores, RAM, and NIC.

As a thumb rule for server sizing add 2 CPU cores and 4GB RAM per 100 concurrent connections.

If you intend to use SafeSquid's HTTPS Inspection feature, using processors with "AES-NI" is recommended.

Refer to [How to find out AES-NI (Advanced Encryption) Enabled on Linux System](https://www.cyberciti.biz/faq/how-to-find-out-aes-ni-advanced-encryption-enabled-on-linux-system/) to get more details on ASE-NI.

SafeSquid is cluster-ready.

You may thus scale out by adding nodes to your cluster.

A clustered setup would give you the advantage of both load-balanced throughput as well as high-availability service.

## FAQs

**What is the minimal hardware required for SafeSquid?**

RAM: 4 GB

CPU: 2 Core

HDD: 160 GB (Depending on the size of logs and database you want to store)

See the Hardware Requirements here - Hardware requirements

**What is SafeSquid Appliance Builder?**

SafeSquid Appliance Builder (SAB) is the most recommended method for setting up your secure web gateway. SAB is a customized distro of Ubuntu Linux. It enables you to quickly setup your secure web gateway on a standard Intel server hardware, or as a virtual appliance on any virtualization platform like VMware or Hyper-V.

SAB automatically installs and configures all dependency libraries, and services.

For more details follow [SAB installation LINK](/docs/03-Installation/02-On-Premise/main.md)
