# Identify the Filter by using SafeSquid Extended Logs or Detailed Logs

## Overview

Find the filter name which is causing the blocking of the specific website or Application. Once you find the reason for blocking then you can take an action to allow the website or application

## Prerequisites

You must have knowledge of [Analysis of SafeSquid Logs](https://help.safesquid.com/portal/en/kb/articles/analyze-the-safesquid-logs)

## Finding from SafeSquid Console

### Access the SafeSquid server or console

Run the below command to find the current SafeSquid logs by which the website or the application is blocking

> tail -F /var/log/safesquid/extended/extended.log | grep ""403""

the output will display results in the following order:

"record_id" "client_id" "request_id" "date_time" "elapsed_time" "status" "size" "upload" "download" "bypassed" "client_ip" "username" "method" "url" "http_referer" "useragent" "mime" "filter_name" "filtering_reason" "interface" "cachecode" "peercode" "peer" "request_host" "request_tld" "referer_host" "referer_tld" "range" "time_profiles" "user_groups" "request_profiles" "application_signatures" "categories" "response_profiles" "upload_content_types" "download_content_types" "profiles"

You can find the filtername on 18th column of **SafeSquid Extended logs**

Example:

"15198252557612zPcLB" "761" "2" "28/Feb/2018:19:10:55" "15" "403" "1518" "0" "1518" "FALSE" "192.168.0.27" "anonymous@192.168.0.27" "GET" "https://scontent.fbom8-1.fna.fbcdn.net:443/v/t1.0-1/p50x50/28168712_185447622069230_6889621589669762501_n.jpg?oh=40820039a0b53ca9046ac03c0d13136b&oe=5B07F816" "https://www.facebook.com/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:58.0) Gecko/20100101 Firefox/58.0" "image/jpeg" "image-filter" "7.194000" "192.168.27.50:8080" "TCP_DENIED" "DIRECT" "safesquid" "scontent.fbom8-1.fna.fbcdn.net" "fbcdn.net" "www.facebook.com" "facebook.com" "1K-10K" "" "ADMINS" "" "Firefox Browser,Browsers,Facebook,Social Networking" "WHITELIST,hi,instantmessaging,my,socialnetworks" "POTENTIAL MALWARE THREATS,SMALL DOWNLOADS" "-" "image/jpeg" ""

In the above log line:

https://scontent.fbom8-1.fna.fbcdn.net:443/v/t1.0-1/p50x50/28168712_185447622069230_6889621589669762501_n.jpg?oh=40820039a0b53ca9046ac03c0d13136b&oe=5B07F816

Is blocked due to the filter **Image filter**

## Finding from SafeSquid User Interface

If you don't have the access to SafeSquid Server, then you can also find the filtername by using SafeSquid Interface

Read more about [Finding from SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/identify-the-filter-name-using-safesquid-detailed-logs-from-the-interface)
