import React, { Component } from 'react';

import CompleteAllStyle from './style.m.css';

export default class CompleteAll extends Component {

	render() {
		return (
			<div className = { CompleteAllStyle.completeAll }>
				<div className = { CompleteAllStyle.execution }></div>
				<span>Complete all tasks</span>
			</div>
		);
	}
}