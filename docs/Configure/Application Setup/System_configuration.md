# System Configuration

## Overview

Use 'System configuration' to tune various parameters with respective network infrastructure.

By this tuning, you can improve overall Internet service performance and manage your secure port utilization.

## Enabling the System configuration section on the SafeSquid User Interface

## [Access the SafeSquid interface](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

## Go to Configure Page

![clicking on configure in safesquid interface](/img/Configure/Application_Setup/System_configuration/image1.webp)

## Go to Application Setup 

![going to application setup in the sidebar](/img/Configure/Application_Setup/System_configuration/image2.webp)

## Open System Configuration Section

## Global

![showing global section of system configuration](/img/Configure/Application_Setup/System_configuration/image3.webp)

### Proxy hostname

When your enterprise has multiple instances of SafeSquid, the various instances identify each other by this 'Proxy hostname'.

If your enterprise maintains a single LDAP domain, then set the proxy hostname parameter as 'your LDAP domain'.

Then you can log in over LDAP authentication without mentioning the domain.

### Connection pool size

Set the maximum concurrent outbound connections.

SafeSquid can reuse an established outbound connection, from the Connection Pool.

Connection Pool Size should be at least equal to anticipated concurrent requests, Minimally.

If the Connection Pool is full, SafeSquid automatically deletes the oldest connection, to accommodate a new outbound connection.

### Connection pool timeout

You can set here the maximum time period in seconds, that a connection may be kept in the connection pool.

The age of a connection is reset every time it gets used.

When the age of a connection exceeds the timeout specified here, it is automatically removed from the pool.

### Send debugging headers to

Vital debugging information like the application of profiling and filtering policies can be included in the HTTP protocol headers.

Specify if this information should be sent to the client, server, or both.

Leave the field empty if this information should not be sent at all.

**Available Options**

**NONE**: Do not send debugging headers to the client or server.

**CLIENT**: Send debugging headers to the client.

**SERVER**: Send debugging headers to the server.

**BOTH**: Send debugging headers to both client and server.

### Dynamic Categorization

The requested URL is normally considered for categorization purposes.

However, when accessing a web page, Internet Browsers may require connecting to various other URLs to complete the portrayal of the web page.

Requests to these dependency URLs may thus get differently categorized than the originally requested web page.

Thus, even if the initially requested URL is included in a "Custom Category" created by you, and permitted for access, the proxy users may witness "broken pages".

Providing a satisfactory web experience to the users thus requires identification and explicit access permission for each of such dependency URLs.

Dynamic Categorization determines requests made by Internet Browser to serve a web page included in a Custom Category.

Custom Categories applicable to the "Referring Web-Page" are added to the list of categories determined for the requested URL.

Dynamic Categorization enables a holistic web experience for the users when accessing permitted websites.

Available Options

**FALSE**: Apply only the Categories associated with the Requested URL

**TRUE**: Append Custom Categories applicable to the Referring Web-Page to the Categories associated with the Requested URL.

### Example

#### Rule#1

The proxy hostname is set to AD's domain Connection outbound pool size is set to 3000, this number should be approximately around the number of concurrent connections created by the total number of users Connection pool timeout is set to 6 seconds, where unused connections in the connection pool are discarded every 6 seconds.

For connections in the pool, its timeout value rests every time the connection is being used. Send debugging to the client, debugging headers are greatly used during the troubleshooting process Debugging headers are added to the HTTP response header.

Dynamic categorization is set to false, Dynamic categorization is used to categorise a website based on its referrer. Dynamic categorization can be used to avoid broken webpages in cases where resources are loaded from different sources which might be blocked.

![rule showing proxy hostname set as safesquid.lab in the global section](/img/Configure/Application_Setup/System_configuration/image4.webp)

## Compression and buffering policies

The following entries are applied to each connection based on the profiles defined. Policy evaluation is done in top-down order. The first entry matching the profile is applied to the connection.

![showing compression and Buffering policies tab in system configuration](/img/Configure/Application_Setup/System_configuration/image5.webp)

### Enabled

Enable or Disable this entry.

TRUE: Enable this entry.

FALSE: Disable this entry.

### Comment

For documentation and future references, explain the relevance of this entry with your policies.

That is, by reading the policies, a future user can understand the purpose of that entry.

### Profiles

Specify the Profiles applicable for this entry.

This entry will be applicable only if the connection has any one of the specified profiles.

Leave it Blank, to apply for all connections irrespective of any applied profile.

To avoid application to a connection that has a profile, use a negated profile (!profile).

### Connection Timeout

You can specify maximum time in seconds, for safesquid to wait for the establishment of connection.

This affects the outbound connections made by SafeSquid.

**Example**: If you have a slow Internet Connection. Create a profile for slow to connect to websites, and select them by increasing this timeout value.

### Header timeout

Depending upon your network conditions, a significant amount of time may pass between the events of connection set-up and the receipt of initial headers from the client.

The timeout is in seconds to wait for a client to make the initial HTTP request.

The default value of "5" seconds may not be enough when used by ISPs to service dial-up customers.

### Keepalive Timeout

