<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-projectmonitor.html -->

# Chapter 5. Project Monitor

**Table of Contents**

[Adding projects to monitor](tsvn-projectmonitor.md#tsvn-projectmonitor-addprojects)

[Monitor dialog](tsvn-projectmonitor-maindialog.md)

[Main operations](tsvn-projectmonitor-maindialog.md#tsvn-projectmonitor-maindialog-buttons)

The project monitor is a helpful tool that monitors repositories and notifies you in case there are new commits.

The projects can be monitored via a working copy path or directly via their repository URLs.

The project monitor scans each project in a configurable interval, and every time new commits are detected a notification popup is shown. Also the icon that is added to the system tray changes to indicate that there are new commits.

### Snarl

If [*Snarl*](https://snarl.fullphat.net/) is installed and active, then the project monitor automatically uses Snarl to show the notifications about newly detected commits.

## Adding projects to monitor

If you first start the project monitor, the tree view on the left side is empty. To add projects, click on the button at the top of the dialog named Add Project.

**Figure 5.1. The edit project dialog of the project monitor**

*\[figure: The edit project dialog of the project monitor\]*

  
To add a project for monitoring, fill in the required information. The name of the project is not optional and must be filled in, all other information is optional.

If the box for `Path or Url` is left empty, then a folder is added. This is useful to group monitored projects.

If you want to monitor all repositories served via the [*SVNParentPath*](https://svnbook.red-bean.com/en/1.8/svn.serverconfig.httpd.html#svn.serverconfig.httpd.basic) directive, enter the root Url for your repositories and check the box `Url points to SVNParentPath list`.

The fields `Username` and `Password` should only be filled in if the repository does not provide anonymous read access, and only if the authentication is not stored by Subversion itself. If you're accessing the monitored repository with TortoiseSVN or other svn clients and you've stored the authentication already, you should leave this empty: you won't have to edit those projects manually if the password changes.

The `Monitor interval in minutes` specifies the minutes to wait in between checks. The smallest interval is one minute.

### check interval

If there are a lot of users monitoring the same repository and the bandwidth on the server is limited, a repository admin can set the minimum for check intervals using an `svnrobots.txt` file. A detailed explanation on how this works can be found on the project monitor website:

[*https://tools.stefankueng.com/svnrobots.html*](https://tools.stefankueng.com/svnrobots.html)
