import React, { Component } from 'react';

import FilterStyle from './style.m.css';

export default class Filter extends Component {

	render() {
		return (
			<div className = { FilterStyle.filter }>
				<div className = { FilterStyle.active }>
					Todos <span>10</span>
				</div>

				<div>
					Favorite <span>10</span>
				</div>

				<div>
					Done <span>10</span>
				</div>
			</div>
		);
	}
}