## Configure Proxy on Internet Clients

An explicit proxy can be configured globally at the system level on any Windows, Linux, Mac, or Android device. Only specific applications, like [browsers](https://help.safesquid.com/portal/en/kb/articles/how-to-configure-proxy-in-a-browser), or remote desktop applications can also be configured to route the
traffic via the proxy.

## Configure proxy operational mode

With a range of versatile Proxy Operational configuration settings, SafeSquid can cater to diverse network requirements.

### [Configure SafeSquid as Forward Proxy](https://help.safesquid.com/portal/en/kb/articles/deploy-safesquid-behind-corporate-proxy)

As a forward proxy, SafeSquid acts as an intermediary for requests from clients seeking resources from other servers, enabling organizations to protect internet users. Here, client applications are explicitly set to use a specified proxy server.

### [Configure SafeSquid as Reverse Proxy](https://help.safesquid.com/portal/en/kb/articles/how-to-configure-reverse-proxy)

As a reverse proxy, SafeSquid sits between external clients and internal servers, intercepting requests from clients and forwarding them to the appropriate server, enabling organizations to protect web resources.

### [Configure SafeSquid in a Proxy-Chain](https://help.safesquid.com/portal/en/kb/articles/proxy-chain)

You can choose to route traffic through multiple proxy servers before reaching the destination. A multi-layered approach makes it harder for attackers to intercept or tamper with the traffic.

### [Configure SafeSquid as a Transparent Proxy](https://help.safesquid.com/portal/en/kb/articles/transparent-proxy)

To facilitate proxy-unaware applications, seamlessly redirect traffic by configuring SafeSquid as a [Transparent Proxy](https://help.safesquid.com/portal/en/kb/articles/transparent-proxy). As no configuration is required, deployment is quick and easy.
