import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Alex'
    }
  }

  render() {
    const { userName } = this.state;

    return (
        <div className="App-container">
          <Main userName={userName} />
        </div>
    );
  }
}