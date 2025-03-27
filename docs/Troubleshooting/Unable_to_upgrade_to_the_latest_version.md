# Unable to Upgrade to the Latesh Version

## Issues

Unable to upgrade to the latest SafeSquid version.

## Prerequisites

Monit service should be up.

## Solution

When you are not able to upgrade to the latest version of SafeSquid from the SafeSquid Interface, follow the link - [How to Upgrade SafeSquid to A Newer Version](https://help.safesquid.com/portal/en/kb/articles/upgrade-safesquid-to-a-newer-version)

Follow the below steps if you face an upgradation issue

1.  Go to SafeSquid console (putty or Linux box)

2.  Login using the root access.

3.  Check disk space by using the command:

> **df -kh**

/dev/ram1 62M 1.3M 58M 3% /tmp/safesquid

4.  If the file system **/dev/ram1** is full, then remove all files from /tmp/safesquid folder.

**Command: root@sabproxy:/tmp/safesquid# rm -rf ***
