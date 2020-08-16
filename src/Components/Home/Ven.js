import React, { Component } from 'react'
import '../../CSS/Home/Ven.css'
import { Link } from 'react-router-dom'

export class Ven extends Component {
    render() {
        return (
            <div className="ven" >
                <div className="home-courses desktop" >
                    <div>
                        <div className="course-details-top" style={{ backgroundColor: '#46b39d' }} >
                            Build a robust foundation through grade school curriculum.
                            Customized learning sessions for kids of all ages
                        </div>

                        <a href="/maths" >
                            <div className="home-course-cards maths" >
                                MATHEMATICS
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="/statistics_course" >
                            <div className="home-course-cards stats" >
                                STATISTICS
                            </div>
                        </a>

                        <div className="course-details-bottom" style={{ backgroundColor: '#f0ca4d' }} >
                            Learn the key concepts that are building blocks for AI and ML.
                            Train using real life examples from the industry.
                        </div>
                    </div>
                    <div>
                        <div className="course-details-top" style={{ backgroundColor: '#e37b40' }} >
                            Introduce the world of programming early with actual coding tools and methods.
                            Training plans that use school-based curriculum
                        </div>

                        <a href="/python_kids" >
                            <div className="home-course-cards kids" >
                                PYTHON FOR KIDS
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href='/python_professionals' >
                            <div className="home-course-cards sr" >
                                PYTHON FOR PROFESSIONALS
                            </div>
                        </a>

                        <div className="course-details-bottom" style={{ backgroundColor: '#78b8cc' }} >
                            Intensive and immersive course content href develop solid skillset in Python coding.
                            Coaching style that works for all skill levels.
                        </div>
                    </div>
                </div>



                <div className="mobile" >
                    <div className="home-courses" >

                        <div>
                            <a href="/maths" >
                                <div className="home-course-cards maths" >
                                    MATHEMATICS
                                </div>
                            </a>
                            <div className="course-details-top" style={{ backgroundColor: '#46b39d' }} >
                                Build a robust foundation through grade school curriculum.
                                Customized learning sessions for kids of all ages
                             </div>
                        </div>

                        <div>
                            <a href="/statistics_course" >
                                <div className="home-course-cards stats" >
                                    STATISTICS
                                </div>
                            </a>
                            <div className="course-details-bottom" style={{ backgroundColor: '#f0ca4d' }} >
                                Learn the key concepts that are building blocks for AI and ML.
                                Train using real life examples from the industry.
                            </div>
                        </div>

                        <div>
                            <a href="/python_kids" >
                                <div className="home-course-cards kids" >
                                    PYTHON FOR KIDS
                                </div>
                            </a>
                            <div className="course-details-top" style={{ backgroundColor: '#e37b40' }} >
                                Introduce the world of programming early with actual coding tools and methods.
                                Training plans that use school-based curriculum
                            </div>
                        </div>

                        <div>
                            <a href='/python_professionals' >
                                <div className="home-course-cards sr" >
                                    PYTHON FOR PROFESSIONALS
                                </div>
                            </a>
                            <div className="course-details-bottom" style={{ backgroundColor: '#78b8cc' }} >
                                Intensive and immersive course content href develop solid skillset in Python coding.
                                Coaching style that works for all skill levels.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ven
