# Unblock the Blocked Website

## Overview

Some of the websites are blocked due to the entries created in the SafeSquid configuration. We don\'t know which security filter is the reason for blocking. We need to identify the filter and based on that create the new entry to allow the blocked website or you can modify the existing entry.

## Prerequisites

You must know the different types of security filters available in SafeSquid.

Go through this for more details about [the SafeSquid configuration](https://help.safesquid.com/portal/en/kb/configuration)

## Finding the reason for blocking

You can find the reason for blocking by using two ways

1.  [By observing the SafeSquid Extended Logs](https://help.safesquid.com/portal/en/kb/articles/identify-the-filter-by-using-safesquid-extended-logs-or-detailed-logs)

2.  [By using SafeSquid block Template shown on Browser](https://help.safesquid.com/portal/en/kb/articles/identify-the-filter-name-by-using-safesquid-block-template)

## Profiles

If the website is blocked with Access profile rules you should get SafeSquid blocked template and 403 status code.

Read more about Provide_Access_To_The_Block_Listed_Website

## Text Analyzer

If the website is blocked with Text Analyzer you should get a SafeSquid blocked template and 403 status code.

Read more about [Unblock the website which is blocking with text analyzer](https://help.safesquid.com/portal/en/kb/articles/unblock-the-website-which-is-blocking-with-text-analyzer)

## Image Analyzer

Image Analyzer blocks the inappropriate images by using their Threshold score.

Read more about Unblock the website which is blocking with an image analyzer

## Cookie filter

The cookie filter blocks the logins to the websites.

Read more about Unblock the website which is blocking with a cookie filter

## Elevated Privacy

Elevated privacy blocks third-party cookies.

Read more about Unblock the website which is blocking with elevated privacy

## Header filter

Read more about Unblock the website which is blocking with header filter

## SSL errors

Read more about Unblock the website which is blocking with SSL errors
