import React, { Component } from 'react'
import HomeHeader from './Components/Home/HomeHeader'
import PayingChart from './Components/Home/PayingChart'
import './CSS/Home/Home.css'
import Ven from './Components/Home/Ven'
import { FaMedal,FaLightbulb,FaDollarSign } from 'react-icons/fa'
import MyFooter from './Components/Footer'

export class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <HomeHeader />
                </div>

                <div className="wrap" >
                    <div className="home-features" >
                        <div style={{margin:"20px 0px"}} >
                            <FaMedal className="home-feature-icon" />
                            <div>
                              High Quality <br/> Teaching
                            </div>
                        </div>
                        <div style={{margin:"20px 0px"}} >
                            <FaLightbulb className="home-feature-icon" />
                            <div>
                                Future Oriented <br/>
                                Learning
                            </div>
                        </div>
                        <div style={{margin:"20px 0px"}} >
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

                <div className="home-chart-wrap">
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

                <div className="wrap" >
                    <div className="home-blogs" >
                        
                    </div>
                </div>
                <MyFooter/>
            </div>
        )
    }
}

export default Home
