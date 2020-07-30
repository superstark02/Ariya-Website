import React from 'react';
import './Courses.css';
import MyAppBar from '../Components/AppBar';
import MyAppBaMobile from '../Components/mAppBar';
import MyFooter from '../Components/Footer';
import { Link } from 'react-router-dom';
import Image1 from '../Images/python.png';
import Image2 from '../Images/python.png';
import Image3 from '../Images/stats.png';

var courses = [
    {
        name: "Kid’s Python Program",
        image: Image1,
        age: "Suggested Age: 9+ years",
        descp: "We have split our curriculum for Python for kids into multiple levels, each encompassing key themes and technical concepts.  Each level starts with the basics of the theme and then builds on it as the sessions progress. We aim to ensure that our students have fully understood and absorbed the knowledge for each level and therefore the duration of each level is indicative only.",
        url: "/python_kids"
    },
    {
        name: "Python for Professionals",
        image: Image2,
        age: "Suggested Age: 9+ years",
        descp: "We have trained professionals for all levels of experience and streams – from high school and college students, to professionals working in the IT industry for 20+ years. Our course and exercises are designed to gain a deep understanding about Python’s programming concepts and develop robust coding skills with practical examples. Most of the students that take this course sign up for the AI and Machine Learning course to elevate their Pythion skills to the next level.",
        url: "/python_professionals"
    },
    {
        name: "Statistics",
        image: Image3,
        age: "Suggested Age: 12+ years",
        descp: "Statistical knowledge helps usage of the proper methods to collect the data, employ the correct analyses, and make effective decisions. Statistics allow you to evaluate claims based on quantitative evidence and help you differentiate between reasonable and dubious conclusions. Machine learning is designed to make the most accurate predictions possible, without relying on rules-based programming. Statistics is one of the key elements in understanding and developing machine learning and artificial intelligence. Our curriculum provides the basic knowledge necessary to start out in the field of Machine Learning.",
        url: "/statistics_course"
    }
]

export default class Courses extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="responsive" >
                        <MyAppBar />
                        <div style={{ width: "100%", padding: "0px 10vw" }} >
                        <h1>Programs Offered</h1>
                        <div className="course-wrap" style={{ textAlign: "center", padding: "0px 50px" }} >
                            Learning to code is like learning a brand new language. To excel and to become fluent, it needs commitment, continual exercise and regular immersion.<br /><br />

                            Ariya's core programs provide students with continuous learning module after module, to progressively build programming knowledge right from the basics to the advanced technology.
                            Our cutting edge curriculum is dynamic and has been curated and refined by seasoned industry specialists along with internal technology team.
                            <br />The programs below are laid out by appropriate core program category. Do reach out to our team for a free consultation.
                        </div>
                        <div className="course-wrap" style={{ alignItems: "inherit" }} >
                            {
                                courses.map(item => {
                                    return (
                                        
                                        <div className="course-card" >
                                            <h2>{item.name}</h2>
                                            
                                            <div className="paras">
                                                <div style={{ objectFit: "cover"}}>
                                                    <img alt="s" src={item.image}></img>
                                                </div>
                                                <div style={{ height: "150px" }}>
                                                    <p>
                                                        {item.descp}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="wrap"  >
                                                <Link to={item.url}>
                                                    
                                                    <button className="courses-link-button" >
                                                        Learn More
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    </div>
                    <div className="mobile" >
                        <MyAppBaMobile />
                        <div style={{ width: "100%", padding: "0px 10vw" }} >
                        <h1>Programs Offered</h1>
                        <div className="course-wrap" style={{ textAlign: "center", padding: "0px 50px" }} >
                            Learning to code is like learning a brand new language. To excel and to become fluent, it needs commitment, continual exercise and regular immersion.<br /><br />

                            Ariya's core programs provide students with continuous learning module after module, to progressively build programming knowledge right from the basics to the advanced technology.
                            Our cutting edge curriculum is dynamic and has been curated and refined by seasoned industry specialists along with internal technology team.
                            <br />The programs below are laid out by appropriate core program category. Do reach out to our team for a free consultation.
                        </div>
                        <div className="course-wrap" style={{ alignItems: "inherit" }} >
                            {
                                courses.map(item => {
                                    return (
                                        
                                        <div className="course-card" >
                                            <h2>{item.name}</h2>
                                            
                                            <div className="paras">
                                                <div style={{ objectFit: "cover"}}>
                                                    <img alt="s" src={item.image}></img>
                                                </div>
                                                <div style={{ height: "150px" }}>
                                                    <p>
                                                        {item.descp}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="wrap"  >
                                                <Link to={item.url}>
                                                    
                                                    <button className="courses-link-button" >
                                                        Learn More
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    </div>
                    
                    <MyFooter />
                </div>
            </React.Fragment>
        )
    }
}