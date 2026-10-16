<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-dug-ignore.html -->

## Ignoring Files And Directories

**Figure 4.33. Explorer context menu for unversioned files**

*\[figure: Explorer context menu for unversioned files\]*

  
In most projects you will have files and folders that should not be subject to version control. These might include files created by the compiler, `*.obj, *.lst`, maybe an output folder used to store the executable. Whenever you commit changes, TortoiseSVN shows your unversioned files, which fills up the file list in the commit dialog. Of course you can turn off this display, but then you might forget to add a new source file.

The best way to avoid these problems is to add the derived files to the project's ignore list. That way they will never show up in the commit dialog, but genuine unversioned source files will still be flagged up.

If you right click on a single unversioned file, and select the command TortoiseSVN → Add to Ignore List from the context menu, a submenu appears allowing you to select just that file, or all files with the same extension. Both submenus also have a `(recursively)` equivalent. If you select multiple files, there is no submenu and you can only add those specific files/folders.

If you choose the `(recursively)` version of the ignore context menu, the item will be ignored not just for the selected folder but all subfolders as well. However this requires SVN clients version 1.8 or higher.

If you want to remove one or more items from the ignore list, right click on those items and select TortoiseSVN → Remove from Ignore List You can also access a folder's `svn:ignore` property directly. That allows you to specify more general patterns using filename globbing, described in the section below. Read [the section called “Project Settings”](tsvn-dug-propertypage.md "Project Settings") for more information on setting properties directly. Please be aware that each ignore pattern has to be placed on a separate line. Separating them by spaces does not work.

### The Global Ignore List

Another way to ignore files is to add them to the *global ignore list*. The big difference here is that the global ignore list is a client property. It applies to *all* Subversion projects, but on the client PC only. In general it is better to use the `svn:ignore` property where possible, because it can be applied to specific project areas, and it works for everyone who checks out the project. Read [the section called “General Settings”](tsvn-dug-settings.md#tsvn-dug-settings-main "General Settings") for more information.

### Ignoring Versioned Items

Versioned files and folders can never be ignored - that's a feature of Subversion. If you versioned a file by mistake, read [the section called “Ignore files which are already versioned”](tsvn-howto-unversion.md "Ignore files which are already versioned") for instructions on how to “unversion” it.

### Pattern Matching in Ignore Lists

Subversion's ignore patterns make use of filename globbing, a technique originally used in Unix to specify files using meta-characters as wildcards. The following characters have special meaning:

\*  
Matches any string of characters, including the empty string (no characters).

?  
Matches any single character.

\[...\]  
Matches any one of the characters enclosed in the square brackets. Within the brackets, a pair of characters separated by “-” matches any character lexically between the two. For example `[AGm-p]` matches any one of `A`, `G`, `m`, `n`, `o` or `p`.

Pattern matching is case sensitive, which can cause problems on Windows. You can force case insensitivity the hard way by pairing characters, e.g. to ignore `*.tmp` regardless of case, you could use a pattern like `*.[Tt][Mm][Pp]`.

If you want an official definition for globbing, you can find it in the IEEE specifications for the shell command language [*Pattern Matching Notation*](https://pubs.opengroup.org/onlinepubs/009695399/utilities/xcu_chap02.html#tag_02_13) .

### No Paths in Global Ignore List

You should not include path information in your pattern. The pattern matching is intended to be used against plain file names and folder names. If you want to ignore all `CVS` folders, just add `CVS` to the ignore list. There is no need to specify `CVS */CVS` as you did in earlier versions. If you want to ignore all `tmp` folders when they exist within a `prog` folder but not within a `doc` folder you should use the `svn:ignore` property instead. There is no reliable way to achieve this using global ignore patterns.
