---
title: Prerequisites & Infrastructure Setup
description: Essential system configuration and infrastructure requirements for Active Directory and Kerberos SSO integration with SafeSquid.
keywords:
  - SafeSquid AD prerequisites
  - Kerberos infrastructure setup
  - DNSSEC bind9 configuration
  - Monit SafeSquid
  - Active Directory DNS setup
---

# Prerequisites & Infrastructure Setup

Complete these infrastructure requirements before integrating SafeSquid with Active Directory. These configurations ensure proper DNS resolution, Kerberos ticket generation, and automatic configuration management.

:::warning Critical
Skipping these steps will result in authentication failures, DNS resolution issues, and SSO malfunctions. Complete each section in order.
:::

## Prerequisites Checklist

| Component | Requirement | Why It Matters |
|-----------|-------------|----------------|
| **Time Sync** | SafeSquid and AD within 5 minutes | Kerberos tickets expire if time skew exceeds tolerance |
| **DNS** | Bind9/Named configured and running | Conditional forwarding for AD domain resolution |
| **Monit** | Service active and monitoring | Automatic configuration reload for DNS changes |
| **Permissions** | /tmp directory with 777 | Kerberos ticket generation requires write access |
| **Network** | SafeSquid can reach AD on port 389/636 | LDAP communication |
| **Hostname** | FQDN configured correctly | Kerberos requires proper host principal names |

## 1. Verify Hostname and Domain

Kerberos authentication requires your proxy server to have a properly configured FQDN (Fully Qualified Domain Name).

### Check Current Configuration

```bash
# Display full hostname
hostname -f

# Expected output format: hostname.domain.com
# Example: proxy.safesquid.test
```

### Set Hostname (if needed)

```bash
# Set hostname
sudo hostnamectl set-hostname proxy.safesquid.test

# Verify
hostname -f
```

### Verify Domain in /etc/hosts

```bash
cat /etc/hosts
```

Ensure you have an entry like:
```
192.168.1.100   proxy.safesquid.test   proxy
```

## 2. Disable DNSSEC Validation

### Why Disable DNSSEC Validation?

DNSSEC validation in BIND 9 verifies the authenticity and integrity of DNS data using cryptographic signatures. Active Directory's integrated DNS service, especially in older versions, may not fully support DNSSEC. The validation process can block legitimate AD DNS responses, preventing SafeSquid from resolving domain controllers and users.

:::info Impact
Disabling DNSSEC validation allows SafeSquid to resolve Active Directory DNS entries without cryptographic verification. This is standard practice for internal AD integration.
:::

### Configuration Steps

1. **Edit BIND configuration:**

```bash
sudo nano /etc/bind/named.conf.options
```

2. **Locate the dnssec-validation directive:**

```conf
options {
    directory "/var/cache/bind";
    
    // Current setting (default)
    dnssec-validation yes;
    
    // Other options...
};
```

3. **Change to no:**

```conf
options {
    directory "/var/cache/bind";
    
    // Disable for AD integration
    dnssec-validation no;
    
    // Other options...
};
```

4. **Save and restart BIND:**

```bash
sudo systemctl restart bind9
# OR for systems using 'named'
sudo systemctl restart named
```

### Verification

```bash
# Check BIND is running
sudo systemctl status bind9

# Test DNS resolution
nslookup google.com
# Should return results without errors
```

## 3. Configure DNS Resolution via Bind9

### Why Bind9 for Name Resolution?

SafeSquid creates a DNS stub zone (`/etc/bind/safesquid.dns.conf`) for conditional forwarding of AD domain queries. When you integrate with AD, all DNS queries for your domain (e.g., `safesquid.test`) are forwarded to your AD DNS server. This conditional forwarding only works if the system uses Bind9/Named as its nameserver.

**If you use another DNS resolver (systemd-resolved, dnsmasq, etc.)**, SafeSquid cannot perform conditional forwarding, and Kerberos authentication will fail.

### Verify Current DNS Configuration

```bash
nslookup safesquid.com
```

**Expected output:**
```
Server:         127.0.0.1
Address:        127.0.0.1#53
```

