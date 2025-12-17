---
title: Appliance ISO
Description: This documentation explains how to quickly deploy SafeSquid Secure Web Gateway using the SafeSquid Appliance Builder (SAB), a pre-configured ISO that automates installation, system hardening, and setup across physical and virtual environments.
Keywords:
  - SafeSquid Appliance Builder
  - Install Secure Web Gateway ISO
  - Secure Web Gateway automated installation
  - SWG deployment on virtual machine
  - SafeSquid ISO setup guide
---

## Installation Challenges

To set up your Secure Web Gateway appliance, you need to first install the Linux operating system on your provisioned hardware. Next, harden the system by implementing best security practices and partition the disks appropriately. Afterward, download and install all necessary dependency libraries and services. Lastly, install, configure, and deploy the Secure Web according to your organization's environment. Even trials for Secure Web Gateways appliances require complex initial configuration, high technical expertise, and can be extremely time consuming.

## SafeSquid Appliance Builder (SAB)

To reduce the complexity, and save time in setting up the Secure Web Gateway, use SafeSquid Appliance Builder (SAB). SAB is a security-enhanced Ubuntu Linux ISO, customized for SafeSquid installation on any physical or virtual hardware within 15 minutes. SAB automatically configures dependent libraries, services, and custom partitioning. On booting from the SAB ISO, Ubuntu is automatically installed, and SafeSquid SWG is downloaded and deployed with all necessary dependency libraries, and services.

## Minimized Errors and Optimized Security

By automating the manual processes in the installation process, the risk of errors is reduced. Pre-configured settings ensure optimal performance and robust security. Furthermore, SafeSquid Appliance Builder incorporates security best practices in its setup process, providing a hardened system by default.

## How to install SafeSquid SWG using SAB

