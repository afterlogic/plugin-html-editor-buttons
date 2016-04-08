# plugin-html-editor-buttons
##Displaying additional button in HTML editor (Plugin for WebMail version 7.6.8 or higher)

This plugin is intended for developers which want to learn how to add buttons in HTML editor toolbar or add custom content in the message body.

The plugin adds a button in HTML editor toolbar at the last position. When that button is clicked, the dialog appears below, with “Insert HTML” button in it. After clicking this button a simple HTML with an image will be added in the HTML editor at the cursor position. This way you can add any controls in the dialog or change the HTML being inserted.

Upon downloading and extracting package, rename its main directory from:
```
plugin-html-editor-buttons-master
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
