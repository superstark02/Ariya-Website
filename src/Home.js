import React, { Component } from 'react'
import HomeHeader from '../Components/Home/HomeHeader'
import TrialClassButton from '../Components/Home/TrialClassButton'
import PayingChart from '../Components/Home/PayingChart'
import '../CSS/Home/Home.css'
import Ven from '../Components/Home/Ven'
import image from '../Images/Home/HomeHeader/home-image.png'
import { FaMedal, FaLightbulb, FaDollarSign } from 'react-icons/fa'

export class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <HomeHeader />
                    <TrialClassButton />
                    <div className="home-header-image-box" >
                        <img src={image} alt="s" className="home-header-image" />
                    </div>
                </div>

                <div className="wrap" >
                    <div className="home-features" >
                        <div>
                            <FaMedal className="home-feature-icon"/>
                            <div>
                                Quality Teaching
                            </div>
                        </div>
                        <div>
                            <FaLightbulb className="home-feature-icon" />
                            <div>
                                Future Oriented <br/>
                                Teaching
                            </div>
                        </div>
                        <div>
                            <FaDollarSign className="home-feature-icon" />
                            <div>
                                Low Rates
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrap" >
                    <Ven />
                </div>
                <div className="wrap" >
                    <button className="secondary-button" >Book A Trial Class</button>
                </div>

                <div className="wrap">
                    <div className="paying-chart" >
                        <h2>Languages To Learn</h2>
                        <ul>
                            <li>Robotics already replacing humans for jobs, accelerated by recent pandemic.</li>
                            <li>Prepare for next generation of technology- Machine
                                Learning (ML)/ Artificial Intelligence (AI)</li>
                            <li>Learn Mathematics, Python and Statistics -fundamentals to ML from our top teachers at the convenience of your home</li>
                            <li>Offering online one-to-one or group sessions for age group 9 and above</li>
                        </ul>
                    </div>

                    <PayingChart />
                </div>

                <div className="wraps" >
                    <div className="home-blogs" >
                        
                    </div>
                </div>

            </div>
        )
    }
}

export default Home
