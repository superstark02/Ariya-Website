import React from 'react'
import '../Pages/Courses.css'
import "animate.css/animate.min.css";

export default class Python extends React.Component {
    render() {
        return (
            <div>
                <div className="responsive" >
                    <div className="course-container python" style={{ height: '100vh', width: '100vw' }} >
                        <div className="course-label" >
                            Python Courses
                        </div>
                        <div className="course-box python" >
                            <a href="/coding_python#level-1" style={{ width: "100%" }} >
                                <div className='course-heading' >
                                    <div>
                                        <div className='course-title' >LEVEL 1</div>
                                Here is the sample details
                            </div>
                                </div>
                            </a>
                        </div>
                        <div className="course-box python">
                            <a href="/coding_python#level-2" style={{ width: "100%" }} >
                                <div className='course-heading' >
                                    <div>
                                        <div className='course-title' >LEVEL 2</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="course-box python" >
                            <a href="/coding_python#level-3" style={{ width: "100%" }} >
                                <div className='course-heading' >
                                    <div>
                                        <div className='course-title' >LEVEL 3</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='mobile' >
                    <div className="course-container python" style={{ height: '100vh', width: '100vw' }} >
                        <div className="course-label" >
                            Python Courses
                        </div>
                        <div className="course-box python" >
                            <a href="/coding_python#level-1-m" style={{ width: "100%" }} >
                                <div className='course-heading' >
                                    <div>
                                        <div className='course-title' >LEVEL 1</div>
                                Here is the sample details
                            </div>
                                </div>
                            </a>
                        </div>
                        <div className="course-box python">
                            <a href="/coding_python#level-2-m" style={{ width: "100%" }} >
                                <div className='course-heading' >
                                    <div>
                                        <div className='course-title' >LEVEL 2</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="course-box python" >
                            <a href="/coding_python#level-3-m" style={{ width: "100%" }} >
                                <div className='course-heading' >
                                    <div>
                                        <div className='course-title' >LEVEL 3</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}