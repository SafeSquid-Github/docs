# Prefetching

## Overview

Use Prefetching to enhance user experience. SafeSquid can analyze HTML pages, to identify links to embedded content, and initiate the fetch and cache process while still serving the initial HTML pages. Create entries in the Prefetch Sub-Section and set the logic for analyzing the HTML pages. Enable Caching for using Prefetching effectively.

## [Access the SafeSquid interface.](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

## Go to the configure page.

![clicking on configure in safesquid interface](/img/Configure/Application_Setup/Prefetching/image1.webp)

## Go To Application Setup

![going to application setup in the sidebar](/img/Configure/Application_Setup/Prefetching/image2.webp)

## Open Prefetching Section from Accelerators

![clicking on Prefetching in Accelerators](/img/Configure/Application_Setup/Prefetching/image3.webp)

## Global 

### Enabled

Enable or Disable Prefetching.

TRUE: Enable the prefetch section.

FALSE: Disable the prefetch section.

### Threads

Maximum concurrent threads will be used for Pre-Fetching.

SafeSquid service must be restarted to effect any change in this setting.

Optional Values are 1-256.

### Queue Size

Specify the maximum size of the prefetch queue.

Each identified link is pushed to the bottom of the prefetch queue

The links starting from the top of the queue are fetched, analyzed, and cached.

The newly identified links are ignored if the queue is full.

Optional Values are from 1 to 256.

### Host Limit

Specify the maximum number of queued prefetches per host.

Prevent too many parallel fetches to the same host.

Optional Values are from 1 to 256.

Make sure the Global part of the Prefetching Section is true.

![clicking on global section of prefetching to make it enabled field as true](/img/Configure/Application_Setup/Prefetching/image4.webp)

![selecting enabled as true in the drop down menu](/img/Configure/Application_Setup/Prefetching/image5.webp)

### Save the Global part of the prefetching section.

![saving the global part of prefetching section](/img/Configure/Application_Setup/Prefetching/image6.webp)

### Open the Prefetch section to change the configuration.

![clicking on Prefetch tab to add a new entry](/img/Configure/Application_Setup/Prefetching/image7.webp)

## Prefetch

Create a list of Entries to implement your Prefetch Policies.

SafeSquid produces a virtual map of the tags discovered on a Web page.

SafeSquid evaluates the list for an entry applicable to each tag.

Evaluation begins with the topmost entry and sequentially iterates until the first applicability match.

Evaluation ignores disabled entries.

Use Profiles, Name of the Tag, Tag Attributes, and Pattern of the Attribute to specify applicability.

Only Entries with both the Name of the Tag and Tag Attributes, specified will be applicable.

SafeSquid uses the first applicable Entry and, skips the rest.

### Enabled

Enable or Disable this entry.

TRUE: Enable this entry.

FALSE: Disable this entry.

### Comment

For documentation and future references, explain the relevance of this entry with your policies.

### Profiles

Specify the Profiles applicable for this entry.

This entry will be applicable only if the connection has any one of the specified profiles.

Leave it Blank, to apply for all connections irrespective of any applied profile.

To avoid application to a connection that has a profile, use a negated profile (!profile).

### Tag Name

Specify the HTML tag that should be analyzed for pre-fetchable URLs.

**For example**: A, img, link, script.

### Tag Attribute

Specify the attribute of the HTML tag, holding the URL to be prefetched.

**For example,** href, src, etc.

### Attribute Pattern

Specify the regular expression to evaluate the URL discovered in the Tag Attribute. If the regular expression matches, the URL is logically expanded and pushed into the prefetch queue.

### Maximum file size

Specify the maximum size of the file to be prefetched.

Use suffix -- K, M, G, for Kilo Bytes, Mega Bytes, Giga Bytes

**Hint**: Set this to 0 for an unlimited size.

### Recursion Level

Set the Recursion limit to 0, or a higher positive integer.

Prefetched content is analyzed, to discover new prefetchable URLs.

Recursion limits this iteration.

**Note**: Setting to 0 causes links to be followed, indefinitely.

## Prefetch Now

Add a popular URL into the prefetch queue. The Prefetched content will be cached.

Add URL to prefetch queue.

![entering the website name in the prefetch now tab in prefetching section](/img/Configure/Application_Setup/Prefetching/image8.webp)
