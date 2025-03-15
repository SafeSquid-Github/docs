# Recommended Hardware Specifications for SafeSquid Secure Web Gateway Deployment

**Minimal Hardware**

**RAM:** 4 GB

**CPU:** 4 Core

**HDD:** 160 GB (Depending upon the number of logs and database you want to keep)

**Recommended Hardware**

The above-specified Minimal Hardware should enable you to do a functional setup of SafeSquid.

However, provisioning it for active servicing of a platform with at least 8 CPU cores, and 8GB RAM should be a great starting point.

SafeSquid is
[SMP-aware](https://en.wikipedia.org/wiki/Symmetric_multiprocessing), enabling seamless scale-up by increasing CPU cores, RAM, and NIC.

As a thumb rule for server sizing add 2 CPU cores and 4GB RAM per 100 concurrent connections.

If you intend to use SafeSquid\'s HTTPS Inspection feature, using processors with \"AES-NI" is recommended.

Refer to [How to find out AES-NI (Advanced Encryption) Enabled on Linux System](https://www.cyberciti.biz/faq/how-to-find-out-aes-ni-advanced-encryption-enabled-on-linux-system/) to get more details on ASE-NI.

SafeSquid is cluster-ready.

You may thus scale out by adding nodes to your cluster.

A clustered setup would give you the advantage of both load-balanced throughput as well as high-availability service.

**Suggested Hardware Sizing**

| **CPU (cores)** | **RAM (GB)** | **HDD**  | **Max Concurrent Connections** | **Approx Users** |
|----------------|-------------|---------|------------------------------|-----------------|
| 4             | 8           | 500GB   | 100                          | 25              |
| 4             | 16          | 1TB     | 500                          | 150             |
| 8             | 16          | 2TB     | 1000                         | 350             |
| 8             | 32          | 4TB     | 1500                         | 600             |
| 16            | 32          | 4TB     | 2000                         | 1000            |
| 16            | 64          | 8TB     | 3000                         | 1500            |

