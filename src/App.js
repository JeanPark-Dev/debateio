import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './myName';
import Counter from './js/Counter';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <MyName name="Jean" />
        </div>
        <div>
          <Counter />
        </div>
      </Fragment>
    );
  }
}

export default App;