Use the latest stable version of [SAB](https://downloads.safesquid.com/appliance/safesquid.iso) to ensure up-to-date features and security patches. Verify the integrity of the downloaded ISO by matching the file's hash value against the officially disclosed on the website.

### Preparation

The SafeSquid Web Gateway (SWG) deployment with SafeSquid Appliance Builder (SAB) supports all base platforms. You can directly install on any Intel server grade platform or any virtualization platform.

#### For Local Hardware

##### Prepare the bootable media

Remember to back up any important data from the storage media to burn to. Use a reliable tool for burning the ISO to your chosen bootable media, such as [Rufus](https://rufus.ie/en/) for USB drives or [ImgBurn](https://www.imgburn.com/) for CDs/DVDs.

##### Prepare your machine

If the machine's disk has a different OS installed, backup and format the disk before starting the SafeSquid installation. Then, connect the bootable media to your machine. Restart your computer and enter the BIOS/UEFI settings to set the boot order as

1. **Primary Boot Device:** Hard disk.
2. **Secondary Boot Device:** Bootable Media with SAB

![Showing boot order of the machine](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image1.webp)

#### For Virtual Infrastructure

SAB installation is compatible with both Type 1 and Type 2 hypervisors. For implementation on Type 2 hypervisors, such as [VirtualBox](https://www.virtualbox.org/)® or [VMware](https://www.vmware.com/)®, establishing connectivity between the host and the Virtual Machine (VM) is mandatory. This can be achieved through two methods:

1. **Network Address Translation (NAT)**: Used when the VM operates behind the host, routing all network traffic through the host's IP address.
2. **Bridged Adapter**: Used to give the VM direct access to the network, bypassing the host's IP. The VM receives a private IP address on the network.

### Initial Boot

If you face any error during installation, press ALT+F4 to get debugging logs. To return to the previous screen press ALT+F1.

On booting from the SAB, the SafeSquid installer will guide you through the installation process. Ensure a reliable internet connection as SAB will download updates and SafeSquid software during installation.

### Choose Installation Mode

Choose from four installation modes, as per your use cases.

1. Standard Installation Mode (Recommended) Quick and straightforward setup with pre-configured settings.
2. Expert Installation Mode Extensive customization and fine-tuning settings
3. Serial Console Installation (Standard) Standard Installation on devices with only serial ports
4. Serial Console Installation (Expert) Expert Installation on devices with only serial ports

![SafeSquid Secure Web Gateway installation ](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image2.webp)

### Automate network configuration

Next, the installer will ask for autoconfiguring your network.

![showing network autoconfig yes or no option if you want to use DHCP to automatically configure the network configuration](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image4.webp)

To automatically configure network settings via enterprise [DHCP](https://www.ietf.org/rfc/rfc2131.txt) (Dynamic Host Configuration Protocol) service, select Yes.

To manually configure your network settings (for example: to assign a Static IP address), select No.

### Set the DNS Search Domain (Only for DHCP)

The DNS Search Domain will be appended to a partially qualified hostname during a DNS lookup. When the gateway requires specific DNS resolution settings that differ from the general network settings provided by DHCP, manually configure the DNS search domain, else keep it empty. Use a relevant search domain to simplify access to internal resources. Ensure the search domain is consistent with the organization's DNS configuration.

![keeping the DNS search domain empty to rely on DHCP](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image5.webp)

### Select language

![selecting the language ](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image6.webp) The language selected here will be used for installer and the system.

### Select your location

Carefully select the location of the system, as it will be used to set the time zone. ![selecting thelocation/country](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image7.webp)

### Configure the Keyboard

![selecting keyboard layout](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image8.webp) Keyboard layouts are determined by the country of origin for the keyboard.

![configuring the keyboard](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image9.webp) Select the appropriate keyboard layout to avoid input issues, especially for non-standard keyboards.

### Configure the network

#### Network interface selection

This will show you the all-network interfaces present in your system. Select the interface that has Internet connectivity as the primary

![Selecting the interface that has Internet connectivity as the primary](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image10.webp)

#### Assign Static IP address (Skip for DHCP)

![entering the static IP address for your server](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image11.webp)

Follow any existing IP address allocation policies or guidelines within the organization. Ensure that the IP address falls within the correct subnet range defined by the network and is unique within the network to avoid IP conflicts. For clarity and precision in network configuration, specify the subnet mask and network boundaries by appending the CIDR netmask.

#### Set Netmask (Skip for DHCP)

![entering the appropriate netmask for your proxy server](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image12.webp)

Use the appropriate subnet mask that matches the network's addressing scheme.

#### Specify Gateway (Skip for DHCP)

![specifying the default gateway IP](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image13.webp)

Enter the correct gateway IP address and verify that the gateway is reachable from the assigned SWG IP address. When the router is your primary device that forwards traffic from your local network to other networks, the router's IP will be your default gateway.

#### Set Name Server IP (Skip for DHCP)

![entering the IP addresses the name servers](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image14.webp)

Use reliable primary and secondary DNS servers for redundancy and ensure DNS servers are correctly configured to resolve domain names properly.

#### Assign Hostname

![entering the hostname for the system](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image15.webp)

Set a meaningful hostname that fits into your network's naming convention. Carefully select the desired hostname, as proper assignment of the Fully Qualified Domain Name would be necessary for integration with other services, like AD.

#### Assign Domain Name (Skip for DHCP)

![A screenshot of a computer Description automatically generated](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image16.webp)

Ensure that the domain name is unique and consistent with your organization's naming conventions and existing domain infrastructure. Verify that both forward and reverse DNS entries for the domain name is properly configured in your DNS servers to resolve to the correct IP address.

### NTP server Configuration (For Expert Installation)

By default, NTP (Network Time Protocol) server has been set to pool.ntp.org. If you have your own NTP server, then you may set to that address for clock synchronization between computer systems to sometime reference.

![By default, ntp server has been set to pool.ntp.org. If you have your own ntp server, then you may set to that address for clock synchronization between computer systems to sometime reference](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image17.webp)

### Choose the mirror of the Ubuntu archive

Select the Ubuntu archive mirror country geographically closest to the server for the fastest download of required packages. Ensure the mirror has good network performance and bandwidth capabilities and is known for reliability and minimal downtime.

![choosing the ubuntu archive mirror country](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image18.webp)

![selecting the ubuntu archive mirror](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image19.webp)

![showing http proxy information to enter](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image20.webp)

To adhere to any network policies your organization might have regarding external connections and data downloads, explicitly send the traffic via an HTTP proxy.

Leave this blank if not required and press continue.

### Set up users and passwords (Only For Expert Installation)

Here, you can create the SafeSquid administrator user.

#### Full Name

![Creating a username and password.](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image21.webp)

#### Username for your account

![setting up username for your account](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image22.webp)

#### Choose password for new user

Ensure that the password created meets the requirements and make sure that you remember this password, as the same will be used to login.

![choosing password for the new user](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image23.webp)

![re-entering the password](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image24.webp)

#### Encrypt your home directory

Choose whether you want to encrypt the user's home directory

![Encrypting your home directory by selecting yes or no](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image25.webp)

![showing loading bar of downloading ubuntu archive mirror](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image26.webp)

In case of a network-related error, such as "**Unable to download debconf preconfiguration**," use the installer console to diagnose the root cause and take appropriate action. For further details, please refer to the "**Troubleshooting Issues During Installation of SafeSquid**" document.

![loading additional components](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image27.webp)

### Configure the Clock

![configuring the clock using yes or no option](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image28.webp)

Ensure that the detected time zone is correct, the system time zone is crucial for log timestamps, scheduled tasks, and user activities.

#### Setting Up partitions (If booting via USB Bootable Disk)

Installation will proceed with partitioning process required for SafeSquid automatically.![setting up disc partitions](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image29.webp)

If using a USB as the installation disk, unselect your USB drive from partitioning. For this demonstration **/dev/sda** is a USB drive which needs to be unselected.

![selecting the disk you want to partition](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image30.webp)

### Partition disks (Expert Installation)

You can manually manage partitions.

#### Writing Partition Changes

Double-check the current partitioning scheme. Make sure it meets your requirements, as no further changes to the partitioning scheme will be possible once [LVM](https://ubuntu.com/server/docs/about-logical-volume-management-lvm#:~\:text=Logical%20Volume%20Management%2C%20or%20LVM,method%20of%20partitioning%20storage%20volumes.) (Logical Volume Management) is configured. Verify that you are working on the correct disk (in this case, SCSI3 (0,0,0) (sda)). Mistakenly modifying the wrong disk can lead to data loss.

![Partitioning the disks](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image31.webp)

Select yes to manage partitions.

#### Selecting Volume Group Size for Guided Partitioning

When selecting the volume group size for guided partitioning during LVM configuration, it's important to balance current and future needs. You have the option to use the entire volume group for partitioning or just a part of it. Consider reserving some space for future expansions, especially if you plan to add more disks or grow logical volumes later. Ensure the selected size meets the minimum requirements for your operating system and applications, providing sufficient space for immediate needs. Proper partition alignment and minimizing fragmentation can improve performance, while having a backup strategy and reserving space for snapshots can aid in recovery. Regularly monitor disk usage to anticipate future space needs, and specify sizes accurately using supported formats.

![creating the Size of Guided Partition](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image32.webp)

#### Select Method of Partition

Choose from five partition methods, as per your use cases.

![](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image33.webp)

1. Guided Partitioning automated disk partitioning with predefined schemes for beginners
2. Configure Software RAID Combine multiple physical disks into a single logical unit for redundancy or performance Supports RAID levels (RAID 0, RAID 1, RAID 5, RAID 10) using software.
3. Configure Local Volume Manager (LVM) Create resizable and movable logical volumes Includes setup for physical volumes, volume groups, and logical volumes
4. Configure Encrypted Volumes Enables disk encryption to protect sensitive data using technologies like LUKS.
5. Configure iSCSI Volumes Configures iSCSI initiators and targets, making remote storage appear as local partitions.

For advanced controls, you can manually select a partition and modify the partition type, size, mount point, and file system.

After configuring the desirable partitioning, select "**Finish Partitioning and Write Changes to the Disk**" to proceed.

![Selecting Method of Partition.If you don't want to modify default partitions then, select Finish Partitioning and write changes to the disk](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image34.webp)

#### Review Partitioning configuration

Before finalizing the partition changes, thoroughly review the list of partitions and devices being modified to ensure they match your intended setup. Confirm that the partitions to be formatted and their file systems are correct, keeping in mind that this action is irreversible and will erase existing data, so ensure all important data is backed up. Verify that essential system partitions like **root** and **swap** are correctly configured and that logical volumes within the volume group are properly set up. Double-check that the correct disk is being modified and that all necessary directories have the right mount points. If there are any uncertainties, use the option to go back and make adjustments before proceeding.

![List of Partitions](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image35.webp)

### Drive Selection for GRUB (If booting via USB Bootable Disk)

![selecting the discs you want to install GRUB](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image36.webp)

Typically, this drive is the same as the installation disk.

Caution: The [GRUB](https://www.gnu.org/software/grub/) bootloader is essential for booting into the installed system Installing GRUB on the wrong drive can render the system unbootable.

These additional steps are particularly important for users with specific network configurations or those installed from a USB drive.

Ensure all configurations are double-checked to avoid common installation errors.

![selecting the disc you want to install the GRUB ](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image37.webp)

#### Installing Grub

![selecting no when asked to unmount partitions that are in use](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image38.webp)

Select No.

It is essential to avoid unmounting **/dev/sda**, which is your USB bootable device in this case. If **/dev/sda** is removed, the installation process will be halted, leading to failure.

![starting up the partitioner](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image39.webp)

![selecting no when asked to unmount partitions that are in use ](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image40.webp)

Select No again

It is essential to avoid unmounting **/dev/sda**, which is your USB bootable device in this case.

If **/dev/sda** is removed, the installation process will be halted, leading to failure.

![loading bar of partitions formatting](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image41.webp)

### Installation of the base system

![installing the base system](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image42.webp)

![configuring apt](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image43.webp)

![selecting and installing the software](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image44.webp)

### Finishing installation

The final process of finishing the installation is the last step where the preseed file will be executed.

![finishing the installation](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image45.webp) In the end, the system will reboot itself and go through some system initialization.

![At the end, the system will reboot itself and goes through some system initialization](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image46.webp)

If you have configured your system's boot order with the USB drive or ISO image as the primary boot device, it is likely that the installation menu will reappear upon reboot.

To prevent this, ensure you unmount the USB drive or detach the ISO file from the virtual machine settings before restarting your server.

A welcome screen will appear with a SafeSquid (Secure Web Gateway) screen.

![safesquid secure web gateway ](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image47.webp)

If you face any error while installing SafeSquid Appliance

Builder (SAB-ISO), you will get debugging logs information by pressing ALT+F4 to return to previous screen press ALT+F1.

### Login to the Server

If you observe the screen by default, it will give you username along with the password.

You need to enter the same username and password for the first login.

```jsx npm2yarn
administrator
```

```jsx npm2yarn
safesquid
```

![safesquid first time login](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image48.webp) You need to reset the password on the first login.

![changing the password](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image49.webp)

You land into console where SafeSquid SWG will be seen as shown below after successful login.

![A screenshot of a computer Description automatically generated](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder/image50.webp)

## Post-Installation Checklist and Recommendations

The SafeSquid instance can now be activated from the product interface. [To access the product interface](/docs/01-Getting%20Started/Access%20the%20SafeSquid%20Interface.md), SafeSquid® [proxy server must be configured on the web-browser](/docs/10-Operational%20Modes/03-TCP%20Proxy.md). Post activation, [setup SSL Inspection](/docs/03-SSL%20Inspection/main.md) and configure policies as per the enterprise's requirements.
