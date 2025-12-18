---
title: Login Issues on Specific Websites  
Description: Learn how to resolve login failures on websites like Facebook and Google when using SafeSquid proxy, by disabling cookie filters, adjusting header filters, and configuring HTTPS inspection correctly.  
Keywords:  
- SafeSquid login issues  
- can't login via proxy  
- SafeSquid Facebook login block  
- SafeSquid Google account login failed  
- SafeSquid HTTPS inspection login error  
- SafeSquid third-party cookies  
- SafeSquid elevated privacy  
- SafeSquid header filter  
- SafeSquid block personal Gmail  
- SafeSquid content modifier login block  
---

## Issues
1. I can able to access https://www.facebook.com/ via proxy but am not able to log on it.
1. I cannot able to login to specific websites using Facebook® and ®Google+ credentials for login via proxy.
1. I can able to login on https://www.facebook.com/ but not able to login on https://accounts.google.com/
1. I cannot able to login on https://accounts.google.com/ and https://www.facebook.com/

## Solution
### Case 1: I can able to access https://www.facebook.com/ via proxy but not able to log in on it.

When you can access https://www.facebook.com/ via proxy by enabling the HTTPS inspection section that means your HTTPS configuration is proper with the proper configuration of SSL certificate inside the browser.

If your HTTPS inspection section is not properly configured follow the link - [Configure HTTPS Inspection](/docs/03-SSL%20Inspection/main.md)

But you are not able to log in on https://www.facebook.com/ which means your Cookie Filter section is enabled with global TRUE.

Make sure the policy under Privacy Control > Cookie filter > Deny should be with Enabled FALSE. (Search policy under cookie filter: Strip cookies from all connections profiled as NO LOGIN) and disable it.

### Case 2: I cannot able to login to a specific website using Facebook and Google+ credentials while logging via proxy.

Make sure the website you are accessing is an HTTP or HTTPS website.

If the website you are accessing is HTTPS you must configure HTTPS sections properly. Follow the link [to Configure the HTTPS Inspection](/docs/03-SSL%20Inspection/main.md)

Suppose you are not able to log in to https://stackoverflow.com/ via Facebook or Google credentials that means your Elevated Privacy section is enabled with global TRUE.

Make sure the policy under Privacy Control > Elevated Privacy > Elevated policies should be with Enabled FALSE. (Search policy under Elevated Privacy: Blocks the third-party cookies) and disable it.

### Case 3: I can able to log in on https://www.facebook.com/ but am not able to log in on https://accounts.google.com/

Suppose you can log on to https://www.facebook.com/ as well as all other websites except https://accounts.google.com/ that means your corporate policy under the Header Filter section is enabled.

Make sure the policy under Privacy Control > Header Filter > Insert should be with Enabled FALSE. (Search policy under Elevated Privacy: Enforce use of corporate Google Account, for all users who are NOT ALLOWED PERSONAL GOOGLE ACCOUNTS.) and disable it.

### Case 4: I cannot able to log in on https://accounts.google.com/ and https://www.facebook.com/

Suppose you are not able to log in only on https://www.facebook.com/ as well as https://accounts.google.com/ that means your Block Particular User Login to Facebook or Gmail policy is enabled.

Make sure the policy under Real Time Content Security > Content modifier > Rewrite Policies should be with Enabled FALSE.

:::note
If the global section is enabled for the particular section but the policy under that particular section is disabled then that individual policy should not work.
:::