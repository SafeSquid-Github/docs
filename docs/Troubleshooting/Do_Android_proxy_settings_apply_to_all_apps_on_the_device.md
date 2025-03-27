# Do Android Proxy Settings Apply to all Apps on the Device?

No, they do not apply globally, and without root, there is no way to force a proxy to be used by all applications.

The reason behind that is it depends upon the application creator to respect the proxy settings and use them or do the wrong thing and ignore them.

This is not the default behaviour; it could present some security risks. If all traffic could be redirected, users could have all their traffic going through some bad proxy server that snoops on them so they default to only allowing apps to use a proxy if they explicitly ask for it.

So, make sure that all devices connected to Wi-Fi are allowed to have a direct internet connection for specific ports.

## Example

For WhatsApp, you need to allow direct internet connection on ports mentioned below for all clients:

TCP: 4244,5222,5223,5228,5242

TCP/UDP: 59234, 50318

UDP: 3478,45395
