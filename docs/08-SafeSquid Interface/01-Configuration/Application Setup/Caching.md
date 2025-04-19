---
title: Caching  
description: Learn how to configure caching in SafeSquid to optimize bandwidth, enhance performance, and manage cache storage, refresh rules, and object integrity checks.  
keywords:  
- safesquid caching configuration  
- web proxy cache management  
- safesquid refresh rules  
- optimize bandwidth safesquid  
---

## Overview
Find out the answers to the following:

1. Allows you to add/remove cache stores, and configure: Global cache options.
1. What objects are cacheable or un-cacheable?
1. How cacheable objects are distributed between various stores?
1. Minimum and maximum size of the objects to be stored.
1. Revalidation period of cached objects, etc.

## Global
![showing global section of caching](/img/Configure/Application_Setup/Caching/image1.webp)

### Enabled
Enable or Disable caching.

TRUE: Enable caching section.

FALSE: Disable the caching section.

### Violate RFC
This option causes the proxy server to violate some rules in the HTTP RFC to help improve cache performance specifically. When a website requests that the file not be cached with the "No-Cache" directive in the Cache-Control header, the proxy caches it anyway but always validates it with an If-Modified-Since conditional request.

TRUE: Enable violating the RFC standards.

FALSE: Disable violating the RFC standards.

### Memory Cache Size
The maximum size in bytes of the memory cache. You can enter values in KB MB GB as 20K 20M or 20G respectively.

### Memory Free Extra
This is the memory cache size that is emptied when the content cached in the memory is refreshed. The stalest content is removed, to free up space for new content. This prevents frequently used content from being deleted when the store reaches its maximum allowed limit. You can enter values in KB, MB, and GB as 20K, 20M, and 20G respectively.

### Minimum File Size
The minimum file size in bytes of any cached file.

### Maximum File Size
The maximum file size in bytes of any cached file; if set to 0, no maximum file size is imposed.

### Prefetch Window
This option can be used to specify the time period after a file is prefetched in which it is exempted from any refresh or expiry rules.

### ICP Port
The UDP port to listen for ICP packets.

### ICP Timeout
The timeout in milliseconds for response ICP packets.

### Store Balance Method
This option controls how the storage directory file is selected. Fill size selects the storage directory with the least total bytes used. Fill per cent selects the storage directory with the lowest percentage of space used.

**FILLSIZE**: Select the storage directory with the least total bytes used.

**FILL PERCENT**: Select the storage directory with the lowest percentage of space used.

### Journal Size
The maximum size in bytes of the journal.

### Clean Interval
Interval time in seconds after which the content in the Memory Cache is dumped into the disk storage.

## Store
List of storage locations for disk cache. You can add one or more locations under "Store" that would be used for physically storing the content for caching.

![showing "Store" tab of caching](/img/Configure/Application_Setup/Caching/image2.webp)

### Enabled
Enable or Disable this entry

TRUE: Enable this entry.

FALSE: Disable this entry.

### Comment
For documentation and future references, explain the relevance of this entry with your policies.

That is, by reading the policies, a future user can understand the purpose of that entry.

### Profiles
Specify the Profiles applicable for this entry.

This entry will be applicable only if the connection has any one of the specified profiles.

Leave it Blank, to apply for all connections irrespective of any applied profile.

To avoid application to a connection that has a profile, use a negated profile (!profile).

###  Path
Path of the directory where cached files are stored.

### Maximum Disk Size
The amount of space that should be used to store cached files in this directory. You can enter values in KB, MB, and GB as 20K, 20M, and 20G respectively.

### Disk Free Extra
This is the size of the cache store that is emptied when the content in the store is refreshed. The stalest content is removed, to free up space for new content.

This prevents frequently used content from being deleted when the store reaches its maximum allowed limit.

The value here is normally set to 30% of the total size of the store. e.g. when Maximum Disk Size is 1G, then the value entered here would be 250M.

### MD5 Integrity Check
Perform MD5 check on cache files when saving them and loading them from disk, this ensures that the corrupted cache files don't get used.

**TRUE**: Enable MD5 integrity check.

**FALSE:** Disable MD5 integrity check.

## Refresh
You can add/modify the rules under "Refresh" that would enforce your policies for renewing or refreshing the contents in the cache, to ensure that the users are served with content that is 'fresh enough'. This effectively allows you to intelligently and creatively manipulate the bandwidth usage.

![showing "Refresh" tab of caching](/img/Configure/Application_Setup/Caching/image3.webp)

### Enabled
Enable or Disable this entry

TRUE: Enable this entry.

FALSE: Disable this entry.

### Comment
For documentation and future references, explain the relevance of this entry with your policies.

That is, by reading the policies, a future user can understand the purpose of that entry.

### Profiles
Specify the Profiles applicable for this entry.

This entry will be applicable only if the connection has any one of the specified profiles.

Leave it Blank, to apply for all connections irrespective of any applied profile.

To avoid application to a connection that has a profile, use a negated profile (!profile).

### Cachable
Whether or not requests matching this entry are cached.

TRUE: Enable cachability.

FALSE: Disable cachability.

### Minimum Age
The minimum age of any file according to the Last-Modified header. Only files older than this age are cached.

### Maximum Age
The maximum age of any cached file before it must be revalidated. This overrides any given expiry time.

### Revalidate Age
The maximum age of any cached file which doesn't include any headers that indicate when it should expire before it must be revalidated; if set to 0, all cached files whose expiry time is uncertain are verified.

If no "Last-Modified" header is received to calculate the Last-Modified time factor, the cached file is always revalidated.

### Last-Modified Time Factor
The maximum age of any cached file which doesn't include any headers that indicate when it should expire before it must be revalidated; if set to 0, all cached files whose expiry time is uncertain are verified.

If no "Last-Modified" header is received to calculate the Last-Modified time factor, the cached file is always revalidated.

### Manage Cached Objects
SafeSquid has a multi-tier cache. This section gives Information related to the Cache volumes. It displays the list of Cache files and gives users the option to search through, and if required, selectively delete them using the "Delete Matches" option.

The Cache Information section gives information for Memory Cache and Disk Cache Volumes. It shows the total number of objects, the total size of those objects in Bytes, and the percentage of total Cache used. It also displays the path of the various Disk Cache Volume(s).

The Regular Expression Match section has a text box, where you can enter a regular expression or any word, based on which, the corresponding matches are found from Memory Cache, as well as Disk Cache, and displayed.

You can also filter content on the basis of content modification date, accessed date and file size. On the basis of these filter criteria, all the URLs that meet the specified criteria, are displayed below the regular expression match section.

The "Delete-matches" option allows you to delete the resulting matches.

![showing "Managed cached objects" tab of caching](/img/Configure/Application_Setup/Caching/image4.webp)