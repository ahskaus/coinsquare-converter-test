import React, { PureComponent } from 'react';

import './styles.css';

export default ({ name, value }) => (
	<div className='currency-value-component'>
		<div className='name'>{name}</div>
		<div className='value'>{value}</div>
	</div>
);