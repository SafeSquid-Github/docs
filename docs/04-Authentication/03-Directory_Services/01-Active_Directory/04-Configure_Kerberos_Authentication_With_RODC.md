---
title: SSO Authentication with RODC
description: "Integrate Active Directory for SSO using Read-Only Domain Controllers (RODC). Includes RWDC preparation, lookup logic, and LDAP configuration."
keywords:
  - active directory sso SafeSquid
  - RODC kerberos SafeSquid
  - negotiate_ldap_auth RODC
  - sso setup RODC
  - SafeSquid RODC authentication
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

This guide explains how to configure **Kerberos Single Sign-On (SSO)** for SafeSquid when your network uses a **Read-Only Domain Controller (RODC)** — a common setup in segmented enterprise networks, branch offices, and DMZ environments.

By the end of this guide, employees on your corporate network will be able to browse the internet **through SafeSquid without any login prompts**, authenticated automatically using their Active Directory credentials.

---

## Real-World Architecture: Where This Problem Occurs

This setup applies directly to enterprise networks where the **proxy server lives in a DMZ** (De-Militarized Zone) — separated from the main internal network by a firewall.

Consider the following typical enterprise layout:

```
┌──────────────────────────────────────────────────┐
│                   LAN Network                    │
│                                                  │
│  ┌─────────────┐        ┌──────────────────────┐ │
│  │  Application│◄───────│   Intranet Websites  │ │
│  │   Server    │        └──────────────────────┘ │
│  └─────────────┘                                 │
│                                                  │
│  ┌─────────────┐  Traffic  ┌──────────────────┐  │
│  │     PAC     │──────────►│   Endpoints      │  │
│  │  Provider   │  routing  │  (User PCs)      │  │
│  └─────────────┘           └────────┬─────────┘  │
│                                     │            │
│  ┌─────────────┐                    │            │
│  │  DC Server  │                    │ Internet   │
│  │  (RWDC)     │                    │ Websites   │
│  └──────┬──────┘                    │            │
└─────────┼─────────────────────────┬─┘            │
          │ (Replication)           │              │
          ▼                         ▼              │
┌──────────────────────────────────────────────────┐
│                   DMZ Network                    │
│                                                  │
│  ┌─────────────┐       ┌──────────────────────┐  │
│  │    RODC     │──────►│   Proxy Server       │  │
│  │   Server    │       │   (SafeSquid)        │  │
│  └─────────────┘       └──────────────────────┘  │
└──────────────────────────────────────────────────┘
```

**In this architecture:**

| Component | Location | Role |
| :--- | :--- | :--- |
| **DC Server (RWDC)** | LAN | The authoritative, writable Active Directory server. All identity creation happens here. |
| **Endpoints (User PCs)** | LAN | Corporate workstations joined to the AD domain. Users log in with domain credentials. |
| **PAC Provider** | LAN | A web server that distributes the Proxy Auto-Config file, directing all browser traffic through SafeSquid. |
| **RODC Server** | DMZ | A **read-only replica** of the DC, placed in the DMZ for security. It can authenticate users locally, but **cannot create or modify any AD objects**. |
| **Proxy Server (SafeSquid)** | DMZ | Intercepts all outbound internet traffic from endpoints and enforces authentication, policies, and filtering. |

### Why Does This Architecture Exist?

The DMZ is an intentionally isolated security zone. Placing a full Writable DC in the DMZ would expose your entire identity store to the internet-facing network — a major security risk. Instead, an **RODC** is placed there:

- It can **verify** Kerberos tickets for users — but only for accounts it has cached.
- It **cannot** accept new write operations (no new accounts, no SPN changes).
- It holds only a **partial, controlled subset** of AD data.

This is exactly where the problem lies.

---

## The Problem: Why SSO Breaks in RODC Environments

When a user's browser (on the LAN) is told by the PAC file to route traffic through SafeSquid (in the DMZ), the following happens for Kerberos authentication:

