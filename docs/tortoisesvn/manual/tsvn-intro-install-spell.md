<!-- Source: https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-intro-install-spell.html -->

## Spellchecker

TortoiseSVN uses the Windows spell checker if it's available (Windows 8 or later). Which means that if you want the spell checker to work in a different language than the default OS language, you have to install the spell checker module in the Windows settings (`Settings > Time & Language > Region & Language`).

TortoiseSVN will use that spell checker if properly configured with the `tsvn:projectlanguage` project property.

In case the Windows spell checker is not available, TortoiseSVN can also use spell checker dictionaries from [*OpenOffice*](https://openoffice.org) and [*Mozilla*](https://mozilla.org) .

The installer automatically adds the US and UK English dictionaries. If you want other languages, the easiest option is simply to install one of TortoiseSVN's language packs. This will install the appropriate dictionary files as well as the TortoiseSVN local user interface. After the installation finishes, the dictionary will be available too.

Or you can install the dictionaries yourself. If you have OpenOffice or Mozilla installed, you can copy those dictionaries, which are located in the installation folders for those applications. Otherwise, you need to download the required dictionary files from [*https://cgit.freedesktop.org/libreoffice/dictionaries/tree/*](https://cgit.freedesktop.org/libreoffice/dictionaries/tree/) .

Once you have got the dictionary files, you probably need to rename them so that the filenames only have the locale chars in it. Example:

- `en_US.aff`

- `en_US.dic`

Then just copy them into the `%APPDATA%\TortoiseSVN\dic` folder. If that folder isn't there, you have to create it first. TortoiseSVN will also search the `Languages` sub-folder of the TortoiseSVN installation folder (normally this will be `C:\Program Files\TortoiseSVN\Languages`); this is the place where the language packs put their files. However, the %APPDATA%-folder doesn't require administrator privileges and, thus, has higher priority. The next time you start TortoiseSVN, the spell checker will be available.

If you install multiple dictionaries, TortoiseSVN uses these rules to select which one to use.

1.  Check the `tsvn:projectlanguage` setting. Refer to [the section called “Project Settings”](tsvn-dug-propertypage.md "Project Settings") for information about setting project properties.

2.  If no project language is set, or that language is not installed, try the language corresponding to the Windows locale.

3.  If the exact Windows locale doesn't work, try the “Base” language, e.g. `de_CH` (Swiss-German) falls back to `de_DE` (German).

4.  If none of the above works, then the default language is English, which is included with the standard installation.