**The server MUST be `127.0.0.1`.** If it shows your router IP, ISP DNS, or anything else, proceed with configuration.

### Configure NetPlan (Ubuntu 18.04+)

1. **Identify your netplan file:**

```bash
ls /etc/netplan/
# Common: 01-netcfg.yaml, 00-installer-config.yaml
```

2. **Edit the configuration:**

```bash
sudo nano /etc/netplan/01-netcfg.yaml
```

3. **Configure nameservers and search domain:**

```yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    ens33:  # Your interface name
      dhcp4: false
      addresses:
        - 192.168.1.100/24
      gateway4: 192.168.1.1
      nameservers:
        addresses:
          - 127.0.0.1          # BIND9 local resolver
          - 192.168.1.1        # Fallback (AD server or gateway)
        search:
          - safesquid.test     # Your AD domain
```

**For multiple domains:**

```yaml
        search:
          - safesquid.test
          - branch.safesquid.test
```

4. **Apply configuration:**

```bash
sudo netplan apply
```

### Verify resolv.conf

```bash
cat /etc/resolv.conf
```

**Expected output:**

```
nameserver 127.0.0.1
search safesquid.test
```

:::tip
If `/etc/resolv.conf` is managed by systemd-resolved and doesn't show 127.0.0.1, you may need to disable systemd-resolved and enable resolvconf or configure it to use bind9.
:::

### Test DNS Resolution

```bash
# Should resolve via 127.0.0.1
nslookup safesquid.com

# After AD integration, test AD domain
nslookup ad.safesquid.test
```

## 4. Verify /tmp Directory Permissions

### Why /tmp Permissions Matter

Kerberos ticket generation requires writing temporary files to `/tmp`. SafeSquid creates ticket cache files (`krb5cc_*`) during authentication. If `/tmp` doesn't have write permissions for all users, Kerberos authentication will fail silently.

### Check Current Permissions

```bash
ls -ld /tmp
```

**Expected output:**
```
drwxrwxrwt 10 root root 4096 Feb 18 10:30 /tmp
```

The `t` (sticky bit) at the end is normal and should remain.

### Set Correct Permissions

```bash
sudo chmod 777 /tmp
```

### Verification

```bash
ls -ld /tmp
# Should show: drwxrwxrwt
```

## 5. Configure and Verify Monit Service

### Why Monit is Required

Monit is a process supervision tool that monitors critical files and services. SafeSquid uses Monit to watch `/usr/local/safesquid/security/dns/safesquid.dns.conf` — the DNS stub zone file for AD conditional forwarding.

**When you integrate with AD**, SafeSquid updates this file with your AD server IP. Monit detects the change and automatically reloads the BIND service, activating conditional forwarding without manual intervention.

### Check Monit Status

```bash
sudo systemctl status monit
```

**Expected output:**
```
● monit.service - Monit
   Active: active (running) since...
```

### Start Monit (if not running)

```bash
sudo systemctl start monit
sudo systemctl enable monit
```

### Verify File Monitoring

```bash
sudo monit summary
```

**Look for this entry:**

```
File 'watch.safesquid.dns.conf'     Accessible
```

**If missing**, check `/etc/monit/conf.d/` or `/etc/monit.d/` for SafeSquid configuration files.

### View Monit Details

```bash
sudo monit status
```

**Expected output for the DNS config watch:**

```
File 'watch.safesquid.dns.conf'
  status                       Accessible
  monitoring status            Monitored
  monitoring mode              active
  size                         256 B
  permission                   644
  uid                          0
  gid                          0
  timestamp                    Thu, 18 Feb 2026 10:45:32
  data collected               Thu, 18 Feb 2026 10:50:12
```

## 6. Add SafeSquid DNS Entry in Active Directory

### Why Add DNS Entry in AD?

For Kerberos SSO to work, your Active Directory must be able to resolve the SafeSquid proxy server by its FQDN. This allows the AD Key Distribution Center (KDC) to issue service tickets for `HTTP/proxy.safesquid.test@SAFESQUID.TEST`.

### Prerequisites

- Windows Server with Active Directory DNS role installed
- Administrator access to the AD server

### Add Host Record in AD DNS

