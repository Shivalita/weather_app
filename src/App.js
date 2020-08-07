import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Days from './Days';
import Weather from './Weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="row">
            <div className="col s12 m6 push-m3">
                <div className="weather card blue-grey darken-1">
                    <Weather city="Lyon"/>
                    <Days />
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
