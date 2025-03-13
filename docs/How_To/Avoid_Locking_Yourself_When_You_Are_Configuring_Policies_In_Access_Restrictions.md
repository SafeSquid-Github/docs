# Avoid Locking Yourself When You Are Configuring Policies In Access Restrictions


## Client Scenario

When you are trying to create policies in the Access Restrictions section of SafeSquid you may get locked out yourself. The first rule that matches a user is applied. You need to create at least one Admin account, or you might lock yourself out on the WebGUI. This usually happens because any changes that you make in the web interface, are applied in real time to the configuration file which resides in the server's memory. The final changes are permanently stored in the configuration file on the disk, only when you save the changes by clicking on the Save Config button on the bottom left corner of the dashboard.

## How the policies work

SafeSquid evaluates entries in the Access Restrictions one by one from top-down order matching each entry with the connection. Once an entry with an IP address or the user's name matches a connection, the following entries will not be evaluated against that connection.

While you are trying to create an entry in the Access Restrictions, always make sure that there is at least one entry that is going to allow you to access the web interface (http://safesquid.cfg/). This in other words means that there must be an entry that matches your connections and has access to the Web interface (Config) selected from the Access field.

## Example

Consider a scenario where you have three entries in the Allow list of Access Restrictions section

-   To access the web interface via SSH tunnel.

-   To bypass authentication.

-   Accessing the internet.

You have created another entry in which you have removed the Web interface(config) from the Access field of that rule and added it. The entry is added as the fourth one and you have moved it to 3rd by clicking on the move up button. Now the third entry matches your connections (since the first is for SSH tunnels and the second is for AUTHENTICATION BYPASS profile) in which you have disabled the Web interface. So, you will be locked out and given a template Access Denied.

To avoid this kind of situation, you always need to maintain an entry that allows you to access the Web interface.

# How to come out when you are locked in yourself

You have a couple of options to get out of this situation. If you can restart the SafeSquid service, just do a restart.

-   Check this [Link](https://help.safesquid.com/portal/en/kb/articles/restart-the-safesquid-service-from-terminal) for restarting SafeSquid from the terminal (Linux box).

If you do not have a choice to restart the service, take an SSH tunnel, access the interface, and correct the entries.

-   Check this [Link](https://help.safesquid.com/portal/en/kb/articles/how-to-take-ssh-tunnel-if-you-will-be-locked-out-to-access-safesquid-interface-ui) to access the Web interface by taking an SSH tunnel.

SafeSquid service will restart with the default or last saved configuration. This usually happens because any changes that you make in the web interface, are applied in real time to the configuration file which resides in the server's memory. The final changes are permanently stored in the configuration file on the disk, only when you save the changes by clicking on the Save Config button on the bottom left corner of the dashboard.
