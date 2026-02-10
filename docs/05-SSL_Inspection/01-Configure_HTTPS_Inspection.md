---
title: Configure HTTPS Inspection
description: Prerequisites, certificate generation, enabling SSL inspection, client certificate import, bypass rules, and verification for SafeSquid HTTPS inspection.
keywords:
  - configure SSL inspection SafeSquid
  - HTTPS inspection setup
  - SafeSquid certificate generation
  - bypass SSL inspection
  - Firefox certificate import
---
<section class="section-strip">


# Configure HTTPS Inspection

:::info CISO takeaway
**Risk:** Encrypted HTTPS traffic creates a blind spot for URL filtering, DLP, and malware detection; compliance frameworks (e.g. PCI-DSS 10.x, SOC 2) expect visibility into web traffic where applicable. **Control:** SafeSquid terminates TLS, inspects content, and re-encrypts so policies apply to HTTPS while bypass rules protect sensitive domains. **Evidence:** Inspection and bypass policies are visible in the Configuration Portal; access and security logs show decrypted requests and bypassed hosts for audit.
:::

</section>

<section class="section-strip">

## Encrypted traffic hides threats without inspection

Most web traffic is HTTPS. Proxies that cannot decrypt and inspect this traffic cannot enforce policy, block malware, or apply DLP. SafeSquid HTTPS inspection allows the gateway to terminate TLS, apply security and policy, then re-encrypt to the origin so traffic remains protected end-to-end while remaining visible to the gateway. **Limitation:** Bypass rules are required for SSL-pinned applications and privacy-sensitive domains (e.g. banking, healthcare); client browsers must trust the SafeSquid Root CA.

</section>

<section class="section-strip">

## Visibility and control over HTTPS reduce risk and support compliance

HTTPS inspection enables URL filtering, malware scanning, data loss prevention, and application control on encrypted traffic. Organizations gain consistent policy enforcement, better threat detection, and the ability to meet compliance requirements that depend on visibility into web traffic (e.g. PCI-DSS requirement 10, SOC 2 CC6.1). Evidence for auditors: configuration in Real-time content security → HTTPS Inspection; logs showing inspected vs. bypassed traffic.

</section>

<section class="section-strip">

## Prerequisites

### Client-side preparations

- Deploy SafeSquid Root CA certificate to all client systems and browsers
- Update endpoint security solutions to trust SafeSquid's MITM certificates
- Verify compatibility with applications enforcing SSL pinning

### SafeSquid-side preparations

- Generate or import enterprise-approved Root CA certificates
- Configure Trusted Root CA store for validating upstream certificates
- Prepare role-based policies for bypassing sensitive domains and services

</section>

<section class="section-strip">

## Configuring HTTPS Inspection

### Generating SSL certificates

[**Access the Self-Service Portal**](../02-SafeSquid_SWG/04-Self-Service_Portal.md)

