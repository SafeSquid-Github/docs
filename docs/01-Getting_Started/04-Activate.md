---
title: Activate Your License
description: Upload your activation key to SafeSquid and verify license activation.
keywords:
  - SafeSquid license activation
  - SafeSquid activation key
  - SafeSquid licensing
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Activate Your License

An unlicensed SafeSquid instance cannot use commercial features (threat intelligence, URL categorization, DR backup, support) or receive full update feeds. Activation ties your key to this instance and unlocks the chosen tier so the gateway is fully operational.

## Key Benefits

- **Unlock commercial features** — threat intelligence, URL categorization database, 365-day DR backup, and email support (see table below).
- **Receive updates** — subscription and malware definition feeds require successful activation.
- **Prove licensing for audits** — activation status is visible in the SafeSquid interface for compliance evidence.

SafeSquid offers two licensing tiers:

|  | Free | Commercial |
| -- | :--: | :--: |
| Core proxy and filtering | ✅ | ✅ |
| SSL inspection | ✅ | ✅ |
| Custom policies and profiles | ✅ | ✅ |
| Real-time threat intelligence | ❌ | ✅ |
| URL categorization database | ❌ | ✅ |
| DR backup (365 days) | ❌ | ✅ |
| Email support | ❌ | ✅ |

The free license has no time limit. You can upgrade to commercial at any time through the [Self-Service Portal](https://key.safesquid.com).



## Readiness Checklist

Your SafeSquid server needs outbound access to these endpoints. Ensure your firewall allows the traffic.

**Required for activation**

| Host              | Port | Purpose            |
| ----------------- | ---- | ------------------ |
| api.safesquid.net | 443  | License activation |

**Required for updates** *(can be opened after initial activation)*

| Host                      | Port | Purpose                           |
| ------------------------- | ---- | --------------------------------- |
| swgupdates2.safesquid.net | 443  | Subscription, malware definitions |
| swgupdates.safesquid.net  | 80   | Seqrite updates                   |
| sslupdates.safesquid.com  | 443  | SSL certificate updates           |
| category.safesquid.net    | 443  | Category DB updates               |
| download.quickheal.com    | 80   | Virus signature updates           |

**URL Categorization Engines** *(commercial license)*

| Host                     | Port | Path                                 |
| ------------------------ | ---- | ------------------------------------ |
| prourl.itsecure.co.in    | 8080 | /URLCategorizerService/URLCategorize |
| encurl.itsecure.co.in    | 8080 | /URLCategorizerService/URLCategorize |
| klassify.itsecure.co.in  | 8080 | /URLCategorizerService/URLCategorize |
| prourl.itonlinesecure.in | 8080 | /URLCategorizerService/URLCategorize |
| encurl.itonlinesecure.in | 8080 | /URLCategorizerService/URLCategorize |



## Activation Steps

1. **Configure the browser** to use SafeSquid as the HTTP proxy (SafeSquid IP, port 8080). See [Connect Your Client](/docs/Getting_Started/Connect_Your_Client/main/) if the browser is not yet configured.

2. **Open the SafeSquid interface** by navigating to [http://safesquid.cfg/](http://safesquid.cfg/) in your browser.

   When accessing for the first time, the interface prompts for upload of the activation key.

   ![Upload activation key prompt](/img/License_Activation/image13.webp)
   *Initial activation prompt in the SafeSquid interface*

3. **Select the activation key file** and click **Upload**.

   ![Select and upload key](/img/License_Activation/image14.webp)
   *Key upload dialog*

4. **Click Restart** to apply the license.

   ![Restart SafeSquid](/img/License_Activation/image15.webp)
   *Apply changes and restart notice*

5. **Verify activation.** After the page reloads, go to **Support** in the menu.

   ![Support menu](/img/License_Activation/image17.webp)
   *Support and diagnostics menu*

6. **Confirm activation details.** Ensure the **Activation Details** section shows your product type, expiry (if applicable), and subscription status.

   ![Activation details](/img/License_Activation/image18.webp)
   *Subscription and activation status display*

:::note
To synchronize SSL certificates and configuration across a proxy cluster, upload the same activation key on every SafeSquid instance.
:::

## Verification and Evidence

After activation and restart, confirm in the SafeSquid interface:

1. In the top menu, go to **Support**.
2. In **Activation Details**, verify:
   - **Product Type** matches your tier (Free or Commercial)
   - **Status** shows active
   - **Expiry** is in the future (commercial) or shows no expiry (free)

Use this screen for auditor requests or compliance evidence that the gateway is correctly licensed.

## Troubleshooting

<Tabs>
  <TabItem value="case1" label="Key Not Detected" default>

**Symptom:** After uploading, the interface shows "Failed to set Subscription details."

**Cause:** The activation key file is missing or misnamed.

**Fix:**

1. Verify the key file exists:

   ```bash
   ls -lrt /usr/local/safesquid/security/
   ```

   Look for a file named `activation_key`.

2. If missing, re-upload the key through the interface.

3. Restart SafeSquid:

   ```bash
   /etc/init.d/safesquid stop
   /etc/init.d/safesquid start
   ```

  </TabItem>

  <TabItem value="case2" label="Server Unreachable">

**Symptom:** After uploading the key, the browser shows "proxy server refusing connections."

**Cause:** SafeSquid cannot reach the subscription server.

**Fix:**

1. Test connectivity:

   ```bash
   ping swgupdates2.safesquid.net
   nslookup swgupdates2.safesquid.net
   ```

2. If DNS or connectivity fails, check firewall rules against the endpoint tables above.

3. Restart after fixing:

   ```bash
   /etc/init.d/safesquid start
   ```

  </TabItem>

  <TabItem value="case3" label="Service Not Restarted">

**Symptom:** Subscription details remain empty after uploading the key, or the browser shows the proxy is refusing connections.

**Cause:** SafeSquid was not restarted after the key upload.

**Fix:**

1. If Monit is configured, it should restart SafeSquid automatically. Otherwise, restart manually:

   ```bash
   /etc/init.d/safesquid stop
   /etc/init.d/safesquid start
   ```

  </TabItem>
  <TabItem value="case4" label="License Expired">

SafeSquid will now exhibit subscription expired promo if Safesquid instance has no active subscription.

Subscription expire promo is activated once the SafeSquid distribution license has expired.
Also, you can check your subscription validity from key.safesquid.com → Manage Account.

/img/License_Activation/image19.webp

SafeSquid sends regular email remainders per-expiration period.
Below is how you’ll witness SafeSquid subscription expired promo.

/img/License_Activation/image20.webp

Once the subscription has expired security updates will be foreground.
The update frequencies will be as per the freemium plan:
Anti-Virus Engine Weekly Updates.
Web Categorization Engine Weekly updates.
Pornographic Image Filter AI Monthly updates.
SSL Security Weekly updates.
Application signature monthly updates.
Content signature Monthly Updates.

To avoid getting expired promo you can either renew your subscription or extend your conservation period which extends it by 3 days.

During conservation period you’ll not get the expired promo.
To extend your conservation period follow below steps.
Visit key.safesquid.com and login to your account.

/img/License_Activation/image21.webp

Go to Manage Account.

/img/License_Activation/image22.webp

In Manage Account click on the “Extend Conservation Period”

/img/License_Activation/image23.webp

You can validate extended conservation period from the date mentioned in the Support Validity section.
(Note: The “Extend Conservation Period” button will disappear, and in its place the “Conserve Subscription” option will be displayed along with a validity date (approximately 3 days). Once the Conserve Subscription validity expires, the “Extend Conservation Period” button will reappear, allowing the subscription to be extended again for another 3 days.)

/img/License_Activation/image24.webp

Restart SafeSquid service from web interface for the changes to take effect.

/img/License_Activation/image25.webp

Click on the Save Config and select “Yes” if you want to store the configuration in cloud and click on submit and then restart the safesquid

/img/License_Activation/image26.webp

If you pass the extended conservation period and if the subscription has not been renewed, you’ll receive SafeSquid expired promo again.

Follow above steps to extend your conservation period again
</TabItem>
</Tabs>

## Next steps

1. [Connect Your Client](/docs/Getting_Started/Connect_Your_Client/main/) — configure at least one browser or client to use the proxy.
2. [Verify Your Setup](/docs/Getting_Started/Verify_Your_Setup/) — run smoke tests to confirm the proxy is receiving traffic.
