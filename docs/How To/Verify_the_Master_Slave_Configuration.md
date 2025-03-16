# Verify The Master Slave Configuration

## What does Master/Slave mean?

In computer networking, master/slave is a model for a communication in which one device or process (known as the master) controls one or more other devices or processes (known as slaves). Once the master/slave relationship is established, the direction of control is always from the master to the slave(s).

In a master-slave configuration of SafeSquid, a specific instance of SafeSquid (the master server) manages other instances of SafeSquid (the slave servers). The stand-alone and slave instances are almost identical in functionality.

A slave server acts as a single (stand-alone) instance of SafeSquid, managing network computers. Furthermore, the slave server receives policies and tasks from its master server.

The master server does not have its own managed computers, but it indirectly manages those of its slave servers by assigning policies and tasks to them. Another purpose of the master server is to provide you with information on the network security status, by centralizing data from all managed servers. In this way, you can get centralized results from all the clients of the slave servers in a single report.

## Prerequisites

SafeSquid should be installed and activated using same product activation key on all the machines (master as well as slave)

## Master Slave configuration

### [Access the SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

### Configuration on Slave Server

#### Go to Support

![Select Support section to verify the Master Slave configuration](/img/How_To/Verify_the_Master_Slave_Configuration/image1.webp)

#### Go to Startup params

![Select Startup params to verify the Master Slave configuration](/img/How_To/Verify_the_Master_Slave_Configuration/image2.webp)

![Edit startup parameters to verify the Master Slave configuration](/img/How_To/Verify_the_Master_Slave_Configuration/image3.webp)

![Give IP address of Master server in startup parameters](/img/How_To/Verify_the_Master_Slave_Configuration/image4.webp)

![Give port of master sever in master port entry in startup parameters](/img/How_To/Verify_the_Master_Slave_Configuration/image5.webp)

![Save edited Startup parameters in startup parameters](/img/How_To/Verify_the_Master_Slave_Configuration/image6.webp)

![Restart to apply edited parameters in startup parameters](/img/How_To/Verify_the_Master_Slave_Configuration/image7.webp)

![select backup of startup parameters configuration](/img/How_To/Verify_the_Master_Slave_Configuration/image8.webp)

### Configuration on Master Server if authentication is Enabled 

#### Go to Access Restriction under Application Setup

![Select Access Restriction in application setup to configure policies if authentication is enabled on master server](/img/How_To/Verify_the_Master_Slave_Configuration/image9.webp)

![Select Access Restriction in application setup to configure policies if authentication is enabled on master server](/img/How_To/Verify_the_Master_Slave_Configuration/image9.webp)

#### Go to Allow list 

![Enabled the policy as True for giving access to Slave server](/img/How_To/Verify_the_Master_Slave_Configuration/image10.webp)

![Enabled the policy as True for giving access to Slave server](/img/How_To/Verify_the_Master_Slave_Configuration/image11.webp)

![Enabled the policy as True for giving access to Slave server](/img/How_To/Verify_the_Master_Slave_Configuration/image12.webp)

![Enabled the policy as True for giving access to Slave server](/img/How_To/Verify_the_Master_Slave_Configuration/image13.webp)

![Enabled the policy as True for giving access to Slave server](/img/How_To/Verify_the_Master_Slave_Configuration/image14.webp)

Verify the synchronization of defined sections on Slave server

![Verify the synchronization of defined sections on Slave server ](/img/How_To/Verify_the_Master_Slave_Configuration/image15.webp)
