<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-dug-conflicts.html -->

## Resolving Conflicts

Once in a while, you will get a *conflict* when you update/merge your files from the repository or when you switch your working copy to a different URL. There are two kinds of conflicts:

file conflicts  
A file conflict occurs if two (or more) developers have changed the same few lines of a file.

tree conflicts  
A tree conflict occurs when a developer moved/renamed/deleted a file or folder, which another developer either also has moved/renamed/deleted or just modified.

### File Conflicts

A file conflict occurs when two or more developers have changed the same few lines of a file. As Subversion knows nothing of your project, it leaves resolving the conflicts to the developers. The conflicting area in a text file is marked like this:

``` screen
<<<<<<< filename
your changes
=======
code merged from repository
>>>>>>> revision
      
```

Also, for every conflicted file Subversion places three additional files in your directory:

filename.ext.mine  
This is your file as it existed in your working copy before you updated your working copy - that is, without conflict markers. This file has your latest changes in it and nothing else.

filename.ext.rOLDREV  
This is the file that was the BASE revision before you updated your working copy. That is, it the file that you checked out before you made your latest edits.

filename.ext.rNEWREV  
This is the file that your Subversion client just received from the server when you updated your working copy. This file corresponds to the HEAD revision of the repository.

You can either launch an external merge tool / conflict editor with TortoiseSVN → Edit Conflicts or you can use any text editor to resolve the conflict manually. You should decide what the code should look like, do the necessary changes and save the file. Using a merge tool such as TortoiseMerge or one of the other popular tools is generally the easier option as they generally present the files involved in a 3-pane view and you don't have to worry about the conflict markers. If you do use a text editor then you should search for lines starting with the string `<<<<<<<`.

Afterwards execute the command TortoiseSVN → Resolved and commit your modifications to the repository. Please note that the Resolve command does not really resolve the conflict. It just removes the `filename.ext.mine` and `filename.ext.r*` files, to allow you to commit your changes.

If you have conflicts with binary files, Subversion does not attempt to merge the files itself. The local file remains unchanged (exactly as you last changed it) and you have `filename.ext.r*` files. If you want to discard your changes and keep the repository version, just use the Revert command. If you want to keep your version and overwrite the repository version, use the Resolved command, then commit your version.

You can use the Resolved command for multiple files if you right click on the parent folder and select TortoiseSVN → Resolved... This will bring up a dialog listing all conflicted files in that folder, and you can select which ones to mark as resolved.

### Property Conflicts

A property conflict occurs when two or more developers have changed the same property. As with file content, resolving the conflict can only be done by the developers.

If one of the changes must override the other then choose the option to Resolve using local property or Resolve using remote property. If the changes must be merged then select Manually edit property, sort out what the property value should be and mark as resolved.

### Tree Conflicts

A tree conflict occurs when a developer moved/renamed/deleted a file or folder, which another developer either also has moved/renamed/deleted or just modified. There are many different situations that can result in a tree conflict, and all of them require different steps to resolve the conflict.

When a file is deleted locally in Subversion, the file is also deleted from the local file system, so even if it is part of a tree conflict it cannot show a conflicted overlay and you cannot right click on it to resolve the conflict. Use the Check for Modifications dialog instead to access the Edit conflicts option.

TortoiseSVN can help find the right place to merge changes, but there may be additional work required to sort out the conflicts. Remember that after an update the working BASE will always contain the revision of each item as it was in the repository at the time of update. If you revert a change after updating it goes back to the repository state, not to the way it was when you started making your own local changes.

#### Local delete, incoming edit upon update

1.  Developer A modifies `Foo.c` and commits it to the repository.

2.  Developer B has simultaneously moved `Foo.c` to `Bar.c` in his working copy, or simply deleted `Foo.c` or its parent folder.

An update of developer B's working copy results in a tree conflict:

- `Foo.c` has been deleted from working copy, but is marked with a tree conflict.

- If the conflict results from a rename rather than a delete then `Bar.c` is marked as added, but does not contain developer A's modifications.

Developer B now has to choose whether to keep Developer A's changes. In the case of a file rename, he can merge the changes to `Foo.c` into the renamed file `Bar.c`. For simple file or directory deletions he can choose to keep the item with Developer A's changes and discard the deletion. Or, by marking the conflict as resolved without doing anything he effectively discards Developer A's changes.

The conflict edit dialog offers to merge changes if it can find the original file of the renamed `Bar.c`. If there are multiple files that are possible move sources, then a button for each of these files is shown which allow you to chose the correct file.

#### Local edit, incoming delete upon update

1.  Developer A moves `Foo.c` to `Bar.c` and commits it to the repository.

2.  Developer B modifies `Foo.c` in his working copy.

Or in the case of a folder move ...

1.  Developer A moves parent folder `FooFolder` to `BarFolder` and commits it to the repository.

2.  Developer B modifies `Foo.c` in his working copy.

An update of developer B's working copy results in a tree conflict. For a simple file conflict:

- `Bar.c` is added to the working copy as a normal file.

- `Foo.c` is marked as added (with history) and has a tree conflict.

For a folder conflict:

