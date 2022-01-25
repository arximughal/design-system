// Button.stories.js|jsx

import React from 'react';

import Button from './Button';

const Template = (args) => <Button {...args}>{args.label}</Button>;

export default {
	/* 👇 The title prop is optional.
	* See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	* to learn how to generate automatic titles
	*/
	title: 'Button',
	component: Button,
	template: Template
};

export const Default = Template.bind({});
Default.args = { label: 'Button', background: '#785fe5', color: '#ffffff' };
