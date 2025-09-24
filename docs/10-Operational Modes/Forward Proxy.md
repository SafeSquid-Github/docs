---
title: Deploy SafeSquid Behind Corporate Proxy  
Description: Learn how to deploy SafeSquid Secure Web Gateway behind a corporate (parent) proxy, configure proxy chaining, enable HTTPS inspection, and forward client requests for seamless integration within enterprise network environments.

Keywords:
- Deploy SafeSquid behind proxy  
- SafeSquid proxy chaining  
- Configure parent-child proxy  
- SafeSquid forwarding proxy setup  
- SafeSquid behind corporate firewall  
---

## Overview
Use SafeSquid in front of the corporate proxy. A simple configuration in SafeSquid server, will forward all client requests to the forward proxy i.e. Parent Proxy.

Example scenarios:

![](/img/How_To/Deploy_SafeSquid_Behind_Corporate_Proxy/image1.webp)

Here am using two proxy servers as SafeSquid only

My client (Browser)## 's network IP - 192.168.0.27

My Child Proxy## 's network IP - 192.168.27.50 (with no direct internet Access)

My Parent Proxy## 's network IP - 192.168.27.100

**Configuration on child proxy:**

1. Deploy SafeSquid proxy
2. Enabling SSL inspection in SafeSquid
3. Downloading ROOT CA certificate from SafeSquid
4. Deploy certificate in client browsers.
5. Enable forwarding to parent proxy using forwarding section

**Configuration on Parent proxy:**

Deploy SafeSquid, it is up and running, no extra configuration required in parent proxy

## Prerequisites
Enable HTTPS inspection on child proxy (if you want,on Parent proxy also). Check our document to configure HTTPS inspection on SafeSquid - [How to configure HTTPS inspection](/docs/07-SSL%20Inspection/Setup%20SSL%20Inspection.md)

Import SafeSquid child proxy ROOT CA in client browser

Note: No configuration required on Parent Proxy server. Just deploy the parent proxy and make sure that it is up and running.

## [Access The SafeSquid User Interface](/docs/08-SafeSquid%20Interface/Accessing%20the%20SafeSquid%20Interface.md)
## Go to Configure
![](/img/How_To/Deploy_SafeSquid_Behind_Corporate_Proxy/image2.webp)

## Go to Application Setup
![](/img/How_To/Deploy_SafeSquid_Behind_Corporate_Proxy/image3.webp)

## Go to Proxy chain
![](/img/How_To/Deploy_SafeSquid_Behind_Corporate_Proxy/image4.webp)

## Enable Global section 
![](/img/How_To/Deploy_SafeSquid_Behind_Corporate_Proxy/image5.webp)

![](/img/How_To/Deploy_SafeSquid_Behind_Corporate_Proxy/image6.webp)

![](/img/How_To/Deploy_SafeSquid_Behind_Corporate_Proxy/image7.webp)

## Go to Forwarding proxies
![](/img/How_To/Deploy_SafeSquid_Behind_Corporate_Proxy/image8.webp)

## Add an entry 
![](/img/How_To/Deploy_SafeSquid_Behind_Corporate_Proxy/image9.webp)

![](/img/How_To/Deploy_SafeSquid_Behind_Corporate_Proxy/image10.webp)

![](/img/How_To/Deploy_SafeSquid_Behind_Corporate_Proxy/image11.webp)

![](/img/How_To/Deploy_SafeSquid_Behind_Corporate_Proxy/image12.webp)

In the example: my upstream proxy ip: 192.168.27.100

![](/img/How_To/Deploy_SafeSquid_Behind_Corporate_Proxy/image13.webp)

![](/img/How_To/Deploy_SafeSquid_Behind_Corporate_Proxy/image14.webp)

In example: my upstream proxy listening on port 8080

![](/img/How_To/Deploy_SafeSquid_Behind_Corporate_Proxy/image15.webp)

![](/img/How_To/Deploy_SafeSquid_Behind_Corporate_Proxy/image16.webp)

![](/img/How_To/Deploy_SafeSquid_Behind_Corporate_Proxy/image17.webp)

![](/img/How_To/Deploy_SafeSquid_Behind_Corporate_Proxy/image18.webp)

![](/img/How_To/Deploy_SafeSquid_Behind_Corporate_Proxy/image19.webp)

## Testing 
![](/img/How_To/Deploy_SafeSquid_Behind_Corporate_Proxy/image20.webp)

![](/img/How_To/Deploy_SafeSquid_Behind_Corporate_Proxy/image21.webp)

![](/img/How_To/Deploy_SafeSquid_Behind_Corporate_Proxy/image22.webp)

## Save configuration
![](/img/How_To/Deploy_SafeSquid_Behind_Corporate_Proxy/image23.webp)

When you click on Save config, it will give a prompt for asking the confirmation to store your configuration into the cloud.

Select Yes only in below cases:

if you want to use this same configuration in other SafeSquid instances.

if your total configuration in all sections is completed and validated.

Otherwise select No and click on submit.
