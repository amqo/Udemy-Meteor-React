import React, { Component } from 'react';
import ImageDetail from './image_detail';

class ImageList extends Component {

  renderedImages() {
    if (this.props.images) {
      return this.props.images.map(image =>
          <ImageDetail key={ image.id } image={ image } />
      );
    }
    return <div>Loading images...</div>
  }

  render() {
    return (
      <ul className="media-list list-group">
        { this.renderedImages() }
      </ul>
    );
  }
}

export default ImageList;
