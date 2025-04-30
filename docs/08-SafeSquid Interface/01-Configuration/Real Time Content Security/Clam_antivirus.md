---
title: Clam Antivirus  
description: Integrate ClamAV with SafeSquid Secure Web Gateway to scan and block malware at the gateway level, preventing viruses, worms, and trojans from entering your network.  
keywords:  
- clamav integration  
- gateway antivirus  
- malware detection proxy  
- safesquid antivirus setup  
- virus scanning web proxy  
---

## Overview
Clam AntiVirus (ClamAV™), is an antivirus software toolkit for Windows and Unix-like operating systems. One of its main uses is with mail exchange servers as a server-side email virus scanner. Distributed under the terms of the GNU General Public License (GPL), ClamAV is free software. Both ClamAV and its updates are made available free of charge.

SafeSquid SWG, both for Linux and Windows, has a ready-to-use, built-in client for ClamAV Daemon.

ClamAV can be used to scan all incoming content for viruses, worms, Trojans and other malware, at the gateway, before the content is delivered to the users.

Infected files detected by ClamAV, are blocked at the gateway level and prevented from entering into the network.

## Global
With this antivirus feature you can detect and block files containing viruses known to the ClamAV daemon scanner.

![Clamv.jpg](/img/Configure/Real_Time_Content_Activity/Clam_antivirus/image1.webp)

### Enabled
Enable or Disable ClamAV.

**TRUE:** Enable clamav section.

**FALS**E: Disable the clamav section.

### ClamAV hostname or Socket path
Specify the host on which the ClamAV daemon is running or the path to its local socket.

### ClamAV port
Specify the Port of ClamAV daemon.

Leave it blank if you are using a local socket. The default port will be 3310.

### Default template
You can send the name of the Template when this entry is matched.

Leave it blank for the Default template.

## ClamAV
![Clamv-policy.jpg](/img/Configure/Real_Time_Content_Activity/Clam_antivirus/image2.webp)

### Enabled
Enable or Disable this entry

**TRUE**: Enable this entry.

**FALSE**: Disable this entry.

### Comment
For documentation and future references, explain the relevance of this entry with your policies.

That is, by reading the policies, a future user can understand the purpose of that entry.

### Profiles
Specify the Profiles applicable for this entry.

This entry will be applicable only if the connection has any one of the specified profiles.

Leave it Blank, to apply for all connections irrespective of any applied profile.

To avoid application to a connection that has a profile, use a negated profile (!profile).

### Template
Specify the name of the template to send when this entry is matched.