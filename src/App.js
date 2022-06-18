import React, { Component } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import "./App.css"
import arrayShuffle from 'array-shuffle';

const imageList = [
        { name: "bird", src: "./images/bird.png" },
        { name: "cat", src: "./images/cat.jpg" },
        { name: "chick", src: "./images/chick.jpg" },
        { name: "cow", src: "./images/cow.png" },
        { name: "dog", src: "./images/dog.png" },
        { name: "duck", src: "./images/duck.jpg" },
        { name: "fish", src: "./images/fish.jpg" },
        { name: "panda", src: "./images/panda.jpg" },
        { name: "rabbit", src: "./images/rabbit.jpg" },
        { name: "squirrel", src: "./images/squirrel.jpg"}
]
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      turns: 0,
      isFlipped: false,
      firstChoice: "",
      secondChoice: "",
      cardArray:[]
    };
  }

gameStartHandler = () => {
const shuffledList = arrayShuffle(imageList);

  this.setState({
    cardArray: shuffledList.concat(arrayShuffle(imageList))
  })
}


  render() {
    return <div className="main-container">
      <Button value="Start" onClick= {this.gameStartHandler}/>
      <Container imgArray = {this.state.cardArray}/>
      
    </div>;
  }
}
