---
title: SafeSearch Not Working  
Description: Troubleshoot Safe Search issues in SafeSquid when inappropriate content is accessible despite enabling all Safe Search entries. Includes HTTPS Inspection validation, SSL certificate checks, and policy verification.  
Keywords:  
- SafeSquid Safe Search  
- HTTPS inspection troubleshooting  
- SSL certificate check  
- block pornography policy  
- inappropriate content search  
---

You have enabled all the entries required for Safe Searches, but you are able to access the in appropriate content through search engines, then follow the below steps to Troubleshoot

Test your configuration once. All required entries must be enabled.

Then test your HTTPS Inspection enabled or not. If if not enabled see our document - [How to configure HTTPS inspection](/docs/07-SSL%20Inspection/Setup%20SSL%20Inspection.md)

Then check the SSL certificate in the browser. - [Testing the SSL Certificate (in Firefox)](/docs/12-Server%20Security/SSL%20Certificate%20Validation.md)

Removes the cache and restart the browser and test it again.

You may see block template when "Text Analyzer" and default entry to block pornogrophy in policies and profiles are enabled.
