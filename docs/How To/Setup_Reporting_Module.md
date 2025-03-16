# Setup Reporting Module

## Advantages of Reporting Module over the default Dashboard:

Reduced Data Processing time

More detailed reports

Hour-wise reports

More filtering options

Deeper data analysis

An automated data mining engine

Exportable reports to PDF and Excel formats

## Install Module

Navigate to src folder by running

> cd /usr/local/src

Now download the tarball as

wget http://downloads.safesquid.net/contrib/report/reporting_latest.tar.gz

Untar it by running the below command

> tar -xvzf reporting_latest.tar.gz

Change directory to report

> cd report

Now run the setup file

> ./setup.sh

## Generate Reports

On successfull installation, change directory to /usr/local/safesquid/api

> cd /usr/local/safesquid/api

Run the below command to generate reports for a particular day

./app_handler.py -d \<date\>

Eg: ./app_handler.py -d 20.05.2017

Run the below command to generate reports between a date range

./app_handler.py -s \<start date\> -e \<end date\>

Eg: ./app_handler.py -s 05.05.2017 -e 20.05.2017

**Note**: Date format should be in dd.mm.yyyy

Eg : 03.08.1990

## View Reports

Open your favourite browser and set SafeSquid, for which you generated the reports in step 2, as the proxy.

Now open the URL [**http://safesquid.cfg/report/index.html**](http://safesquid.cfg/report/index.html)

Now, you are looking at today's reports.

If reports for today were not generated in the step 2, the reports page will be blank.

So, use the date picker to view the reports that were generated in the step 2.
