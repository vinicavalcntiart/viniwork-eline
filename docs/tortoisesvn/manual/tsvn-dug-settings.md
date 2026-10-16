<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-dug-settings.html -->

## TortoiseSVN's Settings

To find out what the different settings are for, just leave your mouse pointer a second on the editbox/checkbox... and a helpful tooltip will popup.

### General Settings

**Figure 4.72. The Settings Dialog, General Page**

*\[figure: The Settings Dialog, General Page\]*

  
This dialog allows you to specify your preferred language, and the Subversion-specific settings.

Language  
Selects your user interface language. Of course, you have to install the corresponding language pack first to get another UI language than the default English one.

Check for updates  
TortoiseSVN will contact its download site periodically to see if there is a newer version of the program available. If there is it will show a notification link in the commit dialog. Use Check now if you want an answer right away. The new version will not be downloaded; you simply receive an information dialog telling you that the new version is available.

System sounds  
TortoiseSVN has three custom sounds which are installed by default.

- Error

- Notice

- Warning

You can select different sounds (or turn these sounds off completely) using the Windows Control Panel. Configure is a shortcut to the Control Panel.

Use Aero Dialogs  
On Windows Vista and later systems this controls whether dialogs use the Aero styling.

Create Library  
On Windows 7 you can create a Library in which to group working copies which are scattered in various places on your system.

