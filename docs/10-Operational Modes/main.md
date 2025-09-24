---
title: Operational Nodes
---

## Configure Proxy on Internet Clients
An explicit proxy can be configured globally at the system level on any Windows, Linux, Mac, or Android device. Only specific applications, like [browsers](/docs/17-Operational%20Modes/TCP%20Proxy.md), or remote desktop applications can also be configured to route the
traffic via the proxy.

## Configure proxy operational mode
With a range of versatile Proxy Operational configuration settings, SafeSquid can cater to diverse network requirements.

### [Configure SafeSquid as Forward Proxy](/docs/17-Operational%20Modes/Forward%20Proxy.md)
As a forward proxy, SafeSquid acts as an intermediary for requests from clients seeking resources from other servers, enabling organizations to protect internet users. Here, client applications are explicitly set to use a specified proxy server.

### [Configure SafeSquid as Reverse Proxy](/docs/17-Operational%20Modes/Reverse%20Proxy.md)
As a reverse proxy, SafeSquid sits between external clients and internal servers, intercepting requests from clients and forwarding them to the appropriate server, enabling organizations to protect web resources.

### [Configure SafeSquid as a Transparent Proxy](/docs/17-Operational%20Modes/Transparent%20Proxy.md)
To facilitate proxy-unaware applications, seamlessly redirect traffic by configuring SafeSquid as a [Transparent Proxy](/docs/17-Operational%20Modes/Transparent%20Proxy.md). As no configuration is required, deployment is quick and easy.
