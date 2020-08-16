import React, { Component } from 'react'
import image from '../../Images/Home/big-logo.png'
import '../../CSS/Home/HomeHeader.css'
import { Link } from 'react-router-dom';

export class HomeHeader extends Component {
    render() {
        return (
            <div>
                <div className="wrap" style={{ height: "80vh" }} >
                    <div className="home-header-box" >
                        <div>
                            <h1>
                                Online one-to-one or group sessions for ages 9+
                            </h1>
                            <Link to='/trial_classes' >
                                <button className="standard-button" >BOOK A FREE TRIAL</button>
                            </Link>
                        </div>
                        <div>
                            <img alt="s" src={image} className="home-wallpaper" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader;
