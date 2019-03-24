import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';

class App extends Component {
  render() {
    return (
        <div className='Body'>
          <Router>
            <div className>
              <div className='header'>
                Marcel Buisan / cinema i audiovisual
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                </ul>
              </div>

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>
        </Router>
        <Footer />
      </div>
    )
  }
}

export default App;
