<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-preface-features.html -->

## TortoiseSVN's Features

What makes TortoiseSVN such a good Subversion client? Here's a short list of features.

Shell integration  
TortoiseSVN integrates seamlessly into the Windows shell (i.e. the explorer). This means you can keep working with the tools you're already familiar with. And you do not have to change into a different application each time you need the functions of version control.

And you are not limited to using the Windows Explorer; TortoiseSVN's context menus work in many other file managers, and also in the File/Open dialog which is common to most standard Windows applications. You should, however, bear in mind that TortoiseSVN is intentionally developed as an extension for the Windows Explorer. Thus it is possible that in other applications the integration is not as complete and e.g. the icon overlays may not be shown.

Icon overlays  
The status of every versioned file and folder is indicated by small overlay icons. That way you can see right away what the status of your working copy is.

Graphical User Interface  
When you list the changes to a file or folder, you can click on a revision to see the comments for that commit. You can also see a list of changed files - just double click on a file to see exactly what changed.

The commit dialog lists all the items that will be included in a commit, and each item has a checkbox so you can choose which items you want to include. Unversioned files can also be listed, in case you forgot to add that new file.

Easy access to Subversion commands  
All Subversion commands are available from the explorer context menu. TortoiseSVN adds its own submenu there.

Since TortoiseSVN is a Subversion client, we would also like to show you some of the features of Subversion itself:

Directory versioning  
CVS only tracks the history of individual files, but Subversion implements a “virtual” versioned filesystem that tracks changes to whole directory trees over time. Files *and* directories are versioned. As a result, there are real client-side **move** and **copy** commands that operate on files and directories.

Atomic commits  
A commit either goes into the repository completely, or not at all. This allows developers to construct and commit changes as logical chunks.

Versioned metadata  
Each file and directory has an invisible set of “properties” attached. You can invent and store any arbitrary key/value pairs you wish. Properties are versioned over time, just like file contents.

Choice of network layers  
Subversion has an abstracted notion of repository access, making it easy for people to implement new network mechanisms. Subversion's “advanced” network server is a module for the Apache web server, which speaks a variant of HTTP called WebDAV/DeltaV. This gives Subversion a big advantage in stability and interoperability, and provides various key features for free: authentication, authorization, wire compression, and repository browsing, for example. A smaller, standalone Subversion server process is also available. This server speaks a custom protocol which can be easily tunneled over ssh.

Consistent data handling  
Subversion expresses file differences using a binary differencing algorithm, which works identically on both text (human-readable) and binary (human-unreadable) files. Both types of files are stored equally compressed in the repository, and differences are transmitted in both directions across the network.

Efficient branching and tagging  
The cost of branching and tagging need not be proportional to the project size. Subversion creates branches and tags by simply copying the project, using a mechanism similar to a hard-link. Thus these operations take only a very small, constant amount of time, and very little space in the repository.
