---
title: Proxy Chain  
description: Configure SafeSquid's Proxy Chain to forward web traffic via upstream proxies using HTTP, SOCKS4/5, or CONNECT. Utilize ICP and CARP protocols to load balance and coordinate cache across peer proxies for optimized performance.  
keywords:  
- safesquid proxy chain  
- forward proxy configuration  
- carp and icp in proxy  
- upstream proxy routing  
---

## Overview

The Proxy chain section allows you to selectively forward requests through another proxy, SOCKS4 or SOCKS5 firewalls.

You can also use ICP (Internet Cache Protocol) and CARP (Cache Array Routing Protocols) to share cache with peer or sibling proxies.

### CARP (Cache Array Routing Protocol)

The Cache Array Routing Protocol (CARP) is used in load-balancing HTTP requests across multiple proxy cache servers. It works by generating a hash for each URL requested. A different hash is generated for each URL and by splitting the hash namespace into equal (or unequal parts, if uneven load is intended) the overall number of requests can be distributed to multiple servers.

### ICP (Internet Caching Protocol)

The Internet Cache Protocol (ICP) is a protocol used for coordinating web caches. Its purpose is to find out the most appropriate location to retrieve a requested object from in a situation where multiple caches are in use at a single site. The goal is to use the caches as efficiently as possible and to minimize the number of remote requests to the originating server. Hierarchically, a queried cache can either be a parent, a child, or a sibling.

## Global

![showing global section of Proxy chain](/img/Configure/Application_Setup/Proxy_chain/image1.webp)

### Enabled

Enable or Disable the proxy chain section.

TRUE: Enable proxy chain section.

FALSE: Disable proxy chain section.

### Enable CARP

CARP is a protocol used by a cluster of proxies to have them act as one logical cache by using a hash algorithm that combines the proxy's hostname and requested URL to determine which proxy server the URL is requested from and thus cached on.

TRUE: Enable CARP.

FALSE: Disable CARP

### CARP Hash Size

Specify the maximum value of the CARP hash; the lower the value, the greater the redundancy of cached files across peer proxies. Set to 0 for maximum size. Any value other than 0 breaks compatibility with Squid, and all peer proxies must use the same size hash.

## Forwarding Proxies

List of proxy servers to forward connections to.

![showing forwarding proxies section in proxy chain](/img/Configure/Application_Setup/Proxy_chain/image2.webp)

### Enabled

Enable or Disable this entry.

TRUE: Enable this entry.

FALSE: Disable this entry.

### Comment

For documentation and future references, explain the relevance of this entry with your policies.

### Profiles

Specify the Profiles applicable for this entry.

This entry will be applicable only if the connection has any one of the specified profiles.

Leave it Blank, to apply for all connections irrespective of any applied profile.

To avoid application to a connection that has a profile, use a negated profile (!profile).

### Proxy

Specify the hostname or IP address of the proxy to forward through.

If this field is left blank, and the host or file options aren't, no action is taken for requests matching the host and file.

If the Proxy is the same as the server's own hostname, the entry is ignored.

This makes it easier to have a configuration file shared between several proxy servers.

### User name

Specify the user name to use if the proxy requires authentication.

### Password

Specify the password to use if the proxy requires authentication.

### Domain

Specify the NT domain when using the NTLM authentication protocol.

### Port

Specify the port number of the proxy to forward through.

### ICP peer type

The peering relationship of this proxy.

**NONE**: The ICP protocol will not be used with this proxy.

**PARENT**: This proxy is a Parent. When no peer has the cached file, it will still be requested from a parent, so that it is cached for other peer proxy servers.

**SIBLING**: This proxy is a Sibling. Files are requested from it only when it has a cached copy.

### ICP port

Specify the UDP port ICP packets are sent to.

### Type

Specify the type of the proxy; can be HTTP, SOCKS4, SOCKS5 or CONNECT.

-   **HTTP:** This is an HTTP proxy.

-   **SOCKS4**: This is a SOCKS4 firewall.

-   **SOCKS5**: This is a SOCKS5 firewall.

-   **CONNECT**: The connect method will be used through the HTTP proxy.

### Applies to

Specify the type of requests that are forwarded through the proxy; can be HTTP, FTP, SOCKS5 and/or CONNECT (HTTPS).

**HTTP**: This proxy will be used for HTTP requests.

**FTP**: This proxy will be used for FTP requests.

**CONNECT**: This proxy will be used for CONNECT requests.

### Example

#### Rule#1

I want to forward all my requests to proxy server 192.168.2.179 and port 8080.

ICP peer type is set to none.

The type of proxy is set to be connected.

For request type of HTTP FTP and connect.

![showing rule which forwards all requests to upstream proxy 192.168.2.179:8080](/img/Configure/Application_Setup/Proxy_chain/image3.webp)
