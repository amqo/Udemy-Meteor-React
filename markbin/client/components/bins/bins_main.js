import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Bins } from '../../../imports/collections/bins';
import BinsEditor from './bins_editor';

class BinsMain extends Component {

  render() {
    return (
      <BinsEditor bin={ this.props.bin }/>
    );
  }
}

export default createContainer((props) => {
  Meteor.subscribe('bins');
  const { binId } = props.params;
  
  return { bin: Bins.findOne(binId) };
}, BinsMain);
