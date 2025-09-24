---
title: Block Particular User Login to Facebook or Gmail
description: Learn how to configure SafeSquid to block specific users from logging into Facebook or Gmail, ensuring secure and controlled access for your organization.
keywords:
- block user login facebook gmail safesquid
- restrict facebook login safesquid
- block gmail login safesquid
- user login restriction safesquid
- safe access control safesquid
---

## Overview
In corporation you have to restrict login usernames from Facebook and Gmail.Except selected users all can able to login into Facebook or Gmail.

## Prerequisites
HTTPS Inspection should be enabled in SafeSquid. If not enabled, you can check our document - [How to enable HTTPS Inspection.](/docs/07-SSL%20Inspection/Setup%20SSL%20Inspection.md)

## [Access the SafeSquid User Interface](/docs/08-SafeSquid%20Interface/Accessing%20the%20SafeSquid%20Interface.md)
![click on configure in safesquid interface](/img/How_To/Block_Particular_User_Login_To_Facebook_Or_Gmail/image1.webp)

## Go to Search
![click on search in access profiles section](/img/How_To/Block_Particular_User_Login_To_Facebook_Or_Gmail/image2.webp)

## Search policy: "BLOCK PARTICULAR USER LOGIN"
![search for " BLOCK PARTICULAR USER LOGIN " default policy](/img/How_To/Block_Particular_User_Login_To_Facebook_Or_Gmail/image3.webp)

## Go to Content Modifier: Rewrite Policies
![showing search results for "BLOCK PARTICULAR USER LOGIN " in Content modifier section](/img/How_To/Block_Particular_User_Login_To_Facebook_Or_Gmail/image4.webp)

![click on content modifier from the sidebar under Real Time content Security](/img/How_To/Block_Particular_User_Login_To_Facebook_Or_Gmail/image5.webp)

## Ensure Global Section with Enabled TRUE
![ensuring the global section set as true](/img/How_To/Block_Particular_User_Login_To_Facebook_Or_Gmail/image6.webp)

![selecting true in global if it is set to false ](/img/How_To/Block_Particular_User_Login_To_Facebook_Or_Gmail/image7.webp)

![click on submit to save the policy](/img/How_To/Block_Particular_User_Login_To_Facebook_Or_Gmail/image8.webp)

## Go to Rewrite Policies and make it Enable 
![going in "Rewriting policies " to enable "BLOCK PARTICULAR USER LOGIN" policy](/img/How_To/Block_Particular_User_Login_To_Facebook_Or_Gmail/image9.webp)

![editing the policy](/img/How_To/Block_Particular_User_Login_To_Facebook_Or_Gmail/image10.webp)

![setting true value in enabled ](/img/How_To/Block_Particular_User_Login_To_Facebook_Or_Gmail/image11.webp)

## Enter Username inside Pattern
![entering the desired username pattern](/img/How_To/Block_Particular_User_Login_To_Facebook_Or_Gmail/image12.webp)

![click on save to save the policy](/img/How_To/Block_Particular_User_Login_To_Facebook_Or_Gmail/image13.webp)

## Search policy: "BLOCK PARTICULAR USER LOGIN"
![searching for policy "BLOCK PARTICULAR USER LOGIN " ](/img/How_To/Block_Particular_User_Login_To_Facebook_Or_Gmail/image14.webp)

## Go to Access Profiles to Enable
![going to access profile to enable the policy](/img/How_To/Block_Particular_User_Login_To_Facebook_Or_Gmail/image15.webp)

![clicking on edit policy to edit the policy](/img/How_To/Block_Particular_User_Login_To_Facebook_Or_Gmail/image16.webp)

![selecting true to enable it](/img/How_To/Block_Particular_User_Login_To_Facebook_Or_Gmail/image17.webp)

![save the policy](/img/How_To/Block_Particular_User_Login_To_Facebook_Or_Gmail/image18.webp)

## To test
Go to Facebook and Login

Try login to your Facebook account it will show you the below page:

![testing the policy](/img/How_To/Block_Particular_User_Login_To_Facebook_Or_Gmail/image19.webp)

### Go to Gmail and Login
Try login to your Gmail account it will show you the below page:

![testing the policy by login](/img/How_To/Block_Particular_User_Login_To_Facebook_Or_Gmail/image20.webp)
