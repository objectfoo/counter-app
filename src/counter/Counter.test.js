import React from 'react';
import test from 'ava';
import {mount} from 'enzyme';
import Counter from './Counter';

test('should render value and actionCount', t => {
	const wrapper = mount(React.createElement(Counter, {
		value: 99,
		actionCount: 99
	}));

	const valueText = wrapper.find('p').at(0).text();
	const actionText = wrapper.find('p').at(1).text();

	t.is(valueText, 'value: 99');
	t.is(actionText, 'actions: 99');
});

test('should execute actions', t => {
	let incrementCalled = false;
	let decrementCalled = false;
	let resetCalled = false;

	const increment = () => incrementCalled = true;
	const decrement = () => decrementCalled = true;
	const reset = () => resetCalled = true;

	const wrapper = mount(React.createElement(Counter, {
		actions: {
			increment: increment,
			decrement: decrement,
			reset: reset
		}
	}));

	wrapper.find('button').at(0).simulate('click');
	wrapper.find('button').at(1).simulate('click');
	wrapper.find('button').at(2).simulate('click');
	t.true(incrementCalled);
	t.true(decrementCalled);
	t.true(resetCalled);
});