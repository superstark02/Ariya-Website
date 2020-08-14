import React from 'react'
import '../CSS/Pages/python-professionals.css'
import MyAppBar from '../Components/AppBar'
import MyFooter from '../Components/Footer'

export default class ProfessionalsPython extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div>
                    <MyAppBar />  

                    <div className='python-header prof-bg  wrap' style={{height:"60vh"}}>
                        Python for Professionals
                    </div>

                    <div>
                        <h1 style={{fontFamily:"a"}}>Python for Professionals</h1>
                    </div> 

                    <div className="wrap" style={{flexDirection:"column"}} >
                        <div className="stats-content" >
                            We have trained professionals for all levels of experience and streams – 
                            from high school and college students, to professionals working in the IT industry for 20+ 
                            years. Our course and exercises are designed to gain a deep understanding about Python’s 
                            programming concepts and develop robust coding skills with practical examples. Most of the 
                            students that take this course sign up for the AI and Machine Learning course to elevate their 
                            Pythion skills to the next level.
                        </div>
                        <div className="stats-content" >
                            We aim to ensure that our students have fully understood and absorbed the knowledge 
                            from our curriculum and therefore the duration of the course is indicative only.
                        </div>
                    </div>

                    <div className="contentt">
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
                    </div>
                    <div className="lastpara">
                        <strong>Classes usually run for about 8 weeks, 5 days each week for 1.5 hours each day. </strong>
                    </div>

                    <MyFooter />
                </div>
            </React.Fragment>
        )
    }
}