---
title: Upgrade SafeSquid
description: "Upgrade SafeSquid SWG: OS-level and version upgrades for stability, security, and performance."
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

## Two upgrade paths: OS or version

Administrators can upgrade SafeSquid SWG through two mechanisms depending on system and version requirements.

---

### [OS Upgrade](/docs/Upgrade%20SafeSquid/OS%20Upgrade/main)

An **OS Upgrade** updates the underlying operating system on which SafeSquid runs.
This is essential when the base OS (e.g., Ubuntu) reaches end-of-life or lacks necessary security patches, dependencies, or kernel features.

**Overview:**
Upgrading the OS ensures your SafeSquid deployment remains compliant, secure, and compatible with the latest packages and libraries. During this process, SafeSquid configurations are retained and restore them after the system upgrade.
This option is recommended if your system environment or hardware platform needs modernization.

---

### [Version Upgrade](/docs/Upgrade%20SafeSquid/Version%20Upgrade/main)

A **Version Upgrade** focuses on updating the SafeSquid software itself while keeping the OS environment unchanged.
This ensures access to the latest features, bug fixes, and security enhancements within the SafeSquid application.

**Overview:**
Version upgrades are simpler and carry less risk than OS upgrades. Download the latest SafeSquid package and follow the version upgrade guide to replace existing binaries and configuration.
It’s the ideal option for keeping your deployment current without altering the system environment.

---

### Choosing the right upgrade path

| Scenario | Recommended Upgrade |
|-----------|--------------------|
| The OS version is outdated, unsupported, or incompatible with new dependencies. | **OS Upgrade** |
| The SafeSquid version is old but the OS is stable and current. | **Version Upgrade** |
| You plan a full system refresh with both OS and SafeSquid updates. | Perform **OS Upgrade first**, then **Version Upgrade** |

---

### Additional resources

- [OS Upgrade Guide →](/docs/Upgrade%20SafeSquid/OS%20Upgrade/main)
- [Version Upgrade Guide →](/docs/Upgrade%20SafeSquid/Version%20Upgrade/main)

For installation instructions, see the [Installation Section](/docs/Getting%20Started/Installation%20Guide/main).
