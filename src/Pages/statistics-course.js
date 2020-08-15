import React from 'react'
import '../CSS/Pages/stats.css'
import MyAppBar from '../Components/AppBar'
import MyFooter from '../Components/Footer'
import image1 from '../Images/Stats/Probabilities.jpg'
import image2 from '../Images/Stats/bayes.jpg'
import image3 from '../Images/Stats/distribution.jpg'
import image4 from '../Images/Stats/HYPOTHESIS.jpg'
import image5 from '../Images/Stats/REGRESSION.jpg'
import image6 from '../Images/Stats/reg.png'

const courses = [
    {
        name: "PROBABILITIES",
        image: image1,
        color: "#e37b3e"
    },
    {
        name: "BAYESIAN ANALYSIS",
        image: image2,
        color: "#45b29c"
    },
    {
        name: "BASIC STATISTICS",
        image: image3,
        color: "#f0ca4e"
    },
    {
        name: "DISTRIBUTIONS",
        image: image6,
        color: "#e37b3e"
    },
    {
        name: "HYPOTHESIS TESTING",
        image: image4,
        color: "#45b29c"
    },
    {
        name: "REGRESSION ANLYSIS",
        image: image5,
        color: "#f0ca4e"
    },
]

export default class StatisticsCourse extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div>
                    <MyAppBar />
                    <div className='python-header stats-bg' style={{ height: "60vh" }}>
                        Statistics
                    </div>

                    <div className="wrap" >
                        <div className="stats-content" style={{textAlign:"left",fontSize:"20px"}} >
                            <ul>
                                <li style={{margin:"10px 0px"}} >Machine learning is designed to make the most accurate predictions possible, without relying on rules-based programming.</li>
                                <li style={{margin:"10px 0px"}} >Statistics is one of the key elements in understanding and developing machine learning and artificial intelligence.</li>
                                <li style={{margin:"10px 0px"}} >Our curriculum provides the basic knowledge necessary to start out in the field of Machine Learning.</li>
                            </ul>
                        </div>
                        <div className="stats-content" style={{fontSize:"20px",textAlign:"left"}} >
                            We aim to ensure that our students have fully understood and absorbed the knowledge
                            from our curriculum and therefore the duration of the course is indicative only.
                        </div>
                    </div>

                    <div className="wrap" >
                        <div className="stats-courses" >
                            {
                                courses.map(item => {
                                    return (
                                        <div className="stats-card" >
                                            <div className="stats-title" style={{color:item.color}} >
                                                {item.name}
                                            </div>
                                            <div className="wrap" >
                                                <img alt={item.name} className="stats-image" src={item.image} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <MyFooter />
                </div>
            </React.Fragment>
        )
    }
}