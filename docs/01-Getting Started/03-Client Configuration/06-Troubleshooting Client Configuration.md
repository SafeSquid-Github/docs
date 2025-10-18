---
title: "Troubleshooting Client Configuration"
description: "Comprehensive diagnostic procedures and resolution steps for common SafeSquid client configuration issues and connectivity problems"
keywords:
  - SafeSquid troubleshooting
  - proxy connection issues
  - client configuration problems
  - proxy authentication errors
  - SSL certificate issues
  - PAC file problems
---

# Troubleshooting Client Configuration

## Problem Statement

Organizations encounter common client configuration issues requiring systematic diagnostic procedures and resolution steps to maintain reliable proxy connectivity and security enforcement. Client configuration problems can range from connection failures and authentication errors to SSL certificate issues and PAC file problems, requiring comprehensive troubleshooting procedures to ensure rapid issue resolution. This troubleshooting guide provides systematic diagnostic procedures and resolution steps for common client-side proxy configuration issues.

## Key Benefits

**Rapid Issue Resolution**: Comprehensive troubleshooting procedures enable rapid identification and resolution of client configuration issues, minimizing downtime and maintaining security enforcement. This systematic approach reduces resolution time while ensuring consistent problem-solving methodology.

**Preventive Maintenance**: Troubleshooting procedures help identify potential issues before they impact users, enabling proactive maintenance and configuration optimization. This preventive approach reduces reactive support requirements while improving overall system reliability.

**Knowledge Transfer**: Detailed troubleshooting procedures enable knowledge transfer to support teams and administrators, reducing dependency on specialized expertise while ensuring consistent issue resolution across the organization.

## Prerequisites

**Client-Side Preparations**: Ensure access to client systems for diagnostic procedures and configuration verification. Verify administrative privileges for configuration changes and troubleshooting procedures.

**SafeSquid-Side Setup**: Ensure SafeSquid proxy services are running and accessible with appropriate logging enabled for diagnostic purposes. Verify proxy server configuration and policy settings.

**System Requirements**: Client systems must have appropriate tools for network diagnostics and configuration verification. Network connectivity must be established between client systems and SafeSquid proxy servers.

## Call to Action

### Common Client Configuration Issues

#### Proxy Connection Refused Errors

**Symptoms**: Browser displays "Connection refused" or "Proxy server not responding" errors when attempting to access websites through SafeSquid proxy.

**Diagnostic Procedures**:
1. **Verify SafeSquid Service Status**:
   ```bash
   # Check SafeSquid service status
   systemctl status safesquid
   
   # Check SafeSquid process
   ps aux | grep safesquid
   
   # Check SafeSquid logs
   tail -f /var/log/safesquid/access.log
   ```

2. **Test Network Connectivity**:
   ```bash
   # Test proxy server connectivity
   telnet 192.168.1.100 8080
   
   # Test HTTP connectivity through proxy
   curl -I --proxy http://192.168.1.100:8080 http://example.com
   
   # Test HTTPS connectivity through proxy
   curl -I --proxy http://192.168.1.100:8080 https://example.com
   ```

3. **Verify Firewall Rules**:
   ```bash
   # Check firewall rules on proxy server
   iptables -L -n | grep 8080
   
   # Check firewall rules on client
   iptables -L -n | grep 8080
   ```

**Resolution Steps**:
1. Restart SafeSquid service if not running
2. Verify proxy server IP address and port configuration
3. Check firewall rules and network connectivity
4. Verify proxy server is listening on correct ports
5. Test proxy connectivity from different client systems

#### Authentication Failures

**Symptoms**: Browser displays authentication prompts or "407 Proxy Authentication Required" errors when accessing websites through SafeSquid proxy.

**Diagnostic Procedures**:
1. **Check Authentication Configuration**:
   ```bash
   # Verify SafeSquid authentication settings
   grep -i auth /etc/safesquid/safesquid.conf
   
   # Check authentication logs
   tail -f /var/log/safesquid/auth.log
   ```

