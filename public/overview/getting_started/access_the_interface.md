---
title: Access the Interface
description: Access the SafeSquid administration interface securely during onboarding.
keywords:
  - SafeSquid admin interface
  - safesquid.cfg
  - management access
---

# Access the management interface safely

## Problems poor access hygiene causes

Exposing `8443/tcp` broadly, ignoring certificate warnings, or using the wrong URL before/after proxy routing creates **credential risk**, **false “service down” conclusions**, and **audit gaps** when admins cannot prove who changed policy.

## Benefits of deliberate management access

- Confirmed reachability before activation and client rollout
- Separation of admin paths from user proxy traffic
- Baseline health checks (service, license, listener) before scaling the pilot

Use the administration interface to validate service health and apply initial settings.

## Select the right access URL

- Use `https://YOUR-SERVER-IP:8443` before proxy routing is configured
- Use `https://safesquid.cfg` after the client is configured to use SafeSquid proxy

## Verify secure access controls

- Restrict `8443/tcp` to admin workstations
- Use strong admin credentials and rotate defaults immediately
- Confirm certificate trust warnings are resolved per your PKI policy

## Confirm baseline service state

After login, verify:
- Service is running
- License status is visible
- Proxy listener is enabled on intended interface/port

## Next steps

1. [Activate Your License](/Activate) — upload your key and unlock SafeSquid capabilities.
2. [Connect Your Client](/Connect_Your_Client) — route a browser through SafeSquid to start testing policy.
3. Verify your setup — run smoke tests to confirm the proxy is receiving and logging traffic.
