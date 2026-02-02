---
title: Importing Your SSL Certificate Into Firefox
description: Install SafeSquid SSL certificate in Mozilla Firefox browser to enable seamless HTTPS browsing with SSL inspection.
keywords:
  - SafeSquid SSL certificate Firefox
  - import certificate Firefox
  - Firefox SSL configuration
  - HTTPS inspection certificate
  - browser certificate installation
---

## Overview

SafeSquid SSL certificate installation in Firefox enables seamless HTTPS browsing. This guide covers the certificate import process for Mozilla Firefox.

## Import Certificate

1. Open Firefox and click the **Application Menu** (three horizontal lines).

   ![Firefox application menu](/img/Importing_SSL_Certificate_Into_Firefox/image1.webp)

2. Select **Settings**.

   ![Firefox settings menu](/img/Importing_SSL_Certificate_Into_Firefox/image2.webp)

3. Navigate to **Privacy & Security** section.

   ![Privacy and Security section](/img/Importing_SSL_Certificate_Into_Firefox/image3.webp)

4. Scroll down to the **Certificates** section.

   ![Certificates section](/img/Importing_SSL_Certificate_Into_Firefox/image4.webp)

5. Click **View Certificates**.

   ![View Certificates button](/img/Importing_SSL_Certificate_Into_Firefox/image5.webp)

6. In the Certificate Manager, click **Import**.

   ![Import certificate button](/img/Importing_SSL_Certificate_Into_Firefox/image6.webp)

7. Select the SafeSquid SSL certificate file.

   ![Select certificate file](/img/Importing_SSL_Certificate_Into_Firefox/image7.webp)

8. Check **Trust this CA to identify websites** and click **OK**.

   ![Trust settings](/img/Importing_SSL_Certificate_Into_Firefox/image8.webp)

9. Verify the certificate appears in the Authorities list.

   ![Certificate imported](/img/Importing_SSL_Certificate_Into_Firefox/image9.webp)

## Verification

:::note
Ensure [HTTPS inspection is enabled](/docs/03-SSL%20Inspection/main.md) in SafeSquid before testing.
:::

Access any HTTPS website and click the **Lock icon** in the address bar. The certificate should show SafeSquid as the Certificate Authority.

![Certificate verification in browser](/img/Importing_SSL_Certificate_Into_Firefox/image10.webp)
