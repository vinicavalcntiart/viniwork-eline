<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-automation-idiff.html -->

## TortoiseIDiff Commands

The image diff tool has a few command line options which you can use to control how the tool is started. The program is called `TortoiseIDiff.exe`.

The table below lists all the options which can be passed to the image diff tool on the command line.

**Table D.2. List of available options**

| Option      | Description                                                                                             |
|-------------|---------------------------------------------------------------------------------------------------------|
| :left       | Path to the file shown on the left.                                                                     |
| :lefttitle  | A title string. This string is used in the image view title instead of the full path to the image file. |
| :right      | Path to the file shown on the right.                                                                    |
| :righttitle | A title string. This string is used in the image view title instead of the full path to the image file. |
| :overlay    | If specified, the image diff tool switches to the overlay mode (alpha blend).                           |
| :fit        | If specified, the image diff tool fits both images together.                                            |
| :showinfo   | Shows the image info box.                                                                               |

  

Example (which should be entered on one line):

``` screen
TortoiseIDiff.exe /left:"c:\images\img1.jpg" /lefttitle:"image 1"
                  /right:"c:\images\img2.jpg" /righttitle:"image 2"
                  /fit /overlay
```
