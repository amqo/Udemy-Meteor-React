import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Bins } from '../../../imports/collections/bins';

class BinsMain extends Component {

  render() {
    return (
      <div>Bins Main: { this.props.bin._id }</div>
    );
  }
}

export default createContainer((props) => {
  Meteor.subscribe('bins');
  const { binId } = props.params;
  return { bin: Bins.findOne(binId) };
}, BinsMain);
