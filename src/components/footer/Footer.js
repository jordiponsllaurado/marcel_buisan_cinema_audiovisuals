import React, { Component } from 'react'
import './Footer.css';
import { SocialIcon } from 'react-social-icons'

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <SocialIcon className='social_icon' style={{ height: 25, width: 25 }} url="https://twitter.com/MarcelBuisan" network="twitter" bgColor='#616283'/>
                <SocialIcon className='social_icon' style={{ height: 25, width: 25 }} url="https://www.linkedin.com/in/marcel-buisan-comellas-73342059/" network="linkedin" bgColor='#616283'/>
                <SocialIcon className='social_icon' style={{ height: 25, width: 25 }} url="hhttps://www.youtube.com/user/mbuisan" network="youtube" bgColor='#616283'/>
            </div>
        )
    }
}

export default Footer