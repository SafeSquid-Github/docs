# Upgrade SafeSquid to a Newer Version

## Overview

SafeSquid SWG upgrade is a newer version of the SafeSquid that offers a significant change or major improvement over your current version. Upgrade your SafeSquid to the latest version which may consists of bugfixes and enhancements. When you upload latest tarball of SafeSquid SWG from WebGUI monit service will automatically restart the SafeSquid service.

## Prerequisites

Monit service should be running and started on your SafeSquid server, you can check it by using below command from your SafeSquid server

pidof monit

If you did not find pid of monit, run below command to Start the Monit service

/etc/init.d/monit start

The partition size of /tmp/safesquid used must be less than 4%, you can check it by using below command

df -kh

After executing the command last line of the output will be similar as shown below

/dev/ram1 62M 1.3M 58M 3% /tmp/safesquid

Check the highlighted number which shows the actual usage, if it is greater than 4%, then remove the files from the folder /tmp/safesquid

You can remove files from /tmp/safesquid by going to that folder location using the command:

cd /tmp/safesquid

Further delete all the files from the folder by using the command:

rm -rf *

## [Access the SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

![your current version of safesquid will be shown in the right hand bottom corner in the safesquid interface](/img/How_To/Upgrade_SafeSquid_To_A_Newer_Version/image1.webp)

### Go to Support Page

![clicking on support](/img/How_To/Upgrade_SafeSquid_To_A_Newer_Version/image2.webp)

### Go to Upgradation

**Note**: Download the latest SafeSquid SWG tarball from here and save into your machine.

![clicking on upgradation](/img/How_To/Upgrade_SafeSquid_To_A_Newer_Version/image3.webp)

### Select New tarball

Select the latest SafeSquid tarball downloaded and saved in your machine before.

![uploading a new tarball file](/img/How_To/Upgrade_SafeSquid_To_A_Newer_Version/image4.webp)

![selecting the tarball file from the pc](/img/How_To/Upgrade_SafeSquid_To_A_Newer_Version/image5.webp)

![you can see the browsed tarball beside browse button](/img/How_To/Upgrade_SafeSquid_To_A_Newer_Version/image6.webp)

![UpgSlide6.webp](/img/How_To/Upgrade_SafeSquid_To_A_Newer_Version/image6.webp)

Click on upload button to upload new tar file.

![clicking on upload button to upload](/img/How_To/Upgrade_SafeSquid_To_A_Newer_Version/image7.webp)

### Testing Upgradation

You can see upgraded version number of SafeSquid SWG at the bottom right corner of interface.

![test if the newer version of the safesquid is showing in the bottom right hand corner](/img/How_To/Upgrade_SafeSquid_To_A_Newer_Version/image8.webp)

## Where should I get the latest version of SafeSquid to upgrade?

You can download **SafeSquid SWG for Windows** package from - http://downloads.safesquid.net/SWG/windows/setup_safesquid_swg_latest.exe

You can download **SafeSquid SWG for Linux** package from - http://downloads.safesquid.net/appliance/binary/safesquid_latest.tar.gz
