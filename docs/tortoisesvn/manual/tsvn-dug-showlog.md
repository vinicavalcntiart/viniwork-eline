<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-dug-showlog.html -->

## Revision Log Dialog

For every change you make and commit, you should provide a log message for that change. That way you can later find out what changes you made and why, and you have a detailed log for your development process.

The Revision Log Dialog retrieves all those log messages and shows them to you. The display is divided into 3 panes.

- The top pane shows a list of revisions where changes to the file/folder have been committed. This summary includes the date and time, the person who committed the revision and the start of the log message.

  Lines shown in blue indicate that something has been copied to this development line (perhaps from a branch).

- The middle pane shows the full log message for the selected revision.

- The bottom pane shows a list of all files and folders that were changed as part of the selected revision.

But it does much more than that - it provides context menu commands which you can use to get even more information about the project history.

### Invoking the Revision Log Dialog

**Figure 4.18. The Revision Log Dialog**

*\[figure: The Revision Log Dialog\]*

  
There are several places from where you can show the Log dialog:

- From the TortoiseSVN context submenu

- From the property page

- From the Progress dialog after an update has finished. Then the Log dialog only shows those revisions which were changed since your last update

- From the repository browser

If the repository is unavailable you will see the Want to go offline? dialog, described in [the section called “Offline Mode”](tsvn-dug-showlog.md#tsvn-dug-showlog-cache "Offline Mode").

### Revision Log Actions

The top pane has an Actions column containing icons that summarize what has been done in that revision. There are four different icons, each shown in its own column.

If a revision modified a file or directory, the *modified* icon is shown in the first column.

If a revision added a file or directory, the *added* icon is shown in the second column.

If a revision deleted a file or directory, the *deleted* icon is shown in the third column.

If a revision replaced a file or directory, the *replaced* icon is shown in the fourth column.

If a revision moved or renamed a file or directory, the *moved* icon is shown in the fourth column.

If a revision replaced a file or directory by moving/renaming it, the *move replaced* icon is shown in the fourth column.

If a revision merged a file or directory, the *merged* icon is shown in the fourth column.

If a revision reverse merged a file or directory, the *reverse merged* icon is shown in the fourth column.

### Getting Additional Information

**Figure 4.19. The Revision Log Dialog Top Pane with Context Menu**

*\[figure: The Revision Log Dialog Top Pane with Context Menu\]*

  
The top pane of the Log dialog has a context menu that allows you to access much more information. Some of these menu entries appear only when the log is shown for a file, and some only when the log is shown for a folder.

Compare with working copy  
Compare the selected revision with your working copy. The default Diff-Tool is TortoiseMerge which is supplied with TortoiseSVN. If the log dialog is for a folder, this will show you a list of changed files, and allow you to review the changes made to each file individually.

Compare and blame with working BASE  
Blame the selected revision, and the file in your working BASE and compare the blame reports using a visual diff tool. Read [the section called “Blame Differences”](tsvn-dug-blame.md#tsvn-dug-blame-diffs "Blame Differences") for more detail. (files only)

Show changes as unified diff  
View the changes made in the selected revision as a Unified-Diff file (GNU patch format). This shows only the differences with a few lines of context. It is harder to read than a visual file compare, but will show all file changes together in a compact format.

If you hold down the **Shift** key when clicking on the menu item, a dialog shows up first where you can set options for the unified diff. These options include the ability to ignore changes in line endings and whitespaces.

Compare with previous revision  
Compare the selected revision with the previous revision. This works in a similar manner to comparing with your working copy. For folders this option will first show the changed files dialog allowing you to select files to compare.

Compare and blame with previous revision  
Show the changed files dialog allowing you to select files. Blame the selected revision, and the previous revision, and compare the results using a visual diff tool. (folders only)

Save revision to...  
Save the selected revision to a file so you have an older version of that file. (files only)

Open / Open with...  
Open the selected file, either with the default viewer for that file type, or with a program you choose. (files only)

Blame...  
Blame the file up to the selected revision. (files only)

Browse repository  
Open the repository browser to examine the selected file or folder in the repository as it was at the selected revision.

Create branch/tag from revision  
Create a branch or tag from a selected revision. This is useful e.g. if you forgot to create a tag and already committed some changes which weren't supposed to get into that release.

Update item to revision  
Update your working copy to the selected revision. Useful if you want to have your working copy reflect a time in the past, or if there have been further commits to the repository and you want to update your working copy one step at a time. It is best to update a whole directory in your working copy, not just one file, otherwise your working copy could be inconsistent.

If you want to undo an earlier change permanently, use Revert to this revision instead.

Revert to this revision  
Revert to an earlier revision. If you have made several changes, and then decide that you really want to go back to how things were in revision N, this is the command you need. The changes are undone in your working copy so this operation does *not* affect the repository until you commit the changes. Note that this will undo *all* changes made after the selected revision, replacing the file/folder with the earlier version.

If your working copy is in an unmodified state, after you perform this action your working copy will show as modified. If you already have local changes, this command will merge the *undo* changes into your working copy.

What is happening internally is that Subversion performs a reverse merge of all the changes made after the selected revision, undoing the effect of those previous commits.

If after performing this action you decide that you want to *undo the undo* and get your working copy back to its previous unmodified state, you should use TortoiseSVN → Revert from within Windows Explorer, which will discard the local modifications made by this reverse merge action.

If you simply want to see what a file or folder looked like at an earlier revision, use Update to revision or Save revision as... instead.

Revert changes from this revision  
Undo changes from which were made in the selected revision. The changes are undone in your working copy so this operation does *not* affect the repository at all! Note that this will undo the changes made in that revision only; it does not replace your working copy with the entire file at the earlier revision. This is very useful for undoing an earlier change when other unrelated changes have been made since.

If your working copy is in an unmodified state, after you perform this action your working copy will show as modified. If you already have local changes, this command will merge the *undo* changes into your working copy.

What is happening internally is that Subversion performs a reverse merge of that one revision, undoing its effect from a previous commit.

You can *undo the undo* as described above in Revert to this revision.

Merge revision to...  
Merge the selected revision(s) into a different working copy. A folder selection dialog allows you to choose the working copy to merge into, but after that there is no confirmation dialog, nor any opportunity to try a test merge. It is a good idea to merge into an unmodified working copy so that you can revert the changes if it doesn't work out! This is a useful feature if you want to merge selected revisions from one branch to another.

Checkout...  
Make a fresh checkout of the selected folder at the selected revision. This brings up a dialog for you to confirm the URL and revision, and select a location for the checkout.

Export...  
Export the selected file/folder at the selected revision. This brings up a dialog for you to confirm the URL and revision, and select a location for the export.

Edit author / log message  
Edit the log message or author attached to a previous commit. Read [the section called “Changing the Log Message and Author”](tsvn-dug-showlog.md#tsvn-dug-showlog-4 "Changing the Log Message and Author") to find out how this works.

Show revision properties  
View and edit any revision property, not just log message and author. Refer to [the section called “Changing the Log Message and Author”](tsvn-dug-showlog.md#tsvn-dug-showlog-4 "Changing the Log Message and Author").

Copy to clipboard  
Copy the log details of the selected revisions to the clipboard. This will copy the revision number, author, date, log message and the list of changed items for each revision.

Search log messages...  
Search log messages for the text you enter. This searches the log messages that you entered and also the action summaries created by Subversion (shown in the bottom pane). The search is not case sensitive.

Create code collaborator review...  
This menu is shown only if the SmartBear code collaborator tool is installed. When invoked for the first time, a dialog is shown prompting the user to enter user credentials for both code collaborator and SVN. Once the settings are stored, the settings dialog is no longer shown when the menu is invoked, unless the user holds **Ctrl** while executing the menu item. The configuration and the chosen revision(s) are used to invoke the code collaborator graphical user interface client, which creates a new review with the selected revisions.

**Figure 4.20. The Code Collaborator Settings Dialog**

*\[figure: The Code Collaborator Settings Dialog\]*

  

**Figure 4.21. Top Pane Context Menu for 2 Selected Revisions**

*\[figure: Top Pane Context Menu for 2 Selected Revisions\]*

  
If you select two revisions at once (using the usual **Ctrl**-modifier), the context menu changes and gives you fewer options:

Compare revisions  
Compare the two selected revisions using a visual difference tool. The default Diff-Tool is TortoiseMerge which is supplied with TortoiseSVN.

If you select this option for a folder, a further dialog pops up listing the changed files and offering you further diff options. Read more about the Compare Revisions dialog in [the section called “Comparing Folders”](tsvn-dug-diff.md#tsvn-dug-compare-revs "Comparing Folders").

Blame revisions  
Blame the two revisions and compare the blame reports using a visual difference tool. Read [the section called “Blame Differences”](tsvn-dug-blame.md#tsvn-dug-blame-diffs "Blame Differences") for more detail.

Show differences as unified diff  
View the differences between the two selected revisions as a Unified-Diff file. This works for files and folders.

Copy to clipboard  
Copy log messages to clipboard as described above.

Search log messages...  
Search log messages as described above.

If you select two or more revisions (using the usual **Ctrl** or **Shift** modifiers), the context menu will include an entry to Revert all changes which were made in the selected revisions. This is the easiest way to rollback a group of revisions in one go.

You can also choose to merge the selected revisions to another working copy, as described above.

If all selected revisions have the same author, you can edit the author of all those revisions in one go.

**Figure 4.22. The Log Dialog Bottom Pane with Context Menu**

*\[figure: The Log Dialog Bottom Pane with Context Menu\]*

  
The bottom pane of the Log dialog also has a context menu that allows you to

Show changes  
Show changes made in the selected revision for the selected file.

Blame changes  
Blame the selected revision and the previous revision for the selected file, and compare the blame reports using a visual diff tool. Read [the section called “Blame Differences”](tsvn-dug-blame.md#tsvn-dug-blame-diffs "Blame Differences") for more detail.

Show as unified diff  
Show file changes in unified diff format. This context menu is only available for files shown as *modified*.

Open / Open with...  
Open the selected file, either with the default viewer for that file type, or with a program you choose.

Blame...  
Opens the Blame dialog, allowing you to blame up to the selected revision.

Revert changes from this revision  
Revert the changes made to the selected file in that revision.

Show properties  
View the Subversion properties for the selected item.

Show log  
Show the revision log for the selected single file.

Get merge logs  
Show the revision log for the selected single file, including merged changes. Find out more in [the section called “Merge Tracking Features”](tsvn-dug-showlog.md#tsvn-dug-showlog-mergetrack "Merge Tracking Features").

Save revision to...  
Save the selected revision to a file so you have an older version of that file.

Export...  
Export the selected items in this revision to a folder, preserving the file hierarchy.

When multiple files are selected in the bottom pane of the Log dialog, the context menu changes to the following:

**Figure 4.23. The Log Dialog Bottom Pane with Context Menu When Multiple Files Selected.**

*\[figure: The Log Dialog Bottom Pane with Context Menu When Multiple Files Selected.\]*

  

Save revision to...  
Save the selected revision to a file so you have an older version of that file.

Show multiple changes...  
Show changes made in the selected revision for the selected files. Note that the show changes functionality is invoked multiple times, which may bring up multiple copies of your selected diff tool, or just add a new comparison tab in your diff tool. If you have selected more than 15 files, you will be prompted to confirm the action.

Open multiple local...  
This will open local working copy files that correspond to your selected files using the application that is registered for the extension. \[The behavior is the one you would get double-clicking the working-copy file(s) in Windows explorer\]. Depending on how your file extension is associated to an application and the capabilities of the application, this may be a slow operation. In the worst case, new instances of the application may be launched by Windows for each file that was selected.

If you hold **Ctrl** while invoking this command, the working copy files are always loaded into Visual Studio. This only works when the following conditions are met: Visual Studio must be running in the same user context while having the same process integrity level \[running as admin or not\] as TortoiseProc.exe. It may be desirable to have the solution containing the changed files loaded, although this is not strictly necessary. Only files that exist on disk with extensions \[.cpp, .h, .cs, .rc, .resx, .xaml, .js, .html, .htm, .asp, .aspx, .php, .css and .xml\] will be loaded. A maximum of 100 files can be loaded into Visual Studio at one time, and the files are always loaded as new tabs into the currently open instance of Visual Studio. The benefit of reviewing code changes in Visual Studio lies in the fact that you can then use the built-in code navigation, reference finding, static code analysis and other tools built into Visual Studio.

Export...  
Export the selected files/folder at the selected revision. This brings up a dialog for you to confirm the URL and revision, and select a location for the export.

### Tip

You may notice that sometimes we refer to changes and other times to differences. What's the difference?

Subversion uses revision numbers to mean 2 different things. A revision generally represents the state of the repository at a point in time, but it can also be used to represent the changeset which created that revision, e.g. “Done in r1234” means that the changes committed in r1234 implement feature X. To make it clearer which sense is being used, we use two different terms.

If you select two revisions N and M, the context menu will offer to show the *difference* between those two revisions. In Subversion terms this is `diff -r M:N`.

If you select a single revision N, the context menu will offer to show the *changes* made in that revision. In Subversion terms this is `diff -r N-1:N` or `diff -c N`.

The bottom pane shows the files changed in all selected revisions, so the context menu always offers to show *changes*.

### Getting more log messages

The Log dialog does not always show all changes ever made for a number of reasons:

- For a large repository there may be hundreds or even thousands of changes and fetching them all could take a long time. Normally you are only interested in the more recent changes. By default, the number of log messages fetched is limited to 100, but you can change this value in TortoiseSVN → Settings ([the section called “TortoiseSVN Dialog Settings 1”](tsvn-dug-settings.md#tsvn-dug-settings-dialogs "TortoiseSVN Dialog Settings 1")),

- When the Stop on copy/rename box is checked, Show Log will stop at the point that the selected file or folder was copied from somewhere else within the repository. This can be useful when looking at branches (or tags) as it stops at the root of that branch, and gives a quick indication of changes made in that branch only.

  Normally you will want to leave this option unchecked. TortoiseSVN remembers the state of the checkbox, so it will respect your preference.

  When the Show Log dialog is invoked from within the Merge dialog, the box is always checked by default. This is because merging is most often looking at changes on branches, and going back beyond the root of the branch does not make sense in that instance.

  Note that Subversion currently implements renaming as a copy/delete pair, so renaming a file or folder will also cause the log display to stop if this option is checked.

If you want to see more log messages, click the Next 100 to retrieve the next 100 log messages. You can repeat this as many times as needed.

Next to this button there is a multi-function button which remembers the last option you used it for. Click on the arrow to see the other options offered.

Use Show Range ... if you want to view a specific range of revisions. A dialog will then prompt you to enter the start and end revision.

Use Show All if you want to see *all* log messages from HEAD right back to revision 1.

To refresh the latest revision in case there were other commits while the log dialog was open, hit the **F5** key.

To refresh the log cache, hit the **Ctrl-F5** keys.

### Current Working Copy Revision

Because the log dialog shows you the log from HEAD, not from the current working copy revision, it often happens that there are log messages shown for content which has not yet been updated in your working copy. To help make this clearer, the commit message which corresponds to the revision you have in your working copy is shown in bold.

When you show the log for a folder the revision highlighted is the highest revision found anywhere within that folder, which requires a crawl of the working copy. The crawl takes place within a separate thread so as not to delay showing the log, but as a result highlighting for folders may not appear immediately.

### Merge Tracking Features

Subversion 1.5 and later keeps a record of merges using properties. This allows us to get a more detailed history of merged changes. For example, if you develop a new feature on a branch and then merge that branch back to trunk, the feature development will show up on the trunk log as a single commit for the merge, even though there may have been 1000 commits during branch development.

**Figure 4.24. The Log Dialog Showing Merge Tracking Revisions**

*\[figure: The Log Dialog Showing Merge Tracking Revisions\]*

  

If you want to see the detail of which revisions were merged as part of that commit, use the Include merged revisions checkbox. This will fetch the log messages again, but will also interleave the log messages from revisions which were merged. Merged revisions are shown in grey because they represent changes made on a different part of the tree.

Of course, merging is never simple! During feature development on the branch there will probably be occasional merges back from trunk to keep the branch in sync with the main line code. So the merge history of the branch will also include another layer of merge history. These different layers are shown in the log dialog using indentation levels.

### Changing the Log Message and Author

Revision properties are completely different from the Subversion properties of each item. Revprops are descriptive items which are associated with one specific revision number in the repository, such as log message, commit date and committer name (author).

Sometimes you might want to change a log message you once entered, maybe because there's a spelling error in it or you want to improve the message or change it for other reasons. Or you want to change the author of the commit because you forgot to set up authentication or...

Subversion lets you change revision properties any time you want. But since such changes can't be undone (those changes are not versioned) this feature is disabled by default. To make this work, you must set up a pre-revprop-change hook. Please refer to the chapter on [*Hook Scripts*](https://svnbook.red-bean.com/en/1.8/svn.reposadmin.create.html#svn.reposadmin.create.hooks) in the Subversion Book for details about how to do that. Read [the section called “Server side hook scripts”](tsvn-repository-hooks.md "Server side hook scripts") to find some further notes on implementing hooks on a Windows machine.

Once you've set up your server with the required hooks, you can change the author and log message (or any other revprop) of any revision, using the context menu from the top pane of the Log dialog. You can also edit a log message using the context menu for the middle pane.

### Warning

Because Subversion's revision properties are not versioned, making modifications to such a property (for example, the `svn:log` commit message property) will overwrite the previous value of that property *forever*.

### Important

Since TortoiseSVN keeps a cache of all the log information, edits made for author and log messages will only show up on your local installation. Other users using TortoiseSVN will still see the cached (old) authors and log messages until they refresh the log cache. Refer to [the section called “Refreshing the View”](tsvn-dug-showlog.md#tsvn-dug-showlog-refresh "Refreshing the View")

### Filtering Log Messages

If you want to restrict the log messages to show only those you are interested in rather than scrolling through a list of hundreds, you can use the filter controls at the top of the Log Dialog. The start and end date controls allow you to restrict the output to a known date range. The search box allows you to show only messages which contain a particular phrase.

Click on the search icon to select which information you want to search in, and to choose *regex* mode. Normally you will only need a simple sub-string search, but if you need to more flexible search terms, you can use regular expressions. If you hover the mouse over the box, a tooltip will give hints on how to use the regex functions, or the sub-string functions. The filter works by checking whether your filter string matches the log entries, and then only those entries which *match* the filter string are shown.

Simple sub-string search works in a manner similar to a search engine. Strings to search for are separated by spaces, and all strings must match. You can use a leading `-` to specify that a particular sub-string is not found (invert matching for that term), and you can use `!` at the start of the expression to invert matching for the entire expression. You can use a leading `+` to specify that a sub-string should be included, even if previously excluded with a `-`. Note that the order of inclusion/exclusion is significant here. You can use quote marks to surround a string which must contain spaces, and if you want to search for a literal quotation mark you can use two quotation marks together as a self-escaping sequence. Note that the backslash character is *not* used as an escape character and has no special significance in simple sub-string searches. Examples will make this easier:

``` screen
Alice Bob -Eve
      
```

searches for strings containing both Alice and Bob but not Eve

``` screen
Alice -Bob +Eve
      
```

searches for strings containing both Alice but not Bob, or strings which contain Eve.

``` screen
-Case +SpecialCase
      
```

searches for strings which do not contain Case, but still include strings which contain SpecialCase.

``` screen
!Alice Bob
      
```

searches for strings which do not contain both Alice and Bob

``` screen
!-Alice -Bob
      
```

do you remember De Morgan's theorem? NOT(NOT Alice AND NOT Bob) reduces to (Alice OR Bob).

``` screen
"Alice and Bob"
      
```

searches for the literal expression “Alice and Bob”

``` screen
""
      
```

searches for a double-quote anywhere in the text

``` screen
"Alice says ""hi"" to Bob"
      
```

searches for the literal expression “Alice says "hi" to Bob”.

Describing the use of regular expression searches is beyond the scope of this manual, but you can find online documentation and a tutorial at [*https://www.regular-expressions.info/*](https://www.regular-expressions.info/) .

Note that these filters act on the messages already retrieved. They do not control downloading of messages from the repository.

You can also filter the path names in the bottom pane using the Show only affected paths checkbox. Affected paths are those which contain the path used to display the log. If you fetch the log for a folder, that means anything in that folder or below it. For a file it means just that one file. Normally the path list shows any other paths which are affected by the same commit, but in grey. If the box is checked, those paths are hidden.

Sometimes your working practices will require log messages to follow a particular format, which means that the text describing the changes is not visible in the abbreviated summary shown in the top pane. The property `tsvn:logsummary` can be used to extract a portion of the log message to be shown in the top pane. Read [the section called “TortoiseSVN Project Properties”](tsvn-dug-propertypage.md#tsvn-dug-propertypage-tsvn-props "TortoiseSVN Project Properties") to find out how to use this property.

### No Log Formatting from Repository Browser

Because the formatting depends upon accessing Subversion properties, you will only see the results when using a checked out working copy. Fetching properties remotely is a slow operation, so you will not see this feature in action from the repo browser.

### Statistical Information

The Statistics button brings up a box showing some interesting information about the revisions shown in the Log dialog. This shows how many authors have been at work, how many commits they have made, progress by week, and much more. Now you can see at a glance who has been working hardest and who is slacking ;-)

#### Statistics Page

This page gives you all the numbers you can think of, in particular the period and number of revisions covered, and some min/max/average values.

#### Commits by Author Page

**Figure 4.25. Commits-by-Author Histogram**

*\[figure: Commits-by-Author Histogram\]*

  
This graph shows you which authors have been active on the project as a simple histogram, stacked histogram or pie chart.

**Figure 4.26. Commits-by-Author Pie Chart**

*\[figure: Commits-by-Author Pie Chart\]*

  

Where there are a few major authors and many minor contributors, the number of tiny segments can make the graph more difficult to read. The slider at the bottom allows you to set a threshold (as a percentage of total commits) below which any activity is grouped into an *Others* category.

#### Commits by date Page

**Figure 4.27. Commits-by-date Graph**

*\[figure: Commits-by-date Graph\]*

  
This page gives you a graphical representation of project activity in terms of number of commits *and* author. This gives some idea of when a project is being worked on, and who was working at which time.

When there are several authors, you will get many lines on the graph. There are two views available here: *normal*, where each author's activity is relative to the base line, and *stacked*, where each author's activity is relative to the line underneath. The latter option avoids the lines crossing over, which can make the graph easier to read, but less easy to see one author's output.

By default the analysis is case-sensitive, so users `PeterEgan` and `PeteRegan` are treated as different authors. However, in many cases user names are not case-sensitive, and are sometimes entered inconsistently, so you may want `DavidMorgan` and `davidmorgan` to be treated as the same person. Use the Authors case insensitive checkbox to control how this is handled.

Note that the statistics cover the same period as the Log dialog. If that is only displaying one revision then the statistics will not tell you very much.

### Offline Mode

**Figure 4.28. Go Offline Dialog**

*\[figure: Go Offline Dialog\]*

  
If the server is not reachable, and you have log caching enabled you can use the log dialog and revision graph in offline mode. This uses data from the cache, which allows you to continue working although the information may not be up-to-date or even complete.

Here you have three options:

Offline for now  
Complete the current operation in offline mode, but retry the repository next time log data is requested.

Permanently offline  
Remain in offline mode until a repository check is specifically requested. See [the section called “Refreshing the View”](tsvn-dug-showlog.md#tsvn-dug-showlog-refresh "Refreshing the View").

Cancel  
If you don't want to continue the operation with possibly stale data, just cancel.

The Make this the default checkbox prevents this dialog from re-appearing and always picks the option you choose next. You can still change (or remove) the default after doing this from TortoiseSVN → Settings.

### Refreshing the View

If you want to check the server again for newer log messages, you can simply refresh the view using **F5**. If you are using the log cache (enabled by default), this will check the repository for newer messages and fetch only the new ones. If the log cache was in offline mode, this will also attempt to go back online.

If you are using the log cache and you think the message content or author may have changed, you can use **Shift-F5** or **Ctrl-F5** to re-fetch the displayed messages from the server and update the log cache. Note that this only affects messages currently shown and does not invalidate the entire cache for that repository.
