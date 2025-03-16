# Do Bandwidth Management With Limits

## Overview

SafeSquid Limits feature allows you to define the bandwidth limits on Download size, Upload size and Download speed. This document helps you to configure the above three features.

## Prerequisites

If you are downloading files from HTTPS websites, then make sure that [HTTPS Inspection](https://help.safesquid.com/portal/en/kb/articles/setup-https-inspection) in SafeSquid is enabled

## [Access The SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

Go to **configure ## --## > Restriction policies ## --## > Speed Limits**

The home page will see same as below

![Access Speed Limits under restriction policies section to Do Bandwidth Management With Limits](/img/How_To/Do_Bandwidth_Management_With_Limits/image1.webp)

![Edit global policy section to Do Bandwidth Management With Limits](/img/How_To/Do_Bandwidth_Management_With_Limits/image2.webp)

![Enabled global policy section as True to Do Bandwidth Management With Limits](/img/How_To/Do_Bandwidth_Management_With_Limits/image3.webp)

![Save global policy section as True to Do Bandwidth Management With Limits](/img/How_To/Do_Bandwidth_Management_With_Limits/image4.webp) 

![Default entries under set limits section to Do Bandwidth Management With Limits](/img/How_To/Do_Bandwidth_Management_With_Limits/image5.webp)

## How Default Entries work

First entry is created to setup the download speed at which the users allowed to download the files

See More about [Setup Download Speed At which the files need to download](https://help.safesquid.com/portal/en/kb/articles/setup-download-speed-at-which-the-files-need-to-download)

Second entry is created to setup the limit on the download size. If the file is greater than the download transfer limit, then it gets blocked by SafeSquid

See More about [Setup Maximum limit on the Download size](https://help.safesquid.com/portal/en/kb/articles/setup-maximum-limit-on-the-download-size)

Third entry is created to setup the upload limit on upload size. If the uploading file size is greater than upload transfer limit, then the upload gets blocked by SafeSquid.

See More about [Setup Maximum limit on the Upload size](https://help.safesquid.com/portal/en/kb/articles/setup-maximum-limit-on-the-upload-size)
