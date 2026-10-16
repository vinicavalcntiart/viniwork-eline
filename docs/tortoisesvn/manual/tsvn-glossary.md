<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-glossary.html -->

# Glossary

Add  
A Subversion command that is used to add a file or directory to your working copy. The new items are added to the repository when you commit.

BASE revision  
The current base revision of a file or folder in your *working copy*. This is the revision the file or folder was in, when the last checkout, update or commit was run. The BASE revision is normally not equal to the HEAD revision.

Blame  
This command is for text files only, and it annotates every line to show the repository revision in which it was last changed, and the author who made that change. Our GUI implementation is called TortoiseBlame and it also shows the commit date/time and the log message when you hover the mouse of the revision number.

Branch  
A term frequently used in revision control systems to describe what happens when development forks at a particular point and follows 2 separate paths. You can create a branch off the main development line so as to develop a new feature without rendering the main line unstable. Or you can branch a stable release to which you make only bug fixes, while new developments take place on the unstable trunk. In Subversion a branch is implemented as a “cheap copy”.

Checkout  
A Subversion command which creates a local working copy in an empty directory by downloading versioned files from the repository.

Cleanup  
To quote from the Subversion book: “ Recursively clean up the working copy, removing locks and resuming unfinished operations. If you ever get a *working copy locked* error, run this command to remove stale locks and get your working copy into a usable state again. ” Note that in this context *lock* refers to local filesystem locking, not repository locking.

Commit  
This Subversion command is used to pass the changes in your local working copy back into the repository, creating a new repository revision.

Conflict  
When changes from the repository are merged with local changes, sometimes those changes occur on the same lines. In this case Subversion cannot automatically decide which version to use and the file is said to be in conflict. You have to edit the file manually and resolve the conflict before you can commit any further changes.

Copy  
In a Subversion repository you can create a copy of a single file or an entire tree. These are implemented as “cheap copies” which act a bit like a link to the original in that they take up almost no space. Making a copy preserves the history of the item in the copy, so you can trace changes made before the copy was made.

Delete  
When you delete a versioned item (and commit the change) the item no longer exists in the repository after the committed revision. But of course it still exists in earlier repository revisions, so you can still access it. If necessary, you can copy a deleted item and “resurrect” it complete with history.

Diff  
Shorthand for “Show Differences”. Very useful when you want to see exactly what changes have been made.

Export  
This command produces a copy of a versioned folder, just like a working copy, but without the local `.svn` folders.

FSFS  
A proprietary Subversion filesystem backend for repositories. Can be used on network shares. Default for 1.2 and newer repositories.

GPO  
Group policy object.

HEAD revision  
The latest revision of a file or folder in the *repository*.

Import  
Subversion command to import an entire folder hierarchy into the repository in a single revision.

Lock  
When you take out a lock on a versioned item, you mark it in the repository as non-committable, except from the working copy where the lock was taken out.

Log  
Show the revision history of a file or folder. Also known as “History”.

History  
Show the revision history of a file or folder. Also known as “Log”.

Merge  
The process by which changes from the repository are added to your working copy without disrupting any changes you have already made locally. Sometimes these changes cannot be reconciled automatically and the working copy is said to be in conflict.

Merging happens automatically when you update your working copy. You can also merge specific changes from another branch using TortoiseSVN's Merge command.

Patch  
If a working copy has changes to text files only, it is possible to use Subversion's Diff command to generate a single file summary of those changes in Unified Diff format. A file of this type is often referred to as a “Patch”, and it can be emailed to someone else (or to a mailing list) and applied to another working copy. Someone without commit access can make changes and submit a patch file for an authorized committer to apply. Or if you are unsure about a change you can submit a patch for others to review.

Property  
In addition to versioning your directories and files, Subversion allows you to add versioned metadata - referred to as “properties” to each of your versioned directories and files. Each property has a name and a value, rather like a registry key. Subversion has some special properties which it uses internally, such as `svn:eol-style`. TortoiseSVN has some too, such as `tsvn:logminsize`. You can add your own properties with any name and value you choose.

Relocate  
If your repository moves, perhaps because you have moved it to a different directory on your server, or the server domain name has changed, you need to “relocate” your working copy so that its repository URLs point to the new location.

Note: you should only use this command if your working copy is referring to the same location in the same repository, but the repository itself has moved. In any other circumstance you probably need the “Switch” command instead.

Repository  
A repository is a central place where data is stored and maintained. A repository can be a place where multiple databases or files are located for distribution over a network, or a repository can be a location that is directly accessible to the user without having to travel across a network.

Resolve  
When files in a working copy are left in a conflicted state following a merge, those conflicts must be sorted out by a human using an editor (or perhaps TortoiseMerge). This process is referred to as “Resolving Conflicts”. When this is complete you can mark the conflicted files as being resolved, which allows them to be committed.

Revert  
Subversion keeps a local “pristine” copy of each file as it was when you last updated your working copy. If you have made changes and decide you want to undo them, you can use the “revert” command to go back to the pristine copy.

Revision  
Every time you commit a set of changes, you create one new “revision” in the repository. Each revision represents the state of the repository tree at a certain point in its history. If you want to go back in time you can examine the repository as it was at revision N.

In another sense, a revision can refer to the set of changes that were made when that revision was created.

Revision Property (revprop)  
Just as files can have properties, so can each revision in the repository. Some special revprops are added automatically when the revision is created, namely: `svn:date svn:author svn:log` which represent the commit date/time, the committer and the log message respectively. These properties can be edited, but they are not versioned, so any change is permanent and cannot be undone.

SVN  
A frequently-used abbreviation for Subversion.

The name of the Subversion custom protocol used by the “svnserve” repository server.

Switch  
Just as “Update-to-revision” changes the time window of a working copy to look at a different point in history, so “Switch” changes the space window of a working copy so that it points to a different part of the repository. It is particularly useful when working on trunk and branches where only a few files differ. You can switch your working copy between the two and only the changed files will be transferred.

Update  
This Subversion command pulls down the latest changes from the repository into your working copy, merging any changes made by others with local changes in the working copy.

Working Copy  
This is your local “sandbox”, the area where you work on the versioned files, and it normally resides on your local hard disk. You create a working copy by doing a “Checkout” from a repository, and you feed your changes back into the repository using “Commit”.
