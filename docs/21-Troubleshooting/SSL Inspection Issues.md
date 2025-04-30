---
title: SSL Certification Errors
Description: Identify and fix SSL certificate-related errors in SafeSquid such as secured connection failures, zero-byte certificates, and DNS mismatches. Step-by-step resolutions for common HTTPS inspection and certificate issues.  
Keywords:  
- SSL certificate error  
- HTTPS inspection issue  
- SafeSquid certificate troubleshooting  
- secured connection fail  
- domain mismatch SSL  
---

## Issues with their Root Cause
1.  When the SSL certificate is imported into the Chrome browser and still shows **Your connection is not secured** for HTTPS sites.

->Policies in the HTTPS Inspection subsection may not be configured correctly.

2.  While the **successful configuration of HTTPS Inspection**, accessing youtube.com shows an error while all other HTTPS sites work fine.

->In the HTTPS inspection section, if the Global subsection is not set to Enabled as TRUE then this problem may arise.

3.  While the SafeSquid certificate is installed inside the browser however HTTPS sites show the error **Secured connection fail**.

->Either passphrases were not matched or Password encryption failed due to inappropriate input being given.

4.  SSL certificate downloaded with size 0 bytes.

->When the certificate is downloaded without encryption of the password then the certificate will be downloaded with 0 bytes.

5.  Displaying ERROR "SSL Connection to webmail.safesquid.net:2096 denied S_X509_DNS_MISMATCH: SSL Certificate has DNS errors."

->Remove HTTPS websites from SSL Certs/Cache if you get an error **Secured connection fails** when you access HTTPS websites.

6.  Or some of the **HTTPS websites are working without error** but some of the **HTTPS websites are not working**.

