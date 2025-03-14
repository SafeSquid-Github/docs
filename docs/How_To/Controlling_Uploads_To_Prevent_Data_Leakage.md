# Controlling Uploads To Prevent Data Leakage

## Overview

Data Loss/Leak Prevention (DLP) is a technique that was designed to stop sensitive information from leaving any organization.

Data can end up in the wrong hands, whether it's sent, through email or instant messaging, forms on any website, file transfers, or any other means. DLP strategies must include solutions that monitor or, detect, and block the unauthorized flow of information.

In any organization main concern for administrator are-

Protecting data from external intruders and accidental leakage of sensitive information by employees.

Protect data against security threats caused by BYOD.

Monitor organization for inappropriate employee conduct and maintain forensic data of security events as evidence.

SafeSquid DLP module helps the administrator to overcome all these concerns. SafeSquid DLP protects organizations from information leaks and data loss at the perimeter and inside the organization, as well as in certain Infrastructure as a Service platforms. SafeSquid DLP restrict to Upload any kind of Content outside the corporate network to prevent data leakage. We shall permit text/plain content type to access all websites. We allow users only to upload Microsoft office document files and PDF files on whitelisted websites as per the policy of organization.

In general administrator can allow the very specific file type(s) based on predefined content type(s) in his/her network for uploading.

## Prerequisite

HTTPS Inspection should be enabled in SafeSquid. If not enabled, you can check our document - [How to enable HTTPS Inspection](https://help.safesquid.com/portal/en/kb/articles/setup-https-inspection)

## [Access the SafeSquid User interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

![clicking on configure in SafeSquid interface](/img/How_To/Controlling_Uploads_To_Prevent_Data_Leakage/image1.webp)

### Block Uploads

SafeSquid SWG comes with predefined policies and profiles. You can add/modify policies and profiles as per your requirement.

Below we are using predefined Profile 'BLOCK UPLOADS' created in Access Profiles section. You can inspect the extended logs for 'BLOCK UPLOADS' profile getting applied after configuring DLP policy.

There are two ways to search any keyword or profiles inside SafeSquid set of policies from various section.

### Search Policy method 1

You can search the keyword or profile name from Restriction Policies >> Access Profiles. You have to parse each and every rule from Access Profiles section one by one.

![searching for the policy "BLOCK UPLOADS" in access profiles](/img/How_To/Controlling_Uploads_To_Prevent_Data_Leakage/image2.webp)

### Search Policy method 2

Click on Search Icon situated on bottom right corner of SafeSquid WebGUI.

![clicking on search button](/img/How_To/Controlling_Uploads_To_Prevent_Data_Leakage/image3.webp)

Enter the keyword or profile name into the value field of dialog box appeared on the screen. Click on search button to find the keyword or profile used inside various sections.

Click on search button to find the keyword or profile used inside various sections.

Below we are searching BLOCK UPLOADS to configure predefined DLP policy.

![searching for policy "BLOCK UPLOADS" ](/img/How_To/Controlling_Uploads_To_Prevent_Data_Leakage/image4.webp)

You will find a default policy in Policies and Profiles section as shown below. If not found or deleted accidently you need to create the same policy.

Click on Edit icon to modify the policy.

![Clicking on edit button on the policy](/img/How_To/Controlling_Uploads_To_Prevent_Data_Leakage/image5.webp)

Modify this policy as per your requirement.

![modifying the default policy of BLOCK UPLOADS as per your requirement](/img/How_To/Controlling_Uploads_To_Prevent_Data_Leakage/image6.webp)

By default, this policy is disabled, you need to enable this policy and save the policy/rule.

![selecting enabled as true](/img/How_To/Controlling_Uploads_To_Prevent_Data_Leakage/image7.webp)

### Go to DLP Section Configuration

Open DLP section to find default DLP rules. You can add/modify the rules as per your requirement.

![opening DLP section after the modifying of default policy ](/img/How_To/Controlling_Uploads_To_Prevent_Data_Leakage/image8.webp)

### Open Global Section of DLP

Make sure that global part of DLP section should be true.

![clicking on edit button on make the global policy as true](/img/How_To/Controlling_Uploads_To_Prevent_Data_Leakage/image9.webp)

### Configure DLP Policy

Edit the DLP policy and save your changes.

![Editing the default policy DLP section which blocks PDF and Microsoft office. You can add/modify/delete content type as per your requirement](/img/How_To/Controlling_Uploads_To_Prevent_Data_Leakage/image10.webp)

**Note**: If you want to block all file uploads leave profiles field blank. But, we should permit text/plain content type to access all websites.

Choose action as Do_not_Bypass as shown below and save policy.

![Selecting block uploads in the profiles section](/img/How_To/Controlling_Uploads_To_Prevent_Data_Leakage/image11.webp)

![saving the modified policy in DLP section ](/img/How_To/Controlling_Uploads_To_Prevent_Data_Leakage/image12.webp)

### Save Configuration

Click on bottom left Icon to save the configuration.

![Clicking on global save to save the configuration](/img/How_To/Controlling_Uploads_To_Prevent_Data_Leakage/image13.webp)

You can save the current configuration to either in your local machine or to cloud. Storing configuration to cloud help you to restore your configuration in other instances.

![clicking on submit button to save the policy](/img/How_To/Controlling_Uploads_To_Prevent_Data_Leakage/image14.webp)

**Note**: Creating / Using (predefined) profiles while creation of new policy will be helpful for capturing logs. In future these logs will be helpful to identify general operational details and security concerns.

### Example

Generally, in corporate sector Users should be restricted to Upload any kind of Content outside the corporate network to prevent data leakage. We shall permit text/plain content type to access all websites. We allow users only to upload Microsoft office document files and PDF files on whitelisted websites.

In this scenario follow below steps:

**Step 1: Go to Categorization Web-site section from SafeSquid WebGUI and add all whitelisted websites into whitelist category.**

**Step 2: Go to Policies and Profiles section and create new policy as shown below.**

Here for our example, we have created ALLOW DOCUMENT UPLOADS in Policies and Profiles Section. Further this profile will be bind with DLP policies.

![example of creating policy to allow uploads in access profiles section](/img/How_To/Controlling_Uploads_To_Prevent_Data_Leakage/image15.webp)

**Step 3: Create All the three policies under DLP Section as shown below.**

Policy 1: We restrict uploading of files, irrespective of a content type.

Policy 2: We shall permit text/plain content type to access all websites.

Policy 3: We allow users for uploading PDF and Microsoft office document files for Whitlisted Sites

![Binding the created policies in DLP section to allow required uploads](/img/How_To/Controlling_Uploads_To_Prevent_Data_Leakage/image16.webp)

For testing purpose try to upload any file other than PDF and Microsoft office document files. File will not be uploaded.
