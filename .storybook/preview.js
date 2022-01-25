import { themes } from '@storybook/theming';

export const parameters = {
	layout: 'left',
	controls: {
		expanded: true,
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	}
};
