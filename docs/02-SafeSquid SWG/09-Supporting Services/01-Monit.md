---
title: "Monit Service Governance"
description: "Automated monitoring and self-healing for SafeSquid SWG processes and host resources"
keywords:
  - SafeSquid SWG
  - Monit
  - service monitoring
  - self-healing
  - auto-restart
  - health checks
---

# Monit Service Governance

## Problem Statement
- Security Challenge: Service crashes, resource leaks, and stalled updates cause outages and security blind spots.
- Real-World Scenarios: Kernel updates, disk pressure, or transient network failures stop SafeSquid or auxiliary daemons.
- Business Context: Downtime impacts web access, SSO, and policy enforcement, creating productivity loss and risk exposure.

## Key Benefits
- Desired Outcome: Continuous availability through auto-recovery and proactive housekeeping.
- Value Proposition: Reduce MTTR to minutes; stabilize SLA; prevent cascading failures.
- Competitive Advantage: Push-button resilience without third-party agents or manual restarts.

## Prerequisites
- Client-Side Preparations: Define operational SLAs and approved maintenance windows.
- SafeSquid-Side Setup: Install Monit; register SafeSquid, BIND, and NTP checks; enable on boot.
- System Requirements: Linux host with systemd, outbound access for threat updates, log storage capacity.

## Call to Action
1. Install Monit.
   - Debian/Ubuntu:
     ```bash
     sudo apt update
     sudo apt install -y monit
     ```
   - RHEL/Rocky:
     ```bash
     sudo dnf install -y monit
     ```
   - Verification: `monit -V` prints version.
2. Enable Monit service.
   ```bash
   sudo systemctl enable --now monit
   systemctl is-active monit
   systemctl is-enabled monit
   ```
   - Verification: `active` and `enabled` states show `active` and `enabled`.
3. Configure Monit HTTP interface (local only).
   - Edit `/etc/monit/monitrc` and set:
     ```bash
     set httpd port 2812 and
       use address localhost
       allow localhost
     ```
   - Verification: `curl -s http://localhost:2812 | head -n1` returns HTML header.
4. Add SafeSquid process and port checks.
   - Create `/etc/monit/conf.d/safesquid`:
     ```bash
     check process safesquid with pidfile /var/run/safesquid.pid
       start program = "/bin/systemctl start safesquid"
       stop  program = "/bin/systemctl stop safesquid"
       if failed port 8080 protocol http then restart
       if 3 restarts within 5 cycles then alert
     ```
   - Verification: `monit reload && monit status safesquid` shows `OK`.
5. Add housekeeping checks.
   - Log rotation trigger:
     ```bash
     check file ss-log-size with path /var/log/safesquid/access.log
       if size > 500 MB then exec "/usr/sbin/logrotate -f /etc/logrotate.d/safesquid"
     ```
   - Temporary files cleanup (example):
     ```bash
     check file ss-tmp with path /tmp
       if timestamp > 24 hours then exec "/usr/bin/find /tmp -type f -mtime +1 -delete"
     ```
   - Verification: `monit status` shows checks; logs confirm actions.
6. Add update orchestration (optional).
   - Trigger SafeSquid upgrade on next restart when update flag exists:
     ```bash
     check file ss-upgrade-flag with path /var/lib/safesquid/upgrade.flag
       if changed checksum then exec "/usr/local/bin/safesquid-upgrade"
     ```
   - Verification: simulate flag and confirm upgrade script execution.
7. Reload and validate.
   ```bash
   sudo monit reload
   sudo monit summary
   sudo monit status
   ```
   - Verification: All checks show `Running` and `OK`.

## Solution Verification
- Interface Checks: Open `http://localhost:2812` from host; confirm Monit dashboard shows green for `safesquid`.
- Log Analysis: Review `/var/log/monit.log` and SafeSquid logs for restart events and housekeeping actions.
- Performance Validation: Induce a controlled SafeSquid stop and confirm automatic restart within one cycle.
- Screenshots: `/img/supporting-services/monit-dashboard.webp` with alt text "Monit dashboard showing SafeSquid OK".

## Troubleshooting Guide
- Common Issues & Scenarios:
  - Monit not starting: Incorrect permissions on `/etc/monit/monitrc`.
  - Checks not loading: Missing `include /etc/monit/conf.d/*` in `monitrc`.
  - Port check failing: SafeSquid listening on non-default port.
  - Frequent restarts: Upstream dependency failure or resource exhaustion.
- Resolution Steps:
  - Fix permissions: `sudo chmod 600 /etc/monit/monitrc && sudo monit reload`.
  - Enable includes: Add `include` line, reload Monit.
  - Align port: Update `if failed port` to actual SafeSquid port.
  - Stabilize resources: Increase open files, memory limits, or repair upstreams.
- Escalation Procedures:
  - Collect `monit summary`, `monit status`, `/var/log/monit.log`, system journal.
  - Contact SafeSquid support with logs and configuration snippets.
