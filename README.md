# PiazzaResourceDownloadInjection

The injection is created to download 100+ pdfs at the end of the course USC-EE510 Linear Algebra December 2020.
It was frustating to click save as and then get prompted again and again.

Better solutions exist. Some browsers allow the save as prompt to be suppressed. 
Firefox and Chrome might allow new download prompts to be suppressed but not save as prompts (I beleive, might be wrong).
The script was created in an hour or so to mitigate the frustration.

Inject this script to download with one click all resource files under resources in Piazza.com. Use any js injector plugin.

Recommended and tested on injector plugins -

- Chrome -> https://chrome.google.com/webstore/detail/injector/bfdonckegflhbiamlmidciapolfccmmb?hl=en
- Firefox -> https://addons.mozilla.org/en-US/firefox/addon/codeinjector/

Add a rule on the extensions for the site 'piazza.com'

Then go to piazza.com and click on the course resources.
The resources like pdfs and other files must turn light green after a few seconds. 
At this point, you can click on the pdf/file to download and it should prompt to download the file. 

On firefox and chrome, you can select 'do this for all future downloads' to not prompt you repeatedly.


If your list of resources is longer, the table may say at the bottom  'Show all # resources'.
You must reload the page and quickly click on 'Show all # resources' or you must explicitly control the script injection to take place after
you click 'Show all # resources'. This can be done with Firefox + https://addons.mozilla.org/en-US/firefox/addon/codeinjector/


Enjoy.


