# ClamAV

## Overview

Clam AntiVirus (ClamAV), is an antivirus software toolkit for Windows and Unix-like operating systems. One of its main uses is with mail exchange servers as a server-side email virus scanner. Distributed under the terms of the GNU General Public License (GPL), ClamAV is free software. Both ClamAV and its updates are made available free of charge.

SafeSquid SWG, both for Linux and Windows, has a ready to use, built-in client for ClamAV Daemon.

ClamAV can be used to scan all in-coming content for virus, worm, Trojan and other malware, at the gateway, before the content is delivered to the users.

Infected file detected by ClamAV, are blocked at the gateway level, and prevent from entering into the network.

## Global

![ClamAV global ](/img/How_To/ClamAV/image1.webp)

### Enabled

Enable or Disable ClamAV

**TRUE: Enable clamav section.**

**FALSE: Disable clamav section.**

### ClamAV hostname or Socket path

Specify the host on which ClamAV daemon is running or path to its local socket.

### ClamAV port

Specify Port of ClamAV daemon.

Leave it blank if you are using local socket. The default port will be 3310.

### Default template

You can send name of the Template, when this entry is matched.

Leave it blank for Default template.

## clamav

![clamAV entry in ClamAV section](/img/How_To/ClamAV/image2.webp)

### Enabled

Enable or disable this entry

**TRUE: Enable this entry.**

**FALSE: Disable this entry.**

### Comment

For documentation, and future references, explain the relevance of this entry with your policies.

That is, by reading the policies, a future user can understand the purpose of that entry.

### Profiles

Specify the Profiles applicable for this entry.

This entry will be applicable only if the connection has any one of the specified profiles

Leave it Blank, to apply for all connections irrespective of any applied profile.

To avoid application to a connection that has a profile, use negated profile (! profile).

### Template

Specify name of the template to send when this entry is matched.
