import React, { Component } from "react";
import "./Card.css";
import { motion } from "framer-motion";
export default class Card extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false,
            choice1: "",
            choice2: "",
        };
    }

    cardHandler = (selectCardName) => {
        console.log(selectCardName);
        this.setState({
            isFlipped: !this.state.isFlipped,
        });
    };
    render() {
        return (
            <motion.div
                className="card"
                onClick={() => this.cardHandler(this.props.name)}
            >
                <motion.div
                    className="content"
                    animate={this.state.isFlipped ? { rotateY: 180 } : { rotateY: 0 }}
                    transition={{ duration: 0.1 }}
                >
                    <motion.div className="front">
                        <img
                            src={require(`../images/backside.jpg`)}
                            alt={this.props.name}
                            className="img"
                        />
                    </motion.div>
                    <motion.div animate={{ rotateY: 180 }} className="back">
                        <img
                            className="img"
                            src={require(`../images/${this.props.name}.jpg`)}
                            alt={this.props.name}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        );
    }
}
