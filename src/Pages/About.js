import React from 'react'
import './About.css'
import Footer from '../Components/Footer'
import MyAppBar from '../Components/AppBar'
import MyAppBaMobile from '../Components/mAppBar'

export default class AboutUs extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='responsive'>
                    <MyAppBar />
                    <div className='aboutMain' >
                        <div className='heading' style={{ backgroundColor: 'transparent' }} >
                            About Us
                        </div>
                    </div>
                </div>
                <div className='mobile'>
                    <MyAppBaMobile />
                    <div className='aboutMain' >
                        <div className='heading' style={{ backgroundColor: 'transparent' }} >
                            About Us
                        </div>
                       
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}