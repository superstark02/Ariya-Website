import React from 'react'
import MyAppBar from '../Components/AppBar'
import MyAppBaMobile from '../Components/mAppBar'
import MyFooter from '../Components/Footer'
import './python.css'

export default class PyhtonDescription extends React.Component{
    render() {
        return (
            <div>
                <div className='responsive' >
                    <MyAppBar/>

                    <div className='python-header' >
                        Python
                    </div>

                    <div className="faq-wrap" id='level-1' >
                        <div className='python-container' >
                            <h1 style={{fontFamily:"j"}} >
                                Level  1
                            </h1>
                            Details of the course.
                        </div>
                    </div>

                    <div className="faq-wrap" id='level-2' >
                        <div className='python-container' >
                            <h1 style={{fontFamily:"j"}} >
                                Level  2
                            </h1>
                            Details of the course.
                        </div>
                    </div>

                    <div className="faq-wrap" id='level-3' >
                        <div className='python-container' >
                            <h1 style={{fontFamily:"j"}} >
                                Level  3
                            </h1>
                            Details of the course.
                        </div>
                    </div>

                </div>
                <div className='mobile' >
                    <MyAppBaMobile/>

                    <div className='python-header' >
                        Python
                    </div>

                    <div className="faq-wrap" id='level-1-m' >
                        <div className='python-container' >
                            <h1 style={{fontFamily:"j"}} >
                                Level  1
                            </h1>
                            Details of the course.
                        </div>
                    </div>

                    <div className="faq-wrap" id='level-2-m' >
                        <div className='python-container' >
                            <h1 style={{fontFamily:"j"}} >
                                Level  2
                            </h1>
                            Details of the course.
                        </div>
                    </div>

                    <div className="faq-wrap" id='level-3-m' >
                        <div className='python-container' >
                            <h1 style={{fontFamily:"j"}} >
                                Level  3
                            </h1>
                            Details of the course.
                        </div>
                    </div>
                </div>
                <MyFooter/>
            </div>
        )
    }
    
}