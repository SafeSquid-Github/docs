# Integrate AD or OpenLDAP with SafeSquid

## Overview

Active directory information is used to authorize/authenticate the users and computers which are part of your network. Active directory objects are mainly a set of attributes like domain, Organization Unit (OU), user, group, subnet etc. In any Active directory domain controller is responsible for all the authorizations/authentications inside a domain. If any user has access to a domain, he/she can logon from anywhere and any computer in that domain. Active directory Organization unit (OU) can appear only inside a domain and can be used to denote a specific department, location, team, etc. OUs are unique inside a domain. Organization Unit contains objects like users, groups, computers, etc.

Active directory user is part of organization and has unique idenity in the domain. Also, each user has a unique SID which authorizes user and allow/deny users to access the network resources. Each account is unique and is secured by password.

**Why should we use Active directory services?**

Active directory services are highly secured they may have layered security which consists of policies and permissions for security at different levels. Objects are usually located anywhere yet can access the domain/network resources securely. Also, Active directory services are easily scalable and extensible. Active directory services have easy and efficient mechanism to locate an object. Users can have the same environmental settings immaterial of which computer or location they logon from.

**Why is a proxy-based web-gateway integrated to a Microsoft AD or OpenLDAP?**

Network enterprises that have a large number of users, popularly manage user credentials via a centralized system.

The centralized system ensures user identification across all the networked enterprise resources and services.

Users too benefit immensely, as they need a singular credential to access anything across the network enterprise.

Microsoft's Active Directory, and OpenLDAP based various Directory Services like Novell's e-Directory are extremely popular for setting up a centralized user identity management system.

Almost all Directory services also offer role, and hierarchy-based grouping of users. Most enterprise class networked resources and services also allow control of user access, and rights based on their group membership.

A proxy-based web gateway is an application layer firewall service that distributes Internet Access to people in the networked enterprise. It is thus essentially a network service.

A Web Gateway when integrated to a Directory Service, can:

Authenticate the users, based on their Directory Service Credentials,

Control their access to the web depending upon their enterprise role and hierarchy,

Log and report their activity, in a manner that the HR managers can analyze internet usage individually and of groups of people.

## Tutorial Goals

In this tutorial you will see how to integrate your Microsoft Active Directory or OpenLDAP service to a proxy server easily.

With the use of SafeSquid SWG WebGUI it is easy to perform the necessary integration process, you can create the policies to control access, and validate the success.

At the end we will inspect SafeSquid's logs to inspect how the internet usage of any user identified via the Directory Service, is recorded for the purpose of analytics.

SafeSquid can be integrated to the Microsoft Active Directory for SSO/Kerberos based user identification. The additional steps required for Kerberos configuration are discussed in another tutorial.

## Prerequisites

Collect the following information before starting integration

LDAP Server Fully Qualified Domain Name (FQDN) and IP address.

LDAP Administrator User name and Password. (You can provide any user from LDAP server who has administrator rights)

LDAP Server Basedn

LDAP Server Domain name

**Note :**

Add SafeSquid server DNS entry in your Active Directory Server. [Link](https://help.safesquid.com/portal/en/kb/articles/add-safesquid-server-dns-entry-in-your-active-directory-server)

Make sure that your AD Domain must be resolvable from all clients and SafeSquid Server[. Link](https://help.safesquid.com/portal/en/kb/articles/validate-ip-addresses-and-the-systems-are-reachable-on-the-network)

## Integration of Microsoft Active Directory

Integration of Active Directory include the following types of Authentication.

**Simple Authentication**

Simple authentication is a type of interactive authentication to the user. If you configure simple authentication the user will be prompted for credentials for every new session opened.

Read more about [Simple Authentication](https://help.safesquid.com/portal/en/kb/articles/integrate-active-directory-for-simple-authentication)

**SSO Authentication**

SSO authentication is a type of non-interactive authentication to the user. In SSO authentication once the user logged into his/her system then that credentials will be used for all sessions opened by that user.

Read more about [SSO Authentication](https://help.safesquid.com/portal/en/kb/articles/integrate-active-directory-for-sso-authentication)

## Integration of OpenLDAP

Integrate your OpenLDAP server

Read more about [OpenLDAP Integration](https://help.safesquid.com/portal/en/kb/articles/integrate-openldap-with-safesquid)

## Integration Of AD

Read more about [Integrate AD](https://help.safesquid.com/portal/en/kb/articles/integrate-ad)
