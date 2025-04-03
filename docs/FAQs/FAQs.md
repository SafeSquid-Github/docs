# Frequently Asked Questions

## What is SafeSquid?

SafeSquid is an RFC 2616 compliant HTTP/1.1 proxy server, specially designed to provide maximum protocol, and payload security.

SafeSquid based Secure Web Gateways enable your users to safely access the web.

SafeSquid, when setup in Reverse Proxy mode, secures your web applications.

SafeSquid is a highly scalable software, that enables scaling up by increasing the hardware provisioning, or scaling out by creating an application cluster.

## Why should I use SafeSquid?

SafeSquid is an HTTP Proxy Server specially designed for web security. You should use SafeSquid for securely distributing Internet access across large network and to protect your enterprise against productivity losses, and collateral losses.

## Which Operating Systems does SafeSquid support?

SafeSquid support both operating systems, i.e. LINUX as well as Microsoft Windows.

The installable packages for both these platforms (LINUX and Microsoft Windows) are different for obvious reasons, the configuration and operation is quite identical. So, you can choose platform of your choice, to host SafeSquid Proxy Service.

Yes, the advantages of deploying SafeSquid on Linux are overall higher because the Linux operating system is better suited for servers. But then if you are more comfortable with Microsoft®Windows, you can happily deploy on Windows. Migration from either of the platforms to the other is not very difficult, really!

## What is the minimal hardware required for SafeSquid?

RAM: 4 GB

CPU: 2 Core

HDD: 160 GB (Depending on the size of logs and database you want to store)

See the Hardware Requirements here - Hardware requirements


## Where should I get the latest version of SafeSquid to upgrade?

You can download **SafeSquid SWG for Windows** package from - http://downloads.safesquid.net/SWG/windows/setup_safesquid_swg_latest.exe

You can download **SafeSquid SWG for Linux** package from - http://downloads.safesquid.net/appliance/binary/safesquid_latest.tar.gz

## What is SafeSquid for Windows?

SafeSquid for Windows is content filtering proxy server. SafeSquid for Linux has been natively ported for use on Microsoft Windows platform, and distributed as SafeSquid for Windows. It gives you Total Access Control, Total Content Control & Total Internet Security. SafeSquid for Windows can be installed on any desktop/server having Microsoft Windows based 64-bit Operating Systems.

## Where should I get a product activation key?

You can get a product activation key **on SafeSquid self-service portal** - https://key.safesquid.com/

You must register to create your account on **SafeSquid self-service portal** and **download your product activation key**

## What is SafeSquid Self Service portal?

The SafeSquid Self-Service Portal is the cloud-based management console for SafeSquid.

The SafeSquid Self-Service Portal manages the activities like, SafeSquid cloud-backed features, Custom Web Categorization, Web Security Clients for Roaming users (VPN), Confidential Data Signatures, Subscription management, etc.

Read more about Management of Self-Service Portal

## Whom should we permit to access the SafeSquid Web GUI?

SafeSquid has an intrinsic Web GUI, that enable you to manage your installation, setup required policies, and monitor your secure web gateway.

You should configure SafeSquid policies to allow access of the Web GUI to only security administrators.

## How do I know SafeSquid product is activated?

If you able to access all the websites from your browser that means your product is activated.

## Where should I get license details?

Once you activate product successfully you should get license details on Support page of SafeSquid Web GUI.

For more details follow- LINK

## Why am I getting "Proxy Access Denied?"

If you should not properly configure policies under access restriction section or administrator should not give you access of SafeSquid Interface, you are getting "Proxy Access Denied" template.

## Does SafeSquid inspect HTTPS traffic?

Yes of course, SafeSquid inspect HTTPS traffic.

HTTPS Inspection is the standard Security technology for encrypting a connection between the client and web server.

## When should I enable HTTPS Inspection?

Enable HTTPS inspection on SafeSquid SWG to inspect traffic that encrypted by the Secure Sockets Layer (SSL) protocol. By that SafeSquid do deep content inspection of encrypted HTTPS traffic. Encrypted content filtered easily.

## When should I bypass HTTPS Inspection?

The HTTPS inspection Bypass option enables you to define specific websites that are not subject to decryption as they flow through the proxy.

Some websites may include personal identification information that should not be decrypt.

To avoid liability for inspecting this type of information, you may want to specify some or all these sites for decryption bypass.

The selected sites will not be decrypt even if the category or categories that the sites belong to selected for SSL analysis.

