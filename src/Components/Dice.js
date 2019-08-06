import React, { Component } from 'react'


class Dice extends Component {
 
  constructor(props){
    super(props);
    this.state = { imageIndex: this.randomIntegerInRange(1, 6) };
  }

  randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  handleClick = () => {
    this.setState({imageIndex: '-empty'});
    setTimeout( () => {
      this.setState({imageIndex: this.randomIntegerInRange(1, 6)})
    }, 1000)
  }
  
  render() {
    return (
      <img src={`/img/dice${this.state.imageIndex}.png`} onClick={this.handleClick} alt="dice" width="200px"/>
    )
  }
}


export default Dice;