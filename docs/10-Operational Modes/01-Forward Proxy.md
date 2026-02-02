---
title: Forward Proxy
description: Configure web browsers to use SafeSquid proxy server, including detailed steps for Chrome and Firefox proxy settings to access the SafeSquid WebGUI.
keywords:
  - Configure proxy in browser
  - Set proxy in Chrome for SafeSquid
  - Firefox manual proxy configuration
  - SafeSquid browser setup
  - Access SafeSquid WebGUI
---

## Overview

SafeSquid Proxy Service provides a browser-based WebGUI for configuration and management. Access requires configuring web browsers to use the SafeSquid proxy server. The WebGUI is accessible at: `http://safesquid.cfg`

## Configure Proxy in Chrome (System Settings)

1. Open Chrome browser settings from the toolbar.

   ![Chrome menu](/img/How_To/How_To_configure_Proxy_In_a_Browser/image1.webp)

   ![Settings option](/img/How_To/How_To_configure_Proxy_In_a_Browser/image2.webp)

2. Click the **System** tab in Settings, or search for "proxy" in the search bar.

   ![System tab](/img/How_To/How_To_configure_Proxy_In_a_Browser/image3.webp)

   ![Search proxy](/img/How_To/How_To_configure_Proxy_In_a_Browser/image4.webp)

3. Click **Open your computer's proxy settings**.

   ![Proxy settings link](/img/How_To/How_To_configure_Proxy_In_a_Browser/image5.webp)

4. Enable **Use a proxy server**.

   ![Enable proxy](/img/How_To/How_To_configure_Proxy_In_a_Browser/image6.webp)

   ![Proxy toggle](/img/How_To/How_To_configure_Proxy_In_a_Browser/image7.webp)

5. Enter the proxy server IP address and port **8080**.

   ![Proxy address and port](/img/How_To/How_To_configure_Proxy_In_a_Browser/image8.webp)

6. (Optional) Enter domains and IP addresses to bypass the proxy in the exclusion field:
   - Example: `infatica.io`, `192.158.1.38`, addresses starting with `127.`

   ![Proxy bypass list](/img/How_To/How_To_configure_Proxy_In_a_Browser/image9.webp)

7. Click **Save**.

   ![Save settings](/img/How_To/How_To_configure_Proxy_In_a_Browser/image10.webp)

## Configure Proxy in Firefox

Firefox allows browser-specific proxy configuration without affecting system-wide settings.

1. Open Firefox and click the **menu button** (three horizontal lines) in the top right corner.

   ![Firefox menu](/img/How_To/How_To_configure_Proxy_In_a_Browser/image11.webp)

2. Click **Settings**.

   ![Firefox settings](/img/How_To/How_To_configure_Proxy_In_a_Browser/image12.webp)

3. Scroll down to **Network Settings** in the General section.

   ![Network Settings](/img/How_To/How_To_configure_Proxy_In_a_Browser/image13.webp)

4. Click the **Settings** button.

   ![Settings button](/img/How_To/How_To_configure_Proxy_In_a_Browser/image14.webp)

5. Select **Manual proxy configuration**.

   ![Manual proxy option](/img/How_To/How_To_configure_Proxy_In_a_Browser/image15.webp)

6. Enter the proxy server address and port number.

   ![Proxy details](/img/How_To/How_To_configure_Proxy_In_a_Browser/image16.webp)

7. Click **OK** to save changes.

   ![Save Firefox settings](/img/How_To/How_To_configure_Proxy_In_a_Browser/image17.webp)
