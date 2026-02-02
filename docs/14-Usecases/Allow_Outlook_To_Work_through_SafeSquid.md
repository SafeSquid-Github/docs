---
title: Allow Outlook to Work Through SafeSquid
description: Learn how to configure SafeSquid and system firewall rules to allow Microsoft Outlook to function properly in environments where proxy authentication and SSL inspection are enabled.
keywords:
  - allow outlook through proxy
  - safesquid outlook configuration
  - iptables rules for outlook
  - outlook with SSL inspection
  - safesquid authentication settings
---

Many times, our team has been reported saying that MS Outlook isn't working when we enable authentication (Negotiate or basic) and/or SSL inspection. Remember that SafeSquid is generally deployed in an environment that has a firewall in front, that allows only 80 and 443 traffic from SafeSquid through it and blocks the rest.

Debugging a bit deeper into this gave us certain interesting results. It was observed that Outlook not only uses HTTP and HTTPS protocols but also uses certain other protocols like SMTP(S), IMAP(S) and POP(S) which are typically non-HTTP(S) traffic. Outlook also fires DNS queries on UDP and interacts with LDAP on 389 and 636 ports.

Surprisingly, Outlook is found to support proxy authentications (Negotiate and Basic) and can also perform SSL negotiation using a certificate deployed in Internet Explorer. So, a solution to this kind of problem is to allow the necessary traffic in your firewall and block the rest.

There are a couple of methods to achieve this. We can either allow and block the traffic by configuring iptables rules on the SafeSquid server or configure these policies in the firewall of your organization.

The findings in allowing the Outlook traffic using the iptables rules are shown below:

This rule is to allow the established incoming connections to the server
```bash
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
```
This rule is to allow the loopback connections to the server
```bash
iptables -A INPUT -i lo -m comment --comment "Allow loopback connections" -j ACCEPT
```
This rule is to allow the incoming ping requests to the server
```bash
iptables -A INPUT -p icmp -m comment --comment "Allow Ping to work as expected" -j ACCEPT
```
This rule is to allow the incoming connections on the following ports to the server, 22(SSH), **25(SMTP), 53(DNS), 110(POP), 389(LDAP), 587(SMTPS), 636(LDAPS), 953(RNDC), 993(IMAPS), 995(POP3S)
```bash
iptables -A INPUT -p tcp -m multiport --dports 22,25,53,110,389,465,587,636,953,993,995 -j ACCEPT
```
This rule is to allow the incoming connections on the following ports to the server, 1023(Reserved), **3268(MSGC), 3269(MSGCS), 5222(XMPP client connections), 5269(XMPP server-to-server), 5280(XMPP over synchronous HTTP), 8080(SafeSquid port)
```bash
iptables -A INPUT -p tcp -m multiport --dports 1023,3268,3269,5222,5269,5280,8080 -j ACCEPT
```
:::note
Note that both the above rules are one and the same excepting the ports. iptables will not allow us to add all the above-mentioned ports at one go, which is the reason to separate them into two rules
:::
This rule is to allow the incoming UDP connections to the server on the following ports, 53(DNS), 953(RNDC)
```bash
iptables -A INPUT -p udp -m multiport --dports 53,953 -j ACCEPT
```
This rule is to allow the established outbound connections from the server
```bash
iptables -A FORWARD -m state --state RELATED,ESTABLISHED -j ACCEPT
```
This rule is to allow the loopback connections from the server
```bash
iptables -A FORWARD -i lo -m comment --comment "Allow loopback connections" -j ACCEPT
```
This rule is to allow the ping outside from the server
```bash
iptables -A FORWARD -p icmp -m comment --comment "Allow Ping to work as expected" -j ACCEPT
```
This rule is to allow the connections on the following ports from the server, 22(SSH), 25(SMTP), **53(DNS), 110(POP), 389(LDAP), 587(SMTPS), 636(LDAPS), 953(RNDC), 993(IMAPS), 995(POP3S)
iptables -A FORWARD -p tcp -m multiport --dports 22,25,53,110,389,465,587,636,953,993,995 -j ACCEPT**

This rule is to allow the connections on the following ports from the server, 1023(Reserved), 3268(MSGC), 3269(MSGCS), 5222(XMPP client connections), 5269(XMPP server-to-server), 5280(XMPP over synchronous HTTP), 8080(SafeSquid port)**
iptables -A FORWARD -p tcp -m multiport --dports 1023,3268,3269,5222,5269,5280,8080 -j ACCEPT**

This rule is to allow the UDP connections from the server on the following ports 53(DNS), 953(RNDC)
```bash
iptables -A FORWARD -p udp -m multiport --dports 53,953 -j ACCEPT
```
This rule is to DROP the remaining input traffic to the server
```bash
iptables -P INPUT DROP
```
This rule is to drop the forward output traffic from the server
```bash
iptables -P FORWARD DROP
```
The above iptables rules are enough for Outlook to work in an environment where authentication and/or SSL inspection in SafeSquid are enabled.