1. The browser asks the **RODC** for a Kerberos ticket for `HTTP/safesquid.<REALM>`.
2. The RODC looks up its local (cached) database for that Service Principal Name (SPN).
3. **If it doesn't find it** — because the SafeSquid computer object was never created or replicated — it **cannot issue a ticket**.
4. The browser falls back to basic authentication, and the user sees a `407 Proxy Authentication Required` popup.

The root cause: The RODC is **"blind"** to SafeSquid's existence until the object is explicitly created on the Writable DC and replicated down.

:::warning
The RODC **cannot** create computer objects or register SPNs by itself. All AD preparation **must be done on the Writable DC (RWDC)**, then pushed to the RODC through replication.
:::

---

## The Solution: Pre-Register SafeSquid on the Writable DC

The fix is to manually create the SafeSquid computer object on the **Writable DC**, configure all required SPNs and security flags, then allow/force that data to replicate to the RODC. Once the RODC has a cached copy of the SafeSquid identity, it can issue Kerberos tickets and SSO works transparently.

### Key benefits

*   **Global Single Sign-On**: Authenticated users access the proxy without credential prompts.
*   **Security Alignment**: Enforces AES-256 encryption across all sites.
*   **Centralized Management**: Configure once on the Writable DC and replicate automatically to the RODC.
*   **Zero Admin Overhead**: Automation script handles complex AD attribute mapping (UAC Flags, SPNs, Encryption Types).

---

## How Kerberos SSO Works in This Setup

Once the SafeSquid object is created and replicated, this is the complete authentication flow:

```mermaid
sequenceDiagram
    participant User as User (Endpoint)
    participant Browser
    participant RODC as RODC (DMZ)
    participant RWDC as Writable DC (LAN)
    participant SafeSquid as SafeSquid Proxy (DMZ)

    Note over RWDC: Pre-Step: Admin runs script to<br/>create SafeSquid computer object + SPNs
    RWDC->>RODC: AD Replication: SafeSquid identity pushed to RODC

    User->>Browser: Opens browser, visits website
    Browser->>RODC: "I need a Kerberos ticket for HTTP/safesquid.<REALM>"
    RODC->>RODC: Looks up cached SafeSquid identity
    RODC-->>Browser: Issues Kerberos Ticket (TGS)
    Browser->>SafeSquid: HTTP request + Kerberos ticket (Negotiate header)
    SafeSquid->>RODC: Validates ticket via LDAP (NEGOTIATE_LDAP_AUTH)
    RODC-->>SafeSquid: User identity confirmed
    SafeSquid-->>Browser: Access granted — no password prompt!
```

**Why this flow requires both the RWDC and RODC:**

| Stage | Who Does It | Why |
| :--- | :--- | :--- |
| Create SafeSquid object + SPNs | **Writable DC (RWDC)** | Only the RWDC can write to Active Directory |
| Cache the identity | **RODC** | Receives replicated data from RWDC |
| Issue Kerberos ticket | **RODC** | Serves users locally in the DMZ, fast and secure |
| Validate ticket at proxy | **SafeSquid → RODC** | LDAP bind confirms the user's ticket is genuine |

---

## Prerequisites

Before beginning, ensure the following:

- You have **Administrator access** to a **Writable Domain Controller (RWDC)**.
- You know the **hostname and IP** of your **RODC** (the one in the DMZ).
- You know the **hostname** of your **SafeSquid proxy VM/ISO**.
- The **Active Directory PowerShell module** is installed on the RWDC.
- SafeSquid and the RODC are **network-reachable from each other** (firewall allows LDAP port 389/636).

Run this on the RWDC first to confirm you're targeting the PDC Emulator:

```powershell
# Run this first to identify your Writable DC
$TargetDC = (Get-ADDomainController -Discover -Service PrimaryDC).HostName | Select-Object -First 1
Write-Host "Operations will be performed on: $TargetDC" -ForegroundColor Cyan
```

---

## Placeholder Reference Table

Use this table to identify which values in the commands and scripts need to be replaced with your environment's specific details.

