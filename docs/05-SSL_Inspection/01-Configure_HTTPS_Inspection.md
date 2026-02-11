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

[**Access the Self-Service Portal**](/docs/SafeSquid_SWG/Self-Service_Portal/) — license management and certificate generation interface

Log in to the Self-Service Portal at [https://key.safesquid.com](https://key.safesquid.com/) using your SafeSquid account credentials.

The Self-Service Portal manages SafeSquid deployments, licenses, and generates Trusted Root CA certificates for HTTPS inspection.

![Self-Service Portal interface for certificate management](/img/SSL_Inspection/image1.webp)

**Navigate to Certificate Management**

In the Self-Service Portal dashboard → locate your deployment in the list → click the **Manage Certificate** button (or link) for that deployment.

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

[**Access the SafeSquid interface**](/docs/SafeSquid_SWG/Configuration_Portal/) — web interface for policy and system settings (typically `http://<proxy-ip>:8080`)

**Navigate to the Configuration Portal**

In the SafeSquid interface header (top navigation bar) → click **Configure**.

![clicking on configure in safesquid interface](/img/SSL_Inspection/image17.webp)

**Open the Real-time Content Security section**

In the left sidebar → expand **Real Time Content Security** (if collapsed) → click to open the subsections.

![clicking on Real Time Content Security in the sidebar](/img/SSL_Inspection/image18.webp)

**Navigate to HTTPS Inspection**

Within the Real-time Content Security sidebar → click **HTTPS Inspection** to display the configuration tabs.

![HTTPS Inspection section in Real-time content security sidebar](/img/SSL_Inspection/image19.webp)

**Enable HTTPS Inspection Globally**

:::note Version Change
In SafeSquid versions released after June 2017, the setup tab was removed. The HTTPS Inspection section now contains three subsections: **Global**, **Inspection Policies**, and **Bypass Policies**.
:::

![Enable HTTPS Inspection in SafeSquid interface](/img/SSL_Inspection/image20.webp)

**Configure the Global setting**

In the HTTPS Inspection section → click the **Global** tab (first tab at the top of the main content area) → click the **Edit** icon (pencil icon) on the policy row.

![clicking on edit policy in global tab ](/img/SSL_Inspection/image21.webp)

In the policy editor → set **Enabled** dropdown to **True**.

![selecting true in drop down menu](/img/SSL_Inspection/image22.webp)

Click **Save Policy** (green button at the bottom of the policy editor).

![clicking on save policy](/img/SSL_Inspection/image23.webp)

**Configure Inspection Policies**

In the HTTPS Inspection section → click the **Inspection Policies** tab (second tab at the top).

Verify that all default policies are enabled. The table displays existing inspection rules; each row should show **Enabled: True**.

![clicking on inspection policy tab](/img/SSL_Inspection/image24.webp)

![showing of default policies in Inspection policies tab](/img/SSL_Inspection/image25.webp)

Find the policy named **"Enforce SSL scanning for all websites"** (usually the last entry) → click the **Edit** icon (pencil icon) on that row.

![clicking on edit on last rule of Enforce SSL scanning for all websites](/img/SSL_Inspection/image26.webp)

In the policy editor → set **Enabled** dropdown to **True** (if not already enabled).

![clicking on true in the drop down menu of the policy](/img/SSL_Inspection/image27.webp)

Click **Save Policy** (green button at the bottom of the policy editor).

![clicking on the save policy](/img/SSL_Inspection/image28.webp)

**Save and Apply Configuration**

In the SafeSquid interface → locate the **Save Configuration** icon (floppy disk icon, bottom left corner of the interface) → click to save changes.

![clicking on save conf to save the configuration](/img/SSL_Inspection/image29.webp)

A confirmation dialog appears asking whether to store the configuration in the cloud.

- Select **Yes** only when:
  - The same configuration will be used on other SafeSquid instances (cluster deployment).
  - All sections are fully configured and validated for production use.
- Otherwise select **No** and click **Submit**.

:::tip
Selecting "No" saves the configuration locally without uploading to the cloud. This is recommended during initial testing or when the configuration contains environment-specific settings.
:::

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

Certain applications (e.g., banking, SSL-pinned mobile apps) will break if HTTPS traffic is decrypted. Use bypass rules to exclude these from inspection.

**Enable the default bypass policy**

[**Access the SafeSquid User Interface**](/docs/SafeSquid_SWG/Configuration_Portal/) — navigate to `http://<proxy-ip>:8080`

In the SafeSquid interface header → click **Configure** to open the Configuration Portal.

![clicking on configure in safesquid interface](/img/SSL_Inspection/image30.webp)

**Use the Policy Search feature**

In the Configuration Portal header (top right) → click the **Search** icon (magnifying glass icon).

![clicking on search](/img/SSL_Inspection/image31.webp)

In the search field → type `BYPASS SSL INSPECTION` and press Enter or click the search button.

![searching "BYPASS SSL INSPECTION"](/img/SSL_Inspection/image32.webp)

**Enable the bypass policy in search results**

The search results display all policies matching "BYPASS SSL INSPECTION" → locate the policy in the **Inspection Policies** section → click the **Edit** icon (pencil) on that row.

![search results for "BYPASS SSL INSPECTION" and clicking on edit to enable the rule as true](/img/SSL_Inspection/image33.webp)

In the policy editor → set **Enabled** dropdown to **True**.

![selecting the true value in enabled](/img/SSL_Inspection/image34.webp)

Click **Save Policy** (green button at the bottom of the policy editor).

![clicking on save policy to save it](/img/SSL_Inspection/image35.webp)

**Review and enable related bypass policies**

After enabling the main bypass policy, review the associated application and category profiles. The default configuration includes bypass rules for common SSL-pinned applications (e.g., banking apps, Windows Update).

![editing the default policies to bypass ssl inspection for applications and categories](/img/SSL_Inspection/image36.webp)

**Create a custom bypass policy for specific domains**

To bypass HTTPS inspection for a domain not covered by default rules (e.g., Dropbox):

![example of how to create new policy to bypass SSL inspection](/img/SSL_Inspection/image37.webp)

**Step 1: Define the Request Type**

In the left sidebar → expand **Profiling Engine** (if collapsed) → click **Request Types**.

![going to request types in request types section in sidebar](/img/SSL_Inspection/image38.webp)

Click **Add New** (button at the top of the Request Types list).

![clicking on add new to create a new policy](/img/SSL_Inspection/image39.webp)

In the Request Type editor:
- **Comment:** Enter a descriptive name (e.g., "Dropbox domains").
- **Match pattern:** Enter a regular expression to match the target domains (e.g., `.*dropbox.*` to match all Dropbox-related URLs).

![writing comment for reference and entering regular expression of dropbox as an example to match all the dropbox websites](/img/SSL_Inspection/image40.webp)

Set **Smart TLD** to **True** to automatically match all top-level domains for the pattern (e.g., `.com`, `.net`, `.co.uk`).

![enabling smart TLD as true to match all the dropbox websites](/img/SSL_Inspection/image41.webp)

**Step 2: Create an Access Policy using the Request Type**

In the left sidebar → expand **Access Policies** (under **Categorization and restriction**) → click **Access Profiles** (or **Access Policies**).

![creating a new policy in access profiles](/img/SSL_Inspection/image42.webp)

Click **Add New** → in the policy editor:
- **Comment:** Enter a descriptive note (e.g., "Bypass SSL for Dropbox").
- **Request Type:** Select the Request Type you created in Step 1 (e.g., "Dropbox domains").
- **Added profiles:** Select **BYPASS SSL INSPECTION** from the dropdown or profile list.

![writing relevant comment, adding the created request type in request type parameter and mentioning the BYPASS SSL INSPECTION in Added profiles](/img/SSL_Inspection/image43.webp)

Click **Save Policy** (green button at the bottom of the policy editor).

![click on save policy to save](/img/SSL_Inspection/image44.webp)

**Save the configuration** (floppy disk icon, bottom left corner) to apply the changes.

:::note

Configure proxy settings in Dropbox and upload or download files to validate that bypass works.

:::

</section>

<section class="section-strip">

## Verification and Evidence

- **Interface Checks**: In [Configuration Portal](/docs/SafeSquid_SWG/Configuration_Portal/), Real-time content security → HTTPS Inspection: Global enabled, Inspection policies show Enforce SSL scanning and Bypass rules as configured. Self-Service Portal or Manage Certificate shows the Root CA in use.
- **Log Analysis**: Access and security logs show decrypted requests when inspection is applied; bypassed hosts show CONNECT without decrypt. Certificate or policy errors appear in logs.
- **Performance Validation**: Browsing HTTPS sites works without certificate warnings when the SafeSquid Root CA is installed in clients. Bypassed domains (e.g. banking) load without inspection; other traffic is inspected and policies apply.

</section>

<section class="section-strip">

## Troubleshooting

- **Certificate errors in browser**: Ensure SafeSquid Root CA is installed in the client trust store. See [Import Certificate into Chrome or IE](/docs/SSL_Inspection/Import_Certificate_Chrome_IE/) and [Import certificate into Firefox](#import-certificate-into-firefox).
- **Sites or applications broken after enabling inspection**: Add bypass rules for sensitive or pinned applications. Use Request Types and Access Policies to match domains or applications and set BYPASS SSL INSPECTION.
- **Handshake or policy failures in logs**: Confirm Trusted Root CA store and upstream certificate validation; check [SSL Inspection Issues](/docs/Troubleshooting/SSL_Inspection_Issues/) for diagnostic steps.

</section>

<section class="section-strip">

## Next steps

- [Self-Service Portal](/docs/SafeSquid_SWG/Self-Service_Portal/) for certificate management.
- [Import Certificate into Chrome or IE](/docs/SSL_Inspection/Import_Certificate_Chrome_IE/) for client certificate import.
- [Access Restriction](/docs/Access_Restriction/main/) for policy and bypass rules.
- [SSL Inspection Issues](/docs/Troubleshooting/SSL_Inspection_Issues/) for diagnostic steps.

</section>