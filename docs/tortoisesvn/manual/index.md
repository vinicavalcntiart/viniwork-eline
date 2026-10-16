<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/index.html -->

# TortoiseSVN

## A Subversion client for Windows

## Version 1.14

### Stefan Küng

### Lübbe Onken

### Simon Large

2024/09/21 09:47:00 (r29714)

------------------------------------------------------------------------

**Table of Contents**

[Preface](tsvn-preface.md)

[What is TortoiseSVN?](tsvn-preface.md#tsvn-preface-about)

[TortoiseSVN's Features](tsvn-preface-features.md)

[License](tsvn-preface-source.md)

[Development](tsvn-preface-development.md)

[TortoiseSVN's History](tsvn-preface-development.md#tsvn-preface-history)

[Acknowledgments](tsvn-preface-development.md#tsvn-preface-acknowledgements)

[Reading Guide](tsvn-preface-readingguide.md)

[Terminology used in this document](tsvn-preface-terminology.md)

[1. Getting Started](tsvn-quick-start.md)

[Installing TortoiseSVN](tsvn-quick-start.md#tsvn-qs-install)

[System requirements](tsvn-quick-start.md#id687531)

[Installation](tsvn-quick-start.md#id687520)

[Basic Concepts](tsvn-qs-basics.md)

[Go for a Test Drive](tsvn-qs-guide.md)

[Creating a Repository](tsvn-qs-guide.md#tsvn-qs-repo)

[Importing a Project](tsvn-qs-guide.md#tsvn-qs-import)

[Checking out a Working Copy](tsvn-qs-guide.md#tsvn-qs-wc)

[Making Changes](tsvn-qs-guide.md#tsvn-qs-changes)

[Adding More Files](tsvn-qs-guide.md#tsvn-qs-add)

[Viewing the Project History](tsvn-qs-guide.md#tsvn-qs-log)

[Undoing Changes](tsvn-qs-guide.md#tsvn-qs-revert)

[Moving On ...](tsvn-qs-end.md)

[2. Basic Version-Control Concepts](tsvn-basics.md)

[The Repository](tsvn-basics.md#tsvn-basics-repository)

[Versioning Models](tsvn-basics-versioning.md)

[The Problem of File-Sharing](tsvn-basics-versioning.md#tsvn-basics-versioning-filesharing)

[The Lock-Modify-Unlock Solution](tsvn-basics-versioning.md#tsvn-basics-versioning-lockmodifyunlock)

[The Copy-Modify-Merge Solution](tsvn-basics-versioning.md#tsvn-basics-versioning-copymodifymerge)

[What does Subversion Do?](tsvn-basics-versioning.md#tsvn-basics-versioning-4)

[Subversion in Action](tsvn-basics-svn.md)

[Working Copies](tsvn-basics-svn.md#tsvn-basics-svn-workingcopy)

[Repository URLs](tsvn-basics-svn.md#tsvn-basics-svn-urls)

[Revisions](tsvn-basics-svn.md#tsvn-basics-svn-revisions)

[How Working Copies Track the Repository](tsvn-basics-svn.md#tsvn-basics-svn-wcrepository)

[Summary](tsvn-basics-summary.md)

[3. The Repository](tsvn-repository.md)

[Repository Creation](tsvn-repository.md#tsvn-repository-create)

[Creating a Repository with the Command Line Client](tsvn-repository.md#tsvn-repository-create-commandline)

[Creating The Repository With TortoiseSVN](tsvn-repository.md#tsvn-repository-create-tortoisesvn)

[Local Access to the Repository](tsvn-repository.md#tsvn-repository-local-access)

[Accessing a Repository on a Network Share](tsvn-repository.md#tsvn-repository-local-share)

[Repository Layout](tsvn-repository.md#tsvn-repository-layout)

[Repository Backup](tsvn-repository-backup.md)

[Server side hook scripts](tsvn-repository-hooks.md)

[Checkout Links](tsvn-repository-links.md)

[Accessing the Repository](tsvn-serversetup.md)

[4. Daily Use Guide](tsvn-dug.md)

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

[5. Project Monitor](tsvn-projectmonitor.md)

[Adding projects to monitor](tsvn-projectmonitor.md#tsvn-projectmonitor-addprojects)

[Monitor dialog](tsvn-projectmonitor-maindialog.md)

[Main operations](tsvn-projectmonitor-maindialog.md#tsvn-projectmonitor-maindialog-buttons)

[6. The SubWCRev Program](tsvn-subwcrev.md)

[The SubWCRev Command Line](tsvn-subwcrev.md#tsvn-subwcrev-cli)

[Keyword Substitution](tsvn-subwcrev-keywords.md)

[Keyword Example](tsvn-subwcrev-example.md)

[COM interface](tsvn-subwcrev-com-interface.md)

[7. IBugtraqProvider interface](tsvn-ibugtraqprovider.md)

[Naming conventions](tsvn-ibugtraqprovider.md#tsvn-bugtraqnaming)

[The IBugtraqProvider interface](tsvn-ibugtraqprovider-1.md)

[The IBugtraqProvider2 interface](tsvn-ibugtraqprovider-2.md)

[A. Frequently Asked Questions (FAQ)](tsvn-faq.md)

[B. How Do I...](tsvn-howto.md)

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

[C. Useful Tips For Administrators](tsvn-admins.md)

[Deploy TortoiseSVN via group policies](tsvn-admins.md#tsvn-admins-grouppolicies)

[Redirect the upgrade check](tsvn-admins-upgradecheck.md)

[Setting the `SVN_ASP_DOT_NET_HACK` environment variable](tsvn-admins-aspdotnethack.md)

[Disable context menu entries](tsvn-admins-disablemenus.md)

[D. Automating TortoiseSVN](tsvn-automation.md)

[TortoiseSVN Commands](tsvn-automation.md#tsvn-automation-basics)

[Tsvncmd URL handler](tsvn-automation-urlhandler.md)

[TortoiseIDiff Commands](tsvn-automation-idiff.md)

[TortoiseUDiff Commands](tsvn-automation-udiff.md)

[E. Command Line Interface Cross Reference](tsvn-cli.md)

[Conventions and Basic Rules](tsvn-cli.md#tsvn-cli-basics)

[TortoiseSVN Commands](tsvn-cli-main.md)

[Checkout](tsvn-cli-main.md#tsvn-cli-checkout)

[Update](tsvn-cli-main.md#tsvn-cli-update)

[Update to Revision](tsvn-cli-main.md#tsvn-cli-updaterev)

[Commit](tsvn-cli-main.md#tsvn-cli-commit)

[Diff](tsvn-cli-main.md#tsvn-cli-diff)

[Show Log](tsvn-cli-main.md#tsvn-cli-showlog)

[Check for Modifications](tsvn-cli-main.md#tsvn-cli-checkmods)

[Revision Graph](tsvn-cli-main.md#tsvn-cli-revgraph)

[Repo Browser](tsvn-cli-main.md#tsvn-cli-repobrowser)

[Edit Conflicts](tsvn-cli-main.md#tsvn-cli-editconflicts)

[Resolved](tsvn-cli-main.md#tsvn-cli-resolved)

[Rename](tsvn-cli-main.md#tsvn-cli-rename)

[Delete](tsvn-cli-main.md#tsvn-cli-delete)

[Revert](tsvn-cli-main.md#tsvn-cli-revert)

[Cleanup](tsvn-cli-main.md#tsvn-cli-cleanup)

[Get Lock](tsvn-cli-main.md#tsvn-cli-getlock)

[Release Lock](tsvn-cli-main.md#tsvn-cli-release)

[Branch/Tag](tsvn-cli-main.md#tsvn-cli-branchtag)

[Switch](tsvn-cli-main.md#tsvn-cli-switch)

[Merge](tsvn-cli-main.md#tsvn-cli-merge)

[Export](tsvn-cli-main.md#tsvn-cli-export)

[Relocate](tsvn-cli-main.md#tsvn-cli-relocate)

[Create Repository Here](tsvn-cli-main.md#tsvn-cli-createrepos)

[Add](tsvn-cli-main.md#tsvn-cli-add)

[Import](tsvn-cli-main.md#tsvn-cli-import)

[Blame](tsvn-cli-main.md#tsvn-cli-blame)

[Add to Ignore List](tsvn-cli-main.md#tsvn-cli-addignore)

[Create Patch](tsvn-cli-main.md#tsvn-cli-createpatch)

[Apply Patch](tsvn-cli-main.md#tsvn-cli-applypatch)

[F. Implementation Details](tsvn-app-internals.md)

[Icon Overlays](tsvn-app-internals.md#tsvn-app-internals-overlays)

[G. Language Packs and Spell Checkers](tsvn-lang.md)

[Language Packs](tsvn-lang.md#tsvn-intro-install-lang)

[Spellchecker](tsvn-intro-install-spell.md)

[Glossary](tsvn-glossary.md)

[Index](tsvn-index.md)

**List of Figures**

1.1. [The TortoiseSVN menu for unversioned folders](tsvn-qs-basics.md#tsvn-qs-basics-context)

1.2. [The Import dialog](tsvn-qs-guide.md#tsvn-qs-import-dia)

1.3. [File Difference Viewer](tsvn-qs-guide.md#tsvn-qs-diff-2pane)

1.4. [The Log Dialog](tsvn-qs-guide.md#tsvn-qs-log-image)

2.1. [A Typical Client/Server System](tsvn-basics.md#tsvn-basics-dia1)

2.2. [The Problem to Avoid](tsvn-basics-versioning.md#tsvn-basics-dia2)

2.3. [The Lock-Modify-Unlock Solution](tsvn-basics-versioning.md#tsvn-basics-dia3)

2.4. [The Copy-Modify-Merge Solution](tsvn-basics-versioning.md#tsvn-basics-dia4)

2.5. [...Copy-Modify-Merge Continued](tsvn-basics-versioning.md#tsvn-basics-dia5)

2.6. [The Repository's Filesystem](tsvn-basics-svn.md#tsvn-basics-dia6)

2.7. [The Repository](tsvn-basics-svn.md#tsvn-basics-dia7)

3.1. [The TortoiseSVN menu for unversioned folders](tsvn-repository.md#tsvn-serversetup-local-dia-1)

4.1. [Explorer showing icon overlays](tsvn-dug.md#tsvn-dug-general-dia-icons)

4.2. [Context menu for a directory under version control](tsvn-dug.md#tsvn-dug-context-dir-control)

4.3. [Explorer file menu for a shortcut in a versioned folder](tsvn-dug.md#tsvn-dug-explorer-file-menu)

4.4. [Right drag menu for a directory under version control](tsvn-dug.md#tsvn-dug-right-drag)

4.5. [Authentication Dialog](tsvn-dug.md#tsvn-fig-authentication)

4.6. [The Import dialog](tsvn-dug-import.md#tsvn-dug-import-dia-1)

4.7. [The Checkout dialog](tsvn-dug-checkout.md#tsvn-dug-checkout-dia-1)

4.8. [The Commit dialog](tsvn-dug-commit.md#tsvn-dug-commit-dia-1)

4.9. [The Commit Dialog Spellchecker](tsvn-dug-commit.md#tsvn-dug-commit-dia-2)

4.10. [The Progress dialog showing a commit in progress](tsvn-dug-commit.md#tsvn-dug-commit-dia-3)

4.11. [Progress dialog showing finished update](tsvn-dug-update.md#tsvn-dug-update-dia-1)

4.12. [Explorer showing icon overlays](tsvn-dug-wcstatus.md#tsvn-dug-wcstatus-dia-1)

4.13. [Explorer property page, Subversion tab](tsvn-dug-wcstatus.md#tsvn-dug-propertypage-dia-1)

4.14. [Check for Modifications](tsvn-dug-wcstatus.md#tsvn-dug-wcstatus-dia-2)

4.15. [Commit dialog with Changelists](tsvn-dug-changelists.md#tsvn-dug-commit-dia-changelist)

4.16. [Shelve dialog](tsvn-dug-shelving.md#tsvn-dug-shelve-dlg)

4.17. [Unshelve dialog](tsvn-dug-shelving.md#tsvn-dug-unshelve-dlg)

4.18. [The Revision Log Dialog](tsvn-dug-showlog.md#tsvn-dug-showlog-1-dia-1)

4.19. [The Revision Log Dialog Top Pane with Context Menu](tsvn-dug-showlog.md#tsvn-dug-showlog-2-dia-1)

4.20. [The Code Collaborator Settings Dialog](tsvn-dug-showlog.md#tsvn-dug-show-collaborator-settings-1)

4.21. [Top Pane Context Menu for 2 Selected Revisions](tsvn-dug-showlog.md#tsvn-dug-showlog-2-dia-1a)

4.22. [The Log Dialog Bottom Pane with Context Menu](tsvn-dug-showlog.md#tsvn-dug-showlog-2-dia-2)

4.23. [The Log Dialog Bottom Pane with Context Menu When Multiple Files Selected.](tsvn-dug-showlog.md#tsvn-dug-showlog-3-dia-3)

4.24. [The Log Dialog Showing Merge Tracking Revisions](tsvn-dug-showlog.md#tsvn-dug-showlog-dia-mergetrack)

4.25. [Commits-by-Author Histogram](tsvn-dug-showlog.md#tsvn-dug-showlog-stats-dia-2)

4.26. [Commits-by-Author Pie Chart](tsvn-dug-showlog.md#tsvn-dug-showlog-stats-dia-3)

4.27. [Commits-by-date Graph](tsvn-dug-showlog.md#tsvn-dug-showlog-stats-dia-4)

4.28. [Go Offline Dialog](tsvn-dug-showlog.md#tsvn-dug-showlog-offline)

4.29. [The Compare Revisions Dialog](tsvn-dug-diff.md#tsvn-dug-compare-revs-dia-1)

4.30. [The image difference viewer](tsvn-dug-diff.md#tsvn-dug-idiff-dia-1)

4.31. [Explorer context menu for unversioned files](tsvn-dug-add.md#tsvn-dug-adding-dia-1)

4.32. [Right drag menu for a directory under version control](tsvn-dug-copy.md#tsvn-dug-copy-right-drag)

4.33. [Explorer context menu for unversioned files](tsvn-dug-ignore.md#tsvn-dug-ignoring-dia-1)

4.34. [Explorer context menu for versioned files](tsvn-dug-rename.md#tsvn-dug-renaming-dia-1)

4.35. [Revert dialog](tsvn-dug-revert.md#tsvn-dug-revert-dia-1)

4.36. [The Cleanup dialog](tsvn-dug-cleanup.md#tsvn-dug-cleanup-dia-1)

4.37. [Subversion property page](tsvn-dug-propertypage.md#tsvn-dug-propertypage-dia-2)

4.38. [Adding properties](tsvn-dug-propertypage.md#tsvn-dug-propertypage-dia-add)

4.39. [Property dialog for hook scripts](tsvn-dug-propertypage.md#tsvn-dug-propertypage-tsvn-props-copyright)

4.40. [Property dialog boolean user types](tsvn-dug-propertypage.md#tsvn-dug-propertypage-tsvn-props-userbool)

4.41. [Property dialog state user types](tsvn-dug-propertypage.md#tsvn-dug-propertypage-tsvn-props-userstate)

4.42. [Property dialog single-line user types](tsvn-dug-propertypage.md#tsvn-dug-propertypage-tsvn-props-usersingleline)

4.43. [Property dialog multi-line user types](tsvn-dug-propertypage.md#tsvn-dug-propertypage-tsvn-props-usermultiline)

4.44. [svn:externals property page](tsvn-dug-propertypage.md#id769437)

4.45. [svn:keywords property page](tsvn-dug-propertypage.md#id769490)

4.46. [svn:eol-style property page](tsvn-dug-propertypage.md#id769522)

4.47. [tsvn:bugtraq property page](tsvn-dug-propertypage.md#id769547)

4.48. [Size of log messages property page](tsvn-dug-propertypage.md#id769541)

4.49. [Language property page](tsvn-dug-propertypage.md#id769585)

4.50. [svn:mime-type property page](tsvn-dug-propertypage.md#id769834)

4.51. [svn:needs-lock property page](tsvn-dug-propertypage.md#id769865)

4.52. [svn:executable property page](tsvn-dug-propertypage.md#id769853)

4.53. [Property dialog merge log message templates](tsvn-dug-propertypage.md#tsvn-dug-propertypage-tsvn-props-mergelogtemplate)

4.54. [The Branch/Tag Dialog](tsvn-dug-branchtag.md#tsvn-dug-branchtag-dia-1)

4.55. [The Switch Dialog](tsvn-dug-branchtag.md#tsvn-dug-switch-dia-1)

4.56. [The Merge Wizard - Select Revision Range](tsvn-dug-merge.md#tsvn-dug-merge-wizard-range)

4.57. [The Merge Wizard - Tree Merge](tsvn-dug-merge.md#tsvn-dug-merge-wizard-trees)

4.58. [The Merge Conflict Dialog](tsvn-dug-merge.md#tsvn-dug-merge-dia)

4.59. [The Merge Tree Conflict Dialog](tsvn-dug-merge.md#tsvn-dug-merge-tree-dia)

4.60. [The Merge-All Dialog](tsvn-dug-merge.md#tsvn-dug-mergeall-dia-1)

4.61. [The Locking Dialog](tsvn-dug-locking.md#tsvn-dug-locking-dia-lock)

4.62. [The Check for Modifications Dialog](tsvn-dug-locking.md#tsvn-dug-locking-dia-status)

4.63. [The Create Patch dialog](tsvn-dug-patch.md#tsvn-dug-patch-dia-1)

4.64. [The Annotate / Blame Dialog](tsvn-dug-blame.md#tsvn-dug-blame-dia-1)

4.65. [TortoiseBlame](tsvn-dug-blame.md#tsvn-dug-blame-dia-2)

4.66. [The Repository Browser](tsvn-dug-repobrowser.md#tsvn-dug-repobrowser-dia-1)

4.67. [A Revision Graph](tsvn-dug-revgraph.md#tsvn-dug-revgraph-dia-1)

4.68. [The Export-from-URL Dialog](tsvn-dug-export.md#tsvn-dug-export-dia-1)

4.69. [The Relocate Dialog](tsvn-dug-relocate.md#tsvn-dug-relocate-dia-1)

4.70. [The Bugtraq Properties Dialog](tsvn-dug-bugtracker.md#tsvn-dug-bugtraq-dia)

4.71. [Example issue tracker query dialog](tsvn-dug-bugtracker.md#tsvn-dug-bugtracker-dia-1)

4.72. [The Settings Dialog, General Page](tsvn-dug-settings.md#tsvn-dug-settings-dia-main)

4.73. [The Settings Dialog, Context Menu Page](tsvn-dug-settings.md#tsvn-dug-settings-dia-context)

4.74. [The Settings Dialog, Dialogs 1 Page](tsvn-dug-settings.md#tsvn-dug-settings-dia-dialogs)

4.75. [The Settings Dialog, Dialogs 2 Page](tsvn-dug-settings.md#tsvn-dug-settings-dia-dialogs-2)

4.76. [The Settings Dialog, Dialogs 3 Page](tsvn-dug-settings.md#tsvn-dug-settings-dia-dialogs-3)

4.77. [The Settings Dialog, Colours Page](tsvn-dug-settings.md#tsvn-dug-settings-dia-colors)

4.78. [The Settings Dialog, Revision Graph Page](tsvn-dug-settings.md#tsvn-dug-settings-dia-revgraph)

4.79. [The Settings Dialog, Revision Graph Colors Page](tsvn-dug-settings.md#tsvn-dug-settings-dia-revgraph-colors)

4.80. [The Settings Dialog, Icon Overlays Page](tsvn-dug-settings.md#tsvn-dug-settings-dia-overlay)

4.81. [The Settings Dialog, Icon Set Page](tsvn-dug-settings.md#tsvn-dug-settings-dia-icons)

4.82. [The Settings Dialog, Icon Handlers Page](tsvn-dug-settings.md#tsvn-dug-settings-dia-overlay-handlers)

4.83. [The Settings Dialog, Network Page](tsvn-dug-settings.md#tsvn-dug-settings-dia-4)

4.84. [The Settings Dialog, Diff Viewer Page](tsvn-dug-settings.md#tsvn-dug-settings-dia-5)

4.85. [The Settings Dialog, Diff/Merge Advanced Dialog](tsvn-dug-settings.md#tsvn-dug-settings-dia-6)

4.86. [The Settings Dialog, Saved Data Page](tsvn-dug-settings.md#tsvn-dug-settings-dia-saved-data)

4.87. [The Settings Dialog, Log Cache Page](tsvn-dug-settings.md#tsvn-dug-settings-dia-logcache)

4.88. [The Settings Dialog, Log Cache Statistics](tsvn-dug-settings.md#tsvn-dug-settings-dia-logcache-stats)

4.89. [The Settings Dialog, Hook Scripts Page](tsvn-dug-settings.md#tsvn-dug-settings-dia-hooks)

4.90. [The Settings Dialog, Configure Hook Scripts](tsvn-dug-settings.md#tsvn-dug-settings-dia-hook-edit)

4.91. [The Settings Dialog, Issue Tracker Integration Page](tsvn-dug-settings.md#tsvn-dug-settings-dia-issuetracker)

4.92. [The Settings Dialog, TortoiseBlame Page](tsvn-dug-settings.md#tsvn-dug-settings-dia-blame)

4.93. [The Settings Dialog, TortoiseUDiff Page](tsvn-dug-settings.md#tsvn-dug-settings-dia-udiff)

4.94. [The Settings Dialog, Sync Page](tsvn-dug-settings.md#tsvn-dug-settings-dia-export)

4.95. [Taskbar with default grouping](tsvn-dug-settings.md#tsvn-dug-settings-registry-task0-1)

4.96. [Taskbar with repository grouping](tsvn-dug-settings.md#tsvn-dug-settings-registry-task1-1)

4.97. [Taskbar with repository grouping](tsvn-dug-settings.md#tsvn-dug-settings-registry-task2-1)

4.98. [Taskbar grouping with repository color overlays](tsvn-dug-settings.md#tsvn-dug-settings-registry-overlay-1)

5.1. [The edit project dialog of the project monitor](tsvn-projectmonitor.md#tsvn-projectmonitor-addprojects-dia-1)

5.2. [The main dialog of the project monitor](tsvn-projectmonitor-maindialog.md#tsvn-projectmonitor-maindialog-dia-1)

B.1. [The TortoiseSVN right drag context menu for moving files](tsvn-howto.md#tsvn-howto-move-dia-1)

C.1. [The commit dialog, showing the upgrade notification](tsvn-admins-upgradecheck.md#tsvn-admins-dia1)

**List of Tables**

2.1. [Repository Access URLs](tsvn-basics-svn.md#tsvn-basics-svn-table-1)

4.1. [Pinned Revision](tsvn-dug-branchtag.md#tsvn-dug-branch-1-table)

6.1. [List of available command line switches](tsvn-subwcrev.md#tsvn-subwcrev-switch-table)

6.2. [List of SubWCRev error codes](tsvn-subwcrev.md#tsvn-subwcrev-error-table)

6.3. [List of available keywords](tsvn-subwcrev-keywords.md#tsvn-subwcrev-switch-table2)

6.4. [COM/automation methods supported](tsvn-subwcrev-com-interface.md#tsvn-subwcrev-COM-table)

C.1. [Menu entries and their values](tsvn-admins-disablemenus.md#tsvn-admins-disablemenus-1-table)

D.1. [List of available commands and options](tsvn-automation.md#tsvn-automation-1-table)

D.2. [List of available options](tsvn-automation-idiff.md#tsvn-automation-idiff-1-table)

D.3. [List of available options](tsvn-automation-udiff.md#tsvn-automation-udiff-1-table)
