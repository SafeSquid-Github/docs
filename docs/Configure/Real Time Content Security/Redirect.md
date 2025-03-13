## Overview

Create policies to redirect requests for a URL to another URL.

You may create redirection policies that intelligently fetch response from a desired URL, and serve it to the client.

Alternatively, you may create policies that respond with an HTTP 302 redirection that instructs the client to seek your suggested URL.

## [Access the SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

## Go to Configure Page

![Google Safe search1.webp](/img/Configure/Real_Time_Content_Activity/Redirect/image1.webp)

## Go to Real-time Content Security

![Google Safe search4.webp](/img/Configure/Real_Time_Content_Activity/Redirect/image2.webp)

## Go to Redirect Section

![Google Safe search5.webp](/img/Configure/Real_Time_Content_Activity/Redirect/image3.webp)

## Global

### Enabled

Enable or Disable URL Redirection.

-   **TRUE**: Enable URL redirection.

-   **FALSE**: Disable URL redirection.

![Google Safe search6.webp](/img/Configure/Real_Time_Content_Activity/Redirect/image4.webp)

![Google Safe search7.webp](/img/Configure/Real_Time_Content_Activity/Redirect/image5.webp)

![Google Safe search8.webp](/img/Configure/Real_Time_Content_Activity/Redirect/image6.webp)

![Google Safe search9.webp](/img/Configure/Real_Time_Content_Activity/Redirect/image7.webp)

## Redirection policies 

![Google Safe search10.webp](/img/Configure/Real_Time_Content_Activity/Redirect/image8.webp)

### Check Default entry in Redirection Policies

![Google Safe search11.webp](/img/Configure/Real_Time_Content_Activity/Redirect/image9.webp)

### Add new policy (if you want to create a new policy click on add button)

![Redirect-policies.jpg](/img/Configure/Real_Time_Content_Activity/Redirect/image10.webp)

Create Entries to setup your URL Redirection Policies.

The first entry applicable for a connection is used, skipping the rest.

Disabled Entries are ignored.

### Enabled

Enable or Disable this entry.

-   **TRUE**: Enable this entry.

-   **FALSE:** Disable this entry.

### Comment

For documentation and future references, explain the relevance of this entry with your policies.

That is, by reading the policies, a future user can understand the purpose of that entry.

### Profiles

Specify the Profiles applicable for this entry.

This entry will be applicable only if the connection has any one of the specified profiles.

Leave it Blank, to apply for all connections irrespective of any applied profile.

To avoid application to a connection that has a profile, use a negated profile (!profile).

### URL

Specify the requests to redirect.

This should be a valid PCRE (Perl Compatible Regular Expression).

Redirection occurs only if the requested URL matches this PCRE.

A typical URL is in the form "**protocol://host/file**".

### Redirect

Specify the URL to redirect the request to.

A typical URL is in the form "**protocol://host/file**".

If left blank, the request will neither be redirected to any URL nor be connected to the requested URL, thus leaving the request never served.

### Port

Specify the port to which the request will be redirected.

If left blank, the request will be redirected to the port available in the original request.

### 302 Redirect

If yes, a 302 redirect is issued; otherwise, the new host is connected directly and the new file is requested.

A 302 redirect should always be used when possible to ensure relative links and images are correct.

-   **TRUE**: Enable 302 redirect.

-   **FALS**E: Disable 302 redirect.

### Options

Several options are available to control how the URL should be handled.

-   **ENCODE**: Encode the new URL.

-   **DECODEBEFORE**: Decode the URL before attempting to match it with the regular expression.

-   **DECODEAFTER**: Decode the new URL after matching.

### Applies to

Specify whether the URL to be redirected is the actual request from the user or part of the Location header returned by the requested site.

-   **URL**: Redirect if the URL is part of the actual request.

-   **LOCATION**: Redirect if the URL is part of the location header.

-   **BOTH**: Redirect if the URL is part of either the actual request or the Location header.

## Example

### Rule#1

I want to redirect a request to https://www.google.com to https://www.wired.com.uk/article/gaming-google-crowdwork I want a 302-redirect code when the redirect is successful.

![Slide1-redirect.webp](/img/Configure/Real_Time_Content_Activity/Redirect/image11.webp)
