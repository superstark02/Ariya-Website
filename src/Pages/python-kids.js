import React from 'react'
import './python-kids.css'
import MyAppBar from '../Components/AppBar'
import MyAppBaMobile from '../Components/mAppBar'
import MyFooter from '../Components/Footer'
import image1 from '../Images/yellow.png'
import image2 from '../Images/orange.png'
import image3 from '../Images/blue-green.png'
import image4 from '../Images/light-blue.png'


export default class KidsPython extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="responsive" >
                        <MyAppBar />
                    </div>
                    <div className="mobile" >
                        <MyAppBaMobile />
                    </div>
                    
                    <div>
                        <h1>Kid’s Python Program</h1>
                    </div> 
                    <table>
                            <tr>
                                
                                <td className="tdmain"><div className="imgs"><img src={image1} /></div></td>
                                <td className="tdmain"><div className="tds">
                                Alpha (Level 1)
                                </div></td>
                                <td className="tdmain"><div className="tds">
                                    <ul>
                                        <li>Fundamental coding concepts that are relevant for any programming language. This will help to prepare for the next level of Python programing.</li>
                                        <li>Ability to write simple interactive programs on python to perform repetitive functions. For example – build their own calculator.</li>
                                    </ul>
                                    <div>
                                    Duration – 10-12 weeks (2 sessions a week for 1.5 hour each)
                                    </div>
                                </div></td>
                            
                            </tr>

                            <tr>
                                
                                <td style={{ width: "30%" }}><div className="imgs"><img src={image2} /></div></td>
                                <td style={{ width: "20%" }}><div className="tds">
                                Beta (Level 2)
                                </div></td>
                                <td style={{ width: "100%" }}><div className="tds">
                                    <ul>
                                        <li>Develop the ability to create programs that can manipulate inputs and correct errors.</li>
                                        <li>Learn basic modules and build advanced modules that can perform independent tasks without user interaction.</li>
                                    </ul>
                                    <div>
                                    Duration – 14-16 weeks (2 sessions a week for 1.5 hour each)
                                    </div>
                                </div></td>
                                
                            </tr>

                            <tr>
                                
                                <td style={{ width: "30%" }}><div className="imgs"><img src={image3} /></div></td>
                                <td style={{ width: "20%" }}><div className="tds">
                                Gamma (Level 3)
                                </div></td>
                                <td style={{ width: "100%" }}><div className="tds">
                                    <ul>
                                        <li>Learn to manipulate, consume and integrate large sets of external data sources with their own programs.</li>
                                        <li>Learn to visualize program’s interactions with external inputs.</li>
                                    </ul>
                                    <div>
                                    Duration – 14-16 weeks (2 sessions a week for 1.5 hour each)
                                    </div>
                                </div></td>
                                
                            </tr>
                            
                            <tr>
                                
                                <td style={{ width: "30%" }}><div className="imgs"><img src={image4} /></div></td>
                                <td style={{ width: "20%" }}><div className="tds">
                                Delta (Level 4)
                                </div></td>
                                <td style={{ width: "100%" }}><div className="tds">
                                    <ul>
                                        <li>Use built in modules to created layered programs (i.e. programs within programs) – the building blocks of advanced programming.</li>
                                        <li>Start with basic modules that perform independent tasks and thereafter build their own advanced modules that can perform independent tasks without user interaction.</li>
                                    </ul>
                                    <div>
                                    Duration – 16-18 (2 sessions a week for 1.5 hour each)
                                    </div>
                                </div></td>
                                
                            </tr>
                        
                    </table>

                    <MyFooter />
                </div>
            </React.Fragment>
        )
    }
}