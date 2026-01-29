# Install SafeSquid Secure Web Gateway using SafeSquid Appliance Builder

## Problem
To set up your Secure Web Gateway appliance, you need to first install the Linux operating system on your provisioned hardware. Next, harden the system by implementing best security practices and partition the disks appropriately. Afterward, download and install all necessary dependency libraries and services. Lastly, install, configure, and deploy the Secure Web according to your organization’s environment. Even trials for Secure Web Gateways appliances require complex initial configuration, high technical expertise, and can be extremely time consuming.

## SafeSquid Appliance Builder (SAB)
To reduce the complexity, and save time in setting up the Secure Web Gateway, use SafeSquid Appliance Builder (SAB). SAB is a security-enhanced Debian Linux ISO, customized for SafeSquid installation on any physical or virtual hardware within 15 minutes. SAB automatically configures dependent libraries, services, and custom partitioning. On booting from the SAB ISO, the OS is automatically installed, and SafeSquid SWG is downloaded and deployed with all necessary dependency libraries, and services.

## Benefits
By automating the manual processes in the installation process, the risk of errors is reduced. Pre-configured settings ensure optimal performance and robust security. Furthermore, SafeSquid Appliance Builder incorporates security best practices in its setup process, providing a hardened system by default.

## Preparation
The SafeSquid Web Gateway (SWG) deployment with SafeSquid Appliance Builder (SAB) supports all base platforms. You can directly install on any Intel server grade platform or any virtualization platform.

### For Local Hardware
**Prepare the bootable media**
Remember to back up any important data from the storage media to burn to. Use a reliable tool for burning the ISO to your chosen bootable media, such as Rufus for USB drives or ImgBurn for CDs/DVDs.

**Prepare your machine**
If the machine’s disk has a different OS installed, backup and format the disk before starting the SafeSquid installation. Then, connect the bootable media to your machine. Restart your computer and enter the BIOS/UEFI settings to set the boot order as:
1. Primary Boot Device: Hard disk.
2. Secondary Boot Device: Bootable Media with SAB

### For Virtual Infrastructure
SAB installation is compatible with both Type 1 and Type 2 hypervisors. For implementation on Type 2 hypervisors, such as VirtualBox®̥ or VMware®̥, establishing connectivity between the host and the Virtual Machine (VM) is mandatory. This can be achieved through two methods:
*   **Network Address Translation (NAT)**: Used when the VM operates behind the host, routing all network traffic through the host’s IP address.
*   **Bridged Adapter**: Used to give the VM direct access to the network, bypassing the host’s IP. The VM receives a private IP address on the network.

---

## Installation Steps (Debian)

**Step 1**
You will see this interface after starting the virtual machine. Select **Standard Installation**.
![Step 1](media/pptx_image1.png)

**Step 2**
Select **No** as we will configure IP manually.
![Step 2](media/pptx_image2.png)

**Step 3**
Select **Language** and hit enter.
![Step 3](media/pptx_image3.png)

**Step 4**
Select **Country**.
![Step 4](media/pptx_image4.png)

**Step 5**
Select **keyboard layout**.
![Step 5](media/pptx_image5.png)

**Step 6**
Assign **IP address** to your proxy server and **subnet mask**.
Format: `IP/subnet`
![Step 6](media/pptx_image6.png)

**Step 7**
Define **Gateway** to the IP you have assigned.
![Step 7](media/pptx_image7.png)

**Step 8**
Assign **DNS address**.
![Step 8](media/pptx_image8.png)

**Step 9**
Give **Hostname** to your proxy server.
![Step 9](media/pptx_image9.png)

**Step 10**
Define **DNS/Domain Name**.
![Step 10](media/pptx_image10.png)

**Step 11**
Choose **mirror of Debian archive** as per your proxy server location.
![Step 11](media/pptx_image11.png)

**Step 12**
If you need to use a **HTTP proxy** to access the outside world, enter the proxy information, otherwise leave this blank and hit enter.
![Step 12](media/pptx_image12.png)

**Step 13**
To Continue Installation use an **SSH Client** to connect to the IP Address.
![Step 13](media/pptx_image13.png)

**Step 14**
We want Disk partitioning in “/dev/sda” then click continue.
![Step 14](media/pptx_image14.png)

**Step 15**
We want install Grub in “/dev/sda”, then click continue.
![Step 15](media/pptx_image15.png)

**Step 16**
It will take 15 mins to install the requirements.
![Step 16](media/pptx_image16.png)

**Step 17: Finalizing & Login**
After installation, the login page will appear.
Use the default credentials:
*   **Username**: `administrator`
*   **Password**: `safesquid`

After login, re-enter the current password, then set and confirm a new password.
![Step 17](media/pptx_image17.png)

---

## Post-Installation Checklist and Recommendations
The SafeSquid instance can now be activated from the product interface. To access the product interface, SafeSquid® proxy server must be configured on the web-browser. Post activation, setup SSL Inspection and configure policies as per the enterprise’s requirements.
# Install SafeSquid Secure Web Gateway using SafeSquid Appliance Builder

