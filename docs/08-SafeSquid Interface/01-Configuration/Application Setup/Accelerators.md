---
title: Accelerators  
description: Learn how SafeSquid Accelerators like Caching and Prefetching enhance web performance by optimizing bandwidth usage, reducing latency, and delivering faster access to web content through intelligent content delivery.  
keywords:  
- safesquid caching  
- safesquid prefetching  
- proxy performance optimization  
- bandwidth saving proxy  
---

Use accelerators to optimize resource utilization and improve response time.

### Caching

Content Caching improves bandwidth efficiency. A page or file, when requested by a user, is served to the user and a copy of it is also maintained locally in the cache. So, when a request is made to fetch the same page or file, it is served with the local copy, instead of 'a fresh fetch'.

Read more about [Caching](/docs/14-Performance%20Optimisation/Content%20Caching.md)

### Prefetching

SafeSquid can analyze HTML pages, to identify links to embedded content, and initiate the fetch and cache process while still serving the initial HTML pages.

Read more about [Prefetching](/docs/14-Performance%20Optimisation/Pre%20Fetching.md)
