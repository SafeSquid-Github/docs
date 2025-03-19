# ICAP

## What is the advantage of using ICAP?

ICAP is a protocol designed to off-load specific Internet-based content to dedicated servers, thereby freeing up resources and standardizing the way in which features are implemented. For example, a server that handles only language translation is inherently more efficient than any standard Web server performing many additional tasks.

ICAP concentrates on leveraging edge-based devices (proxies and caches) to help deliver value-added services. At the core of this process is a cache that will proxy all client transactions and will process them through ICAP Web servers. These ICAP servers are focused on a specific function, for example, add insertion, virus scanning, content translation, language translation, or content filtering. Off-loading value-added services from Web servers to ICAP servers allows those same web servers to be scaled according to raw HTTP throughput versus having to handle these extra tasks.

ICAP in its most basic form is a "lightweight" HTTP based remote procedure call protocol.

In other words, ICAP allows its clients to pass HTTP based (HTML) messages (Content) to ICAP servers for adaptation. Adaptation refers to performing the particular value-added service (content manipulation) for the associated client request/response.

## How does ICAP work in SafeSquid?

The ICAP feature enables the proxy server to use an ICAP server to perform request modification, request satisfaction, or response modification to any request or response.

When enabled, what basically happens is this:

For request modification:

1. client sends request to proxy server.

1. proxy server forwards request to the ICAP server, ICAP server will respond with a possibly modified request header.

1. proxy server will use that modified request header to process the request.

This allows the ICAP server to do things like redirection, header filtering, etc.

For request satisfaction:

1. client sends request to proxy server.

1. proxy server forwards request to ICAP server, ICAP server will respond with a _response_ header and possibly a response body.

1. proxy server will pass that response header and body onto the client; the request will not be further processed.

This allows the ICAP server to do things like URL blocking, etc.

For response modification:

1. client sends request to proxy server.

1. proxy requests file from web server (or uses cached response). 1. proxy server forwards response header and body to ICAP server, ICAP server will respond with a possibly modified response header and body.

1. proxy server will then send the possibly modified response header and body to the client.

This allows the ICAP server to do things like virus scanning, content modification, block inappropriate content, etc.

When an ICAP server is installed with a caching system, every transaction is piped through the ICAP server, allowing the server to modify or redirect Web requests or responses.

When an ICAP server is installed in an FTP system, every transaction is piped through the ICAP server, allowing virus and content filtering

software to operate on the content.

## Enabling ICAP section on SafeSquid User Interface

## [Access the SafeSquid interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

### Go to Configure Page

![clicking on configure in safesquid interface](/img/How_To/ICAP/image1.webp)

### Go to Real time content security

![go to real time content security](/img/How_To/ICAP/image2.webp)

### Go to ICAP Section

![going to ICAP section](/img/How_To/ICAP/image3.webp)

### Global

#### Enabled

Enable or Disable this section.

**TRUE**: Enable ICAP interaction.

**FALSE**: Disable ICAP interaction.

![option to enable or disable the ICAP section globally](/img/How_To/ICAP/image4.webp)

![clicking on edit button in global section](/img/How_To/ICAP/image5.webp)

![selecting true in enabled field](/img/How_To/ICAP/image6.webp)

![clicking on save policy ](/img/How_To/ICAP/image7.webp)

### ICAP

![going to ICAP tab in ICAP section](/img/How_To/ICAP/image8.webp)

Here we can create the policies for ICAP section. Click on ADD icon to create a new policy.

#### Enabled

Enable or Disable this Policy.

**TRUE**: Enable this entry.

**FALSE**: Disable this entry.

![ICAP policy field overview](/img/How_To/ICAP/image9.webp)

#### Comment

For documentation, and future references, explain the relevance of this entry with your policies.

That is, by reading the policies, a future user can understand the purpose of that entry.

#### Profiles

Specify the Profiles applicable for this entry.

This entry will be applicable only if the connection has any one of the specified profiles.

Leave it Blank, to apply for all connections irrespective of any applied profile.

To avoid application to a connection that has a profile, use negated profile (!profile).

#### ICAP Timeout

SafeSquid will timeout if the ICAP server does not respond within the specified ICAP Timeout.

#### Host

The ICAP server hostname.

#### File

The file to request from the ICAP server.

#### Port

The ICAP server port.

#### Applies to

**REQUESTS**: The ICAP server will be used to modify or satisfy requests.

**RESPONSES**: The ICAP server will be used to modify responses.

#### Threat ID Header

ICAP server's response header that contains the luggable identification of the Detected Threat.

You can specify a comma-separated list of possible headers.

SafeSquid will use the first that is found in the response headers.

**Example**: X-Infection-Found, X-VIRUS-ID

#### Quarantine

Preserve a local copy of the content sent to ICAP for processing.

**ENABLED**: Enable Quarantining.

**DISABLED**: Disable Quarantining.

#### Include Request Headers in Response Quarantine

The Quarantined Response, will include the Request Headers, for co-relating responses with requests.

**YES**: Yes, Include the Request Headers, in the quarantined Responses.

**NO**: No, Do Not include the Request Headers, in the quarantined Responses.

#### Quarantine Clean Data

Specify if Quarantine should be done for only when malware is detected.

**YES**: Quarantine Clean Files AND Infected Files.

**NO**: Quarantine Infected Files But DO NOT Quarantine Clean Files.

#### Quarantine Root Folder

The folder that must be used to save the Quarantined Data.

Make sure that the Folder exists, and SafeSquid has Read / Write Permissions.

#### Default Policies

SafeSquid comes with some default Inspection policies as follows.

Enable or Disable above policies as per the requirement or add new policy for new requirement

![default policies of ICAP. Comment will explain the work of each policy](/img/How_To/ICAP/image10.webp)
