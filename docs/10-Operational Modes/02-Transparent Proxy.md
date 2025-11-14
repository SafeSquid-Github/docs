---
title: Transparent Proxy
Description: Understand how to deploy and configure SafeSquid in transparent proxy mode to intercept HTTP/HTTPS traffic without client-side configuration, enabling seamless policy enforcement, filtering, and SSL inspection.
Keywords:
  - SafeSquid transparent proxy
  - Configure SafeSquid inline proxy
  - HTTP/HTTPS interception SafeSquid
  - Transparent SSL proxy SafeSquid
  - SafeSquid proxy redirection setup
---

## Overview
The Internet is an essential part of most company's business infrastructure. However, it can be a risky place, but there are ways to minimize risks so your business can thrive. Analysts encourage organizations to deploy a secure web gateway (SWG) to protect their networks against access by malicious software.

Initially, the Internet was designed with the assumption that connections between entities are explicit and stateful. An SWG intercepts and examines inbound and outbound web traffic and, in effect, becomes a proxy for the user, who no longer interacts directly with the website. At first, browsers had to be explicitly configured to use the web gateway, which led to the concept of a direct proxy. As networks grew and endpoint management became increasingly complex, the need emerged to control web communications without directly manipulating the endpoint. This led to the concept of a transparent proxy.

The key difference between a direct (or explicit) proxy and a transparent proxy is that a direct proxy is known to the application, which realizes it is talking to a proxy and not the destination server, whereas transparent proxy mode is an intercept model and requires fewer changes to be implemented on the endpoint. Applications think they are going straight to the destination but, in reality, a network service is redirecting the traffic to the proxy, which then forwards it to its destination.

## Client Scenario
Stark Tech has 200 employees. Stark Tech wants to provide internet services to the employees through WIFI. When the employees open their web browser, they're connected to a proxy server that manages all the network's communication.

Since this is a new employee, the proxy displays a web page in the browser asking the employee to agree to certain terms and conditions. If the employee accepts, then the proxy routes its traffic to the actual destination using a transparent proxy.

## What is a transparent proxy?
A transparent proxy (also called inline proxy, intercepting proxy, or forced proxy) is a server that sits between your computer and the Internet and redirects your requests and responses without modifying them. A proxy server that does modify your requests and responses is defined as a non-transparent proxy.

Transparent proxies act as intermediaries between a user and a web service. When a user connects to a service, the transparent proxy intercepts the request before passing it on to the provider. Transparent proxies are considered transparent because the user isn't aware of them. On the other hand, the servers hosting the service recognize that the proxied traffic is coming from a proxy and not directly from the user.

SafeSquid supports both HTTP and HTTPS websites in transparent mode. The HTTPS websites in transparent mode are called SSL transparent mode.

# How SafeSquid transparent proxy work?
![Diagram how SafeSquid proxy works](/img/Troubleshooting/Transparent_proxy/image1.webp)

Bob is using a laptop in Stark Tech and wants to access internet services via Stark Tech's WIFI network.

Bob enable WIFI on his laptop.

Identified Stark tech WIFI network and tried to connect to Stark tech WIFI.

Now admin of the Stark tech receives an IP address of Bob (say 192.168.24.20) to check filtering policies, and serve traffic.

The traffic will come to the router and the router will send traffic to SafeSquid Secure web gateway with ports 80 and 443 respectively.

The **redirection rules on the SafeSquid Secure web gateway** will redirect traffic to SafeSquid Proxy with port 8080 and 8443 (SSL transparent) respectively (By enabling IP forwarding).

When Bob sets SafeSquid Proxy IP address 192.168.221.222 as a gateway, Bob will get access to the WIFI network and he can access all HTTP as well as HTTPS websites transparently.

SafeSquid transparent proxies are extremely versatile.

The following list contains the usefulness of SafeSquid transparent proxy to Bob.

1. **Proxy caches** create copies of the data stored on a server and serve the cached content to Bob. This reduces the strain on the web service by having the proxy provide the content instead of the service itself.
1. **Filtering proxies** prevents access to certain websites or web services. These are commonly implemented by organizations to prevent users from accessing resources that are unrelated or disruptive to the organization.
1. **Gateway proxies modify or block network traffic** based on certain policies. Locations that offer public Wifi often implement gateways that require users to register or accept an agreement before they can use the service.

## Prerequisites
1. Deploy SafeSquid Secure web gateway (SAB).
1. Enable SafeSquid SSL transparent facility on two ports, one is port 8081 for HTTP traffic and the other one is port 8433 for HTTPS traffic. Also, Enable SSL Inspection to control SSL traffic. If not enabled, you can check our document - How to Enable HTTPS Inspection
1. Redirect traffic from ports 80 and 443 to 8081 and 8443 respectively. The redirection can take place on the router if the router supports redirection.
1. Make sure the IP tables-persistent package is installed (to save IP table rules)
1. If your router only supports traffic forwarding then you should redirect traffic on the SafeSquid server using IP tables.
1. Configure Transparent proxy

## Benefits

1. Transparent proxies are an **unobtrusive way** to add features and functionality to a user's browsing experience.
1. **Enterprises experience greater control** over how their customers interact with their services by routing and modifying requests as they come in.
1. **Users interact with web services more easily** since their connections are seamlessly and invisibly passed through the proxy, leaving configuration to the service providers.

## Conclusion
SafeSquid transparent proxies shape the way we interact with the web. Whether they're serving data faster through caching, filtering out unwanted content, or giving businesses more control over their networks, SafeSquid transparent proxies add functionality to the Internet without adding inconvenience.