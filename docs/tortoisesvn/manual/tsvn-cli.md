<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-cli.html -->

# Appendix E. Command Line Interface Cross Reference

**Table of Contents**

[Conventions and Basic Rules](tsvn-cli.md#tsvn-cli-basics)

[TortoiseSVN Commands](tsvn-cli-main.md)

[Checkout](tsvn-cli-main.md#tsvn-cli-checkout)

[Update](tsvn-cli-main.md#tsvn-cli-update)

[Update to Revision](tsvn-cli-main.md#tsvn-cli-updaterev)

[Commit](tsvn-cli-main.md#tsvn-cli-commit)

[Diff](tsvn-cli-main.md#tsvn-cli-diff)

[Show Log](tsvn-cli-main.md#tsvn-cli-showlog)

[Check for Modifications](tsvn-cli-main.md#tsvn-cli-checkmods)

[Revision Graph](tsvn-cli-main.md#tsvn-cli-revgraph)

[Repo Browser](tsvn-cli-main.md#tsvn-cli-repobrowser)

[Edit Conflicts](tsvn-cli-main.md#tsvn-cli-editconflicts)

[Resolved](tsvn-cli-main.md#tsvn-cli-resolved)

[Rename](tsvn-cli-main.md#tsvn-cli-rename)

[Delete](tsvn-cli-main.md#tsvn-cli-delete)

[Revert](tsvn-cli-main.md#tsvn-cli-revert)

[Cleanup](tsvn-cli-main.md#tsvn-cli-cleanup)

[Get Lock](tsvn-cli-main.md#tsvn-cli-getlock)

[Release Lock](tsvn-cli-main.md#tsvn-cli-release)

[Branch/Tag](tsvn-cli-main.md#tsvn-cli-branchtag)

[Switch](tsvn-cli-main.md#tsvn-cli-switch)

[Merge](tsvn-cli-main.md#tsvn-cli-merge)

[Export](tsvn-cli-main.md#tsvn-cli-export)

[Relocate](tsvn-cli-main.md#tsvn-cli-relocate)

[Create Repository Here](tsvn-cli-main.md#tsvn-cli-createrepos)

[Add](tsvn-cli-main.md#tsvn-cli-add)

[Import](tsvn-cli-main.md#tsvn-cli-import)

[Blame](tsvn-cli-main.md#tsvn-cli-blame)

[Add to Ignore List](tsvn-cli-main.md#tsvn-cli-addignore)

[Create Patch](tsvn-cli-main.md#tsvn-cli-createpatch)

[Apply Patch](tsvn-cli-main.md#tsvn-cli-applypatch)

Sometimes this manual refers you to the main Subversion documentation, which describes Subversion in terms of the Command Line Interface (CLI). To help you understand what TortoiseSVN is doing behind the scenes, we have compiled a list showing the equivalent CLI commands for each of TortoiseSVN's GUI operations.

### Note

Even though there are CLI equivalents to what TortoiseSVN does, remember that TortoiseSVN does *not* call the CLI but uses the Subversion library directly.

If you think you have found a bug in TortoiseSVN, we may ask you to try to reproduce it using the CLI, so that we can distinguish TortoiseSVN issues from Subversion issues. This reference tells you which command to try.

## Conventions and Basic Rules

In the descriptions which follow, the URL for a repository location is shown simply as `URL`, and an example might be `https://svn.code.sf.net/p/tortoisesvn/code/trunk/`. The working copy path is shown simply as `PATH`, and an example might be `C:\TortoiseSVN\trunk`.

### Important

Because TortoiseSVN is a Windows Shell Extension, it is not able to use the notion of a current working directory. All working copy paths must be given using the absolute path, not a relative path.

Certain items are optional, and these are often controlled by checkboxes or radio buttons in TortoiseSVN. These options are shown in \[square brackets\] in the command line definitions.
