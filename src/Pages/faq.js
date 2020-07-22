import React from 'react'
import MyAppBar from '../Components/AppBar'
import './faq.css'

import Typography from '@material-ui/core/Typography';
import MyFooter from '../Components/Footer';
import MyAppBaMobile from '../Components/mAppBar';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

var curriculam = [
    {
        q: "Quesion 1",
        a: "Answer 1"
    },
    {
        q: "Quesion 2",
        a: "Answer 2"
    },

]

export default function Faqs() {

    return (
        <div style={{ backgroundColor: "white" }} >
            <div>
                <div className="responsive" >
                    <MyAppBar />
                </div>
                <div style={{ marginTop: "4vh", padding: "5% 10%" }}  >
                    <h1>Frequently Asked Questions</h1>

                    <h2 >Curriculam</h2>
                    {
                        curriculam.map(item => {
                            return (
                                <ExpansionPanel elevation={0} >
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography >{item.q}?</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            Ans. {item.a}
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            )
                        })
                    }

                    <h2>Classes</h2>
                    {
                        curriculam.map(item => {
                            return (
                                <ExpansionPanel elevation={0} >
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography >{item.q}?</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            Ans. {item.a}
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            )
                        })
                    }

                    <div style={{ width: "100%", backgroundColor: "#f7f7f7", padding: "20px", borderRadius: "10px" }} >
                        <div style={{ margin: "20px 0px" }} >
                            Still have Questions, Do reach out to us and we will be glad to help.
                        </div>
                        <button className="trial-submit-button" >CONTACT US</button>
                    </div>

                </div>
            </div>
            <div className='mobile' >
                <MyAppBaMobile />

            </div>
            <MyFooter />
        </div>
    )
}