---
title: License Activation
Description: Learn how to activate your SafeSquid Secure Web Gateway instance using an activation key via the web GUI. 
Keywords:
- Activate SafeSquid instance  
- SafeSquid product activation  
- SafeSquid activation key upload  
- SafeSquid self-service portal  
- SafeSquid Web GUI access  
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
You must Activate a SafeSquid Instance before using it to access the web.

## Prerequisites
1. You need to setup Safesquid in your system.
2. You need to [configure your browser to use a proxy](/docs/17-Operational%20Modes/TCP%20Proxy.md).

#First, register on the SafeSquid website to get the activation key. If you already have the activation key follow the below steps to activate SafeSquid.
![uploading the activation key When your accessing the interface for thefirst time](/img/How_To/Activate_a_SafeSquid_Instance/image1.webp)

## Download Activation Key
Go to the Self Service portal and download the activation key.
![downloading activation key from key.safesquid.com](/img/Application_Eco-System/Manage_Key/image1.webp)
## Upload Activation key
[Access the SafeSquid interface](/docs/08-SafeSquid%20Interface/Accessing%20the%20SafeSquid%20Interface.md)
![selecting your activation key file and clicking on upload](/img/How_To/Activate_a_SafeSquid_Instance/image2.webp)
![clicking on restart](/img/How_To/Activate_a_SafeSquid_Instance/image3.webp)
![waiting for page refresh](/img/How_To/Activate_a_SafeSquid_Instance/image4.webp)

## Validate Product Activation
![clicking on support to validate product activation](/img/How_To/Activate_a_SafeSquid_Instance/image5.webp)
![showing activation details in licensedetails](/img/How_To/Activate_a_SafeSquid_Instance/image6.webp)

## Handling Validation Failure

<Tabs>
<TabItem value="Case 1" label="Case 1" default>
### Check for the activation_key file on the SafeSquid server.

Run the below command and check for the file

```bash
ls -lrt /usr/local/safesquid/security/
```
root@dev:~# ls -lrt /usr/local/safesquid/security/

total 60

drwxrwxr-- 2 ssquid root 4096 Jul 10 11:55 dns

-rw-rw-r-- 1 ssquid root 724 Jul 28 11:23 krb5.conf

-rw-rw-r-- 1 ssquid root 2111 Aug 3 18:52 activation_key

drwxrwxr-- 2 ssquid root 12288 Aug 4 16:04 policies

drwxrwxr-- 5 ssquid root 4096 Aug 4 16:09 ssl

-rw-rw-r-- 1 ssquid root 15744 Aug 5 09:51 activation_key.updates.backup

-rw-rw-r-- 1 ssquid root 15744 Aug 5 09:51 activation_key.updates

If the file was not found, then upload your activation key again and click on restart.
:::note
Restart SafeSquid service from the SafeSquid Interface will work, only if the monit service is configured properly on the SafeSquid server.
:::
Otherwise, you can directly restart the SafeSquid service from the LINUX box by using the below commands

```bash
/etc/init.d/safesquid stop
```
```bash
/etc/init.d/safesquid start
```
</TabItem>
<TabItem value="Case 2" label="Case 2" default>
## Check the connection to the Subscription server, by using the following commands

root@dev:~# ping swgupdates2.safesquid.net

PING swgupdates2.safesquid.net (104.236.27.61) 56(84) bytes of data.

64 bytes from 104.236.27.61: icmp_seq=1 ttl=52 time=309 ms

64 bytes from 104.236.27.61: icmp_seq=2 ttl=52 time=228 ms

--- swgupdates2.safesquid.net ping statistics ---

2 packets transmitted, 2 received, 0% packet loss, time 1000ms

rtt min/avg/max/mdev = 228.387/269.078/309.770/40.694 ms

nslookup swgupdates2.safesquid.net

Server: 127.0.0.1

Address: 127.0.0.1#53

Non-authoritative answer:

Name: swgupdates2.safesquid.net

Address: 104.236.27.61

After uploading the activation key, the page shows showing proxy server refusing connections.

SafeSquid restart was not done, start the SafeSquid from the server console by using the below command:

```bash
/etc/init.d/safesquid start
```
</TabItem>
</Tabs>