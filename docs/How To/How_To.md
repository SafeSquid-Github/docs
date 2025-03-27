---
title: How To
description: Step-by-step guide to implement SafeSquid Secure Web Gateway and optimally use its features.
keywords:
  - SafeSquid
  - Secure Web Gateway
  - Proxy Server
  - Web Security
  - Installation Guide
  - HTTPS Inspection
  - Web Categorization
  - Bandwidth Management
  - Content Filtering
  - Troubleshooting
---

# How To implement your Secure Web Gateway

## Overview

This collection of How To articles provides a step-by-step guide toimplement SafeSquid, and optimally use its various features.

## Install SafeSquid Secure Web Gateway

You can setup your secure web gateway using different installation mechanisms based on your deployment plan.

### [SafeSquid Appliance Builder (Recommended)](https://help.safesquid.com/portal/en/kb/articles/install-safesquid-secure-web-gateway-using-safesquid-appliance-builder#Problem)

[SafeSquid Appliance Builder (SAB)](https://downloads.safesquid.com/appliance/safesquid.iso) is a security-enhanced Ubuntu Linux ISO, customised for SafeSquid installation on any physical or virtual hardware within 15 minutes. SAB automatically configures dependency libraries, services, and custom partitioning. On booting from the SAB ISO, Ubuntu is automatically
installed, and SafeSquid SWG is downloaded and deployed with all necessary dependency libraries, and services.

### [SafeSquid On Cloud](https://help.safesquid.com/portal/en/kb/articles/implementing-safesquid-on-cloud)

With the rise of distributed workforces, backchanneling all traffic to an on-premise solution is not efficient. To setup SafeSquid SWG on your preferred Cloud PaaS platform or your private cloud infrastructure, use the SafeSquid cloud image or [cloud-init script](https://raw.githubusercontent.com/SafeSquid-Github/safesquid_cloud-init/main/safesquid_cloud-init.yaml).

### [Install using SafeSquid TAR file](https://help.safesquid.com/portal/en/kb/articles/installing-safesquid-on-various-linux-distributions-using-safesquid-s-tar-file)

If you want to setup SafeSquid on already existing infrastructure or if you want to use another Operating System in the Linux family other than Ubuntu, you can [download the SafeSquid tarball](https://downloads.safesquid.com/appliance/binary/) and manually install it. You will need to partition the disks appropriately, fine-tune some of the features, and make some additional configurations to services used by SafeSquid, like [Monit](https://help.safesquid.com/portal/en/kb/articles/setup-monit-for-safesquid-monitoring) and [BIND9](https://help.safesquid.com/portal/en/kb/articles/bind-configuration-with-safesquid).

## Configure Proxy on Internet Clients

An explicit proxy can be configured globally at the system level on any Windows, Linux, Mac, or Android device. Only specific applications, like [browsers](https://help.safesquid.com/portal/en/kb/articles/how-to-configure-proxy-in-a-browser), or remote desktop applications can also be configured to route the
traffic via the proxy.

## [Upgrade SafeSquid to a newer version](https://help.safesquid.com/portal/en/kb/articles/upgrade-safesquid-to-a-newer-version)

SafeSquid is regularly maintained, for bug fixes and enhancements. Upgrade to the latest stable version of SafeSquid to access the latest features and the best user experience.

## [Access the SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

SafeSquid has an intrinsic Web-based UI, that will enable you to manage your instance, configure policies, fine-tune the features, and monitor your secure web gateway. First, create a policy on the top to allow at least one admin account to access the configuration portal to avoid lockout when configuring policies.

## [Setup SSL Inspection](https://help.safesquid.com/portal/en/kb/articles/setup-https-inspection)

For deep content inspection of encrypted HTTPS traffic, [enable HTTPS Inspection](https://help.safesquid.com/portal/en/kb/articles/https-inspection) to safeguard from concealed threats.

On the [Self-Service Portal](https://help.safesquid.com/portal/en/kb/articles/access-the-self-service-portal),
configure your Enterprise CA as the Root SSL certificate. If you do not have an Enterprise CA, [generate SafeSquid's Self-Signed Certificate](https://help.safesquid.com/portal/en/kb/articles/setting-up-ssl-certificates-from-self-service-portal).
[Import the Root SSL certificate into client browsers' trusted authorities](https://help.safesquid.com/portal/en/kb/articles/importing-your-ssl-certificate-into-internet-explorer-or-chrome).

## [Bypass SSL Inspection](https://help.safesquid.com/portal/en/kb/articles/bypass-https-inspection-by-using-request-types)

You may need to bypass SSL Inspection for websites that are not subject to decryption by proxy, like intranet websites. You may also choose to bypass inspection of requests with personal identification information.

## [Setup User Identities](https://help.safesquid.com/portal/en/kb/articles/setup-authentication)

SafeSquid has a dynamic user and group identity management system with configurable identification options.

### [Profile clients based on network identifiers](https://help.safesquid.com/portal/en/kb/articles/ip-based-authentication)

In shared workstations, guest, and static IP networks, the access control policies are defined based on device-specific network signatures. Moreover, devices that do not support credential verification, like printers, and IoT devices, are identified based on IP address. It also enables you to secure varied network segments differently.

### Integrate your enterprise directory service

For enterprises with centralized user management infrastructure, connect your LDAP-based directory services, like [Microsoft® Windows Active Directory](https://help.safesquid.com/portal/en/kb/articles/a-comprehensive-guide-on-how-to-integrate-windows-active-directory) or [OpenLDAP](https://help.safesquid.com/portal/en/kb/articles/integrate-openldap-with-safesquid), with SafeSquid to authenticate users.

SafeSquid is also optimised to concurrently connect with multiple directory services. When credentials are entered, SafeSquid intelligently verifies the user from the appropriate directory service and efficiently caches user data.

Furthermore, SafeSquid can be configured for [Kerberos-based authentication](https://help.safesquid.com/portal/en/kb/articles/kerberos-sso-authentication-setup) for Single Sign On (SSO).

### Integrate with PAM service

For flexible and modular authentication, SafeSquid supports integration with all Linux-PAM authentication modules, including biometric, and custom authentication schemes.

### Verify user credentials with an in-built credential store

If you do not have an enterprise credential store, you can [create users and passwords in SafeSquid](https://help.safesquid.com/portal/en/kb/articles/adding-users-using-safesquid-interface-for-authentication).

### Multi-Factor Authentication

For heightened security, combine network-based and credential-based authentication.

### [Create User Groups](https://help.safesquid.com/portal/en/kb/articles/create-user-groups-based-on-network-ip-and-ldap-active-directory)

For applying uniform security policies based on the specific roles, responsibilities, and risk profiles of different user sets, you can add user profiles to groups.

On integrating your enterprise directory service, SafeSquid automatically extracts group membership information.

## [Bypass Authentication for an application](https://help.safesquid.com/portal/en/kb/articles/bypass-authentication)

Applications that do not support proxy authentication need to be bypassed to ensure no disruption for them while maintaining user authentication for other applications.

## [Categorise Websites](https://help.safesquid.com/portal/en/kb/articles/categorize-websites)

To efficiently manage access to websites based on their content category, SafeSquid has a dynamic web categorisation engine. Real-time updates to SafeSquid's web categorisation database ensure the accurate classification of more than a million websites into over a hundred categories. In addition to this, advanced heuristic algorithms categorize unknown websites in real-time, based on URL, content, functionality, target audience, thematic focus, and web traffic behavioural patterns.

Furthermore, [custom categorisation](https://help.safesquid.com/portal/en/kb/articles/manage-custom-web-site-categorization) empowers security administrators with the ability to manually classify
websites into [private categories](https://help.safesquid.com/portal/en/kb/articles/create-and-manage-your-private-categories).
Use the custom categories to [allow](https://help.safesquid.com/portal/en/kb/articles/allow-specific-website-through-safesquid) or [block](https://help.safesquid.com/portal/en/kb/articles/block-specific-website-through-safesquid) websites through SafeSquid. Wildcards can be used to categorise domain variants under the same category.

## Control Application Behaviour

With SafeSquid, you can effectively control the behaviour of every feature of every Web 2.0 application. By default, SafeSquid can identify every feature of over a thousand applications, with a continuously updating database. 
Furthermore, security administrators can define application signatures for custom-built enterprise software, and control their behaviour.

### [Enforce mandatory SafeSearch](https://help.safesquid.com/portal/en/kb/articles/how-to-enforce-safesearch)

Results from search engines may be harmful or explicit. To ensure inappropriate content is not served, search engines have optional SafeSearch filters.
 
With SafeSquid, you can forcefully apply SafeSearch filters across all major search engines, including [Google Search](https://help.safesquid.com/portal/en/kb/articles/enforce-google-safe-search-on-safesquid-proxy), [Yahoo Search](https://help.safesquid.com/portal/en/kb/articles/enforce-yahoo-safe-search-on-safesquid-proxy), and [Bing Search](https://help.safesquid.com/portal/en/kb/articles/enforce-bing-safe-search-on-safesquid-proxy).

### [Secure YouTube](https://help.safesquid.com/portal/en/kb/articles/how-to-enforce-youtube-restricted-mode)

With SafeSquid's [YouTube API Integration](https://help.safesquid.com/portal/en/kb/articles/youtube-api-integration-with-safesquid-to-allow-specific-youtube-videos), you can [enforce YouTube's Restricted Mode](https://help.safesquid.com/portal/en/kb/articles/how-to-enforce-youtube-restricted-mode), to mandatorily screen out potentially objectionable content.

Moreover, to prevent cyberslacking on YouTube, organisations can limit access to specific categories of videos, [specific YouTube channels](https://help.safesquid.com/portal/en/kb/articles/block-specific-youtube-channel), or even specific videos.

## [Restrict Login](https://help.safesquid.com/portal/en/kb/articles/discourage-all-users-from-login-post-and-upload)

To prevent sophisticated phishing attacks, limit role-based login only to business-critical websites.

Furthermore, SafeSquid can ensure [logins only via corporate accounts](https://help.safesquid.com/portal/en/kb/articles/block-personal-gmail-allow-google-corporate-accounts), and [block personal accounts](https://help.safesquid.com/portal/en/kb/articles/block-personal-gmail-allow-google-corporate-accounts) to thwart attempts of leaking business sensitive data via personal accounts.

### Upload/Download restriction

You can impose role-based site-specific file size limits, and type restrictions on uploads and downloads, including overall volume quota management.

### [Read-only mode](https://help.safesquid.com/portal/en/kb/articles/discourage-all-users-from-login-post-and-upload)

To permit only viewing content on Web 2.0 applications without engaging in interactive features, organisations can implement a "read-only" mode. This feature is particularly useful on social networking websites, like
[FaceBook](https://help.safesquid.com/portal/en/kb/articles/facebook-read-only-mode), LinkedIn, Twitter, Reddit, etc.

## Transparently redirect traffic

SafeSquid can seamlessly redirect users to preferred or region-specific versions of websites.

## Secure access to the product interface

By provisioning a dedicated network channel for the product interface, you can isolate the policy configuration. Furthermore, you can restrict access to the interface to administrators only.

## [Block advertisements](https://help.safesquid.com/portal/en/kb/articles/block-advertisements-and-banners)

Advertisements are annoying, intrusive, and distracting. [Blocking banner Ads](https://help.safesquid.com/portal/en/kb/articles/block-advertisements-and-banners) results in cleaner-looking web pages that load faster, and conserve bandwidth.

## [Control internet access based on time](https://help.safesquid.com/portal/en/kb/articles/time-profiler)

SafeSquid offers customizable scheduling options for security policies, allowing temporal control over web traffic. Thus, you may allow access to specific websites based on the time of day, like social media during lunch hours.

## [Integrate with a DNS Blacklisting service (DNSBL)](https://help.safesquid.com/portal/en/kb/articles/dns-blacklist)

DNS tunnelling attacks evade the legacy HTTP-based security solutions as the exploit is carried out via DNS queries, which are traditionally perceived as non-threatful. Integrating with a customisable DNSBL server enables your Security Operations Centre (SOC) to effectively block domains at the DNS level.

## Filter IP based on geolocation

To defend against state-sponsored cyberattacks and regional malware outbreaks, SafeSquid's Geo-IP can block traffic from specific geographical regions.

## Enforce Content Security Policy (CSP)

By restricting the sources of executable scripts and resources, enforcing CSP at the secure web gateway mitigates the risk of Cross-Site Scripting (XSS) and other injection attacks.

## Configure Antivirus Engines

To block virus uploads and downloads, SafeSquid offers diverse antivirus setups to ensure comprehensive protection against various threats. To defend against Zero-Day malware, we recommend minimising the vulnerability window using a multi-layered antivirus scanning approach.

### [SqScan](https://help.safesquid.com/portal/en/kb/articles/sqscan)

SafeSquid's integrated on-the-wire malware scanner employs advanced heuristic techniques to evaluate and sanitize all payloads, including those that are compressed or encrypted.

### [ClamAV](https://www.clamav.net/)

SafeSquid seamlessly integrates with the ClamAV engine for signature-based malware detection. Furthermore, its customisable
configuration empowers security administrators to add PCRE keyword expressions sensitive to the organisation. Thus, enabling deep packet inspection for confidential information in archive files, emails, and Instant Messaging (IM) traffic.

### [Generic ICAP Threat Detection Interface](https://help.safesquid.com/portal/en/kb/articles/icap)

SafeSquid facilitates simultaneous connection with various ICAP-based threat detection services for broader security coverage. With its Intelligent Threat Quarantine Mechanism, SafeSquid automatically isolates content flagged by ICAP services.

## [Filter inappropriate content](https://help.safesquid.com/portal/en/kb/articles/content-filtering)

SafeSquid's Content Analyser has a keyword scoring system to thoroughly inspect all textual, and multimedia content in real-time to prevent exposure to unsuitable materials such as pornography or violence.
Furthermore, you can utilise Perl Compatible Regular Expressions for sophisticated keyword detection in content filtering. User-adjustable settings allow fine-tuning the sensitivity of the content detection system. The [image-filtering](https://help.safesquid.com/portal/en/kb/articles/image-analyzer) AI systems update in real time for up-to-date and effective visual
content analysis.

## [Protect user privacy](https://help.safesquid.com/portal/en/kb/articles/block-third-party-cookies)

Websites generally use third-party cookies for tracking user activity.
[Blocking third-party cookies](https://help.safesquid.com/portal/en/kb/articles/block-third-party-cookies) is essential for user privacy and security. SafeSquid offers you a user-configurable option to limit the tracking data received by remote websites, bolstering user privacy.

## Prioritise mission-critical traffic

Mission-critical applications and services are vital for business continuity. By prioritizing mission-critical traffic, the applications get the necessary bandwidth and low latency to perform optimally.

### Segregate network channels for an application

Provisioning dedicated pathways for mission-critical applications reduces the risk of network congestion. Additionally, the implementation of QoS policies ensures that high-priority traffic gets the required resources and treatment.

### [Manage Bandwidth](https://help.safesquid.com/portal/en/kb/articles/do-bandwidth-management-with-limits)

In the event of a network disruption or disaster, managing bandwidth ensures that essential services and applications continue to operate, supporting business continuity and disaster recovery efforts.

To avoid degraded user experience due to network congestion, efficient allocation of network resources is essential. With SafeSquid, you can [set boundaries on the size and volume of data transfers](https://help.safesquid.com/portal/en/kb/articles/do-bandwidth-management-with-limits).

## [Setup Captive Portal](https://help.safesquid.com/portal/en/kb/articles/enable-captive-portal-port-on-safesquid)

Captive portals are typically used by business centres, airports, hotel lobbies, coffee shops, and other venues that offer Wi-Fi hot spots for Internet users. To secure public or guest Wi-Fi networks, the Internet clients are redirected to a captive portal. Here, the users are requested to reveal their identity for web access. SafeSquid correlates the user identity with the client IP for applying the access policies.

## Multi-homing your network

Using multiple Internet Service Providers (ISPs) minimises the risk of downtime due to outages at the internet provider. [Splitting load between different ISPs](https://help.safesquid.com/portal/en/kb/articles/split-the-load-between-different-isps) allows you to manage bandwidth more effectively by leveraging the combined capacity of multiple ISPs.

## Cluster your proxy servers

By linking multiple Proxy nodes in a load-balanced or failover cluster, you can enhance performance and reliability. SafeSquid supports both active-active and active-standby modes, catering to different operational requirements. Instances activated with the same key will have consistent policy replication and private web category synchronisation.

## [Caching Specific websites](https://help.safesquid.com/portal/en/kb/articles/caching-specific-websites)

Content Caching leads to faster load times and reduced bandwidth usage at the cost of increased management complexity and potential staleness of cached content. SafeSquid offers a neat, efficient, and manageable solution to only store content from frequently accessed websites.

## [Prefetch Content](https://help.safesquid.com/portal/en/kb/articles/prefetch-embedded-images)

With the prefetching feature, virtually any file referenced in HTML can be pre-fetched, and cached, thus reducing resource retrievals and improving retrieval time. The Prefetching feature can be used as an 'internet accelerator'.

## [Customise blocking templates](https://help.safesquid.com/portal/en/kb/articles/create-custom-templates)

Organisations can customize blocking templates to conform to organizational branding and communication styles.

## [Recover from a disaster](https://help.safesquid.com/portal/en/kb/articles/setup-cloud-restore)

With SafeSquid's 365-day integrated cloud backup and disaster recovery, you can access the last saved configuration.

## Configure proxy operational mode

With a range of versatile Proxy Operational configuration settings, SafeSquid can cater to diverse network requirements.

### [Configure SafeSquid as Forward Proxy](https://help.safesquid.com/portal/en/kb/articles/deploy-safesquid-behind-corporate-proxy)

As a forward proxy, SafeSquid acts as an intermediary for requests from clients seeking resources from other servers, enabling organizations to protect internet users. Here, client applications are explicitly set to use a specified proxy server.

### [Configure SafeSquid as Reverse Proxy](https://help.safesquid.com/portal/en/kb/articles/how-to-configure-reverse-proxy)

As a reverse proxy, SafeSquid sits between external clients and internal servers, intercepting requests from clients and forwarding them to the appropriate server, enabling organizations to protect web resources.

### [Configure SafeSquid in a Proxy-Chain](https://help.safesquid.com/portal/en/kb/articles/proxy-chain)

You can choose to route traffic through multiple proxy servers before reaching the destination. A multi-layered approach makes it harder for attackers to intercept or tamper with the traffic.

### [Configure SafeSquid as a Transparent Proxy](https://help.safesquid.com/portal/en/kb/articles/transparent-proxy)

To facilitate proxy-unaware applications, seamlessly redirect traffic by configuring SafeSquid as a [Transparent Proxy](https://help.safesquid.com/portal/en/kb/articles/transparent-proxy). As no configuration is required, deployment is quick and easy.

## Leverage Proxy Auto-Configuration (PAC)

SafeSquid supports PAC files to enable automatic traffic distribution across proxy clusters.

## [Integrate with Web Cache Communication Protocol (WCCP)](https://help.safesquid.com/portal/en/kb/articles/transparent-redirection-with-safesquid-and-wccp)

For WCCP-enabled routers, SafeSquid can be configured to participate in transparent redirection.

## [Manage Disk Space](https://help.safesquid.com/portal/en/kb/articles/manage-disk-space-on-safesquid-server)

SafeSquid generates large log files and reports for traffic analysis. To ensure enough space is always available, managing disk space on a SafeSquid server is crucial.

## [Troubleshoot](https://help.safesquid.com/portal/en/kb/troubleshooting)

To identify the root cause of usability issues and performance bottlenecks, SafeSquid offers multiple levels of troubleshooting assistance.

### Monitor SafeSquid health

SafeSquid Dashboard displays the status of each modular function, integration, and database, and enables administrators to analyse the performance of your secure web gateway.

### [Generate performance plots](https://help.safesquid.com/portal/en/kb/articles/generate-performance-plot-from-safesquid-user-interface)

To visualise performance metrics, administrators can also generate performance plots.

### Use the SWG troubleshooter

SafeSquid's troubleshooting tool provides a web interface to assist you in identifying common problems in accessing websites.

### Configure logging

SafeSquid has customisable logging options for diverse usage analytics, debugging, and performance validation equirements. SafeSquid's Open Format logs are human-readable, and structured for programmatic analysis using elementary tools. Logs are also streamed to the product interface for quick impact analysis of configuration changes.

### [Analyse the SafeSquid Logs](https://help.safesquid.com/portal/en/kb/articles/analyze-the-safesquid-logs)

SafeSquid application logs are stored in plain text form under the **/var/log/safesquid** directory. A comprehensive set of logging modules offers advanced forensic capabilities for enhanced network security and usage analysis.

### Manage log storage

SafeSquid logs are automatically time-stamped, and the latest log file is rotated. For reducing footprint, SafeSquid has configurable options for compressing log files and scavenging old data.

### [Stream logs to Remote Collectors](https://help.safesquid.com/portal/en/kb/articles/forwarding-logs-to-the-siem-server-by-configuring-the-udp-port)

SafeSquid also facilitates real-time transport of logs to remote aggregators and analytics facilities like SIEM.
