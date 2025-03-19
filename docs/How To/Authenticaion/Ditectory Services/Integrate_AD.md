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
