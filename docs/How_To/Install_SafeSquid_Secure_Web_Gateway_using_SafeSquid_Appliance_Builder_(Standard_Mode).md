# Install SafeSquid Secure Web Gateway using SafeSquid Appliance Builder (Standard Mode)

## Overview

Ideal for quick and straightforward setup with pre-configured settings, Standard Installation Mode caters to most use cases.

## How to install SafeSquid Secure Web Gateway using SafeSquid Appliance Builder (Standard Mode)

Use the latest stable version of [SAB](https://downloads.safesquid.com/appliance/safesquid.iso) to ensure up-to-date features and security patches. Ensure a reliable internet connection as SAB will download updates and SafeSquid software during installation. On booting from the SAB, the SafeSquid installer will guide you through the installation process.

Note: If you face any error during installation, press ALT+F4 to get debugging logs. To return to the previous screen press ALT+F1.

![SafeSquid Secure Web Gateway installation ](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image1.webp)

Select the Standard Installation Mode

### Automate network configuration

Next, the installer will ask for autoconfiguring your network.

![showing network autoconfig yes or no option if you want to use DHCP to automatically configure the network configuration](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image2.webp)

To automatically configure network settings via enterprise DHCP service, select Yes.

To manually configure your network settings (for example: to assign a Static IP address), select No.

### Set the DNS Search Domain (Only for DHCP)

The DNS Search Domain will be appended to a partially qualified hostname during a DNS lookup. When the gateway requires specific DNS resolution settings that differ from the general network settings provided by DHCP, manually configure the DNS search domain, else keep it empty. Use a relevant search domain to simplify access to internal resources. Ensure the search domain is consistent with the organization's DNS configuration.

![keeping the DNS search domain empty to rely on DHCP](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image3.webp)

### Select language

![selecting the language ](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image4.webp) The language selected, here, will be used for installer and the system.

### Select your location

Carefully select location of the system, as it will be used to set the time zone.

![selecting the location/country](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image5.webp)

### Configure the Keyboard

![selecting keyboard layout](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image6.webp)

Keyboard layouts are determined by the country of origin for the keyboard.

![configuring the keyboard](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image7.webp)

Select the appropriate keyboard layout to avoid input issues, especially for non-standard keyboards.

### Configure network settings (Skip for DHCP)

#### Assign Static IP address

![entering the static IP address for your server](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image8.webp)

Follow any existing IP address allocation policies or guidelines within the organization. Ensure that the IP address falls within the correct subnet range defined by the network and is unique within the network to avoid IP conflicts. For clarity and precision in network configuration, specify the subnet mask and network boundaries by appending the CIDR netmask.

#### Set Netmask

![entering the appropriate netmask for your proxy server](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image9.webp)

Use the appropriate subnet mask that matches the network's addressing scheme.

#### Specify Gateway

![specifying the default gateway IP](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image10.webp)

Enter the correct gateway IP address and verify that the gateway is reachable from the assigned SWG IP address. When the router is your primary device that forwards traffic from your local network to other networks, the router's IP will be your default gateway.

#### Set Name Server IP

![entering the IP addresses the name servers](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image11.webp)

Use reliable primary and secondary DNS servers for redundancy, and ensure DNS servers are correctly configured to resolve domain names properly.

#### Assign Hostname

![entering the hostname for the system](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image12.webp)

Set a meaningful hostname that fits into your network's naming convention. Carefully select the desired hostname, as proper assignment of the Fully Qualified Domain Name would be necessary for integration with other services, like AD.

#### Assign Domain Name (Skip for DHCP)

![entering the domain name ](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image13.webp)

Ensure that the domain name is unique and consistent with your organization's naming conventions and existing domain infrastructure. Verify that both forward and reverse DNS entries for the domain name is properly configured in your DNS servers to resolve to the correct IP address.

### Choose the mirror of Ubuntu archive

Select the ubuntu archive mirror country geographically closest to the server for fastest download of required packages. Ensure the mirror has good network performance and bandwidth capabilities and is known for known for reliability and minimal downtime.

![choosing the ubuntu archive mirror country](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image14.webp)

![selecting the ubuntu archive mirror](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image15.webp)

![showing http proxy information to enter](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image16.webp)

To adhere to any network policies your organization might have regarding external connections and data downloads, explicitly send the traffic via a HTTP proxy.

Leave this blank if not required and press continue.

![showing loading bar of downloading ubuntu archive mirror](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image17.webp)

All the required hardware and additional components details will be loaded automatically.

![loading additional components](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image18.webp)

### Configure the Clock

![configuring the clock using yes or no option](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image19.webp)

Ensure that the detected time zone is correct, the system time zone is crucial for log timestamps, scheduled tasks, and user activities.

### Setting Up partitions

Installation will proceed with partitioning process required for SafeSquid automatically.![setting up disc partitions](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image20.webp)

If using a USB as the installation disk, unselect your USB drive from partitioning.

![selecting the disk you want to partition](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image21.webp)

For this demonstration /dev/sda is a USB drive which needs to be unselected.

### Drive Selection for GRUB

![selecting the discs you want to install GRUB](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image22.webp)

Typically, this drive is the same as the installation disk.

Caution: The GRUB bootloader is essential for booting into the installed system. Installing GRUB on the wrong drive can render the system unbootable.

Note: These additional steps are particularly important for users with specific network configurations or those installed from a USB drive.

Ensure all configurations are double-checked to avoid common installation errors.

![selecting the disc you want to install the GRUB ](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image23.webp)

### Installing Grub

![selecting no when asked to unmount partitions that are in use](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image24.webp)

Select No

![starting up the partitioner](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image25.webp)

![selecting no when asked to unmount partitions that are in use ](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image26.webp)

Select No again

![loading bar of partitions formatting](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image27.webp)

### Installation of base system

![installing the base system](/img/How_To/Install_SafeSquid_Secure_Web_Gateway_using_SafeSquid_Appliance_Builder_(Standard_Mode)/image28.webp)

Wait for the installation process to complete.

If installation fails, select "Install the base system" in Ubuntu installer main menu, and press enter.

