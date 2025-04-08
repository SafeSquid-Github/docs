# Integrate a Linux Host with a Windows AD for Kerberos SSO authentication

## Overview

Kerberos Authentication support is particularly useful for Enterprise networks that have a Microsoft AD based Domain controller. By properly configuring the necessary Kerberos related factors, your enterprise Internet users can optionally enjoy Windows Integrated Authentication. Windows Integrated Authentication is a non-interactive authentication process, that uses SSO authentication. SSO ensures that your users do not have to manually provide their user credentials as username / password to access your networked enterprise resources and services, yet their access is restricted as specified. SSO, thus not only just adds convenience to the overall user experience, but also enhances security.

## SSO configuration 

SSO configuration includes following steps

## Integrate your Active Directory with SafeSquid

You should integrate your active directory for SSO authentication.

Read more about [Integrate Active Directory for SSO Authentication](https://help.safesquid.com/portal/en/kb/articles/integrate-active-directory-for-sso-authentication)

## Kerberos SSO Authentication Setup

Read more about [Kerberos SSO Authentication Setup](https://help.safesquid.com/portal/en/kb/articles/kerberos-sso-authentication-setup)

## Testing your Kerberos SSO authentication setup

Read more about [Testing your Kerberos SSO Authentication Setup](https://help.safesquid.com/portal/en/kb/articles/testing-your-kerberos-sso-authentication-setup)


# Integrate Active Directory For Simple Authentication 

## Overview

Here I am integrating my Active Directory with following information. 

Active Directory FQDN : ad.safesquid.test

IP Address : 192.168.221.1

Domain of Active Directory : safesquid.test

Base Dn : dc=safesquid,dc=test

User Name : administrator@safesquid.test

See more about [Integrate LDAP](https://help.safesquid.com/portal/en/kb/articles/1-2-integration-of-ldap) section, here we explained the working of each field in the Integrate LDAP section. 

## Prerequisites

Make sure that all the values (LDAP server FQDN, LDAP server IP, Username, password, base dn, domain ) in configuration are correct. If any value is wrong SafeSquid will fail to fetch the entries.

## [Access the SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

![Application Setup](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image1.webp)

### Go to Application Setup



![Integrate LDAP](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image2.webp)

### Go to Integrate LDAP



![Ensure LDAP Enabled](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image3.webp)

![Ensure LDAP Enabled](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image4.webp)

### Ensure LDAP Section is Enabled



![Go to LDAP Servers](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image5.webp)

![Go to LDAP Servers](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image6.webp)

![Go to LDAP Servers](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image7.webp)

### Go to LDAP Servers

![Create New Entry](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image8.webp)

### Create the New Entry



![Additional Screenshots](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image9.webp)

![Additional Screenshots](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image10.webp)

![Additional Screenshots](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image11.webp)

![Additional Screenshots](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image12.webp)

![Additional Screenshots](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image13.webp)

![Additional Screenshots](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image14.webp)

![Additional Screenshots](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image15.webp)

![Additional Screenshots](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image16.webp)

![Additional Screenshots](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image17.webp)

![Additional Screenshots](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image18.webp)

![Additional Screenshots](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image19.webp)

![Additional Screenshots](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image20.webp)



![Test User Extraction](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image21.webp)

### Test User Extraction



![Save Configuration](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image22.webp)

![Save Configuration](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image23.webp)

### Save Configuration

![Final Screenshot](/img/How_To/Integrate_Active_Directory_For_Simple_Authentication/image24.webp)

When you click on Save config, it will give a prompt for asking the confirmation to store your configuration into the cloud.
Select Yes only in below cases:

if you want to use this same configuration in other SafeSquid instances.

if your total configuration in all sections is completed and validated. 

Otherwise select No and click on submit.

### Enable authentication for LDAP users

Read more about [Enable authentication for LDAP users](https://help.safesquid.com/portal/en/kb/articles/enable-authentication-for-ldap-users)

### Troubleshooting

[LDAP entries are not fetched](https://help.safesquid.com/portal/en/kb/articles/ldap-entries-are-not-fetched)

[Authentication is not working](https://help.safesquid.com/portal/en/kb/articles/authentication-is-not-working)


# Integrate Active Directory for SSO Authentication

## Overview

In given example we are integrating an Active Directory for SSO authentication.

**Your Active directory (AD) FQDN**: ad.safesquid.test (You should get your AD FQDN from this location : AD ( Start > Control Panel > System > Full Computer name))

**Your Active directory (AD) IP Address**: 192.168.221.1

**Domain of Active Directory (AD)**: safesquid.test

**Base Dn of AD**: dc=safesquid,dc=test

**User Name**: administrator@safesquid.test (**User name should be any user from AD having administrative permissions**)

Monit service must be Up. Verify it using command:

root@sabproxy: ~## pidof monit

19940

See more about Integrate LDAP section, here we explained the working of each field in the Integrate LDAP section.

## Prerequisites

Make sure that all the values (LDAP server FQDN, LDAP server IP, Username, password, base dn, domain) while configuration are correct. If any value is inappropriate then SafeSquid will fail to fetch the entries.

**Step 1**: Specify Name Server Addresses. Follow [Link](https://help.safesquid.com/portal/en/kb/safesquid-labs/installation/using-safesquid-appliance-builder)

**Step 2**: Specify Time Synchronization Server. Follow [Link](https://help.safesquid.com/portal/en/kb/safesquid-labs/installation/using-safesquid-appliance-builder)

(**Note**: Time Synchronization of AD server and Proxy server should be same. Verify it using "date" command)

**Step 3**: Add DNS entry of SafeSquid server in your Active Directory Server. Follow [Link](https://help.safesquid.com/portal/en/kb/articles/add-safesquid-server-dns-entry-in-your-active-directory-server)

**Step 4**: Make sure that your AD Domain must be resolvable from all clients and SafeSquid Server. For troubleshooting. Follow [Link](https://help.safesquid.com/portal/en/kb/articles/validate-ip-addresses-and-the-systems-are-reachable-on-the-network)

Once you complete all the above steps correctly then you are ready for SSO Configuration.

## [Access the SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

![clicking on configure in safesquid interface](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image1.webp)

## Go to Application Setup

![clicking on application setup](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image2.webp)

## Go to Integrate LDAP

![going to integrate LDAP in application setup section](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image3.webp)

## Ensure LDAP Section is enabled

![ensuring the LDAP section is enabled. by default it is set as false](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image4.webp)

![clicking on the global edit ](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image5.webp)

![selecting true from the drop down menu](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image6.webp)

![clicking on save policy](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image7.webp)

## Go to LDAP servers

![going to LAP servers tab](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image8.webp)

## Creating new entry

![creating a new entry by clicking add new button](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image9.webp)

![some default values are set to some options. leaving enabled as true and writing comment for future reference](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image10.webp)

![leaving host name field blank](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image11.webp)

**why?**

In a network with multiple LDAP Servers, and multiple SafeSquid Proxy Servers deployed in Master-Slave mode, this field can be used to specify the Host Name of the Proxy Server, which will communicate with the LDAP Server configured.

Leave this field blank if this is the only SafeSquid proxy, or if you want all the proxies to communicate with the LDAP server configure.

![entering your LDAP server FQDN and IP in ad.safesquid.test192.168.221.1 (example) format](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image12.webp)

![leaving ldap port and use SSL to their default ](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image13.webp)

![clicking on ldap bind method and selecting negotiate from the drop down menu](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image14.webp)

![entering adminstrator username. example: administrator@safesquid.test](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image15.webp)

You can use any user from Active Directory who is having **Administrator permissions**

![clicking on encrypt password icon](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image16.webp)

![entering admin password and confirming the password by entering in respective field](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image17.webp)

![clicking on encrypt to encrypt the password](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image18.webp)

![showing that the password is now encrypted](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image19.webp)

![entering your basedn as dc=safesquid,dc=test ( example)](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image20.webp)

![entering your ldap domain name. example: safesquid.test](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image21.webp)

![clicking on save policy](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image22.webp)

## Test User Extraction

Troubleshooting:

As soon as you Save policy by selecting NEGOTIATE_LDAP_AUTH

**kerberos.sh*** script will automatically run from path

/usr/local/safesquid/ui_root/cgi-bin

1.Verify below files at path:

/usr/local/safesquid/security

HTTP.keytab

krb5.conf

krb.tkt

2. SafeSquid will create the stub zone for DNS resolution of your Active Directory server.

The file with stub zone will create with the name: **safesquid.dns.conf**

At path:

/usr/local/safesquid/security/dns

Run command:

> cat safesquid.dns.conf

zone safesquid.test \{

type stub;

masters \{192.168.221.1;\};

\};

Also, it will automatically copy at given path:

/etc/bind/

Run command:

> cat safesquid.dns.conf

zone safesquid.test \{

type stub;

masters \{192.168.221.1;\};

\};

**(Note: Monit service must be up.)**

![clicking on ldap entries tab to check for entries](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image23.webp)

Step: Make sure that your AD Domain must be resolvable from all clients and SafeSquid Server.

For troubleshooting Follow Link

![showing all the users from directory in ldap entries tab](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image24.webp)

Save Configuration

If you did not find any entries on LDAP Entries subsection, then validate whether all fields in LDAP servers subsection are correct or not.

If all fields are correct then

Find the error cause

Troubleshooting Steps

![clicking on save config to save it](/img/How_To/Integrate_Active_Directory_For_SSO_Authentication/image25.webp)

When you click on Save config, it will give a prompt for asking the confirmation to store your configuration into the cloud.

Select Yes only in below cases:

If you want to use this same configuration in other SafeSquid instances.

If your total configuration in all sections is completed and validated.

Otherwise select No and click on submit button.

Enable SSO authentication for LDAP users

Read more about Testing your Kerberos SSO authentication setup


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


# Integrate Active Directory 

## Overview

After successfully installing AD on the machine, we need to set up our AD. In this document we will show you how to set up Active Directory and add new users/ groups/ computers in our AD. After that we will have to link our LDAPAdmin with Active Directory. Now finally we need to integrate our LDAP with SafeSquid and we will be able to see all the created users and user groups in our SafeSquid dashboard.

## Prerequisite

Need to have SafeSquid installed in your system.

Install LDAP Admin in your machine link to download: [https://sourceforge.net/projects/ldapadmin/](https://sourceforge.net/projects/ldapadmin/)

Need to have the windows Server up and running on a VM or any machine and must be connected to the internet.

AD needs to be installed, activated and running on the server.

Follow this link to install AD and activate AD in windows server: http://pc-addicts.com/setup-active-directory-server-2016/ or

this link: https://dinika-15.medium.com/installing-active-directory-on-windows-server-2012-r2-e9e614770588

## Client Scenario

Here we will create an Active Directory named mann-ad.safesquid. Then we will create a new user who's First Name is 'Mann' and Last Name is 'Prajapati'. This user's directory will be mann-ad.safesquid and his Logon name will be 'Mann'. After this while linking LDAPAdmin with AD we will give the Connection Name as 'SafeSquid AD' and the Host IP as 192.168.0.108. In the Base section we'll enter 'DC=mann-ad, DC=safesquid'. Now while creating account at the end set the Username as Administrator@mann-ad.safesquid and put a strong password. Next step is to integrate LDAP with SafeSquid. So in Ldap Basedn enter 'dc=mann, dc=safesquid' and in Ldap Domain enter mann.safesquid.

## Procedure

### Step 1: To add or view the users

Click on Active Directory Users and Computers.

![in tools section of AD server, going to active directory users and computers](/img/How_To/Integrate_AD/image1.webp)

You will see your AD.

![you will see your AD](/img/How_To/Integrate_AD/image2.webp)

You can add new users, groups, computers etc. by right clicking on the user icon and select the required choice.

![right clicking on users and selecting new the selecting user ](/img/How_To/Integrate_AD/image3.webp)

For example to create user select the user option and enter required information.

![entering the required information](/img/How_To/Integrate_AD/image4.webp)

Enter your password. Then click on finish.

![setting up a strong password](/img/How_To/Integrate_AD/image5.webp)

### Step 2: Linking LDAPAdmin with AD

Click on the connect Icon on the top left corner.

![in LDAPadmin clicking on connect icon](/img/How_To/Integrate_AD/image6.webp)

Click on new connection.

![clicking on new connection](/img/How_To/Integrate_AD/image7.webp)

Enter the required details in the fields.

![entering the IP address of the windows server ](/img/How_To/Integrate_AD/image8.webp)

Enter the Username and the password of the Account of the Windows Server. And click on test connection. If anything goes wrong, then check whether you have provided correct details or not.

![entering the username and password in username password field](/img/How_To/Integrate_AD/image9.webp)

Click on Ok.

![after connection is successful clicking on ok](/img/How_To/Integrate_AD/image10.webp)

Double click on the connection you will see something like this.

![by double clicking on new connection you will the list](/img/How_To/Integrate_AD/image11.webp)

But we don't want this so go back and right click on the connection and click on properties.

![right clicking on created connection and selecting properties](/img/How_To/Integrate_AD/image12.webp)

Now click on Fetch DNs and select the first one.

![clicking on fetch DNs and selecting the the basedn](/img/How_To/Integrate_AD/image13.webp)

Now you will see the list of all the users.

![showing the list of all users](/img/How_To/Integrate_AD/image14.webp)

### Step 3: Integration with SafeSquid

Now go to http://safesquid.cfg/ and click on configure.

![clicking on configure in safesquid interface](/img/How_To/Integrate_AD/image15.webp)

Click on Application Setup and then click on Integrate LDAP.

![selecting integrate LDAP in application setup](/img/How_To/Integrate_AD/image16.webp)

Click on add new '+' icon on the bottom right corner.

![clickng on add new button to add ](/img/How_To/Integrate_AD/image17.webp)

Enter the following details

For password click on the black arrow.

![clicking on arrow icon in ldap password field](/img/How_To/Integrate_AD/image18.webp)

And enter the Windows Server password and confirm it.

![entering and confirming your password](/img/How_To/Integrate_AD/image19.webp)

Fill the following details according to your Configuration.

![filling the required fields as per the configuration](/img/How_To/Integrate_AD/image20.webp)

Click on Blue tick mark and then save it.

Now select the LDAP Entities.

![going to LDAP entries](/img/How_To/Integrate_AD/image21.webp)

And You will see the list of all the users.

![seeing the list of all the users from the AD](/img/How_To/Integrate_AD/image22.webp)


# Secure WIFI Access Through Active Directory Infrastructure And SafeSquid Captive Portal

## Business challenge

Securing Unmonitored and Unsecured WIFI networks is a challenge that many organizations are looking forward to address.

As increased demand for BYOD (bring your own device), WIFI is common and minimum facility required in every organization.

But simply setting up WIFI access is not only the job. The job is completed only when you monitor and secure your WIFI network and your Users.

Securing WIFI is vital because that is **your network**.

If someone uses your network and something goes **wrong** then you will be **responsible** for the **cause and consequences.**

You should be able to **monitor**, who is using your WIFI, **control** what they can do via your WIFI and **secure** your users from external attacks.

## Client Scenario:

Stark tech is having 200 employees.

Provided internet services to employees through WIFI access points in DHCP enabled network.

There are no Wireless controllers (WLC) to secure WIFI network.

Stark tech challenges are

Authenticate any devices (PCs/Mobiles/Tablets/joined to domain controller or not) using active directory. But the users are reluctant to configure proxy settings in their devices.

Understand internet usage in their WIFI network.

Take actions based on violations.

Manage security based on employee groups

Keep track of information on monthly basis for security audit.

Stark tech is looking for cost-effective solution, which fulfil above requirements with tight security practices.

## Solution:

The combination of SafeSquid captive portal and SafeSquid secure web gateway is a solution that proposed for Stark tech.

The solution enables user authentication through Active directory and enables TOTAL ACCESS CONTROL and TOTAL CONTENT CONTROL.

It helps Stark tech to understand complete internet usage and allows implementation of security policies at granular levels.

The filtering capabilities and defending capabilities offered by solution enhanced security levels of Stark tech.

## What is captive portal?

A captive portal is a Web page that the user of a WIFI-access network is forced to view and interact with organization before internet access is granted.

Captive portals are typically used by business canters, airports, hotel lobbies, coffee shops, and other venues that offer Wi-Fi hot spots for Internet users.

## What is SafeSquid captive portal?

SafeSquid captive portal is works as same as general captive portal.

Used to enhance security of WIFI network by authenticating users before granting internet access.

Users will receive SafeSquid captive portal landing page when they try to access internet access via WIFI network. Users will punch in credentials.

SafeSquid captive portal validates user credentials using various authentication mechanisms and maintains database of authenticated source IP addresses and usernames for lookup.

If a user from a source IP address was already authenticated through captive portal, then SafeSquid will pick the username from the database and attach to the traffic coming from the same source IP address.

This way SafeSquid captive portal secures WIFI network by only granting access to valid users.

Combining SafeSquid Captive Portal with SafeSquid secure web gateway will allow you to monitor internet usage, allow you to filter traffic and do many more things to enhance security levels.

## Prerequisites:

Deploy SafeSquid Secure web gateway.

Enable SafeSquid Captive Portal facility on two ports, one is port 8081 for HTTP traffic and other one is port 8433 for HTTPS traffic. Also Enable SSL Inspection to control SSL traffic.

Redirect traffic from port 80 and 443 to 8081 and 8443 respectively. The redirection can take place on router if router supports redirection.

If your router only supports traffic forwarding then you should redirect traffic on SafeSquid server using IP tables.

Setup DHCP captive portal option on WIFI access point.

## How SafeSquid Captive Portal works?

![Safesquid and Captive Portal](/img/How_To/Secure_WIFI_Access_Through_Active_Directory_Infrastructure_And_SafeSquid_Captive_Portal/image1.webp)

Bob is using a mobile device in Stark tech and want to access internet services via Stark tech WIFI network.

Bob enable WIFI on his mobile device.

Identified Stark tech WIFI network and tried to connect to Stark tech WIFI.

Bob will receive an IP address (say 192.168.24.20) and a landing page of Stark tech from WIFI access point, which demands bob user name and password to gain access to internet.

Bob will punch in username and password.

The traffic will come to router and router will send traffic to SafeSquid Secure web gate way.

The redirection rules on SafeSquid Secure web gateway will redirect traffic to SafeSquid Captive Portal Port.

SafeSquid will interact with active directory and completes user credentials validation.

If validation is successful then SafeSquid will store 192.168.24.20, Bob as pair in internal database.

If Bob opens any websites or any apps from his mobile, SafeSquid will receive requests on Captive portal port.

SafeSquid will identify source IP address 192.168.24.20 and identifies user against 192.168.24.20 and will know that the user is Bob.

SafeSquid secure web gateway will check filtering policies, serve traffic and attach Bob username to the traffic served.

The process remains unchanged until the IP address is changed on Bob mobile device.

When Bob disables and reconnects to WIFI network after couple of hours, Bob will get a new IP address and the process will repeat from the start.

## [Setup Captive Portal With SafeSquid](https://help.safesquid.com/portal/en/kb/articles/setup-captive-portal-with-safesquid)

## Benefits

If anything goes wrong then you will have your concrete proofs saying who is responsible for the cause.

If your WIFI network is secured then you are safe and your users are safe.


# ADD SafeSquid Server DNS Entry in your AD Server

## Validate that IP of all our systems are resolvable by our DNS provider

Here for example **my Proxy Hostname: sabproxy** and **my Domain: safesquid.test**

Add the **Linux hostname " sabproxy "** as a New Host in the DNS server's configuration such that it's FQDN automatically defaults to **sabproxy.safesquid.test** as shown

### Go to Server Manager

![going to server manager in the active directory](/img/How_To/Add_SafeSquid_server_DNS_entry_in_your_Active_Directory_Server/image1.webp)

![Select Tool Option to add safesquid server In Active Diretory](/img/How_To/Add_SafeSquid_server_DNS_entry_in_your_Active_Directory_Server/image2.webp)

### Go to DNS Manager

![Select DNS Option to add safesquid server In Active Diretory](/img/How_To/Add_SafeSquid_server_DNS_entry_in_your_Active_Directory_Server/image4.webp)

### Add New Host

![Expand Forward Lookup zone in Active Directory server](/img/How_To/Add_SafeSquid_server_DNS_entry_in_your_Active_Directory_Server/image6.webp)

![Select Domain name to add host to add safesquid server DNS entry in Active Directory](/img/How_To/Add_SafeSquid_server_DNS_entry_in_your_Active_Directory_Server/image8.webp)

![Select New Host option to add safesquid server DNS entry in Active Directory](/img/How_To/Add_SafeSquid_server_DNS_entry_in_your_Active_Directory_Server/image10.webp)

#### Add Proxy hostname and IP address 

![Add Proxy host name and IP address to add safesquid server DNS entry in Active Directory](/img/How_To/Add_SafeSquid_server_DNS_entry_in_your_Active_Directory_Server/image11.webp)

![Confirmation of Proxy Sever successfully add to add safesquid server DNS entry in Active Directory](/img/How_To/Add_SafeSquid_server_DNS_entry_in_your_Active_Directory_Server/image13.webp)
