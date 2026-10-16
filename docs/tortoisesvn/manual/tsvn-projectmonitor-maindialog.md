<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-projectmonitor-maindialog.html -->

## Monitor dialog

**Figure 5.2. The main dialog of the project monitor**

*\[figure: The main dialog of the project monitor\]*

  
The project monitor shows all monitored projects on the left in a tree view. The projects can be moved around, for example one project can be moved below another project, making it a child/subproject.

A click on a project shows all the log messages of that project on the right.

Projects that have updates are shown in bold, with the number of new commits in brackets at the right. A click on a project marks it automatically as read.

### Main operations

The toolbar at the top of the dialog allows to configure and operate the project monitor.

Check Now  
While each monitored project is checked according to the interval that's set up, clicking this button will force a check of all projects immediately. Note that if there are updates, the notification won't show up until all projects have been checked.

Add Project  
Opens a new dialog to set up a new project for monitoring.

Edit  
Opens the configuration dialog for the selected project.

Remove  
Removes the selected project after a confirmation dialog is shown.

Mark all as read  
Marks all revisions in all projects as read. Note that if you select a project with unread revisions, those revisions are automatically marked as read when you select another project.

If you hold down the **Shift** key when clicking the button, all error states are also cleared if there are any.

Update all  
Runs an **Update** on all monitored working copies. Projects that are monitored via an url are not updated, only those that are set up with a working copy path.

Options  
Shows a dialog to configure the behavior of the project monitor.
