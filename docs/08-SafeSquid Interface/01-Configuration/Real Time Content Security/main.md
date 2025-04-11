---
title: 2.0 Real-time content security  
description: Configure SafeSquid's real-time content security features like HTTPS inspection, antivirus scanning, DLP, ICAP integration, and intelligent content filtering to enhance protection against malware, data leakage, and unauthorized access.  
keywords:  
- real-time content filtering  
- safesquid ssl inspection  
- web security gateway  
- data loss prevention  
- web content filtering  
---

Configure security filters like SSL inspection, antivirus, content modifier, and image scanning.

## HTTPS Inspection

HTTPS Inspection is the standard security technology for encrypting a connection between the client and the web server. By enabling this section SafeSquid does deep content inspection of encrypted HTTPS traffic. Encrypted content is filtered easily. Here you can configure the overall operation to handle scanning of connections under HTTPS (HTTP over SSL).

Read more about [HTTPS Inspection](https://docs.safesquid.com/wiki/HTTPS_Inspection)

## Clam Antivirus

Clam antivirus is an extra layer of security besides SvScan which protects you from viruses. ClamAV is an open-source anti-virus engine that is built to detect viruses, trojans, malware and other threats. It supports multiple file formats (documents, executables, or archives), and utilizes multi-thread scanner features. With this antivirus feature, you can detect and block files containing viruses known to the ClamAV daemon scanner. You can integrate your own ClamAV server here.

Read more about [Clam antivirus.](https://docs.safesquid.com/wiki/Clam_antivirus)

## Text Analyzer

Most websites that serve pornographic content, try very hard to promote themselves on the search engines. Search engines list and classify websites by \"looking into\" the meta tags for keywords, descriptions & titles. SafeSquid\'s Text Analyzer can be used to decisively identify such websites based on a keyword scoring system. This feature can be effectively used to block websites belonging to specific categories, without having to depend on any database.

Read more about [Text Analyzer.](https://docs.safesquid.com/wiki/Text_analyzer)

## Redirect

Strictly redirect one URL to another. This is very useful if you want to redirect a certain page to a new location, change the URL structure of a site, or even redirect users to another website entirely. A redirect automatically sends your website\'s visitors to a chosen destination. With this feature, achieve Safe Searches for different search engines.

Read more about [Redirect.](https://docs.safesquid.com/wiki/Redirect)

## DNS blacklist

Set the DNSBL reference service to prevent users from visiting dangerous websites.

Read more about [the DNS blacklist](https://docs.safesquid.com/wiki/DNS_blacklist)

## Image Analyzer

Use this section to prevent the users from viewing pornographic image content. This section allows to blocking of inappropriate images by analyzing the graphical content of an image, in real time.

Read more about [Image analyzer.](https://docs.safesquid.com/wiki/Image_analyzer)

## ICAP

Use ICAP to perform virus scanning, content modification and blocking inappropriate content. You can integrate different types of ICAP servers.

Read more about [ICAP.](https://docs.safesquid.com/wiki/ICAP)

## Content Modifier

 It enables you to modify the content of web pages, files, the client header, and the server header in real-time. You can modify the posts with selected keywords posted on the websites.

Read more about [Content Modifier.](https://docs.safesquid.com/wiki/Content_modifier)

## DLP

DLP is nothing but a Data Loss Prevention module in Safequid. DLP module was introduced in SafeSquid to restrict end users from sending sensitive or critical information outside the corporate network. You can achieve this simply by creating rule(s) in the DLP section for blocking the predefined content type.

Read more about [DLP](https://docs.safesquid.com/wiki/DLP)

## SqScan

As the Internet becomes more and more integrated into our everyday lives, we must all learn how to defend against new types of online attacks. There are thousands of viruses floating around right now waiting to attack your computer. An unprotected computer connected to the internet can get a virus in less than a minute. That means securing your computer correctly is still incredibly important. Here you can find the solution to this problem. SqScan is a built-in module in SafeSquid that protects users against viruses, trojans, malware and other threats.

Read more about [SqScan.](https://docs.safesquid.com/wiki/SqScan)

## Custom Settings

Customize the configuration to suit your internet access policies.

## Categorize Websites

Since the Internet is such a huge place, it is practically impossible to make policies for each website. So SafeSquid comes with over 40 Million Categorized Websites, where websites are grouped into categories based on the content they serve. It also allows you to re-categorize or create custom categories based on the needs of your organization.

Read more about [Categorize Web-Sites.](https://docs.safesquid.com/wiki/Categorize_Web-Sites)

## Time Profiler

Use Time Profiler to setup your Time-based Internet Access policies. Block or allow the websites in the particular time intervals.

Read more about [Time Profiler](https://docs.safesquid.com/wiki/Time_Profiler)

## Response Types

 Use Response profiles to manage profiling based on the responses received from the web server. You can block or allow the different types of file downloads based on content type.

Read more about [Response Types](https://docs.safesquid.com/wiki/Response_Types)

## Request Types

 Use Request Profiler to Manage profiling based on the request sent to a web server. Analyze all requests sent to the browser, and block or allow the request based on the access rules. You can Allow or block specific YouTube channels by using request types.

Read more about [Request Types](https://docs.safesquid.com/wiki/Request_Types)

## Templates

Templates are used throughout SafeSquid as a replacement for pages that can\'t be displayed due to filtering, error, or other conditions, specifying the reason for the same. They can be customized according to your needs.

Read more about [Templates.](https://docs.safesquid.com/wiki/Templates)

## External applications

 The external feature allows you to use any program or script to parse the contents of a file.

Read more about [External applications](https://docs.safesquid.com/wiki/External_applications)

## Restriction Policies

Granularly enforce restrictions on users.

## Privacy control

Setup controls to ensure safe information exchange between users and remote websites.

## Cookie filter

Configure cookies for different websites. With Cookie Filter you can choose, which hosts (websites) the browsers are allowed to send and receive the cookies. You can allow or block the cookies based on your requirements. By this, block the logins to all websites.

Read more about [Cookie filters.](https://docs.safesquid.com/wiki/Cookie_filter)

## Header filter

Control how the SafeSquid edits the HTTP headers that pass between your browser and the Internet. You can add, remove or insert the particular values into the headers. By this, block the logins into the consumer Google accounts.

Read more about [Header filter](https://docs.safesquid.com/wiki/Header_filter) 

## Elevated Privacy

Block the cookies for third-party domains. Control tracking your activity across different sites and you can hide the referer for third-party domains. Now referer is the same as the hostname. You can also hide the user agents for third-party domains. Instead of the original user agent, SafeSquid uses the default user agent (Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90)).

Read more about [Elevated Privacy](https://docs.safesquid.com/wiki/Elevated_Privacy)

## Access Profiles

Setup your Profiled Internet Access policies. The Profiling Engine re-evaluates the connections before user authentication, sending a request to the web server, and sending the response to the user. Each re-evaluation processes the entire list before affecting the resultant restriction. The Profiling Engine ignores disabled entries, intelligently. An entry is applicable to a connection only if it meets ALL the specified conditions. The Profiling Engine's evaluation logic follows the order of your entries. Inter-link Entries logically by referring to Profiles, applied in a previous applicable Entry. Your entries can add Profiles to a connection or remove them, logically.

Read more about [Access Profiles](https://docs.safesquid.com/wiki/Access_Profiles)

## Speed Limits

Setup your bandwidth-related configuration. Block all downloads and uploads after reaching to the maximum download and upload limits. Set the download transfer limit for all users or specific users.

Read more about [Speed Limits.](https://docs.safesquid.com/wiki/Speed_Limits)
