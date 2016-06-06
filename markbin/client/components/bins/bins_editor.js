import React, { Component } from 'react';

import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';

import Bins from '../../../imports/collections/bins';

class BinsEditor extends Component {

  onEditorChange(content) {
    Meteor.call('bins.update', this.props.bin, content);
  }

  render() {
    if (!this.props.bin) {
      return <div>Loading...</div>
    }

    return (
      <div className="col-xs-8">
        <h5>Input</h5>
        <CodeMirror
          value={ this.props.bin.content }
          onChange={ this.onEditorChange.bind(this) }
          options={{ mode: 'markdown', lineNumbers: true }} />
      </div>
    );
  }
}

export default BinsEditor;
