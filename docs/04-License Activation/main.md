---
title: License Activation
Description: Learn how to activate your SafeSquid Secure Web Gateway instance using an activation key via the web GUI. 
Keywords:
- Activate SafeSquid instance  
- SafeSquid product activation  
- SafeSquid activation key upload  
- SafeSquid self-service portal  
- SafeSquid Web GUI access  
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Licensing Overview and Activation Purpose

SafeSquid requires valid licensing to enable full functionality and continuous availability. Two licensing options are available:

-   **Free Licensing**: Always free; supports core functionality without time restriction.

-   **Commercial Licensing**: Includes real-time threat intelligence updates, 365-day disaster recovery and backup, and email-based support.

License activation is completed post-installation and is essential for activating subscription-based features and ensuring platform synchronization.

:::note
Activating multiple SafeSquid instances using the same activation key enables synchronization of SSL certificates and configuration files across nodes.
:::
## Readiness Checklist

### Client-Side Preparations

-   Ensure the SafeSquid server has unrestricted outbound Internet access.
-   Allow traffic through the firewall to the following endpoints and ports:

**Licensing and Update Services**

  | Host                        | Port | Purpose                          |
|-----------------------------|------|----------------------------------|
| api.safesquid.net           | 443  | License activation               |
| swgupdates2.safesquid.net   | 443  | Subscription, malware definitions |
| swgupdates.safesquid.net    | 80   | Seqrite updates                  |
| sslupdates.safesquid.com    | 443  | SSL certificate updates          |
| category.safesquid.net      | 443  | Category DB updates              |
| download.quickheal.com      | 80   | Virus signature updates          |

**URL Categorization Engines**

 | Host                        | Port | Path                                      |
|-----------------------------|------|-------------------------------------------|
| prourl.itsecure.co.in       | 8080 | /URLCategorizerService/URLCategorize      |
| encurl.itsecure.co.in       | 8080 | /URLCategorizerService/URLCategorize      |
| klassify.itsecure.co.in     | 8080 | /URLCategorizerService/URLCategorize      |
| prourl.itonlinesecure.in    | 8080 | /URLCategorizerService/URLCategorize      |
| encurl.itonlinesecure.in    | 8080 | /URLCategorizerService/URLCategorize      |


-   Validate DNS resolution and establish successful HTTPS connections to each host.

### SafeSquid-Side Setup

-   Install and configure the SafeSquid service on the target system.

## Activation Procedure

### Generate Activation Key

#### Registration Process 

![showing dashboard of key.safesquid.com, Picture](/img/License_Activation/image1.webp)

Visit https://key.safesquid.com

![Picture 6, Picture](/img/License_Activation/image2.webp) 

Enter your email address, First Name, Last Name, Captcha and then Click on "Sign Up." 

You'll receive an email to activate your account in your registered email address. 

![showing how to sign up using your email, Picture](/img/License_Activation/image3.webp) 

Click on "Click here to activate your account."

![showing how to sign up using your email, Picture](/img/License_Activation/image4.webp) 

You'll be directed to https://accounts.safesquid.com/?success=

Enter your new password in "New password", "confirm password." 

![showing the user info created, Picture](/img/License_Activation/image5.webp) 

click on "Activate." 

![clicking on activate, Picture](/img/License_Activation/image6.webp) 

Enter your username and password and click on "Sign In".

![entering the username and password to get your activation key, Picture](/img/License_Activation/image7.webp) 

Activation code will be generated, and you'll be directed to https://key.safesquid.com/portal.html

 Fill in the user info and contact information. 

![filling the user info and contact info, Picture](/img/License_Activation/image8.webp) 

Click on "Save Profile".

 ![clicking on save profile button, Picture](/img/License_Activation/image9.webp)

Your activation key has been generated.  

Click "close".

![clicking on close after generating the activation key, Picture](/img/License_Activation/image11.webp) 

Page will be reloaded, and you'll be redirected to your home page. 

To download your activation key, click on "Download Key". 

![clicking on download key option on the dashboard, Picture](/img/License_Activation/image12.webp)

:::note
Do not change the activation key file name or contents.
:::

### Upload the Activation key 

:::note
First, configure browsers or network clients to route HTTP/HTTPS traffic through the SafeSquid proxy.
:::

![uploading the activation key When accessing the interface for the first time, Picture](/img/License_Activation/image13.webp)

![selecting your activation key file and clicking on upload, Picture](/img/License_Activation/image14.webp) 

![clicking on restart, Picture](/img/License_Activation/image15.webp) 

![waiting for page refresh, Picture](/img/License_Activation/image16.webp) 

## Validating Activation Success

1.  Open a browser and go to: [**http://Safesquid.cfg/**](http://Safesquid.cfg/)

2.  Access the **Support** section from the menu.

![clicking on support to validate product activation, Picture](/img/License_Activation/image17.webp)

3.  Confirm the **Activation Details** section is populated.

![showing activation details in license details, Picture](/img/License_Activation/image18.webp)

If these fields are present and valid, the license activation is confirmed.

## **Troubleshooting Activation Failures**

<Tabs>
<TabItem value="Case 1" label="Case 1" default>

**Case 1: Activation Key Not Detected By http://safesquid.cfg/**

**Symptoms:** After uploading the activation key, the SafeSquid UI displays "Failed to set Subscription details."

**Root Cause:** The activation key file is either missing or improperly named.

**Resolution:**

1.  Verify the presence of the activation key file:

```bash
ls -lrt /usr/local/safesquid/security/
```
Ensure a file named activation_key exists.

2.  If absent or misnamed, re-upload the correct activation key file.

3.  Restart the SafeSquid service:

```bash
/etc/init.d/safesquid stop
```
```bash
/etc/init.d/safesquid start
```
</TabItem>
<TabItem value="Case 2" label="Case 2" default>

**Case 2: Subscription Server Unreachable**

**Symptoms:** Post activation key upload, the browser shows "proxy server refusing connections."

**Root Cause:** SafeSquid cannot connect to the subscription server due to network issues.

**Resolution:**

1.  Test connectivity to the subscription server:

```bash
ping swgupdates2.safesquid.net
```
```bash
nslookup swgupdates2.safesquid.net
```
Ensure the server responds and DNS resolution is successful.

2.  If connectivity fails, check firewall settings and network configurations to allow access to the required hosts and ports.

3.  After resolving network issues, restart the SafeSquid service:

```bash
/etc/init.d/safesquid start
```
</TabItem>
<TabItem value="Case 3" label="Case 3" default>

**Case 3: Improper Service Restart**

**Symptoms:**

-   Even after uploading the activation key, subscription details remain unset.

-   The browser indicates the proxy server is refusing connections.

**Root Cause:** SafeSquid service was not restarted correctly after activation key upload.

**Resolution:**

1.  Ensure the monit service is configured properly to manage SafeSquid.

2.  If monit is not set up, manually restart the SafeSquid service:

```bash
/etc/init.d/safesquid stop**
```
```bash
/etc/init.d/safesquid start**
```
</TabItem>
</Tabs>