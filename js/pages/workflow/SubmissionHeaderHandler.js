/**
 * @file js/pages/workflow/SubmissionHeaderHandler.js
 *
 * Copyright (c) 2014 Simon Fraser University Library
 * Copyright (c) 2000-2014 John Willinsky
 * Distributed under the GNU GPL v2. For full terms see the file docs/COPYING.
 *
 * @class SubmissionHeaderHandler
 * @ingroup js_pages_workflow
 *
 * @brief Handler for the workflow header.
 *
 */
(function($) {


	/**
	 * @constructor
	 *
	 * @extends $.pkp.classes.Handler
	 *
	 * @param {jQueryObject} $submissionHeader The HTML element encapsulating
	 *  the header div.
	 * @param {Object} options Handler options.
	 */
	$.pkp.pages.workflow.SubmissionHeaderHandler =
			function($submissionHeader, options) {

		this.parent($submissionHeader, options);

		// show and hide on click of link
		$('#participantToggle').click(this.callbackWrapper(
				this.appendToggleIndicator_));

		this.bind('gridRefreshRequested', this.refreshWorkflowContent_);
		this.publishEvent('stageParticipantsChanged');
	};
	$.pkp.classes.Helper.inherits(
			$.pkp.pages.workflow.SubmissionHeaderHandler,
			$.pkp.classes.Handler);


	//
	// Private functions
	//
	/**
	 * Potentially refresh workflow content on contained grid changes.
	 *
	 * @param {jQueryObject} callingElement The calling element.
	 *  that triggered the event.
	 * @param {Event} event The event.
	 * @private
	 */
	$.pkp.pages.workflow.SubmissionHeaderHandler.prototype.refreshWorkflowContent_ =
			function(callingElement, event) {

		var $updateSourceElement = $(event.target);
		if ($updateSourceElement.attr('id').match(/^stageParticipantGridContainer/)) {
			// If the participants grid was the event source, we
			// may need to re-draw workflow contents.
			this.trigger('stageParticipantsChanged');
		}
	};


	/**
	 * Append a + or - to the participants grid string based on current visibility
	 * after toggling the display of the participants grid.
	 *
	 * @param {jQueryObject} callingElement The calling element.
	 *  that triggered the event.
	 * @param {Event} event The event.
	 * @private
	 */
	$.pkp.pages.workflow.SubmissionHeaderHandler.prototype.appendToggleIndicator_ =
			function(callingElement, event) {

		var $submissionHeader = this.getHtmlElement(),
				$participantsPopover = $submissionHeader.find('.participant_popover'),
				$participantsListElement = $submissionHeader.find('li.participants'),
				$participantsToggle = $submissionHeader.find('#participantToggle');

		$participantsPopover.toggle();
		$participantsListElement.toggleClass('expandedIndicator');
		$participantsToggle.toggleClass('expandedIndicator');

		if ($participantsListElement.hasClass('expandedIndicator')) {
			this.trigger('callWhenClickOutside', [{
				container: $participantsPopover.add($participantsListElement),
				callback: this.callbackWrapper(this.appendToggleIndicator_),
				skipWhenVisibleModals: true
			}]);
		}
	};


/** @param {jQuery} $ jQuery closure. */
}(jQuery));
