import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const endpoint = 'https://y64wwpgva0.execute-api.us-east-1.amazonaws.com/dev/test'

class App extends Component {

  componentDidMount() {
    fetch(endpoint)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("data: " + JSON.stringify(responseJson));
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
