# Activation Failure

## Issues

-   I uploaded my activation key, but still SafeSquid UI is showing Failed to set Subscription details.

-   After uploading the activation key, I am getting the template on the browser proxy server refusing connections.

-   Unable to see subscription details on the support page from SafeSquid User Interface.

## Root Causes

-   SafeSquid server is unable to contact the SafeSquid Subscription server

-   The file (activation key) was not uploaded correctly.

-   The file name you uploaded is other than **actiavtion_key**.

-   After uploading the activation key, the page shows the proxy server refusing connections.

-   SafeSquid service restart was not done properly.

## Troubleshooting

### Case 1: Check for the activation_key file on the SafeSquid server.

Run the below command and check for the file

> ls -lrt /usr/local/safesquid/security/

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

Note: Restart SafeSquid service from the SafeSquid Interface will work, only if the monit service is configured properly on the SafeSquid server.

Otherwise, you can directly restart the SafeSquid service from the LINUX box by using the below commands

> /etc/init.d/safesquid stop

> /etc/init.d/safesquid start

### Case 2: Check the connection to the Subscription server, by using the following commands

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

> /etc/init.d/safesquid start



## What should I do if SafeSquid fails to start or crashes unexpectedly?
