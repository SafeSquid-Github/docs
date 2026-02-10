---
title: Block Advertisements And Banners
description: Block ads and banners in SafeSquid to improve load time, security, and bandwidth and reduce distractions.
keywords:
  - block advertisements SafeSquid
  - block banners SafeSquid
  - secure web gateway ads blocking
  - SafeSquid ad blocking configuration
  - ads and banners blocking SafeSquid
---
<section class="section-strip">


# Block advertisements and banners

</section>

<section class="section-strip">

## Ads create security risk, waste bandwidth, and hurt user experience

Ad networks can deliver malware, tracking, and unwanted scripts; ads also increase load time and bandwidth use. Blocking ads at the gateway reduces exposure to ad-based threats, improves performance, and supports acceptable-use policy. SafeSquid BLOCK ADVERTISEMENT policy replaces ad content with a configurable template so users see cleaner pages without client-side ad blockers.

</section>

<section class="section-strip">

## Key benefits

Reduces malware and tracking exposure from ad networks. Lowers bandwidth and CPU use. Cleaner pages with fewer distractions. Evidence for auditors: policy is visible in **Configure** → **Access Profiles** (or **Templates**); access logs show traffic that matched the policy. **Limitation:** Some sites may break if they depend on specific ad endpoints; use bypass or allow rules for exceptions.

</section>

<section class="section-strip">

## Prerequisites

**SafeSquid-side:** HTTPS Inspection enabled so SafeSquid can inspect and modify HTTPS content. See [Configure HTTPS Inspection](/docs/SSL_Inspection/Configure_HTTPS_Inspection/) if not yet enabled. Admin access to the Configuration Portal.

**Client-side:** No change required; blocking is transparent.

</section>

<section class="section-strip">

## Enable BLOCK ADVERTISEMENT policy

1. Access the SafeSquid interface via the [Configuration Portal](/docs/SafeSquid_SWG/Configuration_Portal/).

![Click Configure in the SafeSquid interface](/img/How_To/Block_Advertisements_And_Banners/image1.webp)

![Click search in access profiles](/img/How_To/Block_Advertisements_And_Banners/image2.webp)

2. Search for the default policy: **BLOCK ADVERTISEMENT**.

![Search for BLOCK ADVERTISEMENT default policy](/img/How_To/Block_Advertisements_And_Banners/image3.webp)

3. Edit the policy and set **Enabled** to **TRUE**; save.

![Click Edit to open the policy](/img/How_To/Block_Advertisements_And_Banners/image4.webp)

![Set Enabled to True](/img/How_To/Block_Advertisements_And_Banners/image5.webp)

![Click Save to save the policy](/img/How_To/Block_Advertisements_And_Banners/image6.webp)

4. Alternatively, enable from **Templates** in custom settings: open the BLOCK ADVERTISEMENT template, set **Enabled** to **TRUE**, and save.

![Enable BLOCK ADVERTISEMENT from Templates in custom settings](/img/How_To/Block_Advertisements_And_Banners/image7.webp)

![Set Enabled to True in template](/img/How_To/Block_Advertisements_And_Banners/image8.webp)

![Save the template](/img/How_To/Block_Advertisements_And_Banners/image9.webp)

</section>

<section class="section-strip">

## Verification and Evidence

- **Interface:** **Configure** → **Access Profiles** (or **Templates**) shows BLOCK ADVERTISEMENT with **Enabled** TRUE.
- **Traffic:** Open a site that normally shows ads (e.g. https://www.youtube.com/); ads should be replaced by the SafeSquid template.

![Blocked ad replaced by SafeSquid template on YouTube](/img/How_To/Block_Advertisements_And_Banners/image10.webp)

- **Audit:** Access logs and reports show traffic matching the policy; export reports from the [Reporting Module](/docs/Audit_Forensics/Reporting_Module/) for evidence.

:::note
Administrators can replace the default template with a custom template.
:::

</section>

<section class="section-strip">

## Troubleshooting

| Symptom | Likely cause | Resolution | Verification |
|--------|---------------|------------|--------------|
| Ads still visible | HTTPS Inspection not enabled or policy not applied | Enable HTTPS Inspection; ensure BLOCK ADVERTISEMENT is enabled and profile applied to the connection | Reload page; confirm template replaces ads |
| Site broken or login fails | Site depends on blocked ad domain | Add bypass or allow rule for that domain or path | Retest site after rule change |
| Policy not in list | Default policies not loaded | Restore defaults or contact support for policy set | Search again in Access Profiles |

</section>

<section class="section-strip">

## Next steps

- [Block inappropriate images using Image Analyzer](/docs/Use_Cases/Block_inappropriate_images_by_using_Image_Analyzer/) for visual content filtering.
- [Header Re-Write](/docs/Header_Obfuscation/main/) for header filtering and privacy.
- [Content Modifier](/docs/Content_Modifier/main/) for custom regex-based content rewriting.

</section>