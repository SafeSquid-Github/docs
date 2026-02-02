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

## Block risky regions and meet compliance
Server Geo-Location addresses regulatory restrictions, data residency, and regional threat exposure by classifying destination servers by country, region, and ASN.

## Location-aware rules reduce risk and latency
Server Geo-Location enables country-based access control, targeted policy enforcement, and optimized routing decisions using accurate IP intelligence.

## Prerequisites ensure accurate geo classification
- SafeSquid SWG installed and operational. See `../01-Getting Started/main.md`.
- Profiling Engine enabled. See `./05-Request Profiles.md` and `./06-Response Profiles.md`.
- Up-to-date GeoIP database available on SafeSquid SWG.
- Administrative access to Policy Management Console.
- Outbound DNS resolution working and consistent.

## Configure profiles and enforce geo policies
1. Open Policy Management Console. Navigate to Profiling Engine → Server Geo-Location.
   - Verify GeoIP database status shows current date.
   - If outdated, update database.
2. Create a new server geo-location profile.
   - Name: concise and specific (for example, `Block-High-Risk-Countries`).
   - Criteria: select countries, regions, or ASNs to match.
3. Save the profile and confirm it appears in the profile list.
   - Verify rule precedence if multiple profiles overlap.
4. Reference the profile in policy modules.
   - Access Control: deny or allow based on server location. See `../05-Content Security/02-Access Restriction.md`.
   - Bandwidth Management: prioritize local regions. See `../08-Performance Accelerators/04-Bandwidth Management.md`.
   - URL Redirection or Exceptions: adapt experience by region. See `../05-Content Security/04-URL Redirection/main.md`.
   - Reporting: build dashboards by destination country. See `../06-Audit & Forensics/01-Reporting Module.md`.
5. Validate behavior using test destinations per region.
   - Use known regional domains or IPs when possible.

Screenshots:
- Profile list: `/img/profiling/server-geo-location/profile-list.webp`
- Profile editor: `/img/profiling/server-geo-location/profile-editor.webp`
- Policy reference: `/img/profiling/server-geo-location/policy-reference.webp`

## Verify policy and monitor logs
- Interface checks: profile visible, enabled, and referenced in policies.
- Real-time logs: confirm `server_country`, `server_region`, and `server_asn` fields. See `../06-Audit & Forensics/02-Security Logs.md`.
- Sample curl test:

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

- Reporting validation: create a country-based dashboard. Filter by `server_country`.

## Resolve classification, CDN, and database issues
- GeoIP database outdated
  - Symptom: `server_country` missing or incorrect.
  - Fix: update GeoIP database; restart profiling service if required.
- CDN or anycast endpoints
  - Symptom: destination resolves to global POP, country differs from brand site location.
  - Fix: allow-list CDNs by ASN where appropriate; apply application signatures. See `../04-Profiling Engine/03-Application Signatures.md`.
- Private or RFC1918 destinations
  - Symptom: no geo data for non-routable IPs.
  - Fix: add explicit policy exceptions; rely on identity or application profiles. See `./01-User Identities/main.md`.
- DNS-based variance
  - Symptom: different resolver returns regionally distinct IPs.
  - Fix: standardize resolvers; verify `Integrated DNS Security`. See `../02-SafeSquid SWG/06-Integrated DNS Security.md`.
- IPv6 classification gaps
  - Symptom: missing geo for v6-only hosts.
  - Fix: ensure IPv6 ranges in GeoIP; confirm dual-stack handling.
- HTTPS SNI/IP mismatch
  - Symptom: SNI points to geo X, IP maps to geo Y.
  - Fix: prefer IP-based geo for enforcement; validate SNI with server verification. See `../05-Content Security/03-Server Verification.md`.
- Performance impact from complex geo sets
  - Symptom: latency on policy evaluation.
  - Fix: consolidate countries into regions; push heavy rules higher in precedence; cache outcomes.

External references:
- MaxMind GeoIP2 database: `https://dev.maxmind.com/geoip`
- Regional compliance baselines (example): `https://www.iso.org/standard/77312.html`
