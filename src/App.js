import React, { Component } from "react";
import Container from "./components/Container";
import "./App.css";
import arrayShuffle from "array-shuffle";

const imageList = [
  { name: "bird"},
  { name: "cat" },
  { name: "chick"},
  { name: "cow"},
  { name: "dog"},
  { name: "duck"},
  { name: "fish"},
  { name: "panda"},
  { name: "rabbit"},
  { name: "squirrel"},
];
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cardArray: [],
    };
  }

  
  componentDidMount(){
    const shuffledList = arrayShuffle(imageList);
    this.setState({
      cardArray: shuffledList.concat(arrayShuffle(imageList)),
    });
  }
  

  

  render() {
    return (
      <div className="main-container">
        <div className="header">
          <h2>Memory Game</h2>
        </div>
        <Container
          imgArray={this.state.cardArray}
        />
      </div>
    );
  }
}
