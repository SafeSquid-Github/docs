# Block Personal Gmail, Allow Google Corporate Accounts

## Overview

Nowadays emails are used very frequently to exchange information between people using electronic devices. In some organization personal emails in the office network are not allowed. Personal emails are blocked to avoid spending of productive time by employees. Allowing personal emails can also lead a path for leakage of confidential information. Nowadays some of the organization emails are via Google Corporate domains. Google corporate account allows organization to have their mailing server along with the additional Gmail features personalized for the organization with complete control. So, we currently cannot block Gmail.

## Client Scenario

As an administrator, you may want to prevent users from signing into Google services using any accounts other than the account you provided them with. You do not want users to waste their productive time in other unnecessary mail exchanges in the office network. For example, you may not want users to use their personal Gmail accounts or manage Google Account from another domain. Block Personal Gmail To Ensure Data Security.

SafeSquid Secure Web Gateway (SWG) allows you to access corporate account only and block personal gmail account.

## Policy Creation

To solve problem of personal Gmail blocking. We need to manipulate headers of Gmail so that only specific domain (corporate domains) is/are allowed and rest are denied (this includes personal Gmail). Also, as Gmail is HTTPS website, we need to make sure [HTTPS Inspection is enabled.](https://help.safesquid.com/portal/en/kb/articles/setup-https-inspection)

We can achieve the above by following steps --

### Enable policy from Policies and Profiles Section

We will first match request from only Google Application policy.

From SafeSquid Dashboard click on Configure page at the Top Right Corner. You will see [Policies and profiles](https://help.safesquid.com/portal/en/kb/articles/4-2-accessprofiles) section on your screen.

Search for default profile named GOOGLE APPLICATION.

![search for the default policy "GOOGLE APPLICATION"](/img/How_To/Block_Personal_Gmail,_Allow_Google_Corporate_Accounts/image1.webp)

### Edit and Enable this policy

![edit and enable this policy](/img/How_To/Block_Personal_Gmail,_Allow_Google_Corporate_Accounts/image2.webp)

'Note ': You can also add User Groups in [Policies and Profiles](https://help.safesquid.com/portal/en/kb/articles/4-2-accessprofiles) for specific group of users.

### Enable policy from Header Filter Section

We will insert header, so that only allowed domains are allowed by GOOGLE.

Click on **Restriction Policies** (Left Side Panel).

Click on **Privacy Control** submenu.

Click on [Header Filter](https://help.safesquid.com/portal/en/kb/articles/4-1-2-headerfilter) section. Make Sure Global part of this section is Enabled as True.

![going to header filter under Restriction Policies ](/img/How_To/Block_Personal_Gmail,_Allow_Google_Corporate_Accounts/image3.webp)

Click on Insert Tab.

Search for default profile named GOOGLE APPLICATION (First Rule).

![clicking on insert tab and searching for the GOOGLE APPLICATION default profile](/img/How_To/Block_Personal_Gmail,_Allow_Google_Corporate_Accounts/image4.webp)

Edit and Enable this Rule. Add Domains that you need to allow, in value field and Save the Policy.

![Edit and Enable this Rule. Add Domains that you need to allow, in value field and Save the Policy.](/img/How_To/Block_Personal_Gmail,_Allow_Google_Corporate_Accounts/image5.webp)

**Note:** In case of multiple domains, each should be separated by ',' with no space.

## Validation

We will try to login into Personal Gmail account.

![validating the rule by logging in from personal account](/img/How_To/Block_Personal_Gmail,_Allow_Google_Corporate_Accounts/image6.webp)

You will get error template/message from Google, with names of allowed domains.
