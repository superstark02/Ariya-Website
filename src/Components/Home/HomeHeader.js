import React, { Component } from 'react'
import image from '../../Images/Home/big-logo.png'
import '../../CSS/Home/HomeHeader.css'

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
                            <button className="standard-button" >BOOK A FREE TRIAL</button>
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
