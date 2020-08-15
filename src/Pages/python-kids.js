import React from 'react'
import '../CSS/Pages/stats.css'
import '../CSS/Pages/python-kids.css'
import MyAppBar from '../Components/AppBar'
import MyFooter from '../Components/Footer'
import image1 from '../Images/yellow.png'
import image2 from '../Images/orange.png'
import image3 from '../Images/blue-green.png'
import image4 from '../Images/light-blue.png'

const data = [
    {
        name: "Alpha (Level 1)",
        duration: "Duration – 10-12 weeks (2 sessions a week for 1 hour each)",
        imamge: image1,
        content: <div>
            <ul>
                <li>Fundamental coding concepts that are relevant for any programming language. This will help to prepare for the next level of Python programing.</li>
                <li>Ability to write simple interactive programs on python to perform repetitive functions. For example – build their own calculator.</li>
            </ul>
        </div>
    },
    {
        name: "Beta (Level 2)",
        duration: "Duration – 14-16 weeks (2 sessions a week for 1 hour each)",
        imamge: image2,
        content: <div>
            <ul>
                <li>Develop the ability to create programs that can manipulate inputs and correct errors.</li>
                <li>Learn basic modules and build advanced modules that can perform independent tasks without user interaction.</li>
            </ul>
        </div>
    },
    {
        name: "Gamma (Level 3)",
        duration: "Duration – 14-16 weeks (2 sessions a week for 1.5 hours each)",
        imamge: image3,
        content: <div>
            <ul>
                <li>Learn to manipulate, consume and integrate large sets of external data sources with their own programs.</li>
                <li>Learn to visualize program’s interactions with external inputs.</li>
            </ul>
        </div>
    },
    {
        name: "Delta (Level 4)",
        duration: "Duration – 16-18 weeks (2 sessions a week for 1.5 hours each)",
        imamge: image4,
        content: <div>
            <ul>
                <li>Use built in modules to created layered programs (i.e. programs within programs) – the building blocks of advanced programming.</li>
                <li>Start with basic modules that perform independent tasks and thereafter build their own advanced modules that can perform independent tasks without user interaction.</li>
            </ul>
        </div>
    }
]

export default class KidsPython extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div>
                    <MyAppBar />
                    <div>
                        <h1 style={{ fontFamily: "a" }}>
                            Kid’s Python Program
                        </h1>
                    </div>

                    <div className="wrap" >
                        <div style={{ width: "76%", textAlign:"left", margin:"20px 0px" }} className="kids-courses" >
                            <p className="kids-title" >Why &ldquo;Python&rdquo; for Kids??</p>
                            <ul className="kids-content" >
                                <li>Python was created originally for kids to learn coding!!!!</li>
                                <li>Kids operate at genius level very early in the life!!! Starting early will help obtain the skills for future!!!</li>
                                <li>Easy, simple to learn and with wide range of available libraries and excellent platform for complex Machine Learning projects.</li>
                                <li>It is most sought-after language skill in the tech world!!!</li>
                            </ul>
                        </div>
                    </div>

                    <div className="wrap" >
                        <div className="kids-courses" >
                            {
                                data.map(item => {
                                    return (
                                        <div className="kids-card" >
                                            <div>
                                                <div className="kids-title" >
                                                    {item.name}
                                                </div>
                                                <div className="wrap" >
                                                    <img className="kids-image" src={item.imamge} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="kids-duration" style={{textAlign:"left"}} >
                                                    {item.duration}
                                                </div>
                                                <div className="kids-content" >
                                                    {item.content}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <MyFooter />
                </div>
            </React.Fragment>
        )
    }
}