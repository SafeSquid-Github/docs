# Precautions Not to Become SafeSquid Proxy as Open Proxy

## What is an Open Proxy Server?

An open proxy is a proxy server which is accessible by any Internet user.

Any proxy server that doesn't restrict its client base to its own set of clients and allows any other client to connect to it, is known as an open proxy.

## Open Proxy Server Mechanism

An open proxy will accept client connections from any IP address and make connections to any Internet resource.

Open Proxy Servers act as blind intermediary to any other network addresses without any authentication.

An Open Proxy Server commonly allows HTTP access but it can also be used for ftp, email (including spam), IRC/instant messaging or even launch a DoS attack.

## Common mistakes making a Proxy Open

Improperly configured SafeSquid Proxy Server

Proxy administrator unaware of the dangers of leaving the proxy server 'Open'.

Administrator is unaware that a proxy server has been installed on his server by default while installing some other software or application.

## To take precautions not to become SafeSquid proxy as Open proxy

Access Restrictions section of SafeSquid allows you to create a set of policies that govern internet access to machines on your network. You can create policies that manage the access by individual IP address(es), IP address range, LDAP users, Basic authentication etc.

It also allows you to:

Create policies for Authentication

Policies for access to the SafeSquid User Interface

Permission to use CONNECT methods for https sites or FTP clients

Disabling of one or more security filters

Profile the users for being uniquely processed in other sections

Read more for how to create policies under access restrictions
