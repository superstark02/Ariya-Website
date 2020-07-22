import React from 'react'
import MyAppBar from '../Components/AppBar'
import './faq.css'

import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function Faqs() {

    const classes = useStyles();

    return (
        <div style={{ backgroundColor: "white" }} >
            <div className='responsive'>
                <MyAppBar />
                <div style={{ marginTop: "4vh", padding: "0 10%" }}  >
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
                <div className="faq-landing" >
                    <h1 style={{ fontWeight: "700" }} >Have a Question?</h1>
                    Here is everything you need to know about us.
                </div>

                <div style={{ margin: "50px 0px" }} >
                    <ExpansionPanel elevation={0} >
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Category - 1</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                <b>Question?</b> <br />
                                Ans. Answer.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel elevation={0} >
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Category - 2</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel elevation={0} >
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Category - 3</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel elevation={0} >
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Category - 4</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel elevation={0} >
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Category - 5</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                </div>

            </div>
            <MyFooter />
        </div>
    )
}