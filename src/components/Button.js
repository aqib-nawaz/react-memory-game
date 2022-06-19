import React, { Component } from "react";
import "./Button.css";

import { motion } from "framer-motion";

export default class Button extends Component {
    render() {
        let btnClassName = "btn " + this.props.className;

        return (
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={btnClassName}
                onClick={this.props.onClick}
            >
                {this.props.value}
            </motion.button>
        );
    }
}
