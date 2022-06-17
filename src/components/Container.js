import React, { Component } from "react";
import Card from "./Card";
import "./Container.css";
export default class Container extends Component {
    render() {
        return (
            <div className="container">
                {this.props.imgArray.map((img, index) => (
                    <Card className="image" name={img.name} key={index} />
                ))}
            </div>
        );
    }
}
