<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-subwcrev-com-interface.html -->

## COM interface

If you need to access Subversion revision information from other programs, you can use the COM interface of SubWCRev. The object to create is `SubWCRev.object`, and the following methods are supported:

**Table 6.4. COM/automation methods supported**

| Method            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| .GetWCInfo        | This method traverses the working copy gathering the revision information. Naturally you must call this before you can access the information using the remaining methods. The first parameter is the path. The second parameter should be true if you want to include folder revisions. Equivalent to the `-f` command line switch. The third parameter should be true if you want to include svn:externals. Equivalent to the `-e` command line switch. |
| .GetWCInfo2       | The same as `GetWCInfo()` but with a fourth parameter that sets the equivalent to the `-E` command line switch.                                                                                                                                                                                                                                                                                                                                           |
| .Revision         | The highest commit revision in the working copy. Equivalent to `$WCREV$`.                                                                                                                                                                                                                                                                                                                                                                                 |
| .Date             | The commit date/time of the highest commit revision. Equivalent to `$WCDATE$`.                                                                                                                                                                                                                                                                                                                                                                            |
| .Author           | The author of the highest commit revision, that is, the last person to commit changes to the working copy.                                                                                                                                                                                                                                                                                                                                                |
| .MinRev           | The minimum update revision, as shown in `$WCRANGE$`                                                                                                                                                                                                                                                                                                                                                                                                      |
| .MaxRev           | The maximum update revision, as shown in `$WCRANGE$`                                                                                                                                                                                                                                                                                                                                                                                                      |
| .HasModifications | True if there are local modifications                                                                                                                                                                                                                                                                                                                                                                                                                     |
| .HasUnversioned   | True if there are unversioned items                                                                                                                                                                                                                                                                                                                                                                                                                       |
| .Url              | Replaced with the repository URL of the working copy path used in `GetWCInfo`. Equivalent to `$WCURL$`.                                                                                                                                                                                                                                                                                                                                                   |
| .RepoRoot         | Replaced with the URL of the repository root. Equivalent to `$REPOROOT$`.                                                                                                                                                                                                                                                                                                                                                                                 |
| .IsSvnItem        | True if the item is versioned.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| .NeedsLocking     | True if the item has the `svn:needs-lock` property set.                                                                                                                                                                                                                                                                                                                                                                                                   |
| .IsLocked         | True if the item is locked.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| .LockCreationDate | String representing the date when the lock was created, or an empty string if the item is not locked.                                                                                                                                                                                                                                                                                                                                                     |
| .LockOwner        | String representing the lock owner, or an empty string if the item is not locked.                                                                                                                                                                                                                                                                                                                                                                         |
| .LockComment      | The message entered when the lock was created.                                                                                                                                                                                                                                                                                                                                                                                                            |

  

The following example shows how the interface might be used.

``` programlisting
// testCOM.js - javascript file
// test script for the SubWCRev COM/Automation-object

filesystem = new ActiveXObject("Scripting.FileSystemObject");

revObject1 = new ActiveXObject("SubWCRev.object");
revObject2 = new ActiveXObject("SubWCRev.object");
revObject3 = new ActiveXObject("SubWCRev.object");
revObject4 = new ActiveXObject("SubWCRev.object");

revObject1.GetWCInfo(
    filesystem.GetAbsolutePathName("."), 1, 1);
revObject2.GetWCInfo(
    filesystem.GetAbsolutePathName(".."), 1, 1);
revObject3.GetWCInfo(
    filesystem.GetAbsolutePathName("SubWCRev.cpp"), 1, 1);
revObject4.GetWCInfo2(
    filesystem.GetAbsolutePathName("..\\.."), 1, 1, 1);

wcInfoString1 = "Revision = " + revObject1.Revision +
                "\nMin Revision = " + revObject1.MinRev +
                "\nMax Revision = " + revObject1.MaxRev +
                "\nDate = " + revObject1.Date +
                "\nURL = " + revObject1.Url + "\nAuthor = " +
                revObject1.Author + "\nHasMods = " +
                revObject1.HasModifications + "\nIsSvnItem = " +
                revObject1.IsSvnItem + "\nNeedsLocking = " +
                revObject1.NeedsLocking + "\nIsLocked = " +
                revObject1.IsLocked + "\nLockCreationDate = " +
                revObject1.LockCreationDate + "\nLockOwner = " +
                revObject1.LockOwner + "\nLockComment = " +
                revObject1.LockComment;
wcInfoString2 = "Revision = " + revObject2.Revision +
                "\nMin Revision = " + revObject2.MinRev +
                "\nMax Revision = " + revObject2.MaxRev +
                "\nDate = " + revObject2.Date +
                "\nURL = " + revObject2.Url + "\nAuthor = " +
                revObject2.Author + "\nHasMods = " +
                revObject2.HasModifications + "\nIsSvnItem = " +
                revObject2.IsSvnItem + "\nNeedsLocking = " +
                revObject2.NeedsLocking + "\nIsLocked = " +
                revObject2.IsLocked + "\nLockCreationDate = " +
                revObject2.LockCreationDate + "\nLockOwner = " +
                revObject2.LockOwner + "\nLockComment = " +
                revObject2.LockComment;
wcInfoString3 = "Revision = " + revObject3.Revision +
                "\nMin Revision = " + revObject3.MinRev +
                "\nMax Revision = " + revObject3.MaxRev +
                "\nDate = " + revObject3.Date +
                "\nURL = " + revObject3.Url + "\nAuthor = " +
                revObject3.Author + "\nHasMods = " +
                revObject3.HasModifications + "\nIsSvnItem = " +
                revObject3.IsSvnItem + "\nNeedsLocking = " +
                revObject3.NeedsLocking + "\nIsLocked = " +
                revObject3.IsLocked + "\nLockCreationDate = " +
                revObject3.LockCreationDate + "\nLockOwner = " +
                revObject3.LockOwner + "\nLockComment = " +
                revObject3.LockComment;
wcInfoString4 = "Revision = " + revObject4.Revision +
                "\nMin Revision = " + revObject4.MinRev +
                "\nMax Revision = " + revObject4.MaxRev +
                "\nDate = " + revObject4.Date +
                "\nURL = " + revObject4.Url + "\nAuthor = " +
                revObject4.Author + "\nHasMods = " +
                revObject4.HasModifications + "\nIsSvnItem = " +
                revObject4.IsSvnItem + "\nNeedsLocking = " +
                revObject4.NeedsLocking + "\nIsLocked = " +
                revObject4.IsLocked + "\nLockCreationDate = " +
                revObject4.LockCreationDate + "\nLockOwner = " +
                revObject4.LockOwner + "\nLockComment = " +
                revObject4.LockComment;

WScript.Echo(wcInfoString1);
WScript.Echo(wcInfoString2);
WScript.Echo(wcInfoString3);
WScript.Echo(wcInfoString4);
```

The following listing is an example on how to use the SubWCRev COM object from C#:

``` programlisting
using LibSubWCRev;
SubWCRev sub = new SubWCRev();
sub.GetWCInfo("C:\\PathToMyFile\\MyFile.cc", true, true);
if (sub.IsSvnItem == true)
{
    MessageBox.Show("versioned");
}
else
{
    MessageBox.Show("not versioned");
}
```
