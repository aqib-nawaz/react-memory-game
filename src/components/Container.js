import React, { Component } from "react";
import Card from "./Card";
import "./Container.css";
import { motion } from "framer-motion";
import Button from "./Button";
export default class Container extends Component {
    constructor() {
        super();
        this.state = {
            selectedCard: "",
            selectedCardId: "",
            matched: false,
            gameOver: false,
        };
    }

    isInitialSelect = true;
    selectHandle = (card, id, flipBack) => {
        if (this.isInitialSelect) {
            this.setState({
                selectedCard: card,
                selectedCardId: id,
                matched: this.state.selectedCard && false,
            });
            this.isInitialSelect = false;
        } else {
            this.handleMatch(card, id, flipBack);
        }
    };

    handleMatch = (card, id, flipBack) => {
        if (this.state.selectedCard === card && this.state.selectedCardId !== id) {
            this.setState({
                matched: true,
                selectedCard: "",
                selectedCardId:""
            });

            console.log("matched");

            this.matchedItemCounter();
            this.isInitialSelect = true;
        } else {
            flipBack();
        }
    };

    matchedItemCount = 0;
    matchedItemCounter = () => {
        this.matchedItemCount += 1;
        console.log(this.matchedItemCount);
        let arrLength = this.props.imgArray.length / 2;
        if (this.matchedItemCount === arrLength) {
            this.setState({
                gameOver: true,
            });
        }
    };
    restartHandler = () => {
        window.location.reload(false);
    };
    render() {
        return (
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1 }}
                className={this.state.gameOver ? "flex-container" : "container"}
            >
                {this.state.gameOver ? (
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="game-over-container"
                    >
                        <h1>Game Completed Successfully</h1>
                        <Button value="Restart Game" onClick={this.restartHandler} />
                    </motion.div>
                ) : (
                    this.props.imgArray.map((img, index) => (
                        <Card
                            className="image"
                            name={img.name}
                            key={index}
                            selectHandle={this.selectHandle}
                            id={index}
                        />
                    ))
                )}
            </motion.div>
        );
    }
}
