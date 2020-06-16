import React from "react";
import './Testimonials.css'
import MyFooter from "../Components/Footer";
import MyAppBar from "../Components/AppBar";
import MyAppBaMobile from "../Components/mAppBar";
import ty from '../Images/ty.jpg'
import ScrollAnimation from 'react-animate-on-scroll';

export default class Testimonials extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='responsive' style={{ backgroundColor: 'white' }} >
                    <MyAppBar />
                    <div>
                        <div style={{ fontFamily: 'j', margin: '30px', padding: '30px', textAlign: 'center' }} >
                            <h1>Testimonials</h1>
                        </div>
                        <div style={{ padding: '0px 40px' }} >
                            <div className='wrap' >
                                <div className='foreground'>
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }} ><div className='avatar' /></div>
                                    Name
                                    <div style={{ fontSize: '18px' }} >
                                        Here is the review ........<br></br>
                                        Size of the box may vary...
                                    </div>
                                </div>
                                <div className='foreground'>
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }} ><div className='avatar' /></div>
                                    Name
                                    <div style={{ fontSize: '18px' }} >
                                        Here is the review ........
                                    </div>
                                </div>
                                <div className='foreground'>
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }} ><div className='avatar' /></div>
                                    Name
                                    <div style={{ fontSize: '18px' }} >
                                        Here is the review ........
                                    </div>
                                </div>
                                <div className='foreground'>
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }} ><div className='avatar' /></div>
                                    Name
                                    <div style={{ fontSize: '18px' }} >
                                        Here is the review ........
                                    </div>
                                </div>
                                <div className='foreground'>
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }} ><div className='avatar' /></div>
                                    Name
                                    <div style={{ fontSize: '18px' }} >
                                        Here is the review ........
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', margin: '30px' }} >
                            <img alt="s" src={ty} width='200px' />
                        </div>
                    </div>
                </div>
                <div className='mobile' >
                    <MyAppBaMobile />
                    <div className='wrap' >
                        <div className='foreground'>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }} ><div className='avatar' /></div>
                                    Name
                                    <div style={{ fontSize: '14px' }} >
                                Here is the review ........<br></br>
                                        Size of the box may vary...
                                    </div>
                        </div>
                        <div className='foreground'>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }} ><div className='avatar' /></div>
                                    Name
                                    <div style={{ fontSize: '14px' }} >
                                Here is the review ........
                                    </div>
                        </div>
                        <div className='foreground'>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }} ><div className='avatar' /></div>
                                    Name
                                    <div style={{ fontSize: '14px' }} >
                                Here is the review ........
                                    </div>
                        </div>
                        <div className='foreground'>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }} ><div className='avatar' /></div>
                                    Name
                                    <div style={{ fontSize: '14px' }} >
                                Here is the review ........
                                    </div>
                        </div>
                        <ScrollAnimation animateIn="bounceInRight" style={{width:'100%'}} >
                        <div className='foreground'>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }} ><div className='avatar' /></div>
                                    Name
                                    <div style={{ fontSize: '14px' }} >
                                Here is the review ........
                                    </div>
                        </div>
                        </ScrollAnimation>
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around',margin:'20px 0px'}} >
                        <img alt="s" src={ty} width='100px' />
                    </div>
                </div>
                <MyFooter />
            </React.Fragment>
        )
    }
}