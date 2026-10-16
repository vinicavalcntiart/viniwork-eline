<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-basics.html -->

# Chapter 2. Basic Version-Control Concepts

**Table of Contents**

[The Repository](tsvn-basics.md#tsvn-basics-repository)

[Versioning Models](tsvn-basics-versioning.md)

[The Problem of File-Sharing](tsvn-basics-versioning.md#tsvn-basics-versioning-filesharing)

[The Lock-Modify-Unlock Solution](tsvn-basics-versioning.md#tsvn-basics-versioning-lockmodifyunlock)

[The Copy-Modify-Merge Solution](tsvn-basics-versioning.md#tsvn-basics-versioning-copymodifymerge)

[What does Subversion Do?](tsvn-basics-versioning.md#tsvn-basics-versioning-4)

[Subversion in Action](tsvn-basics-svn.md)

[Working Copies](tsvn-basics-svn.md#tsvn-basics-svn-workingcopy)

[Repository URLs](tsvn-basics-svn.md#tsvn-basics-svn-urls)

[Revisions](tsvn-basics-svn.md#tsvn-basics-svn-revisions)

[How Working Copies Track the Repository](tsvn-basics-svn.md#tsvn-basics-svn-wcrepository)

[Summary](tsvn-basics-summary.md)

This chapter is a slightly modified version of the same chapter in the Subversion book. An online version of the Subversion book is available here: [*https://svnbook.red-bean.com/*](https://svnbook.red-bean.com/) .

This chapter is a short, casual introduction to Subversion. If you're new to version control, this chapter is definitely for you. We begin with a discussion of general version control concepts, work our way into the specific ideas behind Subversion, and show some simple examples of Subversion in use.

Even though the examples in this chapter show people sharing collections of program source code, keep in mind that Subversion can manage any sort of file collection - it's not limited to helping computer programmers.

## The Repository

Subversion is a centralized system for sharing information. At its core is a *repository*, which is a central store of data. The repository stores information in the form of a *filesystem tree* - a typical hierarchy of files and directories. Any number of *clients* connect to the repository, and then read or write to these files. By writing data, a client makes the information available to others; by reading data, the client receives information from others.

**Figure 2.1. A Typical Client/Server System**

*\[figure: A Typical Client/Server System\]*

  

So why is this interesting? So far, this sounds like the definition of a typical file server. And indeed, the repository *is* a kind of file server, but it's not your usual breed. What makes the Subversion repository special is that *it remembers every change* ever written to it: every change to every file, and even changes to the directory tree itself, such as the addition, deletion, and rearrangement of files and directories.

When a client reads data from the repository, it normally sees only the latest version of the filesystem tree. But the client also has the ability to view *previous* states of the filesystem. For example, a client can ask historical questions like, “ what did this directory contain last Wednesday? ”, or “ who was the last person to change this file, and what changes did they make? ” These are the sorts of questions that are at the heart of any *version control system*: systems that are designed to record and track changes to data over time.
