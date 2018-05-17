import React from "react";

import CounterStyle from "./style.m.css";

const Counter = ({ counter }) => {
    return (
        <div className = { CounterStyle.counter }>
            <div className = { CounterStyle.active }>
                Todos <span>{counter}</span>
            </div>
        </div>
    );
};

export default Counter;
