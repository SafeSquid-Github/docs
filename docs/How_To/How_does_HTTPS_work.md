# How does HTTPS work?

When you prepare your web server to use HTTPS you will be asked a few questions about your website and your company including your web site\'s domain name and your company\'s name and location. Your web server then creates two cryptographic keys: a private key and a public key. Your private key must remain private or the HTTPS connection could be made vulnerable. The public key does not need to be secret and is placed into a [Certificate Signing Request](https://www.sslshopper.com/what-is-a-csr-certificate-signing-request.html) or CSR, a piece of encrypted text that you will submit to a certificate authority. The certificate authority will validate your details and issue the SSL certificate which you can then install to the web server with the private key to enable HTTPS. For more information, see [SSL For Newbs](https://www.sslshopper.com/article-ssl-for-newbs.html).

![showing flow chart of how https works](/img/How_To/How_does_HTTPS_work/image1.webp)

You can enable or disable HTTPS scanning from SafeSquid HTTPS inspection section.
