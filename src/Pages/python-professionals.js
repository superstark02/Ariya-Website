import React from 'react'
import './Courses.css'
import MyAppBar from '../Components/AppBar'
import MyAppBaMobile from '../Components/mAppBar'
import MyFooter from '../Components/Footer'
import '../CSS/Courses/statistics.css'

export default class ProfessionalsPython extends React.Component {

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

                    <div className='python-header python-bg stats-bg' style={{ height: "60vh" }}>
                        Python for Professionals
                    </div>
                    
                    <div className="faq-wrap">
                        <div className='python-container' style={{ marginTop: "30px" }} >
                            <div>
                                We have trained professionals for all levels of experience and streams – 
                                from high school and college students, to professionals working in the IT 
                                industry for 20+ years. Our course and exercises are designed to gain a deep 
                                understanding about Python’s programming concepts and develop robust coding 
                                skills with practical examples. Most of the students that take this course sign 
                                up for the AI and Machine Learning course to elevate their Pythion skills to the next level.
                            </div>
                            We aim to ensure that our students have fully understood and absorbed the 
                            knowledge from our curriculum and therefore the duration of the course is indicative only.
                        </div>
                    </div>
                    <div className="faq-wrap" id='level-1' >
                        <div className='python-container' style={{ marginTop: "30px" }} >
                            <ul>
                                <li>Being with fundamental coding concepts that are relevant for any programming language. </li>
                                <li>Develop ability to write simple interactive programs on python to perform repetitive functions. </li>
                                <li>Develop the ability to create programs that can manipulate inputs and correct errors.  </li>
                                <li>Learn basic modules and build advanced modules that can perform independent tasks without user interaction. </li>
                                <li>Learn to manipulate, consume and integrate large sets of external data sources with their own programs.</li>
                                <li>Learn to visualize program’s interactions with external inputs.</li>
                                <li>Use built in modules to created layered programs (i.e. programs within programs) – the building blocks of advanced programming.</li>
                                <li>Start with basic modules that perform independent tasks and thereafter build their own advanced modules that can perform independent tasks without user interaction.</li>
                            </ul>
                            <div className="faq-wrap" id='level-1' >
                                Classes usually run for about 8 weeks, 5 days each week for 1.5 hours each day. 
                            </div>
                        </div>
                        
                    </div>

                    <MyFooter />
                </div>
            </React.Fragment>
        )
    }
}