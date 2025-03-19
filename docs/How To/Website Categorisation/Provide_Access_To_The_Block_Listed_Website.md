# Provide Access to Block Listed Website

## Overview

When you are browsing through SafeSquid, one of the websites you are accessing is blocked due to configuration in SafeSquid. But you don't know why the website is blocked. Now you need to allow that website by changing the configuration in SafeSquid. This page includes, how to find the reason for blocking and how to allow the website.

Example:

I am accessing my internet through proxy, I found that rediff.com is blocked when i try to access it through safesquid. Now i want to allow that website.

## Prerequisites

You should have the knowledge about each section of SafeSquid and how it will work. If not refer [this](https://help.safesquid.com/portal/en/kb/articles/configuration) for more details

## Finding the reason for blocking

When you open that website through safesquid, if it is blocked by safesquid, then you will get the SafeSquid Template, Showing the filtering Reason and what are the profiles Applied to the request.

The SafeSquid template shows the below page.

Access blocked by SafeSquid based on your organization policies

UserName: anonymous@192.168.0.27

Filters: Profiles

Filter Reason: Access blocked by SafeSquid based on your organization policies

Profiles: GLOBAL BLOCK

Categories: BLOCKLIST,business,news,searchengines,webmail

Applications: Unidentified Application,Firefox Browser,Browsers

User group: ADMINS

You will see that, there is a **Filters** option showing the Security Filter by which the website is blocked (In my case it is **Profiles**), You can also see those matching entries in the profiles section i.e**. Profiles** option (In my case only one profile is matched to the connection i.e. GLOBAL BLOCK). And note down the categories list in which the website is categorized.

Now we understood that, the website is blocked due to the one of the entries in Access Profiles Section. To find the exact entry, check the profiles option in template (In my case it is GLOBAL BLOCK) so now i come to know that my website is blocked due to GLOBAL BLOCK entry in Access Profiles

## Allow Blocked Website 

Go to access profiles and find the respective entry (In my case i need to look for entry, in which added profiles as "GLOBAL BLOCK"). Then entry may look like same as below

Enabled: TRUE

Comment: Inappropriate content is abuse, strictly block for all users.

Trace Entry: FALSE

Categories: Anonymous, VPN, BLOCKLIST, gambling, hacking,illegal, phishing ,pornography ,violence, virusinfected ,webproxy

Action: DO_NOT_BYPASS

Added Profiles: GLOBAL BLOCK

From above entry we can found that, the website is blocked because it is categorized under any one of the above-mentioned categories. Now you need to find the exact category in which the website is categorized.
So, go to custom categorization and search for the blocked website. It will show the categories list.
![In custom categorization search for the blocked website to provide Access To The Block Listed Website](/img/How_To/Provide_Access_To_The_Block_Listed_Website/image1.webp)

**Method1**: Then find the exact category by comparing the category list from template and search list from custom categories, and remove that website from that category.

See [How to remove Specific website from Specific Category](https://help.safesquid.com/portal/en/kb/articles/how-to-remove-one-website-from-specific-category)

**Method 2**: you need to add that website to new category and use that category in profiles section with Action as Allow.

See How_To_Manage_Custom_Web-Categories