## What are the benefits of HTTPS inspection in SafeSquid?

## Having HTTPS inspection feature some interesting things that you can do with this SafeSquid SWG

You should block access to personal Google accounts.

You should give Read only access to the Facebook, Twitter sites. Users can able to login into their accounts but they cannot able to do post or comment or like or chat.

You should enforce safe search or safety mode-based searches in Google, Bing and Yahoo search engines and also, we can enforce in any websites that are offering safety mode-based search.

You should block images over Google

You should filter text, Images over HTTP, and HTTPS sites

You should allow specified users to access or to login into specified HTTP and HTTPS sites and block others

You should use Virus scanning for both HTTP and HTTPS sites?

You should block attachments to Gmail and Block Gmail Chat

## What is an SSL certificate?

SSL Certificates are small data files that digitally bind a cryptographic key to an organization's details.

When installed on a web server, it activates the padlock and the https protocol and allows secure connections from a web server to a browser.

SSL Certificates provide secure, encrypted communications between a website and an internet browser.

SSL stands for Secure Sockets Layer, the protocol which provides the encryption.

SSL Certificates installed on pages that require end-users to submit sensitive information over the internet like credit card details or passwords.

## Where can I get an SSL certificate?

You should get SSL certificate on **SafeSquid self-service portal** at - https://www.safesquid.com/

You can generate new self-signed certificate also.

Follow - LINK

## Can I use my SSL certificates generated from my Enterprise CA?

Yes, you can use your SSL certificate generated from you Enterprise CA if you have. SafeSquid provides you a facility to use SSL certificate generated from Enterprise CA.

## Can I integrate an LDAP service like Microsoft Active Directory or OpenLDAP with SafeSquid?

Yes, you can integrate an LDAP service like Microsoft Active Directory or OpenLDAP with SafeSquid if your network enterprises that many users have, popularly manage user credentials via a centralized system.

Microsoft's Active Directory, and OpenLDAP based various Directory Services are extremely popular for setting up a centralized user identity management system.

A Web Gateway when integrated to a Directory Service, can:

Authenticate the users, based on their Directory Service Credentials,

Control their access to the web depending upon their enterprise role and hierarchy,

Log and report their activity, in a manner that the HR managers can analyse internet usage individually and of groups of people.

## What is SafeSquid SSO Authentication?

SafeSquid SSO authentication is non-interactive authentication process.

SafeSquid SSO Authentication support is particularly useful for Enterprise networks that have a Microsoft AD based Domain controller.

By properly configuring the necessary Kerberos related factors with SafeSquid, your enterprise Internet users can enjoy SSO Authentication.

SafeSquid SSO authentication ensures that your users do not have to manually provide their user credentials as username / password to access your networked enterprise resources and services, yet their access restricted as specified. SafeSquid SSO authentication, thus not only just adds convenience to the overall user experience, but also enhances security.

## If my SSO authentication fails is LDAP fail over functionality available in SafeSquid?

If user unable to get access for network enterprise in case, user should not face any problem of authentication because SafeSquid gives you a fantastic functionality known as LDAP fail-over.

If user face any issue while SSO authentication he/she should give LDAP valid credentials i.e. Username and Password.

Once username and password validated user should get access for network enterprise.

## When should I bypass authentication?

Certain applications (like Dropbox) which does not support proxy authentication, they want to bypass authentication for that application.

## Can I use SafeSquid Captive portal to monitor internet usage traffic?

Yes, you can use SafeSquid captive portal to monitor internet usage traffic.

## What is SafeSquid Captive portal?

SafeSquid captive portal is works as same as general captive portal.

Used to enhance security of WIFI network by authenticating users before granting internet access.

Users will receive SafeSquid captive portal landing page when they try to access internet access via WIFI network. Users will punch in credentials.

SafeSquid captive portal validates user credentials using various authentication mechanisms and maintains database of authenticated source IP addresses and usernames for lookup.

If a user from a source IP address authenticated through captive portal, then SafeSquid will pick the username from the database and attach to the traffic coming from the same source IP address

This way SafeSquid captive portal secures WIFI network by only granting access to valid users

Combining SafeSquid Captive Portal with SafeSquid secure web gateway will allow you to monitor internet usage, allow you to filter traffic and do many more things to enhance security levels.

## Does SafeSquid supports transparent proxy?

Yes, SafeSquid supports transparent proxy.

