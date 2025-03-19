# Setup VPN with SafeSquid Web Security Client 

## Overview

SafeSquid web security client enables remote users to connect to private computer networks to gain access to their data in a secure way. The users get authenticated from your LDAP server with IP assigned by the SafeSquid VPN server. For example, an employee traveling or working from home can use SafeSquid web security client to securely access the office network through the Internet. Instead of remotely logging on to a private network using an unencrypted and unsecure Internet connection, the use of a safesquid web security client ensures that unauthorized parties cannot access the office network and cannot intercept any of the information that is exchanged between the employee and the office network. When client requests a webpage then request comes to the web security client installed in client machine without setting proxy settings in the browser.

## Prerequisites

Go to SafeSquid Subscription server https://key.safesquid.com/

Generate Activation key, download and save it.

[Manage SSL Trusted Root Certificate Authority](https://help.safesquid.com/portal/en/kb/articles/setting-up-ssl-certificates-from-self-service-portal)

Deploy SafeSquid - [Getting Started](https://help.safesquid.com/portal/en/kb/safesquid-labs)

Once installation get completed access SafeSquid Web Interface using http://safesquid.cfg/

Activate your Product

## Server-Side Configuration

[Enable HTTPS inspection on SafeSquid Interface](https://help.safesquid.com/portal/en/kb/articles/setup-https-inspection)

**Note**: No need to download and import your SSL certificate into Chrome or IE, in HTTPS configuration because it will import automatically.

Integrate your LDAP server with SafeSquid for LDAP authentication.

Integrate your PAM service for PAM authentication in case you don't have Active Directory for LDAP configuration. Add PAM user and set password.

[Manage VPN settings](https://help.safesquid.com/portal/en/kb/articles/manage-vpn-settings)

Download VPN binary http://downloads.safesquid.net/VPN/safesquid_vpn_latest.tar.gz and [upgrade from the interface](https://help.safesquid.com/portal/en/kb/articles/upgrade-safesquid-to-a-newer-version)

Start openvpn service using following command

/etc/init.d/openvpn start

Verify openvpn service status using following command

/etc/init.d/openvpn status

Enable captive portal port on SafeSquid

Restart SafeSquid service

Verify redirection policies using following command (On Linux Box)

iptables -L -v -n -t nat

If redirection policies are not found then follow SafeSquid Sever

If redirection policies found follow steps **Enable forwarding in /etc/sysctl.conf** and **Reload settings** from SafeSquid Sever

## Client-side configuration

Add FQDN of proxy server in your hosts file of the system where you are running the installer at given path

**Path**:C:WindowsSystem32driversetc

**Note**: If your OPEN VPN server is setup on public IP address , and your set URL(FQDN of SafeSquid Server) is resolved then no need to do above step.

  ---------------------------------------------------------------------------
  Copyright (c) 1993-2009 Microsoft Corp.
  ---------------------------------------------------------------------------
  \#

  \# This is a sample HOSTS file used by Microsoft TCP/IP for Windows.

  \#

  \# This file contains the mappings of IP addresses to host names. Each

  \# entry should be kept on an individual line. The IP address should

  \# be placed in the first column followed by the corresponding host name.

  \# The IP address and the host name should be separated by at least one

  \# space.

  \#

  \# Additionally, comments (such as these) may be inserted on individual

  \# lines or following the machine name denoted by a '#' symbol.

  \#

  \# For example:

  \#

  \# 102.54.94.97 rhino.acme.com # source server

  \# 38.25.63.10 x.acme.com # x client host

  localhost name resolution is handled within DNS itself.

  \# 127.0.0.1 localhost

  \# ::1 localhost

  
  192.168.221.222 sabproxy.safesquid.test sabproxy
  ---------------------------------------------------------------------------

Remove proxy setting from (IE and Chrome) browser before installing websecurity client.

Download web security client http://downloads.safesquid.net/VPN/websecurity.exe

Install web security client

## Testing

Go to SafeSquid server and run the below commands:

pidof openvpn (or) netstat -tulnp | grep "openvpn"

![Going to SafeSquid server and running the below commands: pidof openvpn (or) netstat -tulnp | grep "openvpn" ](/img/How_To/Setup_VPN_with_SafeSquid_Web_Security_Client/image1.webp)
Check openvpn logs by using below command

tail -F /etc/openvpn/openvpn.log

root@sabproxy:~# tail -f /etc/openvpn/openvpn.log

Mon Dec 26 19:20:10 2016 UID set to nobody

Mon Dec 26 19:20:10 2016 UDPv4 link local (bound): [undef]

Mon Dec 26 19:20:10 2016 UDPv4 link remote: [undef]

Mon Dec 26 19:20:10 2016 MULTI: multi_init called, r=256 v=256

Mon Dec 26 19:20:10 2016 IFCONFIG POOL: base=10.8.0.4 size=62, ipv6=0

Mon Dec 26 19:20:10 2016 ifconfig_pool_read(), in='gangadhar,10.8.0.4', TODO: IPv6

Mon Dec 26 19:20:10 2016 succeeded -> ifconfig_pool_set()

Mon Dec 26 19:20:10 2016 IFCONFIG POOL LIST

Mon Dec 26 19:20:10 2016 Initialization Sequence Completed

Check your WebSecurity Service status from Windows Service Manager.

If it stopped then check your "C:ProgramDatawebsecurityconfig" directory.

You must see two files client **.sovpn** and **ca**

Check the safesquid certificate in IE and chrome browser. By default websecurity client installs certificates in IE and chrome.

Import the certificate in Firefox using the steps shown in the installation document WebSecurity installation guide downloaded above.

Once the installation is successful, open your browser and start surfing.

Your traffic should flow through SafeSquid.

Verify SafeSquid logs to ensure traffic flow.
