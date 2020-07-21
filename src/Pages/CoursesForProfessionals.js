import React, { Component } from 'react'
import MyAppBaMobile from '../Components/mAppBar'
import MyAppBar from '../Components/AppBar'
import MyFooter from '../Components/Footer'

export class CoursesForProfessionals extends Component {
    render() {
        return (
            <div>
                <div className="mobile" >
                    <MyAppBaMobile/>
                </div>
                <div className="responsive" >
                    <MyAppBar/>
                </div>
                <div className="wrap" >
                    <h2>Courses for Adults</h2>
                </div>
                <MyFooter/>
            </div>
        )
    }
}

export default CoursesForProfessionals
