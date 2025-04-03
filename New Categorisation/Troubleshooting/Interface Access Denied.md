# Interface Access Blocked Access Denied

## Issues

You may get locked out yourselves whenever you are trying to create policies in the Access Restrictions section of SafeSquid.

You suddenly get messages as Access Denied on the browser.

## Root Causes

SafeSquid evaluates entries in the Access Restrictions one by one from top-down order matching each entry with the connection. Once an entry with an IP address or username matches a connection, the following entries will not be evaluated against that connection.

So, once you are trying to create an entry in the Access Restrictions, always make sure that there is at least one entry that is going to allow you to access the web interface (http://safesquid.cfg/). This in other words means that there must be an entry that matches your connections and has Web interface (Config) selected from the Access field.

**Example:**

Consider a scenario wherein you have three entries in the Allow list of Access Restrictions section

1.  The first one is to access the web interface via SSH tunnel.

2.  The second one is to allow the AUTHENTICATION BYPASS profile

3.  The third one is the entry through which you are accessing the internet.

You have created another entry in which you have removed the Web interface in the Access field and added it. The entry is added as the fourth one and you have moved it to 3rd by clicking on move up. Now the third entry matches your connections (since the first is for SSH tunnels and the second is for AUTHENTICATION BYPASS profile) in which you have disabled the Web interface. So, you will be locked out and given a template Access Denied.

To avoid this kind of situation, you always need to maintain an entry that allows you to access the Web interface.

## Troubleshooting

You have a couple of options to get out of this situation.

If you can restart the SafeSquid service, just do a restart. Check this [Link](https://help.safesquid.com/portal/en/kb/articles/restart-the-safesquid-service-from-terminal) for restarting SafeSquid from the terminal (Linux box).

If you do not have a choice to restart the service, take an SSH tunnel, access the interface, and correct the entries. Check this [Link](https://help.safesquid.com/portal/en/kb/articles/how-to-take-ssh-tunnel-if-you-will-be-locked-out-to-access-safesquid-interface-ui) to access the Web interface by taking an SSH tunnel.
