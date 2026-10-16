<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-howto.html -->

# Appendix B. How Do I...

**Table of Contents**

[Move/copy a lot of files at once](tsvn-howto.md#tsvn-howto-move)

[Force users to enter a log message](tsvn-howto-minlogmsgsize.md)

[Hook-script on the server](tsvn-howto-minlogmsgsize.md#tsvn-howto-minlogsize-hookscript)

[Project properties](tsvn-howto-minlogmsgsize.md#tsvn-howto-minlogsize-projectproperties)

[Update selected files from the repository](tsvn-howto-selective-update.md)

[Roll back (Undo) revisions in the repository](tsvn-howto-rollback.md)

[Use the revision log dialog](tsvn-howto-rollback.md#tsvn-howto-rollback-log)

[Use the merge dialog](tsvn-howto-rollback.md#tsvn-howto-rollback-merge)

[Use `svndumpfilter`](tsvn-howto-rollback.md#tsvn-howto-rollback-dumpload)

[Compare two revisions of a file or folder](tsvn-howto-compare.md)

[Include a common sub-project](tsvn-howto-common-projects.md)

[Use svn:externals](tsvn-howto-common-projects.md#tsvn-howto-common-externals)

[Use a nested working copy](tsvn-howto-common-projects.md#tsvn-howto-common-nested)

[Use a relative location](tsvn-howto-common-projects.md#tsvn-howto-common-location)

[Add the project to the repository](tsvn-howto-common-projects.md#tsvn-howto-common-repository)

[Create a shortcut to a repository](tsvn-howto-repo-shortcut.md)

[Ignore files which are already versioned](tsvn-howto-unversion.md)

[Unversion a working copy](tsvn-howto-unversion-wc.md)

[Remove a working copy](tsvn-howto-remove-wc.md)

This appendix contains solutions to problems/questions you might have when using TortoiseSVN.

## Move/copy a lot of files at once

Moving/Copying single files can be done by using TortoiseSVN → Rename.... But if you want to move/copy a lot of files, this way is just too slow and too much work.

The recommended way is by right dragging the files to the new location. Simply right click on the files you want to move/copy without releasing the mouse button. Then drag the files to the new location and release the mouse button. A context menu will appear where you can either choose Context Menu → SVN Copy versioned files here. or Context Menu → SVN Move versioned files here.

**Figure B.1. The TortoiseSVN right drag context menu for moving files**

*\[figure: The TortoiseSVN right drag context menu for moving files\]*
