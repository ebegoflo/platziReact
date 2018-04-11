import React, { Component } from 'react';
import logo from './logo.svg';

import BodyJs from './components/Grid';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
            {/*<Video />
              <Button />*/}

            <BodyJs />

      </div>
    );
  }
}

export default App;
