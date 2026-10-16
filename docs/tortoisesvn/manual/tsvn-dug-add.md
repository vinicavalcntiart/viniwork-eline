<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-dug-add.html -->

## Adding New Files And Directories

**Figure 4.31. Explorer context menu for unversioned files**

*\[figure: Explorer context menu for unversioned files\]*

  
If you created new files and/or directories during your development process then you need to add them to source control too. Select the file(s) and/or directory and use TortoiseSVN → Add.

After you added the files/directories to source control the file appears with a `added` icon overlay which means you first have to commit your working copy to make those files/directories available to other developers. Adding a file/directory does *not* affect the repository!

### Many Adds

You can also use the Add command on already versioned folders. In that case, the add dialog will show you all unversioned files inside that versioned folder. This helps if you have many new files and need to add them all at once.

To add files from outside your working copy you can use the drag-and-drop handler:

1.  select the files you want to add

2.  right drag them to the new location inside the working copy

3.  release the right mouse button

4.  select Context Menu → SVN Add files to this WC. The files will then be copied to the working copy and added to version control.

You can also add files within a working copy simply by left-dragging and dropping them onto the commit dialog.

If you add a file or folder by mistake, you can undo the addition before you commit using TortoiseSVN → Undo add....
