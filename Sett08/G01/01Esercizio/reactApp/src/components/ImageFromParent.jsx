import React, { Component } from 'react';

class ImageFromParent extends Component {
  render() {
    return (
      <img className='monkey' src={this.props.src} alt={this.props.alt}></img>
    );
  }
}

export default ImageFromParent;
