import React, { Component } from "react";

import ComposerStyle from "./style.m.css";

export default class Composer extends Component {
    constructor () {
        super();

        this.state = {
            taskName: "",
        };

        this.onInputChange = ::this._onInputChange;
        this.onHandleSubmit = ::this._onHandleSubmit;
        this.submitOnEnter = ::this._submitOnEnter;
    }

    _onInputChange (event) {
        const { value } = event.target;

        this.setState({
            taskName: value,
        });
    }

    _onHandleSubmit (event) {
        event.preventDefault();

        const { taskName } = this.state;
        const { createTask } = this.props;

        createTask(taskName);

        this.setState({ taskName: "" });
    }

    _submitOnEnter (event) {
        if (event.keyCode === 13) {
            this.onHandleSubmit(event);
        }
    }

    render () {
        const { taskName } = this.state;

        return (
            <div className = { ComposerStyle.newTask }>
                <form onSubmit = { this.onHandleSubmit }>
                    <input
                        placeholder = 'Type your task title here'
                        type = 'text'
                        value = { taskName }
                        onChange = { this.onInputChange }
                        onKeyDown = { this.submitOnEnter }
                    />
                    <button type = 'submit'>Add task</button>
                </form>
            </div>
        );
    }
}
