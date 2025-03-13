# How does HTTPS inspection work with SafeSquid?

![HTTPS inspection flow](/img/How_To/How_does_HTTPS_inspection_work_with_SafeSquid/image1.webp)

1. When user/client request a secure webpage say https://www.xyz.com (a HTTPS site) from the browser, SafeSquid will get CONNECT request from the client browser.

2. SafeSquid will check configuration whether the user is allowed or denied to access to https://www.xyz.com. If access is denied to such websites, then, SafeSquid will send blocked template to that user's browser and closes connection.

3. If access to https://www.xyz.com allowed to client then SafeSquid checks whether SSL inspection enabled for site or not?

If HTTPS inspection is disabled then SafeSquid resolve IP of xyz.com with the help of DNS and establishes connection to the www.xyz.com. Client browser checks the trust of the www.xyz.com server. Client browser encrypts data using server public key and sends back to server. There is no possibility for SafeSquid to check what client is sending to server and what is coming to client's browser from the server. SafeSquid will not check what is going on inside connection.

If HTTPS inspection enabled then

i) SafeSquid resolves IP of www.xyz.com with the help of DNS and establishes connection to the www.xyz.com.

ii) SafeSquid performs SSL handshake with server.

SafeSquid sends client hello message to the server in the process of SSL handshake.

SafeSquid will get server public key in server hello message from the server in the process of SSL handshake.

SafeSquid will check the trust of the www.xyz.com certificate with the help of trusted root ca bundle.

If SafeSquid finds that certificate expired or invalid then SafeSquid allows or blocks the access to the site based on configuration.

If SafeSquid finds that server certificate is valid then SafeSquid performs SSL handshake with client.

After this SafeSquid uses server certificate (public key) to encrypt the data that will be sent to server. Further server can decrypt the data sent by the SafeSquid and returns response accordingly.

iii) SafeSquid performs SSL handshake with client

Client browsers send client hello message to the SafeSquid server in the process of SSL handshake.

SafeSquid will check whether public key and private key for www.xyz.com site does exist in the disk or not. If site does not exist then SafeSquid will create public key and private key for www.xyz.com and store them in the disk for reusability.

SafeSquid will send back created server public key in server hello message to the client browsers in the process of SSL handshake with client.

Client browsers further verify the trust of the certificate (public key) sent by SafeSquid. To verify the trusted certificate clients, need to import Safesquid.cer certificate into their browsers trusted authority.

After this client uses SafeSquid created certificate (public key) to encrypt the data that will be sent to SafeSquid. SafeSquid can decrypt the data sent by clients with the help of created private key and checks the data and sends it to server by encrypting data with the server public key.
