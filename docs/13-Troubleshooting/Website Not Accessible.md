---
title: Website Not Accessible
description: Learn how to troubleshoot and fix website connection failures through SafeSquid proxy, including DNS resolution issues, port connectivity, and internal network DNS misconfigurations.
keywords:
  - SafeSquid connection failed
  - website not loading through proxy
  - SafeSquid DNS troubleshooting
  - telnet SafeSquid port check
  - SafeSquid unable to connect to website
  - proxy website connection failure
  - SafeSquid no route to host
  - nslookup proxy connection issue
  - bind9 DNS configuration SafeSquid
  - conditional DNS forwarding
---

## Issues
When I access the website, it displays the connection failed error "**Connection to 192.168.27.30:80 failed**"

When I access https://abc.safesquid.com/ via proxy and log in using my corporate email ID, it displays a connection fail error "**Connection to abc.safesquid.com:443 failed**"

![Error showing "Connection to abc.safesquid.com:443 failed"](/img/Troubleshooting/Connection_failure_to_websites/image1.webp)

## Root Causes
If the website which you are trying to reach is not up

If you are unable to reach the particular website because of internet slowness issues.

## Troubleshooting
### Case1

Check whether the website is opening without proxy configuration inside the browser (No proxy in the middle).

If the website is not opening without a proxy, then it is not the problem with SafeSquid.

If it is opening without a proxy, then run the below command to verify whether the website is resolving or not.

```jsx title="Command"
nslookup 192.168.27.30
```
**To check SafeSquid server is connecting to** 192.168.27.30 on port 80

```jsx title="Command"
telnet WEBSITE PORT_TO_CONNECTON
```
you will get this output if the website is not able to connect

telnet 192.168.27.30 80

Trying 192.168.27.30...

telnet: Unable to connect to remote host: No route to host

If the website can connect you will get the below output

> telnet WEBSITE PORT_TO_CONNECTON

you will get this output if the website is not able to connect:

```jsx title="Command"
telnet 192.168.27.30 80
```
you will get this output if the website can connect

root@dev:~# telnet 192.168.27.30 80

Trying 192.168.27.30...

Connected to 192.168.27.30.

Escape character is '^]'.

### Case 2

If you have a server with an on-premises environment integrated with directory services. DNS resolution is done by the directory DNS server.

To check the configuration on the local internal network and its address record pointed on an active directory (AD) or local DNS server.

Run the below commands on the command prompt for **abc.safesquid.com**

```jsx title="Command"
nslookup abc.safesquid.com
```
If the website is resolving to the local internal network **e.g.** (10.10.11.78,10.10.128.106)

You must do the conditional forwarding to safesquid local caching DNS server.

Go to the path: **/etc/bind/**

and create a file.

```jsx title="Command"
vim named.conf
```
root@swg:/etc/bind# vim named.conf

// This is the primary configuration file for the BIND DNS server named.

//

// Please read /usr/share/doc/bind9/README.Debian.gz for information on the

// structure of BIND configuration files in Debian, *BEFORE* you customize

// this configuration file.

//

// If you are just adding zones, please do that in /etc/bind/named.conf.local

include "/etc/bind/named.conf.options";

include "/etc/bind/named.conf.local";

include "/etc/bind/named.conf.default-zones";

include "/etc/bind/safesquid.dns.conf";

include "/etc/bind/abc.safesquid.com";

Go to the path

```jsx title="Command"
cd /etc/bind/
```
And create a file

```jsx title="Command"
vim abc.safesquid.co
```
Add below lines

```
zone "abc.safesquid.com" {
type forward;
forwarders {10.10.124.101;};
};
```

Command to restart bind9 service:

```jsx title="Command"
/etc/init.d/bind9 restart
```
Verify whether the website is resolving to the local IP successfully or not.
