<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-automation-udiff.html -->

## TortoiseUDiff Commands

The unified diff viewer has only two command line options:

**Table D.3. List of available options**

| Option     | Description                                                           |
|------------|-----------------------------------------------------------------------|
| :patchfile | Path to the unified diff file.                                        |
| :p         | Activates pipe mode. The unified diff is read from the console input. |

  

Examples (which should be entered on one line):

``` screen
TortoiseUDiff.exe /patchfile:"c:\diff.patch"
      
```

If you create the diff from another command, you can use TortoiseUDiff to show that diff directly:

``` screen
svn diff | TortoiseUDiff.exe /u
      
```

this also works if you omit the `/p` parameter:

``` screen
svn diff | TortoiseUDiff.exe
      
```
