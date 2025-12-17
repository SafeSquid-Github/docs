---
title: Block Emails or Files including Archives or Social Posts using Keywords
description: Learn how to configure SafeSquid to block emails, files, archives, and social media posts containing specific keywords, enhancing data leakage protection.
keywords:
- block emails using keywords safesquid
- block archives using keywords safesquid
- content filtering safesquid
- data leakage protection safesquid
- block social media posts safesquid
---

## Overview
When any employee/user from your network leaked the confidential information intentionally or unintentionally, then what will happen? Huge loss to your organization.

In your organization various mediums and modes comes into play for data leakage. Users can upload important document to internet, even though your content filtering software does not allow users to upload Microsoft Word and Microsoft XL files, users can act smart and creates an archive using those files and tries to upload achieved files. Sometimes policy in your organization is to not block archive files since network administrator/ manager uses archive files to transfer log files of large sizes.
Your company has a plan for protecting data from external intruders, but does not protect against theft and accidental disclosure of sensitive information by employees and partners. These employees and partners may simply take information out of Microsoft Word and Microsoft XL files and simply send an Email to third party.

In modern era, these kind of data leaks are become a challenge for organizations. Organizations are in a quest for content filtering software's which can deeply inspect archive files and able to identify whether the archive or emails contains any confidential details of organization. Most of such archive files and emails have important keywords that should be matched while tracing the Data Leakage.

This challenge is also big for security experts because when there is an upload the post data formation is different for Gmail / Google Drive/ Media fire/ Drobox etc. The wide range of formations of post data made it difficult for security experts to derive concrete solution to these challenges.

To overcome such problems SafeSquid comes up with **Advanced DLP** solution embedded into **SafeSquid SWG**, which analyzes post data, deeply inspect archives files using file decomposition method and can identify whether any archive file or emails or social media post contains certain keyword matches. Based on the matched keyword your network administrator can take effective actions like block upload if user name is XYZ or block the data transfer if the destination website is said abcd.com. 

The Advanced DLP solution can be managed from SafeSquid Self Service portal from where you can create various keyword expression matches. SafeSquid SWG will download those keyword expressions and loads into memory. When any user tries to upload any archive file or write an email, SafeSquid SWG will analyze Post data and transmit it to the ClamAV daemon for Signatures verification. If the keyword expression matches with your email or file content then ClamAV daemon responds. SafeSquid will further take respective action based on policy you have created for those keywords matching.

## [Manage Keyword Signatures using Self Service portal](/docs/04-Profiling%20Engine/03-Application%20Signatures.md)
## Configure SafeSquid SWG for using Custom Signatures

On configure page of SafeSquid interface open the Real time content security side menu. Click on Clam antivirus section to configure the policy.

![Select Configure section to Block Emails or Files including archives or Social Posts using Keywords](/img/How_To/Block_Emails_or_Files_including_archives_or_Social_Posts_using_Keywords/image1.webp)

Click on Global part of ClamAV Section and make Enabled as True.

![Select Global part of ClamAV Section and make Enabled as True to Block Emails or Files including archives or Social Posts using Keywords](/img/How_To/Block_Emails_or_Files_including_archives_or_Social_Posts_using_Keywords/image2.webp)

Now click on clamav subsection to configure the policy.

![Select clamav subsection to configure the policy](/img/How_To/Block_Emails_or_Files_including_archives_or_Social_Posts_using_Keywords/image3.webp)

Enable the default policy in the subsection for virus signature detection.

![Enable the default policy in the subsection for virus signature detection](/img/How_To/Block_Emails_or_Files_including_archives_or_Social_Posts_using_Keywords/image4.webp)

Your policy will be as shown below.

![The default policy in the subsection for virus signature detection.](/img/How_To/Block_Emails_or_Files_including_archives_or_Social_Posts_using_Keywords/image5.webp)

Click on bottom left Icon to save the configuration.

![Save default policy in the subsection for virus signature detection.](/img/How_To/Block_Emails_or_Files_including_archives_or_Social_Posts_using_Keywords/image6.webp)

:::note
Once you configured the policy as shown above go to Support page and Click on Refresh button for refreshing subscription details.
:::
## Testing Signature detection
HTTPS Inspection should be enabled in SafeSquid. If not enabled, you can check our document -[ How To Enable HTTPS Inspection ](/docs/03-SSL%20Inspection/main.md)

