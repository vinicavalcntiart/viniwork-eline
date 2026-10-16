<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-dug-cleanup.html -->

## Cleanup

If a Subversion command cannot complete successfully, perhaps due to server problems, your working copy can be left in an inconsistent state. In that case you need to use TortoiseSVN → Cleanup on the folder. It is a good idea to do this at the top level of the working copy.

**Figure 4.36. The Cleanup dialog**

*\[figure: The Cleanup dialog\]*

  

In the cleanup dialog, there are also other useful options to get the working copy into a `clean` state.

Clean up working copy status  
As stated above, this option tries to get an inconsistent working copy into a workable and usable state. This doesn't affect any data you have but only the internal states of the working copy database. This is the actual `Cleanup` command you know from older TortoiseSVN clients or other SVN clients.

Break write locks  
If checked, all write locks are removed from the working copy database. For most situations, this is required for the cleanup to work!

Only uncheck this option if the working copy is used by other users/clients at the time. But if the cleanup then fails, you have to check this option for the cleanup to succeed.

Fix time stamps  
Adjusts the recorded time stamps of all files, speeding up future status checks. This can speed up all dialogs that show working copy file lists, for example the Commit dialog.

Vacuum pristine copies  
Removes unused pristine copies and compresses all remaining pristine copies of working copy files.

Refresh shell overlays  
Sometimes the shell overlays, especially on the tree view on the left side of the explorer don't show the current status, or the status cache failed to recognize changes. In this situation, you can use this command to force a refresh.

Include externals  
If this is checked, then all actions are done for all files and folders included with the `svn:externals` property as well.

Delete unversioned files and folders, Delete ignored files and folders  
This is a fast and easy way to remove all generated files in your working copy. All files and folders that are not versioned are moved to the trash bin.

Note: you can also do the same from the TortoiseSVN → Revert dialog. There you also get a list of all the unversioned files and folders to select for removal.

Revert all changes recursively  
This command reverts all your local modifications which are not committed yet.

Note: it's better to use the TortoiseSVN → Revert command instead, because there you can first see and select the files which you want to revert.
