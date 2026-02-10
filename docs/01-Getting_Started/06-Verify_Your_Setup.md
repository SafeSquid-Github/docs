---
title: Verify Your Setup
description: Quick smoke tests to confirm SafeSquid Secure Web Gateway is installed, activated, and proxying traffic correctly.
keywords:
  - SafeSquid verification
  - SafeSquid smoke test
  - SafeSquid health check
---
<section class="section-strip">


# Verify Your Setup

Run these checks to confirm SafeSquid is working end-to-end. Each test takes under a minute.

</section>

<section class="section-strip">

## 1. Service Is Running

SSH into the SafeSquid server and check:

```bash title="Confirm SafeSquid is listening"
netstat -lntp | grep 8080
```

Expected: a line showing SafeSquid listening on port **8080**.

```bash title="Confirm the process is active"
pidof safesquid
```

Expected: one or more process IDs.

</section>

<section class="section-strip">

## 2. Configuration Interface Loads

From a browser configured to proxy through SafeSquid (port 8080), navigate to:

```
http://safesquid.cfg/
```

Expected: the SafeSquid configuration interface loads.

:::tip
If a browser is not yet configured, see [Connect Your First Client](/docs/Getting_Started/Connect_Your_Client/main/).
:::

</section>

<section class="section-strip">

## 3. License Is Active

In the SafeSquid interface, go to **Support** in the top menu.

Check the **Activation Details** section:
- **Product Type** shows your license tier (Free or Commercial)
- **Status** shows active
- **Expiry** is in the future (commercial) or shows no expiry (free)

</section>

<section class="section-strip">

## 4. Traffic Flows Through the Proxy

From the proxied browser, visit any external site (e.g., `https://example.com`).

Then check the SafeSquid access log:

```bash title="Tail the access log"
tail -20 /var/log/safesquid/access/extended/extended.log
```

Expected: log entries showing the request to `example.com`.

</section>

<section class="section-strip">

## 5. DNS Resolution Works

```bash title="Test DNS from the SafeSquid server"
nslookup example.com 127.0.0.1
```

Expected: a valid IP address response. If this fails, check BIND9 configuration.

</section>

<section class="section-strip">

## Troubleshooting

| Symptom | Likely Cause | Fix |
| ------- | ------------ | --- |
| Port 8080 not listening | SafeSquid not started | `/etc/init.d/safesquid start` |
| safesquid.cfg not loading | Browser not configured to use proxy | Set proxy to SafeSquid IP:8080 |
| Activation shows inactive | Key not uploaded or server can't reach `api.safesquid.net` | Re-upload key; check firewall for port 443 outbound |
| No log entries for traffic | Traffic not routing through proxy | Verify browser proxy settings and test with `curl --proxy` |
| DNS resolution fails | BIND9 not running or misconfigured | `systemctl status bind9` and check `/etc/bind/` config |

:::info
For detailed troubleshooting, see [Troubleshooting](/docs/Troubleshooting/main/).
:::

</section>