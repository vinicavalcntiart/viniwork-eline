<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-ibugtraqprovider.html -->

# Chapter 7. IBugtraqProvider interface

**Table of Contents**

[Naming conventions](tsvn-ibugtraqprovider.md#tsvn-bugtraqnaming)

[The IBugtraqProvider interface](tsvn-ibugtraqprovider-1.md)

[The IBugtraqProvider2 interface](tsvn-ibugtraqprovider-2.md)

To get a tighter integration with issue trackers than by simply using the `bugtraq:` properties, TortoiseSVN can make use of COM plugins. With such plugins it is possible to fetch information directly from the issue tracker, interact with the user and provide information back to TortoiseSVN about open issues, verify log messages entered by the user and even run actions after a successful commit to e.g, close an issue.

We can't provide information and tutorials on how you have to implement a COM object in your preferred programming language, but we have example plugins in C++/ATL and C# in our repository in the `contrib/issue-tracker-plugins` folder. In that folder you can also find the required include files you need to build your plugin. ([the section called “License”](tsvn-preface-source.md "License") explains how to access the repository.)

### Important

You should provide both a 32-bit and 64-bit version of your plugin. Because the x64-Version of TortoiseSVN can not use a 32-bit plugin and vice-versa.

## Naming conventions

If you release an issue tracker plugin for TortoiseSVN, please do *not* name it *Tortoise\<Something\>*. We'd like to reserve the *Tortoise* prefix for a version control client integrated into the windows shell. For example: TortoiseCVS, TortoiseSVN, TortoiseHg, TortoiseGit and TortoiseBzr are all version control clients.

Please name your plugin for a Tortoise client *Turtle\<Something\>*, where *\<Something\>* refers to the issue tracker that you are connecting to. Alternatively choose a name that sounds like *Turtle* but has a different first letter. Nice examples are:

- Gurtle - An issue tracker plugin for Google code

- TurtleMine - An issue tracker plugin for Redmine

- VurtleOne - An issue tracker plugin for VersionOne
