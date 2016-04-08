<?php

class_exists('CApi') or die();

class CHtmlEditorButtonsPlugin extends AApiPlugin
{
	/**
	 * @param CApiPluginManager $oPluginManager
	 */
	public function __construct(CApiPluginManager $oPluginManager)
	{
		parent::__construct('1.0', $oPluginManager);
	}

	public function Init()
	{
		parent::Init();

		$this->AddJsFile('js/HtmlEditorButtonsView.js');
		$this->AddJsFile('js/include.js');
		
		// Embeds include.html template into HTML editor template in Html-Editor-Buttons position
		$this->IncludeTemplate('Common_HtmlEditorViewModel', 'Html-Editor-Buttons', 'templates/include.html');
		
		// Adds HtmlEditorButtonsView.html template to the templates list for further use.
		$this->AddTemplate('HtmlEditorButtonsView', 'templates/HtmlEditorButtonsView.html');
	}
}

return new CHtmlEditorButtonsPlugin($this);
