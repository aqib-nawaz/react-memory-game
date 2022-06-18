import React, { Component } from "react";
import Card from "./Card";
import "./Container.css";
export default class Container extends Component {
    constructor(){
        super()
        this.state = {
            selectedCard:"",
            matched: false
        };
    }

    isInitialSelect = true

    selectHandle = (card, flipBack) =>{
        if(this.isInitialSelect){
            this.setState({
                selectedCard: card,
                matched: this.state.selectedCard && false
            })

            this.isInitialSelect = false

        } else {
            this.handleMatch(card, flipBack)
        }
    }

    handleMatch = (card, flipBack) => {
        if(this.state.selectedCard === card){
            this.setState({
                matched: true,
                selectedCard: ""
            })
            console.log("matched")

            this.isInitialSelect = true
        } else{
            flipBack()
        }
    }

    render() {
        return (
            <div className="container">
                {this.props.imgArray.map((img, index) => (
                    <Card
                        className="image"
                        name={img.name}
                        key={index}
                        selectHandle= {this.selectHandle}
                        isMatched = {!this.isInitialSelect ? this.state.matched :'' }
                    />
                ))}
            </div>
        );
    }
}
