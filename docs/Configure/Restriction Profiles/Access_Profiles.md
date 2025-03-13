## Overview

Use Access Profiles to setup your Profiled Internet Access policies. Create an Entry to define Profile(s) as a combination of one or more conditions.

Each entry may optionally modify previously applied restrictions, or Profile(s).

The Profiling Engine re-evaluates the connections before user authentication, sending requests to the web server, and sending the response to the user.

Each re-evaluation processes the entire list before effecting the resultant restriction.

The Profiling Engine intelligently ignores disabled entries.

An entry is applicable to a connection only if it meets ALL the specified conditions.

The Profiling Engine's evaluation logic follows the order of your entries.

Logically inter-link entries by referring to Profiles, applied in a previous applicable Entry.

Your entries can add Profiles to a connection or remove them, logically.

## Policies and Profiles

SafeSquid's configuration allows you to - very precisely define the situations.

Each situation thus defined is referred to as a Policy/Profile.

Each Profile can be defined (or bound) by a programmable set of conditional parameters. Profiles are used as a conditional parameter in almost all of the various filtering sections in SafeSquid.

SafeSquid's Profiles feature allows you to accommodate the demands of extremely granular rules for Internet Access privileges and restrictions.

Rest assured you will be able to deal with the most complex situation, if you can accurately define a situation, and thus properly Profile a situation. 

Each of the rules in the Policies and Profiles Section is matched against a request, and if the conditional parameters set in the rule's various entered parameters (entries), the profiles specified in the "Added Profiles" entry is/are applied.

Implement your policies, by creating a logical order of Entries.

An Entry consists of Rules for testing applicability and desired impact on a connection.
SafeSquid's Profiling Engine evaluates your supplied logic - before user authentication, and re-evaluates before sending a request to a web server, and again before sending the response to the user.

Each re-evaluation cycle begins with the topmost entry and serially continues until the last matching entry.

The evaluation process skips disabled Entries.
An Entry is applicable to a connection, only if all the test rules match.

The applicability test of an Entry ignores rules, with option values set to blank.

An applicable entry may modify the impact of previously applied entries.

Every new request begins with no applied profiles. 

Every new request in a connection removes all Profiles applied to the connection.

You may also use the xx---profiles URL command to check applied profiles.

![](/img/Configure/Restriction_Profiles/Access_Profiles/image1.webp)

### Enabled

Enable or Disable this entry.

-   **TRUE**: Enable this entry.

-   **FALSE**: Disable this entry.

### Comment

For documentation and future references, explain the relevance of this entry with your policies. 
That is, by reading the policies, a future user can understand the purpose of that entry.

### Trace Entry

Enable or Disable Tracing of this entry.

Select "TRUE" to debug the application of entry using SafeSquid logs.

Enable entry tracing, is useful if you wish to validate, its application.

-   **TRUE:** Enable tracing of this entry.

-   **FALSE**: Disable tracing of this entry.

### Proxy Instance

Leave this blank, if this configuration is not shared across multiple instances of SafeSquid.
Leave it blank to apply this entry to all your instances of SafeSquid.
Specify the hostname(s) of the instances, for which this entry should be applicable if multiple instances share this configuration.
Mostly used in master-slave and cluster environments.

### Applicable Profiles

Specify the list of Profiles for which this entry should be applicable.
Leave it Blank, to ignore this applicability test.
Leave it Blank, to apply for all connections irrespective of their Profile.
To avoid the application of this entry to a connection that has a profile, use negation (! profile).

### Time Schedule

Specify the list of Time Profile(s) for which this entry should be applicable. Leave it Blank, to ignore this applicability test.
This entry will be applicable only if the connection has at least one of the specified Time Profile(s).
To avoid the application of this entry to a connection that has a Time Profile, use negation (! Weekday). 
Go to Time Profiler to review, or define new Time Profiles.

### User Groups

Specify the list of User Group(s), to which this entry is applicable. 
Leave it Blank, to ignore this applicability test.
If one or more User Groups are specified, this entry will be applied after it is determined if user authentication is required. If user authentication is required, then this entry will be applicable only after successful user authentication.

This entry will be applicable only if the connection has at least one of the specified User Group(s). 
To avoid application to a connection for specific User Group(s), use negation (! User Group). 
Go to Access Restrictions to review or define new User Groups.

### Request Types

List of Request Types or application categories, to which this entry will be applicable.
The connection should have been already profiled to have one or more of these Request Types or application categories.
Use Negation "!", to check this entry only, when specified Request Types or application categories are not applied to the connection.
Leave it Blank to check this entry irrespective of applied Request Types or application categories.
If you set this to "Browsers, Skype, Webinar, !Safari", then this entry will be applicable to only those connections that have been profiled as Browsers, Skype or Webinar, or not profiled as Safari.

### Categories

List of categories, to which this entry will be applicable. The connection should have been already categorized to have one or more of these categories.
Use Negation "!", to check this entry only, when specified categories are not applied to the connection.
Leave it Blank to check this entry irrespective of applied categories. If you set this to "Social,Chat,IM,!Porn ", then this entry will be applicable to only those connections that have been categorized as Social, Chat, or IM, or not categorized as Porn.

