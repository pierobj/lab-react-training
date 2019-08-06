import React, { Component } from 'react'

class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
  };
}
  render() {
    console.log(this.rops);
    const {img, imgClicked} = this.props;
    return (
      <img src={this.state.clicked ? imgClicked : img} onClick={() => {
        if (this.state.clicked) {
          this.setState({
            clicked: false
          });
        } else {
            this.setState({
              clicked: true
          });
        }
      }
      } alt='face'/>
    )
  }
}

export default ClickablePicture;