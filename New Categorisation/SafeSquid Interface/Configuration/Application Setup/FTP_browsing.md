# FTP Browsing

## Overview

The FTP Browsing section lets you configure how the FTP connections are established, and results are displayed.

SafeSquid can provide support for anonymously browsing FTP Servers.

This can be useful when the client (some of the older web-browsers) applications lack the support to directly access FTP sites.

Such Internet Clients may also set SafeSquid as their HTTP/1.1 Proxy to access FTP sites.

The settings made here apply to all requests for ftp:// URLs.

## Global

![showing global section of FTP browsing section ](/img/Configure/Application_Setup/FTP_browsing/image1.webp)

### Passive mode

When you are behind a firewall, it prevents the FTP server from opening a data connection to you. Thus, preventing the FTP transfers.

Enabling Passive mode solves this by opening up both (Command and Data) channels from your side.

So, it is recommended to use Passive mode when you are behind a firewall.

TRUE: Enable Passive mode.

FALSE: Disable Passive mode.

### Timeout

The timeout is to wait for a response to commands sent to the FTP server.

### Username for anonymous login

Specify the username to be used when none is given in the URL, explicitly.

### Password for anonymous login

The password is to be used when none is given in the URL, explicitly.

### Sort Order

Specify the order by which FTP directory listings should be sorted.

**ASCENDING**: Displays the directory listings in Ascending order.

**DESCENDING**: Displays the directory listings in Descending order.

### Sort Field

Specify the field by which FTP directory listings should be sorted.

-   **NAME**: Sort by Name field.

-   **SIZE**: Sort by Size field.

-   **DATE**: Sort by Date field.

-   **NONE**: Don't sort by any field.