### Response Types

Specify the list of Response Profile(s) for which this entry should be applicable. Leave it Blank, to ignore this applicability test.
If one or more Response Profiles are specified, this entry will be applicable only after, a response has been received from the web server.
This entry will be applicable only if the connection has at least one of the specified Response Profile(s).

To avoid application to a connection for specific Response Profile(s), use negation (! Response Profile). Go to Response Profiler to review, or define new Response Profiles.

### Action

Specify the Action to take if all the applicability test rules match a connection.
Initially, all connections are allowed. Set it to "Inherit" to retain the action set by the previous applicable Entry.

-   **Allow:** Explicitly Allow the connection. Select this, if you want to allow requests or responses matching this policy.

-   **Deny:** Explicitly Deny the connection. Present the Blocked message to the user. A user with the "Bypass" privilege granted in Access Restrictions may choose to ignore the warning and continue. Select this, if you want to block requests or responses matching this policy. Will not block the requests or responses to those users who have allow bypass set from the access section.

-   **Do Not Bypass:** Explicitly Deny the connection. Present the Blocked message to the user. Prevents user with "Bypass" privilege granted in Access Restrictions to ignore the warning and continue.

-   **Inherit:** Retain the action set by the previous applicable Entry. Select this, if you want to apply the action based on previous profiles match up.

### Added Profiles

Specify the list of Profiles, to append to the connection's existing Profiles, if all the applicability test rules match.
Subsequent applicable Entry may further modify the connection's Profiles.
Define a new Profile(s), or Select previously defined Profile(s) from the drop-down menu to apply to the connection, if it matches this entry.
When defining a new Profile, use terms that uniquely represent your needs.
You can use added profiles in Virus scanning, SSL inspection and other filtering sections.

### Removed Profiles

Specify the list of Profile(s), to remove the connection's existing Profiles, if all the applicability test rules match.
Subsequent applicable Entry may further modify the connection's Profiles.

Select previously defined Profile(s) to remove from the connection when matches.
Use removes profiles adequately to ensure white-list profiles do not conflict with block profiles.
When a connection matches to block profile and as well white-list profile then your white-list entry should be configured to remove the block profile from the connection.
Leave it Blank to ignore.

## Example

### Rule#1

We want to block all websites. Create a new profile Block ALL. All connections will have the Block ALL profile applied by default. The typical blocking rule is to block all websites and then allow websites that are required, or vice versa.

![](/img/Configure/Restriction_Profiles/Access_Profiles/image2.webp)

### Rule#2

We want to bypass SSL inspection.

For websites that are categorized as "Bypass SSL Inspection", HTTPS inspection will be bypassed.

Bypass SSL inspection is used for websites that do not allow scanning of data within an encrypted SSL connection.

SSL inspection is bypassed for websites such as financial websites, government websites etc.

![](/img/Configure/Restriction_Profiles/Access_Profiles/image3.webp)

### Rule#3

Allow access to websites that are categorized as "Government, Search Engine & Portal, WHITELISTED WEBSITES"

Remove profile "Block All"

WHITELISTED WEBSITES are company-specific websites that are mission-critical websites.

![](/img/Configure/Restriction_Profiles/Access_Profiles/image4.webp)

### Rule#4

Allow temporary access to websites that are categorized as "Consumer Electronics, Information Security"

Added to profile Temporary Unblock

Remove profile Block ALL

This policy is used to provide access to a website temporarily or for testing.

![](/img/Configure/Restriction_Profiles/Access_Profiles/image5.webp)

### Rule#5

Connections with the request type "Microsoft Teams Desktop" which has been profiled in the request type using its user agent, will bypass user authentication.

Profile "Request for No Authentication" is used for bypassing user authentication. Profile "Request for No Authentication is used in access restriction to bypass authentication"

Remove profile "Block All"

![](/img/Configure/Restriction_Profiles/Access_Profiles/image6.webp)

### Rule#6

Connections with request type "Microsoft Teams Desktop" which has been profiled in request type using its user agent, which will be allowed to upload image files within the teams' application.

Added profile "ALLOW IMAGE FILE UPLOAD" so we can allow the upload of image content in Microsoft Teams.

Profile "ALLOW IMAGE FILE UPLOAD" is used in DLP to allow upload of all image contents.

![](/img/Configure/Restriction_Profiles/Access_Profiles/image7.webp)

### Rule#7

We want our users to access social media websites only during lunch hours which is from 2:00 PM till 2:30 PM.

Using the time profile, "STANDARD LUNCH HOURS" we can allow access to websites categorized as "Social Media" during lunch hours.

![](/img/Configure/Restriction_Profiles/Access_Profiles/image8.webp)

### Rule#8

We want to block downloads of "Macro Enabled Document" for the users-group "General Users".

Using response type, we can identify macro-enabled documents and block them. We can identify macro-enabled documents using the request type "MACRO ENABLED DOCUMENTS" & add the profile "RESTRICT ACCESS TO MACRO ENABLED DOCUMENT"

![](/img/Configure/Restriction_Profiles/Access_Profiles/image9.webp)
