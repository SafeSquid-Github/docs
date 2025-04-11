---
title: Header Obfuscation
description: Learn how to configure SafeSquid's header filter to manage HTTP headers, allowing, denying, or inserting custom headers for better control over client-server communication.
keywords:
- header filter safesquid
- modify headers safesquid
- http header filtering safesquid
- header policy safesquid
- request response header safesquid
---

## Overview

Control how SafeSquid modifies the HTTP header messages exchanged between your Internet Clients like web browsers and the requested web service.

You can add a new header directive, delete a header directive, or modify an existing header directive.

The request and response headers are processed by this section before they are processed by the facility to rewrite headers in the Content Re-Write section.

This section consists of 4 sub-sections -- Global, Allow, Deny and Insert.

The processing of a request or a response, by this section is bypassed if the Global sub-section is set to False, and the policies in Allow / Deny / Insert thus become muted.

The policies in the Insert section are processed after the policies in the Allow / Deny lists.

Setting the Default Policy to Allow in the Global Sub-Section, permits all HTTP headers to be exchanged unless there is a policy directive in the Deny List to prevent a header from being exchanged.

Similarly setting the Default policy to Deny shall block all non-mandatory HTTP headers from being exchanged, unless a policy in the Allow list, explicitly permits.

## Global

Here, you can control how the SafeSquid edits the HTTP header messages that pass between your browser and the Internet.
You can increase internet usage privacy levels.

Control the client requests and web server responses.

You can add, delete or modify the Request and Response headers based on their content.

Apart from allowing or denying request or response headers, you can also use Insert sub-section to add a new header or to modify them.

This section analyzes:

1. Request header patterns that are passed from browsers to webservers.

2. Response header patterns that are coming from webservers to clients.

![](/img/Configure/Restriction_Profiles/Header_Filter/image1.webp)

### Enabled

Enable or Disable the header filter section.

**TRUE:** Enable header filter section.

**FALSE:** Disable header filter section.

### Policy

Select the default action to take, when no matching entry for a requested header is found.

**ALLOW:** Allow everything Except rules defined under Deny subsection.

**DENY:** Deny everything Except rules defined under Allow subsection.

## Allow

When the Policy is Deny, rules defined under this sub-section, are exclusively allowed access.

Here you can add a new allow entry, that would explicitly result in acceptance or allowance of header filter to all or a specific set of conditions.

![](/img/Configure/Restriction_Profiles/Header_Filter/image2.webp)

### Enabled

Enable or Disable this entry.

**TRUE:** Enable this entry.

**FALSE:** Disable this entry.

### Comment

For documentation and future references, explain the relevance of this entry with your policies.

### Profiles

Specify the Profiles applicable for this entry.

This entry will be applicable only if the connection has any one of the specified profiles.

Leave it Blank, to apply for all connections irrespective of any applied profile.

To avoid application to a connection that has a profile, use a negated profile (! profile).

### Type

A regular expression matching the header type to which this entry applies.

Headers are in the form of type and value.

Leave blank to Match everything.

Example: X-GoogApps-Allowed-Domains.

### Value

A regular expression matching the header values.

Leave blank to Match everything.

**Example:** text/html.

### Applies to

This option is to select whether this entry applies to the server header, client header, or both.

**CLIENT:** This entry will be applied only for request headers, sent by the client.

**SERVER:** This entry will be applied only for response headers, sent by the server.

### Example

#### Rule#1

I want to allow WebSockets for connections that are profiled as "ALLOW WEBSOCKET"

This rule can be used in a situation where all users' connections to WebSockets are denied.

Using the Allow rule we can allow WebSocket's connections to a defined application/service and for a defined user group.

![](/img/Configure/Restriction_Profiles/Header_Filter/image3.webp)

## Deny

When the Policy is Allow, rules defined under this sub-section, are denied access exclusively.

Here you can add a new 'allow' entry, that would explicitly result in blocking or denying the header filter to all or a specific set of conditions.

![](/img/Configure/Restriction_Profiles/Header_Filter/image4.webp)

### Enabled

Enable or Disable this entry.

**TRUE:** Enable this entry.

**FALSE:** Disable this entry.

### Comment

For documentation and future references, explain the relevance of this entry with your policies.

### Profiles

Specify the Profiles applicable for this entry.

This entry will be applicable only if the connection has any one of the specified profiles.

Leave it Blank, to apply for all connections irrespective of any applied profile.

To avoid application to a connection that has a profile, use a negated profile (! profile).

### Type

A regular expression matching the header type to which this entry applies.

Headers are in the form of type and value.

Leave blank to Match everything.

Example: X-GoogApps-Allowed-Domains.

### Value

A regular expression matching the header value.

Leave blank to Match everything.

Example: text/html.

### Applies to

This option is to select whether this entry applies to the server header, client header, or both.

**CLIENT:** This entry will be applied only for request headers, sent by the client.

**SERVER:** This entry will be applied only for response headers, sent by the server.

### Example

#### Rule#1

I want to deny all WebSocket connections using the request headers with the header "WebSocket"

For connections with the profile "REMOVE WEBSOCKETS" "websocket: upgrade" header will be removed from request headers, which will result in a WebSocket connection never being established.

![](/img/Configure/Restriction_Profiles/Header_Filter/image5.webp)

### Insert

In this sub-section, you can add the rules to modify the request and response headers.

You can insert additional information in the headers sent by your browser.

![](/img/Configure/Restriction_Profiles/Header_Filter/image6.webp)

### Enabled

Enable or Disable this entry.

**TRUE:** Enable this entry.

**FALSE:** Disable this entry.

### Comment

For documentation and future references, explain the relevance of this entry with your policies.

### Profiles

Specify the Profiles applicable for this entry.

This entry will be applicable only if the connection has any one of the specified profiles.

Leave it Blank, to apply for all connections irrespective of any applied profile.

To avoid application to a connection that has a profile, use a negated profile (! profile).

### Type

A regular expression matching the header type to which this entry applies.

Headers are in the form of type and value.

Leave blank to Match everything.

Example: X-GoogApps-Allowed-Domains.

### Value

A regular expression matching the header value.

Leave blank to Match everything.

Example: text/html.

### Applies to

This option is to select whether this entry applies to the server header, client header, or both.

**CLIENT:** This entry will be applied only for request headers, sent by the client.

**SERVER:** This entry will be applied only for response headers, sent by the server.

### Example

#### Rule#1

We want our users to use only our corporate Google account.

When users try to log in using his/her personal Google account they should not be able to login.

Using the custom header in request X-GoogApps-Allowed-Domains we can specify which domains are to be allowed.

Make sure that the list includes the domain you registered with Google Workspace.

![](/img/Configure/Restriction_Profiles/Header_Filter/image7.webp)

#### Rule#2

We allow our users to watch YouTube during lunch hours, however, we do not want users to watch inappropriate content.

We want to enforce YouTube strict mode for all users.

Using header insert we can insert custom header YouTube-Restrict: To set strict restricted access.

However as per Google, YouTube strict does not filter 100% of inappropriate content.

![](/img/Configure/Restriction_Profiles/Header_Filter/image8.webp)

## View headers

In this sub-section, you can find the example headers with type and values.

![](/img/Configure/Restriction_Profiles/Header_Filter/image9.webp)
