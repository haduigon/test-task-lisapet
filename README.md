It is a test task for Lisapet.ai. The micro input library is done in a freestyle. I avoided using the Redux state manager due to the size of the app. Probably it was a mistake if a decision to expand this app is taken. it has next parameters :

It is a test task for Lisapet.ai. The micro input library is done in a freestyle.

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



**React fb chat**

# _Description:_

It is a test task for Lisapet.ai. The micro input library is done in a freestyle.

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

# [Demolink](https://haduigon.github.io/test-task-lisapet/) click checkboxees, text smth into input, give me your feedback

# _Status:_

In progress

Feel free to suggest any improvements.

[![GitHub license](https://img.shields.io/github/license/haduigon/react-fb-chat-landing)](https://github.com/haduigon/react-fb-chat-landing/blob/master/LICENSE)

[![GitHub stars](https://img.shields.io/github/stars/haduigon/react-fb-chat-landing)](https://github.com/haduigon/react-fb-chat-landing/stargazers)

[![GitHub issues](https://img.shields.io/github/issues/haduigon/react-fb-chat-landing)](https://github.com/haduigon/react-fb-chat-landing/issues)

[![GitHub forks](https://img.shields.io/github/forks/haduigon/react-fb-chat-landing)](https://github.com/haduigon/react-fb-chat-landing/network)

# _Screenshots are bellow:_

<details>
<img width="1720" alt="lisapet1" src="https://github.com/user-attachments/assets/f67c32fa-5a4d-40d6-91f5-973c2c846e1b">
<img width="1735" alt="lisapet2" src="https://github.com/user-attachments/assets/d3798e30-ee93-4c0c-9685-dbae4852e069">
</details>

# Technologies list:

[![React](https://img.shields.io/badge/React-18.3.3-green)](https://react.dev/)

[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-green)](https://www.typescriptlang.org/)

[![React Context](https://img.shields.io/badge/React%20Context-grey)](https://reactjs.org/docs/context.html)

[![classnames](https://img.shields.io/badge/Classnames-2.5.1-lightgreen)](https://www.npmjs.com/package/classnames)

# React FB chat landing features:

FEATURES

Locate your label on top or beside the input

Change sizes

Make it required and style it

Use black theme

Add annotation and icons

# _Usage as always is very simple:_

_npm i_

_npm start_

# Reflection

It was an interesting task for me, which forced me to reconsider my approach to a lot of things and required a significant amount of time. I avoided using the Redux state manager due to the size of the app. This was probably a mistake if a decision is made to expand this app in the future. I decided to have only one entry point: the InputGroup, which is the main component that takes parameters; all other components are used inside InputGroup. If you want to, you can pass nothing to the component—it should still work, as every prop is optional. I also tried to minimize the number of props, but I am not sure if I managed to do it effectively. I am open to improvement, so feel free to give me your feedback.