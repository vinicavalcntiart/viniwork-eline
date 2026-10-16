<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-howto-repo-shortcut.html -->

## Create a shortcut to a repository

If you frequently need to open the repository browser at a particular location, you can create a desktop shortcut using the automation interface to TortoiseProc. Just create a new shortcut and set the target to:

``` screen
TortoiseProc.exe /command:repobrowser /path:"url/to/repository"
      
```

Of course you need to include the real repository URL.