SafeSquid support both HTTP and HTTPS websites in transparent mode. The HTTPS websites in transparent mode called as SSL transparent proxy

The traffic will come to router and router will send traffic to SafeSquid Secure web gate way with port 80 and 443 respectively.

The **redirection rules on SafeSquid Secure web gateway** will redirect traffic to SafeSquid Proxy with port 8080 and 8443 (SSL transparent) respectively (By enabling IP forwarding).

For more detail follow - LINK

## IPV6?

## Why should I enable WCCP?

If you are looking for transparent redirection of traffic, Load balance traffic & scaling up or Service assurance & high availability, you should enable WCCP in SafeSquid

Enable WCCP support in routers. This can be done only if your router supports WCCP.

Ex: CISCO ASA routers.

Web Cache Communication Protocol (WCCP) is a Cisco-developed content-routing protocol that provides a mechanism to redirect traffic flows in real-time. It has built-in load balancing, scaling, fault tolerance, and service-assurance (failsafe) mechanisms.

For more details follow -- LINK

Can I make SafeSquid go direct for some sites

Can I prevent users to access porn sites?

## Can I prevent user to access Social networking sites?

Yes, you can prevents users from accessing Social networking sites using SafeSquid.

If you configured SafeSquid, will block all social networking sites by default.

You can allow those sites for specific time say in between LUNCH hour.

Allow social networking sites in lunch hours follow -- LINK

Facebook is a social networking website that allows users to interact with other users in a multimedia environment on the Web. Facebook users can install and use applications to enhance their experience. Many organizations want to allow Facebook access to maintain morale, increase retention, and boost hiring, but they also want to control access to it.

SafeSquid allows you to give full Facebook access to your social media group, partial access to a customer service group, and read-only access to other groups. Access to Facebook can also assigned by time of day, so permissions could relax during lunch or after business hours. For more details follow - LINK

## Can I prevent users to upload confidential data?

Yes, you can prevents users from uploading confidential data using SafeSquid.

When you have confidential information in your organization and someone from internal users just leaked the information intentionally or unintentionally, then what will happen? Huge productivity loss.

There are various mediums for data leakage. Users can upload important document to internet, even though your content filtering software does not allow users to upload Microsoft Word and Microsoft XL files, users can act smart and creates an archive using those files and tries to upload achieved files. You cannot simply block archives in your organization because there are people who simply use archive to transfer log files of large sizes.

There are other users who simply take information out of Microsoft Word and Microsoft XL and simply send an Email to third party.

In modern era, these kind of data leaks become a challenge for organizations. Organizations are in a quest for content filtering software's which can deeply inspect archive files and able to identify whether the archive or emails which contains certain keyword matches.

This challenge is also big for security experts because when there is an upload the post data formation is different for Gmail / Google Drive/ Media fire/ Drobox etc. The wide range of formations of post data made it difficult for security experts to derive concrete solution to these challenges.

But SafeSquid come up with **Advanced DLP** solution embedded into **SafeSquid SWG**, which analyses post data, deeply inspect archives using file decomposition methods and able to identify whether archive or emails or social media posts contains certain keyword matches. Based on the match you can take effective actions like block upload if user is so and so or block if the destination website is so and so.

The Advanced DLP solution can managed from SafeSquid Self Service portal there you can create various keyword expression matches. SafeSquid SWG will download those keyword expressions and loads into memory. When an archive uploads or an email write, SafeSquid SWG analyses Post data and transmit it to the Clam AV daemon for Signatures verification. If the keyword expression matches Clam AV daemon responds with match. SafeSquid will take respective action based on match.

For more information follow - How To

## Can I prevent users to upload specific file extensions?

Yes you can prevent users from uploading specific file extensions using SafeSquid.

SafeSquid DLP section is nothing but **Data Loss Prevention module**, used to protect from sending sensitive or critical information outside the corporate network.

It is possible by blocking the specific file types or file extensions based on Content type and extension of file types.

For more information follow - How to block file uploads or downloads

## Can I prevent users to use anonymous proxy?

Yes you can prevent users from using anonymous proxy using SafeSquid.

An anonymous proxy will allow users to surf the web anonymously, since it tunnels your data through servers that spread out across the globe and involve other IP addresses.

Anonymous Proxy service enhances your security and lets your users access some restricted websites online.

SafeSquid block these proxies so that no user can access the blocked websites.

For more detail follow -- How to block anonymous proxies

