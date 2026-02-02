---
title: Standard Operating Procedure (SOP)
description: Step-by-step SOP for diagnosing and resolving proxy errors, DNS issues, SSL failures, and connection blocks using SafeSquid logs and Linux utilities.
keywords:
  - safesquid troubleshooting guide
  - safesquid connection errors
  - safesquid logs analysis
  - troubleshoot safesquid proxy issues
  - diagnose dns ssl curl safesquid
---
## Purpose

To provide a consistent and effective approach to troubleshooting network connectivity and web server issues using key commands.

## Scope

This SOP applies to troubleshooting sessions involving DNS resolution, port connectivity, web server certificates, and web server responses, with and without proxy usage.

## Procedure

### Verify DNS Resolution

Use the command nslookup to check if the domain name can be resolved to an IP address.

```bash
nslookup hostname
```
**Successful scenario**: Screenshot of successful nslookup output.

```bash
nslookup safesquid.com
```
![showing successful scenario of nslookup command](/img/Troubleshooting/Standard_Operating_Procedure_(SOP)_for_Troubleshooting_Issues_in_your_SafeSquid_proxy_server/image1.webp)

**Unsuccessful scenario**: Screenshot of nslookup output indicating resolution failure.

 ```bash
nslookup safesquid.com
```
![showing unsuccessful scenario of nslookup command](/img/Troubleshooting/Standard_Operating_Procedure_(SOP)_for_Troubleshooting_Issues_in_your_SafeSquid_proxy_server/image2.webp)
If the resolution fails, check DNS settings, server availability, and firewall rules.

### Check Port Connectivity

Use the command telnet to attempt a connection to port 443 on the server.

```bash
echo "" | telnet hostname 443
```
**Successful scenario**: Screenshot of successful telnet connection

```bash
echo "" | telnet safesquid.com 443
```
![showing successful scenario of telnet command](/img/Troubleshooting/Standard_Operating_Procedure_(SOP)_for_Troubleshooting_Issues_in_your_SafeSquid_proxy_server/image3.webp)

**Unsuccessful scenario**: Screenshot of telnet connection failure.

```bash
echo "" | telnet safesquid.com 443
```
![showing unsuccessful scenario of telnet command](/img/Troubleshooting/Standard_Operating_Procedure_(SOP)_for_Troubleshooting_Issues_in_your_SafeSquid_proxy_server/image4.webp)

If unsuccessful, verify firewall rules, network restrictions, and server configuration.

Test Web Server Certificate (if required/ if the issue is related to server certificates):

Use the command openssl s_client to examine the server's certificate details.

```bash
echo "" | openssl s_client -brief -state -connect hostname:443 -verify_hostname hostname
```
**Successful scenario**: Screenshot of valid certificate details from openssl s_client.

```bash
echo "" | openssl s_client -brief -state -connect safesquid.com:443 -verify_hostname safesquid.com
```
![showing successful scenario of openssl command](/img/Troubleshooting/Standard_Operating_Procedure_(SOP)_for_Troubleshooting_Issues_in_your_SafeSquid_proxy_server/image5.webp)

**Unsuccessful scenario**: Screenshot of invalid or expired certificate details.

```bash
echo "" | openssl s_client -brief -state -connect incomplete-chain.badssl.com:443 -verify_hostname incomplete-chain.badssl.com
```

![showing unsuccessful scenario of openssl command](/img/Troubleshooting/Standard_Operating_Procedure_(SOP)_for_Troubleshooting_Issues_in_your_SafeSquid_proxy_server/image6.webp)

Check for validity, expiration, and compatibility with client requirements.

### Check Web Server Response without proxy
Use the curl command to retrieve a response from the web server.

```bash
curl https://hostname --head
```
**Successful scenario**: Screenshot of successful curl output with a 200-status code.

```bash
curl https://safesquid.com --head
```
![showing successful scenario of curl command](/img/Troubleshooting/Standard_Operating_Procedure_(SOP)_for_Troubleshooting_Issues_in_your_SafeSquid_proxy_server/image7.webp)

**Unsuccessful scenario**: Screenshot of curl output.

```bash
curl https://157.245.103.186 --head
```
![showing unsuccessful scenario of curl command](/img/Troubleshooting/Standard_Operating_Procedure_(SOP)_for_Troubleshooting_Issues_in_your_SafeSquid_proxy_server/image8.webp)

Analyze response codes (e.g., 200 for success, 404 for not found), headers, and content for troubleshooting purposes.

## Check Web Server Response via Proxy:
Verify connectivity and web server response through the proxy.

Configure curl to use the proxy with the --proxy option to check the response via proxy.

```bash
curl --proxy 127.0.0.1:8080 --cacert /usr/local/safesquid/security/ssl/ROOT_X509File.cer https://hostname --head
```
**Successful scenario**: Screenshot of successful curl output with proxy enabled.

```bash
curl --proxy 127.0.0.1:8080 --cacert /usr/local/safesquid/security/ssl/ROOT_X509File.cer https://safesquid.com --head
```
![showing successful scenario of curl output with proxy enabled](/img/Troubleshooting/Standard_Operating_Procedure_(SOP)_for_Troubleshooting_Issues_in_your_SafeSquid_proxy_server/image9.webp)

**Unsuccessful scenario**: Screenshot of curl output with proxy blocking.

```bash
curl --proxy 127.0.0.1:8080 --cacert /usr/local/safesquid/security/ssl/ROOT_X509File.cer https://safesquid.com --head
```
![showing unsuccessful scenario of curl output with proxy enabled](/img/Troubleshooting/Standard_Operating_Procedure_(SOP)_for_Troubleshooting_Issues_in_your_SafeSquid_proxy_server/image10.webp)

