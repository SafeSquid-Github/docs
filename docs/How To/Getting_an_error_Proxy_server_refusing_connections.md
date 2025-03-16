 # Getting an error Proxy server refusing connections
 
 ## Issues

I am trying to access the web through proxy server and suddenly getting error "Proxy server refusing connections".

When I am going to Restart SafeSquid service from SafeSquid interface, it is displaying error "Proxy server refusing connections".

## Root Causes

SafeSquid Process is not running.

SafeSquid is not listenning on the specific IP (or) port, where you configured in the client browsers.

Monit service is not running on SafeSquid Server. (When you restart SafeSquid from the Interface, monit service will start the SafeSquid service. If the Monit is not running, then safesquid is not going to start, till you start monit service manually).

## Troubleshooting

1. Check status of monit service whether it is up or down.

> Command: pidof monit

If the ouput of the command is empty then run below command to start the service

> Command :/etc/init.d/monit start

2.Check status of SafeSquid Service whether it is up or down.

> Command: pidof safesquid

If the monit service is started already, then you will get the SafeSquid process Id

3.Check the listenning IP and port of SafeSquid by using below command

> Command: netstat -tlnp | grep -iE "safesquid"

tcp6 0 0:::8080 :::* LISTEN 2741/safesquid

tcp6 0 0:::8081 :::* LISTEN 2741/safesquid

tcp6 0 0:::8443 :::* LISTEN 2741/safesquid

Check the IP configured and Port in your browser and compare with the above output

In the above command SafeSquid is listened on all Interfaces on the server with Port 8080,8081, and 8443