## Can I prevent users to use their personal Gmail account in company network?

Yes, you can prevent users from using their personal Gmail account in company network using SafeSquid.

Currently e-mails are necessary to exchange information. But allowing personal e-mails in the office network allows users to spend their productive time in other unnecessary things. Personal mails can be also a path leading to send confidential information. Blocking personal mails, solves the issue. But now some of the company mails are via Google Corporate domains.

Google corporate account allows organization to have their mailing server along with the additional Gmail features personalized for the organization with complete control. So, we currently cannot block Gmail.

For more details -- How To

## Can I prevent user to login over Facebook or Gmail?

SafeSquid restrict specific users from login over Facebook or Gmail.

Except selected users all can able to login into Facebook or Gmail.

For more details - How To

## Can I prevent users from downloading large files?

## Does SafeSquid protect network against Malware and External Attacks?

SafeSquid protect network against Malware and External attacks

There are numerous ways to protect and remove malware from our computers.

No one method is enough to ensure your computer is secure.

The more layers of Défense, the harder for hackers to use your computer.

Here are three simple ways to protect your computer,

Configure SafeSquid....

SvScan Antivirus

Clam AV Antivirus

ICAP Antivirus

For more details follow - How To

## Does SafeSquid protect network against Internal Threats and Data Leakage?

## Should I block third party cookie?

SafeSquid block the cookies for third-party domains.

Control tracking your activity across different sites and hide the referrer for third-party domains. SafeSquid provides you a great functionality. Now referrer is same as hostname.

You can also hide the user agents for third-party domains, instead of original user agent. SafeSquid use default user agent (Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90)).

For more details - How to block third party cookies

## Where should I get SafeSquid default policies?

You should get SafeSquid default policies and it's respective how to on "How To" section of http://docs.safesquid.com

## Should I get performance plot in SafeSquid?

You should get performance plot on support page of SafeSquid Web GUI

You can generate performance plot as per your choice.

SafeSquid gives you choice according to Last hour, last 7 days, last month, today

SafeSquid also gives you choice to select custom time.

## Should I get support tarball in SafeSquid?

You should get support tar-ball on support page of SafeSquid Web GUI

You can generate new support tar-ball.

You can search support tar-ball from existing list according to year, month, day, or time

## Should I download my config file?

You should download your config file any time.

SafeSquid gives you choice to download config file according to year, month, day, or time.

SafeSquid also gives you choice to download default config file in case you should have to revert the config file.

## Is SafeSquid provide dashboard for reporting?

SafeSquid provide dashboard which contain details of last 1000 transactions.

SafeSquid dashboard provides Ip address, Users, User groups, websites domains, profiles, application signature, categories, upload content, download content,

User can edit total number of transactions as per the requirement for report.

User also gets report based on date range.

Use can select any number of filtering option.

## Should I get report in PDF format?

SafeSquid reporting model gives you exportable reports to PDF and Excel formats.

To get report you have to access SafeSquid interface and click on Reports > Dashboard. At right bottom you should get PDF button just above the SafeSquid version.

## Can I get report of specific dates?

Yes, SafeSquid has reporting model.

SafeSquid reporting model reduced data Processing time

SafeSquid reporting model gives you more detailed reports

SafeSquid reporting model gives you hour-wise reports

SafeSquid reporting model gives you more filtering options

SafeSquid reporting model gives you deeper data analysis

SafeSquid reporting model gives you an automated data mining engine

SafeSquid reporting model gives you exportable reports to PDF and Excel formats

My SafeSquid becomes very slow after it has been running for some time? Why?

## Can SafeSquid anonymize HTTP requests?

## How does SafeSquid licensing work?

SafeSquid SWG is available with annual subscription.

Base Subscription Plans

You may choose any one of the following Base Subscription plans:

Named Users

Concurrent Connections

CPU Hours

Named Users, and Concurrent Connection based subscriptions are annual subscriptions. You may however purchase for multiple consecutive years.

Premium Features Subscription

Data Leakage Prevention

Support for Roaming (Windows Laptop) users

Log Aggregator

WCCP

For more details Follow - SafeSquid licensing

## How do I purchase SafeSquid secure web gateway?

You can opt for SafeSquid SWG subscription by paying online via PayPal or via Wire / Bank Transfer.

## What happens if I stop paying SafeSquid for my subscription(s)?

As SafeSquid SWG is available as annual subscription, if you do not renew your subscription the product will stop working
