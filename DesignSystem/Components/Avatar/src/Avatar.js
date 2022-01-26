import React from 'react';
import styles from './Avatar.module.scss';
import cx from 'classnames';

const Avatar = props => {
	return (
		<img
			src={props.src}
			className={cx(styles.avatar, styles[props.size])}
		/>
	)
};

export default Avatar;
