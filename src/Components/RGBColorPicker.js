import React, { Component } from 'react'
import SingleColorPicker from './Components/SingleColorPicker';

class RGBColorPicker extends Component {
  state = {
    rValue: 0,
    gValue: 0,
    bValue: 0
  }
  updateColor = (code, value) => {
    this.setState = {
      [code]: value
    }
  }
  render() {
    return (
      <div>
        <SingleColorPicker color='r' function={this.updateColor} />
        <SingleColorPicker function={this.updateColor}/>
        <SingleColorPicker function={this.updateColor}/>
      </div>
    )
  }
}

export default RGBColorPicker;