# Mail Integration with Reporting Module 

## Prerequisites

Before you get started with this guide, you have to complete some basic steps.

First, we'll assume that you have an access of SafeSquid server.

We are also assuming that you've **Reporting Module** set up. You can follow this guide to [Setup Reporting Module](https://help.safesquid.com/portal/en/kb/articles/setup-reporting-module) and come back.

## Mail Integration

Change directory to /usr/local/safesquid/api

Command: **cd /usr/local/safesquid/api**

Open **config.ini** from SafeSquid console

Command: **vim config.ini**

Find **mail_details** block and fill the mailing details. Refer the below table while filling the details.

  -----------------------------------------------------------------------
  useremail         Sender Email Address
  ----------------- -----------------------------------------------------
  userpaaswd        Password of the Sender Email

  smtpserver        FQDN/IP of your SMTP server

  smtpport          Port on which your SMTP server is listening on

  toaddr            Reciever Email Addresses

  ccinfo            Email addresses to cc, if any
  -----------------------------------------------------------------------

**Important Notes**

-   All the fields are mandatory except ccinfo. Set the value as none if you would like to leave the field empty.

-   toaddr and ccinfo can have comma separated values

-   **Eg**: admin@safesquid.net,itsecurity@safesquid.net,manager@safesquid.net

Leaving any of the fields empty would lead to malfunctioning of the Reporting Module. So, make sure to set the value as none for empty fields.

The mail has been scheduled to be sent at 7am everyday using a cronjob which is configured automatically while installing the Reporting Module as shown below.

0 7 * * * root /bin/bash /usr/local/safesquid/api/sendmail.py

The cronjob can be modified to reschedule the mailing as per your requirement by editing the file **/etc/crontab**