1. **Open Server Manager** on your Windows Server

2. **Navigate to DNS:**
   - Click **Tools** → **DNS**

![Opening DNS in Server Manager](/img/How_To/Integrate_AD/dns-tools.webp)

3. **Expand Forward Lookup Zones:**
   - Click on your domain (e.g., `safesquid.test`)

4. **Create New Host Record:**
   - Right-click on your domain → **New Host (A or AAAA)...**

5. **Enter SafeSquid Details:**
   - **Name:** `proxy` (hostname only, not FQDN)
   - **IP Address:** `192.168.1.100` (your SafeSquid server IP)
   - **Create associated pointer (PTR) record:** (Optional, recommended)

![Adding host record in AD DNS](/img/How_To/Integrate_AD/add-host-dns.webp)

6. **Click Add Host**

### Verify DNS Entry

**From Windows Server (Command Prompt):**

```cmd
ping proxy.safesquid.test
```

**From SafeSquid Server:**

```bash
nslookup proxy.safesquid.test
# Should resolve to 192.168.1.100
```

:::tip Reverse Lookup
For complete Kerberos support, also create a PTR (reverse lookup) record so that the IP address resolves back to the FQDN.
:::

## 7. Verify Time Synchronization

Kerberos is time-sensitive. If the time difference between SafeSquid and AD exceeds 5 minutes, authentication will fail.

### Check Current Time

**On SafeSquid:**
```bash
date
```

**On AD Server (PowerShell):**
```powershell
Get-Date
```

### Configure NTP (if needed)

```bash
# Install NTP
sudo apt install ntp -y

# Configure NTP server (use your AD server)
sudo nano /etc/ntp.conf
```

Add your AD server:
```
server ad.safesquid.test prefer
server 0.ubuntu.pool.ntp.org
server 1.ubuntu.pool.ntp.org
```

```bash
# Restart NTP
sudo systemctl restart ntp

# Force sync
sudo ntpdate -u ad.safesquid.test
```

### Verify Time Sync

```bash
ntpq -p
```

Look for `*` or `+` next to your AD server, indicating active sync.

## Complete Pre-Integration Checklist

Before proceeding to [Setup Active Directory Integration](/docs/Authentication/Directory_Services/Active_Directory/Setup_Active_Directory_Integration/), verify all items:

- [ ] Hostname FQDN configured correctly (`hostname -f`)
- [ ] DNSSEC validation disabled in `/etc/bind/named.conf.options`
- [ ] DNS resolution via 127.0.0.1 (`nslookup` shows Server: 127.0.0.1)
- [ ] Search domain configured in netplan
- [ ] `/tmp` directory has 777 permissions
- [ ] Monit service running and monitoring `safesquid.dns.conf`
- [ ] SafeSquid DNS A record created in AD
- [ ] Time synchronized between SafeSquid and AD (within 5 minutes)
- [ ] Network connectivity: SafeSquid can ping AD server
- [ ] Ports 389 (LDAP) and 88 (Kerberos) open from SafeSquid to AD

## Troubleshooting

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| `nslookup` doesn't use 127.0.0.1 | systemd-resolved or other DNS service active | Disable systemd-resolved: `sudo systemctl disable systemd-resolved` then configure netplan |
| Monit not monitoring file | Monit config missing or malformed | Check `/etc/monit/conf.d/` for SafeSquid-related files; reinstall SafeSquid if missing |
| AD can't resolve SafeSquid FQDN | DNS A record not created | Add host record in AD DNS as shown in section 6 |
| Time sync fails | Firewall blocking NTP (port 123) | Check firewall rules; ensure NTP service is allowed |
| `/tmp` permission denied errors in logs | Incorrect `/tmp` permissions | Run `sudo chmod 777 /tmp` |

## Next Steps

With infrastructure properly configured, proceed to:

1. [Setup Active Directory Integration](/docs/Authentication/Directory_Services/Active_Directory/Setup_Active_Directory_Integration/) — Link SafeSquid with AD
2. [SSO Authentication](/docs/Authentication/Directory_Services/Active_Directory/SSO_Authentication/) — Enable Kerberos SSO
