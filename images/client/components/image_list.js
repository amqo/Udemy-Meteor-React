import React, { Component } from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
  {title: 'Pen', link: 'http://dummyimage.com/600x400'},
  {title: 'Pine Tree', link: 'http://dummyimage.com/600x400'},
  {title: 'Mug', link: 'http://dummyimage.com/600x400'}
];

class ImageList extends Component {

  renderedImages() {
    return IMAGES.map((image) => {
      return (
        <li key={ image.title }>
          <ImageDetail
            title={ image.title }
            link={ image.link } />
        </li>
      );
    });
  }

  render() {
    return (
      <ul>
        { this.renderedImages() }
      </ul>
    );
  }
}

export default ImageList;
