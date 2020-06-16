import React from 'react'
import './About.css'
import Footer from '../Components/Footer'
import MyAppBar from '../Components/AppBar'
import monitor from '../Images/monitor.jpg'
import keyboard from '../Images/keyboard.jpg'
import team from '../Images/team.jpg'
import child from '../Images/child.jpg'
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
                        <div>
                            <div>
                                <img src={monitor} alt="s" width='250px' className="w3-animate-left" style={{ animationDuration: '2s' }} />
                                <img src={keyboard} alt="s" width='200px' className="w3-animate-right" style={{ marginLeft: '-80px', marginBottom: '-100px', borderRadius: '10px', animationDuration: '2s' }} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', width: '100%', padding: '0px 30px', justifyContent: 'space-evenly', flexWrap: 'wrap', marginTop: '30px' }} >
                            <div className='aboutTile' style={{ width: '45%' }} >
                                <h1>Title</h1>
                                Text for about us....
                            </div>
                            <div className='aboutTile' style={{ width: '45%' }} >
                                <img src={team} alt="s" width='400px' />
                            </div>
                            <div className='aboutTile' style={{ width: '90%' }} >
                                <h1><img alt="s" src={child} width='50px' style={{ marginRight: '-20px', marginTop: '-40px', zIndex: '-4' }} />For Children </h1>
                                Text for teaching methods....
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mobile'>
                    <MyAppBaMobile />
                    <div className='aboutMain' >
                        <div className='heading' style={{ backgroundColor: 'transparent' }} >
                            About Us
                        </div>
                        <div>
                            <div>
                                <img src={monitor} alt="s" width='150px' className="w3-animate-left" style={{ animationDuration: '2s' }} />
                                <img src={keyboard} alt="s" width='120px' className="w3-animate-right" style={{ marginLeft: '-80px', marginBottom: '-50px', borderRadius: '10px', animationDuration: '2s' }} />
                            </div>
                        </div>

                        <div style={{ width: '100%', padding: '0px 10px', marginTop: '30px' }} >
                            <div className='aboutTile' style={{ width: '45%' }} >
                                <h1>Title</h1>
                                Text for about us....
                            </div>
                            <div className='aboutTile' style={{ width: '45%' }} >
                                <img src={team} alt="s" width='300px' />
                            </div>
                            <div className='aboutTile' style={{ width: '90%' }} >
                                <h1><img alt="s" src={child} width='50px' style={{ marginRight: '-20px', marginTop: '-40px', zIndex: '-4' }} />For Children </h1>
                                Text for teaching methods....
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}