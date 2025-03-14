# Setup Transparent Proxy on SafeSquid 

## Overview

Internet is an essential part of most company's business infrastructure. However, it can be a risky place, but there are ways to minimize risks so your business can thrive. Analysts encourage organizations to deploy a secure web gateway (SWG) to protect their networks against access by malicious software.

Initially, the Internet was designed with the assumption that connections between entities are explicit and stateful. An SWG intercepts and examines inbound and outbound web traffic and, in effect, becomes a proxy for the user, who no longer interacts directly with the web site. At first, browsers had to be explicitly configured to use the web gateway, which led to the concept of a direct proxy. As networks grew and endpoint management became increasingly complex, the need emerged to control web communications without directly manipulating the endpoint. This led to the concept of a transparent proxy.

The key difference between a direct (or explicit) proxy and a transparent proxy is that a direct proxy is known to the application, which realizes it is talking to a proxy and not the destination server, whereas transparent proxy mode is an intercept model and requires fewer changes to be implemented on the endpoint. Applications think they are going straight to the destination but, in reality, a network service is redirecting the traffic to the proxy, which then forwards it to its destination.

## Client Scenario

Stark tech is having 200 employees. Stark tech wants to **provide internet services** to the employees through **WIFI**. When the employees open their web browser, they're connected to a proxy server that manages all of the network's communication.

Since this is a new employee, the proxy displays a web page in the browser asking the employee to agree certain terms and conditions. If the employee accepts, then the proxy routes it's traffic to the actual destination using transparent proxy.

## What is transparent proxy?

A transparent proxy (also called inline proxy, intercepting proxy, or forced proxy) is a server that sits between your computer and the Internet and redirects your requests and responses without modifying them. A proxy server that does modify your requests and responses is defined as a non-transparent proxy.

Transparent proxies act as intermediaries between a user and a web service. When a user connects to a service, the transparent proxy intercepts the request before passing it on to the provider. Transparent proxies are considered transparent because the user isn't aware of them. On the other hand, the servers hosting the service recognize that the proxied traffic is coming from a proxy and not directly from the user.

SafeSquid support both HTTP and HTTPS websites in transparent mode. The HTTPS websites in transparent mode is called as SSL transparent mode.

## How SafeSquid transparent proxy works?

  -------------------------------------------------------------------------------------------------------------------
  ![SafeSquid transparent proxy works](/img/How_To/Setup_transparent_proxy_on_SafeSquid/image1.webp)
  -------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------

Bob is using a laptop in Stark tech and want to access internet services via Stark tech WIFI network.

Bob enable WIFI on his laptop.

Identified Stark tech WIFI network and tried to connect to Stark tech WIFI.

Now admin of the Stark tech receives an IP address of Bob (say 192.168.24.20) to check filtering policies, serve traffic.

The traffic will come to router and router will send traffic to SafeSquid Secure web gate way with port 80 and 443 respectively.

The **redirection rules on SafeSquid Secure web gateway** will redirect traffic to SafeSquid Proxy with port 8080 and 8443 (SSL transparent) respectively (By enabling IP forwarding).

When Bob set SafeSquid Proxy IP address 192.168.221.222 as a gateway, Bob will get access of WIFI network and he can access all HTTP as well as HTTPS websites transparently.

SafeSquid transparent proxies are extremely versatile.

The following list contains usefulness of SafeSquid transparent proxy to Bob.

**Proxy caches** created copies of the data stored on a server and serve the cached content to Bob. This reduces the strain on the web service by having the proxy provide the content instead of the service itself.

**Filtering proxies** prevent access to certain websites or web services. These are commonly implemented by organizations to prevent users from accessing resources that are unrelated or disruptive to the organization.

**Gateway proxies modify or block network traffic** based on certain policies. Locations that offer public Wifi often implement gateways that require users to register or accept an agreement before they can use the service.

## Prerequisites

Deploy SafeSquid Secure web gateway (SAB)

