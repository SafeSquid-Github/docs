# Application Not Working with HTTPS Inspection

## Business Challenge

The HTTPS inspection Bypass option enables you to define specific websites that are not subject to decryption as they flow through the proxy. Some websites may include personal identification information that should not be decrypted. To avoid liability for inspecting this type of information, you may want to specify some or all these sites for decryption bypass. The selected sites will not be decrypted even if the category or categories that the sites belong to are selected for SSL analysis.

**Note**: Tunnelling application is the group of applications that is specially made for bypassing applications that are not working with HTTPS inspection. We have a list of some default applications if any application is not included in the Tunnelling application, that application you have to select manually from Magic Suggest.

Here is an example of how to bypass an application that is not working with HTTPS inspection.

## Steps to Bypass an Application

### [Access the SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

![Access the SafeSquid User Interface ](/img/Troubleshooting/Application_not_working_with_HTTPS_inspection/image1.webp)

![Click on search in global policies](/img/Troubleshooting/Application_not_working_with_HTTPS_inspection/image2.webp)

### Search policy: "BYPASS SSL INSPECTION" to Search

![searching BYPASS SSL INSPECTION in Global policies](/img/Troubleshooting/Application_not_working_with_HTTPS_inspection/image3.webp)

### Edit policy to Enable as TRUE (Inspection Policies)

![Enabling the Created policy as TRUE](/img/Troubleshooting/Application_not_working_with_HTTPS_inspection/image4.webp)

![Selecting TRUE to enable the policy](/img/Troubleshooting/Application_not_working_with_HTTPS_inspection/image5.webp)

![Saving the policy by clicking on save button](/img/Troubleshooting/Application_not_working_with_HTTPS_inspection/image6.webp)

### Edit policies and profiles to Enable as TRUE

![Editing default policies to bypass SSL Inspection for Applications and Categories](/img/Troubleshooting/Application_not_working_with_HTTPS_inspection/image7.webp)

### How to create new policy to bypass HTTPS Inspection

![Creating a new policy to bypass HTTPS Inspection in Request Types](/img/Troubleshooting/Application_not_working_with_HTTPS_inspection/image8.webp)

### Go to Request Types 

![Go to request types ](/img/Troubleshooting/Application_not_working_with_HTTPS_inspection/image9.webp)

![clicking on Add new to to add a request type](/img/Troubleshooting/Application_not_working_with_HTTPS_inspection/image10.webp)

![Writing a comment for future reference and adding a regular expression in host name](/img/Troubleshooting/Application_not_working_with_HTTPS_inspection/image11.webp)

![Enabling Smart TLD as true](/img/Troubleshooting/Application_not_working_with_HTTPS_inspection/image12.webp)

![Giving a unique name in Added request Type](/img/Troubleshooting/Application_not_working_with_HTTPS_inspection/image13.webp)

### Go to Access Policies

![Adding new policy in Access Profiles](/img/Troubleshooting/Application_not_working_with_HTTPS_inspection/image14.webp)

![Adding relevant comment to the policy and adding created request type and mentioning BYPASS SSL INSPECTION in Added Profiles](/img/Troubleshooting/Application_not_working_with_HTTPS_inspection/image15.webp)

![clicking on save to save the new policy](/img/Troubleshooting/Application_not_working_with_HTTPS_inspection/image16.webp)

**Note**: Configure Proxy settings in Dropbox and upload/download files to validate the working.
