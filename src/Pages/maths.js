import React from 'react'
import '../CSS/Pages/stats.css'
import '../CSS/Pages/python-kids.css'
import MyAppBar from '../Components/AppBar'
import MyFooter from '../Components/Footer'

export default class Maths extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div>
                    <MyAppBar />
                    <div style={{minHeight:"70vh"}} >
                        <div>
                            <h1 style={{ fontFamily: "a" }}>
                                Mathematics
                            </h1>
                        </div>

                        <div className="wrap" >
                            <div style={{ width: "80%", textAlign: "left", margin: "20px 0px" }} className="kids-courses" >
                                <ul className="kids-content" style={{fontSize:"20px"}} >
                                    <li style={{lineHeight:"50px"}} >Help a solid foundation in basic Math concepts that are taught in grade school</li>
                                    <li style={{lineHeight:"50px"}} >Our teachers have substantial training and experience in teaching kids of all ages</li>
                                    <li style={{lineHeight:"50px"}} >Sessions are grouped by grade and school curriculum</li>
                                </ul>
                                <div className="lastpara">
                                    <strong>Duration – Sessions are customized to the need of the students</strong>
                                </div>
                            </div>
                        </div>

                        <div className="wrap" >
                            <div className="kids-courses" >
                            </div>
                        </div>
                    </div>

                    <MyFooter />
                </div>
            </React.Fragment>
        )
    }
}