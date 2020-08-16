import React, { Component } from 'react'
import MyAppBar from '../Components/AppBar'
import MyFooter from '../Components/Footer'
import emailjs from 'emailjs-com';
import './TrialClasses.css'

export class TrialClasses extends Component {

    sendMail = (e) => {
        e.preventDefault();
        console.log(e.target)
        emailjs.sendForm('gmail', 'sample', e.target, 'user_4y4gw3JRalVlGfHP1RZJS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            alert("Message was successfully sent.");
    }

    render() {
        return (
            <div>
                <MyAppBar />
                <div style={{ padding: "0 10%" }} >
                    <h1>
                        Contact Us
                    </h1>
                    <div>
                        After requesting a time, a member of our team will call you within two business days to review our program and student expectations.
                    </div>
                    <div className="trial-form-container" >
                        <div className="trial-form" >
                            <form onSubmit={this.sendMail} >
                                <input placeholder="Your Name*" required name="name" className="trial-input" ></input>
                                <input placeholder="Topic" name="topic" className="trial-input" ></input>
                                <input placeholder="Mobile Number" name="mobile" className="trial-input" ></input>
                                <input type='email' placeholder="Email*" required name="email" className="trial-input" ></input>
                                <input placeholder="Message*" required className="trial-input" name="message" style={{ height: "100px" }} ></input>
                                <input type="submit" className="trial-submit-button" value="SUBMIT" ></input>
                            </form>
                        </div>
                    </div>
                </div>
                <MyFooter />
            </div>
        )
    }
}

export default TrialClasses
