# Profile Internet Access

## Overview

In modern days the importance of security in organizations is vital and managing security products is become common practice. Everything will go well until and unless some engineer makes a mess of the setup. It will be a nightmare for systems administrators to fix it immediately. So, the need for simple and interactive configuration engaged security experts in designing amazing user interfaces for configuration.

SafeSquid's Profiles feature allows you to accommodate the demands of extremely granular rules for Internet Access privileges and restrictions. You will be able to deal with the most complex situation, as long as you can accurately define a situation, and properly Profile a situation.

Safesquid provides robust user interface for granular policy creation and management. Web GUI is one of the simplest UI and everything connected to it make users life easy.

## Policy Management

SafeSquid manages policies using profiles to link each security policy with required attributes like time, user/group, category and actions required.

The Policies can be built to very precisely define situations, by subjecting them to a variety of conditional parameters. And then by applying the profile in to one or more rules in an appropriate filter, we can always define the restrictions or relaxations.

Yet manages critical setups separately.

![Policy Management](/img/How_To/Profiled_Internet_Access/image1.webp)
## Creating Access Profiles

Understanding the creation and application of "Profiles" is the most essential part of overall SafeSquid's filtering configuration. Understanding how the Profiles work, internally, could be quite useful. Each request is matched against the various rules in the Access Profiles Section. If all the specified conditional parameters (entries) of a rule match the request, then the list of Added Profiles are included in the Profiles List for that request. Similarly, if a rule in the Access Profiles Section has a list of Removed Profiles, then these Removed Profiles are deleted from the Profiles List. SafeSquid, thus builds an internal Profiles List for each connection. SafeSquid ensures that all Profile names are unique in the list.

Create your security policy using Time/ user/group / HTTP request/ HTTP response/ Application /Website categories and mention respective actions.

Now name it. It's a profile.

![Binding Access Profiles](/img/How_To/Profiled_Internet_Access/image2.webp)

Binding Access Profiles

Each of the filters, uniquely processes a connection, based on the conditional parameters specified as entries in the various rules in the filters. Almost all Filters have Profiles as a conditional parameter. Thus, by appropriately creating a profile and then, specifying them as a conditional parameter in any rule of any Filtering Section, you can either subject or immunize the connection from a Filtering Rule.

You have created your profiles; Now bind them for various filtering and scanning policies.

Simple right.

![Binding Access Profiles](/img/How_To/Profiled_Internet_Access/image3.webp)

## See Also

1.[Access_Profiles](https://help.safesquid.com/portal/en/kb/articles/access-profiles)
