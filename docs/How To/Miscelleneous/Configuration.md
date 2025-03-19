# Configuration

Your enterprise network could have its own unique characteristics, constraints and demands. You may thus be required to configure each of SafeSquid's features for optimum results.

SafeSquid's embedded REST based Web UI enables you to access the configuration settings using any standard Web Browser like FireFox, Chrome, etc. The configuration of each feature is an independent section. These sections are clubbed together just for your ease.

Read here if to know How To access the SafeSquid's UI.

SafeSquid loads the configuration from disk into memory, when the process starts. The Web UI interacts directly with the configuration in the memory, thus almost all the changes that you make are effected in real-time. The changes generally do not cause loss of on-going web sessions. However, these changes are "volatile" and would be lost when the SafeSquid process restarts. At the bottom-right on the UI is the option to "Save Settings". Clicking this enables you to make the changes permanent, and remain in effect when the process restarts. Everytime you Save Settings, the existing configuration is backed-up, and the new configuration is saved on the disk. An option to save the new configuration to "SafeSquid Cloud-based Disaster Recovery" is also presented to you.

## Application Setup

This group of SafeSquid's feature sections are generally set during initial pilot roll-out, and seldom need to be revisited. These configurations ensure your application is deployed securely, and readily serves your enterprise network.

### Network settings

Network settings define the Sockets on which SafeSquid will Listen, and accept connections from clients, Choose additional bindings (roles) for this Socket.

And also, you can Specify Interfaces for outgoing connections here.