## Troubleshooting
###  Case 1: Check whether the SSL certificate was properly imported inside the browser or not.
Follow the [Import your SSL certificate into Internet Explorer or Chrome browser.](https://help.safesquid.com/portal/en/kb/articles/importing-your-ssl-certificate-into-internet-explorer-or-chrome)

Follow the [Import your SSL certificate into the Firefox browser](https://help.safesquid.com/portal/en/kb/articles/importing-your-ssl-certificate-into-firefox)

###  Case 2: Check SSL Certs/Cache if you face the issue mentioned below
SafeSquid certificate imported inside the browser but still shows the error. A secured connection fails when you try to access HTTPS websites.

Some HTTPS websites are working without error, but others are not working.

When you remove the old activation key install the new activation key and then configure the new SSL certificate.

Native Logs

2018 03 17 10:15:38.084 [119] network: IP:192.168.0.10 fd:20 normal client disconnected after making 1 requests

2018 03 17 10:15:38.084 [119] warn: advice: [IP:192.168.0.10] process: transfer failed

2018 03 17 10:15:38.084 [119] error: ssl: ClientEncrypt: failed encryption :anonymous@192.168.0.10 for www.irctc.co.in:443

2018 03 17 10:15:38.083 [119] error: ssl: EncryptC:987 ssl_ctx:NULL

**2018 03 17 10:15:38.083 [119] error: ssl: failed : reading key from /var/db/safesquid/ssl/certs/irctc.co.in/www.irctc.co.in**

If you face the above issues you have to remove all the HTTPS websites that you access from path **/var/db/safesquid/ssl**

Run the below command and check for the file

```
cd /var/db/safesquid/ssl
```
root@sabproxy:/var/db/safesquid/ssl# ll

total 24

drwxrwxr-- 6 ssquid root 4096 Jul 28 17:06 ./

drwxrwxr-- 7 ssquid root 4096 Jul 28 17:06 ../

drwxrwxr-- 2 ssquid root 4096 Aug 10 13:34 badcerts/

drwxrwxr-- 29 ssquid root 4096 Sep 2 16:27 certs/

drwxrwxr-- 2 ssquid root 4096 Jul 28 17:06 goodcerts/

drwxrwxr-- 2 ssquid root 4096 Jul 28 17:06 serials/

root@sabproxy:/var/db/safesquid/ssl# cd certs/

root@sabproxy:/var/db/safesquid/ssl/certs#rm -rf *

Repeat the above step for **goodcerts**/ and **badcerts**/ **and access those websites from the browser.**

### Case 3: Displaying ERROR "SSL Connection to webmail.safesquid.net:2096 denied S_X509_DNS_MISMATCH: SSL Certificate has DNS errors."

When you access any website and face the error "S_X509_DNS_MISMATCH: SSL Certificate has DNS errors" via proxy even if you properly configured the SSL certificate inside the browser, that means the certificate of that website is broken.

SafeSquid stores all those websites whose certificates are broken under this path **/var/db/safesquid/ssl/badcerts**/

You should find the domain of the website at the given path: **/var/db/safesquid/ssl/badcerts**/

Go to that domain name folder by command: 
```
cd domain-name
```
You should find the FQDN on that website**. (e.g. webmail.safesquid.net)**

Go to that FQDN by command: **vi FQDN (e.g. vi webmail.safesquid.net)**

Here you should find mismatch domain name

root@dev:~# cd /var/db/safesquid/ssl/

root@dev:/var/db/safesquid/ssl# ll

total 52

drwxrwxr-- 2 ssquid root 4096 Jul 4 2017 serials

drwxrwxr-- 2 ssquid root 4096 Mar 9 16:30 goodcerts

**drwxrwxr-- 71 ssquid root 4096 Mar 9 16:45 badcerts**

drwxrwxr-- 1022 ssquid root 36864 Mar 12 12:16 certs

root@dev:/var/db/safesquid/ssl# cd badcerts/

root@dev:/var/db/safesquid/ssl/badcerts# ll

total 276

drwxrwxr-- 2 ssquid root 4096 Mar 8 12:07 1rx.io

drwxrwxr-- 2 ssquid root 4096 Mar 8 12:32 ravenad.com

drwxrwxr-- 2 ssquid root 4096 Mar 8 15:36 microsoft.com

drwxrwxr-- 2 ssquid root 4096 Mar 8 16:04 indiatimes.com

drwxrwxr-- 2 ssquid root 4096 Mar 8 19:08 quoracdn.net

drwxrwxr-- 2 ssquid root 4096 Mar 9 15:25 iis.net

**drwxrwxr-- 2 ssquid root 4096 Mar 9 16:27 safesquid.net**

root@dev:/var/db/safesquid/ssl/badcerts# cd safesquid.net/

root@dev:/var/db/safesquid/ssl/badcerts/safesquid.net# ll

total 8

**-rw-rw-r-- 1 ssquid root 5904 Mar 9 15:43 webmail.safesquid.net**

root@dev:/var/db/safesquid/ssl/badcerts/safesquid.net# vi webmail.safesquid.net

---

**S_X509_DNS_MISMATCH: SSL Certificate has DNS errors**.

---

Certificate:

Data:

Version: 3 (0x2)

Serial Number:

f8:bd:5e:60:3d:26:db:5d:1a:c0:6a:05:92:ee:c7:81

Signature Algorithm: sha256WithRSAEncryption

Issuer: C=US, ST=TX, L=Houston, O=cPanel, Inc., CN=cPanel, Inc. Certification Authority

Validity

Not Before: Jul 23 00:00:00 2017 GMT

Not After : Jul 23 23:59:59 2018 GMT

Subject: OU=Domain Control Validated, OU=PositiveSSL, **CN=alpha.surebrowse.net**

Subject Public Key Info:

Public Key Algorithm: rsaEncryption

Public-Key: (2048 bit)

To ALLOW Block domain mismatch errors of HTTPS websites you have to create a policy:

![Creating a new policy in request types under custom settings section](/img/Troubleshooting/SSL_certification_errors/image1.webp)

![Creating a policy by adding all the required values ](/img/Troubleshooting/SSL_certification_errors/image2.webp)

![Creating a new policy in Access profiles section](/img/Troubleshooting/SSL_certification_errors/image3.webp)

![adding the required values](/img/Troubleshooting/SSL_certification_errors/image4.webp)

![Clicking on Inspection policies in HTTPS inspection under Real time content security section](/img/Troubleshooting/SSL_certification_errors/image5.webp)

![Creating a new policy ](/img/Troubleshooting/SSL_certification_errors/image6.webp)

![showing settings to configure a security policy, allowing "block domain mismatch in the website ssl certificate"](/img/Troubleshooting/SSL_certification_errors/image7.webp)

![moving up the created policy just above the last policy](/img/Troubleshooting/SSL_certification_errors/image8.webp)

![saving configuration globally](/img/Troubleshooting/SSL_certification_errors/image9.webp)
