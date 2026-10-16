<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-admins-disablemenus.html -->

## Disable context menu entries

As of version 1.5.0 and later, TortoiseSVN allows you to disable (actually, hide) context menu entries. Since this is a feature which should not be used lightly but only if there is a compelling reason, there is no GUI for this and it has to be done directly in the registry. This can be used to disable certain commands for users who should not use them. But please note that only the context menu entries in the *explorer* are hidden, and the commands are still available through other means, e.g. the command line or even other dialogs in TortoiseSVN itself!

The registry keys which hold the information on which context menus to show are `HKEY_CURRENT_USER\Software\TortoiseSVN\ContextMenuEntriesMaskLow` and `HKEY_CURRENT_USER\Software\TortoiseSVN\ContextMenuEntriesMaskHigh`.

Each of these registry entries is a `DWORD` value, with each bit corresponding to a specific menu entry. A set bit means the corresponding menu entry is deactivated.

**Table C.1. Menu entries and their values**

| Value              | Menu entry                 |
|--------------------|----------------------------|
| 0x0000000000000001 | Checkout                   |
| 0x0000000000000002 | Update                     |
| 0x0000000000000004 | Commit                     |
| 0x0000000000000008 | Add                        |
| 0x0000000000000010 | Revert                     |
| 0x0000000000000020 | Cleanup                    |
| 0x0000000000000040 | Resolve                    |
| 0x0000000000000080 | Switch                     |
| 0x0000000000000100 | Import                     |
| 0x0000000000000200 | Export                     |
| 0x0000000000000400 | Create Repository here     |
| 0x0000000000000800 | Branch/Tag                 |
| 0x0000000000001000 | Merge                      |
| 0x0000000000002000 | Delete                     |
| 0x0000000000004000 | Rename                     |
| 0x0000000000008000 | Update to revision         |
| 0x0000000000010000 | Diff                       |
| 0x0000000000020000 | Show Log                   |
| 0x0000000000040000 | Edit Conflicts             |
| 0x0000000000080000 | Relocate                   |
| 0x0000000000100000 | Check for modifications    |
| 0x0000000000200000 | Ignore                     |
| 0x0000000000400000 | Repository Browser         |
| 0x0000000000800000 | Blame                      |
| 0x0000000001000000 | Create Patch               |
| 0x0000000002000000 | Apply Patch                |
| 0x0000000004000000 | Revision graph             |
| 0x0000000008000000 | Lock                       |
| 0x0000000010000000 | Remove Lock                |
| 0x0000000020000000 | Properties                 |
| 0x0000000040000000 | Diff with URL              |
| 0x0000000080000000 | Delete unversioned items   |
| 0x0000000100000000 | Merge All                  |
| 0x0000000200000000 | Diff with previous version |
| 0x0000000400000000 | Paste                      |
| 0x0000000800000000 | Upgrade working copy       |
| 0x0000001000000000 | Diff later                 |
| 0x0000002000000000 | Diff with 'filename'       |
| 0x0000004000000000 | Unified diff               |
| 0x2000000000000000 | Settings                   |
| 0x4000000000000000 | Help                       |
| 0x8000000000000000 | About                      |

  

Example: to disable the “Relocate” the “Delete unversioned items” and the “Settings” menu entries, add the values assigned to the entries like this:

``` screen
0x0000000000080000
+ 0x0000000080000000
+ 0x2000000000000000
= 0x2000000080080000
      
```

The lower `DWORD` value (`0x80080000`) must then be stored in `HKEY_CURRENT_USER\Software\TortoiseSVN\ContextMenuEntriesMaskLow`, the higher `DWORD` value (`0x20000000`) in `HKEY_CURRENT_USER\Software\TortoiseSVN\ContextMenuEntriesMaskHigh`.

To enable the menu entries again, simply delete the two registry keys.
