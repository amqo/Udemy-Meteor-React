import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import Accounts from './accounts';

class Header extends Component {

  onBinClick(event) {
    event.preventDefault();
    Meteor.call('bins.insert', (error, binId) => {
      if (!error) {
        const url = `/bins/${binId}`;
        browserHistory.push(url);
      }
    });
  }

  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">MarkBin</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Accounts />
          </li>
          <li>
            <a href="#" onClick={ this.onBinClick.bind(this) }>Create Bin</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
