---
title: Activate Your License
description: Upload your activation key to SafeSquid and verify license activation.
keywords:
  - SafeSquid license activation
  - SafeSquid activation key
  - SafeSquid licensing
---



# Activate Your License

## Problems activation resolves

Without activation, teams cannot use licensed update feeds and commercial controls, and cannot prove license status during audits.

## Benefits of completing activation

- Enable licensed capabilities tied to your key tier
- Receive update feeds required for ongoing protection workflows
- Capture auditable license status in the interface

## Call to action

Complete the readiness checks, run the activation steps, and confirm status in **Support → Activation Details**.

An unactivated SafeSquid instance operates with limited features. Activation ties your key to this instance and unlocks your chosen tier (Free or Commercial), enabling full update feeds and commercial features where applicable.

## Key Benefits

- **Unlock commercial features** - threat intelligence, URL categorization database, 365-day DR backup, and email support (see table below).
- **Receive updates** - subscription and malware definition feeds require successful activation.
- **Prove licensing for audits** - activation status is visible in the SafeSquid interface for compliance evidence.

SafeSquid offers two licensing tiers:

|  | Free | Commercial |
| -- | :--: | :--: |
| Core proxy and filtering | ✅ | ✅ |
| SSL inspection | ✅ | ✅ |
| Custom policies and profiles | ✅ | ✅ |
| Real-time threat intelligence | ❌ | ✅ |
| URL categorization database | ❌ | ✅ |
| DR backup (365 days) | ❌ | ✅ |
| Email support | ❌ | ✅ |

