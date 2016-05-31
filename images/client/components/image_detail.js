import React, { Component } from 'react';

class ImageDetail extends Component {

  render() {
    return (
      <li class="media list-group-item">
          <div className="media-left">
            <img src={ this.props.image.link } />
          </div>
          <div className="media-body">
            <h4 className="media-heading">
              { this.props.image.title }
            </h4>
            <p>{ this.props.image.description }</p>
          </div>
      </li>
    );
  }
}

export default ImageDetail;
