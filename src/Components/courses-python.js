import React from 'react'
import '../Pages/Courses.css'
import "animate.css/animate.min.css";

export default class Python extends React.Component {
    render() {
        return (
            <div className="course-container python" style={{ height: '100vh', width: '100vw' }} >
                <div className="course-label" >
                        Python Courses
                </div>
                <div className="course-box python" >
                    <div className='course-heading' >
                        <div>
                            <div className='course-title' >LEVEL 1</div>
                            Here is the sample details
                        </div>
                    </div>
                </div>
                <div className="course-box python">
                    <div className='course-heading' >
                        <div>
                            <div className='course-title' >LEVEL 2</div>
                        </div>
                    </div>
                </div>
                <div className="course-box python" >
                    <div className='course-heading' >
                        <div>
                            <div className='course-title' >LEVEL 3</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}