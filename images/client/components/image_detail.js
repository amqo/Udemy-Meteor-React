import React, { Component } from 'react';
import ImageScore from './image_score';

class ImageDetail extends Component {

  render() {
    let image = this.props.image;
    return (
      <li class="media list-group-item">
          <div className="media-left">
            <img src={ image.link } />
          </div>
          <div className="media-body">
            <h4 className="media-heading">
              { image.title }
            </h4>
            <p>{ image.description }</p>
            <ImageScore ups={ image.ups } downs={ image.downs } />
          </div>
      </li>
    );
  }
}

export default ImageDetail;
