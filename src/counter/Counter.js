'use strict';

import React from 'react';

export default function Counter(props) {
	const {actions, value, actionCount} = props;

	return(
		<div>
			<p>{`value: ${value}`}</p>
			<p>{`actions: ${actionCount}`}</p>
			<button type='button' onClick={() => actions.increment()}>Increment</button>
			<button type='button' onClick={() => actions.decrement()}>Decrement</button>
			<button type='button' onClick={() => actions.reset()}>Reset</button>
		</div>
	);
}