Log in to the Self-Service Portal - [https://key.safesquid.com](https://key.safesquid.com/)

The Self-Service Portal manages SafeSquid deployments and creates Trusted Root CA certificates.

![Self-Service Portal interface for certificate management](/img/SSL_Inspection/image1.webp)

![Click Manage Certificate in the Self-Service Portal](/img/SSL_Inspection/image2.webp)

**Generate SafeSquid Certificate**

Using Self-Signed Certificate.

:::note

The "Generate" button appears only when SafeSquid's SSL certificate has not been generated yet.

:::

![clicking on generate](/img/SSL_Inspection/image3.webp)

**Note**: The passphrase entered in step #3 is non-recoverable. Save the passphrase to reuse the same certificate with a different activation key.

![selecting general self signed and entering passphrase for self signed certificate and clicking on generate](/img/SSL_Inspection/image4.webp)

![clicking on close to continue](/img/SSL_Inspection/image5.webp)

Using Enterprise CA Certificate

*With a Passphrase*

Generating SafeSquid certificate using an enterprise CA certificate which has a passphrase.

![clicking on regenerate, uploading the enterprise CA cert and selecting have passphrase option](/img/SSL_Inspection/image6.webp)

![selecting CA cert files](/img/SSL_Inspection/image7.webp)

![entering the passphrase and clicking on validate private key](/img/SSL_Inspection/image8.webp)

![selecting retain password and clicking on upload](/img/SSL_Inspection/image9.webp)

![clicking on close to continue](/img/SSL_Inspection/image10.webp)

*Without a Passphrase*

![clicking on regenerate, uploading the enterprise CA cert and selecting does not have passphrase option ](/img/SSL_Inspection/image11.webp)

![selecting the CA cert files](/img/SSL_Inspection/image12.webp)

**Note**: The passphrase entered in step #6 is non-recoverable. Save the passphrase to reuse the same certificate with a different activation key.

![entering new passphrase and clicking on upload](/img/SSL_Inspection/image13.webp)

![clicking on close to continue](/img/SSL_Inspection/image14.webp)

**Download Certificate**

From the Self-Service Portal

![Passphrase field for certificate download](/img/SSL_Inspection/image15.webp) ![Click Download to download the self-signed certificate](/img/SSL_Inspection/image16.webp)

### Enabling SSL inspection

[**Access the SafeSquid interface**](../02-SafeSquid_SWG/01-Configuration_Portal.md)

Go to Configure Page

![clicking on configure in safesquid interface](/img/SSL_Inspection/image17.webp)

**Open Real time content security side menu**

![clicking on Real Time Content Security in the sidebar](/img/SSL_Inspection/image18.webp)

**Open HTTPS Inspection section**

![HTTPS Inspection section in Real-time content security sidebar](/img/SSL_Inspection/image19.webp)

**Enable HTTPS Inspection**

**Note**: In SafeSquid versions released after June 2017, the setup tab is removed. Only three subsections appear in the HTTPS inspection section.

![Enable HTTPS Inspection in SafeSquid interface](/img/SSL_Inspection/image20.webp)

**Open Global part of HTTPS Inspection section and make the Enabled as True.**

![clicking on edit policy in global tab ](/img/SSL_Inspection/image21.webp)![selecting true in drop down menu](/img/SSL_Inspection/image22.webp)![clicking on save policy](/img/SSL_Inspection/image23.webp)

**Open Inspection Policies Tab**

Make sure all the policies should be Enabled as True.

![clicking on inspection policy tab](/img/SSL_Inspection/image24.webp)

![showing of default policies in Inspection policies tab](/img/SSL_Inspection/image25.webp)

![clicking on edit on last rule of Enforce SSL scanning for all websites](/img/SSL_Inspection/image26.webp)

![clicking on true in the drop down menu of the policy](/img/SSL_Inspection/image27.webp)

![clicking on the save policy](/img/SSL_Inspection/image28.webp)

**Save Configuration**

Click on Save Configuration icon situated at bottom left corner.

![clicking on save conf to save the configuration](/img/SSL_Inspection/image29.webp)

Clicking Save config prompts for confirmation to store the configuration in the cloud.

- Select Yes only when:
  - The same configuration will be used on other SafeSquid instances.
  - All sections are fully configured and validated.
- Otherwise select No and click Submit.

</section>

<section class="section-strip">

## Import certificate into Firefox {#import-certificate-into-firefox}

Firefox uses its own certificate store and does not use the system or Chrome trust store. Import the SafeSquid Root CA so that HTTPS inspection works without certificate warnings in Firefox.

1. Download the SafeSquid Root CA (e.g. from the Self-Service Portal or from the SafeSquid interface).
2. Open Firefox → **Settings** → **Privacy & Security** → **Certificates** → **View Certificates**.
3. Open the **Authorities** tab → **Import**.
4. Select the downloaded SafeSquid Root CA file, check **Trust this CA to identify websites**, then **OK**.

</section>

<section class="section-strip">

## Test certificate in Firefox {#test-certificate-in-firefox}

After importing the SafeSquid Root CA in Firefox, confirm that HTTPS inspection is working.

1. Ensure the proxy is set to use SafeSquid and SSL inspection is enabled.
2. In Firefox, visit an HTTPS site (e.g. https://www.google.com).
3. Click the padlock (or connection icon) in the address bar → **Connection secure** → **More information**.
4. Click **View Certificate** and verify the certificate chain shows the SafeSquid Root CA or the enterprise CA as the root. If the chain is valid and the site loads without warnings, inspection is working.

</section>

<section class="section-strip">

## Bypass Inspection

**To bypass HTTPS Inspection enabled SafeSquid default configuration, follow the below steps:**

[**Access the SafeSquid User Interface**](../02-SafeSquid_SWG/01-Configuration_Portal.md)

![clicking on configure in safesquid interface](/img/SSL_Inspection/image30.webp)

![clicking on search](/img/SSL_Inspection/image31.webp)

**Search policy: "BYPASS SSL INSPECTION" to Search**

![searching "BYPASS SSL INSPECTION"](/img/SSL_Inspection/image32.webp)

**Edit policy to Enable as TRUE (Inspection Policies)**

![search results for "BYPASS SSL INSPECTION" and clicking on edit to enable the rule as true](/img/SSL_Inspection/image33.webp)

![selecting the true value in enabled](/img/SSL_Inspection/image34.webp)

![clicking on save policy to save it](/img/SSL_Inspection/image35.webp)

**Edit policies and profiles to Enable as TRUE**

![editing the default policies to bypass ssl inspection for applications and categories](/img/SSL_Inspection/image36.webp)

**How to create new policy to bypass HTTPS Inspection**

![example of how to create new policy to bypass SSL inspection](/img/SSL_Inspection/image37.webp)

**Go to Request Types**

![going to request types in request types section in sidebar](/img/SSL_Inspection/image38.webp)

![clicking on add new to create a new policy](/img/SSL_Inspection/image39.webp)

![writing comment for reference and entering regular expression of dropbox as an example to match all the dropbox websites](/img/SSL_Inspection/image40.webp)

![enabling smart TLD as true to match all the dropbox websites](/img/SSL_Inspection/image41.webp)

**Go to Access Policies**

![creating a new policy in access profiles](/img/SSL_Inspection/image42.webp)

![writing relevant comment, adding the created request type in request type parameter and mentioning the BYPASS SSL INSPECTION in Added profiles](/img/SSL_Inspection/image43.webp)

![click on save policy to save](/img/SSL_Inspection/image44.webp)

:::note

Configure proxy settings in Dropbox and upload or download files to validate that bypass works.

:::

</section>

<section class="section-strip">

## Verification and Evidence

- **Interface Checks**: In [Configuration Portal](../02-SafeSquid_SWG/01-Configuration_Portal.md), Real-time content security → HTTPS Inspection: Global enabled, Inspection policies show Enforce SSL scanning and Bypass rules as configured. Self-Service Portal or Manage Certificate shows the Root CA in use.
- **Log Analysis**: Access and security logs show decrypted requests when inspection is applied; bypassed hosts show CONNECT without decrypt. Certificate or policy errors appear in logs.
- **Performance Validation**: Browsing HTTPS sites works without certificate warnings when the SafeSquid Root CA is installed in clients. Bypassed domains (e.g. banking) load without inspection; other traffic is inspected and policies apply.

</section>

<section class="section-strip">

## Troubleshooting

- **Certificate errors in browser**: Ensure SafeSquid Root CA is installed in the client trust store. See [Server Verification](../26-Server_Verification/main.md) and [Import certificate into Firefox](#import-certificate-into-firefox).
- **Sites or applications broken after enabling inspection**: Add bypass rules for sensitive or pinned applications. Use Request Types and Access Policies to match domains or applications and set BYPASS SSL INSPECTION.
- **Handshake or policy failures in logs**: Confirm Trusted Root CA store and upstream certificate validation; check [SSL Inspection Issues](../23-Troubleshooting/SSL_Inspection_Issues.md) for diagnostic steps.

</section>

<section class="section-strip">

## Next steps

- [Self-Service Portal](../02-SafeSquid_SWG/04-Self-Service_Portal.md) for certificate management.
- [Server Verification](../26-Server_Verification/main.md) for client certificate import.
- [Access Restriction](../08-Access_Restriction/main.md) for policy and bypass rules.
- [SSL Inspection Issues](../23-Troubleshooting/SSL_Inspection_Issues.md) for diagnostic steps.

</section>