import React, { Component } from "react";
import { string, bool, func } from "prop-types";
import cx from "classnames";

import TaskStyle from "./style.m.css";

export default class Task extends Component {
    static propTypes = {
        completed:        bool.isRequired,
        completeTask:     func.isRequired,
        favorite:         bool.isRequired,
        flagFavoriteTask: func.isRequired,
        id:               string.isRequired,
        removeTask:       func.isRequired,
    };

    // todo: focus on edit click

    constructor (props) {
        super(props);

        this.state = {
            editing:           false,
            currentTaskTitle:  this.props.message,
            editableTaskTitle: this.props.message,
        };

        this.handleToggleEditMode = ::this._handleToggleEditMode;
        this.editTask = ::this._editTask;
        this.endEditOnEnter = ::this._endEditOnEnter;
        this.handleFavorite = ::this._handleFavorite;
        this.handleRemove = ::this._handleRemove;
    }

    _handleToggleEditMode () {
        const { editing, currentTaskTitle, editableTaskTitle } = this.state;

        editing && editableTaskTitle.length !== 0
            ? this.setState({
                editing:          !editing,
                currentTaskTitle: editableTaskTitle,
            })
            : this.setState({
                editing:           !editing,
                editableTaskTitle: currentTaskTitle,
            });
    }

    _editTask (event) {
        const { value } = event.target;

        if (value.length <= 50) {
            this.setState({ editableTaskTitle: value });
        }
    }

    _endEditOnEnter (event) {
        if (event.keyCode === 13) {
            this.handleToggleEditMode();
        }
    }

    _handleFavorite () {
        const { id, flagFavoriteTask } = this.props;

        flagFavoriteTask(id);
    }

    _handleRemove () {
        const { id, removeTask } = this.props;

        removeTask(id);
    }

    render () {
        const { completed, favorite, completeTask } = this.props;

        const { editing, currentTaskTitle, editableTaskTitle } = this.state;

        const taskStyle = cx(TaskStyle.task, {
            [TaskStyle.editing]:   editing,
            [TaskStyle.favorite]:  favorite,
            [TaskStyle.completed]: completed,
        });

        return (
            <div className = { taskStyle }>
                <div className = { TaskStyle.execution } onClick = { completeTask } />

                { editing ? (
                    <input
                        className = 'editable'
                        type = 'text'
                        value = { editableTaskTitle }
                        onChange = { this.editTask }
                        onKeyDown = { this.endEditOnEnter }
                    />
                ) : (
                    <input disabled type = 'text' value = { currentTaskTitle } />
                )}

                <div className = { TaskStyle.tools }>
                    <svg
                        className = { TaskStyle.favorite }
                        viewBox = '0 0 16 15'
                        xmlns = 'http://www.w3.org/2000/svg'
                        onClick = { this.handleFavorite }>
                        <path d = 'M8 12.5l-4.82 2.54.92-5.37-3.9-3.8 5.39-.79L8 .2l2.41 4.88 5.39.79-3.9 3.8.92 5.37z' />
                    </svg>

                    <svg
                        className = { TaskStyle.edit }
                        viewBox = '0 0 13 13'
                        xmlns = 'http://www.w3.org/2000/svg'
                        onClick = { this.handleToggleEditMode }>
                        <path d = 'M0 13l1.1-3.3 6.3-6.32L9.63 5.6 3.3 11.91 0 13zM12.54.46c.61.6.61 1.6 0 2.2L10.92 4.3 8.7 2.1 10.33.45c.61-.61 1.6-.61 2.21 0z' />
                    </svg>

                    <svg
                        className = { TaskStyle.remove }
                        viewBox = '0 0 13 13'
                        xmlns = 'http://www.w3.org/2000/svg'
                        onClick = { this.handleRemove }>
                        <path d = 'M12.2 10.76l-1.45 1.44a.67.67 0 0 1-.95 0L6.2 8.6l-3.6 3.6a.68.68 0 0 1-.96 0L.2 10.76a.68.68 0 0 1 0-.96l3.6-3.6L.2 2.6a.69.69 0 0 1 0-.96L1.66.2c.26-.27.7-.27.96 0l3.6 3.61L9.8.21a.67.67 0 0 1 .96 0l1.44 1.44c.27.27.27.7 0 .96l-3.6 3.6 3.6 3.59c.26.27.26.7 0 .96z' />
                    </svg>
                </div>
            </div>
        );
    }
}
