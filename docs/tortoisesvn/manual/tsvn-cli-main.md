<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-cli-main.html -->

## TortoiseSVN Commands

### Checkout

``` screen
svn checkout [-depth ARG] [--ignore-externals] [-r rev] URL PATH
      
```

The depth combo box items relate to the `-depth` argument.

If Omit externals is checked, use the `--ignore-externals` switch.

If you are checking out a specific revision, specify that after the URL using `-r` switch.

### Update

``` screen
svn info URL_of_WC
svn update [-r rev] PATH
      
```

Updating multiple items is currently not an atomic operation in Subversion. So TortoiseSVN first finds the HEAD revision of the repository, and then updates all items to that particular revision number to avoid creating a mixed revision working copy.

If only one item is selected for updating or the selected items are not all from the same repository, TortoiseSVN just updates to HEAD.

No command line options are used here. Update to revision also implements the update command, but offers more options.

### Update to Revision

``` screen
svn info URL_of_WC
svn update [-r rev] [-depth ARG] [--ignore-externals] PATH
      
```

The depth combo box items relate to the `-depth` argument.

If Omit externals is checked, use the `--ignore-externals` switch.

### Commit

In TortoiseSVN, the commit dialog uses several Subversion commands. The first stage is a status check which determines the items in your working copy which can potentially be committed. You can review the list, diff files against BASE and select the items you want to be included in the commit.

``` screen
svn status -v PATH
      
```

If Show unversioned files is checked, TortoiseSVN will also show all unversioned files and folders in the working copy hierarchy, taking account of the ignore rules. This particular feature has no direct equivalent in Subversion, as the `svn status` command does not descend into unversioned folders.

If you check any unversioned files and folders, those items will first be added to your working copy.

``` screen
svn add PATH...
      
```

When you click on OK, the Subversion commit takes place. If you have left all the file selection checkboxes in their default state, TortoiseSVN uses a single recursive commit of the working copy. If you deselect some files, then a non-recursive commit (`-N`) must be used, and every path must be specified individually on the commit command line.

``` screen
svn commit -m "LogMessage" [-depth ARG] [--no-unlock] PATH...
      
```

`LogMessage` here represents the contents of the log message edit box. This can be empty.

If Keep locks is checked, use the `--no-unlock` switch.

### Diff

``` screen
svn diff PATH
      
```

If you use Diff from the main context menu, you are diffing a modified file against its BASE revision. The output from the CLI command above also does this and produces output in unified-diff format. However, this is not what TortoiseSVN is using. TortoiseSVN uses TortoiseMerge (or a diff program of your choosing) to display differences visually between full-text files, so there is no direct CLI equivalent.

You can also diff any 2 files using TortoiseSVN, whether or not they are version controlled. TortoiseSVN just feeds the two files into the chosen diff program and lets it work out where the differences lie.

### Show Log

``` screen
svn log -v -r 0:N --limit 100 [--stop-on-copy] PATH
or
svn log -v -r M:N [--stop-on-copy] PATH
      
```

By default, TortoiseSVN tries to fetch 100 log messages using the --limit method. If the settings instruct it to use old APIs, then the second form is used to fetch the log messages for 100 repository revisions.

If Stop on copy/rename is checked, use the `--stop-on-copy` switch.

### Check for Modifications

``` screen
svn status -v PATH
or
svn status -u -v PATH
      
```

The initial status check looks only at your working copy. If you click on Check repository then the repository is also checked to see which files would be changed by an update, which requires the `-u` switch.

If Show unversioned files is checked, TortoiseSVN will also show all unversioned files and folders in the working copy hierarchy, taking account of the ignore rules. This particular feature has no direct equivalent in Subversion, as the `svn status` command does not descend into unversioned folders.

### Revision Graph

The revision graph is a feature of TortoiseSVN only. There's no equivalent in the command line client.

What TortoiseSVN does is an

``` screen
svn info URL_of_WC
svn log -v URL
        
```

where URL is the repository *root* and then analyzes the data returned.

### Repo Browser

``` screen
svn info URL_of_WC
svn list [-r rev] -v URL
      
```

