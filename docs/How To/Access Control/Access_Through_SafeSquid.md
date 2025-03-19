# Access Through SafeSquid

## Overview

Some remote applications like Remote desktop applications (Anydesk® and TeamViewer®), Download managers, etc. get automatically blocked if HTTPS inspection is enabled. You don't require any policy or configuration for blocking purposes.

[Access Remote Desktop Applications Through SafeSquid](https://help.safesquid.com/portal/en/kb/articles/access-remote-desktop-applications-through-safesquid).

## Prerequisites

HTTPS Inspection should be enabled on SafeSquid. If it is disabled, check our document - [How to configure HTTPS inspection](https://help.safesquid.com/portal/en/kb/articles/setup-https-inspection)

Remote applications like Anydesk and Teamviewer should be blocked automatically if HTTPS inspection is enabled. No need to configure any policy for blocking purposes.

**Note**: It has been observed that Remote applications like Anydesk and Teamviewer get access to the internet if not blocked by the firewall. To control these types of Remote applications via SafeSquid proxy (Secure web gateway) you should first block it on the firewall.

## Configuration on Remote applications 

Set proxy settings on the Anydesk application.

If authentication is enabled you have to specify Username and Password on Anydesk application.

Anydesk should not take auto proxy settings: If you set proxy in IE browser or Chrome browser and you select the "Try to detect the proxy server" option on Anydesk, it should not take proxy automatically. You must configure a proxy on the Anydesk application.

**After doing the above configuration you should restrict**

-   Restrict Ammy admin

-   Restrict Team viewer

-   Restrict Webex

-   Restrict Splashtop

-   Restrict Anydesk

Note: To block a single application from the above list please refer link [Restrict Anydesk](https://help.safesquid.com/portal/en/kb/articles/restrict-any-desk)

Follow the link to [Allow remote applications for particular users](https://help.safesquid.com/portal/en/kb/articles/allow-remote-applications-to-particular-users)

## How to create policy without Application Signature

If the application is not categorized under default Application Signatures, find the User-agent using SafeSquid's extended logs or any other traffic-capturing tool.

Add that User-agent or hostname of websites under Custom Setting > Request Types section.

Bind that created user group and Request Type in the Access Profile section and specify the action as per the requirement.