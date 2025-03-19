# Custom Categorization is not Working

## Issues

1. I am trying to add new websites to whitelist or black list category, but it is not updating

2. Uploaded a new file with some websites and added to specific category, but I did not find that websites in the respective category

3. SafeSquid interface is hanged when I try to add custom websites to any category,

## Root Causes

Verify the status of Categorization Engine from Statistic page of SafeSquid Interface.

SafeSquid server is unable to contact SafeSquid category server

The file(websites) was not uploaded correctly.

## Troubleshooting

### Check for connection to category server from your SafeSquid server

Run below command and see below output

> telnet category.safesquid.net 443

Trying 139.59.16.202...

Connected to category.safesquid.net.

Escape character is '^]'.

If the server is not reachable, you have to run below commands and try telnet again

> rndc flush

> /etc/init.d/bind9 restart
