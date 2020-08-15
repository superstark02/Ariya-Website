import React, { Component } from 'react'
import MyAppBar from '../Components/AppBar'
import MyFooter from '../Components/Footer'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import './TrialClasses.css'

export class TrialClasses extends Component {
    render() {
        return (
            <div>
                <MyAppBar/>
                <div style={{padding:"0 10%"}} >
                    <h1>
                        Contact Us
                    </h1>
                    <div>
                        After requesting a time, a member of our team will call you within two business days to review our program and student expectations.
                    </div>
                    <div className="trial-form-container" >
                        <div className="trial-form" >
                            <form>
                                <input placeholder="Your Name*" className="trial-input" ></input>
                                <input placeholder="Topic" className="trial-input" ></input>  
                                <input placeholder="Mobile Number" className="trial-input" ></input>
                                <input type='email' placeholder="Email*" className="trial-input" ></input>
                                <input placeholder="Message*" className="trial-input" style={{height:"100px"}} ></input>
                                <button className="trial-submit-button" >SUBMIT</button>
                            </form>
                        </div>
                    </div>
                </div>
                <MyFooter/>
            </div>
        )
    }
}

export default TrialClasses