2. **Test Authentication Credentials**:
   ```bash
   # Test authentication via curl
   curl -I --proxy http://username:password@192.168.1.100:8080 http://example.com
   
   # Test authentication via wget
   wget --proxy-user=username --proxy-password=password http://example.com
   ```

3. **Verify User Account Status**:
   ```bash
   # Check user account in SafeSquid
   # Access SafeSquid WebGUI → Users → User Management
   # Verify user account is active and has appropriate permissions
   ```

**Resolution Steps**:
1. Verify username and password are correct
2. Check user account status in SafeSquid
3. Verify authentication method compatibility
4. Reset user password if necessary
5. Test authentication with different credentials

#### SSL/TLS Certificate Issues

**Symptoms**: Browser displays SSL certificate warnings or "Certificate not trusted" errors when accessing HTTPS websites through SafeSquid with SSL inspection enabled.

**Diagnostic Procedures**:
1. **Check SSL Certificate Installation**:
   ```bash
   # Check SafeSquid root CA certificate
   openssl x509 -in /etc/safesquid/certs/ca.crt -text -noout
   
   # Verify certificate chain
   openssl verify -CAfile /etc/safesquid/certs/ca.crt /etc/safesquid/certs/server.crt
   ```

2. **Test SSL Connectivity**:
   ```bash
   # Test SSL connectivity through proxy
   openssl s_client -connect 192.168.1.100:8443 -proxy 192.168.1.100:8080
   
   # Test HTTPS website through proxy
   curl -I --proxy http://192.168.1.100:8080 https://example.com
   ```

3. **Check Browser Certificate Store**:
   - Open browser → Settings → Privacy & Security → Certificates
   - Verify SafeSquid root CA certificate is installed
   - Check certificate trust settings

**Resolution Steps**:
1. Download SafeSquid root CA certificate
2. Install certificate in browser trust store
3. Verify certificate installation and trust settings
4. Test SSL connectivity and certificate validation
5. Clear browser cache and restart browser

#### Bypass List Not Working

**Symptoms**: Internal domains are being routed through SafeSquid proxy instead of bypassing proxy configuration, causing connectivity issues with internal resources.

**Diagnostic Procedures**:
1. **Check Bypass List Configuration**:
   ```bash
   # Check system proxy bypass list
   echo $no_proxy
   
   # Check browser bypass list settings
   # Verify bypass list in browser proxy settings
   ```

2. **Test Internal Domain Resolution**:
   ```bash
   # Test DNS resolution for internal domains
   nslookup internal.company.com
   
   # Test connectivity to internal domains
   ping internal.company.com
   ```

3. **Verify Bypass List Syntax**:
   - Check bypass list format and syntax
   - Verify domain patterns and wildcards
   - Test bypass list with different domain formats

**Resolution Steps**:
1. Verify bypass list syntax and format
2. Check DNS resolution for internal domains
3. Test bypass list with different domain patterns
4. Update bypass list configuration if necessary
5. Restart applications after configuration changes

#### PAC File Not Loading or Executing

**Symptoms**: Browser does not use PAC file for proxy selection or displays PAC file loading errors.

**Diagnostic Procedures**:
1. **Test PAC File Accessibility**:
   ```bash
   # Test PAC file URL accessibility
   curl -I http://pac-server.company.com/proxy.pac
   
   # Check PAC file content
   curl http://pac-server.company.com/proxy.pac
   ```

2. **Verify PAC File JavaScript Syntax**:
   ```bash
   # Test PAC file JavaScript syntax
   node -c proxy.pac
   
   # Check PAC file function syntax
   # Verify FindProxyForURL function is properly defined
   ```

3. **Check Browser PAC Configuration**:
   - Verify PAC file URL in browser settings
   - Check browser console for JavaScript errors
   - Test PAC file with different browsers

**Resolution Steps**:
1. Verify PAC file URL is accessible
2. Check PAC file JavaScript syntax and logic
3. Test PAC file with different browsers
4. Update PAC file configuration if necessary
5. Clear browser cache and restart browser

#### Application Not Respecting Proxy Settings

**Symptoms**: Applications bypass proxy configuration and connect directly to internet, bypassing SafeSquid security enforcement.

