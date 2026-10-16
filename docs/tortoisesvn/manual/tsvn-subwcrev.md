<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-subwcrev.html -->

# Chapter 6. The SubWCRev Program

**Table of Contents**

[The SubWCRev Command Line](tsvn-subwcrev.md#tsvn-subwcrev-cli)

[Keyword Substitution](tsvn-subwcrev-keywords.md)

[Keyword Example](tsvn-subwcrev-example.md)

[COM interface](tsvn-subwcrev-com-interface.md)

SubWCRev is Windows console program which can be used to read the status of a Subversion working copy and optionally perform keyword substitution in a template file. This is often used as part of the build process as a means of incorporating working copy information into the object you are building. Typically it might be used to include the revision number in an “About” box.

## The SubWCRev Command Line

SubWCRev reads the Subversion status of all files in a working copy, excluding externals by default. It records the highest commit revision number found, and the commit timestamp of that revision, it also records whether there are local modifications in the working copy, or mixed update revisions. The revision number, update revision range and modification status are displayed on stdout.

SubWCRev.exe is called from the command line or a script, and is controlled using the command line parameters.

``` screen
SubWCRev WorkingCopyPath [SrcVersionFile DstVersionFile] [-nmdfe]
      
```

`WorkingCopyPath` is the path to the working copy being checked. You can only use SubWCRev on working copies, not directly on the repository. The path may be absolute or relative to the current working directory.

If you want SubWCRev to perform keyword substitution, so that fields like repository revision and URL are saved to a text file, you need to supply a template file `SrcVersionFile` and an output file `DstVersionFile` which contains the substituted version of the template.

You can specify ignore patterns for SubWCRev to prevent specific files and paths from being considered. The patterns are read from a file named `.subwcrevignore`. The file is read from the specified path, and also from the working copy root. If the file does not exist, no files or paths are ignored. The `.subwcrevignore` file can contain multiple patterns, separated by newlines. The patterns are matched against the paths relative to the repository root and paths relative to the path of the `.subwcrevignore` file. For example, to ignore all files in the `doc` folder of the TortoiseSVN working copy, the `.subwcrevignore` would contain the following lines:

``` screen
/trunk/doc
/trunk/doc/*
```

Or, assuming the `.subwcrevignore` file is in the working copy root which is checked out from trunk, using the patterns

``` screen
doc
doc/*
```

is the same as the example above.

To ignore all images, the ignore patterns could be set like this:

``` screen
*.png
*.jpg
*.ico
*.bmp
```

### Important

The ignore patterns are case-sensitive, just like Subversion is.

### Tip

To create a file with a starting dot in the Windows explorer, enter `.subwcrevignore.`. Note the trailing dot.

There are a number of optional switches which affect the way SubWCRev works. If you use more than one, they must be specified as a single group, e.g. `-nm`, not `-n -m`.

**Table 6.1. List of available command line switches**

| Switch | Description                                                                                                                                                                                                                       |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| -n     | If this switch is given, SubWCRev will exit with `ERRORLEVEL 7` if the working copy contains local modifications. This may be used to prevent building with uncommitted changes present.                                          |
| -N     | If this switch is given, SubWCRev will exit with `ERRORLEVEL 11` if the working copy contains unversioned items that are not ignored.                                                                                             |
| -m     | If this switch is given, SubWCRev will exit with `ERRORLEVEL 8` if the working copy contains mixed revisions. This may be used to prevent building with a partially updated working copy.                                         |
| -d     | If this switch is given, SubWCRev will exit with `ERRORLEVEL 9` if the destination file already exists.                                                                                                                           |
| -f     | If this switch is given, SubWCRev will include the last-changed revision of folders. The default behaviour is to use only files when getting the revision numbers.                                                                |
| -e     | If this switch is given, SubWCRev will examine directories which are included with `svn:externals`, but only if they are from the same repository. The default behaviour is to ignore externals.                                  |
| -E     | If this switch is given, same as `-e`, but it ignores the externals with explicit revisions, when the revision range inside of them is only the given explicit revision in the properties. So it doesn't lead to mixed revisions. |
| -x     | If this switch is given, SubWCRev will output the revision numbers in HEX.                                                                                                                                                        |
| -X     | If this switch is given, SubWCRev will output the revision numbers in HEX, with '0X' prepended.                                                                                                                                   |
| -F     | If this switch is given, SubWCRev will ignore any `.subwcrevignore` files and include all files.                                                                                                                                  |
| -q     | If this switch is given, SubWCRev will perform the keyword substitution without showing working copy status on stdout.                                                                                                            |

  

If there is no error, SubWCRev returns zero. But in case an error occurs, the error message is written to stderr and shown in the console. And the returned error codes are:

**Table 6.2. List of SubWCRev error codes**

| Error Code | Description                                                                                                     |
|------------|-----------------------------------------------------------------------------------------------------------------|
| 1          | Syntax error. One or more command line parameters are invalid.                                                  |
| 2          | The file or folder specified on the command line was not found.                                                 |
| 3          | The input file could not be opened, or the target file could not be created.                                    |
| 4          | Could not allocate memory. This could happen if e.g. the source file is too big.                                |
| 5          | The source file can not be scanned properly.                                                                    |
| 6          | SVN error: Subversion returned with an error when SubWCRev tried to find the information from the working copy. |
| 7          | The working copy has local modifications. This requires the `-n` switch.                                        |
| 8          | The working copy has mixed revisions. This requires the `-m` switch.                                            |
| 9          | The output file already exists. This requires the `-d` switch.                                                  |
| 10         | The specified path is not a working copy or part or one.                                                        |
| 11         | The working copy has unversioned files or folders in it. This requires the `-N` switch.                         |