The free license has no time limit. You can upgrade to commercial at any time through the [Self-Service Portal](https://key.safesquid.com).



## Readiness Checklist

Your SafeSquid server needs outbound access to these endpoints. Ensure your firewall allows the traffic.

**Required for activation**

| Host              | Port | Purpose            |
| ----------------- | ---- | ------------------ |
| api.safesquid.net | 443  | License activation |

**Required for ongoing updates** *(not needed for initial activation)*

| Host                      | Port | Purpose                           |
| ------------------------- | ---- | --------------------------------- |
| swgupdates2.safesquid.net | 443  | Subscription, malware definitions |
| swgupdates.safesquid.net  | 80   | Seqrite updates                   |
| sslupdates.safesquid.com  | 443  | SSL certificate updates           |
| category.safesquid.net    | 443  | Category DB updates               |
| download.quickheal.com    | 80   | Virus signature updates           |

**URL Categorization Engines** *(commercial license)*

| Host                     | Port | Path                                 |
| ------------------------ | ---- | ------------------------------------ |
| prourl.itsecure.co.in    | 8080 | /URLCategorizerService/URLCategorize |
| encurl.itsecure.co.in    | 8080 | /URLCategorizerService/URLCategorize |
| klassify.itsecure.co.in  | 8080 | /URLCategorizerService/URLCategorize |
| prourl.itonlinesecure.in | 8080 | /URLCategorizerService/URLCategorize |
| encurl.itonlinesecure.in | 8080 | /URLCategorizerService/URLCategorize |



## Activation Steps

1. **Configure the browser** to use SafeSquid as the HTTP proxy (SafeSquid IP, port 8080). See [Connect Your Client](/Connect_Your_Client) if the browser is not yet configured.

2. **Open the SafeSquid interface** by navigating to [http://safesquid.cfg/](http://safesquid.cfg/) in your browser.

   :::note
   `safesquid.cfg` is a special hostname resolved by SafeSquid itself — it only works when your browser is already configured to use SafeSquid as the proxy. It is not a DNS name. If the page does not load, confirm your browser proxy settings point to the SafeSquid IP on port 8080.
   :::

   When accessing for the first time, the interface prompts for upload of the activation key.

   ![Upload activation key prompt](/images/License_Activation/image13.webp)
   *Initial activation prompt in the SafeSquid interface*

3. **Select the activation key file** and click **Upload**.

   ![Select and upload key](/images/License_Activation/image14.webp)
   *Key upload dialog*

4. **Click Restart** to apply the license.

   ![Restart SafeSquid](/images/License_Activation/image15.webp)
   *Apply changes and restart notice*

5. **Verify activation.** After the page reloads, go to **Support** in the menu.

   ![Support menu](/images/License_Activation/image17.webp)
   *Support and diagnostics menu*

6. **Confirm activation details.** Ensure the **Activation Details** section shows your product type, expiry (if applicable), and subscription status.

   ![Activation details](/images/License_Activation/image18.webp)
   *Subscription and activation status display*

:::tip
**Proxy Cluster Sync**
To synchronize SSL certificates and configuration across a proxy cluster, upload the same activation key on every SafeSquid instance.
:::

:::note
**Verification**
After activation and restart, **Support** → **Activation Details** shows your product type, status, and expiry. Use this screen for compliance evidence that the gateway is correctly licensed.
:::

## Troubleshooting

<Tabs>
  <Tab title="Key Not Detected">

**Symptom:** After uploading, the interface shows "Failed to set Subscription details."

**Cause:** The activation key file is missing or misnamed.

**Fix:**

1. Verify the key file exists:

   ```bash
   ls -lrt /usr/local/safesquid/security/
   ```

   Look for a file named `activation_key`.

2. If missing, re-upload the key through the interface.

3. Restart SafeSquid:

   ```bash
   /etc/init.d/safesquid stop
   /etc/init.d/safesquid start
   ```

  </Tab>

  <Tab title="Server Unreachable">

**Symptom:** After uploading the key, the browser shows "proxy server refusing connections."

**Cause:** SafeSquid cannot reach the subscription server.

**Fix:**

1. Test connectivity:

   ```bash
   ping swgupdates2.safesquid.net
   nslookup swgupdates2.safesquid.net
   ```

2. If DNS or connectivity fails, check firewall rules against the endpoint tables above.

3. Restart after fixing:

   ```bash
   /etc/init.d/safesquid start
   ```

  </Tab>

  <Tab title="Service Not Restarted">

**Symptom:** Subscription details remain empty after uploading the key, or the browser shows the proxy is refusing connections.

**Cause:** SafeSquid was not restarted after the key upload.

**Fix:**

1. If Monit is configured, it should restart SafeSquid automatically. Otherwise, restart manually:

   ```bash
   /etc/init.d/safesquid stop
   /etc/init.d/safesquid start
   ```

  </Tab>
  <Tab title="License Expired">

**Symptom:** SafeSquid displays "subscription expired" banner in the interface.

**Cause:** Commercial subscription has expired. Free licenses do not expire.

**What happens after expiration:**

- Core proxy and filtering continues to work
- Security update frequency reduces to free-tier schedule:
  - Anti-virus engine: weekly
  - Web categorization: weekly  
  - SSL security updates: weekly
  - Application/content signatures: monthly
- Commercial features (real-time threat intel, DR backup, email support) become unavailable

**Solutions:**

**Option 1: Renew Subscription**

1. Visit [key.safesquid.com](https://key.safesquid.com) and sign in
2. Go to **Manage Account** → **Renew Subscription**
3. After payment, download the updated activation key
4. Upload the new key in SafeSquid interface (same steps as initial activation)

**Option 2: Extend Conservation Period (3-day grace period)**

If you need time before renewing:

1. Visit [key.safesquid.com](https://key.safesquid.com) and sign in
2. Go to **Manage Account**  
3. Click **Extend Conservation Period** (adds 3 days to your subscription)  
4. The "expired" banner will disappear during the conservation period
5. Restart SafeSquid from the web interface for changes to take effect

![Extend Conservation Period](/images/License_Activation/image23.webp)  
*Extend Conservation Period button in the Self-Service Portal*

:::note
**Conservation Period Limits**
The conservation period can be extended multiple times, each extension adding 3 days. However, this is a temporary measure — renew your subscription for continued commercial feature access.
:::

  </Tab>

  <Tab title="Wrong License Tier">

**Symptom:** Activation succeeds but commercial features (URL categorization, threat intel) don't work.

**Cause:** Free license uploaded instead of commercial, or key expired.

**Fix:**

1. Check **Activation Details** in the SafeSquid interface:
   - **Product Type** should show "Commercial" if you purchased a commercial license
   - **Expiry** should be in the future

2. If showing Free or expired:
   - Download the correct key from the [Self-Service Portal](https://key.safesquid.com)
   - Re-upload following the steps above

3. Contact support if you purchased commercial but still see Free tier.

  </Tab>
</Tabs>

## Verify activation with a 5-minute smoke test

Run these checks after activation to confirm SafeSquid is working end-to-end.

### 1. Service is running

SSH into the SafeSquid server:

```bash
# Check SafeSquid is listening on port 8080
netstat -lntp | grep 8080
```

**Expected:** A line showing SafeSquid listening on `0.0.0.0:8080`

```bash
# Check service status (systemd systems)
systemctl status safesquid
```

**Expected:** `Active: active (running)`

---

### 2. Configuration interface loads

From a browser configured to proxy through SafeSquid (port 8080), navigate to:

```
http://safesquid.cfg/
```

**Expected:** The SafeSquid configuration interface loads.

**Alternative (direct access before proxy is configured):**

```
https://SAFESQUID-SERVER-IP:8443/
```

---

### 3. License is active

In the SafeSquid interface, go to **Support** in the top menu and check **Activation Details**:

- **Product Type:** Shows your license tier (Free or Commercial)
- **Status:** Shows "active"

---

### 4. HTTP traffic flows through the proxy

From the proxied browser, visit `http://example.com`.

Then check the access log:

```bash
tail -20 /var/log/safesquid/access/extended.log
```

**Expected:** Log entries showing your client IP, URL, HTTP status, and timestamp.

---

### 5. HTTPS traffic flows through the proxy

Visit `https://www.google.com` from the proxied browser.

:::caution
**Certificate warnings are expected without SSL Inspection**

Until [SSL Inspection](/SSL_Inspection) is configured, HTTPS sites show certificate warnings. This is normal — SafeSquid is proxying the connection but not inspecting content. Click through and confirm the page loads.
:::

---

### 6. DNS resolution works

```bash
nslookup example.com 127.0.0.1
```

**Expected:** A valid IP address response. If DNS fails, check BIND9: `systemctl status bind9`.

---

### Quick troubleshooting

| Symptom | Likely cause | Fix |
|---------|-------------|-----|
| Port 8080 not listening | SafeSquid not started | `systemctl start safesquid` |
| `safesquid.cfg` not loading | Browser not using proxy | Set proxy to SafeSquid-IP:8080 in browser settings |
| Activation shows inactive | Key not uploaded or can't reach `api.safesquid.net` | Re-upload key; check firewall allows port 443 outbound |
| No log entries for traffic | Traffic not routing through proxy | Verify browser proxy settings |
| DNS resolution fails | BIND9 not running | `systemctl restart bind9`; check `/var/log/syslog` |

See [Troubleshooting](/Troubleshooting) for detailed diagnosis.

---

✅ SafeSquid is installed and running  
✅ License is activated  
✅ HTTP traffic flows through the proxy  
✅ HTTPS traffic flows through the proxy  
✅ DNS is working  
✅ Ready to configure policies

## Next steps

Configure web security policies in this order. Items 1–3 establish baseline control. Items 4–7 extend detection and prevention.

1. **[SSL Inspection](/SSL_Inspection)** — Most web traffic is encrypted. Enable SSL Inspection so SafeSquid can see and filter HTTPS content.

2. **[Authentication](/Authentication)** — Tie policy to directory users and groups, and use network signatures where devices cannot log in.

3. **[Integrated DNS Security](/DNS_Security)** — Block malicious DNS queries, enforce policy-aware resolution, and mitigate DNS tunneling.

4. **[Profiling Engine](/Profiling_Engine)** — Profile requests by identity, application, content, and time so policies apply to the right traffic.

5. **[Access Restriction](/Access_Restriction)** — Define access control rules by URL category, application, user, and time window.

6. **[Malware Scanners](/Malware_Scanners)** — Scan downloads and content streams for malicious payloads.

7. **[Data Leakage Prevention](/Data_Leakage_Prevention)** — Prevent sensitive data exfiltration in uploads, downloads, and web posts.

### Moving to production

When moving beyond the pilot:

- Push client proxy settings to all endpoints using PAC, GPO, or MDM
- Deploy HA topology based on your continuity requirements
- Configure reporting, forensics, and retention for audit and incident response
- Integrate IAM, SIEM, and threat intelligence workflows