Global ignore pattern  
Global ignore patterns are used to prevent unversioned files from showing up e.g. in the commit dialog. Files matching the patterns are also ignored by an import. Ignore files or directories by typing in the names or extensions. Patterns are separated by spaces e.g. `bin obj *.bak *.~?? *.jar *.[Tt]mp`. These patterns should not include any path separators. Note also that there is no way to differentiate between files and directories. Read [the section called “Pattern Matching in Ignore Lists”](tsvn-dug-ignore.md#tsvn-dug-ignore-glob "Pattern Matching in Ignore Lists") for more information on the pattern-matching syntax.

Note that the ignore patterns you specify here will also affect other Subversion clients running on your PC, including the command line client.

### Caution

If you use the Subversion configuration file to set a `global-ignores` pattern, it will override the settings you make here. The Subversion configuration file is accessed using the Edit as described below.

This ignore pattern will affect all your projects. It is not versioned, so it will not affect other users. By contrast you can also use the versioned `svn:ignore` or `svn:global-ignores` property to exclude files or directories from version control. Read [the section called “Ignoring Files And Directories”](tsvn-dug-ignore.md "Ignoring Files And Directories") for more information.

 Set file dates to the “last commit time”  
This option tells TortoiseSVN to set the file dates to the last commit time when doing a checkout or an update. Otherwise TortoiseSVN will use the current date. If you are developing software it is generally best to use the current date because build systems normally look at the date stamps to decide which files need compiling. If you use “last commit time” and revert to an older file revision, your project may not compile as you expect it to.

Subversion configuration file  
Use Edit to edit the Subversion configuration file directly. Some settings cannot be modified directly by TortoiseSVN, and need to be set here instead. For more information about the Subversion `config` file see the [*Runtime Configuration Area*](https://svnbook.red-bean.com/en/1.8/svn.advanced.confarea.html) . The section on [*Automatic Property Setting*](https://svnbook.red-bean.com/en/1.8/svn.advanced.props.html#svn.advanced.props.auto) is of particular interest, and that is configured here. Note that Subversion can read configuration information from several places, and you need to know which one takes priority. Refer to [*Configuration and the Windows Registry*](https://svnbook.red-bean.com/en/1.8/svn.advanced.confarea.html#svn.advanced.confarea.windows-registry) to find out more.

Apply local modifications to svn:externals when updating  
This option tells TortoiseSVN to always apply local modifications to the `svn:externals` property when updating the working copy.

#### Context Menu Settings

**Figure 4.73. The Settings Dialog, Context Menu Page**

*\[figure: The Settings Dialog, Context Menu Page\]*

  
This page allows you to specify which of the TortoiseSVN context menu entries will show up in the main context menu, and which will appear in the TortoiseSVN submenu. By default most items are unchecked and appear in the submenu.

There is a special case for Get Lock. You can of course promote it to the top level using the list above, but as most files don't need locking this just adds clutter. However, a file with the `svn:needs-lock` property needs this action every time it is edited, so in that case it is very useful to have at the top level. Checking the box here means that when a file is selected which has the `svn:needs-lock` property set, Get Lock will always appear at the top level.

Most of the time, you won't need the TortoiseSVN context menu, apart for folders that are under version control by Subversion. For non- versioned folders, you only really need the context menu when you want to do a checkout. If you check the option ` Hide menus for unversioned paths `, TortoiseSVN will not add its entries to the context menu for unversioned folders. But the entries are added for all items and paths in a versioned folder. And you can get the entries back for unversioned folders by holding the **Shift** key down while showing the context menu.

If there are some paths on your computer where you just don't want TortoiseSVN's context menu to appear at all, you can list them in the box at the bottom. A trailing `*` is treated as a wildcard character matching any characters. Additionally, a path ending with `\` will match a folder and all its files and subfolders. *Please note:* `*` cannot be used as a wildcard character within a path.

There's a different settings page for the Windows 11 context menu. That page also has a button to register the TortoiseSVN entries in the context menu. You only have to do this if TortoiseSVN was installed as a different user.

#### TortoiseSVN Dialog Settings 1

**Figure 4.74. The Settings Dialog, Dialogs 1 Page**

*\[figure: The Settings Dialog, Dialogs 1 Page\]*

  
This dialog allows you to configure some of TortoiseSVN's dialogs the way you like them.

Default number of log messages  
Limits the number of log messages that TortoiseSVN fetches when you first select TortoiseSVN → Show Log Useful for slow server connections. You can always use Show All or Next 100 to get more messages.

Font for log messages  
Selects the font face and size used to display the log message itself in the middle pane of the Revision Log dialog, and when composing log messages in the Commit dialog.

Short date / time format in log messages  
If the standard long messages use up too much space on your screen use the short format.

Can double click in log list to compare with previous revision  
If you frequently find yourself comparing revisions in the top pane of the log dialog, you can use this option to allow that action on double click. It is not enabled by default because fetching the diff is often a long process, and many people prefer to avoid the wait after an accidental double click, which is why this option is not enabled by default.

Auto-close  
TortoiseSVN can automatically close all progress dialogs when the action is finished without error. This setting allows you to select the conditions for closing the dialogs. The default (recommended) setting is Close manually which allows you to review all messages and check what has happened. However, you may decide that you want to ignore some types of message and have the dialog close automatically if there are no critical changes.

Auto-close if no merges, adds or deletes means that the progress dialog will close if there were simple updates, but if changes from the repository were merged with yours, or if any files were added or deleted, the dialog will remain open. It will also stay open if there were any conflicts or errors during the operation.

Auto-close if no conflicts relaxes the criteria further and will close the dialog even if there were merges, adds or deletes. However, if there were any conflicts or errors, the dialog remains open.

Auto-close if no errors always closes the dialog even if there were conflicts. The only condition that keeps the dialog open is an error condition, which occurs when Subversion is unable to complete the task. For example, an update fails because the server is inaccessible, or a commit fails because the working copy is out-of-date.

Always close dialogs for local operations  
Local operations like adding files or reverting changes do not need to contact the repository and complete quickly, so the progress dialog is often of little interest. Select this option if you want the progress dialog to close automatically after these operations, unless there are errors.

Use recycle bin when reverting  
When you revert local modifications, your changes are discarded. TortoiseSVN gives you an extra safety net by sending the modified file to the recycle bin before bringing back the pristine copy. If you prefer to skip the recycle bin, uncheck this option.

 Use URL of WC as the default “From:” URL  
In the merge dialog, the default behaviour is for the From: URL to be remembered between merges. However, some people like to perform merges from many different points in their hierarchy, and find it easier to start out with the URL of the current working copy. This can then be edited to refer to a parallel path on another branch.

Default checkout path  
You can specify the default path for checkouts. If you keep all your checkouts in one place, it is useful to have the drive and folder pre-filled so you only have to add the new folder name to the end.

Default checkout URL  
You can also specify the default URL for checkouts. If you often checkout sub-projects of some very large project, it can be useful to have the URL pre-filled so you only have to add the sub-project name to the end.

#### TortoiseSVN Dialog Settings 2

**Figure 4.75. The Settings Dialog, Dialogs 2 Page**

*\[figure: The Settings Dialog, Dialogs 2 Page\]*

  

Recurse into unversioned folders  
If this box is checked (default state), then whenever the status of an unversioned folder is shown in the Add, Commit or Check for Modifications dialog, every child file and folder is also shown. If you uncheck this box, only the unversioned parent is shown. Unchecking reduces clutter in these dialogs. In that case if you select an unversioned folder for Add, it is added recursively.

In the Check for Modifications dialog you can opt to see ignored items. If this box is checked then whenever an ignored folder is found, all child items will be shown as well.

Use auto-completion of file paths and keywords  
The commit dialog includes a facility to parse the list of filenames being committed. When you type the first 3 letters of an item in the list, the auto-completion box pops up, and you can press Enter to complete the filename. Check the box to enable this feature.

Timeout in seconds to stop the auto-completion parsing  
The auto-completion parser can be quite slow if there are a lot of large files to check. This timeout stops the commit dialog being held up for too long. If you are missing important auto-completion information, you can extend the timeout.

 Only use spellchecker when `tsvn:projectlanguage` is set  
If you don't wish to use the spellchecker for all commits, check this box. The spellchecker will still be enabled where the project properties require it.

Max. items to keep in the log message history  
When you type in a log message in the commit dialog, TortoiseSVN stores it for possible re-use later. By default it will keep the last 25 log messages for each repository, but you can customize that number here. If you have many different repositories, you may wish to reduce this to avoid filling your registry.

Note that this setting applies only to messages that you type in on this computer. It has nothing to do with the log cache.

Select items automatically  
The normal behaviour in the commit dialog is for all modified (versioned) items to be selected for commit automatically. If you prefer to start with nothing selected and pick the items for commit manually, uncheck this box.

Reopen dialog after commit if items were left uncommitted  
This reopens the commit dialog automatically at the same directory after a successful commit. The dialog is reopened only if there still are items left to commit.

Contact the repository on startup  
The Check for Modifications dialog checks the working copy by default, and only contacts the repository when you click Check repository. If you always want to check the repository, you can use this setting to make that action happen automatically.

Show Lock dialog before locking files  
When you select one or more files and then use TortoiseSVN → Lock to take out a lock on those files, on some projects it is customary to write a lock message explaining why you have locked the files. If you do not use lock messages, you can uncheck this box to skip that dialog and lock the files immediately.

If you use the lock command on a folder, you are always presented with the lock dialog as that also gives you the option to select files for locking.

If your project is using the `tsvn:lockmsgminsize` property, you will see the lock dialog regardless of this setting because the project *requires* lock messages.

#### TortoiseSVN Dialog Settings 3

**Figure 4.76. The Settings Dialog, Dialogs 3 Page**

*\[figure: The Settings Dialog, Dialogs 3 Page\]*

  

Settings for the repository browser:

Pre-fetch folders for faster browsing  
If this box is checked (default state), then the repository browser fetches information about shown folders in the background. That way as soon as you browse into one of those folders, the information is already available.

Some servers however can't handle the multiple requests this causes or when not configured correctly treat so many requests as something bad and start blocking them. In this case you can disable the pre-fetching here.

Show externals  
If this box is checked (default state), then the repository browser shows files and folders that are included with the `svn:externals` property as normal files and folders, but with an overlay icon to mark them as from an external source.

As with the pre-fetch feature explained above, this too can put too much stress on weak servers. In this case you can disable this feature here.

There are two versions of shelfing implemented in SVN. Here you can select which version you want to use. Note that changing this setting might require an OS restart to take effect.

V2  
this version is much faster than `V3` and is the recommended version to use.

However, the speed comes at a prize: `V2` does not handle directory changes, and can't handle copies and moves of files.

V3  
this is the latest version of the shelfing feature. It can handle changes to directories as well as file moves/copies.

However, `V3` is much slower than `V2` and can be unusably slow for big repositories or if you have a slow connection to the repository.

#### TortoiseSVN Colour Settings

**Figure 4.77. The Settings Dialog, Colours Page**

*\[figure: The Settings Dialog, Colours Page\]*

  
This dialog allows you to configure the text colours used in TortoiseSVN's dialogs the way you like them.

Possible or real conflict / obstructed  
A conflict has occurred during update, or may occur during merge. Update is obstructed by an existing unversioned file/folder of the same name as a versioned one.

This colour is also used for error messages in the progress dialogs.

Added files  
Items added to the repository.

Missing / deleted / replaced  
Items deleted from the repository, missing from the working copy, or deleted from the working copy and replaced with another file of the same name.

Merged  
Changes from the repository successfully merged into the WC without creating any conflicts.

Modified / copied  
Add with history, or paths copied in the repository. Also used in the log dialog for entries which include copied items.

Deleted node  
An item which has been deleted from the repository.

Added node  
An item which has been added to the repository, by an add, copy or move operation.

Renamed node  
An item which has been renamed within the repository.

Replaced node  
The original item has been deleted and a new item with the same name replaces it.

Filter match  
When using filtering in the log dialog, search terms are highlighted in the results using this colour.

other settings:

Dark theme  
The dialogs in TortoiseSVN can be shown in a dark mode on Windows 10 1809 and later. This feature also requires that dark mode for applications is enabled in the Windows 10 settings.

### Important

Note that not all controls in all dialogs are shown in a dark theme.

### Revision Graph Settings

**Figure 4.78. The Settings Dialog, Revision Graph Page**

*\[figure: The Settings Dialog, Revision Graph Page\]*

  

Classification Patterns  
The revision graph attempts to show a clearer picture of your repository structure by distinguishing between trunk, branches and tags. As there is no such classification built into Subversion, this information is extracted from the path names. The default settings assume that you use the conventional English names as suggested in the Subversion documentation, but of course your usage may vary.

Specify the patterns used to recognise these paths in the three boxes provided. The patterns will be matched case-insensitively, but you must specify them in lower case. Wild cards `*` and `?` will work as usual, and you can use `;` to separate multiple patterns. Do not include any extra white space as it will be included in the matching specification.

### Commit tag detection

Please note that these patterns are also used to detect commits to a tag, not just for the revision graph.

Modify Colors  
Colors are used in the revision graph to indicate the node type, i.e. whether a node is added, deleted, renamed. In order to help pick out node classifications, you can allow the revision graph to blend colors to give an indication of both node type and classification. If the box is checked, blending is used. If the box is unchecked, color is used to indicate node type only. Use the color selection dialog to allocate the specific colors used.

#### Revision Graph Colors

**Figure 4.79. The Settings Dialog, Revision Graph Colors Page**

*\[figure: The Settings Dialog, Revision Graph Colors Page\]*

  
This page allows you to configure the colors used. Note that the color specified here is the solid color. Most nodes are colored using a blend of the node type color, the background color and optionally the classification color.

Deleted Node  
Items which have been deleted and not copied anywhere else in the same revision.

Added Node  
Items newly added, or copied (add with history).

Renamed Node  
Items deleted from one location and added in another in the same revision.

Modified Node  
Simple modifications without any add or delete.

Unchanged Node  
May be used to show the revision used as the source of a copy, even when no change (to the item being graphed) took place in that revision.

HEAD node  
Current HEAD revision in the repository.

WC Node  
If you opt to show an extra node for your modified working copy, attached to its last-commit revision on the graph, use this color.

WC Node Border  
If you opt to show whether the working copy is modified, use this color border on the WC node when modifications are found.

Tag Nodes  
Nodes classified as tags may be blended with this color.

Trunk Nodes  
Nodes classified as trunk may be blended with this color.

Folded Tag Markers  
If you use tag folding to save space, tags are marked on the copy source using a block in this color.

Selected Node Markers  
When you left click on a node to select it, the marker used to indicate selection is a block in this color.

Stripes  
These colors are used when the graph is split into sub-trees and the background is colored in alternating stripes to help pick out the separate trees.

### Icon Overlay Settings

**Figure 4.80. The Settings Dialog, Icon Overlays Page**

*\[figure: The Settings Dialog, Icon Overlays Page\]*

  
This page allows you to choose the items for which TortoiseSVN will display icon overlays.

Since it takes quite a while to fetch the status of a working copy, TortoiseSVN uses a cache to store the status so the explorer doesn't get hogged too much when showing the overlays. You can choose which type of cache TortoiseSVN should use according to your system and working copy size here:

Default  
Caches all status information in a separate process (`TSVNCache.exe`). That process watches all drives for changes and fetches the status again if files inside a working copy get modified. The process runs with the least possible priority so other programs don't get hogged because of it. That also means that the status information is not *real time* but it can take a few seconds for the overlays to change.

Advantage: the overlays show the status recursively, i.e. if a file deep inside a working copy is modified, all folders up to the working copy root will also show the modified overlay. And since the process can send notifications to the shell, the overlays on the left tree view usually change too.

Disadvantage: the process runs constantly, even if you're not working on your projects. It also uses around 10-50 MB of RAM depending on number and size of your working copies.

Shell  
Caching is done directly inside the shell extension dll, but only for the currently visible folder. Each time you navigate to another folder, the status information is fetched again.

Advantage: needs only very little memory (around 1 MB of RAM) and can show the status in *real time*.

Disadvantage: Since only one folder is cached, the overlays don't show the status recursively. For big working copies, it can take more time to show a folder in explorer than with the default cache. Also the mime-type column is not available.

None  
With this setting, the TortoiseSVN does not fetch the status at all in Explorer. Because of that, files don't get an overlay and folders only get a 'normal' overlay if they're versioned. No other overlays are shown, and no extra columns are available either.

Advantage: uses absolutely no additional memory and does not slow down the Explorer at all while browsing.

Disadvantage: Status information of files and folders is not shown in Explorer. To see if your working copies are modified, you have to use the “Check for modifications” dialog.

By default, overlay icons and context menus will appear in all open/save dialogs as well as in Windows Explorer. If you want them to appear *only* in Windows Explorer, check the Show overlays and context menu only in explorer box.

You can force the status cache to *None* for elevated processes by checking the Disable status cache for elevated processes box. This is useful if you want to prevent another `TSVNCache.exe` process getting created with elevated privileges.

You can also choose to mark folders as modified if they contain unversioned items. This could be useful for reminding you that you have created new files which are not yet versioned. This option is only available when you use the *default* status cache option (see below).

If you have files in the `ignore-on-commit` changelist, you can chose to make those files not propagate their status to the parent folder. That way if only files in that changelist are modified, the parent folder still shows the unmodified overlay icon.

The next group allows you to select which classes of storage should show overlays. By default, only hard drives are selected. You can even disable all icon overlays, but where's the fun in that?

Network drives can be very slow, so by default icons are not shown for working copies located on network shares.

USB Flash drives appear to be a special case in that the drive type is identified by the device itself. Some appear as fixed drives, and some as removable drives.

The Exclude Paths are used to tell TortoiseSVN those paths for which it should *not* show icon overlays and status columns. This is useful if you have some very big working copies containing only libraries which you won't change at all and therefore don't need the overlays, or if you only want TortoiseSVN to look in specific folders.

Any path you specify here is assumed to apply recursively, so none of the child folders will show overlays either. If you want to exclude *only* the named folder, append `?` after the path.

The same applies to the Include Paths. Except that for those paths the overlays are shown even if the overlays are disabled for that specific drive type, or by an exclude path specified above.

Users sometimes ask how these three settings interact. For any given path check the include and exclude lists, seeking upwards through the directory structure until a match is found. When the first match is found, obey that include or exclude rule. If there is a conflict, a single directory spec takes precedence over a recursive spec, then inclusion takes precedence over exclusion.

An example will help here:

``` screen
Exclude:
C:
C:\develop\?
C:\develop\tsvn\obj
C:\develop\tsvn\bin

Include:
C:\develop
    
```

These settings disable icon overlays for the C: drive, except for `c:\develop`. All projects below that directory will show overlays, except the `c:\develop` folder itself, which is specifically ignored. The high-churn binary folders are also excluded.

TSVNCache.exe also uses these paths to restrict its scanning. If you want it to look only in particular folders, disable all drive types and include only the folders you specifically want to be scanned.

### Exclude `SUBST` Drives

It is often convenient to use a `SUBST` drive to access your working copies, e.g. using the command

``` screen
subst T: C:\TortoiseSVN\trunk\doc
      
```

However this can cause the overlays not to update, as `TSVNCache` will only receive one notification when a file changes, and that is normally for the original path. This means that your overlays on the `subst` path may never be updated.

An easy way to work around this is to exclude the original path from showing overlays, so that the overlays show up on the `subst` path instead.

Sometimes you will exclude areas that contain working copies, which saves TSVNCache from scanning and monitoring for changes, but you still want a visual indication that a folder contains a working copy. The Show excluded root folders as 'normal' checkbox allows you to do this. With this option, working copy root folders in any excluded area (drive type not checked, or specifically excluded) will show up as normal and up-to-date, with a green check mark. This reminds you that you are looking at a working copy, even though the folder overlays may not be correct. Files do not get an overlay at all. Note that the context menus still work, even though the overlays are not shown.

As a special exception to this, drives `A:` and `B:` are never considered for the Show excluded folders as 'normal' option. This is because Windows is forced to look on the drive, which can result in a delay of several seconds when starting Explorer, even if your PC does have a floppy drive.

#### Icon Set Selection

**Figure 4.81. The Settings Dialog, Icon Set Page**

*\[figure: The Settings Dialog, Icon Set Page\]*

  
You can change the overlay icon set to the one you like best. Note that if you change overlay set, you may have to restart your computer for the changes to take effect.

#### Enabled Overlay Handlers

**Figure 4.82. The Settings Dialog, Icon Handlers Page**

*\[figure: The Settings Dialog, Icon Handlers Page\]*

  
Because the number of overlays available is severely restricted, you can choose to disable some handlers to ensure that the ones you want will be loaded. Because TortoiseSVN uses the common TortoiseOverlays component which is shared with other Tortoise clients (e.g. TortoiseCVS, TortoiseHg) this setting will affect those clients too.

### Network Settings

**Figure 4.83. The Settings Dialog, Network Page**

*\[figure: The Settings Dialog, Network Page\]*

  
Here you can configure your proxy server, if you need one to get through your company's firewall.

If you need to set up per-repository proxy settings, you will need to use the Subversion `servers` file to configure this. Use Edit to get there directly. Consult the [*Runtime Configuration Area*](https://svnbook.red-bean.com/en/1.8/svn.advanced.confarea.html) for details on how to use this file.

You can also specify which program TortoiseSVN should use to establish a secure connection to a svn+ssh repository. We recommend that you use TortoisePlink.exe. This is a version of the popular Plink program, and is included with TortoiseSVN, but it is compiled as a Windowless app, so you don't get a DOS box popping up every time you authenticate.

You must specify the full path to the executable. For TortoisePlink.exe this is the standard TortoiseSVN bin directory. Use the Browse button to help locate it. Note that if the path contains spaces, you must enclose it in quotes, e.g.

``` screen
"C:\Program Files\TortoiseSVN\bin\TortoisePlink.exe"
    
```

One side-effect of not having a window is that there is nowhere for any error messages to go, so if authentication fails you will simply get a message saying something like “Unable to write to standard output”. For this reason we recommend that you first set up using standard Plink. When everything is working, you can use TortoisePlink with exactly the same parameters.

TortoisePlink does not have any documentation of its own because it is just a minor variant of Plink. Find out about command line parameters from the [*PuTTY website*](https://www.chiark.greenend.org.uk/~sgtatham/putty/) .

To avoid being prompted for a password repeatedly, you might also consider using a password caching tool such as Pageant. This is also available for download from the PuTTY website.

Finally, setting up SSH on server and clients is a non-trivial process which is beyond the scope of this help file. However, you can find a guide in the TortoiseSVN FAQ listed under [*Subversion/TortoiseSVN SSH How-To*](https://tortoisesvn.net/ssh_howto.html) .

### External Program Settings

**Figure 4.84. The Settings Dialog, Diff Viewer Page**

*\[figure: The Settings Dialog, Diff Viewer Page\]*

  
Here you can define your own diff/merge programs that TortoiseSVN should use. The default setting is to use TortoiseMerge which is installed alongside TortoiseSVN.

Read [the section called “External Diff/Merge Tools”](tsvn-dug-diff.md#tsvn-dug-diff-tools "External Diff/Merge Tools") for a list of some of the external diff/merge programs that people are using with TortoiseSVN.

#### Diff Viewer

An external diff program may be used for comparing different revisions of files. The external program will need to obtain the filenames from the command line, along with any other command line options. TortoiseSVN uses substitution parameters prefixed with `%`. When it encounters one of these it will substitute the appropriate value. The order of the parameters will depend on the Diff program you use.

%base  
The original file without your changes

%bname  
The window title for the base file

%nqbname  
The window title for the base file, without quotes

%mine  
Your own file, with your changes

%yname  
The window title for your file

%nqyname  
The window title for your file, without quotes

%burl  
The URL of the original file, if available

%nqburl  
The URL of the original file, if available, without quotes

%yurl  
The URL of the second file, if available

%nqyurl  
The URL of the second file, if available, without quotes

%brev  
The revision of the original file, if available

%nqbrev  
The revision of the original file, if available, without quotes

%yrev  
The revision of the second file, if available

%nqyrev  
The revision of the second file, if available, without quotes

%peg  
The peg revision, if available

%nqpeg  
The peg revision, if available, without quotes

%fname  
The name of the file. This is an empty string if two different files are diffed instead of two states of the same file.

%nqfname  
The name of the file, without quotes

The window titles are not pure filenames. TortoiseSVN treats that as a name to display and creates the names accordingly. So e.g. if you're doing a diff from a file in revision 123 with a file in your working copy, the names will be `filename : revision 123` and `filename : working copy`.

For example, with ExamDiff Pro:

``` screen
C:\Path-To\ExamDiff.exe %base %mine --left_display_name:%bname
                                    --right_display_name:%yname
      
```

or with KDiff3:

``` screen
C:\Path-To\kdiff3.exe %base %mine --L1 %bname --L2 %yname
      
```

or with WinMerge:

``` screen
C:\Path-To\WinMerge.exe -e -ub -dl %bname -dr %yname %base %mine
      
```

or with Araxis:

``` screen
C:\Path-To\compare.exe /max /wait /title1:%bname /title2:%yname
                       %base %mine
      
```

or with UltraCompare:

``` screen
C:\Path-To\uc.exe %base %mine -title1 %bname -title2 %yname
      
```

or with DiffMerge:

``` screen
C:\Path-To\DiffMerge.exe -nosplash -t1=%bname -t2=%yname %base %mine
      
```

If you use the `svn:keywords` property to expand keywords, and in particular the *revision* of a file, then there may be a difference between files which is purely due to the current value of the keyword. Also if you use `svn:eol-style = native` the BASE file will have pure `LF` line endings whereas your file will have `CR-LF` line endings. TortoiseSVN will normally hide these differences automatically by first parsing the BASE file to expand keywords and line endings before doing the diff operation. However, this can take a long time with large files. If Convert files when diffing against BASE is unchecked then TortoiseSVN will skip pre-processing the files.

You can also specify a different diff tool to use on Subversion properties. Since these tend to be short simple text strings, you may want to use a simpler more compact viewer.

If you have configured an alternate diff tool, you can access TortoiseMerge *and* the third party tool from the context menus. Context menu → Diff uses the primary diff tool, and **Shift**+ Context menu → Diff uses the secondary diff tool.

At the bottom of the dialog you can configure a viewer program for unified-diff files (patch files). No parameters are required. The Default setting is to use TortoiseUDiff which is installed alongside TortoiseSVN, and colour-codes the added and removed lines.

Since Unified Diff is just a text format, you can use your favourite text editor if you prefer.

#### Merge Tool

An external merge program used to resolve conflicted files. Parameter substitution is used in the same way as with the Diff Program.

%base  
the original file without your or the others changes

%bname  
The window title for the base file

%nqbname  
The window title for the base file, without quotes

%mine  
your own file, with your changes

%yname  
The window title for your file

%nqyname  
The window title for your file, without quotes

%theirs  
the file as it is in the repository

%tname  
The window title for the file in the repository

%nqtname  
The window title for the file in the repository, without quotes

%merged  
the conflicted file, the result of the merge operation

%mname  
The window title for the merged file

%nqmname  
The window title for the merged file, without quotes

%fname  
The name of the conflicted file

%nqfname  
The name of the conflicted file, without quotes

For example, with Perforce Merge:

``` screen
C:\Path-To\P4Merge.exe %base %theirs %mine %merged
      
```

or with KDiff3:

``` screen
C:\Path-To\kdiff3.exe %base %mine %theirs -o %merged
                      --L1 %bname --L2 %yname --L3 %tname
      
```

or with Araxis:

``` screen
C:\Path-To\compare.exe /max /wait /3 /title1:%tname /title2:%bname
                       /title3:%yname %theirs %base %mine %merged /a2
      
```

or with WinMerge (2.8 or later):

``` screen
C:\Path-To\WinMerge.exe %merged
      
```

or with DiffMerge:

``` screen
C:\Path-To\DiffMerge.exe -caption=%mname -result=%merged -merge
      -nosplash -t1=%yname -t2=%bname -t3=%tname %mine %base %theirs
      
```

#### Diff/Merge Advanced Settings

**Figure 4.85. The Settings Dialog, Diff/Merge Advanced Dialog**

*\[figure: The Settings Dialog, Diff/Merge Advanced Dialog\]*

  
In the advanced settings, you can define a different diff and merge program for every file extension. For instance you could associate Photoshop as the “Diff” Program for `.jpg` files :-) You can also associate the `svn:mime-type` property with a diff or merge program.

To associate using a file extension, you need to specify the extension. Use `.bmp` to describe Windows bitmap files. To associate using the `svn:mime-type` property, specify the mime type, including a slash, for example `text/xml`.

### Saved Data Settings

**Figure 4.86. The Settings Dialog, Saved Data Page**

*\[figure: The Settings Dialog, Saved Data Page\]*

  
For your convenience, TortoiseSVN saves many of the settings you use, and remembers where you have been lately. If you want to clear out that cache of data, you can do it here.

URL history  
Whenever you checkout a working copy, merge changes or use the repository browser, TortoiseSVN keeps a record of recently used URLs and offers them in a combo box. Sometimes that list gets cluttered with outdated URLs so it is useful to flush it out periodically.

If you want to remove a single item from one of the combo boxes you can do that in-place. Just click on the arrow to drop the combo box down, move the mouse over the item you want to remove and type **Shift+Del**.

Log messages (Input dialog)  
TortoiseSVN stores recent commit log messages that you enter. These are stored per repository, so if you access many repositories this list can grow quite large.

Log messages (Show log dialog)  
TortoiseSVN caches log messages fetched by the Show Log dialog to save time when you next show the log. If someone else edits a log message and you already have that message cached, you will not see the change until you clear the cache. Log message caching is enabled on the Log Cache tab.

Dialog sizes and positions  
Many dialogs remember the size and screen position that you last used.

Authentication data  
When you authenticate with a Subversion server, the username and password are cached locally so you don't have to keep entering them. You may want to clear this for security reasons, or because you want to access the repository under a different username ... does John know you are using his PC?

If you want to clear authentication data for one particular server only, use the Clear... instead of the Clear all button.

Action log  
TortoiseSVN keeps a log of everything written to its progress dialogs. This can be useful when, for example, you want to check what happened in a recent update command.

The log file is limited in length and when it grows too big the oldest content is discarded. By default 4000 lines are kept, but you can customize that number.

From here you can view the log file content, and also clear it.

### Log Caching

**Figure 4.87. The Settings Dialog, Log Cache Page**

*\[figure: The Settings Dialog, Log Cache Page\]*

  
This dialog allows you to configure the log caching feature of TortoiseSVN, which retains a local copy of log messages and changed paths to avoid time-consuming downloads from the server. Using the log cache can dramatically speed up the log dialog and the revision graph. Another useful feature is that the log messages can still be accessed when offline.

Enable log caching  
Enables log caching whenever log data is requested. If checked, data will be retrieved from the cache when available, and any messages not in the cache will be retrieved from the server and added to the cache.

If caching is disabled, data will always be retrieved directly from the server and not stored locally.

Allow ambiguous URLs  
Occasionally you may have to connect to a server which uses the same URL for all repositories. Older versions of `svnbridge` would do this. If you need to access such repositories you will have to check this option. If you don't, unchecked it to improve performance.

Allow ambiguous UUIDs  
Some hosting services give all their repositories the same UUID. You may even have done this yourself by copying a repository folder to create a new one. For all sorts of reasons this is a bad idea - a UUID should be *unique*. However, the log cache will still work in this situation if you check this box. If you don't need it, unchecked it to improve performance.

If the repository cannot be contacted  
If you are working offline, or if the repository server is down, the log cache can still be used to supply log messages already held in the cache. Of course the cache may not be up-to-date, so there are options to allow you to select whether this feature should be used.

When log data is being taken from the cache without contacting the server, the dialog using those message will show the offline state in its title bar.

Timeout before updating the HEAD revision  
When you invoke the log dialog you will normally want to contact the server to check for any newer log messages. If the timeout set here is non-zero then the server will only be contacted when the timeout has elapsed since the last time contact. This can reduce server round-trips if you open the log dialog frequently and the server is slow, but the data shown may not be completely up-to-date. If you want to use this feature we suggest using a value of 300 (5 minutes) as a compromise.

Days of inactivity until small caches get removed  
If you browse around a lot of repositories you will accumulate a lot of log caches. If you're not actively using them, the cache will not grow very big, so TortoiseSVN purges them after a set time by default. Use this item to control cache purging.

Maximum size of removed inactive caches  
Larger caches are more expensive to reacquire, so TortoiseSVN only purges small caches. Fine tune the threshold with this value.

Maximum number of tool failures before cache removal  
Occasionally something goes wrong with the caching and causes a crash. If this happens the cache is normally deleted automatically to prevent a recurrence of the problem. If you use the less stable nightly build you may opt to keep the cache anyway.

#### Cached Repositories

On this page you can see a list of the repositories that are cached locally, and the space used for the cache. If you select one of the repositories you can then use the buttons underneath.

Click on the Update to completely refresh the cache and fill in any holes. For a large repository this could be very time consuming, but useful if you are about to go offline and want the best available cache.

Click on the Export button to export the entire cache as a set of CSV files. This could be useful if you want to process the log data using an external program, although it is mainly useful to the developers.

Click on Delete to remove all cached data for the selected repositories. This does not disable caching for the repository so the next time you request log data, a new cache will be created.

#### Log Cache Statistics

**Figure 4.88. The Settings Dialog, Log Cache Statistics**

*\[figure: The Settings Dialog, Log Cache Statistics\]*

  
Click on the Details button to see detailed statistics for a particular cache. Many of the fields shown here are mainly of interest to the developers of TortoiseSVN, so they are not all described in detail.

RAM  
The amount of memory required to service this cache.

Disk  
The amount of disk space used for the cache. Data is compressed, so disk usage is generally fairly modest.

Connection  
Shows whether the repository was available last time the cache was used.

Last update  
The last time the cache content was changed.

Last head update  
The last time we requested the HEAD revision from the server.

Authors  
The number of different authors with messages recorded in the cache.

Paths  
The number of paths listed, as you would see using `svn log -v`.

Skip ranges  
The number of revision ranges which we have not fetched, simply because they haven't been requested. This is a measure of the number of holes in the cache.

Max revision  
The highest revision number stored in the cache.

Revision count  
The number of revisions stored in the cache. This is another measure of cache completeness.

### Client Side Hook Scripts

**Figure 4.89. The Settings Dialog, Hook Scripts Page**

*\[figure: The Settings Dialog, Hook Scripts Page\]*

  
This dialog allows you to set up hook scripts which will be executed automatically when certain Subversion actions are performed. As opposed to the hook scripts explained in [the section called “Server side hook scripts”](tsvn-repository-hooks.md "Server side hook scripts"), these scripts are executed locally on the client.

One application for such hooks might be to call a program like `SubWCRev.exe` to update version numbers after a commit, and perhaps to trigger a rebuild.

Note that you can also specify such hook scripts using special properties on your working copy. See the section [the section called “TortoiseSVN Project Properties”](tsvn-dug-propertypage.md#tsvn-dug-propertypage-tsvn-props "TortoiseSVN Project Properties") for details.

**Figure 4.90. The Settings Dialog, Configure Hook Scripts**

*\[figure: The Settings Dialog, Configure Hook Scripts\]*

  
To add a new hook script, simply click Add and fill in the details.

There are currently these types of hook script available

Start-commit  
Called before the commit dialog is shown. You might want to use this if the hook modifies a versioned file and affects the list of files that need to be committed and/or commit message. However you should note that because the hook is called at an early stage, the full list of objects selected for commit is not available.

Manual Pre-commit  
If this is specified, the commit dialog shows a button Run Hook which when clicked runs the specified hook script. The hook script receives a list of all checked files and folders and the commit message if there was one entered.

Check-commit  
Called after the user clicks OK in the commit dialog, and before the commit dialog closes. This hook gets a list of all the checked files. If the hook returns an error, the commit dialog stays open.

If the returned error message contains paths on newline separated lines, those paths will get selected in the commit dialog after the error message is shown.

Pre-commit  
Called after the user clicks OK in the commit dialog, and before the actual commit begins. This hook has a list of exactly what will be committed.

Post-commit  
Called after the commit finishes successfully.

Start-update  
Called before the update-to-revision dialog is shown.

Pre-update  
Called before the actual Subversion update or switch begins.

Post-update  
Called after the update, switch or checkout finishes (whether successful or not).

Pre-connect  
Called before an attempt to contact the repository. Called at most once in five minutes.

Pre-lock  
Called before an attempt to lock a file.

Post-lock  
Called after a file has been locked.

A hook is defined for a particular working copy path. You only need to specify the top level path; if you perform an operation in a sub-folder, TortoiseSVN will automatically search upwards for a matching path.

Next you must specify the command line to execute, starting with the path to the hook script or executable. This could be a batch file, an executable file or any other file which has a valid windows file association, e.g. a perl script. Note that the script must not be specified using a UNC path as Windows shell execute will not allow such scripts to run due to security restrictions.

The command line includes several parameters which get filled in by TortoiseSVN. The parameters passed depend upon which hook is called. Each hook has its own parameters which are passed in the following order:

Start-commit  
`PATH` `MESSAGEFILE` `CWD`

Manual Pre-commit  
`PATH` `MESSAGEFILE` `CWD`

Check-commit  
`PATH` `MESSAGEFILE` `CWD`

Pre-commit  
`PATH` `DEPTH` `MESSAGEFILE` `CWD`

Post-commit  
`PATH` `DEPTH` `MESSAGEFILE` `REVISION` `ERROR` `CWD`

Start-update  
`PATH` `CWD`

Pre-update  
`PATH` `DEPTH` `REVISION` `CWD`

Post-update  
`PATH` `DEPTH` `REVISION` `ERROR` `CWD` `RESULTPATH`

Pre-connect  
no parameters are passed to this script. You can pass a custom parameter by appending it to the script path.

Pre-lock  
`PATH` `LOCK` `FORCE` `MESSAGEFILE` `CWD`

Post-lock  
`PATH` `LOCK` `FORCE` `MESSAGEFILE` `ERROR` `CWD`

The meaning of each of these parameters is described here:

PATH  
A path to a temporary file which contains all the paths for which the operation was started in UTF-8 encoding. Each path is on a separate line in the temp file.

Note that for operations done remotely, e.g. in the repository browser, those paths are not local paths but the urls of the affected items.

DEPTH  
The depth with which the commit/update is done.

Possible values are:

-2  
`svn_depth_unknown`

-1  
`svn_depth_exclude`

0  
`svn_depth_empty`

1  
`svn_depth_files`

2  
`svn_depth_immediates`

3  
`svn_depth_infinity`

MESSAGEFILE  
Path to a file containing the log message for the commit. The file contains the text in UTF-8 encoding. After successful execution of the start-commit hook, the log message is read back, giving the hook a chance to modify it.

REVISION  
The repository revision to which the update should be done or after a commit completes.

LOCK  
Either `true` when locking, or `false` when unlocking.

FORCE  
Either `true` or `false`, depending on whether the operation was forced or not.

ERROR  
Path to a file containing the error message. If there was no error, the file will be empty.

CWD  
The current working directory with which the script is run. This is set to the common root directory of all affected paths.

RESULTPATH  
A path to a temporary file which contains all the paths in UTF-8 encoding which were somehow touched by the operation. Each path is on a separate line in the temp file.

Note that although we have given these parameters names for convenience, you do not have to refer to those names in the hook settings. All parameters listed for a particular hook are always passed, whether you want them or not ;-)

If you want the Subversion operation to hold off until the hook has completed, check Wait for the script to finish.

Normally you will want to hide ugly DOS boxes when the script runs, so Hide the script while running is checked by default. Also you need to check this if your hook script might return an error that should stop the operation.

The `force` flag can be set if the user must not proceed with the operation without running the script, i.e. the script must always run. If the `force` flag is not checked, then the user is shown a button Retry without hooks to retry the operation without running the hook script.

Sample client hook scripts can be found in the `contrib` folder in the [*TortoiseSVN repository*](https://svn.code.sf.net/p/tortoisesvn/code/trunk/contrib/hook-scripts) . ([the section called “License”](tsvn-preface-source.md "License") explains how to access the repository.)

When debugging hook scripts you may want to echo progress lines to the DOS console, or insert a pause to stop the console window disappearing when the script completes. Because I/O is redirected this will not normally work. However you can redirect input and output explicitly to CON to overcome this. e.g.

``` screen
echo Checking Status > con
pause < con > con
    
```

A small tool is included in the TortoiseSVN installation folder named `ConnectVPN.exe`. You can use this tool configured as a pre-connect hook to connect automatically to your VPN before TortoiseSVN tries to connect to a repository. Just pass the name of the VPN connection as the first parameter to the tool.

#### Issue Tracker Integration

TortoiseSVN can use a COM plugin to query issue trackers when in the commit dialog. The use of such plugins is described in [the section called “Getting Information from the Issue Tracker”](tsvn-dug-bugtracker.md#tsvn-dug-bugtracker-ref "Getting Information from the Issue Tracker"). If your system administrator has provided you with a plugin, which you have already installed and registered, this is the place to specify how it integrates with your working copy.

**Figure 4.91. The Settings Dialog, Issue Tracker Integration Page**

*\[figure: The Settings Dialog, Issue Tracker Integration Page\]*

  
Click on Add... to use the plugin with a particular working copy. Here you can specify the working copy path, choose which plugin to use from a drop down list of all registered issue tracker plugins, and any parameters to pass. The parameters will be specific to the plugin, but might include your user name on the issue tracker so that the plugin can query for issues which are assigned to you.

If you want all users to use the same COM plugin for your project, you can specify the plugin also with the properties `bugtraq:provideruuid`, `bugtraq:provideruuid64` and `bugtraq:providerparams`.

bugtraq:provideruuid  
This property specifies the COM UUID of the IBugtraqProvider, for example `{0044f6c0-b999-11e1-afa6-0800200c9a66}`. (This example is the UUID of the [*YurtleTrack provider*](https://github.com/scottiemc7/YurtleTrack) , which is a provider for the [*JetBrains YouTrack 6.0*](http://www.jetbrains.com/youtrack/) issue tracker.)

bugtraq:provideruuid64  
This is the same as `bugtraq:provideruuid`, but for the 64-bit version of the IBugtraqProvider.

bugtraq:providerparams  
This property specifies the parameters passed to the IBugtraqProvider.

Please check the documentation of your IBugtraqProvider plugin to find out what to specify in these two properties.

### TortoiseBlame Settings

**Figure 4.92. The Settings Dialog, TortoiseBlame Page**

*\[figure: The Settings Dialog, TortoiseBlame Page\]*

  
The settings used by TortoiseBlame are controlled from the main context menu, not directly with TortoiseBlame itself.

Colors  
TortoiseBlame can use the background colour to indicate the age of lines in a file. You set the endpoints by specifying the colours for the newest and oldest revisions, and TortoiseBlame uses a linear interpolation between these colours according to the repository revision indicated for each line.

You can specify different colours to use for the locator bar. The default is to use strong contrast on the locator bar while keeping the main window background light so that you can still read the text.

Font  
You can select the font used to display the text, and the point size to use. This applies both to the file content, and to the author and revision information shown in the left pane.

Tabs  
Defines how many spaces to use for expansion when a tab character is found in the file content.

### TortoiseUDiff Settings

**Figure 4.93. The Settings Dialog, TortoiseUDiff Page**

*\[figure: The Settings Dialog, TortoiseUDiff Page\]*

  
The settings used by TortoiseUDiff are controlled from the main context menu, not directly with TortoiseUDiff itself.

Colors  
The default colors used by TortoiseUDiff are usually ok, but you can configure them here.

Font  
You can select the font used to display the text, and the point size to use.

Tabs  
Defines how many spaces to use for expansion when a tab character is found in the file diff.

### Exporting TSVN Settings

**Figure 4.94. The Settings Dialog, Sync Page**

*\[figure: The Settings Dialog, Sync Page\]*

  
You can sync all TortoiseSVN settings to and from an encrypted file. The file is encrypted with the password you enter so you don't have to worry if you store that file on a cloud folder like OneDrive, GDrive, DropBox, ...

When a path and password is specified, TortoiseSVN will sync all settings automatically and keep them in sync.

You can also export/import an encrypted files with all the settings manually. When you do that, you're asked for the path of the file and the password to encrypt/decrypt the settings file.

When exporting the settings manually, you can also optionally include all local settings which are not included in a normal export or in a sync. Local settings are settings which include local paths which usually vary between computers. These local settings include the configured diff and merge tools and hook scripts.

### Advanced Settings

A few infrequently used settings are available only in the advanced page of the settings dialog. These settings modify the registry directly and you have to know what each of these settings is used for and what it does. Do not modify these settings unless you are sure you need to change them.

AllowAuthSave  
Sometimes multiple users use the same account on the same computer. In such situations it's not really wanted to save the authentication data. Setting this value to `false` disables the `save authentication` button in the authentication dialog.

AllowUnversionedObstruction  
If an update adds a new file from the repository which already exists in the local working copy as an unversioned file, the default action is to keep the local file, showing it as a (possibly) modified version of the new file from the repository. If you would prefer TortoiseSVN to create a conflict in such situations, set this value to `false`.

AlwaysExtendedMenu  
As with the explorer, TortoiseSVN shows additional commands if the **Shift** key is pressed while the context menu is opened. To force TortoiseSVN to always show those extended commands, set this value to `true`.

AutoCompleteMinChars  
The minimum amount of chars from which the editor shows an auto-completion popup. The default value is `3`.

AutocompleteRemovesExtensions  
The auto-completion list shown in the commit message editor displays the names of files listed for commit. To also include these names with extensions removed, set this value to `true`.

BlockPeggedExternals  
File externals that are pegged to a specific revision are blocked by default from being selected for a commit. This is because a subsequent update would revert those changes again unless the pegged revision of the external is adjusted.

Set this value to `false` in case you still want to commit changes to such external files.

BlockStatus  
If you don't want the explorer to update the status overlays while another TortoiseSVN command is running (e.g. Update, Commit, ...) then set this value to `true`.

CacheTrayIcon  
To add a cache tray icon for the TSVNCache program, set this value to `true`. This is really only useful for developers as it allows you to terminate the program gracefully.

ColumnsEveryWhere  
The extra columns the TortoiseSVN adds to the details view in Windows Explorer are normally only active in a working copy. If you want those to be accessible everywhere, not just in working copies, set this value to `true`. Note that the extra columns are only available in XP. Vista and later doesn't support that feature any more. However some third-party explorer replacements do support those even on Windows versions later than XP.

ConfigDir  
You can specify a different location for the Subversion configuration file here. This will affect all TortoiseSVN operations.

CtrlEnter  
In most dialogs in TortoiseSVN, you can use **Ctrl+Enter** to dismiss the dialog as if you clicked on the OK button. If you don't want this, set this value to `false`.

Debug  
Set this to `true` if you want a dialog to pop up for every command showing the command line used to start TortoiseProc.exe.

DebugOutputString  
Set this to `true` if you want TortoiseSVN to print out debug messages during execution. The messages can be captured with special debugging tools only.

DialogTitles  
The default format (value of 0) of dialog titles is `url/path - name of dialog - TortoiseSVN`. If you set this value to 1, the format changes to `name of dialog - url/path - TortoiseSVN`.

DiffBlamesWithTortoiseMerge  
TortoiseSVN allows you to assign an external diff viewer. Most such viewers, however, are not suited for change blaming ([the section called “Blame Differences”](tsvn-dug-blame.md#tsvn-dug-blame-diffs "Blame Differences")), so you might wish to fall back to TortoiseMerge in this case. To do so, set this value to `true`.

DlgStickySize  
This value specifies the number of pixels a dialog has to be near a border before the dialog sticks to it. The default value is 3. To disable this value set the value to zero.

FixCaseRenames  
Some apps change the case of filenames without notice but those changes aren't really necessary nor wanted. For example a change from `file.txt` to `FILE.TXT` wouldn't bother normal Windows applications, but Subversion is case sensitive in these situations. So TortoiseSVN automatically fixes such case changes.

If you don't want TortoiseSVN to automatically fix such case changes for you, you can set this value to `false`.

FullRowSelect  
The status list control which is used in various dialogs (e.g., commit, check-for-modifications, add, revert, ...) uses full row selection (i.e., if you select an entry, the full row is selected, not just the first column). This is fine, but the selected row then also covers the background image on the bottom right, which can look ugly. To disable full row select, set this value to `false`.

GroupTaskbarIconsPerRepo  
This option determines how the Win7 taskbar icons of the various TortoiseSVN dialogs and windows are grouped together. This option has no effect on Vista!

1.  The default value is 0. With this setting, the icons are grouped together by application type. All dialogs from TortoiseSVN are grouped together, all windows from TortoiseMerge are grouped together, ...

    **Figure 4.95. Taskbar with default grouping**

    *\[figure: Taskbar with default grouping\]*

      

2.  If set to 1, then instead of all dialogs in one single group per application, they're grouped together by repository. For example, if you have a log dialog and a commit dialog open for repository `A`, and a check-for-modifications dialog and a log dialog for repository `B`, then there are two application icon groups shown in the Win7 taskbar, one group for each repository. But TortoiseMerge windows are not grouped together with TortoiseSVN dialogs.

    **Figure 4.96. Taskbar with repository grouping**

    *\[figure: Taskbar with repository grouping\]*

      

3.  If set to 2, then the grouping works as with the setting set to 1, except that TortoiseSVN, TortoiseMerge, TortoiseBlame, TortoiseIDiff and TortoiseUDiff windows are all grouped together. For example, if you have the commit dialog open and then double click on a modified file, the opened TortoiseMerge diff window will be put in the same icon group on the taskbar as the commit dialog icon.

    **Figure 4.97. Taskbar with repository grouping**

    *\[figure: Taskbar with repository grouping\]*

      

4.  If set to 3, then the grouping works as with the setting set to 1, but the grouping isn't done according to the repository but according to the working copy. This is useful if you have all your projects in the same repository but different working copies for each project.

5.  If set to 4, then the grouping works as with the setting set to 2, but the grouping isn't done according to the repository but according to the working copy.

GroupTaskbarIconsPerRepoOverlay  
This has no effect if the option `GroupTaskbarIconsPerRepo` is set to 0 (see above).

If this option is set to `true`, then every icon on the Win7 taskbar shows a small colored rectangle overlay, indicating the repository the dialogs/windows are used for.

**Figure 4.98. Taskbar grouping with repository color overlays**

*\[figure: Taskbar grouping with repository color overlays\]*

  

HideExternalInfo  
If this is set to `false`, then every `svn:externals` is shown during an update separately.

If it is set to `true` (the default), then update information for externals is only shown if the externals are affected by the update, i.e. changed in some way. Otherwise nothing is shown as with normal files and folders.

HookCancelError  
If this is set to `true`, then cancelling the dialog to approve a hook script to run will show an error dialog indicating the user cancelled.

IncludeExternals  
By default, TortoiseSVN always runs an update with externals included. This avoids problems with inconsistent working copies. If you have however a lot of externals set, an update can take quite a while. Set this value to `false` to run the default update with externals excluded. To update with externals included, either run the `Update to revision...` dialog or set this value to `true` again.

LogFindCopyFrom  
When the log dialog is started from the merge wizard, already merged revisions are shown in gray, but revisions beyond the point where the branch was created are also shown. These revisions are shown in black because those can't be merged.

If this option is set to `true` then TortoiseSVN tries to find the revision where the branch was created from and hide all the revisions that are beyond that revision. Since this can take quite a while, this option is disabled by default.

LogMultiRevFormat  
A format string for the log messages when multiple revisions are selected in the log dialog.

You can use the following placeholders in your format string:

%1!ld!  
gets replaced with the revision number text

%2!s!  
gets replaced with the short log message of the revision

LogStatusCheck  
The log dialog shows the revision the working copy path is at in bold. But this requires that the log dialog fetches the status of that path. Since for very big working copies this can take a while, you can set this value to `false` to deactivate this feature.

MaxHistoryComboItems  
Comboboxes for URLs and paths show a history of previously used URLs/paths if possible. This settings controls how many previous items are saved and shown. The default is 25 items.

MergeLogSeparator  
When you merge revisions from another branch, and merge tracking information is available, the log messages from the revisions you merge will be collected to make up a commit log message. A pre-defined string is used to separate the individual log messages of the merged revisions. If you prefer, you can set this to a value containing a separator string of your choice.

MergeAllowMixedRevisionsDefault  
By setting to `true` you can set the default value of the Allow mixed revisions (not recommended) checkbox in the Merge option dialog. Please be aware of the limitations and potentional problems of merges into mixed-revision working copies before configuring this setting.

NumDiffWarning  
If you want to show the diff at once for more items than specified with this settings, a warning dialog is shown first. The default is 10.

OldVersionCheck  
TortoiseSVN checks whether there's a new version available about once a week. If an updated version is found, the commit dialog shows a link control with that info. If you prefer the old behavior back where a dialog pops up notifying you about the update, set this value to `true`.

RepoBrowserTrySVNParentPath  
The repository browser tries to fetch the web page that's generated by an SVN server configured with the SVNParentPath directive to get a list of all repositories. To disable that behavior, set this value to `false`.

ScintillaBidirectional  
This option enables the bidirectional mode for the commit message edit box. If enabled, right-to-left language text editing is done properly. Since this feature is expensive, it is disabled by default. You can enable this by setting this value to `true`.

ScintillaDirect2D  
This option enables the use of Direct2D accelerated drawing in the Scintilla control which is used as the edit box in e.g. the commit dialog, and also for the unified diff viewer. With some graphic cards however this sometimes doesn't work properly so that the cursor to enter text isn't always visible. If that happens, you can turn this feature off by setting this value to `false`.

OutOfDateRetry  
This parameter specifies how TortoiseSVN behaves if a commit fails due to an out-of-date error:

0  
The user is asked whether to update the working copy or not, and the commit dialog is not reopened after the update.

1  
This is the default. The user is asked whether to update the working copy or not, and the commit dialog is reopened after the update so the user can proceed with the commit right away.

2  
Similar to `1`, but instead of updating only the paths selected for a commit, the update is done on the working copy root. This helps to avoid inconsistent working copies.

3  
The user is not asked to update the working copy. The commit simply fails with the out-of-date error message.

PlaySound  
If set to `true`, TortoiseSVN will play a system sound when an error or warning occurs, or another situation which is important and requires your attention. Set this to `false` if you want to keep TortoiseSVN quiet. Note that the project monitor has its own setting for playing sounds, which you can configure in its settings dialog.

ShellMenuAccelerators  
TortoiseSVN uses accelerators for its explorer context menu entries. Since this can lead to doubled accelerators (e.g. the `SVN Commit` has the **Alt-C** accelerator, but so does the `Copy` entry of explorer). If you don't want or need the accelerators of the TortoiseSVN entries, set this value to `false`.

ShowContextMenuIcons  
This can be useful if you use something other than the windows explorer or if you get problems with the context menu displaying incorrectly. Set this value to `false` if you don't want TortoiseSVN to show icons for the shell context menu items. Set this value to `true` to show the icons again.

ShowAppContextMenuIcons  
If you don't want TortoiseSVN to show icons for the context menus in its own dialogs, set this value to `false`.

ShowNotifications  
Set this value to `false` if you don't want the project monitor to show notification popups when new commits are detected.

StyleCommitMessages  
The commit and log dialog use styling (e.g. bold, italic) in commit messages (see [the section called “Commit Log Messages”](tsvn-dug-commit.md#tsvn-dug-commit-log "Commit Log Messages") for details). If you don't want to do this, set the value to `false`.

UpdateCheckURL  
This value contains the URL from which TortoiseSVN tries to download a text file to find out if there are updates available. This might be useful for company admins who don't want their users to update TortoiseSVN until they approve it.

UseCustomWordBreak  
The standard edit controls do not stop on forward slashes like they're found in paths and urls. TortoiseSVN uses a custom word break procedure for the edit controls. If you don't want that and use the default instead, set this value to 0. If you only want the default for edit controls in combo boxes, set this value to 1.

VersionCheck  
TortoiseSVN checks whether there's a new version available about once a week. If you don't want TortoiseSVN to do this check, set this value to `false`.
