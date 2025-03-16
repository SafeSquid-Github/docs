# Using SSH Tunnels to Access The SafeSquid Admin Interface

SSH tunnelling, or SSH port forwarding, is a method of transporting arbitrary data over an encrypted SSH connection.

SSH tunnels allow connections made to a local port (that is, to a port on your desktop) to be forwarded to a remote machine via a secure channel.

To Create SSH Tunnels using PuTTY follow the below Steps:

## 1. Establish an SSH connection with your proxy server

![establishing a ssh connection with proxy server by entering all the necessary details](/img/How_To/Using_SSH_Tunnels_to_Access_the_SafeSquid_Admin_Interface/image1.webp)

![logging in with root username](/img/How_To/Using_SSH_Tunnels_to_Access_the_SafeSquid_Admin_Interface/image2.webp)

![proxy CLI opened](/img/How_To/Using_SSH_Tunnels_to_Access_the_SafeSquid_Admin_Interface/image3.webp)

## 2. Now right-click on the title bar and select Change settings.

![right clicking on the title bar and selecting change settings](/img/How_To/Using_SSH_Tunnels_to_Access_the_SafeSquid_Admin_Interface/image4.webp)

## 3. Expand the SSH Settings

![Expanding the SSH Settings in the sidebar](/img/How_To/Using_SSH_Tunnels_to_Access_the_SafeSquid_Admin_Interface/image5.webp)

![expansion of ssh settings](/img/How_To/Using_SSH_Tunnels_to_Access_the_SafeSquid_Admin_Interface/image6.webp)

## 4. Select Tunnels

![selecting "tunnels" options from ssh](/img/How_To/Using_SSH_Tunnels_to_Access_the_SafeSquid_Admin_Interface/image7.webp)

## 5. Add Source Port

![adding the appropriate port ](/img/How_To/Using_SSH_Tunnels_to_Access_the_SafeSquid_Admin_Interface/image8.webp)

## 6. Add destination IP and Port

![adding the destination and port in the destination field](/img/How_To/Using_SSH_Tunnels_to_Access_the_SafeSquid_Admin_Interface/image9.webp)

## 7. Add and Apply the Settings

![adding and applying the setting by clicking on add ](/img/How_To/Using_SSH_Tunnels_to_Access_the_SafeSquid_Admin_Interface/image10.webp)

![adding and applying the setting by clicking on add ](/img/How_To/Using_SSH_Tunnels_to_Access_the_SafeSquid_Admin_Interface/image11.webp)

## Validation

Using your Windows CMD check all connections on port 8080

netstat -a | findstr "8080"

![validating it by command netstat -a | findstr "8080"](/img/How_To/Using_SSH_Tunnels_to_Access_the_SafeSquid_Admin_Interface/image12.webp)

Now [configure your browser](https://help.safesquid.com/portal/en/kb/articles/how-to-configure-proxy-in-a-browser#Open_Chrome_browser_settings_from_the_browser_toolbar) to use proxy IP as 127.0.0.1 and Port 8080 in your browser.
