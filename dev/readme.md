## Readme
These files are grunt tasks to be used during testing / development of custom themes.


## Example

Grunt copy in the "DEV" folder will copy the files from your current theme and into a multi-level folder structure.

HOWEVER if you are using the grunt folder it will do the OPPOSITE,
and copy the all the html files from 
	src/theme/
		misc
		layouts
		pages
		includes,
		etc...
and put them into the <%= config.themesync %> folder which theme sync watches.

