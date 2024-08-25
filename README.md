It is a test task for Lisapet.ai. The micro input library is done in a freestyle. I avoided using the Redux state manager due to the size of the app. Probably it was a mistake if a decision to expand this app is taken. it has next parameters :

@param {Object} options - The options object containing various settings.
 * @param {string} options.annotation - The annotation text to display. It does not work if you set options.labelSidePosition - true.

 * @param {string} options.size - The size of the input. Default is "m". Values: 's', 'm', 'l', 'xl'

 * @param {boolean} options.isAlignmentRight - Whether the text alignment is set to right. Default is false.

 * @param {boolean} options.border - Whether to show a border around the input. Default is true.

 * @param {boolean} options.iconBefore - Whether to display an icon before the input. Default is false.

 * @param {boolean} options.iconAfter - Whether to display an icon after the input. Default is false.

 * @param {boolean} options.shortKey - Whether a shortcut key is enabled. Default is false.

 * @param {Object} options.isRequired - Object specifying if the input is required.

 * @param {boolean} options.isRequired.required - Indicates whether the field is required. Default is false.

 * @param {string} options.isRequired.type - The type of required validation (e.g., "icon" or "text").

 * @param {string} options.isRequired.text - The text displayed when the field is required. If you leave options.isRequired.required - false but setup this parameter, you`ll have optional input text label.

 * @param {string} options.label - The label text to display above or beside the input.

 * @param {string} options.type - The input type (e.g., "text", "number").

 * @param {string} options.popUpText - The text to display in a popup tooltip.

 * @param {string} options.questionText - The text to display for a question tooltip.

 * @param {boolean} options.labelSidePosition - Whether the label should be displayed on the side. Default is false.

 * @param {boolean} options.disabled - Whether the input is disabled. Default is false.

 * @param {boolean} options.darkMode - Whether to enable dark mode styling. Default is false.

 * @param {Function} options.onChange - Callback function to handle input change events.
 
 * @param {string} options.placeholder - Text string for placeholder.

