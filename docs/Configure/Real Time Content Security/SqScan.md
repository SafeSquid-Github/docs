# SqScan

## Overview

SqScan is a built-in module in SafeSquid that protects users against malware.

Internet browsing is unsafe while browsing certain sites that allow malware or viruses.

This causes software attacks on the computer, which decreases its performance.

To prevent this SafeSquid has an advanced Module named SqScan to Scan the sites specially for viruses or malware.

It prevents access and downloads from that type of website.

## Virus Scanning Policies

## Enabling SqScan section on SafeSquid User Interface

## [Access the SafeSquid interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

## Go to Configure Page

![Goto configure.webp](/img/Configure/Real_Time_Content_Activity/SqScan/image1.webp)

## Go to Real-time content security

![Go to real time content security.webp](/img/Configure/Real_Time_Content_Activity/SqScan/image2.webp)

## Go to SqScan Section

![SvScanconfigureSlide1 (1).webp](/img/Configure/Real_Time_Content_Activity/SqScan/image3.webp)

## Global

### Enabled

Enable or Disable this section.

-   **TRUE**: Enable in-memory virus scanning.

-   **FALSE**: Disable in-memory virus scanning.

![SvScanconfigureSlide1 (2).webp](/img/Configure/Real_Time_Content_Activity/SqScan/image4.webp)

![SvScanconfigureSlide1 (3).webp](/img/Configure/Real_Time_Content_Activity/SqScan/image5.webp)

![SvScanconfigureSlide1 (4).webp](/img/Configure/Real_Time_Content_Activity/SqScan/image6.webp)

## Virus Scanning Policies

Create the entries for SqScan.

Define the Security level and Malware type in each entry.

ALL the Following Entries will be tested from top to bottom.

![SvScanconfigureSlide1 (5).webp](/img/Configure/Real_Time_Content_Activity/SqScan/image7.webp)

Create the entries for SqScan.

Define the Security level and Malware type in each entry.

![Svscan-policy.jpg](/img/Configure/Real_Time_Content_Activity/SqScan/image8.webp)

### Enabled

Enable or Disable the SqScan Policy.

**TRUE:** Enable this entry.

**FALSE**: Disable this entry.

### Comment

For documentation and future references, explain the relevance of this entry with your policies.

That is, by reading the policies, a future user can understand the purpose of that entry.

### Profiles

Specify the Profiles applicable for this entry.

This entry will be applicable only if the connection has any one of the specified profiles.

Leave it Blank, to apply for all connections irrespective of any applied profile.

To avoid application to a connection that has a profile, use a negated profile (!profile).

### Malware Security Level

Select a security level depending on your requirements.

Set security level as per your safety measures: standard or High or Paranoid.

Set the scan level to bypass or disable the scanning.

-   **BYPASS**: Disable Virus Scanning for the matching Profiles.

-   **STANDARD**: Block if a threat is detected, but not on mere suspicion.

-   **HIGH**: Block if a threat is detected, even if the content is suspicious.

-   **PARANOID**: Block everything that SqScan cannot ensure is clean. Warning! This can cause all content to be blocked even in the event of any systemic failures of this functionality.

### Malware Types

Select Virus/Malware type(s) to be blocked, if received content has their signature(s).

SafeSquid will block all such requests if a threat is detected or if the content is suspicious.

-   **VIRUS**: Enable Security Against VIRUS threats.

-   **SPYWARE**: Enable Security Against SPYWARE threats.

-   **ADWARE**: Enable Security Against ADWARE threats.

-   **SPAM:** Enable Security Against SPAM threats.

-   **ROOTKIT**: Enable Security Against ROOTKIT threats.

-   **DIALER**: Enable Security Against DIALER threats.

-   **MALICIOUS_APP:** Enable Security Against MALICIOUS_APP threats.

-   **ARCHBOMB**: Enable Security Against ARCHBOMB threats.
