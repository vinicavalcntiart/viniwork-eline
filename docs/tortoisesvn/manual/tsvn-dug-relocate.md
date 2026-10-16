<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-dug-relocate.html -->

## Relocating a working copy

**Figure 4.69. The Relocate Dialog**

*\[figure: The Relocate Dialog\]*

  
If your repository has for some reason changed it's location (IP/URL). Maybe you're even stuck and can't commit and you don't want to checkout your working copy again from the new location and to move all your changed data back into the new working copy, TortoiseSVN → Relocate is the command you are looking for. It basically does very little: it rewrites all URLs that are associated with each file and folder with the new URL.

### Note

This operation only works on working copy *roots*. So the context menu entry is only shown for working copy roots.

You may be surprised to find that TortoiseSVN contacts the repository as part of this operation. All it is doing is performing some simple checks to make sure that the new URL really does refer to the same repository as the existing working copy.

### Warning

*This is a very infrequently used operation*. The relocate command is *only* used if the URL of the repository root has changed. Possible reasons are:

- The IP address of the server has changed.

- The protocol has changed (e.g. http:// to https://).

- The repository root path in the server setup has changed.

Put another way, you need to relocate when your working copy is referring to the same location in the same repository, but the repository itself has moved.

It does not apply if:

- You want to move to a different Subversion repository. In that case you should perform a clean checkout from the new repository location.

- You want to switch to a different branch or directory within the same repository. To do that you should use TortoiseSVN → Switch.... Read [the section called “To Checkout or to Switch...”](tsvn-dug-branchtag.md#tsvn-dug-switch-1 "To Checkout or to Switch...") for more information.

If you use relocate in either of the cases above, it *will corrupt your working copy* and you will get many unexplainable error messages while updating, committing, etc. Once that has happened, the only fix is a fresh checkout.