| Placeholder | Description | Example Value |
| :--- | :--- | :--- |
| `<SafeSquid_ISO_Hostname>` | The hostname of your SafeSquid ISO/Virtual Machine. | `safesquid-proxy-01` |
| `<your.domain.name>` | Your Active Directory domain name (FQDN). | `company.local` |
| `<REALM>` | Your AD domain name in ALL CAPS. | `COMPANY.LOCAL` |
| `$ComputerName` | The name of the AD computer object. **Do not change this.** | `safesquid` |
| `<RODC_Hostname>` | The hostname of your Read-Only Domain Controller. | `rodc-01` |
| `<RODC_IP>` | The IP address of your Read-Only Domain Controller. | `192.168.1.10` |

---

## AD Object Configuration Reference

### Computer Object Attributes

| Attribute | Required Value |
|---|---|
| **Name** | `safesquid` |
| **SamAccountName** | `safesquid$` |
| **UPN** | `safesquid.<REALM>@<REALM>` |
| **UAC Bitmask** | `33624064` (Workstation + No Expiry + No Pre-Auth) |
| **Encryption Type** | `28` (AES 128/256 Support) |

### Required Service Principal Names (SPNs)

These seven SPNs must be registered on the SafeSquid computer object. They cover both the VM's actual hostname and the common `safesquid` identity.

| SPN Type | Format | Purpose |
| :--- | :--- | :--- |
| **ISO Host (FQDN)** | `HOST/<SafeSquid_ISO_Hostname>.<REALM>` | Kerberos identity for the ISO hostname |
| **ISO HTTP (FQDN)** | `HTTP/<SafeSquid_ISO_Hostname>.<REALM>` | Web-based Kerberos auth via ISO name |
| **ISO LDAP (FQDN)** | `LDAP/<SafeSquid_ISO_Hostname>.<REALM>` | LDAP communication via ISO name |
| **Common Host (FQDN)** | `HOST/safesquid.<REALM>` | Kerberos identity for the common name |
| **Common HTTP (FQDN)** | `HTTP/safesquid.<REALM>` | **Primary SPN for proxy authentication** |
| **Common LDAP (FQDN)** | `LDAP/safesquid.<REALM>` | LDAP searching via safesquid identity |
| **Common Host (Short)** | `host/safesquid` | NetBIOS/legacy compatibility |

---

## Phase 1: Active Directory Preparation (on the RWDC)

Perform these steps on your **Writable Domain Controller**. Choose your preferred method:

<Tabs>
<TabItem value="manual" label="Manual Steps">

### Step 1: Initialize Identity
Replace `<Placeholders>` with your environment values.

```powershell
$TargetDC     = (Get-ADDomainController -Discover -Service PrimaryDC).HostName | Select-Object -First 1
$ISO_Hostname = "<SafeSquid_ISO_Hostname>"  # e.g., 'safesquid-proxy-01'
$DomainName   = "<your.domain.name>"         # e.g., 'company.local'
$Realm        = $DomainName.ToUpper()        # e.g., 'COMPANY.LOCAL'
$ComputerName = "safesquid"                  # Do NOT change this
```

### Step 2: Create or Update Object
```powershell
# Attempt to create the object on the writable DC
New-ADComputer -Name $ComputerName -Server $TargetDC `
    -SamAccountName "$ComputerName$" `
    -Path "CN=Computers,DC=$($DomainName.Replace('.', ',DC='))" `
    -DNSHostName "$ComputerName.$DomainName" `
    -UserPrincipalName "$ComputerName.$Realm@$Realm" `
    -Enabled $true

# Update core attributes if object already exists
Set-ADComputer -Identity $ComputerName -Server $TargetDC `
    -DNSHostName "$ComputerName.$DomainName" `
    -UserPrincipalName "$ComputerName.$Realm@$Realm"
```

### Step 3: Register SPNs (Differential Update)
Only adds SPNs that are missing to avoid "Duplicate" errors.

```powershell
$obj = Get-ADComputer -Identity $ComputerName -Server $TargetDC -Properties servicePrincipalName

