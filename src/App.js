import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
        <div>
          <Router>
            <div className='root'>
              <AppBar position="static">
                <Toolbar>
                  <Typography variant="h6" color="inherit" className='grow'>
                      Marcel Buisan / cinema i audiovisual
                  </Typography>
                  <Button color="inherit"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">Home</Link></Button>
                  <Button color="inherit"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/about">About</Link></Button>
                </Toolbar>
              </AppBar>
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