You can use `svn info` to determine the repository root, which is the top level shown in the repository browser. You cannot navigate `Up` above this level. Also, this command returns all the locking information shown in the repository browser.

The `svn list` call will list the contents of a directory, given a URL and revision.

### Edit Conflicts

This command has no CLI equivalent. It invokes TortoiseMerge or an external 3-way diff/merge tool to look at the files involved in the conflict and sort out which lines to use.

### Resolved

``` screen
svn resolved PATH
      
```

### Rename

``` screen
svn rename CURR_PATH NEW_PATH
      
```

### Delete

``` screen
svn delete PATH
      
```

### Revert

``` screen
svn status -v PATH
      
```

The first stage is a status check which determines the items in your working copy which can potentially be reverted. You can review the list, diff files against BASE and select the items you want to be included in the revert.

When you click on OK, the Subversion revert takes place. If you have left all the file selection checkboxes in their default state, TortoiseSVN uses a single recursive (`-R`) revert of the working copy. If you deselect some files, then every path must be specified individually on the revert command line.

``` screen
svn revert [-R] PATH...
      
```

### Cleanup

``` screen
svn cleanup PATH
      
```

### Get Lock

``` screen
svn status -v PATH
      
```

The first stage is a status check which determines the files in your working copy which can potentially be locked. You can select the items you want to be locked.

``` screen
svn lock -m "LockMessage" [--force] PATH...
      
```

`LockMessage` here represents the contents of the lock message edit box. This can be empty.

If Steal the locks is checked, use the `--force` switch.

### Release Lock

``` screen
svn unlock PATH
      
```

### Branch/Tag

``` screen
svn copy -m "LogMessage" URL URL
or
svn copy -m "LogMessage" URL@rev URL@rev
or
svn copy -m "LogMessage" PATH URL
      
```

The Branch/Tag dialog performs a copy to the repository. There are 3 radio button options:

- HEAD revision in the repository
- Specific revision in repository
- Working copy

which correspond to the 3 command line variants above.

`LogMessage` here represents the contents of the log message edit box. This can be empty.

### Switch

``` screen
svn info URL_of_WC
svn switch [-r rev] URL PATH
      
```

### Merge

``` screen
svn merge [--dry-run] --force From_URL@revN To_URL@revM PATH
      
```

The Test Merge performs the same merge with the `--dry-run` switch.

``` screen
svn diff From_URL@revN To_URL@revM
      
```

The Unified diff shows the diff operation which will be used to do the merge.

### Export

``` screen
svn export [-r rev] [--ignore-externals] URL Export_PATH
      
```

This form is used when accessed from an unversioned folder, and the folder is used as the destination.

Exporting a working copy to a different location is done without using the Subversion library, so there's no matching command line equivalent.

What TortoiseSVN does is to copy all files to the new location while showing you the progress of the operation. Unversioned files/folders can optionally be exported too.

In both cases, if Omit externals is checked, use the `--ignore-externals` switch.

### Relocate

``` screen
svn switch --relocate From_URL To_URL
      
```

### Create Repository Here

``` screen
svnadmin create --fs-type fsfs PATH
      
```

### Add

``` screen
svn add PATH...
      
```

If you selected a folder, TortoiseSVN first scans it recursively for items which can be added.

### Import

``` screen
svn import -m LogMessage PATH URL
      
```

`LogMessage` here represents the contents of the log message edit box. This can be empty.

### Blame

``` screen
svn blame -r N:M -v PATH
svn log -r N:M PATH
      
```

If you use TortoiseBlame to view the blame info, the file log is also required to show log messages in a tooltip. If you view blame as a text file, this information is not required.

### Add to Ignore List

``` screen
svn propget svn:ignore PATH > tempfile
{edit new ignore item into tempfile}
svn propset svn:ignore -F tempfile PATH
      
```

Because the `svn:ignore` property is often a multi-line value, it is shown here as being changed via a text file rather than directly on the command line.

### Create Patch

``` screen
svn diff PATH > patch-file
      
```

TortoiseSVN creates a patch file in unified diff format by comparing the working copy with its BASE version.

### Apply Patch

Applying patches is a tricky business unless the patch and working copy are at the same revision. Luckily for you, you can use TortoiseMerge, which has no direct equivalent in Subversion.
