import React, { Component } from 'react';

import TodoStyle from './style.m.css';

export default class Todo extends Component {
	render() {
		return (
			<div className = { TodoStyle.todo }>

				{/* Title */}
				<h1>Lectrum personal project</h1>

				{/* Search */}
				<form className = { TodoStyle.search }>
					<input placeholder="Search..." />
				</form>

				{/* Filter */}
				<div className = { TodoStyle.filter }>
					<div className = { TodoStyle.active }>
						Todos <span>10</span>
					</div>

					<div>
						Favorite <span>10</span>
					</div>

					<div>
						Done <span>10</span>
					</div>
				</div>

				{/* Container */}
				<div className = { TodoStyle.list } >
					{/* Task */}
					<div className = { TodoStyle.task }>
						<div className = { TodoStyle.execution } ></div>

						{
							false
							? <span>This is some todo that have a limit that cant type</span>
							: <form>
								<input type="text" value="This is some todo that have a limit that cant type"/>
							  </form>
						}

						<div className = { TodoStyle.tools }>
							<svg className = { TodoStyle.favorite + " " + TodoStyle.active } viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
								<path d="M8 12.5l-4.82 2.54.92-5.37-3.9-3.8 5.39-.79L8 .2l2.41 4.88 5.39.79-3.9 3.8.92 5.37z"/>
							</svg>

							<svg className = { TodoStyle.edit } viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
								<path d="M0 13l1.1-3.3 6.3-6.32L9.63 5.6 3.3 11.91 0 13zM12.54.46c.61.6.61 1.6 0 2.2L10.92 4.3 8.7 2.1 10.33.45c.61-.61 1.6-.61 2.21 0z"/>
							</svg>

							<svg className = { TodoStyle.remove } viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
								<path d="M12.2 10.76l-1.45 1.44a.67.67 0 0 1-.95 0L6.2 8.6l-3.6 3.6a.68.68 0 0 1-.96 0L.2 10.76a.68.68 0 0 1 0-.96l3.6-3.6L.2 2.6a.69.69 0 0 1 0-.96L1.66.2c.26-.27.7-.27.96 0l3.6 3.61L9.8.21a.67.67 0 0 1 .96 0l1.44 1.44c.27.27.27.7 0 .96l-3.6 3.6 3.6 3.59c.26.27.26.7 0 .96z"/>
							</svg>
						</div>
					</div>


					<div className = { TodoStyle.task }>
						<div className = { TodoStyle.execution } ></div>

						{
							false
								? <span>This is some todo that have a limit that cant type</span>
								: <form>
									<input type="text" value="This is some todo that have a limit that cant type"/>
								</form>
						}

						<div className = { TodoStyle.tools }>
							<svg className = { TodoStyle.favorite + " " + TodoStyle.active } viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
								<path d="M8 12.5l-4.82 2.54.92-5.37-3.9-3.8 5.39-.79L8 .2l2.41 4.88 5.39.79-3.9 3.8.92 5.37z"/>
							</svg>

							<svg className = { TodoStyle.edit } viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
								<path d="M0 13l1.1-3.3 6.3-6.32L9.63 5.6 3.3 11.91 0 13zM12.54.46c.61.6.61 1.6 0 2.2L10.92 4.3 8.7 2.1 10.33.45c.61-.61 1.6-.61 2.21 0z"/>
							</svg>

							<svg className = { TodoStyle.remove } viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
								<path d="M12.2 10.76l-1.45 1.44a.67.67 0 0 1-.95 0L6.2 8.6l-3.6 3.6a.68.68 0 0 1-.96 0L.2 10.76a.68.68 0 0 1 0-.96l3.6-3.6L.2 2.6a.69.69 0 0 1 0-.96L1.66.2c.26-.27.7-.27.96 0l3.6 3.61L9.8.21a.67.67 0 0 1 .96 0l1.44 1.44c.27.27.27.7 0 .96l-3.6 3.6 3.6 3.59c.26.27.26.7 0 .96z"/>
							</svg>
						</div>
					</div>
				</div>

				{/* Complete tasks */}
				<div className = { TodoStyle.completeAll }>
					<div className = { TodoStyle.execution }></div>
					<span>Complete all tasks</span>
				</div>

				{/* Add new task */}
				<div className = { TodoStyle.newTask } >
					<form>
						<input type="text" placeholder="Type your task title here"/>
						<button>Add task</button>
					</form>
				</div>

			</div>
		);
	}
}