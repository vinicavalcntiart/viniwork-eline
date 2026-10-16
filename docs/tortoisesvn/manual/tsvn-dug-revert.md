<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-dug-revert.html -->

## Undo Changes

If you want to undo all changes you made in a file since the last update you need to select the file, right click to pop up the context menu and then select the command TortoiseSVN → Revert A dialog will pop up showing you the files that you've changed and can revert. Select those you want to revert and click on OK.

**Figure 4.35. Revert dialog**

*\[figure: Revert dialog\]*

  

If you also want to clear all the changelists that are set, check the box at the bottom of the dialog.

If you want to undo a deletion or a rename, you need to use Revert on the parent folder as the deleted item does not exist for you to right click on.

If you want to undo the addition of an item, this appears in the context menu as TortoiseSVN → Undo add.... This is really a revert as well, but the name has been changed to make it more obvious.

The columns in this dialog can be customized in the same way as the columns in the Check for modifications dialog. Read [the section called “Local and Remote Status”](tsvn-dug-wcstatus.md#tsvn-dug-wcstatus-2 "Local and Remote Status") for further details.

Since revert is sometimes used to clean up a working copy, there is an extra button which allows you to delete unversioned items as well. When you click this button another dialog comes up listing all the unversioned items, which you can then select for deletion.

### Undoing Changes which have been Committed

Revert will only undo your local changes. It does *not* undo any changes which have already been committed. If you want to undo all the changes which were committed in a particular revision, read [the section called “Revision Log Dialog”](tsvn-dug-showlog.md "Revision Log Dialog") for further information.

### Revert is Slow

When you revert changes you may find that the operation takes a lot longer than you expect. This is because the modified version of the file is sent to the recycle bin, so you can retrieve your changes if you reverted by mistake. However, if your recycle bin is full, Windows takes a long time to find a place to put the file. The solution is simple: either empty the recycle bin or deactivate the Use recycle bin when reverting box in TortoiseSVN's settings.
