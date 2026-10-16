<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-howto-rollback.html -->

## Roll back (Undo) revisions in the repository

### Use the revision log dialog

By far the easiest way to revert the changes from one or more revisions, is to use the revision log dialog.

1.  Select the file or folder in which you need to revert the changes. If you want to revert all changes, this should be the top level folder.

2.  Select TortoiseSVN → Show Log to display a list of revisions. You may need to use Show All or Next 100 to show the revision(s) you are interested in.

3.  Select the revision you wish to revert. If you want to undo a range of revisions, select the first one and hold the **Shift** key while selecting the last one. If you want to pick out individual revisions and ranges, use the **Ctrl** key while selecting revisions. Right click on the selected revision(s), then select Context Menu → Revert changes from this revision.

4.  Or if you want to make an earlier revision the new HEAD revision, right click on the selected revision, then select Context Menu → Revert to this revision. This will discard *all* changes after the selected revision.

You have reverted the changes within your working copy. Check the results, then commit the changes.

### Use the merge dialog

If you want to enter revision numbers as a list, you can use the Merge dialog. The previous method uses merging behind the scenes; this method uses it explicitly.

1.  In your working copy select TortoiseSVN → Merge.

2.  In the Merge Type dialog select Merge a range of revisions.

3.  In the From: field enter the full repository URL of your working copy folder. This should come up as the default URL.

4.  In the Revision range to merge field enter the list of revisions to roll back (or use the log dialog to select them as described above).

5.  Make sure the Reverse merge checkbox is checked.

6.  In the Merge options dialog accept the defaults.

7.  Click Merge to complete the merge.

You have reverted the changes within your working copy. Check that the results are as expected, then commit the changes.

###  Use `svndumpfilter`

Since TortoiseSVN never loses data, your “rolled back” revisions still exist as intermediate revisions in the repository. Only the HEAD revision was changed to a previous state. If you want to make revisions disappear completely from your repository, erasing all trace that they ever existed, you have to use more extreme measures. Unless there is a really good reason to do this, it is *not recommended*. One possible reason would be that someone committed a confidential document to a public repository.

The only way to remove data from the repository is to use the Subversion command line tool `svnadmin`. You can find a description of how this works in the [*Repository Maintenance*](https://svnbook.red-bean.com/en/1.8/svn.reposadmin.maint.html) .
