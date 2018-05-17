import React, { Component } from "react";

import TodoStyle from "./style.m.css";

import { getUniqueID } from "../../instruments/helpers";

import Catcher from "../Catcher";
import CompleteAll from "../CompleteAll";
import Composer from "../Composer";
import Counter from "../Counter";
import Search from "../Search";
import Task from "../Task";

export default class Todo extends Component {
    constructor () {
        super();

        this.state = {
            tasks: [
                {
                    id:        "xjh",
                    message:   "Успешно пройти React-интенсив компании Lectrum",
                    completed: false,
                    favorite:  true,
                },
                {
                    id:        "xjr",
                    message:   "Взять автограф у Джареда Лето",
                    completed: false,
                    favorite:  false,
                },
                {
                    id:        "xph",
                    message:   "Научиться играть на барабанах",
                    completed: true,
                    favorite:  false,
                }
            ],
        };

        this.createTask = ::this._createTask;
        this.completeTask = ::this._completeTask;
        this.flagFavoriteTask = ::this._flagFavoriteTask;
        this.removeTask = ::this._removeTask;
    }

    _createTask (taskTitle) {
        const { tasks } = this.state;

        const newTask = {
            id:        getUniqueID(),
            message:   taskTitle,
            completed: false,
            favorite:  false,
        };

        this.setState({
            tasks: [newTask, ...tasks],
        });
    }

    _completeTask () {

    }

    _flagFavoriteTask () {

    }

    _removeTask (id) {
        this.setState(({ tasks }) => ({
            tasks: tasks.filter((task) => task.id !== id),
        }));
    }

    render () {
        const { tasks } = this.state;

        const renderTasks = tasks.map((task) => (
            <Catcher key = { task.id }>
                <Task
                    completed = { task.completed }
                    completeTask = { this.completeTask }
                    favorite = { task.favorite }
                    flagFavoriteTask = { this.flagFavoriteTask }
                    id = { task.id }
                    message = { task.message }
                    removeTask = { this.removeTask }
                />
            </Catcher>
        ));

        return (
            <div className = { TodoStyle.todo }>
                <h1>Lectrum personal project</h1>
                <Search />
                <Counter counter = { tasks.length } />
                <div className = { TodoStyle.list }>
                    <div>{renderTasks}</div>
                </div>
                <CompleteAll />
                <Composer createTask = { this.createTask } />
            </div>
        );
    }
}
