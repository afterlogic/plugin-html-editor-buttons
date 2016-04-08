# plugin-html-editor-buttons
##Displaying additional button in HTML editor (Plugin for WebMail version 7.6.8 or higher)

This plugin adds a button in HTML editor toolbar at the last position. When that button is clicked, the dialog is appeared below it. In that dialog “Insert HTML” button is available. After clicking this button a simple HTML with an image will be added in the HTML editor in the cursor position. So it's possible add some controls in the dialog and change inserting HTML if it's nessessary.

Upon downloading and extracting package, rename its main directory from:
```
plugin-html-editor-buttons
```
to:
```
html-editor-buttons
```

Then you'll need to deploy the plugin so that its index file is available at the following location:
```
 data/plugins/html-editor-buttons/index.php 
```
 To enable the plugin, add the following to array defined in data/settings/config.php file:
```
 'plugins.html-editor-buttons'  => true, 
```
