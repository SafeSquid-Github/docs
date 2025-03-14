# G-Suite App Sync Setup With SafeSquid

## Problem Statement

I am using G Suite Sync App to Configure G Suite Account on Microsoft Outlook. This Application is Available for Windows7, Windows 10

I have Installed SafeSquid (SAB) and Enabled Proxy-Authentication. But I am not able to Sync G Suite Account and facing Authentication Issue.

## Solution

G Suite Application as such does not have Proxy Settings. But it can fetch Proxy Settings and Proxy Authentication Credentials from IE-Internet Explorer Browser [System wide Proxy Settings].

Apparently, the Problem that you were facing was,

When you do the Setup of MS Outlook using G Suite Sync APP, the Application Connects to the Google Mail Server and authenticates the user account.

Since Proxy Settings are done on IE-Internet Explorer Browser, the G Suite Sync App will use the Proxy Server [SafeSquid-SWG] to reach out Google Mail Server.

At the time of making a Connection to the Proxy, the application should send a Proxy-Authorization Header containing the Proxy-Authentication Credentials.But it was not doing so.

We Did some dig around the Application and found that it does fetches Proxy-Authentication Credentials from IE-Internet Explorer Browser and can Produce that at time of Proxy Authentication. This Worked fine in Windows 10.

Apparently, it could not do the same in Windows 7 OS.

To use the G Suite Sync App, we need to bypass it from Proxy-Authentication.

**STEP 1:**

[NOTE: In SafeSquid we can Identify an application using its User-Agent. Since the G Suite Application is not sending any User-Agent at the Time of Connect Request. So, we have to Add it to Unidentified Application]

Identify the FQDN that the Application is Trying to Visit and create a Request-Type

![Select configure to GSuite App Sync Setup With SafeSquid](/img/How_To/G-Suite_App_Sync_Setup_With_SafeSquid/image1.webp)

![Select custom setting to GSuite App Sync Setup With SafeSquid](/img/How_To/G-Suite_App_Sync_Setup_With_SafeSquid/image2.webp)

![Select Request type to GSuite App Sync Setup With SafeSquid](/img/How_To/G-Suite_App_Sync_Setup_With_SafeSquid/image3.webp)

![Save the policy of GSuite App Sync Setup With SafeSquid](/img/How_To/G-Suite_App_Sync_Setup_With_SafeSquid/image4.webp)

After Saving it, It Looks like this as shown below

![Policy of GSuite App Sync Setup With SafeSquid](/img/How_To/G-Suite_App_Sync_Setup_With_SafeSquid/image5.webp)

**STEP 2: Create a Profile under Policies and Profiles Section (Restriction Policies > Access Profiles)**

![Create a Profile under Policies and Profiles Section of GSuite App Sync Setup With SafeSquid](/img/How_To/G-Suite_App_Sync_Setup_With_SafeSquid/image6.webp)

![Profile under Policies and Profiles Section of GSuite App Sync Setup With SafeSquid](/img/How_To/G-Suite_App_Sync_Setup_With_SafeSquid/image7.webp)

This is how it looks after saving

![Policy of GSuite App Sync Setup With SafeSquid](/img/How_To/G-Suite_App_Sync_Setup_With_SafeSquid/image8.webp)
