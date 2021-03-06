<?php
/**
 * @defgroup plugins_metadata_openurl10 OpenURL 1.0 Metadata Plugin
 */

/**
 * @file plugins/metadata/openurl10/PKPOpenurl10MetadataPlugin.inc.php
 *
 * Copyright (c) 2014 Simon Fraser University Library
 * Copyright (c) 2003-2014 John Willinsky
 * Distributed under the GNU GPL v2. For full terms see the file docs/COPYING.
 *
 * @class PKPOpenurl10MetadataPlugin
 * @ingroup plugins_metadata_openurl10
 *
 * @brief Abstract base class for OpenURL 1.0 metadata plugins
 */


import('lib.pkp.classes.plugins.MetadataPlugin');

class PKPOpenurl10MetadataPlugin extends MetadataPlugin {
	/**
	 * Constructor
	 */
	function PKPOpenurl10MetadataPlugin() {
		parent::MetadataPlugin();
	}


	//
	// Override protected template methods from Plugin
	//
	/**
	 * @copydoc Plugin::getName()
	 */
	function getName() {
		return 'Openurl10MetadataPlugin';
	}

	/**
	 * @copydoc Plugin::getDisplayName()
	 */
	function getDisplayName() {
		return __('plugins.metadata.openurl10.displayName');
	}

	/**
	 * @copydoc Plugin::getDescription()
	 */
	function getDescription() {
		return __('plugins.metadata.openurl10.description');
	}
}

?>
