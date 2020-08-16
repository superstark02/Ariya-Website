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

                    <div className='python-header prof-bg  wrap' style={{ height: "60vh" }}>
                        Python for Professionals
                    </div>

                    <div className="wrap" style={{ flexDirection: "column",textAlign:"left",marginTop:"30px" }} >
                        <div className="stats-content" >
                            Offering course for professionals to help them gain a deep understanding about Python’s programming concepts and develop robust coding skills with practical examples. The next step after this course is to sign-up for AI and Machine Learning course to help elevate Python skills to the next level.
                        </div>
                        <div className="stats-content" >
                            We aim to ensure that our students have fully understood and absorbed the knowledge
                            from our curriculum and therefore the duration of the course is indicative only.
                        </div>
                    </div>

                    <div className="wrap" >
                        <div className="contentt">
                            <p style={{color:"#45b29c"}} >Course offers learning-</p>
                            <ul>
                                <li>Fundamental coding concepts that are relevant for any programming language.</li>
                                <li>Ability to write simple interactive programs on python to perform repetitive functions and create programs that can manipulate inputs and correct errors.</li>
                                <li>Basic modules and building advanced modules that can perform independent tasks without user interaction.</li>
                                <li>To manipulate, consume and integrate large sets of external data sources with their own programs and visualize program&rsquo;s interactions with external inputs.</li>
                                <li>To use built in modules to created layered programs (i.e. programs within programs) &ndash; the building blocks of advanced programming.</li>
                            </ul>

                            <div className="lastpara" style={{color:"#f0ca4e"}} >
                                <strong>Duration - Classes usually run for about 8 weeks, 5 days each week for 1.5 hours each day. </strong>
                            </div>
                        </div>
                    </div>

                    <MyFooter />
                </div>
            </React.Fragment>
        )
    }
}