SafeSquid can keep a connection established with a client, in a client pool. Thus, it can quickly respond to further requests from such clients.

You can specify here in seconds, the maximum time for which the connection may be held at the pool.

### Maximum Download Buffer Size

Some of the SafeSquid's functions like keyword filtering, content rewrite, image filtering, virus scanning, etc. require content to be downloaded for processing.

SafeSquid buffers such content, and then passes then to the relevant processors. You can specify here, the maximum size of the downloaded content that may be buffered and therefore processed. You may use these units: (K) kilobytes, (M) Megabytes.

### Maximum Upload Buffer Size

The maximum size of uploads that are buffered for processing, larger uploads are sent directly to the Web server without processing.

Having an upload buffer that is too large causes the browser to timeout since all the data is received by safesquid immediately, but may take more time to process and transfer to the website.

### Buffer Wait time

When the content is being buffered, the client may be sent an intimation of the downloading status.

SafeSquid can automatically send the template "downloading" when the content is being downloaded into the buffer. You can specify, the time interval in seconds, at which the downloading template is resent.

### CONNECT Ports

SafeSquid can be used by applications that support like FTP-clients and other utilities to make "CONNECT", requests. CONNECT over HTTP allows these applications to create a direct tunnel for the required target services.

The specification may be done as a port range**. For example** - 20,21,1023-65535.

**Caution**: The data exchanged by the CONNECT protocol cannot be buffered, and therefore analyzed for filtering purposes.

### Always Compress Mimetype

A regular expression matching the MIME-types which should always be buffered and compressed even if they wouldn't be buffered otherwise.

### Compress Outgoing

SafeSquid can compress data using gzip compression, before sending data to clients. This can significantly boost throughput if SafeSquid is being used as a remotely hosted solution.

For networks wherein SafeSquid is deployed locally, it is recommended you disable this feature.

TRUE: Enable Compress outgoing.

FALSE: Disable Compress outgoing.

### Compress Incoming

This option makes Safesquid attach an Accept-Encoding header that lets the Web server know we can accept gzip and deflate content encodings regardless of whether or not the browser making the request supports it.

If the browser doesn't support it, it is buffered and decompressed before sending.

TRUE: Always Request Compressed data from a remote web server.

FALSE: Never Request Compressed data from the remote web server.

**AUTO:** Request Compressed data from the remote web server ONLY if supported by the client.

### Add X-Forwarded-For header

This option adds a header letting an upstream proxy or Web server know the IP address where the original request came from.

This feature must be enabled if you are deploying SafeSquid as an ISP-based solution.

**TRUE**: Enable the addition of the X-Forwarded-For header.

**FALSE**: Disable addition of X-Forwarded-For header.

### Buffer Chunked Responses

Buffering Chunked Responses is generally never advisable.

Unfortunately, however, real-time content inspection requires buffering of the response payload.

Therefore, under certain conditions, if you have no choice, you may want to buffer chunked responses.

Select one of the options very wisely.

Recommended and default is **FALSE.**

### Add Via header

This option adds a header letting an upstream proxy or Web server know what proxy server the request passed through.

This feature must be enabled if you are deploying SafeSquid as an ISP-based solution.

TRUE: Enable via header.

FALSE: Disable via header.

**Note**: You can view information on the current connection(s) that are being held open in the connection pool and/or awaiting reuse on SafeSquid Web-GUI i.e. on the Connection Pool tab of the Reports page.

### Example

#### Rule#1

I want a default policy for all standard connections.

Where the connection timeout for connection, header and keep alive value is set to 6 seconds. Connection timeout is set to define the timeout period for the initial connection between SafeSquid and the webserver to complete, if the server does not reply within 6 seconds the connection is dropped.

Header timeout is set to define the timeout period for the initial receipt of a header from the web server once the connection has been established, if the server does not send the header within 6 seconds the connection is dropped.

Keep alive timeout is used to keep the connection with the client alive for 6 seconds, if the connection is not being used for more than 6 seconds, the connection is discarded.

Maximum download buffer size is used to download the file for the required feature for content processing. The maximum download buffer is set to 10 Megabytes Maximum upload buffer size is used for content processing by the requested feature. Files that are larger than 10 Megabytes are directly sent to the web server without processing.

When the content is being downloaded client is sent a template of downloading data, we can adjust the intervals of when to send the downloading template using the buffer wait time.

I want to allow connections to port 2096, using Connect ports we can allow additional ports for SafeSquid to communicate.

Always compress content using mime type - html, text/css, javascript, text, word, excel, XML.

Compress outgoing resources are set to false.

Compress income resources, are used to compress incoming resources and it is set to auto, where it will request the web server for compressed data only if it is supported by the client.

Buffer chunked response, buffering for chunked response is required for content inspection of the resources whose data is sent in chunks, SafeSquid's feature from "Real-time content security" requires buffering of chunked data.

Add x-forwarded-for-header and add via header is used to inform the upstream proxy of the IP address where the original request was made.

Add via header it is used to inform the web server the request has passed through.

![showing a default rule in Compression and Buffering policies section](/img/Configure/Application_Setup/System_configuration/image6.webp)
