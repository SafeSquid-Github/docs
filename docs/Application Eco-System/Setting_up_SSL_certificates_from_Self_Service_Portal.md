# Setting Up SSL Certificates from Self Service Portal

## Overview

HTTPS-aware applications such as Internet Browsers, implement SSL/TLS protocols to prevent inadvertent communication with a malafide web service.

The SSL / TLS protocols enable applications to verify the identity of the remote web services, and appropriately encrypt the entire
communication preventing any third party from eavesdropping. 

In response to the SSL Handshake initiated by the client application, the remote web service submits identification using a Digital Server (SSL/TLS) Certificate.

The client application maintains stores of CA certificates representing various Trusted Root Certification Authority.

Unless explicitly trusted, the client application checks if the server certificate is signed by a Trusted Root CA.

The Trusted Root CA binds the server certificate to a set of FQDNs and ensures each signed certificate bears a unique serial number.

Post verification the client proceeds with normal HTTP Protocol, but the communication is encrypted based on the parameters agreed during the SSL handshake, and the server certificate. The communication is thus opaque and cannot be inspected or modified by a third party.

To inspect and/or modify the communication between a client and server, a proxy server terminates connections.

For handling HTTPS traffic, it must additionally perform SSL Termination.

This requires the proxy server to provide an SSL Certificate for the web service requested by the client.

For a seamless user experience, this SSL certificate must be signed by a Trusted Root CA.

Enterprises therefore ensure a Trusted Root CA is installed in the Trusted Root CA Store of the sanctioned web applications, such as Internet Browsers.

The proxy server is provided this Trusted Root CA, along with the associated Private Key.

The proxy server then produces the required SSL certificates for any web service and signs it using the provided Certificate-Key pair.

Enterprises that require multiple instances of proxy services to handle large traffic volumes or geographic spread.

The deployment must also guarantee each certificate thus created by proxy servers has a distinct serial number.

You would be required to then share the CA certificate with your enterprise users, or push it via Group Policies if you have a Microsoft Domain Network.

You may also import an SSL CA Certificate, provided by your existing Enterprise CA Infrastructure.

In such a case, you would not be required to push a Trusted Root CA Certificate.

All SafeSquid instances deployed by you that share the same Product Activation Key, shall automatically download the Trusted Root CA certificate.

Each SafeSquid instance shall then produce a sub-CA certificate-key pair, to sign the SSL Certificates for requested web services.

This mechanism ensures each SSL certificate bears a unique serial number and signature, but only one Trusted Root CA Certificate is to be shared across client applications.

All Certificate-Key pairs are passphrase-protected to prevent misuse.

## [Access the Self-Service Portal](https://help.safesquid.com/portal/en/kb/articles/access-the-self-service-portal)

Log in to the Self-Service Portal - https://key.safesquid.com

The Self-Service Portal for managing your SafeSquid deployments, facilitates easy creation of Trusted Root CA Certificates.

![interface of self service portal](/img/Application_Eco-System/Setting_up_SSL_certificates_from_Self_Service_Portal/image1.webp)

![clicking on manage certificate](/img/Application_Eco-System/Setting_up_SSL_certificates_from_Self_Service_Portal/image2.webp)

## Generate SafeSquid Certificate

### Using Self-Signed Certificate.

> **Note**: When you see the "Generate" button it means that SafeSquid's SSL certificate has not been generated yet.

![clicking on generate ](/img/Application_Eco-System/Setting_up_SSL_certificates_from_Self_Service_Portal/image3.webp)

> **Note**: The passphrase entered in step #3 is non-recoverable. Remember to save the passphrase if in case you want to reuse the same certificate with a different activation key.

![selecting general self signed and wntering passphrase for self signed certificate and clicking on generate](/img/Application_Eco-System/Setting_up_SSL_certificates_from_Self_Service_Portal/image4.webp)

![clicking on close to continue](/img/Application_Eco-System/Setting_up_SSL_certificates_from_Self_Service_Portal/image5.webp)

### Using Enterprise CA Certificate

#### With a Passphrase

Generating SafeSquid certificate using an enterprise CA certificate which has a passphrase.

![clicking on regenerate, uploading the enterprise CA cert and selecting have passphrase option ](/img/Application_Eco-System/Setting_up_SSL_certificates_from_Self_Service_Portal/image6.webp)

![selecting CA cert files](/img/Application_Eco-System/Setting_up_SSL_certificates_from_Self_Service_Portal/image7.webp)

![entering the passphrase and clicking on validate private key](/img/Application_Eco-System/Setting_up_SSL_certificates_from_Self_Service_Portal/image8.webp)

![selecting retain password and clicking onupload](/img/Application_Eco-System/Setting_up_SSL_certificates_from_Self_Service_Portal/image9.webp)

![clicking on close to continue](/img/Application_Eco-System/Setting_up_SSL_certificates_from_Self_Service_Portal/image10.webp)

#### Without a Passphrase

![clicking on regenerate, uploading the enterprise CA cert and selecting does not have passphrase option](/img/Application_Eco-System/Setting_up_SSL_certificates_from_Self_Service_Portal/image11.webp)

![selecting the CA cert files](/img/Application_Eco-System/Setting_up_SSL_certificates_from_Self_Service_Portal/image12.webp)

> **Note**: The passphrase entered in step #6 is non-recoverable. Remember to save the passphrase if in case you want to reuse the same certificate with a different activation key.

![entering new passphrase and clicking on upload](/img/Application_Eco-System/Setting_up_SSL_certificates_from_Self_Service_Portal/image13.webp)

![clicking on close to continue](/img/Application_Eco-System/Setting_up_SSL_certificates_from_Self_Service_Portal/image14.webp)

## Download Certificate

### From the Self-Service Portal

![clicking on download to download your self signed certificate](/img/Application_Eco-System/Setting_up_SSL_certificates_from_Self_Service_Portal/image15.webp)

Click on "Download" to download your certificate

### From Web Interface

Refer to the below link on how to download an SSL certificate from your web interface.
https://help.safesquid.com/portal/en/kb/articles/download-ssl-certificate-from-interface

## Caution

SSL Certificate Downloaded with Zero KB size.

Cause: Directly download the SSL certificate from SafeSquid Interface by enabling the HTTPS Inspection section without generating a passphrase from the Self-Service Portal.

## Related Links

1.    [Importing Your SSL Certificate Into Firefox](https://help.safesquid.com/portal/en/kb/articles/importing-your-ssl-certificate-into-firefox)

1.    [Importing Your SSL Certificate Into Internet Explorer or Chrome](https://help.safesquid.com/portal/en/kb/articles/importing-your-ssl-certificate-into-internet-explorer-or-chrome)

1.    [HTTPS Inspection](https://help.safesquid.com/portal/en/kb/articles/https-inspection)

1.    [Bypass HTTPS Inspection by using Request Types](https://help.safesquid.com/portal/en/kb/articles/bypass-https-inspection-by-using-request-types)
