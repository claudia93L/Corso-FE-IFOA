import './ImageComponent.css';
import { Component } from 'react';

class ImageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: 'https://static.vecteezy.com/system/resources/previews/019/045/905/original/monkey-graphic-clipart-design-free-png.png',
      alt: 'Una scimmia in posa',
    };
  }

  render() {
    return (
      <img className='monkey' src={this.state.src} alt={this.state.alt}></img>
    );
  }
}

export default ImageComponent;
