# Redirecting Rules for SafeSquid Captive Portal

## Enable IP forwarding in SafeSquid Server

Enable forwarding in **/etc/sysctl.conf**, by changing below line

net.ipv4.ip_forward=0 to net.ipv4.ip_forward=1

To reload settings run below command

> sysctl -p

To flush the IP tables rules

> iptables -F -t nat

## Redirect traffic 

Forward the traffic from port 80 to 8081

> iptables -t nat -A PREROUTING -p tcp -m tcp --dport 80 -j REDIRECT --to-ports 8081

Forward the traffic from port 443 to 8443

> iptables -t nat -A PREROUTING -p tcp -m tcp --dport 443 -j REDIRECT --to-ports 8443

## Verify redirection policies using following command (On Linux Box) 

> iptables -L -v -n -t nat

## Finally, to save IP table

Then save the IP table rules by using below command

> apt-get install iptables-persistent

> iptables-save >> /etc/iptables/rules.v4

**Note: Redirection policies will not flush even you reboot proxy server.**
