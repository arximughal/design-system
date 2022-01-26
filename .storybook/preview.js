import { themes } from '@storybook/theming';

export const parameters = {
	layout: 'left',
	controls: {
		expanded: true,
		matchers: {
			color: /(background|color|backgroundColor)$/i,
			date: /Date$/,
		},
	},
	docs: {
		theme: themes.dark
	},
	options: {
		storySort: {
			order: ['Docs', ['Intro', 'Color Theory']],
		},
	},
};
