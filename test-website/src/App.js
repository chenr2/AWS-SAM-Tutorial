import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const endpoint = 'https://y64wwpgva0.execute-api.us-east-1.amazonaws.com/dev/test'

class App extends Component {
  constructor() {
      super();
      this.state = {items: []};
  }

  componentDidMount() {
    fetch(endpoint)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("data: " + JSON.stringify(responseJson));
        this.setState({items: responseJson.Items}); 
      });
  }

  render() {
    const rows = this.state.items.map((item, index) => <tr><td>{item.name}</td></tr>);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <table>
            <tbody>
              {rows}
            </tbody>
        </table>
      </div>
    );
  }
}

export default App;
