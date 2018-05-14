import React, { PureComponent } from 'react';

import './styles.css';

export default ({ label, align }) => (
	<div className='label-component'>
		<div className={`align-${align}`}>
			<div className='label'>{label}</div>
		</div>
	</div>
);