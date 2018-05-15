import React, { Component } from 'react';

import TodoStyle from './style.m.css';

import CompleteAll from '../CompleteAll';
import Composer from '../Composer';
import Filter from '../Filter';
import Search from '../Search';
import Task from '../Task';

export default class Todo extends Component {
	render() {
		return (
			<div className = { TodoStyle.todo }>
				<h1>Lectrum personal project</h1>
				<Search />
				<Filter />
				<div className = { TodoStyle.list } >
					<Task />
				</div>
				<CompleteAll />
				<Composer />
			</div>
		);
	}
}