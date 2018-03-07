import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import images from './images';
import plus from '../../../Images/add.png';
import Dropzone from 'react-dropzone'

import '../style/Gallery.css';

class Gallery extends Component {
  constructor() {
    super()
    this.state = { files: [] }
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    const style = {
      width: 0,
      height: 0,
      borderWidth: 0
    }
    return (
      <div className="gallery-wrapper">
        <div className="gallery">
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            showIndex={true}
          />
          <Dropzone onDrop={this.onDrop.bind(this)} style={style}>
            <button className="gAddnewImgbtn btn-red">
              <img src={plus} alt="Plus" />
              <i className="fas fa-camera"></i>
            </button>
          </Dropzone>
          <span className="gdeletebtn"><i className="fas fa-trash-alt"></i></span>
        </div>
      </div>
    );
  }
}

export default Gallery;