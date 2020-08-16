import React, { Component } from 'react'
import MyAppBaMobile from '../Components/mAppBar'
import MyAppBar from '../Components/AppBar'
import MyFooter from '../Components/Footer'
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import emailjs from 'emailjs-com';
import './TrialClasses.css'

export class TrialClasses extends Component {

    state = {
        topic:""
    }

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

    handleChange = (event) => {
        this.setState({topic: this.state.topic + ", " + event.target.value})
      };

    render() {
        return (
            <div>
                <div className="mobile" >
                    <MyAppBaMobile />
                </div>
                <div className="responsive" >
                    <MyAppBar />
                </div>
                <div style={{ marginTop: "4vh", padding: "0 10%" }} >
                    <h1>
                        Request A Trial Class
                    </h1>
                    <div>
                        After requesting a time, a member of our team will call you within two business days to review our program and student expectations.
                    </div>
                    <div className="trial-form-container" >
                        <div className="trial-form" >
                            <form onSubmit={this.sendMail} >
                                <input placeholder="Your Name*" required name="name" className="trial-input" ></input>
                                <input type="hidden" value={this.state.topic} required name="topic" ></input>
                                <FormControl component="fieldset" name="topic" >
                                    <FormLabel component="legend">Choose Subjects</FormLabel>
                                    <FormGroup aria-label="position" row>
                                        <FormControlLabel
                                            value="Mathematics"
                                            control={<Checkbox value="Mathematics" onChange={this.handleChange} color="primary" />}
                                            label="Mathematics"
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            value="Python Jr"
                                            control={<Checkbox value="Python Jr" onChange={this.handleChange} color="primary" />}
                                            label="Python Jr"
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            value="Python for Professionals"
                                            control={<Checkbox value="Python for Professionals" onChange={this.handleChange} color="primary" />}
                                            label="Python for Professionals"
                                            labelPlacement="end"
                                            
                                        />
                                        <FormControlLabel
                                            value="Statistics"
                                            control={<Checkbox value="Statistics" onChange={this.handleChange} color="primary" />}
                                            label="Statistics"
                                            labelPlacement="end"
                                            
                                        />
                                    </FormGroup>
                                </FormControl>
                                <input placeholder="Mobile Number" name="mobile" className="trial-input" ></input>
                                <input type='email' placeholder="Email*" required name="email" className="trial-input" ></input>
                                <input type="hidden" name="message" value="This is a request for trial class" />
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