# Define the mandatory SPN list
$Desired = @(
    "HOST/$ISO_Hostname.$Realm", "HTTP/$ISO_Hostname.$Realm", "LDAP/$ISO_Hostname.$Realm",
    "HOST/$ComputerName.$Realm", "HTTP/$ComputerName.$Realm", "LDAP/$ComputerName.$Realm",
    "host/$ComputerName"
)

# Identify which ones aren't already there
$toAdd = $Desired | Where-Object { $_ -notin $obj.servicePrincipalName }

if ($toAdd) {
    Set-ADComputer -Identity $obj.DistinguishedName -Server $TargetDC -Add @{ servicePrincipalName = $toAdd }
    Write-Host "Added missing SPNs."
}
```

### Step 4: Security Flags (UAC & AES)
```powershell
Set-ADObject -Identity $obj.DistinguishedName -Server $TargetDC `
    -Replace @{
        userAccountControl              = 33624064
        'msDS-SupportedEncryptionTypes' = 28
    }
```

</TabItem>

<TabItem value="script" label="Automated Script">

### Fully Generalized AD Script

#### How to Run This Script
1.  **Save the Script**: Copy the code below and save it as `Replicate-ADComputer.ps1`.
2.  **Location**: Save this file directly on your **Writable Domain Controller (RWDC/PDC Emulator)**.
3.  **Edit Variables**: Open the file and fill in your values under `SET YOUR VARIABLES HERE`.
4.  **Execute**: Open PowerShell as Administrator and run:
    ```powershell
    .\Replicate-ADComputer.ps1
    ```

