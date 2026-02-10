---
title: Setup Active Directory Integration
description: Set up Active Directory users and groups, link LDAP Admin with AD, and integrate LDAP with SafeSquid so users and user groups appear in the SafeSquid dashboard.
keywords:
  - active directory setup
  - ldap integration with SafeSquid
  - add users to active directory
  - integrate ldap with SafeSquid
  - ldap configuration for SafeSquid
---
<section class="section-strip">


# Setup Active Directory Integration

After installing Active Directory on the Windows Server, add users, groups, and computers. Link LDAP Admin with Active Directory, then integrate LDAP with SafeSquid to see all users and user groups in the SafeSquid dashboard.

</section>

<section class="section-strip">

## Prerequisites

- SafeSquid installed on the system
- LDAP Admin installed; download from: [LDAP Admin on SourceForge](https://sourceforge.net/projects/ldapadmin/)
- Windows Server running on a VM or physical machine and connected to the network
- Active Directory installed and running on the server. For installation and activation see: [Setup Active Directory Server 2016](http://pc-addicts.com/setup-active-directory-server-2016/) or [Installing Active Directory on Windows Server 2012 R2](https://dinika-15.medium.com/installing-active-directory-on-windows-server-2012-r2-e9e614770588)

</section>

<section class="section-strip">

## Example scenario

This example uses an Active Directory named **mann-ad.safesquid**. A new user has First Name **Mann**, Last Name **Prajapati**, directory **mann-ad.safesquid**, and Logon name **Mann**. When linking LDAP Admin with AD: Connection Name **SafeSquid AD**, Host IP **192.168.0.108**, Base **DC=mann-ad,DC=safesquid**. Account username **Administrator@mann-ad.safesquid** with a strong password. For SafeSquid integration: LDAP Base DN **dc=mann,dc=safesquid**, LDAP Domain **mann.safesquid**.

</section>

<section class="section-strip">

## Call to action: Add or view users in AD

1. Open **Active Directory Users and Computers** on the AD server.

   ![In tools section of AD server, going to active directory users and computers](/img/How_To/Integrate_AD/image1.webp)

2. The AD structure appears. Add new users, groups, or computers by right-clicking the **Users** container and selecting the required option.

   ![You will see your AD](/img/How_To/Integrate_AD/image2.webp)

   ![Right clicking on users and selecting new then selecting user](/img/How_To/Integrate_AD/image3.webp)

3. To create a user, select **User**, enter the required information, set the password, then click **Finish**.

   ![Entering the required information](/img/How_To/Integrate_AD/image4.webp)

   ![Setting up a strong password](/img/How_To/Integrate_AD/image5.webp)

</section>

<section class="section-strip">

## Call to action: Link LDAP Admin with AD

1. In LDAP Admin, click the **Connect** icon (top left).

   ![In LDAP Admin clicking on connect icon](/img/How_To/Integrate_AD/image6.webp)

2. Click **New connection**. Enter connection details (host IP, credentials). Click **Test connection**; fix any errors before continuing. Click **OK**.

   ![Clicking on new connection](/img/How_To/Integrate_AD/image7.webp)

   ![Entering the IP address of the Windows server](/img/How_To/Integrate_AD/image8.webp)

   ![Entering the username and password in username password field](/img/How_To/Integrate_AD/image9.webp)

   ![After connection is successful clicking on ok](/img/How_To/Integrate_AD/image10.webp)

3. Double-click the connection to open it. If the tree is empty, right-click the connection → **Properties**, click **Fetch DNs**, select the first DN. The user list appears.

   ![By double clicking on new connection you will see the list](/img/How_To/Integrate_AD/image11.webp)

   ![Right clicking on created connection and selecting properties](/img/How_To/Integrate_AD/image12.webp)

   ![Clicking on fetch DNs and selecting the basedn](/img/How_To/Integrate_AD/image13.webp)

   ![Showing the list of all users](/img/How_To/Integrate_AD/image14.webp)

</section>

<section class="section-strip">

## Call to action: Integrate LDAP with SafeSquid

1. Open the SafeSquid configuration interface (e.g. `http://safesquid.cfg/`) and click **Configure**.

   ![Clicking on configure in SafeSquid interface](/img/How_To/Integrate_AD/image15.webp)

2. Go to **Application Setup** → **Integrate LDAP**. Click the **+** (Add new) icon.

   ![Selecting integrate LDAP in application setup](/img/How_To/Integrate_AD/image16.webp)

   ![Clicking on add new button to add](/img/How_To/Integrate_AD/image17.webp)

3. Enter LDAP server details (host, Base DN, domain, bind credentials). Use the password arrow to enter and confirm the Windows Server bind password. Click the checkmark to save.

   ![Clicking on arrow icon in LDAP password field](/img/How_To/Integrate_AD/image18.webp)

   ![Entering and confirming the password](/img/How_To/Integrate_AD/image19.webp)

   ![Filling the required fields as per the configuration](/img/How_To/Integrate_AD/image20.webp)

4. Open **LDAP Entities** to confirm users are listed.

   ![Going to LDAP entries](/img/How_To/Integrate_AD/image21.webp)

   ![Seeing the list of all the users from the AD](/img/How_To/Integrate_AD/image22.webp)

**Related:** [Simple Authentication](/docs/Authentication/Directory_Services/Active_Directory/Simple_Authentication/), [SSO Authentication](/docs/Authentication/Directory_Services/Active_Directory/SSO_Authentication/)

</section>