### Test using office documents
Set proxy settings in client browser and open Gmail. Confirm the HTTPS traffic is verified/inspected by SafeSquid.Otherwise SafeSquid will not be able to block the mail which contains your mentioned keyword(s).

![Testing Signature detection that Block Emails or Files including archives or Social Posts using Keywords](/img/How_To/Block_Emails_or_Files_including_archives_or_Social_Posts_using_Keywords/image7.webp)

Create a dummy Microsoft file and include your set of keywords into it. Also prepare a separate archive file to test the scenario.

![Create a dummy Microsoft file and include your set of keywords into it to Block Emails or Files including archives or Social Posts using Keywords](/img/How_To/Block_Emails_or_Files_including_archives_or_Social_Posts_using_Keywords/image8.webp)

Now try to attach your sample Microsoft file into mail. SafeSquid Should be able to block your attachment.

![SafeSquid block attachment by default policy for virus signature detection. ](/img/How_To/Block_Emails_or_Files_including_archives_or_Social_Posts_using_Keywords/image9.webp)

That's it. Your created signatures are in the action and your data is safe. 

### Test using archive files
Now try to attach your archive file into your mail and you should see that archive file is also blocked by SafeSquid.

![Testing using archive files by default policy for virus signature detection.](/img/How_To/Block_Emails_or_Files_including_archives_or_Social_Posts_using_Keywords/image10.webp)

### Test using emails
Create an email draft using set of keywords for which you have created signatures.

Before sending the mail SafeSquid will identify the keywords and will block the mail. You can see that **Save Failed** in gmail compose box.

![Test using emails by default policy for virus signature detection.](/img/How_To/Block_Emails_or_Files_including_archives_or_Social_Posts_using_Keywords/image11.webp)

You can observe on your browser, when you click on send button, then the mail will be kept on trying to send the mail. 

![Test using emails by default policy for virus signature detection.](/img/How_To/Block_Emails_or_Files_including_archives_or_Social_Posts_using_Keywords/image12.webp)

### Test using social media posts
Open www.facebook.com and login with your credentials.

Now try to post a status update using your keywords. When you click on submit button, you will not see your post on Facebook page.

![Test using social media posts by default policy for virus signature detection.](/img/How_To/Block_Emails_or_Files_including_archives_or_Social_Posts_using_Keywords/image13.webp)

Even if you try to post the same from your timeline you will not be able to post your status with the specified keywords.

![Test using social media posts by default policy for virus signature detection.](/img/How_To/Block_Emails_or_Files_including_archives_or_Social_Posts_using_Keywords/image14.webp)

Now try to post the comment, you will not be able to post any comments with those specified keywords.

![Not able to post any comments with those specified keyword due to default policy for virus signature detection.](/img/How_To/Block_Emails_or_Files_including_archives_or_Social_Posts_using_Keywords/image15.webp)

You can perform same tests with any of the website by posting data with your specified keywords. You will not be able to post any important information having the keywords mentioned.

## Troubleshooting 
### Check SafeSquid logs
You can check SafeSquid logs for troubleshooting, if things are not working as explained above.

![If default policy for virus signature detection is not working then refer SafeSquid logs for troubleshooting, ](/img/How_To/Block_Emails_or_Files_including_archives_or_Social_Posts_using_Keywords/image16.webp)

### Check ClamAV daemon Status
You can check whether ClamAV daemon is running or not using following command.
```bash
netstat -lnp | grep clamd
```

![Check ClamAV daemon Status in proxy sever command line](/img/How_To/Block_Emails_or_Files_including_archives_or_Social_Posts_using_Keywords/image17.webp)

If you found that ClamAV daemon is not running then restart using following command.
```bash
/etc/init.d/clamav-daemon restart
```
### Check Signatures File

If ClamAV service is running then check whether you have signatures database file on disk or not using locate command.
```
   updatedb && locate safesquid.ldb
   /var/lib/clamav/safesquid.ldb
   /var/lib/safesquid/content_signatures/safesquid.ldb
```
### Check ANTIVIRUS profiles applicability. 

![Check ANTIVIRUS profiles applicability](/img/How_To/Block_Emails_or_Files_including_archives_or_Social_Posts_using_Keywords/image18.webp)

If you still got any problem, you can send us mail at support@safesquid.net
