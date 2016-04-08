
/**
 * @constructor
 * @param {Function} fInsertHtml Function that inserts HTML into the HTML editor
 */
function CHtmlEditorButtonsView(fInsertHtml)
{
	this.insertHtmlToCursorInEditor = fInsertHtml;
	this.visibleDialog = ko.observable(false);
}

/**
 * Opens dialog.
 */
CHtmlEditorButtonsView.prototype.openDialog = function () {
	_.defer(_.bind(this.visibleDialog, this, true));
};

/**
 * Closes dialog.
 */
CHtmlEditorButtonsView.prototype.closeDialog = function () {
	this.visibleDialog(false);
};

/**
 * Inserts HTML into HTML editor.
 */
CHtmlEditorButtonsView.prototype.insertHtml = function () {
	this.closeDialog();
	this.insertHtmlToCursorInEditor('<img src="http://www.afterlogic.com/images/logo.png" />');
};
