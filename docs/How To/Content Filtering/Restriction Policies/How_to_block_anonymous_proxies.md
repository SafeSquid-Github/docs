# How to Block Anonymous Proxies

## [Access the SafeSquid User Interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

SafeSquid comes with sample policy, helping you in policy creation.

**Note: - HTTPS Inspection should be enabled in SafeSquid. If not enabled, you can check our document -** [How to enable HTTPS Inspection](https://help.safesquid.com/portal/en/kb/articles/setup-https-inspection)

Click on 'Configuration' which is at top right of the SafeSquid Interface.

On the left side bar of SafeSquid Interface click on Real Time Content Security ===> Text Analyzer

![Text analyzer section in Real time Content Security](/img/How_To/How_to_block_anonymous_proxies/image1.webp)

Make the Global Section Enabled to TRUE and click on Filtering policies subsection.

There should be some default policies under Filtering Policies subsection,search for "Anonymous Proxy". Make sure all those policies should be Enables as TRUE.

![Showing filtering policies in text analyzer](/img/How_To/How_to_block_anonymous_proxies/image2.webp)

On the left side bar of SafeSquid Interface click on Restriction Policies ===> Access Profiles

There should be some default policies under Filtering Policies subsection,search for "BYPASS TEXT FILTER ". Make sure all those policies should be Enables as TRUE.

![default policy of BYPASS TEXT FILTER in access profiles](/img/How_To/How_to_block_anonymous_proxies/image3.webp)

Save (Save button is placed at right bottom)

## Testing:

Open any webproxy (Example: hide.me) through SafeSquid, the page should block.
