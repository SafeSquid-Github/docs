---
title: WCCP  
description: Configure SafeSquid's WCCP (Web Cache Communication Protocol) integration to enable transparent redirection and enforce proxy without browser configurations.  
keywords:  
- WCCP transparent proxy  
- safesquid wccp setup  
- proxy without browser config  
- enforce proxy using router  
---

## Overview

Use WCCP routers to enforce transparent proxy.

Stop setting proxy in client browsers and transparently redirect traffic flows in real time.

## Global

![showing global section of WCCP](/img/Configure/Application_Setup/WCCP/image1.webp)

### Enabled

Enable or Disable this section.

TRUE: Enable transparent redirection.

FALSE: Disable transparent redirection.

## WCCP Policies

Configure policies to use WCCPV1, WCCPV2 or both.

![showing WCCP policies tab of WCCP](/img/Configure/Application_Setup/WCCP/image2.webp)

### Enabled

Enable or Disable this Policy.

TRUE: Enable this entry.

FALSE: Disable this entry.

### Comment

For documentation and future references, explain the relevance of this entry with your policies.

That is, by reading the policies, a future user can understand the purpose of that entry.

### Proxy Host

A regular expression pattern matching the proxy hosts this entry applies to, is useful if a single configuration file is shared between several proxy servers.

### WCCP Version

Select the WCCP version.

**WCCPV1:** WCCP version 1 will be used for this entry.

**WCCPV2**: WCCP version 2 will be used for this entry.

### Router IP Address

Enter router IP address(s) to interact safesquid with that router(s) for transparent redirection.

WCCP v1 can have only a single router for one service group.

WCCP v2 can have multiple routers for one service group.

### Application Protocol

Select which type of traffic should be redirected. Based on this selection only the traffic redirects to the safesquid from the routers in the service group.

A regular expression matching the protocol this entry applies to; leave it empty to match any protocol.

The Protocols could be: http =\> Simple HTTP-based GET or POST requests ftp =\> Browser based access to FTP sites connect =\> SSL or tunneling (over HTTP) requests made by browsers for https sites, or FTP connections made by FTP-client utilities, or other utilities like PuTTy.

**Examples**: http =\> simple http connections http\|ftp =\> all browser-based simple http or ftp connections ftp\|connect =\> all forms of ftp-based connections http\|connect =\> all http and tunnelling requests

-   **HTTP**: The Hypertext Transfer Protocol (HTTP) is an application protocol for distributed, collaborative, hypermedia information systems. HTTP is the foundation of data communication for the World Wide Web. Hypertext is structured text that uses logical links (hyperlinks) between nodes containing text. HTTP is the protocol to exchange or transfer hypertext.

-   **HTTPS**: Hypertext Transfer Protocol Secure HTTPS is a communications protocol for secure communication over a computer network, with especially wide deployment on the Internet. Technically, it is not a protocol in and of itself; rather, it is the result of simply layering the Hypertext Transfer Protocol (HTTP) on top of the SSL/TLS protocol, thus adding the security capabilities of SSL/TLS to standard HTTP communications. The security of HTTPS is therefore one of the underlying TLS, which uses long-term public and secret keys to exchange a short-term session key to encrypt the data flow between client and server.

-   **FTP:** File Transfer Protocol (FTP) is a standard network protocol used to transfer files from one host to another host over a TCP-based network, such as the Internet. FTP is built on a client-server architecture and uses separate control and data connections between the client and the server.

-   **SFTP**: SSH File Transfer Protocol (also Secure File Transfer Protocol, or SFTP) is a network protocol that provides file access, file transfer, and file management functionalities over any reliable data stream. It was designed by the Internet Engineering Task Force (IETF) as an extension of the Secure Shell protocol (SSH) version 2.0 to provide secure file transfer capability but is also intended to be usable with other protocols. This protocol assumes that it is run over a secure channel, such as SSH, that the server has already authenticated the client, and that the identity of the client user is available to the protocol.

### Service Type

Select the service type. Wellknown services are known services. You need not to define them. If you select dynamic services, you need to describe the service group with service ID and other parameters.

**WELLKNOWN**: Service is a wellknown service. No need to mention service group details.

**DYNAMIC**: Service is Dynamic service. Mention service group details.

### Service Group ID

Specify the service ID of the service group the value should be in between 97 and 255.

### Service Group Name

Enter the Service group name.

### Security

Select security options for packet authorization. If you select no security you need not enter the password field. If you select md5security then you need to provide an encrypted password that will be used for packet authentication within the service group.

**MD5SECURITY**: Provide MD5 security to the packets travelling within the Service Group.

**NOSECURITY**: No security to the packets travelling within the Service Group.

### Encrypted Password

Enter the Encrypted password for simple packet authentication.

### Acceptable Forward Method

Select the forward method. The method by which the router transfers packets to the safesquid. Default it is GRE you can select Layer2 also but architectures should support it.

**GRE**: The GRE forward method will be used by SafeSquid. If the GRE forward method is not supported by the router, then SafeSquid will negotiate with the router.

**L2**: The L2 forward method will be used by SafeSquid. If the L2 forward method is not supported by the router, then SafeSquid will negotiate with the router.

### Acceptable Assignment Method

Select the assignment method. The method that is used by safesquid when it becomes a designated proxy. The default is hash assignment and you can also select mask assignment.

**HASH**: The HASH assignment method will be used by SafeSquid. If the HASH assignment method is not supported by the router, then SafeSquid will negotiate with the router.

**MASK:** The MASK assignment method will be used by SafeSquid. If the MASK assignment method is not supported by the router then SafeSquid will negotiate with the router.

### Acceptable Packet Return Method

Select packet_return_method. Method that is used by safesquid to return packets to the router. Default it is GRE you can also select layer2. But when you select layer2 as an assignment you should not select GRE as the return method.

**GRE**: SafeSquid will use the GRE forward method. If the GRE forward method is not supported by the router, then SafeSquid will negotiate with the router.

**L2**: SafeSquid will use the L2 forward method. If the router does not support this method, SafeSquid will negotiate with the router.

### Ports

WCCP2 allows the use of 8 ports. You can give 8 separate ports or a range of ports. A comma-separated list of ports or port ranges this entry applies to.

### Network Protocol

Select network_protocol. SafeSquid will inform the routers' selection.

**TCP**: SafeSquid will inform the Router that it should redirect TCP packets.

**UDP**: SafeSquid will inform the Router that it should redirect UDP packets.

### Webcache IP Address

Enter SafeSquid IP address(s) to interact with WCCP router(s) for transparent redirection.
