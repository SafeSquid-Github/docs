# Supporting Services Required for SafeSquid

The supporting services for SafeSquid are:

1.  **Monit**: Monit is a utility used to manage SafeSquid service and other files and directories related to SafeSquid. Below are the activities monitored by the monit.

    1.    Start the SafeSquid Service if not found.

    1.    Update the ClamAV ™ Signatures and ClamAV virus database.

    1.    Execute the upgradation script when upgradation is done from the
        SafeSquid Interface.

2.  **Bind**: Used for DNS configurations.

3.  **NTP**: Used for Time synchronizations with Active directory in SSO configuration.
