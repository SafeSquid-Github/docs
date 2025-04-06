## [Setup SSL Inspection](https://help.safesquid.com/portal/en/kb/articles/setup-https-inspection)

For deep content inspection of encrypted HTTPS traffic, [enable HTTPS Inspection](https://help.safesquid.com/portal/en/kb/articles/https-inspection) to safeguard from concealed threats.

On the [Self-Service Portal](https://help.safesquid.com/portal/en/kb/articles/access-the-self-service-portal),
configure your Enterprise CA as the Root SSL certificate. If you do not have an Enterprise CA, [generate SafeSquid's Self-Signed Certificate](https://help.safesquid.com/portal/en/kb/articles/setting-up-ssl-certificates-from-self-service-portal).
[Import the Root SSL certificate into client browsers' trusted authorities](https://help.safesquid.com/portal/en/kb/articles/importing-your-ssl-certificate-into-internet-explorer-or-chrome).

## [Bypass SSL Inspection](https://help.safesquid.com/portal/en/kb/articles/bypass-https-inspection-by-using-request-types)

You may need to bypass SSL Inspection for websites that are not subject to decryption by proxy, like intranet websites. You may also choose to bypass inspection of requests with personal identification information.
