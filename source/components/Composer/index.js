import React, { Component } from 'react';

import ComposerStyle from './style.m.css';

export default class Composer extends Component {

	render() {
		return (
			<div className = { ComposerStyle.newTask } >
				<form>
					<input type="text" placeholder="Type your task title here"/>
					<button>Add task</button>
				</form>
			</div>
		);
	}
}