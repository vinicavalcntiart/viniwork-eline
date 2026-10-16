<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-dug.html -->

# Chapter 4. Daily Use Guide

**Table of Contents**

[General Features](tsvn-dug.md#tsvn-dug-general)

[Icon Overlays](tsvn-dug.md#tsvn-dug-general-icons)

[Context Menus](tsvn-dug.md#tsvn-dug-general-menu)

[Drag and Drop](tsvn-dug.md#tsvn-dug-general-drag)

[Common Shortcuts](tsvn-dug.md#tsvn-dug-general-shortcuts)

[Authentication](tsvn-dug.md#tsvn-dug-general-auth)

[Maximizing Windows](tsvn-dug.md#tsvn-dug-general-window-max)

[Importing Data Into A Repository](tsvn-dug-import.md)

[Import](tsvn-dug-import.md#tsvn-dug-import-2)

[Import in Place](tsvn-dug-import.md#tsvn-dug-import-in-place)

[Special Files](tsvn-dug-import.md#tsvn-dug-import-3)

[Checking Out A Working Copy](tsvn-dug-checkout.md)

[Checkout Depth](tsvn-dug-checkout.md#tsvn-dug-checkout-depth)

[Store pristine copies](tsvn-dug-checkout.md#tsvn-dug-checkout-pristines-on-demand)

[Committing Your Changes To The Repository](tsvn-dug-commit.md)

[The Commit Dialog](tsvn-dug-commit.md#tsvn-dug-commit-basics)

[Change Lists](tsvn-dug-commit.md#tsvn-dug-commit-changelists)

[Commit only parts of files](tsvn-dug-commit.md#tsvn-dug-commit-restore)

[Excluding Items from the Commit List](tsvn-dug-commit.md#tsvn-dug-commit-ignore)

[Commit Log Messages](tsvn-dug-commit.md#tsvn-dug-commit-log)

[Commit Progress](tsvn-dug-commit.md#tsvn-dug-commit-progress)

[Update Your Working Copy With Changes From Others](tsvn-dug-update.md)

[Resolving Conflicts](tsvn-dug-conflicts.md)

[File Conflicts](tsvn-dug-conflicts.md#tsvn-dug-conflicts-file)

[Property Conflicts](tsvn-dug-conflicts.md#tsvn-dug-conflicts-prop)

[Tree Conflicts](tsvn-dug-conflicts.md#tsvn-dug-conflicts-tree)

[Getting Status Information](tsvn-dug-wcstatus.md)

[Icon Overlays](tsvn-dug-wcstatus.md#tsvn-dug-wcstatus-1)

[Detailed Status](tsvn-dug-wcstatus.md#tsvn-dug-wcstatus-winprops)

[Local and Remote Status](tsvn-dug-wcstatus.md#tsvn-dug-wcstatus-2)

[Viewing Diffs](tsvn-dug-wcstatus.md#tsvn-dug-diffing)

[Change Lists](tsvn-dug-changelists.md)

[Shelving](tsvn-dug-shelving.md)

[Revision Log Dialog](tsvn-dug-showlog.md)

[Invoking the Revision Log Dialog](tsvn-dug-showlog.md#tsvn-dug-showlog-1)

[Revision Log Actions](tsvn-dug-showlog.md#tsvn-dug-showlog-actions)

[Getting Additional Information](tsvn-dug-showlog.md#tsvn-dug-showlog-2)

[Getting more log messages](tsvn-dug-showlog.md#tsvn-dug-showlog-3)

[Current Working Copy Revision](tsvn-dug-showlog.md#tsvn-dug-showlog-current-rev)

[Merge Tracking Features](tsvn-dug-showlog.md#tsvn-dug-showlog-mergetrack)

[Changing the Log Message and Author](tsvn-dug-showlog.md#tsvn-dug-showlog-4)

[Filtering Log Messages](tsvn-dug-showlog.md#tsvn-dug-showlog-filter)

[Statistical Information](tsvn-dug-showlog.md#tsvn-dug-showlog-5)

[Offline Mode](tsvn-dug-showlog.md#tsvn-dug-showlog-cache)

[Refreshing the View](tsvn-dug-showlog.md#tsvn-dug-showlog-refresh)

[Viewing Differences](tsvn-dug-diff.md)

[File Differences](tsvn-dug-diff.md#tsvn-dug-diff-file)

[Line-end and Whitespace Options](tsvn-dug-diff.md#tsvn-dug-diff-eol-whitespace)

[Comparing Folders](tsvn-dug-diff.md#tsvn-dug-compare-revs)

[Diffing Images Using TortoiseIDiff](tsvn-dug-diff.md#tsvn-dug-idiff)

[Diffing Office Documents](tsvn-dug-diff.md#tsvn-dug-diff-custom)

[External Diff/Merge Tools](tsvn-dug-diff.md#tsvn-dug-diff-tools)

[Adding New Files And Directories](tsvn-dug-add.md)

[Copying/Moving/Renaming Files and Folders](tsvn-dug-copy.md)

[Ignoring Files And Directories](tsvn-dug-ignore.md)

[Pattern Matching in Ignore Lists](tsvn-dug-ignore.md#tsvn-dug-ignore-glob)

[Deleting, Moving and Renaming](tsvn-dug-rename.md)

[Deleting files and folders](tsvn-dug-rename.md#tsvn-dug-rename-delete)

[Moving files and folders](tsvn-dug-rename.md#tsvn-dug-rename-move)

[Dealing with filename case conflicts](tsvn-dug-rename.md#tsvn-dug-rename-case-conflict)

[Repairing File Renames](tsvn-dug-rename.md#tsvn-dug-rename-repair)

[Deleting Unversioned Files](tsvn-dug-rename.md#tsvn-dug-rename-del-unversioned)

[Undo Changes](tsvn-dug-revert.md)

[Cleanup](tsvn-dug-cleanup.md)

[Project Settings](tsvn-dug-propertypage.md)

[Subversion Properties](tsvn-dug-propertypage.md#tsvn-dug-propertypage-props)

[TortoiseSVN Project Properties](tsvn-dug-propertypage.md#tsvn-dug-propertypage-tsvn-props)

[Property Editors](tsvn-dug-propertypage.md#tsvn-dug-propertypage-editors)

[External Items](tsvn-dug-externals.md)

[External Folders](tsvn-dug-externals.md#tsvn-dug-externals-folders)

[External Files](tsvn-dug-externals.md#tsvn-dug-externals-files)

[Creating externals via drag and drop](tsvn-dug-externals.md#tsvn-dug-externals-drop)

[Branching / Tagging](tsvn-dug-branchtag.md)

[Creating a Branch or Tag](tsvn-dug-branchtag.md#tsvn-dug-branch-1)

[Other ways to create a branch or tag](tsvn-dug-branchtag.md#tsvn-dug-branch-2)

[To Checkout or to Switch...](tsvn-dug-branchtag.md#tsvn-dug-switch-1)

[Merging](tsvn-dug-merge.md)

[Merging a Range of Revisions](tsvn-dug-merge.md#tsvn-dug-merge-range)

[Merging Two Different Trees](tsvn-dug-merge.md#tsvn-dug-merge-tree)

[Merge Options](tsvn-dug-merge.md#tsvn-dug-merge-options)

[Reviewing the Merge Results](tsvn-dug-merge.md#tsvn-dug-merge-review)

[Merge Tracking](tsvn-dug-merge.md#tsvn-dug-merge-tracking)

[Handling Conflicts after Merge](tsvn-dug-merge.md#tsvn-dug-merge-conflict)

[Feature Branch Maintenance](tsvn-dug-merge.md#tsvn-dug-merge-maintenance)

[Locking](tsvn-dug-locking.md)

[How Locking Works in Subversion](tsvn-dug-locking.md#tsvn-dug-locking-how)

[Getting a Lock](tsvn-dug-locking.md#tsvn-dug-locking-lock)

[Releasing a Lock](tsvn-dug-locking.md#tsvn-dug-locking-unlock)

[Checking Lock Status](tsvn-dug-locking.md#tsvn-dug-locking-status)

[Making Non-locked Files Read-Only](tsvn-dug-locking.md#tsvn-dug-locking-needs-lock)

[The Locking Hook Scripts](tsvn-dug-locking.md#tsvn-dug-locking-hooks)

[Creating and Applying Patches](tsvn-dug-patch.md)

[Creating a Patch File](tsvn-dug-patch.md#tsvn-dug-patch-1)

[Applying a Patch File](tsvn-dug-patch.md#tsvn-dug-patch-2)

[Who Changed Which Line?](tsvn-dug-blame.md)

[Blame for Files](tsvn-dug-blame.md#tsvn-dug-blame-simple)

[Blame Differences](tsvn-dug-blame.md#tsvn-dug-blame-diffs)

[The Repository Browser](tsvn-dug-repobrowser.md)

[Revision Graphs](tsvn-dug-revgraph.md)

[Revision Graph Nodes](tsvn-dug-revgraph.md#tsvn-dug-revgraph-nodes)

[Changing the View](tsvn-dug-revgraph.md#tsvn-dug-revgraph-views)

[Using the Graph](tsvn-dug-revgraph.md#tsvn-dug-revgraph-use)

[Refreshing the View](tsvn-dug-revgraph.md#tsvn-dug-revgraph-refresh)

[Pruning Trees](tsvn-dug-revgraph.md#tsvn-dug-revgraph-pruning)

[Exporting a Subversion Working Copy](tsvn-dug-export.md)

[Removing a working copy from version control](tsvn-dug-export.md#tsvn-dug-export-unversion)

[Relocating a working copy](tsvn-dug-relocate.md)

[Integration with Bug Tracking Systems / Issue Trackers](tsvn-dug-bugtracker.md)

[Adding Issue Numbers to Log Messages](tsvn-dug-bugtracker.md#tsvn-dug-bugtracker-link)

[Getting Information from the Issue Tracker](tsvn-dug-bugtracker.md#tsvn-dug-bugtracker-ref)

[Integration with Web-based Repository Viewers](tsvn-dug-repoviewer.md)

[TortoiseSVN's Settings](tsvn-dug-settings.md)

[General Settings](tsvn-dug-settings.md#tsvn-dug-settings-main)

[Revision Graph Settings](tsvn-dug-settings.md#tsvn-dug-settings-revgraph)

[Icon Overlay Settings](tsvn-dug-settings.md#tsvn-dug-settings-overlay)

[Network Settings](tsvn-dug-settings.md#tsvn-dug-settings-network)

[External Program Settings](tsvn-dug-settings.md#tsvn-dug-settings-progs)

[Saved Data Settings](tsvn-dug-settings.md#tsvn-dug-settings-saved-data)

[Log Caching](tsvn-dug-settings.md#tsvn-dug-settings-logcache)

[Client Side Hook Scripts](tsvn-dug-settings.md#tsvn-dug-settings-hooks)

[TortoiseBlame Settings](tsvn-dug-settings.md#tsvn-dug-settings-tortoiseblame)

[TortoiseUDiff Settings](tsvn-dug-settings.md#tsvn-dug-settings-tortoiseudiff)

[Exporting TSVN Settings](tsvn-dug-settings.md#tsvn-dug-settings-export)

[Advanced Settings](tsvn-dug-settings.md#tsvn-dug-settings-registry)

[Final Step](tsvn-dug-donate.md)

This document describes day to day usage of the TortoiseSVN client. It is *not* an introduction to version control systems, and *not* an introduction to Subversion (SVN). It is more like a place you may turn to when you know approximately what you want to do, but don't quite remember how to do it.

If you need an introduction to version control with Subversion, then we recommend you read the fantastic book: [*Version Control with Subversion*](https://svnbook.red-bean.com/) .

This document is also a work in progress, just as TortoiseSVN and Subversion are. If you find any mistakes, please report them to the mailing list so we can update the documentation. Some of the screenshots in the Daily Use Guide (DUG) might not reflect the current state of the software. Please forgive us. We're working on TortoiseSVN in our free time.

In order to get the most out of the Daily Use Guide:

- You should have installed TortoiseSVN already.

- You should be familiar with version control systems.

- You should know the basics of Subversion.

- You should have set up a server and/or have access to a Subversion repository.

## General Features

This section describes some of the features of TortoiseSVN which apply to just about everything in the manual. Note that many of these features will only show up within a Subversion working copy.

### Icon Overlays

**Figure 4.1. Explorer showing icon overlays**

*\[figure: Explorer showing icon overlays\]*

  
One of the most visible features of TortoiseSVN is the icon overlays which appear on files in your working copy. These show you at a glance which of your files have been modified. Refer to [the section called “Icon Overlays”](tsvn-dug-wcstatus.md#tsvn-dug-wcstatus-1 "Icon Overlays") to find out what the different overlays represent.

### Context Menus

**Figure 4.2. Context menu for a directory under version control**

*\[figure: Context menu for a directory under version control\]*

  
All TortoiseSVN commands are invoked from the context menu of the windows explorer. Most are directly visible, when you right click on a file or folder. The commands that are available depend on whether the file or folder or its parent folder is under version control or not. You can also see the TortoiseSVN menu as part of the Explorer file menu.

### Tip

Some commands which are very rarely used are only available in the extended context menu. To bring up the extended context menu, hold down the **Shift** key when you right click.

In some cases you may see several TortoiseSVN entries. This is not a bug!

**Figure 4.3. Explorer file menu for a shortcut in a versioned folder**

*\[figure: Explorer file menu for a shortcut in a versioned folder\]*

  
This example is for an unversioned shortcut within a versioned folder, and in the Explorer file menu there are *three* entries for TortoiseSVN. One is for the folder, one for the shortcut itself, and the third for the object the shortcut is pointing to. To help you distinguish between them, the icons have an indicator in the lower right corner to show whether the menu entry is for a file, a folder, a shortcut or for multiple selected items.

### Drag and Drop

**Figure 4.4. Right drag menu for a directory under version control**

*\[figure: Right drag menu for a directory under version control\]*

  
Other commands are available as drag handlers, when you right drag files or folders to a new location inside working copies or when you right drag a non-versioned file or folder into a directory which is under version control.

### Common Shortcuts

Some common operations have well-known Windows shortcuts, but do not appear on buttons or in menus. If you can't work out how to do something obvious, like refreshing a view, check here.

F1  
Help, of course.

F5  
Refresh the current view. This is perhaps the single most useful one-key command. For example ... In Explorer this will refresh the icon overlays on your working copy. In the commit dialog it will re-scan the working copy to see what may need to be committed. In the Revision Log dialog it will contact the repository again to check for more recent changes.

Ctrl-A  
Select all. This can be used if you get an error message and want to copy and paste into an email. Use Ctrl-A to select the error message and then ...

Ctrl-C  
Copy the selected text. In case no text is selected but e.g. a list entry or a message box, then the content of that list entry or the message box is copied to the clipboard.

### Authentication

If the repository that you are trying to access is password protected, an authentication Dialog will show up.

**Figure 4.5. Authentication Dialog**

*\[figure: Authentication Dialog\]*

  
Enter your username and password. The checkbox will make TortoiseSVN store the credentials in Subversion's default directory: `%APPDATA%\Subversion\auth` in three subdirectories:

- `svn.simple` contains credentials for basic authentication (username/password). Note that passwords are stored using the WinCrypt API, not in plain text form.

- `svn.ssl.server` contains SSL server certificates.

- `svn.username` contains credentials for username-only authentication (no password needed).

If you want to clear the authentication cache, you can do so from the Saved Data page of TortoiseSVN's settings dialog. The button Clear all will clear the cached authentication data for all repositories. The button Clear... however will show a dialog where you can chose which cached authentication data should be deleted. Refer to [the section called “Saved Data Settings”](tsvn-dug-settings.md#tsvn-dug-settings-saved-data "Saved Data Settings").

Some people like to have the authentication data deleted when they log off Windows, or on shutdown. The way to do that is to use a shutdown script to delete the `%APPDATA%\Subversion\auth` directory, e.g.

``` screen
@echo off
rmdir /s /q "%APPDATA%\Subversion\auth"
      
```

You can install such a script on Windows like this:

1.  Run `gpedit.msc` (Local Policies)

2.  User Configuration -\> Windows Settings -\> Scripts -\> Logon or Logoff -\> Properties -\> Add

For more information on how to set up your server for authentication and access control, refer to [the section called “Accessing the Repository”](tsvn-serversetup.md "Accessing the Repository").

### Maximizing Windows

Many of TortoiseSVN's dialogs have a lot of information to display, but it is often useful to maximize only the height, or only the width, rather than maximizing to fill the screen. As a convenience, there are shortcuts for this on the Maximize button. Use the middle mouse button to maximize vertically, and right mouse to maximize horizontally.
