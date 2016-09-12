import React, { Component } from 'react';
import { markdown } from 'markdown';

class BinsViewer extends Component {
  render() {

    if (!this.props.bin) {
      return <div></div>
    }

    const rawHTML = markdown.toHTML(this.props.bin.content);

    return (
      <div className="col-xs-4">
        <h5>Output</h5>
        <div dangerouslySetInnerHTML={{ __html: rawHTML }} />
      </div>
    );
  }
}

export default BinsViewer;
