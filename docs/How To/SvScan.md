# SvScan

## Overview

SqScan is a built-in module in SafeSquid that protects the users against malware.

Internet browsing is unsafe while browsing certain sites which allow malware or virus.

This causes software attack on the computer, which decreases its performance.

To prevent this SafeSquid having this advance Module named SqScan to Scan the sites specially for virus or malware.

It prevents the access and downloads from that type of websites.

## Virus scanning policies

## Enabling SqScan section on SafeSquid User Interface

## [Access the SafeSquid interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

### Go to Configure Page

![clicking on configure in safesquid interface](/img/How_To/SvScan/image1.webp)

### Go to Real time content security

![going to real time content security](/img/How_To/SvScan/image2.webp)

### Go to SqScan Section

![go to sqscan in the sidebar](/img/How_To/SvScan/image3.webp)

## Global

### Enabled

Enable or disable this section.

#### TRUE: Enable in memory virus scanning.

#### FALSE: Disable in memory virus scanning. 

![global section of sqscan is true](/img/How_To/SvScan/image4.webp)

![you can enable or disable this entry by clicking on it](/img/How_To/SvScan/image5.webp)

![clicking on virus scanning policies](/img/How_To/SvScan/image6.webp)

## Virus Scanning Policies

Create the entries for SqScan.

Define the Security level and Malware type in each entry.

ALL The Following Entries will be tested from top to bottom.

![clicking on add new to add a new policy](/img/How_To/SvScan/image7.webp)

Create the entries for SqScan.

Define the Security level and Malware type in each entry.

![policy fields overview](/img/How_To/SvScan/image8.webp)

### Enabled

Enable or Disable SqScan Policy.

#### TRUE: Enable this entry.

#### FALSE: Disable this entry.

### Comment

For documentation, and future references, explain the relevance of this entry with your policies.

That is, by reading the policies, a future user can understand the purpose of that entry.

### Profiles

Specify the Profiles applicable for this entry.

This entry will be applicable only if the connection has any one of the specified profiles.

Leave it Blank, to apply for all connections irrespective of any applied profile.

To avoid application to a connection that has a profile, use negated profile (!profile).

### Malware Security Level

Select security level depending on your requirement.

Set security level as per your safety measures: standard or High or Paranoid.

Set scan-level to bypass for disable the scanning.

**BYAPASS**: Disable Virus Scanning for the matching Profiles.

**STANDARD:** Block if a threat is detected, but not on mere Suspicious.

**HIGH**: Block if a threat is detected, even if the content is suspicious.

**PARANOID**: Block everything that SqScan cannot assure clean. Warning! This can cause all content to be blocked even in the event of any systemic failures of this functionality.

### Malware Types

Select Virus/Malware type(s) to be blocked, if received content have their signature(s).

SafeSquid will block all such requests if a threat is detected, if the content is suspicious.

**VIRUS**: Enable Security Against VIRUS threats.

**SPYWARE**: Enable Security Against SPYWARE threats.

**ADWARE**: Enable Security Against ADWARE threats.

**SPAM**: Enable Security Against SPAM threats.

**ROOTKIT**: Enable Security Against ROOTKIT threats.

**DIALER**: Enable Security Against DIALER threats.

**MALICIOUS_APP**: Enable Security Against MALICIOUS_APP threats

**ARCHBOMB**: Enable Security Against ARCHBOMB threats
