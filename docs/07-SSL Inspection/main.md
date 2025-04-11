## [Setup SSL Inspection](/docs/07-SSL%20Inspection/Setup%20SSL%20Inspection.md)

On the [Self-Service Portal](/docs/05-Architecture/Management_of_Self-Service_Portal.md),
configure your Enterprise CA as the Root SSL certificate. If you do not have an Enterprise CA, [generate SafeSquid's Self-Signed Certificate](https://help.safesquid.com/portal/en/kb/articles/setting-up-ssl-certificates-from-self-service-portal).
[Import the Root SSL certificate into client browsers' trusted authorities](https://help.safesquid.com/portal/en/kb/articles/importing-your-ssl-certificate-into-internet-explorer-or-chrome).

## [Bypass SSL Inspection](/docs/07-SSL%20Inspection/Bypass%20SSL%20Inspection.md)

You may need to bypass SSL Inspection for websites that are not subject to decryption by proxy, like intranet websites. You may also choose to bypass inspection of requests with personal identification information.
