---
title: Server Geo-Location
description: Configure SafeSquid SWG server geo-location profiles to enforce location-aware policies for access control, compliance, and routing optimization.
keywords:
  - SafeSquid SWG
  - server geolocation
  - geoip
  - country-based policy
  - geo-based access control
  - compliance
  - profiling engine
  - location-aware routing
  - ip intelligence
  - zero trust
---


# Server Geo-Location

**CISO takeaway**: Unknown destination geography creates compliance gaps and regional threat exposure. Server Geo-Location classifies destinations by country and ASN so policies can block or allow by location. Evidence: [Security Logs](/docs/Audit_Forensics/Security_Logs/) and [Reporting Module](/docs/Audit_Forensics/Reporting_Module/) show `server_country`, `server_region`, and `server_asn`; dashboards and exports demonstrate the control to auditors.



## Unknown destination geography creates compliance and threat risk

Without destination geo classification, organizations cannot enforce data residency, regional restrictions, or block high-risk countries. The risk is regulatory violation, data sovereignty issues, and exposure to region-specific threats. Business impact includes fines, audit findings, and incident cost. Server Geo-Location classifies destination servers by country, region, and ASN so policies can enforce location-aware allow/deny and reporting.



## Location-aware policies support compliance and audit evidence

Server Geo-Location enables country-based access control, targeted policy enforcement, and routing decisions using IP intelligence. Control objectives include data residency, geo-blocking, and compliance with regional requirements (e.g. GDPR data flow, export controls). Organizations can show auditors: policy configuration (which countries are blocked or allowed), logs with `server_country` and `server_region`, and reports or dashboards filtered by destination geography.



## Prerequisites ensure accurate geo classification
- SafeSquid SWG installed and operational. See [Getting Started](/docs/Getting_Started/main/).
- Profiling Engine enabled. See [Request Profiles](/docs/Profiling_Engine/Request_Profiles/) and [Response Profiles](/docs/Profiling_Engine/Response_Profiles/).
- Up-to-date GeoIP database available on SafeSquid SWG
- Administrative access to Policy Management Console
- Outbound DNS resolution working and consistent



## Configure profiles and enforce geo policies
1. Open Policy Management Console. Navigate to Profiling Engine → Server Geo-Location.
   - Verify GeoIP database status shows current date
   - If outdated, update database
2. Create a new server geo-location profile.
   - Name: concise and specific (for example, `Block-High-Risk-Countries`)
   - Criteria: select countries, regions, or ASNs to match
3. Save the profile and confirm it appears in the profile list.
   - Verify rule precedence if multiple profiles overlap
4. Reference the profile in policy modules.
   - Access Control: deny or allow based on server location. See [Access Restriction](/docs/Access_Restriction/main/).
   - Bandwidth Management: prioritize local regions. See [Manage Bandwidth](/docs/Performance_Accelerators/Manage_Bandwidth/).
   - URL Redirection or Exceptions: adapt experience by region. See [URL Redirection](/docs/URL_Redirection/main/).
   - Reporting: build dashboards by destination country. See [Reporting Module](/docs/Audit_Forensics/Reporting_Module/).
5. Validate behavior using test destinations per region.
   - Use known regional domains or IPs when possible

<!-- TODO: Add screenshots when available (profile-list.webp, profile-editor.webp, policy-reference.webp) -->



## Verify policy and monitor logs

- **Interface**: Profile visible, enabled, and referenced in policies.
- **Logs**: Confirm `server_country`, `server_region`, and `server_asn` in [Security Logs](/docs/Audit_Forensics/Security_Logs/).
- **Demonstrate control to auditor**: Export logs or run a report filtered by `server_country`; show policy configuration that denies or allows by geography; provide a country-based dashboard from the [Reporting Module](/docs/Audit_Forensics/Reporting_Module/) as evidence of active enforcement.
- **Curl test**:

```bash
# Test access to a site hosted in a specific country
curl -I https://example-regional-site.tld --proxy http://your-safesquid-proxy:8080
```

- Expected indicators in logs:

```text
timestamp=2025-11-10 action=deny module=access_restriction
server_ip=203.0.113.45 server_country=RU server_region=EU server_asn=AS12345
profile=Block-High-Risk-Countries rule=deny-non-compliant-regions user=jdoe
```

- Create a country-based dashboard and filter by `server_country` to validate reporting.



## Resolve classification, CDN, and database issues
- GeoIP database outdated
  - Symptom: `server_country` missing or incorrect
  - Fix: update GeoIP database; restart profiling service if required
- CDN or anycast endpoints
  - Symptom: destination resolves to global POP; country differs from brand site location.
  - Fix: allow-list CDNs by ASN where appropriate; use [Application Signatures](/docs/Profiling_Engine/Application_Signatures/).
- Private or RFC1918 destinations
  - Symptom: no geo data for non-routable IPs
  - Fix: add explicit policy exceptions; rely on identity or application profiles. See [User Identities](/docs/Profiling_Engine/User_Identities/main/).
- DNS-based variance
  - Symptom: different resolver returns regionally distinct IPs.
  - Fix: standardize resolvers; verify [Integrated DNS Security](/docs/SafeSquid_SWG/Integrated_DNS_Security/).
- IPv6 classification gaps
  - Symptom: missing geo for v6-only hosts
  - Fix: ensure IPv6 ranges in GeoIP; confirm dual-stack handling
- HTTPS SNI/IP mismatch
  - Symptom: SNI points to geo X, IP maps to geo Y
  - Fix: prefer IP-based geo for enforcement; validate SNI with server verification. See [SSL Inspection](/docs/SSL_Inspection/main/).
- Performance impact from complex geo sets
  - Symptom: latency on policy evaluation
  - Fix: consolidate countries into regions; push heavy rules higher in precedence; cache outcomes

External references:
- MaxMind GeoIP2 database: `https://dev.maxmind.com/geoip`
- Regional compliance baselines (example): `https://www.iso.org/standard/77312.html`

