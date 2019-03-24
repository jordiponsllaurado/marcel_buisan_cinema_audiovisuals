import React, { Component } from 'react'
import './Home.css';
import YouTube from 'react-youtube';

class Home extends Component {
    render() {
        return (
            <div className='Home'>
            <YouTube
              videoId={'uGPSUvaWryA'}
            />
          </div>
        )
    }
}

export default Home