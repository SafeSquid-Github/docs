## Control Application Behaviour

With SafeSquid, you can effectively control the behaviour of every feature of every Web 2.0 application. By default, SafeSquid can identify every feature of over a thousand applications, with a continuously updating database. 
Furthermore, security administrators can define application signatures for custom-built enterprise software, and control their behaviour.

### [Enforce mandatory SafeSearch](https://help.safesquid.com/portal/en/kb/articles/how-to-enforce-safesearch)

Results from search engines may be harmful or explicit. To ensure inappropriate content is not served, search engines have optional SafeSearch filters.
 
With SafeSquid, you can forcefully apply SafeSearch filters across all major search engines, including [Google Search](https://help.safesquid.com/portal/en/kb/articles/enforce-google-safe-search-on-safesquid-proxy), [Yahoo Search](https://help.safesquid.com/portal/en/kb/articles/enforce-yahoo-safe-search-on-safesquid-proxy), and [Bing Search](https://help.safesquid.com/portal/en/kb/articles/enforce-bing-safe-search-on-safesquid-proxy).

### [Secure YouTube](https://help.safesquid.com/portal/en/kb/articles/how-to-enforce-youtube-restricted-mode)

With SafeSquid's [YouTube API Integration](https://help.safesquid.com/portal/en/kb/articles/youtube-api-integration-with-safesquid-to-allow-specific-youtube-videos), you can [enforce YouTube's Restricted Mode](https://help.safesquid.com/portal/en/kb/articles/how-to-enforce-youtube-restricted-mode), to mandatorily screen out potentially objectionable content.

Moreover, to prevent cyberslacking on YouTube, organisations can limit access to specific categories of videos, [specific YouTube channels](https://help.safesquid.com/portal/en/kb/articles/block-specific-youtube-channel), or even specific videos.

## [Restrict Login](https://help.safesquid.com/portal/en/kb/articles/discourage-all-users-from-login-post-and-upload)

To prevent sophisticated phishing attacks, limit role-based login only to business-critical websites.

Furthermore, SafeSquid can ensure [logins only via corporate accounts](https://help.safesquid.com/portal/en/kb/articles/block-personal-gmail-allow-google-corporate-accounts), and [block personal accounts](https://help.safesquid.com/portal/en/kb/articles/block-personal-gmail-allow-google-corporate-accounts) to thwart attempts of leaking business sensitive data via personal accounts.

### Upload/Download restriction

You can impose role-based site-specific file size limits, and type restrictions on uploads and downloads, including overall volume quota management.

### [Read-only mode](https://help.safesquid.com/portal/en/kb/articles/discourage-all-users-from-login-post-and-upload)

To permit only viewing content on Web 2.0 applications without engaging in interactive features, organisations can implement a "read-only" mode. This feature is particularly useful on social networking websites, like
[FaceBook](https://help.safesquid.com/portal/en/kb/articles/facebook-read-only-mode), LinkedIn, Twitter, Reddit, etc.

## Transparently redirect traffic

SafeSquid can seamlessly redirect users to preferred or region-specific versions of websites.


## [Block advertisements](https://help.safesquid.com/portal/en/kb/articles/block-advertisements-and-banners)

Advertisements are annoying, intrusive, and distracting. [Blocking banner Ads](https://help.safesquid.com/portal/en/kb/articles/block-advertisements-and-banners) results in cleaner-looking web pages that load faster, and conserve bandwidth.


# Working of Default Entries in Access Restrictions

## Overview 

This article will help you to understand the working of each default entry in Access Restrictions.

## [Access the SafeSquid user interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

![clicking on configure in safesquid interface](/img/How_To/Working_of_Default_Entries_in_Access_Restrictions/image1.webp)

## Go to Application Setup

![clicking on application setup in the sidebar](/img/How_To/Working_of_Default_Entries_in_Access_Restrictions/image2.webp)

## Go to Access Restrictions 

![clicking on access restrictions in application setup](/img/How_To/Working_of_Default_Entries_in_Access_Restrictions/image3.webp)

![Global section of access restrictions ](/img/How_To/Working_of_Default_Entries_in_Access_Restrictions/image4.webp)

## Go to Allow list 

![going to allow list tab](/img/How_To/Working_of_Default_Entries_in_Access_Restrictions/image5.webp)

![default rules under allow list](/img/How_To/Working_of_Default_Entries_in_Access_Restrictions/image6.webp)

## Working of each entry 

![showing the working of each default entry which includes 1) accessing web interface trough tunnel 2) bypassing authentication for application which does not support proxy authentication 3) using same configuration for multiple instances](/img/How_To/Working_of_Default_Entries_in_Access_Restrictions/image7.webp)

![default entries showing entries 1) selecting the users and user groups from LDAP and adding them to a single group 2) policy created for admins with admin privilages ](/img/How_To/Working_of_Default_Entries_in_Access_Restrictions/image8.webp)

![policy for authenticating all users which are not included any of the created entries](/img/How_To/Working_of_Default_Entries_in_Access_Restrictions/image9.webp)
