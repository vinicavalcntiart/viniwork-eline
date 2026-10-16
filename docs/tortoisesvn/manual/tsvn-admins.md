<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-admins.html -->

# Appendix C. Useful Tips For Administrators

**Table of Contents**

[Deploy TortoiseSVN via group policies](tsvn-admins.md#tsvn-admins-grouppolicies)

[Redirect the upgrade check](tsvn-admins-upgradecheck.md)

[Setting the `SVN_ASP_DOT_NET_HACK` environment variable](tsvn-admins-aspdotnethack.md)

[Disable context menu entries](tsvn-admins-disablemenus.md)

This appendix contains solutions to problems/questions you might have when you are responsible for deploying TortoiseSVN to multiple client computers.

## Deploy TortoiseSVN via group policies

The TortoiseSVN installer comes as an MSI file, which means you should have no problems adding that MSI file to the group policies of your domain controller.

A good walk-through on how to do that can be found in this article from Microsoft: [*https://learn.microsoft.com/en-us/troubleshoot/windows-server/group-policy/use-group-policy-to-install-software*](https://learn.microsoft.com/en-us/troubleshoot/windows-server/group-policy/use-group-policy-to-install-software) .

TortoiseSVN must be installed under *Computer Configuration* and not under *User Configuration*. This is because TortoiseSVN needs the CRT and MFC DLLs, which can only be deployed *per computer* and not *per user*. If you really must install TortoiseSVN on a per user basis, then you must first install the MFC and CRT package version 12 from Microsoft on each computer you want to install TortoiseSVN as per user.

You can customize the MSI file if you wish so that all your users end up with the same settings. TSVN settings are stored in the registry under `HKEY_CURRENT_USER\Software\TortoiseSVN` and general Subversion settings (which affect all Subversion clients) are stored in config files under `%APPDATA%\Subversion`. If you need help with MSI customization, try one of the MSI transform forums or search the web for “MSI transform”.
