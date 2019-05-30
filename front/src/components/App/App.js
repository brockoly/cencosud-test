import React, { Component } from 'react';
import ScrollUpButton from "react-scroll-up-button";
import './App.css';
import Grid from '../Grid/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Grid />
        <ScrollUpButton />
      </div>
    );
  }
}

export default App;
