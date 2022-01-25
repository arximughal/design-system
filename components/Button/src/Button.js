import React from 'react';
import './Button.scss';

const Button = props => {
	console.log(props);
	return (
		<button
			type="button"
			className={props.variant ? props.variant : 'button'}
			onClick={props.onClick}
			style={{ backgroundColor: props.background, color: props.color }}
		>
			{props.children}
		</button>
	)
};

export default Button;
