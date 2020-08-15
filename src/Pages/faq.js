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
import { Link } from 'react-router-dom';

var curriculam = [
    {
        q: "Why do we not teach block programming and moving directly to actual coding?",
        a: "Basic programming languages like Block are good for very young kids to introduce them to the concept of breaking down larger tasks to micro-tasks. Python was initially created (over 20 years ago) for kids and it’s syntax and structure is adequately simple to start directly with the Python command language. "
    },
    {
        q: "What are the timings and size of each class?",
        a: "We work with the student groups to determine the best time for the class. Math and Python for Kids are usually held in the morning hours, Python for Professionals is conducted in the evening (U.S. time). We recommend having not more than 5 students in a class."
    },
    {
        q: "Does your math curriculum cover general topics or is tied to specific schools?",
        a: "We customize the math sessions based on the needs of our students. We provide learning sessions to cover specific topics if that is what the student / parent requests. We also provide sessions to cover whole or part of the curriculum of your specific school district."
    },
    {
        q: "Why do you not mention fees on your website?",
        a: "Our math and statistics courses are generally customized for the students. Additionally, the pricing is determined by the number of students in the class. Therefore, we provide a customized price for you based on your needs. We can ensure a very competitive pricing for the quality we are providing."
    },
    {
        q: "Why do we suggest group classes over private sessions?",
        a: "In our experience, students (especially kids) do best in a group setting by learning from each other. Since we keep the group sizes relatively small, we are able to ensure adequate and appropriate attention is provided to each student. "
    },
    {
        q: "What if my child is not comfortable learning the Python coding language?",
        a: "We have seen that kids generally do not have any blocks about learning a programming language in it’s true ‘technical’ form. Our course content and exercises are designed to leverage the curriculum that is currently taught to them in schools. Additionally, we start each group with free sessions to introduce them to Python and break the ice and have rarely encountered cases where a student said ‘this is too technical’. In fact, the feedback we have received is ‘wow, this is fun!’ "
    }

]

export default function Faqs() {

    return (
        <div style={{ backgroundColor: "white" }} >
            <div>
                <MyAppBar />
                <div style={{ marginTop: "4vh", padding: "5% 10%" }}  >
                    <h1>Frequently Asked Questions</h1>
                    {
                        curriculam.map(item => {
                            return (
                                <ExpansionPanel elevation={0} >
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography >{item.q}</Typography>
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
                        <Link to='/coding_contact' ><button className="trial-submit-button" >CONTACT US</button></Link>
                    </div>

                </div>
            </div>
            <MyFooter />
        </div>
    )
}