Enable SafeSquid SSL transparent facility on two ports, one is port 8081 for HTTP traffic and other one is port 8433 for HTTPS traffic. Also Enable SSL Inspection to control SSL traffic. If not enabled, you can check our document - [How To Enable HTTPS Inspection](https://docs.safesquid.com/index.php/Configure_HTTPS_Inspection)

Redirect traffic from port 80 and 443 to 8081 and 8443 respectively. The redirection can take place on router if router supports redirection.

Make sure IP tables-persistent package is installed (to save IP table rules)

If your router only supports traffic forwarding then you should redirect traffic on SafeSquid server using IP tables.

## [Configure Transparent proxy](https://docs.safesquid.com/wiki/Configure_Transparent_Proxy)

#### Redirect traffic from Port 80 and 443 to 8080 and 8443 respectively.

#### STEP 1: To forward requests for all destination ports

-   Enable forwarding in /etc/sysctl.conf, by changing

> net.ipv4.ip_forward=0 >> net.ipv4.ip_forward=1

-   To reload run

> sysctl -p

-   To flush the iptables rules

> iptables -F -t nat

#### STEP 2: Redirect traffic

-   Now to redirect requests for port 80 to 8080, Run

iptables -A PREROUTING -t nat -s 192.168.0.0/16 -p tcp --dport 80 -j REDIRECT --to 8080

-   Now to redirect requests for port 443 to 8443, Run (for SSL transparent proxy)

iptables -A PREROUTING -t nat -s 192.168.0.0/16 -p tcp --dport 443 -j REDIRECT --to 8443

#### STEP 3: Finally, to save IP table

apt-get install iptables-persistent

iptables-save >> /etc/iptables/rules.v4

Note: Redirection policies will not flush even you reboot proxy server.

#### [Access the SafeSquid interface](https://docs.safesquid.com/index.php/Access_The_SafeSquid_User_Interface)

#### Go to Configure Page

![](/img/How_To/Setup_transparent_proxy_on_SafeSquid/image2.webp)

![](/img/How_To/Setup_transparent_proxy_on_SafeSquid/image3.webp)

#### Enable policy from Network settings

![](/img/How_To/Setup_transparent_proxy_on_SafeSquid/image4.webp)

#### Restart SafeSquid Service

[Restart the SafeSquid Service from Interface](https://docs.safesquid.com/wiki/Restart_the_SafeSquid_Service_from_Interface)

#### Remove Proxy settings from browser

![](/img/How_To/Setup_transparent_proxy_on_SafeSquid/image5.webp)

![](/img/How_To/Setup_transparent_proxy_on_SafeSquid/image6.webp)

![](/img/How_To/Setup_transparent_proxy_on_SafeSquid/image7.webp)

![](/img/How_To/Setup_transparent_proxy_on_SafeSquid/image8.webp)

#### Configure Network

![](/img/How_To/Setup_transparent_proxy_on_SafeSquid/image9.webp)

![](/img/How_To/Setup_transparent_proxy_on_SafeSquid/image10.webp)

![](/img/How_To/Setup_transparent_proxy_on_SafeSquid/image11.webp)

![](/img/How_To/Setup_transparent_proxy_on_SafeSquid/image12.webp)

Open the network and share center and go to "Local area connection" as shown **(In our case Proxy IP:192.168.221.222)**

![](/img/How_To/Setup_transparent_proxy_on_SafeSquid/image13.webp)

Now you can access all the HTTP and HTTPS websites successfully without setting proxy inside browser.

## Benefit

Transparent proxies are an unobtrusive way to add features and functionality to a user's browsing experience.

**Enterprises experience greater control** over how their customers interact with their services by routing and modifying requests as they come in.

**Users interact with web services** more easily since their connections are seamlessly and invisibly passed through the proxy, leaving configuration to the service providers.

## Conclusion

SafeSquid transparent proxies shape the way we interact with the web. Whether they're serving data faster through caching, filtering out unwanted content, or giving businesses more control over their networks, SafeSquid transparent proxies add functionality to the Internet without adding inconvenience.
