---
title: Installation Procedure for BIND in Ubuntu  
Description: Follow this step-by-step guide to install and configure BIND on Ubuntu for DNS resolution in SafeSquid environments, ensuring seamless integration with proxy services.  

Keywords:  
- Install BIND Ubuntu  
- BIND9 configuration SafeSquid  
- DNS setup SafeSquid  
- Ubuntu DNS server setup  
- SafeSquid bind integration  
---

1.  Install bind with the command given below
```bash
apt-get install bind9 bind9utils
```
2.  Open **/etc/bind/** folder to modify **named.conf.options** and **named.conf** configuration files.
3.  Modify the **named.conf.options** file with the command

```bash
vim named.conf.options
```
4.  Check whether these parameters are uncommented as shown below-

dnssec-validation no;
listen-on \{127.0.0.1;\};

auth-nxdomain no; # conform to RFC1035

//listen-on-v6 \{ any; \};

5.  Modify the **named.conf** file with this command

```bash
vim named.conf
```
6.  Add the below line at the end of the file

**include** **"/etc/bind/safesquid.dns.conf"**;

7.  Restart the bind9 service with the command given below.

```bash
/etc/init.d/bind9 restart
```
* Starting domain name service... bind9

[ OK ]