- `BarFolder` is added to the working copy as a normal folder.

- `FooFolder` is marked as added (with history) and has a tree conflict.

  `Foo.c` is marked as modified.

Developer B now has to decide whether to go with developer A's reorganisation and merge her changes into the corresponding file in the new structure, or simply revert A's changes and keep the local file.

To merge her local changes with the reshuffle, Developer B must first find out to what filename the conflicted file `Foo.c` was renamed/moved in the repository. This can be done by using the log dialog. Then use the button which shows the correct source file to resolve the conflict.

If Developer B decides that A's changes were wrong then she must choose the Mark as resolved button in the conflict editor dialog. This marks the conflicted file/folder as resolved, but Developer A's changes need to be removed by hand. Again the log dialog helps to track down what was moved.

#### Local delete, incoming delete upon update

1.  Developer A moves `Foo.c` to `Bar.c` and commits it to the repository.

2.  Developer B moves `Foo.c` to `Bix.c`.

An update of developer B's working copy results in a tree conflict:

- `Bix.c` is marked as added with history.

- `Bar.c` is added to the working copy with status 'normal'.

- `Foo.c` is marked as deleted and has a tree conflict.

To resolve this conflict, Developer B has to find out to what filename the conflicted file `Foo.c` was renamed/moved in the repository. This can be done by using the log dialog.

Then developer B has to decide which new filename of `Foo.c` to keep - the one done by developer A or the rename done by himself.

After developer B has manually resolved the conflict, the tree conflict has to be marked as resolved with the button in the conflict editor dialog.

#### Local missing, incoming edit upon merge

1.  Developer A working on trunk modifies `Foo.c` and commits it to the repository

2.  Developer B working on a branch moves `Foo.c` to `Bar.c` and commits it to the repository

A merge of developer A's trunk changes to developer B's branch working copy results in a tree conflict:

- `Bar.c` is already in the working copy with status 'normal'.

- `Foo.c` is marked as missing with a tree conflict.

To resolve this conflict, Developer B has to mark the file as resolved in the conflict editor dialog, which will remove it from the conflict list. She then has to decide whether to copy the missing file `Foo.c` from the repository to the working copy, whether to merge Developer A's changes to `Foo.c` into the renamed `Bar.c` or whether to ignore the changes by marking the conflict as resolved and doing nothing else.

Note that if you copy the missing file from the repository and then mark as resolved, your copy will be removed again. You have to resolve the conflict first.

#### Local edit, incoming delete upon merge

1.  Developer A working on trunk moves `Foo.c` to `Bar.c` and commits it to the repository.

2.  Developer B working on a branch modifies `Foo.c` and commits it to the repository.

1.  Developer A working on trunk moves parent folder `FooFolder` to `BarFolder` and commits it to the repository.

2.  Developer B working on a branch modifies `Foo.c` in her working copy.

A merge of developer A's trunk changes to developer B's branch working copy results in a tree conflict:

- `Bar.c` is marked as added.

- `Foo.c` is marked as modified with a tree conflict.

Developer B now has to decide whether to go with developer A's reorganisation and merge her changes into the corresponding file in the new structure, or simply revert A's changes and keep the local file.

To merge her local changes with the reshuffle, Developer B must first find out to what filename the conflicted file `Foo.c` was renamed/moved in the repository. This can be done by using the log dialog for the merge source. The conflict editor only shows the log for the working copy as it does not know which path was used in the merge, so you will have to find that yourself. The changes must then be merged by hand as there is currently no way to automate or even simplify this process. Once the changes have been ported across, the conflicted path is redundant and can be deleted.

If Developer B decides that A's changes were wrong then she must choose the Mark as resolved button in the conflict editor dialog. This marks the conflicted file/folder as resolved, but Developer A's changes need to be removed by hand. Again the log dialog for the merge source helps to track down what was moved.

#### Local delete, incoming delete upon merge

1.  Developer A working on trunk moves `Foo.c` to `Bar.c` and commits it to the repository.

2.  Developer B working on a branch moves `Foo.c` to `Bix.c` and commits it to the repository.

A merge of developer A's trunk changes to developer B's branch working copy results in a tree conflict:

- `Bix.c` is marked with normal (unmodified) status.

- `Bar.c` is marked as added with history.

- `Foo.c` is marked as missing and has a tree conflict.

To resolve this conflict, Developer B has to find out to what filename the conflicted file `Foo.c` was renamed/moved in the repository. This can be done by using the log dialog for the merge source.

Then developer B has to decide which new filename of `Foo.c` to keep - the one done by developer A or the rename done by himself.

After developer B has manually resolved the conflict, the tree conflict has to be marked as resolved with the button in the conflict editor dialog.

#### Other tree conflicts

There are other cases which are labelled as tree conflicts simply because the conflict involves a folder rather than a file. For example if you add a folder with the same name to both trunk and branch and then try to merge you will get a tree conflict. If you want to keep the folder from the merge target, just mark the conflict as resolved. If you want to use the one in the merge source then you need to SVN delete the one in the target first and run the merge again. If you need anything more complicated then you have to resolve manually.
