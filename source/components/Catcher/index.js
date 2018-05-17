import React, { Component } from "react";
import { object } from "prop-types";

import CatcherStyle from "./style.m.css";

export default class Catcher extends Component {
    static propTypes = {
        children: object.isRequired,
    };

    state = {
        error: false,
    };

    componentDidCatch () {
        this.setState({
            error: true,
        });
    }

    render () {
        const { error } = this.state;
        const { children } = this.props;

        if (error) {
            return (
                <div className = { CatcherStyle.catcher }>
                    <span>
                        Hmmm...Something goes wrong. We need some more time to
                        find your task.
                    </span>
                </div>
            );
        }

        return children;
    }
}
