import React from 'react'
import './Courses.css'
import MyAppBar from '../Components/AppBar'
import MyAppBaMobile from '../Components/mAppBar'
import MyFooter from '../Components/Footer'
import '../CSS/Courses/python-for-kids.css'


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

                    <div className="python-header python-kids-bg stats-bg" >
                        <h1>Kid’s Python Program</h1>
                    </div>

                    <div className="faq-wrap" id='level-1' >
                        <div className='python-container' style={{ marginTop: "30px" }} >
                            <div>
                                <div>
                                    We have split our curriculum for Python for kids into multiple levels, each encompassing key themes and technical concepts.  Each level starts with the basics of the theme and then builds on it as the sessions progress. We aim to ensure that our students have fully understood and absorbed the knowledge for each level and therefore the duration of each level is indicative only.
                                    Students can start as early as 9 years of age. We group our class by age and school grade levels, and usually have groups of 4 to 5 students in each class. This allows us to offer the proper attention to each student and provide periodic feedback for their continued success and growth.
                                </div>
                            </div>

                            <div>
                                We aim to ensure that our students have fully understood and absorbed the knowledge from our curriculum and therefore the duration of the course is indicative only.
                            </div>

                            <div className="wrap Probabilities" >
                                <h1 style={{ fontFamily: "j" }} >
                                    Alpha (Level 1)
                                </h1>
                            </div>
                            <ul>
                                <li>Fundamental coding concepts that are relevant for any programming language. This will help to prepare for the next level of Python programing.</li>
                                <li>Ability to write simple interactive programs on python to perform repetitive functions. For example – build their own calculator.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="faq-wrap" id='level-2' >
                        <div className='python-container' >
                            <div className="wrap Bayesian" >
                                <h1 style={{ fontFamily: "j" }} >
                                    Beta (Level 2)
                                </h1>
                            </div>

                            <ul>
                                <li>Develop the ability to create programs that can manipulate inputs and correct errors.</li>
                                <li>Learn basic modules and build advanced modules that can perform independent tasks without user interaction.</li>
                            </ul>
                            <div>
                                Duration – 14-16 weeks (2 sessions a week for 1.5 hour each)
                            </div>
                        </div>
                    </div>

                    <div className="faq-wrap" id='level-3' >
                        <div className='python-container' >
                            <div className="wrap Basic" >
                                <h1 style={{ fontFamily: "j" }} >
                                    Gamma (Level 3)
                                </h1>
                            </div>
                            <ul>
                                <li>Learn to manipulate, consume and integrate large sets of external data sources with their own programs.</li>
                                <li>Learn to visualize program’s interactions with external inputs.</li>
                            </ul>
                            <div>
                                Duration – 14-16 weeks (2 sessions a week for 1.5 hour each)
                            </div>
                        </div>
                    </div>

                    <div className="faq-wrap" id='level-3' >
                        <div className='python-container' >
                            <div className="wrap Distributions" >
                                <h1 style={{ fontFamily: "j" }} >
                                    Delta (Level 4)
                                </h1>
                            </div>
                            <ul>
                                <li>Use built in modules to created layered programs (i.e. programs within programs) – the building blocks of advanced programming.</li>
                                <li>Start with basic modules that perform independent tasks and thereafter build their own advanced modules that can perform independent tasks without user interaction.</li>
                            </ul>
                            <div>
                                Duration – 16-18 (2 sessions a week for 1.5 hour each)
                            </div>
                        </div>
                    </div>

                    <MyFooter />
                </div>
            </React.Fragment>
        )
    }
}