**Diagnostic Procedures**:
1. **Check Application Proxy Settings**:
   - Verify application-specific proxy configuration
   - Check system-wide proxy settings
   - Test application with different proxy configurations

2. **Monitor Network Traffic**:
   ```bash
   # Monitor network traffic to identify direct connections
   netstat -an | grep :80
   netstat -an | grep :443
   
   # Use network monitoring tools
   tcpdump -i any host 192.168.1.100
   ```

3. **Test Application Connectivity**:
   ```bash
   # Test application connectivity through proxy
   # Verify application logs for connection attempts
   ```

**Resolution Steps**:
1. Configure application-specific proxy settings
2. Verify system-wide proxy configuration
3. Check application documentation for proxy support
4. Test application with different proxy configurations
5. Consider alternative proxy deployment methods

### Network Connectivity Testing Procedures

#### Basic Connectivity Tests

**Ping Test**:
```bash
# Test basic connectivity to proxy server
ping 192.168.1.100

# Test connectivity to external websites
ping google.com
```

**Port Connectivity Test**:
```bash
# Test proxy port connectivity
telnet 192.168.1.100 8080
telnet 192.168.1.100 8443

# Test HTTP port connectivity
telnet 192.168.1.100 80
telnet 192.168.1.100 443
```

**DNS Resolution Test**:
```bash
# Test DNS resolution
nslookup google.com
nslookup 192.168.1.100

# Test internal DNS resolution
nslookup internal.company.com
```

#### Proxy-Specific Tests

**HTTP Proxy Test**:
```bash
# Test HTTP connectivity through proxy
curl -I --proxy http://192.168.1.100:8080 http://example.com

# Test HTTPS connectivity through proxy
curl -I --proxy http://192.168.1.100:8080 https://example.com

# Test with authentication
curl -I --proxy http://username:password@192.168.1.100:8080 http://example.com
```

**PAC File Test**:
```bash
# Test PAC file accessibility
curl -I http://pac-server.company.com/proxy.pac

# Test PAC file content
curl http://pac-server.company.com/proxy.pac
```

### Browser Cache and Settings Reset

#### Clear Browser Cache

**Chrome Cache Clear**:
1. Open Chrome → Settings → Privacy and Security
2. Click "Clear browsing data"
3. Select "All time" and check all options
4. Click "Clear data"

**Firefox Cache Clear**:
1. Open Firefox → Settings → Privacy & Security
2. Scroll to "Cookies and Site Data"
3. Click "Clear Data"
4. Select all options and click "Clear"

**Safari Cache Clear**:
1. Open Safari → Develop → Empty Caches
2. Or use Command+Option+E shortcut

#### Reset Browser Settings

**Chrome Settings Reset**:
1. Open Chrome → Settings → Advanced
2. Scroll to "Reset and clean up"
3. Click "Restore settings to their original defaults"
4. Click "Reset settings"

**Firefox Settings Reset**:
1. Open Firefox → Help → Troubleshooting Information
2. Click "Refresh Firefox"
3. Confirm reset in popup window

## Solution Verification

**Issue Resolution Verification**: Verify identified issues are resolved and client configuration is working correctly with proper proxy connectivity and security enforcement.

**Performance Validation**: Test client performance after issue resolution to ensure troubleshooting procedures do not impact system performance or user experience.

**Comprehensive Testing**: Test all client configuration methods to ensure comprehensive coverage and identify any remaining issues or configuration problems.

**Documentation Update**: Update troubleshooting procedures based on resolved issues to improve future issue resolution and knowledge transfer.

## Troubleshooting Guide

**Escalation Procedures**: Document escalation procedures for complex issues requiring specialized expertise or vendor support. Define when to escalate issues and who to contact for different problem types.

**Preventive Measures**: Implement preventive measures to reduce common client configuration issues, including regular configuration audits and proactive monitoring.

**Knowledge Base Maintenance**: Maintain knowledge base with resolved issues and solutions to improve future troubleshooting efficiency and knowledge transfer across support teams.

