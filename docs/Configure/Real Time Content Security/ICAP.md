## What is the advantage of using ICAP?

ICAP is a protocol designed to off-load specific Internet-based content to dedicated servers, thereby freeing up resources and standardizing how features are implemented.

For example, a server that handles only language translation is inherently more efficient than any standard Web server performing many additional tasks.

ICAP concentrates on leveraging edge-based devices (proxies and caches) to help deliver value-added services. At the core of this process is a cache that will proxy all client transactions and process them through ICAP Web servers.

These ICAP servers are focused on a specific function, such as add insertion, virus scanning, content translation, language translation, or content filtering.

Off-loading value-added services from Web servers to ICAP servers allows those same web servers to be scaled according to raw HTTP throughput versus having to handle these extra tasks.

ICAP in its most basic form is a "lightweight" HTTP-based remote procedure call protocol.

In other words, ICAP allows its clients to pass HTTP-based (HTML) messages (Content) to ICAP servers for adaptation.

Adaptation refers to performing the value-added service (content manipulation) for the associated client request/response.

## How does ICAP work in SafeSquid?

The ICAP feature enables the proxy server to use an ICAP server to perform request modification, request satisfaction, or response modification to any request or response.

When enabled, what happens is this:

**For request modification:**

- client sends a request to the proxy server.

- proxy server forwards the request to the ICAP server, and the ICAP server will respond with a possibly modified request header.

- proxy server will use that modified request header to process the request.

This allows the ICAP server to do things like redirection, header filtering, etc.

**For request satisfaction:**

- client sends a request to the proxy server.

- proxy server forwards the request to the ICAP server, and the ICAP server will respond with a _response_ header and possibly a response body.

- proxy server will pass that response header and body onto the client; the request will not be further processed.

This allows the ICAP server to do things like URL blocking, etc.

**For response modification:**

- client sends a request to the proxy server.

- proxy requests file from a web server (or uses cached response). - proxy server forwards the response header and body to the ICAP server, and the ICAP server will respond with a possibly modified response header and body.

- proxy server will then send the possibly modified response header and body to the client.

This allows the ICAP server to do things like virus scanning, content modification, blocking inappropriate content, etc.

When an ICAP server is installed with a caching system, every transaction is piped through the ICAP server, allowing the server to modify or redirect Web requests or responses.

When an ICAP server is installed in an FTP system, every transaction is piped through the ICAP server, allowing virus and content filtering

software to operate on the content.

## Enabling the ICAP section on the SafeSquid User Interface

## [Access the SafeSquid interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

## Go to Configure Page

![Goto configure.webp](/img/Configure/Real_Time_Content_Activity/ICAP/image1.webp)

## Go to Real-time content security

![Go to real time content security.webp](/img/Configure/Real_Time_Content_Activity/ICAP/image2.webp)

## Go to ICAP Section

![ICAPconfiguredSlide1 (1).PNG](/img/Configure/Real_Time_Content_Activity/ICAP/image3.webp)

## Global

### Enabled

Enable or Disable this section.

-   **TRUE**: Enable ICAP interaction.

-   **FALSE**: Disable ICAP interaction.

![ICAPconfiguredSlide1 (2).PNG](/img/Configure/Real_Time_Content_Activity/ICAP/image4.webp)

![ICAPconfiguredSlide1 (3).PNG](/img/Configure/Real_Time_Content_Activity/ICAP/image5.webp)

![ICAPconfiguredSlide1 (4).PNG](/img/Configure/Real_Time_Content_Activity/ICAP/image6.webp)

![ICAPconfiguredSlide1 (5).PNG](/img/Configure/Real_Time_Content_Activity/ICAP/image7.webp)

## ICAP

![ICAPconfiguredSlide1 (6).PNG](/img/Configure/Real_Time_Content_Activity/ICAP/image8.webp)

Here we can create the policies for the ICAP section. Click on the ADD icon to create a new policy.

### Enabled

Enable or Disable this Policy.

-   **TRUE**: Enable this entry.

-   **FALSE**: Disable this entry.

![Icap-policy.jpg](/img/Configure/Real_Time_Content_Activity/ICAP/image9.webp)

### Comment

For documentation and future references, explain the relevance of this entry with your policies.

That is, by reading the policies, a future user can understand the purpose of that entry.

### Profiles

Specify the Profiles applicable for this entry.

This entry will be applicable only if the connection has any one of the specified profiles.

Leave it Blank, to apply for all connections irrespective of any applied profile.

To avoid application to a connection that has a profile, use a negated profile (!profile).

### ICAP Timeout

SafeSquid will timeout if the ICAP server does not respond within the specified ICAP Timeout.

### Host

The ICAP server hostname.

### File

The file to request from the ICAP server.

### Port

The ICAP server port.

### Applies to

-   **REQUESTS:** The ICAP server will be used to modify or satisfy requests.

-   **RESPONSES**: The ICAP server will be used to modify responses.

### Threat ID Header

ICAP server's response header that contains the luggable identification of the Detected Threat.

You can specify a comma-separated list of possible headers.

SafeSquid will use the first that is found in the response headers.

**Example**: X-Infection-Found, X-VIRUS-ID

### Quarantine

Preserve a local copy of the content sent to ICAP for processing.

-   **ENABLED:** Enable Quarantining.

-   **DISABLED:** Disable Quarantining.

### Include Request Headers in Response Quarantine

The Quarantined Response will include the Request Headers, for co-relating responses with requests.

-   **YES**: Yes, Include the Request Headers, in the quarantined Responses.

-   **NO**: No, Do Not include the Request Headers, in the quarantined Responses.

### Quarantine Clean Data

Specify if Quarantine should be done only when malware is detected.

-   **YES**: Quarantine Clean Files AND Infected Files.

-   **NO**: Quarantine Infected Files but DO NOT Quarantine Clean Files.

### Quarantinṣe Root Folder

The folder that must be used to save the Quarantined Data.

Make sure that the Folder exists, and SafeSquid has Read / Write Permissions.

### Default Policies

SafeSquid comes with some default Inspection policies as follows.

Enable or Disable the above policies as per the requirement or add a new policy for the new requirement.

![ICAPconfiguredSlide1 (7).PNG](/img/Configure/Real_Time_Content_Activity/ICAP/image10.webp)
