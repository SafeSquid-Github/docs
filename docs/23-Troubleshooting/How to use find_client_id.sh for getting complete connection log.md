---
title: Using find_client_id.sh for Connection Logs
description: Use the find_client_id.sh script to extract complete connection details from SafeSquid logs for troubleshooting and forensic analysis.
keywords:
  - SafeSquid connection logs
  - find_client_id.sh script
  - SafeSquid log analysis
  - proxy troubleshooting tools
  - connection forensics
  - SafeSquid debugging
---

# How To Use find\_client\_id.sh for Getting Complete Connection Log

## Overview

While troubleshooting, you may want to analyze the connection status right from the beginning, when the connection began, profiles and web category added, headers received/sent by the proxy server, error or warning for the connection, etc.

But getting complete connection details just by navigating native logs is not possible, because the logs are written in real time as the connections are made.

For example, if you are requesting [https://www.google.com](https://www.google.com) and [https://mail.google.com](https://mail.google.com) then log will be not written on the basis of connection, but on the basis of how the endpoint server response, which means you'll need to hunt for complete connection details.

Getting complete connection log in a corporate network where they have hundreds of users is an impossible task and can lead to incomplete analysis for the problem.

find\_client\_id.sh can be used to get complete connection details.

Using the client id from logs will provide complete connection details.

Below are steps on how to use find\_client\_id.sh

To use find\_client\_id.sh you are first required to get your connection's client id.

Client id can be extracted from the response headers section in browsers network tab.

(Note: we are assuming that you know how to open developer tools in a browser)

![find_client_id script output or connection log example](/img/picture1.jpg)

Also, client id can be extracted from SafeSquid's native logs
