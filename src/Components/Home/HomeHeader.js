import React, { Component } from 'react'
import image1 from '../../Images/Home/HomeHeader/Shape 1.png'
import image3 from '../../Images/Home/HomeHeader/Shape 2.png'
import image2 from '../../Images/Home/HomeHeader/Shape 5.png'
import image4 from '../../Images/Home/HomeHeader/Shape 3.png'
import '../../CSS/Home/HomeHeader.css'

export class HomeHeader extends Component {
    render() {
        return (
            <div>
                <div className="wrap" style={{height:"80vh"}} >
                    <div>
                        <div style={{display:"flex"}} >
                            <div className="shape-1-content" ><img alt="s" src={image1} className="shape-1" /></div>
                            <img alt="s" src={image2} className="shape-2" />
                            <img alt="s" src={image3} className="shape-3" />
                        </div>
                        <div className="wrap" >
                            <div>
                                <img alt="s" src={image4} className="shape-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader;
