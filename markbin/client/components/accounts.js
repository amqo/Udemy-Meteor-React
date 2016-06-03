import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Account extends Component {

  componentDidMount() {
    // Render the Blaze accounts form
    // Find the div we just rendered in the 'render' method
    // Place the Blaze accounts form in that div
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  }

  componentWillUnmount() {
    // Find the forms we created and destroy them
    Blaze.remove(this.view);
  }

  render() {
    return (
      <div ref="container"></div>
    );
  }
}

export default Account;
