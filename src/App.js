import React, { Component } from "react";
import Button from "./components/Button";
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
      matched: false,
      cardArray: [],
    };
  }

  componentDidMount(){
    const shuffledList = arrayShuffle(imageList);
    this.setState({
      cardArray: shuffledList.concat(arrayShuffle(imageList)),
    });
  }
  gameStartHandler = () => {
    
  };

  

  render() {
    return (
      <div className="main-container">
        <Button value="RestartStart" onClick={this.gameStartHandler} />
        <Container
          imgArray={this.state.cardArray}
        />
      </div>
    );
  }
}