## Access and Filter SafeSquid's Extended Logs:
Use the awk command to view a summary of connections related to the websites you are trying to debug for example "safesquid.com":
```bash
awk -F't' '{print $4, $2, $11, $12, $6, $21, $24, $23, $33, $37}' /var/log/safesquid/extended/extended.log | grep "website"
```
Example:
```bash
awk -F't' '{print $4, $2, $11, $12, $6, $21, $15, $24, $23, $33, $37}' /var/log/safesquid/extended/extended.log | grep "safesquid.com"
```
Customize the output with different log keys as needed.

**Interpret the Output:**

Each line represents a connection, providing key details:

**Date and time**

**Client IP**

**Username**

**Status code**

**Referrer**

**Requested host.**

**Peer**

**Categories**

**Profiles**

Check for status code which ranges from **400-500**.

Requests which are blocked by SafeSquid will have a status code of 451.

![showing logs in safesquid server greping website name](/img/Troubleshooting/Standard_Operating_Procedure_(SOP)_for_Troubleshooting_Issues_in_your_SafeSquid_proxy_server/image11.webp)

You can get more specific by mentioning IP or username to get user-specific logs.
```bash
awk -F't' '{print $4, $2, $11, $12, $6, $21, $24, $23, $33, $37}' /var/log/safesquid/extended/extended.log | grep "<WEBSITE>" | grep "<USER IP>"
```
Example:
```bash
awk -F't' '{print $4, $2, $11, $12, $6, $21, $24, $23, $33, $37}' /var/log/safesquid/extended/extended.log | grep "safesquid.com" | grep "192.168.2.108"
```
This will only show traffic to the proxy generated from the specified user to the specified website.

![showing logs in safesquid server greping IP address name](/img/Troubleshooting/Standard_Operating_Procedure_(SOP)_for_Troubleshooting_Issues_in_your_SafeSquid_proxy_server/image12.webp)

**Available Log Keys**:

1. record_id
1. client_id
1. request_id
1. date_time
1. elapsed_time
1. status
1. size
1. upload
1. download
1. bypassed
1. client_ip
1. username
1. method
1. url
1. http_referer
1. useragent
1. mime
1. filter_name
1. filtering_reason
1. interface
1. cachecode
1. peercode
1. peer
1. request_host
1. request_tld
1. referer_host
1. referer_tld
1. range
1. time_profiles
1. user_groups
1. request_profiles
1. application_signatures
1. categories
1. response_profiles
1. upload_content_types
1. download_content_types
1. profiles

**Look for status code of 400-500**:

Focus on Connections with 400-500 status codes these often indicate blocks or errors.

### Use find_client_id.sh for Detailed Logs:

:::note
Ensure that you have enabled debugging logs, you can find below how to enable debugging logs.
:::

Logs are used to hunt issues and crashes and get a clear understanding of system behavior. Logs enable you to analyse issues with ease. SafeSquid provides such logs which are located at /var/log/safesquid/native/safesquid.log and /var/log/safesquid/extended/extended.log Respective logs while helping in your troubleshooting. By default, safesquid native logs do not provide comprehensive information. Using safeSquid's debug mode, the native log prints comprehensive details. Below is an example of ...

To retrieve complete logs for a specific connection, use find_client_id.sh script.

```bash
find_client_id.sh client_id | less
```
![showing find_client_id.sh | less output](/img/Troubleshooting/Standard_Operating_Procedure_(SOP)_for_Troubleshooting_Issues_in_your_SafeSquid_proxy_server/image13.webp)

Check for any errors in the given connection.

### Consult SafeSquid Support (If Necessary)
If you are unable to resolve the issue after following the troubleshooting steps, contact SafeSquid support for further assistance.

Before contacting support, create a text file containing the detailed logs for a specific connection using the following command:

```bash
find_client_id.sh client_id > /home/administrator/error_client_id.txt
```
Replace client_id with the actual client ID.

Example:

```bash
find_client_id.sh 1257 > /home/administrator/error_1257.txt
```
![showing how to take the output of find_client_id.sh into a file](/img/Troubleshooting/Standard_Operating_Procedure_(SOP)_for_Troubleshooting_Issues_in_your_SafeSquid_proxy_server/image14.webp)

Attach this text file to your support ticket to provide the technicians with comprehensive information for better troubleshooting.

Unable to find the root cause of your problem.

After trying all the mentioned troubleshooting steps, if you are still not able to figure out and solve your problem then consult SafeSquid's support specialist with the output of your find_client_id.sh attached in your email.

To save the output of find_client_id.sh, redirect the output to a text file as shown below.

find_client_id.sh 1257 > /home/administrator/error_1257.txt

When sending a support ticket for your issue add the file error1257.txt for the support technician to support you better.

## Troubleshooting Tips

1. **Identify Blocks**: Look for blocking messages in the logs.
1. **Status code 451** indicates that the website is getting blocked due to proxy rule.
1. **Check Configurations**: Review proxy rules and settings for potential misconfigurations.
1. **Analyze Detailed Logs**: Use find_client_id.sh to pinpoint specific issues.
1. **Seek Further Assistance**: If you need more help, consult SafeSquid documentation or contact their support team.

## Remember

1. Always enable debugging mode before troubleshooting.
1. Adapt the commands and log keys to your specific needs.
1. Consult SafeSquid documentation for more advanced troubleshooting.

If you are unable to identify the problem, share the output of find_client_id.sh with SafeSquid's Support team at support@safesquid.net