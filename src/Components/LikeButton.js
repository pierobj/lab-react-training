import React, { Component } from 'react'


class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
  };
}

  render() {
    const colors = ['purple','blue','green','yellow','orange','red'];
    const random = Math.floor(Math.random() * (5 - 0 + 1));
    return (
      <div>
        <button style={{backgroundColor: colors[random]}} onClick={() => {
          let newNumber = this.state.number
          this.setState({
            number: ++newNumber
          })
        }}>{this.state.number} Likes}</button>
      </div>
    )
  }
}

export default LikeButton;