## [Manage Disk Space](https://help.safesquid.com/portal/en/kb/articles/manage-disk-space-on-safesquid-server)

SafeSquid generates large log files and reports for traffic analysis. To ensure enough space is always available, managing disk space on a SafeSquid server is crucial.


### Monitor SafeSquid health

SafeSquid Dashboard displays the status of each modular function, integration, and database, and enables administrators to analyse the performance of your secure web gateway.

### [Generate performance plots](https://help.safesquid.com/portal/en/kb/articles/generate-performance-plot-from-safesquid-user-interface)

To visualise performance metrics, administrators can also generate performance plots.


### Configure logging

SafeSquid has customisable logging options for diverse usage analytics, debugging, and performance validation equirements. SafeSquid's Open Format logs are human-readable, and structured for programmatic analysis using elementary tools. Logs are also streamed to the product interface for quick impact analysis of configuration changes.

### [Analyse the SafeSquid Logs](https://help.safesquid.com/portal/en/kb/articles/analyze-the-safesquid-logs)

SafeSquid application logs are stored in plain text form under the **/var/log/safesquid** directory. A comprehensive set of logging modules offers advanced forensic capabilities for enhanced network security and usage analysis.

### Manage log storage

SafeSquid logs are automatically time-stamped, and the latest log file is rotated. For reducing footprint, SafeSquid has configurable options for compressing log files and scavenging old data.

### [Stream logs to Remote Collectors](https://help.safesquid.com/portal/en/kb/articles/forwarding-logs-to-the-siem-server-by-configuring-the-udp-port)

SafeSquid also facilitates real-time transport of logs to remote aggregators and analytics facilities like SIEM.
