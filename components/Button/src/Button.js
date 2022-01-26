import React from 'react';
import styles from './Button.module.scss';
import cx from 'classnames';

const Button = props => {
	return (
		<button
			type="button"
			className={cx(styles.button, styles[props.size])}
			onClick={props.onClick}
			style={{ backgroundColor: props.background, color: props.color }}
		>
			{props.children}
			{props.loading &&
				<div className={styles['lds-ring']}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			}
		</button>
	)
};

export default Button;
