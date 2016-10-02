'use strict';

import React, {Component} from 'react';
import View from './View';

export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			value: 0,
			actionCount: 0
		};

		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
		this.reset = this.reset.bind(this);
	}

	reset() {
		this.setState({
			value: 0,
			actionCount: 0
		});
	}

	increment() {
		this.setState({
			value: this.state.value + 1,
			actionCount: this.state.actionCount + 1
		});
	}

	decrement() {
		const newCount = Math.max(this.state.value - 1, 0);

		if (newCount !== this.state.value) {
			this.setState({
				value: newCount,
				actionCount: this.state.actionCount + 1
			});
		}
	}

	render() {
		const {increment, decrement, reset} = this;

		return <View
			value={this.state.value}
			actionCount={this.state.actionCount}
			actions={{increment, decrement, reset}}
		/>;
	}
}
