# IP Based Authentication

## Overview

Almost all the proxy applications restrict access based on the IP address. Most of the organizations network administrator would always prefer to block access to a specific address or range of addresses that he/she suspect belong to malicious individuals.

You can block access to a specific IP address or range of IP addresses to secured web access. SafeSquid SWG allows you to control single IP address or range of IP address using Access Restrictions section which is under Application Setup side menu.

SafeSquid SWG won't let your current IP address get locked out, hence SafeSquid warns you and refuses your policy insert. If you're inside of a corporate intranet, be very careful about setting up your IP policies. The IP address you see on your own computer (like 192.168.0.10) generally bears no relationship to the IP address you'll actually appear as out on the internet. Your company likely proxies and/or NATs your address into a predictable set of outbound addresses which you'll likely need to ask your network team about.

A user whose access is restricted based on an access policy should get block template on browser.

## Prerequisites

To check the scenario, make sure that your IP address is not already added inside the Access restrictions section.

## [Access the SafeSquid User interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

![clicking on configure in safesquid interface](/img/How_To/IP_based_authentication/image1.webp)

### Go to Access restrictions

Go to configure page from SafeSquid WebGUI and open Access Restrictions section which is under Application Setup side menu.

![Going to access restrictions section under application setup](/img/How_To/IP_based_authentication/image2.webp)

### Go to Allow list

To create new policy, go to Allow list subsection.

![clicking on allow list ](/img/How_To/IP_based_authentication/image3.webp)

### Create New Policy

Click on Add New icon situated on bottom left corner to create new policy.

![clicking on add new to add a new entry](/img/How_To/IP_based_authentication/image4.webp)

Enter your IP address inside IP Address field. You can also specify comma separated lP address or range of IPs.

![giving your IP address in the IP address field. you can mention one or more ip addresses by separating them by commas](/img/How_To/IP_based_authentication/image5.webp)

You need to specify unique User-Group name inside Add to User-Groups field. Here we have specified **IP BASED AUTHENTICATION** in Add to User-Groups field.

![giving the appropriate user group](/img/How_To/IP_based_authentication/image6.webp)

## Testing 

To test the scenario, try to access any website from your mentioned IP address (here 192.168.0.10). You will get authentication prompt. You have to specify Username and Password of your Linux machine.

Further in your policy if you mention Username and Password in the field, then only this user will be allowed to access the web.