## Problem
To set up your Secure Web Gateway appliance, you need to first install the Linux operating system on your provisioned hardware. Next, harden the system by implementing best security practices and partition the disks appropriately. Afterward, download and install all necessary dependency libraries and services. Lastly, install, configure, and deploy the Secure Web according to your organization’s environment. Even trials for Secure Web Gateways appliances require complex initial configuration, high technical expertise, and can be extremely time consuming.

## SafeSquid Appliance Builder (SAB)
To reduce the complexity, and save time in setting up the Secure Web Gateway, use SafeSquid Appliance Builder (SAB). SAB is a security-enhanced Debian Linux ISO, customized for SafeSquid installation on any physical or virtual hardware within 15 minutes. SAB automatically configures dependent libraries, services, and custom partitioning. On booting from the SAB ISO, the OS is automatically installed, and SafeSquid SWG is downloaded and deployed with all necessary dependency libraries, and services.

## Benefits
By automating the manual processes in the installation process, the risk of errors is reduced. Pre-configured settings ensure optimal performance and robust security. Furthermore, SafeSquid Appliance Builder incorporates security best practices in its setup process, providing a hardened system by default.

## Preparation
The SafeSquid Web Gateway (SWG) deployment with SafeSquid Appliance Builder (SAB) supports all base platforms. You can directly install on any Intel server grade platform or any virtualization platform.

### For Local Hardware
**Prepare the bootable media**
Remember to back up any important data from the storage media to burn to. Use a reliable tool for burning the ISO to your chosen bootable media, such as Rufus for USB drives or ImgBurn for CDs/DVDs.

**Prepare your machine**
If the machine’s disk has a different OS installed, backup and format the disk before starting the SafeSquid installation. Then, connect the bootable media to your machine. Restart your computer and enter the BIOS/UEFI settings to set the boot order as:
1. Primary Boot Device: Hard disk.
2. Secondary Boot Device: Bootable Media with SAB

### For Virtual Infrastructure
SAB installation is compatible with both Type 1 and Type 2 hypervisors. For implementation on Type 2 hypervisors, such as VirtualBox®̥ or VMware®̥, establishing connectivity between the host and the Virtual Machine (VM) is mandatory. This can be achieved through two methods:
*   **Network Address Translation (NAT)**: Used when the VM operates behind the host, routing all network traffic through the host’s IP address.
*   **Bridged Adapter**: Used to give the VM direct access to the network, bypassing the host’s IP. The VM receives a private IP address on the network.

---

## Installation Steps (Debian)

**Step 1**
You will see this interface after starting the virtual machine. Select **Standard Installation**.
![Step 1](/img/InstallationChangesDebian/pptx_image1.png)

**Step 2**
Select **No** as we will configure IP manually.
![Step 2](/img/InstallationChangesDebian/pptx_image2.png)

**Step 3**
Select **Language** and hit enter.
![Step 3](/img/InstallationChangesDebian/pptx_image3.png)

**Step 4**
Select **Country**.
![Step 4](/img/InstallationChangesDebian/pptx_image4.png)

**Step 5**
Select **keyboard layout**.
![Step 5](/img/InstallationChangesDebian/pptx_image5.png)

**Step 6**
Assign **IP address** to your proxy server and **subnet mask**.
Format: `IP/subnet`
![Step 6](/img/InstallationChangesDebian/pptx_image6.png)

**Step 7**
Define **Gateway** to the IP you have assigned.
![Step 7](/img/InstallationChangesDebian/pptx_image7.png)

**Step 8**
Assign **DNS address**.
![Step 8](/img/InstallationChangesDebian/pptx_image8.png)

**Step 9**
Give **Hostname** to your proxy server.
![Step 9](/img/InstallationChangesDebian/pptx_image9.png)

**Step 10**
Define **DNS/Domain Name**.
![Step 10](/img/InstallationChangesDebian/pptx_image10.png)

**Step 11**
Choose **mirror of Debian archive** as per your proxy server location.
![Step 11](/img/InstallationChangesDebian/pptx_image11.png)

**Step 12**
If you need to use a **HTTP proxy** to access the outside world, enter the proxy information, otherwise leave this blank and hit enter.
![Step 12](/img/InstallationChangesDebian/pptx_image12.png)

**Step 13**
To Continue Installation use an **SSH Client** to connect to the IP Address.
![Step 13](/img/InstallationChangesDebian/pptx_image13.png)

**Step 14**
We want Disk partitioning in “/dev/sda” then click continue.
![Step 14](/img/InstallationChangesDebian/pptx_image14.png)

**Step 15**
We want install Grub in “/dev/sda”, then click continue.
![Step 15](/img/InstallationChangesDebian/pptx_image15.png)

**Step 16**
It will take 15 mins to install the requirements.
![Step 16](/img/InstallationChangesDebian/pptx_image16.png)

**Step 17: Finalizing & Login**
After installation, the login page will appear.
Use the default credentials:
*   **Username**: `administrator`
*   **Password**: `safesquid`

After login, re-enter the current password, then set and confirm a new password.
![Step 17](/img/InstallationChangesDebian/pptx_image17.png)

---

## Post-Installation Checklist and Recommendations
The SafeSquid instance can now be activated from the product interface. To access the product interface, SafeSquid® proxy server must be configured on the web-browser. Post activation, setup SSL Inspection and configure policies as per the enterprise’s requirements.
