import React, { Component } from "react";
import "./Card.css"
export default class Card extends Component {
    render() {
        let imgClassName = "img " + this.props.className;
        return (
            <div className="card" onClick={this.props.onClick}>
                <img
                    src={require(`../images/${this.props.name}.jpg`)}
                    alt={this.props.name}
                    className={imgClassName}
                />
            </div>
        );
    }
}
