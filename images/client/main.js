// Any JS in here is auto run
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ImageList from './components/image_list';

// Create a component
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  componentWillMount() {
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then((response) => {
        let images = response.data.data.filter(
          image => !image.is_album
        );
        this.setState({ images });
      });
  }

  render() {
    return (
      <div>
        <ImageList images={ this.state.images }/>
      </div>
    );
  }
}

// Render this component to the screen
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
