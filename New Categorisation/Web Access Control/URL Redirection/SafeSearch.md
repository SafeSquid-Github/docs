# Enforce SafeSearch

## Overview

As name indicates SafeSearch is a feature that acts as an automated filter of pornography and potentially offensive content.

In SafeSquid SWG SafeSearch aims to:

Provide parents and teachers with tools to help them choose what content their children see online.

Offer tips and advice to families about how to stay safe online.

Work closely with organizations such as charities, others in our industry and government bodies dedicated to protecting young people.

Not only families having kids but also in organizations and businesses use these filters to prevent inappropriate search results appear in searchengine results.

Google\'s SafeSearch is designed to screen sites that contain sexually explicit content and remove them from your search results. While no filter is 100% accurate, SafeSearch helps you avoid content you may prefer not to see or would rather your children did not stumble across.

SafeSearch can easily be disabled by just few clicks, so in order to enforce we need a mechanism that cannot allow to disabled SafeSearch. You can configure your proxy server to override user preference if they have not already opted for SafeSearch, and enforce it to queries.

After research we were able to find out that Google appends **&safe=active** for its SafeSearch URLs

As Google now uses HTTPS explicitly you will have to use a proxy server that supports SSL inspection.

We will use SafeSquid SWG server in further discussion because it supports SSL Inspection, and also has a WebGUI to easily perform the necessary tasks and create some policies to control access to users.

SafeSquid SWG bydefault have some rules which offers SafeSearch for primarily used search engines like Google, Yahoo, Bing. You just need to enable (if disabled) the SafeSearch policies in Policies and Profiles section.

## Prerequisites

HTTPS Inspection should be enabled in SafeSquid. If not enabled, you can check our document - [How to Enable HTTPS Inspection](https://help.safesquid.com/portal/en/kb/articles/setup-https-inspection)

## Google SafeSearch

Filter explicit search results on Google search engine, like pornographic images, videos, and websites from Google Search results. Try disabling Google SafeSearch and you will not be able to as SafeSquid forcefully enforces it.

Read more about [Google SafeSearch](https://help.safesquid.com/portal/en/kb/articles/enforce-google-safe-search-on-safesquid-proxy)

## Yahoo SafeSearch

Filter explicit search results on Yahoo search engine, like pornographic images, videos, and websites from Yahoo Search results. Try disabling Yahoo SafeSearch and you will not be able to as SafeSquid forcefully enforces it.

Read more about [Yahoo SafeSearch](https://help.safesquid.com/portal/en/kb/articles/enforce-yahoo-safe-search-on-safesquid-proxy)

## Bing SafeSearch 

Filter explicit search results on Bing search engine, like pornographic images, videos, and websites from Bing Search results. Try disabling Bing SafeSearch and you will not be able to as SafeSquid forcefully enforces it.

Read more about [Bing SafeSearch](https://help.safesquid.com/portal/en/kb/articles/enforce-bing-safe-search-on-safesquid-proxy)


https://help.safesquid.com/portal/en/kb/articles/enforce-yahoo-safe-search-on-safesquid-proxy
https://help.safesquid.com/portal/en/kb/articles/enforce-google-safe-search-on-safesquid-proxy
https://help.safesquid.com/portal/en/kb/articles/enforce-bing-safe-search-on-safesquid-proxy