import React from 'react'
import './Courses.css'
import MyAppBar from '../Components/AppBar'
import MyAppBaMobile from '../Components/mAppBar'
import MyFooter from '../Components/Footer'

var courses = [
    {
        name: "CZ JUNIOR",
        image: "",
        age: "Suggested Age: 5 to 9 years",
        descp: "Immersion program having modules Tech Foundation and Game Development Jr."
    },
    {
        name: "CZ LEARNER",
        image: "",
        age: "Suggested Age: 9+ years",
        descp: "Foundation Program with modules Game Development, Android App Development, Web Development & more"
    },
    {
        name: "CZ EXPLORER",
        image: "",
        age: "Suggested Age: 12+ years",
        descp: "Advance concepts of technology ranging from Robotics, Unity 2D, Python,  Entrepreneurship & more"
    }
]

export default class Courses extends React.Component {

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
                    <div style={{ width: "100%", padding: "0px 10vw" }} >
                        <h1>Programs Offered</h1>
                        <div style={{ textAlign: "center" }} >
                            Learning to code is like learning a brand new language. To excel and to become fluent, it needs commitment, continual exercise and regular immersion.<br />

                            CodingZen’s core programs provide students with continuous learning module after module, to progressively build programming knowledge right from the basics to the advanced technology.
                            Our cutting edge curriculum is dynamic and has been curated and refined by seasoned industry specialists along with internal technology team.
                            The programs below are laid out by appropriate core program category, Do reach out to our team for a free consultation.
                        </div>
                        <div className="course-wrap" >
                            {
                                courses.map(item => {
                                    return (
                                        <div className="course-card" >
                                            <h2>{item.name}</h2>
                                            <div style={{textAlign:"center",width:"100%"}} >
                                                <b>{item.age}</b>
                                            </div>
                                            <p>
                                                {item.descp}
                                            </p>
                                            <div className="wrap"  >
                                                <button className="courses-link-button" >
                                                    Leran More
                                                </button>
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