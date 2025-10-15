---
title: Upgrade SafeSquid
description: Learn how to upgrade SafeSquid Secure Web Gateway — including OS-level upgrades and SafeSquid version upgrades for enhanced stability, security, and performance.
keywords:
  - SafeSquid
  - Secure Web Gateway
  - HTTP Proxy Server
  - Application Layer Security
  - SafeSquid Upgrade
  - OS Upgrade
  - Version Upgrade
  - SafeSquid Update
---

## Upgrade SafeSquid Secure Web Gateway

You can upgrade your SafeSquid Secure Web Gateway through two different mechanisms depending on your system and version requirements.

---

### [OS Upgrade](/docs/20-Upgrade%20SafeSquid/01-OS%20Upgrade/main.md)

An **OS Upgrade** updates the underlying operating system on which SafeSquid runs.  
This is essential when your base OS (e.g., Ubuntu) reaches end-of-life or lacks necessary security patches, dependencies, or kernel features.

**Overview:**  
Upgrading the OS ensures your SafeSquid deployment remains compliant, secure, and compatible with the latest packages and libraries. During this process, you retain your SafeSquid configurations and restore them after the system upgrade.  
This option is recommended if your system environment or hardware platform needs modernization.

---

### [Version Upgrade](/docs/20-Upgrade%20SafeSquid/02-Version%20Upgrade/main.md)

A **Version Upgrade** focuses on updating the SafeSquid software itself while keeping your OS environment unchanged.  
This ensures access to the latest features, bug fixes, and security enhancements within the SafeSquid application.

**Overview:**  
Version upgrades are simpler and carry less risk than OS upgrades. You only need to download the latest SafeSquid package and follow the version upgrade guide to replace your existing binaries and configuration.  
It’s the ideal option for keeping your deployment current without altering the system environment.

---

### Choosing the Right Upgrade Path

| Scenario | Recommended Upgrade |
|-----------|--------------------|
| Your OS version is outdated, unsupported, or incompatible with new dependencies. | **OS Upgrade** |
| Your SafeSquid version is old but the OS is stable and current. | **Version Upgrade** |
| You plan a full system refresh with both OS and SafeSquid updates. | Perform **OS Upgrade first**, then **Version Upgrade** |

---

### Additional Resources

- [OS Upgrade Guide →](/docs/20-Upgrade%20SafeSquid/01-OS%20Upgrade/main.md)  
- [Version Upgrade Guide →](/docs/20-Upgrade%20SafeSquid/02-Version%20Upgrade/main.md)

For comprehensive installation instructions, see the [Installation Section](/docs/03-Installation/main.md).
