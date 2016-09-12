import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Bins } from '../../../imports/collections/bins';
import BinsEditor from './bins_editor';
import BinsViewer from './bins_viewer';
import BinsShare from './bins_share';

class BinsMain extends Component {

  render() {
    return (
      <div>
        <BinsEditor bin={ this.props.bin }/>
        <BinsViewer bin={ this.props.bin }/>
        <BinsShare bin={ this.props.bin }/>
      </div>
    );
  }
}

export default createContainer((props) => {
  Meteor.subscribe('bins');
  const { binId } = props.params;

  return { bin: Bins.findOne(binId) };
}, BinsMain);
