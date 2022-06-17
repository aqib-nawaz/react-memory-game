import React, { Component } from "react";
import "./Button.css"
export default class Button extends Component {
    render() {
        let btnClassName = "btn " + this.props.className;

        return (
            <button className={btnClassName} onClick={this.props.onClick}>
                {this.props.value}
            </button>
        );
    }
}
