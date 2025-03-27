# How to block virus uploads and downloads


## Client Scenario

You might download a file containing a virus during an e-commerce session.

To protect your network from these threats,SvScan is the inbuilt module in SafeSquid that protects users against malware. ClamAV and ICAP are secondary servers provided along with SvScan. You can integrate your clamAV and ICAP servers also for virus scanning.

Note: Make sure that SSL Inspection is enabled before using SvScan for scanning for malware. It enables the HTTPS sites also for scanning the malicious content.

## Prerequisites

HTTPS Inspection should be enabled in SafeSquid. If not enabled, you can check our document - [How to enable HTTPS Inspection](https://help.safesquid.com/portal/en/kb/articles/setup-https-inspection)

## [Access the SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

![clicking on configure in safesquid interface](/img/How_To/How_to_block_virus_uploads_and_downloads/image1.webp)

## Two Options to reach SvScan Section

## Go via Search Option orGo from side bar 

![you can go to svscan section from the sidebar or also you can search for it](/img/How_To/How_to_block_virus_uploads_and_downloads/image2.webp)

![selecting svscan from the magic suggest](/img/How_To/How_to_block_virus_uploads_and_downloads/image3.webp)

![clicking on search after selecting svscan](/img/How_To/How_to_block_virus_uploads_and_downloads/image4.webp)

## Ensure Section with Enabled TRUE

![ensuring the default policy in svscan section is enabled true](/img/How_To/How_to_block_virus_uploads_and_downloads/image5.webp)

Follow the given link for more details [SqScan](https://help.safesquid.com/portal/en/kb/articles/2-10-sqscan)

## Download and Upload virus file to test

Go to https://www.eicar.org/ and download any virus file you should get blocked template.

![testing the svscan by trying to download virus ](/img/How_To/How_to_block_virus_uploads_and_downloads/image6.webp)
