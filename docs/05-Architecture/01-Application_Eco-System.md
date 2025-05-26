---
title: Application Eco-System
Description: Explore the SafeSquid Application Eco-System, a comprehensive framework that integrates data feeds, DNSBL, reporting, backups, and supporting services like Monit and BIND to deliver a fully functional, cloud-connected Secure Web Gateway solution.

Keywords:
- SafeSquid Application Eco-System  
- SafeSquid threat intelligence updates  
- DNSBL integration SafeSquid  
- SafeSquid reporting and analytics  
- SafeSquid supporting services  
---

## Typical High-Level Solution Architecture
![](/img/Application_Eco-System/Application_Eco-System/image1.webp)

In a typical organization setting, the amalgamation of SafeSquid Application Eco-system constitutes the complete SWG solution.

## [Self-Service Portal](/docs/05-Architecture/Management_of_Self-Service_Portal.md)
To manage properties associated with the activation key, like custom web categorisation, certificates, and subscription details, use the Self-Service portal.

## Data-Feeds
To ensure utmost relevance in security posture, SafeSquid offers cloud-integrated, real-time threat intelligence updates for Web Categorisation, Application Identification, SSL Security, Image Analysis, Malware Scanning, Geo-Location, etc.

## Configuration Backup and Restore
Cloud-backed backup acts as version control for configuration policies up to 365 days. SafeSquid's Integrated disaster recovery mechanism automatically recovers configuration settings upon activation of a replacement solution, minimizing manual intervention.

## DNSBL service
For DNS Security, SafeSquid blocks the DNS resolution of malicious domains by integrating with the DNSBL service. When any user requests a domain or IP, SafeSquid queries the A record to the DNSBL service. DNSBL checks whether the IP or domain is associated with malicious or harmful traffic in its blacklist. If DNSBL flags the site as blacklisted, SafeSquid blocks access.

## Reporting and Analytics
A log aggregator server collects, stores, and manages logs from all your proxy nodes, providing centralized logging for monitoring and report creation. Reports offer insights into user activity, data usage summaries, activity details, and traffic analysis, aiding administrators in making informed decisions to enhance network security.

## Supporting Services
Additional dependencies optimise SafeSquid for production use.

### Monit
Monit continually monitors and optimises the system to ensure zero downtime and optimal performance. In the event of unexpected shutdowns or system failures, Monit restarts the SafeSquid service. Furthermore, Monit continuously optimises the processes and actively cleans up unnecessary or temporary files. Additionally, Monit fetches real-time threat intelligence updates. Whenever software upgrades are dropped in SafeSquid Interface, Monit upgrades SafeSquid on restart.

### Bind
Bind is configured to utilize Root DNS servers and internal network DNS services, offering significantly faster resolution compared to standard ISP-provided DNS.

### NTP
NTP is used for time synchronizations with the Active directory in SSO configuration

## [Files and Folders](/docs/05-Architecture/SafeSquid_SWG_directorys.md)
SafeSquid provides a detailed directory structure used for configuration, logging, caching, and storing critical system components. It helps administrators locate and manage SafeSquid's operational files efficiently.
