---
title: Homograph Detection
description: Detect and block IDN homograph attacks that use visually similar characters to impersonate legitimate domains.
keywords:
  - homograph detection
  - IDN attacks
  - SafeSquid DNS security
---


# Homograph Detection

Homograph detection identifies and blocks Internationalized Domain Name (IDN) attacks. Attackers use visually similar characters from different scripts to impersonate legitimate domains.

## Enable / Disable Homograph Detection

To configure Homograph Detection, navigate to:
**SafeSquid Interface** -> **Real Time Content Security** -> **DNS Blacklist**

You can enable or disable the feature from this section.

![Homograph Configuration](/img/Homographic_Detection/homograph_config.webp)

## Verification

You can verify if Homograph Detection is working using the following methods.

### Method 1: Using cURL

Run the following command in your terminal:

```bash
curl -v -x http://10.200.2.204:8080 http://аpple.com
```

> **Note:** The URL `http://аpple.com` uses a Cyrillic 'a' to simulate a homograph attack.

**Output:**

![cURL Verification Output](/img/Homographic_Detection/homograph_curl_output.webp)

### Method 2: Using Browser

Visit the URL `http://аpple.com` in your browser while connected to the SafeSquid proxy.

**Output:**

We access the URL `http://аpple.com` through the proxy and we got the following output:

![Browser Verification Output](/img/Homographic_Detection/homograph_browser_output.webp)

