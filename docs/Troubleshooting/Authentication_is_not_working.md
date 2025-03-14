# Authentication is Not Working

## Issues

1. If your LDAP configuration is improper, you should face an authentication issue.

1. If your username or password is wrong, you should face an authentication issue.

1. In the case of SSO authentication, if your access policies under the access restriction section are not properly configured, you should face an authentication issue.

1. In the case of SSO authentication, if you entered the wrong password multiple times for LDAP fail-over, your password is saved under **Reports > password** cache on the SafeSquid interface, you should face an authentication issue.

1. If SSO configuration is improperly configured, you should face an authentication issue.

1. If time and date synchronization is not the same among proxy servers, active directories, and client machines, you should face an authentication issue.

## Solution

### Case 1

**If your LDAP configuration is improper, you should face an authentication issue.**

Integrate Active Directory for Simple Authentication as per the link so that your authentication issue will be solved.

**Verify it from SafeSquid Logs.**

GET http://safesquid.cfg/ HTTP/1.1

Host: safesquid.cfg

User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0

Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8

Accept-Language: en-US,en;q=0.5

Accept-Encoding: gzip, deflate

Connection: keep-alive

Upgrade-Insecure-Requests: 1

Proxy-Authorization: Basic c2FtaWRoYWs6c2FydmE=

2019 04 08 16:34:56.398 [11750] debug: ldap: set_dn:1009 ip:[192.168.0.10] user:[SAMIDHAK@SAFESQUID.TEST] DN:[CN=samidhak,DC=safesquid,DC=test] Groups:[DC=safesquid DC=test,CN=MANAGERS DC=safesquid DC=test,SAMIDHAK@SAFESQUID.TEST]

2019 04 08 16:34:56.398 [11750] error: security: [IP:192.168.0.10] password cache: authentication failed for samidhak

2019 04 08 16:34:56.399 [11750] debug: header: to 192.168.0.10:

HTTP/1.1 407 Proxy Authentication Required

X-Powered-By: safesquid-2019.0401.1624.3-swg-standard

Proxy-Authenticate: Basic realm="sabproxy.safesquid.test"

Content-Length: 0

Proxy-Connection: close

X-SafeSquid-Client-ID: 11750.0

### Case 2

**If your username or password is wrong, you should face an authentication issue.**

Make sure about your username and password for any authentication whether it will be a Simple authentication link, Basic authentication link, or Interface authentication link.

### Case 3

**In the case of SSO authentication, if policy configuration under the Access Restriction section is improper, you should face an authentication issue.**

Make sure about your policy configuration under the Access Restriction section as per the link

### Case 4

**In the case of SSO authentication, if an authentication challenge appears on the interface and you enter the wrong passwords multiple times for LDAP fail-over your password should be saved/stored under Reports > password cache on SafeSquid Interface, you should face an authentication issue.**

Access SafeSquid Interface LINK and remove all the passwords that you entered from Reports > password cache.

### Case 5

**If SSO configuration is improper, you should face an authentication issue.**

Before Integrating Active Directory, for SSO Authentication make sure your DNS configuration and NTP server configuration are as per the specified DNS and NTP server Configuration.

For Integrating Active Directory for SSO Authentication follow the [link](https://help.safesquid.com/portal/en/kb/articles/integrate-active-directory-for-sso-authentication) so that your authentication issue will be solved.

### Case 6

**If time and date synchronization is not the same among the proxy servers, active directories, and client machines, you should face an authentication issue.**

Verify the time and date synchronization among the proxy server, active directory, and client machine using the following command.

**Command**:

root@sabproxy:~# ntpdate server_IP

Example:

In our case Proxy server IP address: 192.168.221.222

Active Directory IP address: 192.168.221.1

Client machine IP address: 192.168.221.212 (Windows test machine)

Verify time and date synchronization from the proxy server (192.168.221.222). Run below command:

**Command**:

**root@sabproxy:~# ntpdate 192.168.221.1**

**25 Jan 16:44:14 ntpdate[22275]: the NTP socket is in use, exiting**

**Time synchronization between the Proxy server and Act**

Same way, verify Time synchronization between the Proxy server and the Client machine as well as the Active Directory and the Client machine.

All three machines must be at the same time and date.
