---
title: Import Certificate into Chrome or Internet Explorer
description: Step-by-step import of SafeSquid SSL certificate into Chrome or Internet Explorer for HTTPS inspection trust.
keywords:
  - import SafeSquid certificate Chrome
  - import SafeSquid certificate IE
  - SSL certificate install Chrome IE
  - Trusted Root Certification Authorities
  - HTTPS inspection client trust
---
<section class="section-strip">


# Import SafeSquid Root CA into Chrome or Internet Explorer

Clients must trust the SafeSquid Root CA for HTTPS inspection to work without certificate warnings. Chrome and Internet Explorer use the Windows certificate store. This guide covers importing the SafeSquid SSL certificate into Trusted Root Certification Authorities for both browsers.

:::note
SafeSquid Web Security Client users do not need to manually import certificates into Chrome or IE. For Firefox, see [Import certificate into Firefox](/docs/SSL_Inspection/Configure_HTTPS_Inspection/#import-certificate-into-firefox) — Firefox uses its own certificate store.
:::

1. Open the SafeSquid SSL certificate downloaded from the SSL Inspection section or from [https://key.safesquid.com/portal.html](https://key.safesquid.com/portal.html).

   ![Opening downloaded SafeSquid certificate](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image1.webp)

2. Click **Install Certificate**.

   ![Install certificate button](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image2.webp)

3. Select the store location and click **Next**.

   ![Store location selection](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image3.webp)

4. Click **Browse** to select the certificate store.

   ![Browse certificate store](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image4.webp)

5. Select **Trusted Root Certification Authorities** and click **OK**.

   ![Trusted Root Certification Authorities selection](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image5.webp)

6. Click **Next** to continue with the SSL certificate import.

   ![Continue import](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image6.webp)

7. Click **Finish** to complete the import process.

   ![Finish import](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image7.webp)

8. A confirmation message displays indicating successful import.

   ![Import successful confirmation](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image8.webp)

   ![Import complete](/img/How_To/Importing_Your_SSL_Certificate_Into_Internet_Explorer_or_Chrome/image9.webp)

</section>

<section class="section-strip">

## Verification and evidence

- **Browser Check**: Visit any HTTPS site (e.g. https://www.google.com) through the SafeSquid proxy. Click the padlock icon → **Certificate** and verify the chain shows the SafeSquid Root CA as the issuing authority. No certificate warnings should appear.
- **Log Analysis**: SafeSquid access logs should show decrypted HTTPS requests for inspected sites.

**Next steps:** [Configure HTTPS Inspection](/docs/SSL_Inspection/Configure_HTTPS_Inspection/) for enabling inspection and bypass rules. [Import certificate into Firefox](/docs/SSL_Inspection/Configure_HTTPS_Inspection/#import-certificate-into-firefox) for Firefox-specific trust setup.

</section>