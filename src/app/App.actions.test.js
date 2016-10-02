'use strict';

import React from 'react';
import test from 'ava';
import {mount} from 'enzyme';
import App from './App';
import View from './View';
import Counter from '../counter/Counter';

test('increment adds 1 to count and actionCount', t => {
	const wrapper = mount(React.createElement(App));
	const actions = wrapper.find(View).prop('actions');

	t.is(wrapper.state().value, 0, 'initial state is 0');
	t.is(wrapper.state().actionCount, 0, 'initial state is 0');

	actions.increment();
	t.is(wrapper.state().value, 1, 'state should equal 1');
	t.is(wrapper.state().actionCount, 1, 'initial state is 1');
});

test('decrement decrements value and increments actionCount', t => {
	const wrapper = mount(React.createElement(App));
	const actions = wrapper.find(View).prop('actions');

	wrapper.setState({value: 1, actionCount: 1});

	t.is(wrapper.state().value, 1, 'initial state is 1');
	t.is(wrapper.state().actionCount, 1, 'initial state is 1');

	actions.decrement();
	t.is(wrapper.state().value, 0, 'state should equal 0');
	t.is(wrapper.state().actionCount, 2, 'initial state is 2');
});

test('value can not be negative', t => {
	const wrapper = mount(React.createElement(App));
	const actions = wrapper.find(View).prop('actions');

	wrapper.setState({value: 1, actionCount: 1});

	t.is(wrapper.state().value, 1, 'initial state is 1');
	t.is(wrapper.state().actionCount, 1, 'initial state is 1');

	actions.decrement();
	actions.decrement();
	t.is(wrapper.state().value, 0, 'state should equal 0');
	t.is(wrapper.state().actionCount, 2, 'initial state is 2');
});

test('reset should set value and actionCount to 0', t => {
	const wrapper = mount(React.createElement(App));
	const actions = wrapper.find(View).prop('actions');

	wrapper.setState({value: 1, actionCount: 1});

	t.is(wrapper.state().value, 1, 'initial state is 1');
	t.is(wrapper.state().actionCount, 1, 'initial state is 1');

	actions.reset();
	t.is(wrapper.state().value, 0, 'state should equal 0');
	t.is(wrapper.state().actionCount, 0, 'initial state is 0');
});
