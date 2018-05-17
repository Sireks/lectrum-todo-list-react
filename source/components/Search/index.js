import React, { Component } from "react";

import SearchStyle from "./style.m.css";

export default class Search extends Component {
    render () {
        return (
            <form className = { SearchStyle.search }>
                <input placeholder = 'Search...' />
            </form>
        );
    }
}
