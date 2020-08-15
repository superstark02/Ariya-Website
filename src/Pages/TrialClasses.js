import React, { Component } from 'react'
import MyAppBaMobile from '../Components/mAppBar'
import MyAppBar from '../Components/AppBar'
import MyFooter from '../Components/Footer'
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import './TrialClasses.css'

export class TrialClasses extends Component {
    render() {
        return (
            <div>
                <div className="mobile" >
                    <MyAppBaMobile />
                </div>
                <div className="responsive" >
                    <MyAppBar/>
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
                            <input placeholder="Student Name" className="trial-input" ></input>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Choose Subjects</FormLabel>
                                <FormGroup aria-label="position" row>
                                <FormControlLabel
                                        value="end"
                                        control={<Checkbox color="primary" />}
                                        label="Mathematics"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="end"
                                        control={<Checkbox color="primary" />}
                                        label="Python Jr"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="end"
                                        control={<Checkbox color="primary" />}
                                        label="Python for Professionals"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="end"
                                        control={<Checkbox color="primary" />}
                                        label="Statistics"
                                        labelPlacement="end"
                                    />
                                </FormGroup>
                            </FormControl>
                            <input placeholder="Mobile Number" className="trial-input" ></input>
                            <input type='email' placeholder="Email" className="trial-input" ></input>
                            <button className="trial-submit-button" >SUBMIT</button>
                        </div>
                    </div>
                </div>
                <MyFooter />
            </div>
        )
    }
}

export default TrialClasses
