'use strict';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Counter from '../counter/Counter';

function View(props) {
	const {value, actionCount, actions} = props;

	return(
		<div>
			<Header />
			<Counter
				actions={actions}
				value={value}
				actionCount={actionCount}
			/>
			<Footer />
		</div>
	);
}

View.propTypes = {
	actions: React.PropTypes.object.isRequired
};

export {View as default };