```powershell
# =========================================================================
# SAFESQUID MASTER AD PREPARATION SCRIPT (GENERAL)
# =========================================================================
Import-Module ActiveDirectory

# --- 1. SET YOUR VARIABLES HERE ---
$ISO_Hostname = "<SafeSquid_ISO_Hostname>"   # e.g., 'safesquid-proxy-01'
$DomainName    = "<your.domain.name>"         # e.g., 'company.local'
$ComputerName  = "safesquid"                  # Do NOT change this

# --- 2. AUTOMATED LOGIC ---
$SAMAccount  = "$ComputerName$"
$Realm       = $DomainName.ToUpper()
$BaseDCPath  = ($DomainName -split '\.' | ForEach-Object { "DC=$_" }) -join ','
$UPN         = "$ComputerName.$Realm@$Realm"
$DNSHostName = "$ComputerName.$DomainName"

# Target the Writable PDC Emulator
$TargetDC = (Get-ADDomainController -Discover -Service PrimaryDC).HostName | Select-Object -First 1
Write-Host "Targeting DC: $TargetDC" -ForegroundColor Cyan

# SPNs (Matching msktutil requirements)
$DesiredSPNs = @(
    "HOST/$ISO_Hostname.$Realm", "HTTP/$ISO_Hostname.$Realm", "LDAP/$ISO_Hostname.$Realm",
    "HOST/$ComputerName.$Realm", "HTTP/$ComputerName.$Realm", "LDAP/$ComputerName.$Realm",
    "host/$ComputerName"
)

# --- 3. EXECUTION ---
$Existing = Get-ADComputer -Filter "SamAccountName -eq '$SAMAccount'" -Server $TargetDC -Properties servicePrincipalName -ErrorAction SilentlyContinue

if ($Existing) {
    Write-Host "Object found, updating attributes..." -ForegroundColor Yellow
    Set-ADComputer -Identity $Existing.DistinguishedName -Server $TargetDC -DNSHostName $DNSHostName -UserPrincipalName $UPN
    # Differential SPN update — only adds missing SPNs to avoid "Duplicate" errors
    $SPNsToAdd = $DesiredSPNs | Where-Object { $_ -notin $Existing.servicePrincipalName }
    if ($SPNsToAdd) { Set-ADComputer -Identity $Existing.DistinguishedName -Server $TargetDC -Add @{ servicePrincipalName = $SPNsToAdd } }
} else {
    Write-Host "Creating new computer object..." -ForegroundColor Cyan
    New-ADComputer -Name $ComputerName -Server $TargetDC -Path "CN=Computers,$BaseDCPath" -DNSHostName $DNSHostName -UserPrincipalName $UPN -ServicePrincipalNames $DesiredSPNs -Enabled $true
}

# Apply Security Flags (UAC 33624064 + AES-256 Support)
$FinalObj = Get-ADComputer -Identity $ComputerName -Server $TargetDC
Set-ADObject -Identity $FinalObj.DistinguishedName -Server $TargetDC -Replace @{
    userAccountControl              = 33624064
    'msDS-SupportedEncryptionTypes' = 28
}

Write-Host "`nSUCCESS: Active Directory is now configured for SafeSquid." -ForegroundColor Green
```

</TabItem>
</Tabs>

---

## Phase 2: Configure Password Replication Policy (PRP)

Since the RODC is read-only, you must explicitly allow it to **cache the SafeSquid computer account password**. Without this step, the RODC will always refer ticket requests back to the RWDC — introducing latency and potential failures.

1.  Open **Active Directory Users and Computers** on the RWDC.
2.  Navigate to the **Domain Controllers** OU.
3.  Right-click your **RODC** object → **Properties**.
4.  Go to the **Password Replication Policy** tab.
5.  Click **Add** → select the **safesquid** computer account.
6.  Ensure it is set to **"Allowed"**.

:::note
After adding the policy, wait up to 15 minutes for initial replication, or trigger a manual sync using `repadmin /syncall` on the RWDC.
:::

---

## Phase 3: SafeSquid Interface Setup

With the AD object in place and the RODC caching the safesquid identity, configure SafeSquid to authenticate against the RODC.

Navigate to **Application Setup** → **Integrate LDAP** → **LDAP servers**.

![LDAP CONFIG IN SAFESQUID FOR RODC](/img/How_To/Configure_LDAP_In_Safesquid_For_RHOD/image1.webp)

| Parameter | Configuration Value |
| :--- | :--- |
| **Enabled** | `TRUE` |
| **Ldap FQDN\IP** | `<RODC_Hostname>` or `<RODC_IP>` |
| **Ldap Bind Method** | `NEGOTIATE_LDAP_AUTH` |
| **Ldap Username** | `administrator@<your.domain.name>` |
| **Ldap Basedn** | `dc=<domain_part1>,dc=<domain_part2>` |
| **Ldap Domain** | `<your.domain.name>` |

:::warning
The **Ldap Bind Method** must be set to **NEGOTIATE_LDAP_AUTH**. This is what triggers the Kerberos ticket exchange instead of basic LDAP bind — it is the core of SSO functionality.
:::

---

## Troubleshooting

### Keytab Generation Fails
*   **Symptom**: SafeSquid logs show `kerberos: main: Generate Keytab: failed`.
*   **Cause**: The RODC's Password Replication Policy hasn't cached the SafeSquid account yet.
*   **Fix**: Trigger manual AD replication with `repadmin /syncall /AdeP` on the RWDC, or wait 15 minutes.

### 407 Proxy Authentication Required (After Setup)
*   **Cause 1 — Time Drift**: Kerberos requires clocks to be within 5 minutes of each other. Check time sync with `date` on all servers.
*   **Cause 2 — SPN Mismatch**: The browser is requesting a ticket for a hostname that isn't registered as an SPN. Verify all 7 SPNs are present with `Get-ADComputer safesquid -Properties servicePrincipalName`.
*   **Cause 3 — PRP Not Set**: The RODC doesn't have the password cached. Verify the Password Replication Policy includes the `safesquid` account.

### RODC Refers Requests to RWDC ("Referral" Error)
*   **Cause**: The RODC received an account request it can't serve locally, so it redirects to the RWDC.
*   **Fix**: Ensure the PRP is configured as described in Phase 2, and allow sufficient replication time.

---

**Related:** [Simple Authentication](Simple_Authentication) | [Setup Active Directory Integration](Setup_Active_Directory_Integration) | [Troubleshooting](/docs/Troubleshooting/main/)
