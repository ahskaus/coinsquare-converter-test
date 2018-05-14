import React, { PureComponent } from 'react';

import './styles.css';

export default ({ text, size, bold, borderColor }) => {

	const style = {};

	if(size) style.fontSize = `${size}em`;
	if(bold) style.fontWeight = 'bold';
	if(borderColor) style.borderColor = borderColor;

	return (
		<div className='bordered-text-component' style={style}>
			<div className='text'>{text}</div>
		</div>
	);
};