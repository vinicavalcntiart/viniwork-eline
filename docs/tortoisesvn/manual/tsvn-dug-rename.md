<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-dug-rename.html -->

## Deleting, Moving and Renaming

Subversion allows renaming and moving of files and folders. So there are menu entries for delete and rename in the TortoiseSVN submenu.

**Figure 4.34. Explorer context menu for versioned files**

*\[figure: Explorer context menu for versioned files\]*

  

### Deleting files and folders

Use TortoiseSVN → Delete to remove files or folders from Subversion.

When you TortoiseSVN → Delete a file or folder, it is removed from your working copy immediately as well as being marked for deletion in the repository on next commit. The item's parent folder shows a “modified” icon overlay. Up until you commit the change, you can get the file back using TortoiseSVN → Revert on the parent folder.

If you want to delete an item from the repository, but keep it locally as an unversioned file/folder, use Extended Context Menu → Delete (keep local). You have to hold the **Shift** key while right clicking on the item in the explorer list pane (right pane) in order to see this in the extended context menu.

If an item is deleted via the explorer instead of using the TortoiseSVN context menu, the commit dialog shows those items as missing and lets you remove them from version control too before the commit. However, if you update your working copy, Subversion will spot the missing item and replace it with the latest version from the repository. If you need to delete a version-controlled file, always use TortoiseSVN → Delete so that Subversion doesn't have to guess what you really want to do.

### Getting a deleted file or folder back

If you have deleted a file or a folder and already committed that delete operation to the repository, then a normal TortoiseSVN → Revert can't bring it back anymore. But the file or folder is not lost at all. If you know the revision the file or folder got deleted (if you don't, use the log dialog to find out) open the repository browser and switch to that revision. Then select the file or folder you deleted, right click and select Context Menu → Copy to... as the target for that copy operation select the path to your working copy.

### Moving files and folders

If you want to do a simple in-place rename of a file or folder, use Context Menu → Rename... Enter the new name for the item and you're done.

If you want to move files around inside your working copy, perhaps to a different sub-folder, use the right mouse drag-and-drop handler:

1.  select the files or directories you want to move

2.  right drag them to the new location inside the working copy

3.  release the right mouse button

4.  in the popup menu select Context Menu → SVN Move versioned files here

### Commit the parent folder

Since renames and moves are done as a delete followed by an add you must commit the parent folder of the renamed/moved file so that the deleted part of the rename/move will show up in the commit dialog. If you don't commit the removed part of the rename/move, it will stay behind in the repository and when your co-workers update, the old file will not be removed. i.e. they will have *both* the old and the new copies.

You *must* commit a folder rename before changing any of the files inside the folder, otherwise your working copy can get really messed up.

Another way of moving or copying files is to use the Windows copy/cut commands. Select the files you want to copy, right click and choose Context Menu → Copy from the explorer context menu. Then browse to the target folder, right click and choose TortoiseSVN → Paste. For moving files, choose Context Menu → Cut instead of Context Menu → Copy.

You can also use the repository browser to move items around. Read [the section called “The Repository Browser”](tsvn-dug-repobrowser.md "The Repository Browser") to find out more.

### Do Not SVN Move Externals

You should *not* use the TortoiseSVN Move or Rename commands on a folder which has been created using `svn:externals`. This action would cause the external item to be deleted from its parent repository, probably upsetting many other people. If you need to move an externals folder you should use an ordinary shell move, then adjust the `svn:externals` properties of the source and destination parent folders.

### Dealing with filename case conflicts

If the repository already contains two files with the same name but differing only in case (e.g. `TEST.TXT` and `test.txt`), you will not be able to update or checkout the parent directory on a Windows client. Whilst Subversion supports case-sensitive filenames, Windows does not.

This sometimes happens when two people commit, from separate working copies, files which happen to have the same name, but with a case difference. It can also happen when files are committed from a system with a case-sensitive file system, like Linux.

In that case, you have to decide which one of them you want to keep and delete (or rename) the other one from the repository.

### Preventing two files with the same name

There is a server hook script available at: [*https://svn.apache.org/repos/asf/subversion/trunk/contrib/hook-scripts/*](https://svn.apache.org/repos/asf/subversion/trunk/contrib/hook-scripts/) that will prevent checkins which result in case conflicts.

### Repairing File Renames

Sometimes your friendly IDE will rename files for you as part of a refactoring exercise, and of course it doesn't tell Subversion. If you try to commit your changes, Subversion will see the old filename as missing and the new one as an unversioned file. You could just check the new filename to get it added in, but you would then lose the history tracing, as Subversion does not know the files are related.

A better way is to notify Subversion that this change is actually a rename, and you can do this within the Commit and Check for Modifications dialogs. Simply select both the old name (missing) and the new name (unversioned) and use Context Menu → Repair Move to pair the two files as a rename.

### Deleting Unversioned Files

Usually you set your ignore list such that all generated files are ignored in Subversion. But what if you want to clear all those ignored items to produce a clean build? Usually you would set that in your makefile, but if you are debugging the makefile, or changing the build system it is useful to have a way of clearing the decks.

TortoiseSVN provides just such an option using Extended Context Menu → Delete unversioned items.... You have to hold the **Shift** while right clicking on a folder in the explorer list pane (right pane) in order to see this in the extended context menu. This will produce a dialog which lists all unversioned files anywhere in your working copy. You can then select or deselect items to be removed.

When such items are deleted, the recycle bin is used, so if you make a mistake here and delete a file that should have been versioned, you can still recover it.
