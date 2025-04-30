---
title: Configure SafeSquid as a Reverse Proxy  
Description: Learn how to configure SafeSquid as a reverse proxy to optimize website performance, enable SSL termination, enhance security, and provide caching, all without requiring client-side proxy configuration.

Keywords:
- SafeSquid reverse proxy setup  
- Configure SafeSquid SSL termination  
- SafeSquid web acceleration  
- Reverse proxy caching SafeSquid  
- SafeSquid reverse proxy authentication  
---

## Overview
A proxy server is an intermediary server that forwards requests for content from multiple clients to different servers across the Internet. A reverse proxy server is a type of proxy server that typically sits behind the firewall in a private network and directs client requests to the appropriate backend server. A reverse proxy provides an additional level of abstraction and control to ensure the smooth flow of network traffic between clients and servers.

## Benefits of SafeSquid Reverse Proxy
**Web acceleration**

SafeSquid Reverse proxies can compress inbound and outbound data, as well as cache commonly requested content, both of which speed up the flow of traffic between clients and servers. They can also perform additional tasks such as SSL encryption to take load off of your web servers, thereby boosting their performance.

**SSL Termination**

Here the reverse proxy handles incoming HTTPS connections, decrypting the requests and passing unencrypted requests on to the web servers. This has several benefits:

Removes the need to install certificates on many back-end web servers.

Provides a single point of configuration and management for SSL/TLS

Takes the processing load of encrypting/decrypting HTTPS traffic away from web servers.

Makes testing and intercepting HTTP requests to individual web servers easier.

**Security and anonymity**

By intercepting requests headed for your back-end servers, a reverse proxy server protects their identities and acts as an additional defence against security attacks. It also ensures that multiple servers can be accessed from a single record locater or URL regardless of the structure of your local area network.

**Authentication**

You can use SafeSquid reverse proxy to provide a single point of authentication for all HTTP and HTTPS requests.

**Caching**

The SafeSquid reverse proxy can also act as a cache. You can either have a dumb cache that simply expires after a set period, or better still a cache that respects Cache-Control and Expires headers. This can considerably reduce the load on the back-end servers.

Setup the SafeSquid in reverse proxy mode. A reverse proxy by itself appears to the client just like an ordinary website No special configuration on the client is necessary. Basically, a reverse proxy is on the website end which will be used to protect and reduce the load on the website

Here in an example, we are using a website which is hosted on apache server, I want to setup the reverse proxy for my website

**Website details:**

FQDN: test.safesquid.net

IP: 192.168.27.50

And we are using **SafeSquid proxy** on 192.168.27.10

### Configuration on website

Make DNS entry of your website pointing to proxy IP

Pointing your website to proxy will make the traffic fetch desired content from proxy server.

On the request of traffic proxy server will fetch content from original site, and response back to the request.

**In our example:**

192.168.27.10 is pointing to test.safesquid.net

### Configuration on proxy server

Make sure that port 80 is free in proxy server, because it should not be allocated by any other service in the proxy server

You can verify it by using below command:

```bash
netstat -tulnp
```
![Check port 80 is free in proxy server by using netstat command](/img/How_To/How_to_configure_reverse_proxy/image1.webp)

Here you will see there no service allocated to port 80

Enable forwarding option in **/etc/sysctl.conf file**

Replace this line as**: net.ipv4.ip_forward=0 to net.ipv4.ip_forward=1**

```bash
net.ipv4.ip_forward=1
```
Then add the Iptables rule to redirect the traffic from 80 to 8080:

```bash
iptables -A PREROUTING -t nat -p tcp --dport 80 -j REDIRECT --to 8080
```
In proxy block all websites except your website, so that the proxy does not to be an open proxy.

See how to allow single website

Make DNS entry of your website pointing to your website IP

In our example :**192.168.27.50** is pointing to **test.safesquid.net**

![Make DNS entry of website pointing to website IP](/img/How_To/How_to_configure_reverse_proxy/image2.webp)

Now access your website from client machine without configuring any proxy settings in the browser, check you server logs, it will show that the website is access with proxy IP

![In Server logs, view which the website is access with proxy IP](/img/How_To/How_to_configure_reverse_proxy/image3.webp)
