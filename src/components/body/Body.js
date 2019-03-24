import React, { Component } from 'react'
import './Body.css';
import YouTube from 'react-youtube';

class Body extends Component {
    render() {
        return (
            <div className='Body'>
            <YouTube
              videoId={'uGPSUvaWryA'}
            />
          </div>
        )
    }
}

export default Body