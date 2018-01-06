import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/header'
import Search from './components/Search/search'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header"><Header /></div>
        <div className="search"><Search /></div>
        {/* <div className="forecast">Enter City</div> */}
        <div className="recent">Recent Searches</div>
      </div>
    );
  }
}

export default App;
