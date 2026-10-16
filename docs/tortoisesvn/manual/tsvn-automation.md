<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-automation.html -->

# Appendix D. Automating TortoiseSVN

**Table of Contents**

[TortoiseSVN Commands](tsvn-automation.md#tsvn-automation-basics)

[Tsvncmd URL handler](tsvn-automation-urlhandler.md)

[TortoiseIDiff Commands](tsvn-automation-idiff.md)

[TortoiseUDiff Commands](tsvn-automation-udiff.md)

Since all commands for TortoiseSVN are controlled through command line parameters, you can automate it with batch scripts or start specific commands and dialogs from other programs (e.g. your favourite text editor).

### Important

Remember that TortoiseSVN is a GUI client, and this automation guide shows you how to make the TortoiseSVN dialogs appear to collect user input. If you want to write a script which requires no input, you should use the official Subversion command line client instead.

## TortoiseSVN Commands

The TortoiseSVN GUI program is called `TortoiseProc.exe`. All commands are specified with the parameter `/command:abcd` where `abcd` is the required command name. Most of these commands need at least one path argument, which is given with `/path:"some\path"`. In the following table the command refers to the `/command:abcd` parameter and the path refers to the `/path:"some\path"` parameter.

There's a special command that does not require the parameter `/command:abcd` but, if nothing is specified on the command line, starts the project monitor instead. If `/tray` is specified, the project monitor starts hidden and only adds its icon to the system tray.

Since some of the commands can take a list of target paths (e.g. committing several specific files) the `/path` parameter can take several paths, separated by a `*` character.

You can also specify a file which contains a list of paths, separated by newlines. The file must be in UTF-16 format, without a [*BOM*](https://en.wikipedia.org/wiki/Byte-order_mark) . If you pass such a file, use `/pathfile` instead of `/path`. To have TortoiseProc delete that file after the command is finished, you can pass the parameter `/deletepathfile`. If you don't pass `/deletepathfile`, you have to delete the file yourself or the file gets left behind.

The progress dialog which is used for commits, updates and many more commands usually stays open after the command has finished until the user presses the OK button. This can be changed by checking the corresponding option in the settings dialog. But using that setting will close the progress dialog, no matter if you start the command from your batch file or from the TortoiseSVN context menu.

To specify a different location of the configuration file, use the parameter `/configdir:"path\to\config\directory"`. This will override the default path, including any registry setting.

To close the progress dialog at the end of a command automatically without using the permanent setting you can pass the `/closeonend` parameter.

- `/closeonend:0` don't close the dialog automatically

- `/closeonend:1` auto close if no errors

- `/closeonend:2` auto close if no errors and conflicts

- `/closeonend:3` auto close if no errors, conflicts and merges

To close the progress dialog for local operations if there were no errors or conflicts, pass the `/closeforlocal` parameter.

The table below lists all the commands which can be accessed using the TortoiseProc.exe command line. As described above, these should be used in the form `/command:abcd`. In the table, the `/command` prefix is omitted to save space.

**Table D.1. List of available commands and options**

[TABLE]

  

Examples (which should be entered on one line):

``` screen
TortoiseProc.exe /command:commit
                 /path:"c:\svn_wc\file1.txt*c:\svn_wc\file2.txt"
                 /logmsg:"test log message" /closeonend:0

TortoiseProc.exe /command:update /path:"c:\svn_wc\" /closeonend:0

TortoiseProc.exe /command:log /path:"c:\svn_wc\file1.txt"
                 /startrev:50 /endrev:60 /closeonend:0
```
