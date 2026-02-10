---
title: "NTP Time Synchronization"
description: "Accurate system time for SafeSquid SWG authentication, TLS, and logging integrity"
keywords:
  - SafeSquid SWG
  - NTP
  - time sync
  - Active Directory
  - TLS validation
  - Kerberos
---
<section class="section-strip">


# NTP Time Synchronization

</section>

<section class="section-strip">

## Problem Statement
- Security Challenge: Clock drift breaks Kerberos, SSO, TLS validation, and log correlation
- Real-World Scenarios: AD-integrated environments require 5-minute skew or less; drift causes authentication failures
- Business Context: Failed logins and invalid certificates disrupt access and auditing, increasing support load

</section>

<section class="section-strip">

## Key Benefits
- Desired Outcome: Precise and reliable system time aligned with enterprise time sources
- Value Proposition: Stable SSO, accurate TLS checks, and consistent audit trails
- Competitive Advantage: Predictable authentication at scale versus unmanaged host time

</section>

<section class="section-strip">

## Prerequisites
- Client-Side Preparations: Identify enterprise NTP servers or domain controllers providing time
- SafeSquid-Side Setup: Confirm host firewall allows UDP 123 to enterprise NTP
- System Requirements: [chrony](https://chrony.tuxfamily.org/) or `ntpd` supported on the OS; stable network connectivity

</section>

<section class="section-strip">

## Call to Action
1. Install time synchronization service.
   - Prefer `chrony`
     - Debian/Ubuntu:
       ```bash
       sudo apt update
       sudo apt install -y chrony
       ```
     - RHEL/Rocky:
       ```bash
       sudo dnf install -y chrony
       ```
     - Verification: `chronyd -v` prints version
2. Configure servers.
   - Edit `/etc/chrony/chrony.conf` (Debian/Ubuntu) or `/etc/chrony.conf` (RHEL):
     ```bash
     server ntp1.enterprise.tld iburst
     server ntp2.enterprise.tld iburst
     # For AD: prefer DCs and set minimal sources to 2
     makestep 1.0 3
     driftfile /var/lib/chrony/chrony.drift
     logdir /var/log/chrony
     ```
   - Verification: `chronyc sources -v` lists servers with reach > 0
3. Enable and start service.
   ```bash
   sudo systemctl enable --now chronyd
   systemctl is-active chronyd
   systemctl is-enabled chronyd
   ```
   - Verification: `active` and `enabled`
4. Validate synchronization.
   ```bash
   chronyc tracking
   chronyc sourcestats -v
   ```
   - Verification: `Stratum`, `Reference ID`, and `System time` offset within milliseconds
5. Align SafeSquid authentication.
   - For SSO/Kerberos: Confirm SafeSquid host time skew within 5 minutes of AD
   - Verification: Authentication succeeds; no KRB5 clock skew errors in logs

</section>

<section class="section-strip">

## Verification and Evidence

- **Interface Checks**: N/A (service daemon). Verify with `chronyc tracking` output; stratum and time offset should be stable.
- **Log Analysis**: Review `/var/log/chrony/chrony.log` and system journal for sync events and step corrections. Example:
  ```text
  Source corrected (step)
  System time wrong by X.XXX seconds
  Clock was stepped
  ```
- **Performance Validation**: Confirm no new SSO failures; TLS validations proceed without date errors. <!-- TODO: Add screenshot: /img/Supporting_Services/chrony_tracking.webp when available -->

**Related**: [Monit](01-Monit.md), [BIND](02-Bind.md), [Authentication](../../../04-Authentication/main.md), [Troubleshooting](../../../23-Troubleshooting/main.md)

</section>

<section class="section-strip">

## Troubleshooting Guide
- Common Issues & Scenarios:
  - No synchronization: UDP 123 blocked or wrong server names
  - Frequent step corrections: Unstable time source or VM host time interference
  - Kerberos failures: Clock skew beyond maximum tolerance
  - TLS errors on valid sites: Incorrect system date or timezone
- Resolution Steps:
  - Open UDP 123 to enterprise NTP; verify DNS for server FQDNs
  - Pin stable NTP servers; disable hypervisor time sync if conflicting
  - Run `chronyc makestep` after large corrections; re-test SSO
  - Set correct timezone with `timedatectl set-timezone` and confirm NTP sync
- Escalation Procedures:
  - Collect `timedatectl`, `chronyc tracking`, `chronyc sources -v`, and logs
  - Contact SafeSquid support with environment details and outputs

</section>