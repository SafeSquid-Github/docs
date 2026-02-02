---
title: Allow Social Networking Sites During Lunch Hours
description: Learn how to configure SafeSquid to allow employees to access social networking sites during lunch hours while maintaining productivity controls.
keywords:
  - allow social media lunch hours safesquid
  - safesquid time profile
  - lunch time policy safesquid
  - social networking site access safesquid
  - safe social media access safesquid
---

## Overview
Most network administrators can access and track anything employees do on their computers. Most of the employees waste their time on social network sites. This can damage not only employment status but employee's reputation also. In most organizations to limit the distraction employers choose to block social media access for the employees. Many organizations/companies prohibit access to social networking sites on their network computers because they believe such access leads to decreased productivity. Nowadays social media is an addiction, which can consume unproductive time of employees.

But nowadays some organization wants their employee to be happy and want to give some privileges and benefits to some or all of the employees. It is possible to allow social media at work with boundaries that satisfy both the employee and employer. So, they make policies such that social networking sites are allowed to be accessed during lunch hours.

## Prerequisite
HTTPS Inspection should be enabled in SafeSquid. If not enabled, you can check our document - [How to enable HTTPS Inspection.](/docs/03-SSL%20Inspection/main.md)

Make sure the SScore section is enabled as TRUE (Application setup >> Score)

# [Access the SafeSquid User Interface](/docs/01-Getting%20Started/Access%20the%20SafeSquid%20Interface.md)
![Select Configure section to allow social networking sites in lunch hours](/img/How_To/Allow_Social_Networking_Sites_during_Lunch_Hours/image1.webp)

Click on the Search Icon situated in the bottom right corner of SafeSquid WebGUI to find the keyword or profile name.

![View default policies under policies and profiles](/img/How_To/Allow_Social_Networking_Sites_during_Lunch_Hours/image2.webp)

## Search default policy: LUNCH.
Enter the **LUNCH** into the value field of the dialog box that appears on the screen and click on the search button.

![Search for default policy Lunch](/img/How_To/Allow_Social_Networking_Sites_during_Lunch_Hours/image3.webp)

Your default policy for the **LUNCH** profile will be shown in the Time Profile section.

## Go to Time Profiler
Open the default policy from the Time Profiler section having a **LUNCH** profile.

![Open the default policy from Time Profiler section having LUNCH profile](/img/How_To/Allow_Social_Networking_Sites_during_Lunch_Hours/image4.webp)

### Edit LUNCH policy
Modify your lunch time (In Hour Range and Minute Range) accordingly and save the policy.

![Modify your lunch time (In Hour Range and Minute Range) accordingly and save the policy.](/img/How_To/Allow_Social_Networking_Sites_during_Lunch_Hours/image5.webp)

Also, ensure the Global part of the Time Profiler Section is Enabled with TRUE.

![Global part of Time Profiler Section is Enabled with TRUE to allow social networking sites in lunch hours](/img/How_To/Allow_Social_Networking_Sites_during_Lunch_Hours/image6.webp)

By default, Global Part of Time Profiler is FALSE.

![Save the policy after making Global part of Time Profiler as TRUE.](/img/How_To/Allow_Social_Networking_Sites_during_Lunch_Hours/image7.webp)

Save the policy after making Global part of Time Profiler as TRUE.

![Save the policy after making Global part of Time Profiler as TRUE.](/img/How_To/Allow_Social_Networking_Sites_during_Lunch_Hours/image7.webp)

## Go to Access Profiles
Open Access Profiles from the Restriction Policies side menu.

![Open Access Profiles from Restriction Policies side menu to allow social networking sites in lunch hours](/img/How_To/Allow_Social_Networking_Sites_during_Lunch_Hours/image8.webp)

### Create New Policy
Create a new policy under the Access Profiles section for incorporation of the default **LUNCH** profile from the Time Profiler section.

![Create new policy under Access Profiles section for incorporation of default LUNCH profile from Time Profiler section.](/img/How_To/Allow_Social_Networking_Sites_during_Lunch_Hours/image9.webp)

Select the default Category **Socialnetworks** from the Categories Field.

![Select the default Category Socialnetworks from Categories Field.](/img/How_To/Allow_Social_Networking_Sites_during_Lunch_Hours/image10.webp)

You need to select ALLOW in the Action field to allow **Social Networking sites** during lunch hours.

![Select ALLOW in Action field to allow Social Networking sites in lunch hours.](/img/How_To/Allow_Social_Networking_Sites_during_Lunch_Hours/image11.webp)

You need to specify a unique profile name inside the Added Profiles field. Here we have specified SOCIAL NETWORKING SITE in the Added Profiles field.

Click on the top right Icon to save the policy.

![Specify unique profile name inside Added Profiles field and click on top right Icon to save the policy.](/img/How_To/Allow_Social_Networking_Sites_during_Lunch_Hours/image12.webp)

## Testing
### Access Social Networking Sites at LUNCH Time
To test the scenario, try to access social networking sites during Lunch Hours you will be allowed to access it freely.

Apart from your mentioned Lunch Time rest of the time you should get the **BLOCK** Template when you access the social networking sites.
