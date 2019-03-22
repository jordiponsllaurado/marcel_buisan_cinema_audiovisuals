import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import YouTube from 'react-youtube';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='Body'>
          <YouTube
            videoId={'uGPSUvaWryA'}
          />
        </div>
      </div>
    );
  }
}

export default App;
