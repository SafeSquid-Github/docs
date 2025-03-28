---
title: Application Eco-System
---

# Application Eco-System

## Typical High-Level Solution Architecture
![](/img/Application_Eco-System/Application_Eco-System/image1.webp)

In a typical organization setting, the amalgamation of SafeSquid Application Eco-system constitutes the complete SWG solution.

## [Self-Service Portal](https://help.safesquid.com/portal/en/kb/articles/management-of-self-service-portal)

To manage properties associated with the activation key, like custom web categorisation, certificates, and subscription details, use the Self-Service portal.

## Data-Feeds

To ensure utmost relevance in security posture, SafeSquid offers cloud-integrated, real-time threat intelligence updates for Web
Categorisation, Application Identification, SSL Security, Image Analysis, Malware Scanning, Geo-Location, etc.

## Configuration Backup and Restore

Cloud-backed backup acts as version control for configuration policies up to 365 days.

SafeSquid's Integrated disaster recovery mechanism automatically recovers configuration settings upon activation of a replacement
solution, minimizing manual intervention.

## DNSBL service

For DNS Security, SafeSquid blocks the DNS resolution of malicious domains by integrating with the DNSBL service.

When any user requests a domain or IP, SafeSquid queries the A record to the DNSBL service. DNSBL checks whether the IP or domain is associated with malicious or harmful traffic in its blacklist. If DNSBL flags the site as blacklisted, SafeSquid blocks access.

## Reporting and Analytics

A log aggregator server collects, stores, and manages logs from all your proxy nodes, providing centralized logging for monitoring and report creation.

Reports offer insights into user activity, data usage summaries, activity details, and traffic analysis, aiding administrators in making informed decisions to enhance network security.

## Supporting Services

Additional dependencies optimise SafeSquid for production use.

### Monit

Monit continually monitors and optimises the system to ensure zero downtime and optimal performance.

In the event of unexpected shutdowns or system failures, Monit restarts the SafeSquid service. Furthermore, Monit continuously optimises the processes and actively cleans up unnecessary or temporary files. Additionally, Monit fetches real-time threat intelligence updates. Whenever software upgrades are dropped in SafeSquid Interface, Monit upgrades SafeSquid on restart.

### Bind

Bind is configured to utilize Root DNS servers and internal network DNS services, offering significantly faster resolution compared to standard ISP-provided DNS.

### NTP

NTP is used for time synchronizations with the Active directory in SSO configuration

## [Startup Parameters of SafeSquid Service](https://help.safesquid.com/portal/en/kb/articles/safesquid-startup-parameters)

To optimise overall system & application performance, tune-up SafeSquid's startup parameters from the product interface.

## [Files and Folders](https://help.safesquid.com/portal/en/kb/articles/file-and-folder)

**/usr/local/safesquid** - SafeSquid installation directory

**/etc/init.d/safesquid** - SafeSquid service init scripts

**/etc/init.d/tcp_tune.sh** - TCP tuning script

**/etc/logrotate.d/safesquid** - SafeSquid log management script

**/etc/monit/conf.d/safesquid.monit** - Monit configuration file for SafeSquid

**/etc/pam.d/safesquid** - PAM configuration file for SafeSquid

**/etc/sysctl.conf** - System tuning configuration file

**/opt/safesquid/bin/safesquid** - main SafeSquid configuration file

**/opt/safesquid/bin/modules** - Customisation library of add-on modules

**/opt/safesquid/bin/sections** - UI Layout directory

**/opt/safesquid/default** - Setup and Startup configuration folder

**/tmp/safesquid -** SafeSquid temporary folder

**/var/cache/safesquid** - SafeSquid\'s caching directory

**/var/db/safesquid/report** - Web analytics databases

**/var/db/safesquid/ssl** - SSL certificate storage

**/var/db/safesquid/users** - User-to-IP mapping database

**/var/lib/safesquid/application_signatures** - Application signature storage

**/var/lib/safesquid/category** - Custom category storage

**/var/lib/safesquid/content_signatures** -- Content signature shared library and storage

**/var/lib/safesquid/imgfilter** - Image Analyser dependency and finetuning files

**/var/lib/safesquid/ssqore** -- ssqore dependency files and signature storage

**/var/lib/safesquid/sqscan** - sqscan dependency files and anti-malware signature storage

**/var/log/safesquid/config** - SafeSquid Config Logs

**/var/log/safesquid/extended** -- SafeSquid Extended Logs

**/var/log/safesquid/native** - SafeSquid Native Logs

**/var/log/safesquid/performance** - Performance Logs

**/var/log/safesquid/privacy** -- Privacy logs

**/var/run/safesquid** - SafeSquid PID
