import React, { Component } from "react";
import Card from "./Card";
import "./Container.css";
export default class Container extends Component {
    constructor() {
        super();
        this.state = {
            selectedCard: "",
            matched: false,
            gameOver: false,
        };
    }

    isInitialSelect = true;
    selectHandle = (card, flipBack) => {
        if (this.isInitialSelect) {
            this.setState({
                selectedCard: card,
                matched: this.state.selectedCard && false,
            });
            this.isInitialSelect = false;
        } else {
            this.handleMatch(card, flipBack);
        }
    };

    handleMatch = (card, flipBack) => {
        if (this.state.selectedCard === card) {
            this.setState({
                matched: true,
                selectedCard: "",
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
    render() {
        return (
            <div className="container">
                
                {this.state.gameOver ? (
                    <div>
                        <h1>Game Over</h1>
                    </div>
                ) : (
                    this.props.imgArray.map((img, index) => (
                        <Card
                            className="image"
                            name={img.name}
                            key={index}
                            selectHandle={this.selectHandle}
                            isMatched={!this.isInitialSelect ? this.state.matched : ""}
                        />
                    ))
                )}
            </div>
        );
    }
}
