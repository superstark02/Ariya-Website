import React from 'react'
import '../Pages/Courses.css'

export default class Other extends React.Component {
    render() {
        return (
            <div className="course-container aws" style={{ height: '100%', width: '100vw' }} >
                <div className="course-label" >
                    Professional <br></br> Courses
                </div>
                <div className="course-box aws" >
                    <div className='course-heading' >
                        <div>
                            <div className='course-title' >STATISTICS</div>
                        </div>
                    </div>
                </div>
                <div className="course-box aws">
                    <div className='course-heading' >
                        <div>
                            <div className='course-title' >DEV OPS</div>
                        </div>
                    </div>
                </div>
                <div className="course-box aws" >
                    <div className='course-heading' >
                        <div>
                            <div className='course-title' >AMAZON WEB SERVICES</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}