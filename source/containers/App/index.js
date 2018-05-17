// Core
import React, { Component } from "react";
import { hot } from "react-hot-loader";

import Todo from "components/Todo";

@hot(module)
export default class App extends Component {
    render () {
        return <Todo />;
    }
}
