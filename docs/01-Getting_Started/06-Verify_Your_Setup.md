---
title: Verify Your Setup
description: Quick smoke tests to confirm SafeSquid Secure Web Gateway is installed, activated, and proxying traffic correctly.
keywords:
  - SafeSquid verification
  - SafeSquid smoke test
  - SafeSquid health check
---

# Verify Your Setup

**Goal:** Confirm SafeSquid is installed, licensed, and proxying traffic so you can proceed to policy configuration with confidence.

## Prerequisites

:::info Before Running These Tests

- SafeSquid is installed and the license is activated (see [Activate Your License](/docs/Getting_Started/Activate/))
- At least one client is configured to use the proxy (see [Connect Your Client](/docs/Getting_Started/Connect_Your_Client/main/))
- You have SSH access to the SafeSquid server

:::

## 5-Minute Verification Checklist

Run these checks to confirm SafeSquid is working end-to-end. Each test takes under a minute.

### 1. Service Is Running

SSH into the SafeSquid server and check:

```bash
# Check SafeSquid is listening on port 8080
netstat -lntp | grep 8080
```

**Expected:** A line showing SafeSquid listening on `0.0.0.0:8080`

```bash
# Confirm the process is active
pidof safesquid
```

**Expected:** One or more process IDs

```bash
# Check service status (systemd systems)
systemctl status safesquid
```

**Expected:** `Active: active (running)`

---

### 2. Configuration Interface Loads

From a browser configured to proxy through SafeSquid (port 8080), navigate to:

```
http://safesquid.cfg/
```

**Expected:** The SafeSquid configuration interface loads

**Alternative (direct access):**
If proxy isn't configured yet, try:

```
https://SAFESQUID-SERVER-IP:8443/
```

:::tip Browser Not Configured?
See [Explicit Proxy](/docs/Getting_Started/Connect_Your_Client/Explicit_Proxy/) for a 2-minute setup.
:::

---

### 3. License Is Active

In the SafeSquid interface, go to **Support** in the top menu.

Check the **Activation Details** section:
- **Product Type:** Shows your license tier (Free or Commercial)
- **Status:** Shows "active"
- **Expiry:** In the future (commercial) or shows no expiry (free)

**If Status shows "inactive":**
- Re-upload your activation key ([Activate Your License](/docs/Getting_Started/Activate/))
- Check firewall allows outbound HTTPS to `api.safesquid.net`

---

### 4. HTTP Traffic Flows Through the Proxy

From the proxied browser, visit an HTTP site:

```
http://example.com
```

**Expected:** Page loads normally

Then check the SafeSquid access log:

```bash
# On SafeSquid server:
tail -20 /var/log/safesquid/access/extended/extended.log
```

**Expected:** Log entries showing:
- Your client IP
- URL: `example.com`
- HTTP status: `200` or `301`
- Timestamp

**If no log entries appear:**
- Browser isn't using the proxy
- Check browser proxy settings
- Try: `curl --proxy http://SAFESQUID-IP:8080 http://example.com`

---

### 5. HTTPS Traffic Flows Through the Proxy

From the proxied browser, visit an HTTPS site:

```
https://www.google.com
```

**What to expect:**

**If SSL Inspection is NOT enabled:**
- Page loads with **certificate warning** (expected)
- Click through the warning
- Page loads

**If SSL Inspection IS enabled:**
- Page loads normally, no warning
- Check certificate issuer: Should show SafeSquid CA

**Check the log:**

```bash
tail -20 /var/log/safesquid/access/extended/extended.log
```

**Expected:** Entry for `www.google.com` with status `200`

:::caution Certificate Warnings Are Normal (Without SSL Inspection)

Until [SSL Inspection](/docs/SSL_Inspection/main/) is configured, HTTPS sites will show certificate warnings. This is expected behavior—SafeSquid is proxying the connection but not inspecting it.

:::

---

### 6. DNS Resolution Works

```bash
# Test DNS from the SafeSquid server
nslookup example.com 127.0.0.1
```

**Expected:** A valid IP address response (e.g., `93.184.216.34`)

**If DNS fails:**
- BIND9 not running: `systemctl status bind9`
- Check BIND9 config: `/etc/bind/named.conf`
- See [BIND9 Configuration](/docs/SafeSquid_SWG/Supporting_Services/Bind/)

---

## Quick Troubleshooting

| **Symptom** | **Likely Cause** | **Fix** |
| ----------- | ---------------- | ------- |
| Port 8080 not listening | SafeSquid not started | `systemctl start safesquid` or `/etc/init.d/safesquid start` |
| safesquid.cfg not loading | Browser not using proxy | Set proxy: SafeSquid-IP:8080 in browser settings |
| Activation shows inactive | Key not uploaded or can't reach `api.safesquid.net` | Re-upload key; check firewall allows port 443 outbound |
| No log entries for traffic | Traffic not routing through proxy | Verify browser proxy settings: `chrome://net-internals/#proxy` (Chrome) or `about:networking` (Firefox) |
| DNS resolution fails | BIND9 not running | `systemctl restart bind9`; check `/var/log/syslog` for errors |
| HTTPS sites don't load at all | Firewall blocking, or SafeSquid crashed | Check: `systemctl status safesquid`; Check firewall: `iptables -L` |

:::info Detailed Troubleshooting
For detailed troubleshooting, see [Troubleshooting](/docs/Troubleshooting/main/).
:::

---

## Verification Complete ✅

**If all 6 checks passed:**

✅ SafeSquid is installed and running  
✅ License is activated  
✅ HTTP traffic flows through the proxy  
✅ HTTPS traffic flows through the proxy  
✅ DNS is working  
✅ You're ready to configure policies

---

## Next Steps

1. **[SSL Inspection](/docs/SSL_Inspection/main/)** — Enable HTTPS decryption so SafeSquid can inspect and filter encrypted traffic (required for policy enforcement on HTTPS sites)

2. **[Authentication](/docs/Authentication/main/)** — Integrate with Active Directory or LDAP for user-aware policies

3. **[Access Restriction](/docs/Access_Restriction/main/)** — Set up URL filtering, category blocking, and time-based policies

4. **[Troubleshooting](/docs/Troubleshooting/main/)** — Bookmark this for when issues arise (logs, diagnostics, common fixes)

---

**Production Readiness Checklist:**

Before going live with all users:

- [ ] SSL Inspection configured and CA deployed to all endpoints
- [ ] Authentication configured (AD/LDAP)
- [ ] Basic access policies defined (block malware, adult content, etc.)
- [ ] High availability configured ([Proxy Clustering](/docs/Proxy_Clustering/main/)) for critical deployments
- [ ] Monitoring and alerting set up
- [ ] Support process defined for users
