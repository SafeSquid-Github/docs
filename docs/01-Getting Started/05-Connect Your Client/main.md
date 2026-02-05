---
title: Connect Your Client
description: Configure browsers and applications to use SafeSquid as an HTTP proxy — from quick single-browser setup to enterprise-wide deployment.
keywords:
  - SafeSquid proxy setup
  - browser proxy configuration
  - explicit proxy
  - client configuration
  - PAC file
  - enterprise proxy deployment
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connect Your Client

Route traffic through SafeSquid by configuring your browser or deploying proxy settings across your environment. You need the **SafeSquid server IP address** and port **8080**.

## Quick Setup (Single Browser)

The fastest way to verify your SWG is working.

<details>
<summary>📝 Pre-Connection Checklist</summary>

Before you start, ensure:
- [ ] SafeSquid server is powered on and reachable (`ping <server-ip>`)
- [ ] SafeSquid service is running (`netstat -lntp | grep 8080`)
- [ ] Firewall allows port 8080 between this machine and the server
- [ ] You have the `administrator` / `safesquid` credentials ready

</details>

<Tabs>
  <TabItem value="chrome" label="Chrome / Edge (Windows)" default>

1. **Open Windows Proxy Settings.** Go to **Settings → Network & Internet → Proxy**.
2. **Enable "Use a proxy server".**
3. **Enter details.** Specify your SafeSquid server IP address and port `8080`.
4. **Click Save.**

Alternatively: **Control Panel → Internet Options → Connections → LAN Settings → Use a proxy server**.

  </TabItem>

  <TabItem value="firefox" label="Firefox">

1. **Open Firefox Settings.** Go to **Settings → General**, scroll to **Network Settings**, and click **Settings**.
2. **Select "Manual proxy configuration".**
3. **Enter details.** Input your SafeSquid IP in the **HTTP Proxy** field and `8080` as the port.
4. **Enable HTTPS.** Check **Also use this proxy for HTTPS**.
5. **Click OK.**

  </TabItem>
</Tabs>

### Verify

Open your browser and navigate to [http://safesquid.cfg/](http://safesquid.cfg/).

If you see the SafeSquid interface, your SWG is live.

:::info Quick Reference
- **Proxy address:** `<your-safesquid-server-ip>`
- **Port:** `8080`
- **Interface:** [http://safesquid.cfg/](http://safesquid.cfg/)
- **Server login:** `administrator` / `safesquid` (change on first login)
:::

### Not Working?

- **Can't reach safesquid.cfg?** — Check the proxy IP and port are correct, and that SafeSquid is running: `netstat -lntp | grep 8080`
- **Connection refused?** — Your firewall may be blocking port 8080 between the client and server. Verify the rule allows it.
- **Timeout?** — Confirm the client machine can reach the SafeSquid server IP: `ping <server-ip>`

## All Configuration Methods

| Method | Scope | Best For |
|--------|-------|----------|
| **[Explicit Proxy](/docs/Getting%20Started/Connect%20Your%20Client/Explicit%20Proxy)** | Single browser | Testing, individual users, controlled environments |
| **[PAC File](/docs/Getting%20Started/Connect%20Your%20Client/PAC%20File)** | All browsers on a machine | Automated proxy selection, load balancing, failover |
| **[System-Wide Proxy](/docs/Getting%20Started/Connect%20Your%20Client/System-Wide%20Proxy)** | All applications on a machine | Universal coverage including non-browser apps |
| **[Enterprise Deployment](/docs/Getting%20Started/Connect%20Your%20Client/Enterprise%20Deployment)** | Entire organisation | GPO, Active Directory, Puppet, Ansible at scale |
| **[Application-Specific](/docs/Getting%20Started/Connect%20Your%20Client/Application-Specific%20Configuration)** | Individual apps | Git, npm, Docker, email clients, CLI tools |

:::tip
Start with **Explicit Proxy** for quick verification, then move to **PAC File** or **Enterprise Deployment** for production rollout.
:::
