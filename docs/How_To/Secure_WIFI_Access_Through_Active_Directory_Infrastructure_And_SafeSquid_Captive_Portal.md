# Secure WIFI Access Through Active Directory Infrastructure And SafeSquid Captive Portal

## Business challenge

Securing Unmonitored and Unsecured WIFI networks is a challenge that many organizations are looking forward to address.

As increased demand for BYOD (bring your own device), WIFI is common and minimum facility required in every organization.

But simply setting up WIFI access is not only the job. The job is completed only when you monitor and secure your WIFI network and your Users.

Securing WIFI is vital because that is **your network**.

If someone uses your network and something goes **wrong** then you will be **responsible** for the **cause and consequences.**

You should be able to **monitor**, who is using your WIFI, **control** what they can do via your WIFI and **secure** your users from external attacks.

## Client Scenario:

Stark tech is having 200 employees.

Provided internet services to employees through WIFI access points in DHCP enabled network.

There are no Wireless controllers (WLC) to secure WIFI network.

Stark tech challenges are

Authenticate any devices (PCs/Mobiles/Tablets/joined to domain controller or not) using active directory. But the users are reluctant to configure proxy settings in their devices.

Understand internet usage in their WIFI network.

Take actions based on violations.

Manage security based on employee groups

Keep track of information on monthly basis for security audit.

Stark tech is looking for cost-effective solution, which fulfil above requirements with tight security practices.

## Solution:

The combination of SafeSquid captive portal and SafeSquid secure web gateway is a solution that proposed for Stark tech.

The solution enables user authentication through Active directory and enables TOTAL ACCESS CONTROL and TOTAL CONTENT CONTROL.

It helps Stark tech to understand complete internet usage and allows implementation of security policies at granular levels.

The filtering capabilities and defending capabilities offered by solution enhanced security levels of Stark tech.

## What is captive portal?

A captive portal is a Web page that the user of a WIFI-access network is forced to view and interact with organization before internet access is granted.

Captive portals are typically used by business canters, airports, hotel lobbies, coffee shops, and other venues that offer Wi-Fi hot spots for Internet users.

## What is SafeSquid captive portal?

SafeSquid captive portal is works as same as general captive portal.

Used to enhance security of WIFI network by authenticating users before granting internet access.

Users will receive SafeSquid captive portal landing page when they try to access internet access via WIFI network. Users will punch in credentials.

SafeSquid captive portal validates user credentials using various authentication mechanisms and maintains database of authenticated source IP addresses and usernames for lookup.

If a user from a source IP address was already authenticated through captive portal, then SafeSquid will pick the username from the database and attach to the traffic coming from the same source IP address.

This way SafeSquid captive portal secures WIFI network by only granting access to valid users.

Combining SafeSquid Captive Portal with SafeSquid secure web gateway will allow you to monitor internet usage, allow you to filter traffic and do many more things to enhance security levels.

## Prerequisites:

Deploy SafeSquid Secure web gateway.

Enable SafeSquid Captive Portal facility on two ports, one is port 8081 for HTTP traffic and other one is port 8433 for HTTPS traffic. Also Enable SSL Inspection to control SSL traffic.

Redirect traffic from port 80 and 443 to 8081 and 8443 respectively. The redirection can take place on router if router supports redirection.

If your router only supports traffic forwarding then you should redirect traffic on SafeSquid server using IP tables.

Setup DHCP captive portal option on WIFI access point.

## How SafeSquid Captive Portal works?

![Safesquid and Captive Portal](/img/How_To/Secure_WIFI_Access_Through_Active_Directory_Infrastructure_And_SafeSquid_Captive_Portal/image1.webp)

Bob is using a mobile device in Stark tech and want to access internet services via Stark tech WIFI network.

Bob enable WIFI on his mobile device.

Identified Stark tech WIFI network and tried to connect to Stark tech WIFI.

Bob will receive an IP address (say 192.168.24.20) and a landing page of Stark tech from WIFI access point, which demands bob user name and password to gain access to internet.

Bob will punch in username and password.

The traffic will come to router and router will send traffic to SafeSquid Secure web gate way.

The redirection rules on SafeSquid Secure web gateway will redirect traffic to SafeSquid Captive Portal Port.

SafeSquid will interact with active directory and completes user credentials validation.

If validation is successful then SafeSquid will store 192.168.24.20, Bob as pair in internal database.

If Bob opens any websites or any apps from his mobile, SafeSquid will receive requests on Captive portal port.

SafeSquid will identify source IP address 192.168.24.20 and identifies user against 192.168.24.20 and will know that the user is Bob.

SafeSquid secure web gateway will check filtering policies, serve traffic and attach Bob username to the traffic served.

The process remains unchanged until the IP address is changed on Bob mobile device.

When Bob disables and reconnects to WIFI network after couple of hours, Bob will get a new IP address and the process will repeat from the start.

## [Setup Captive Portal With SafeSquid](https://help.safesquid.com/portal/en/kb/articles/setup-captive-portal-with-safesquid)

## Benefits

If anything goes wrong then you will have your concrete proofs saying who is responsible for the cause.

If your WIFI network is secured then you are safe and your users are safe.