Read more about [Network Settings](https://help.safesquid.com/portal/en/kb/articles/network-settings)

### Integrate LDAP

Network enterprises that have a large number of users, popularly manage user credentials via a centralized system.

The centralized system ensures user identification across all the networked enterprise resources and services.

Users too benefit immensely, as they need a singular credential to access anything across the network enterprise.

Microsoft's Active Directory, and OpenLDAP based various Directory Services like Novell's e-Directory are extremely popular for setting up a centralized user identity management system.

Almost all Directory services also offer role, and hierarchy-based grouping of users. Most enterprise class networked resources and services also allow control of user access, and rights based on their group membership.

A proxy-based web gateway is an application layer firewall service that distributes Internet Access to people in the networked enterprise. It is thus essentially a network service.

A Web Gateway when integrated to a Directory Service, can:

-   Authenticate the users, based on their Directory Service Credentials,

-   Control their access to the web depending upon their enterprise role and hierarchy,

-   Log and report their activity, in a manner that the HR managers can analyse internet usage individually and of groups of people.

Read more about [Integrate LDAP](https://help.safesquid.com/portal/en/kb/articles/integrate-ldap)

### Access restrictions

Access Restrictions allows you to create a set of rules that govern internet access to machines on your network. You can create rules that manage the access by individual IP address(es), IP address range, LDAP users, Basic authentication etc.

It also allows you to:

Create policies for Authentication

Policies for access to the WebGUI

Permission to use CONNECT methods for https sites or FTP clients

Disabling of one or more security filters

Profile the users for being uniquely processed in other sections

Read more about [Access restrictions](https://help.safesquid.com/portal/en/kb/articles/access-restrictions)

### Accelerators

Use accelarators to optimize resource utilization and improve response time.

#### Caching

Content Caching improves bandwidth efficiency. A page or file, when requested by a user, is served to the user and a copy of it is also maintained locally in the cache. So, when a request is made to fetch the same page or file, it is served with the local copy, instead of 'a fresh fetch'.

Read more about [Caching](https://help.safesquid.com/portal/en/kb/articles/caching)

#### Prefetching

SafeSquid can analyze HTML pages, to identify links to embedded content, and initiate the fetch and cache process while still serving the initial HTML pages.

Read more about [Prefetching](https://help.safesquid.com/portal/en/kb/articles/prefetching)

### System configuration

Use 'System configuration' to tune various parameters with respective network infrastructure.

Read more about [System configuration](https://help.safesquid.com/portal/en/kb/articles/system-configuration)

### Proxy chain

The Proxy chain section allows you to forward requests through another proxy selectively, SOCKS4 or SOCKS5 firewalls.

Read more about [Proxy chain](https://help.safesquid.com/portal/en/kb/articles/proxy-chain)

### FTP browsing

FTP Browsing section lets you configure how the FTP connections are established, and results are displayed.

Read more about [FTP browsing](https://help.safesquid.com/portal/en/kb/articles/ftp-browsing)

### WCCP

Use WCCP routers to enforce trasparent proxy.

Read more about [WCCP](https://help.safesquid.com/portal/en/kb/articles/wccp)

## Real time content security

You can configure security filters like SSL inspection, antivirus, content modifier, image scanning

### HTTPS Inspection

HTTPS Inspection is the standard Security technology for encrypting a connection between the client and web server.By enabling this section SafeSquid do deep content inspection of encrypted HTTPS traffic. Encrypted content is filtered easily. Here you can configure the overall operation to handle scanning of connections under HTTPS (HTTP over SSL).

Read more about [HTTPS Inspection](https://help.safesquid.com/portal/en/kb/articles/wccp)

### Clam antivirus

Clam antivirus is extra layer of security beside SvScan which protects you from viruses. ClamAV is an open-source anti-virus engine that is built to detect viruses, trojans, malware and other threats. It supports multiple file formats (documents, executables or archives), utilizes multi-thread scanner features. With this antivirus feature you can detect and block files containing viruses known to the ClamAV daemon scanner.You can integrate your own ClamAV server here.

Read more about [Clam antivirus](https://help.safesquid.com/portal/en/kb/articles/clam-antivirus)

### Text analyzer

Most web-sites that serve pornographic content, try very hard to promote themselves on the search engines. Search engines list and classify web-sites by "looking into" the meta tags for keywords, description & title. SafeSquid's Text Analyzer can be used to decisively identify such web-sites based on keyword scoring system. This feature can be effectively used to block websites belonging to specific category, without having to depend on any database.

Read more about [Text analyzer](https://help.safesquid.com/portal/en/kb/articles/text-analyzer)

### Redirect

Strictly redirect one URL to another. This is very useful if you want to redirect a certain page to a new location, change the URL structure of a site, even redirect users to another website entirely. A redirect automatically sends your website's visitors to a chosen destination. By this feature you can achieve Safe Searches for different search engines.

Read more about [Redirect](https://help.safesquid.com/portal/en/kb/articles/redirect)

### DNS blacklist

Set the DNSBL reference service to prevent users from visiting dangerous websites.

Read more about [DNS blacklist](https://help.safesquid.com/portal/en/kb/articles/dns-blacklist)

### Image analyzer

Use this section to prevent the users from viewing pornographic image content. This section allows you to block inappropriate images by analyzing the graphical content of an image, in real time.

Read more about [Image analyzer](https://help.safesquid.com/portal/en/kb/articles/image-analyzer)

### ICAP

Use ICAP to perform virus scanning, content modification and blocking inappropriate content. You can integrate different types of ICAP servers.

Read more about [ICAP](https://help.safesquid.com/portal/en/kb/articles/icap)

### Content modifier

It enables you to modify the content of web pages, files, the client header, and server header in real time. You can modify the posts with selected keywords posting into the websites.

Read more about [Content modifier](https://help.safesquid.com/portal/en/kb/articles/content-modifier)

### DLP

DLP is nothing but Data Loss Prevention module in Safequid. DLP module was introduced in SafeSquid to restrict end users from sending sensitive or critical information outside the corporate network. You can achieve this simply by creating rule(s) in DLP section for blocking the predefined content type.

Read more about [DLP](https://help.safesquid.com/portal/en/kb/articles/dlp)

### SqScan

As the Internet becomes more and more integrated into our everyday lives, we must all learn how to defend against new types of online attacks. There are thousands of viruses floating around right now waiting to attack your computer. In fact, an unprotected computer connected to the internet can get a virus in less than a minute. That means securing your computer correctly is still incredibly important. Here you can find the solution to this problem. SqScan is a built-in module in SafeSquid that protects the users against viruses, trojans, malware and other threats.

Read more about [SqScan](https://help.safesquid.com/portal/en/kb/articles/sqscan)

## Custom Settings

Customize configuration to suit your internet access policies.

### Categorize Web-Sites

Since the Internet is such a huge place, it is practically impossible to make policies for each website. So SafeSquid comes with over 40 million Categorized Websites, where websites are grouped into categories based on the content they serve. It also allows you to re-categorize or to create custom categories based on the needs of your organization.

Read more about [Categorize Web-Sites](https://help.safesquid.com/portal/en/kb/articles/categorizewebsites)

### Time Profiler

Use Time Profiler to setup your Time-based Internet Access policies. Block or allow the websites in the particular time intervals.

Read more about [Time Profiler](https://help.safesquid.com/portal/en/kb/articles/timeprofiler)

### Response Types

Use Response profiles to manage profiling based on the responses received from the webserver. You can block or allow the different types of file downloads based on content type.

Read more about [Response Types](https://help.safesquid.com/portal/en/kb/articles/responsetypes)

### Request Types

Use Request Profiler to Manage profiling based on the request sent to webserver. Analyze all requests sent to the browser, block or allow the request based on the access rules. You can Allow or block specific YouTubechannels by using request types.

Read more about [Request Types](https://help.safesquid.com/portal/en/kb/articles/requesttypes)

### Templates

Templates are used throughout SafeSquid as a replacement for pages which can't be displayed due to filtering, error, or other conditions, specifying the reason for the same. They can be customized according to your needs.

Read more about [Templates](https://help.safesquid.com/portal/en/kb/articles/templates)

### External applications

The external feature allows you to use any program or script to parse the contents of a file.

Read more about [External applications](https://help.safesquid.com/portal/en/kb/articles/externalapplications)

## Restriction Policies

Granularly enforce restrictions on users.

### Privacy control

Setup controls to ensure safe information exchange between users and remote websites.

#### Cookie filter

Configure cookies for different websites. With Cookie Filter you can choose, which hosts (websites) the browsers are allowed to send and receive the cookies. You can allow or block the cookies based on your requirement. By this you can block the logins to all websites.

Read more about [Cookie filter](https://help.safesquid.com/portal/en/kb/articles/cookiefilter)

#### Header filter

Control how the SafeSquid edits the HTTP headers that pass between your browser and the Internet. You can add, remove or insert the particular values into the headers. By this you can block the logins into the consumer Google accounts.

Read more about [Header filter](https://help.safesquid.com/portal/en/kb/articles/headerfilter)

#### Elevated Privacy

Block the cookies for third-party domains. Control tracking your activity across different sites and you can hide the referer for third-party domains. Now referer is same as hostname. you can also hide the user agents for third-party domains. Instead of original user agent SafeSquid use default user agent (Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90)).

Read more about [Elevated Privacy](https://help.safesquid.com/portal/en/kb/articles/elevatedprivacy)

### Access Profiles

Setup your Profiled Internet Access policies. The Profiling Engine re-evaluates the connections before user authentication, sending request to the web server, and sending the response to the user. Each re-evaluation processes the entire list before affecting the resultant restriction.The Profiling Engine ignores disabled entries, intelligently. An entry is applicable to a connection only if it meets ALL the specified conditions. The Profiling Engine's evaluation logic follows the order of your entries. Inter-link Entries logically by referring to Profiles, applied in a previous applicable Entry. Your entries can add Profiles to a connection or remove them, logically.

Read more about [Access Profiles](https://help.safesquid.com/portal/en/kb/articles/accessprofiles)

### Speed Limits

Setup your bandwidth related configuration. Block all downloads and uploads after reaching to the maximum download and upload limits. Set the download transfer limit for all users or specific users.

Read more about [Speed Limits](https://help.safesquid.com/portal/en/kb/articles/speedlimits)
