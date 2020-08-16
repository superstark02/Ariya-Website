import React, { Component } from 'react'
import '../../CSS/Home/Ven.css'

export class Ven extends Component {
    render() {
        return (
            <div style={{ margin: "200px 0px" }} >
                <div className="home-courses" >
                    <div>
                        <div className="course-details-top" style={{backgroundColor:'#46b39d'}} >
                            Build a robust foundation through grade school curriculum.
                            Customized learning sessions for kids of all ages
                        </div>


                        <div className="home-course-cards maths" >
                            MATHEMATICS
                        </div>
                    </div>
                    <div>
                        <div className="home-course-cards stats" >
                            STATISTICS
                        </div>

                        <div className="course-details-bottom" style={{backgroundColor:'#f0ca4d'}} >
                            Learn the key concepts that are building blocks for AI and ML.
                            Train using real life examples from the industry.
                        </div>
                    </div>
                    <div>
                        <div className="course-details-top" style={{backgroundColor:'#e37b40'}} >
                            Introduce the world of programming early with actual coding tools and methods.
                            Training plans that use school-based curriculum
                        </div>

                        <div className="home-course-cards kids" >
                            PYTHON FOR KIDS
                        </div>
                    </div>
                    <div>
                        <div className="home-course-cards sr" >
                            PYTHON FOR PROFESSIONALS
                        </div>

                        <div className="course-details-bottom" style={{backgroundColor:'#78b8cc'}} >
                            Intensive and immersive course content to develop solid skillset in Python coding.
                            Coaching style that works for all skill levels.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ven
