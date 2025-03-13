## Overview

Use Time Profiler to set up your Time-based Internet Access policies.

The working of the Time profiler is based upon time ranges only.

The time ranges are Month range, Day range, Weekday range, Hour range and Minute range.

Create an Entry to define Time Profile(s) as a combination of one or more combinations of time ranges.

Time Profiler Enables you to allow or block the categories, and websites based on the time ranges.

## Enabling the Time Profiler section on the SafeSquid User Interface

## [Access SafeSquid interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

## Go to the configure page.

![clicking on configure in safesquid interface](/img/Configure/Custom_Settings/Time_Profiler/image1.webp)

## Go to custom settings.

![clicking on custom settings in the sidebar](/img/Configure/Custom_Settings/Time_Profiler/image2.webp)

![clicking on time profile in the custom settings section](/img/Configure/Custom_Settings/Time_Profiler/image3.webp)

## Global

### Enabled

Enable or Disable the time profiles Section.

TRUE: Enable the time profiles section.

FALSE: Disable the time profiles section.

![showing global section of time profiler](/img/Configure/Custom_Settings/Time_Profiler/image4.webp)

## Time profiles

Create a list of Entries to implement your Time profile Policies.

Safesquid evaluates the entries in the order of top to bottom.

All the entries within the time range are applicable.

Add month, day, weekday, hour, and minute ranges for each entry.

Each entry will be applicable for all combinations mentioned in that entry.

**Example:**

Month range: January to May

Day range: 1 to 15

Weekday range: Monday to Friday

Hour range: 9 AM to 16 PM

Minute range: 30 to 00

The Above profile will block all social categories, every month from 1st-15th From Jan to May and every day from 9:30 AM to 4:00 PM, between Monday to Friday, if you select Time match mode as **allranges**.

The Above profile will block all social categories, every month from 1st-15th From Jan to May and every week from Monday - 9:30 AM to Friday - 4:00 PM, if you select Time match mode as **absolutemode**.

![clicking on add new button to add new policy](/img/Configure/Custom_Settings/Time_Profiler/image5.webp)

![showing time profiles tab in time profiler section](/img/Configure/Custom_Settings/Time_Profiler/image6.webp)

### Enabled

Enable or Disable this entry.

-   TRUE: Enable this entry.

-   FALSE: Disable this entry.

### Comment

For documentation and future references, explain the relevance of this entry with your policies.

That is, by reading the policies, a future user can understand the purpose of that entry.

### Trace Entry

Enable or Disable Tracing of this entry.

Select "Yes" to debug the application of entry using SafeSquid logs.

Enable entry tracing, is useful if you wish to validate, its application.

-   **TRUE:** Select this option to enable profile tracing.

-   **FALSE:** Select this option to disable profile tracing.

### Time Profiles

Specify the list of Time Profile(s)for which this entry should be applicable.

Leave it Blank, to ignore this applicability test.

This entry will be applicable only if the connection has at least one of the specified Time Profile(s).

To avoid the application of this entry to a connection that has a Time Profile, use negation (! Weekday).

Go to Time Profiler to review or define new Time Profiles.

### Month Range

Set the month range for which this entry is active.

By default, it applies to all months.

Example: January to March: Keep this policy active from the month of January through March.

### Day Range

Set the day range for which this entry is active.

By default, it applies to all days.

**Example:** Day 5 to 15 Keeps this profile active from day 5th through day 15th.

If you mentioned the month range as January to March, then this profile will be active from every month 5 to 15 from January through March.

### Weekday range

Set the weekday range for which this entry is active.

By default, it applies to all weekdays.

**Example**: Monday to Thursday: Keeps this profile active from Monday through Thursday.

If you mentioned Month Range and Day Range, then this profile is active for the combination of all ranges (Month Range + Day range + weekday range).

### Hour Range

Set the hour range for which this entry is active. By default, applies to every hour.

**Example:** Hour 9 to 12 then Keep this profile active from 9 AM to 12 AM.

### Minute Range

Set the minute range for which this entry is active, if left blank apply to every minute. This can be used in conjunction with Hour Range.

**Example**: If the hour range is 9 to 12 and the minute range is 15 to 30, then the profile remains active from 9:15 through 12:30.

### Time Match Mode

Select the appropriate mode to match the multiple time ranges.

**ABSOLUTETIME:** When the absolute time match mode is used, any time between starting and ending time only will match.

Example: The weekday range specified is Monday to Friday and the Hour Range is 9 to 17.

Absolute match mode will match any time starting Monday, 9 AM and ending Friday, 17 PM.

That is, entry will be active from every week Monday 9 AM to Friday 5 PM.

**ALLRANGES**: With the allranges time match mode, however, a time within all the ranges will match.

Example: The weekday range specified is Monday to Friday and the Hour Range is 10 to 17.

All ranges will match any time between 10 AM to 17 PM, on all weekdays from Monday to Friday.

That is, Entry will be active every day from Monday to Friday between 10 Am to 17 PM.

### Added Time profiles

Specify the list of Profiles, to append to the connection's existing Profiles, if all the applicability test rules match.

Subsequent applicable Entries may further modify the connection's Profiles.

Define a new Profile(s) or select previously defined Profile(s) from the drop-down menu to apply to the connection if it matches this entry.

When defining a new Profile, use terms that uniquely represent your needs.

You can use added profiles in Virus scanning, SSL inspection and other filtering sections.

### Removed Time profiles

Specify the list of Profile(s), to remove the connection's existing Profiles, if all the applicability test rules match.

Subsequent applicable Entries may further modify the connection's Profiles.

Select previously defined Profile(s) from the drop-down menu to apply to the connection if it matches this entry.

## Example

### Rule#1

We want to have a standard time profile for our office working hours.

Our office hours are from 10 AM till 9 PM Monday to Friday.

For connections with the profile "STANDARD OFFICE HOURS," a Time profile will be added. A time profile is used to set policies-based rules with time set as a condition.

![showing rule which is created for standard office working hours](/img/Configure/Custom_Settings/Time_Profiler/image7.webp)

### Rule#2

Our office lunch hours are from 2 PM to 2:30 PM, Monday to Friday.

Based on the time profile "STANDARD LUNCH HOURS" we want to allow websites that are categorized as "Social Media" during our lunch hours.

![showing rule which is created for standard office lunch hours](/img/Configure/Custom_Settings/Time_Profiler/image8.webp)
