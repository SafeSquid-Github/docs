---
title: Network Settings  
description: Configure network settings in SafeSquid to define listen interfaces, ports, bindings, and outbound routing via multi-homed systems. Learn how to enable transparent proxy, set up captive portals, and optimize traffic routing with SafeSquid’s flexible network configuration.  
keywords:  
- safesquid network configuration  
- safesquid proxy listen settings  
- safesquid transparent proxy setup  
- safesquid multiple outbound interfaces  
---

## Overview 
Configure the basic Network Infrastructure.

Configure the Sockets on which SafeSquid will Listen and accept connections from clients.

Manage SafeSquid's outgoing connections through existing IPs of your host system.

## Listen
Setup SafeSquid's Listen Interfaces to accept connections from clients.

When SafeSquid starts up, all the enabled entries and appropriate Listening Sockets will be evaluated. You may specify these Interfaces when creating policies in the **Access Restrictions** Section. Evaluation logically skips disabled Entries. Service restart is required to effect any changes made here.

![Network settings Listen tab showing](/img/Configure/Application_Setup/Network_settings/image1.webp)

### Enabled 
Enable or disable this entry

**TRUE**: Enable this entry.

**FALSE**: Disable this entry.

### Comment
For documentation and future references, explain the relevance of this entry to your policies.

That is; by reading the policies, a future user can understand the purpose of that entry.

### Port
Specify the Listen port. By default, SafeSquid listens on port 8080.

Port value can be a positive integer between 1 and 65535. The default value is 8080.

### IP
Specify the IP address to complete the socket definition.

You may choose a specific IPv4 or IPv6 address.

Empty or Blank: All the IPv4 and IPv6 addresses of the host.

set to **0.0.0.0**: Listen to all IPv4 IPs only.

set to: : Listen to all IPv6 IPs only

### Bindings
Choose additional bindings (roles) for this Socket.

You may select multiple options if you need them.

**SSL_TRANSPARENT**: Accept SSL requests in a transparent proxy mode.

**CAPTIVE_PORTAL**: Setup a captive portal for user authentication, when SafeSquid is used as a Transparent Proxy.

**SSL_AUTHENTICATION**: User authentication via SSL client certificates. (Not Yet Implemented)

**SSL_BRIDGE**: If SafeSquid has been setup as Reverse Proxy, and must provide SSL for non-SSL HTTP servers. (Not Yet Implemented)

### Example
### Rule#1
My SafeSquid proxy is running on a cloud server, I use an SSH tunnel using 127.0.0.1:8080 to access my proxy server.

I have a host-only network with an IP range 10.100.0.0/16.

I want my proxy server to listen on 10.100.0.1:8080.

Using the network -> listen policy we can allow the proxy to listen to additional IP and ports.

![showing policy which has a listen port 8080](/img/Configure/Application_Setup/Network_settings/image2.webp)

### Rule#2
I want to use SafeSquid without configuring it in my browser. (As a transparent proxy server)

I want to transfer all traffic from port 80 to port 8080 and traffic from 443 to port 8443.

I want SafeSquid to listen to port 8443.

Rule #2 is configured to use a proxy server as a transparent proxy server.

Bindings set as SSL_TRANSPARENT are used to accept SSL requests in transparent mode.

![policy showing all traffic from port 443 forwarded to port 8443](/img/Configure/Application_Setup/Network_settings/image3.webp)

### Rule#3
I want our admin users to access the SafeSquid web interface without authentication.

General users access the internet using port 8080 where GUI access is disabled.

We want SafeSquid to listen on IP 192.168.2.10 and port 8082 which has access to the SafeSquid web interface, can be configured in "Access Restrictions".

Rule #3 can be used where user identification is not performed and personnel having access to SafeSquid's web interface should be limited.

![policy showing additional listen to allow access to safesquid's web interface without authentication](/img/Configure/Application_Setup/Network_settings/image4.webp)

## Interface
Specify Interfaces for outgoing connections.

SafeSquid can take advantage of multiple ISPs or outbound connection routes, on multi-homed host systems.

Create multiple entries as required.

SafeSquid evaluates all enabled entries starting from the top and selects the first one that matches the connection.

Evaluation skips the disabled Entries.

![interface tab fields from network settings](/img/Configure/Application_Setup/Network_settings/image5.webp)

### Enabled
Enable or Disable this entry

**TRUE**: Enable this entry.

**FALSE**: Disable this entry.

### Comment
For documentation and future references, explain the relevance of this entry to your policies.

That is, by reading the policies, a future user can understand the purpose of that entry.

### Profiles
Specify the Profiles applicable for this entry.

This entry will be applicable only if the connection has any one of the specified profiles.

Leave it Blank, to apply for all connections irrespective of any applied profile.

To avoid application to a connection that has a profile, use a negated profile (!profile).

### IP
Specify an IP address assigned to the host system.

SafeSquid will bind the outgoing connection to this IP address thus effectively applying the desired routing for the connection.
:::note
The configuration must be saved, and the proxy server must be restarted before any changes take effect.
:::

### Example
### Rule#1
I want to send all my outgoing traffic via a different route than incoming traffic.

142.54.178.126 is used as outgoing traffic.

Using multiple ISPs provides redundancy. Enhance throughput.

**Rule#1** can be used to configure multi-homed network.
![Rule showing send all outgoing traffic from a specific IP](/img/Configure/Application_Setup/Network_settings/image6.webp)
