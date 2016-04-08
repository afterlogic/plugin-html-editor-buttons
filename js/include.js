
function initialize()
{
	var oHtmlEditorButtons = null;
	
	/**
	 * Creates oHtmlEditorButtons object and adds it to HTML editor as oAdditionalButtons field.
	 * oAdditionalButtons field of HTML editor will be used in built-in include.html template.
	 * 
	 * @param {string} sViewModelName Name of view model that has just been defined in WebMail.
	 * @param {Object} oViewModel Object of the view model.
	 */
    AfterLogicApi.addPluginHook('view-model-defined', function (sViewModelName, oViewModel) {
        if (oViewModel && ('CHtmlEditorViewModel' === sViewModelName))
        {
            oHtmlEditorButtons = new CHtmlEditorButtonsView(_.bind(oViewModel.insertHtml, oViewModel));
			
			oViewModel.oAdditionalButtons = oHtmlEditorButtons;
        }
    });
	
	/**
	 * Closes the dialog when all HTML editor dialogs should be closed.
	 */
    AfterLogicApi.addPluginHook('close-all-htmleditor-popups', function () {
		if (oHtmlEditorButtons)
		{
			oHtmlEditorButtons.closeDialog();
		}
    });
}

initialize();
