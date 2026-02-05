---
title: Header Obfuscation
description: Configure SafeSquid header filter to allow, deny, or insert HTTP headers for client-server communication control.
keywords:
  - header filter SafeSquid
  - modify headers SafeSquid
  - http header filtering SafeSquid
  - header policy SafeSquid
  - request response header SafeSquid
---

# Header Obfuscation

## Overview

Control how SafeSquid modifies the HTTP header messages exchanged between your Internet Clients like web browsers and the requested web service.

You can add a new header directive, delete a header directive, or modify an existing header directive.

The request and response headers are processed by this section before they are processed by the facility to rewrite headers in the Content Re-Write section.

This section consists of 4 sub-sections — Global, Allow, Deny and Insert.

The processing of a request or a response, by this section is bypassed if the Global sub-section is set to False, and the policies in Allow / Deny / Insert thus become muted.

The policies in the Insert section are processed after the policies in the Allow / Deny lists.

Setting the Default Policy to Allow in the Global Sub-Section, permits all HTTP headers to be exchanged unless there is a policy directive in the Deny List to prevent a header from being exchanged.

Similarly setting the Default policy to Deny shall block all non-mandatory HTTP headers from being exchanged, unless a policy in the Allow list, explicitly permits.

## Documents in this section

### [Header Filter Configuration and Reference](01-Header%20Filter%20Configuration.md)
Header allow/deny/insert behavior requires correct Global policy and rule configuration. This document provides the Global section, Allow and Deny rule parameters (Type, Value, Applies to, Profiles), Insert rules for adding or modifying headers, View headers, and solution verification. Use it to configure and validate header filtering.