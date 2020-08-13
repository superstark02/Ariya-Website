import React from 'react'
import './statistics-course.css'
import MyAppBar from '../Components/AppBar'
import MyAppBaMobile from '../Components/mAppBar'
import MyFooter from '../Components/Footer'
import image1 from '../Images/yellow.png'

export default class StatisticsCourse extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="responsive" >
                        <MyAppBar />
                    </div>
                    <div className="mobile" >
                        <MyAppBaMobile />
                    </div>
                    
                    <div className='python-header stats-bg' style={{height:"60vh"}}>
                        Statistics
                    </div>

                    <div className="aboutContent">
                    Statistical knowledge helps usage of the proper methods to collect the data, employ the correct analyses, and make effective decisions. Statistics allow you to evaluate claims based on quantitative evidence and help you differentiate between reasonable and dubious conclusions. Machine learning is designed to make the most accurate predictions possible, without relying on rules-based programming. Statistics is one of the key elements in understanding and developing machine learning and artificial intelligence. Our curriculum provides the basic knowledge necessary to start out in the field of Machine Learning. 
                    </div>

                    <div className="aboutContent">
                    We aim to ensure that our students have fully understood and absorbed the knowledge from our curriculum and therefore the duration of the course is indicative only.
                    </div>

                    <div className="faq-wrap" id='level-1' >
                        <div className='python-container' style={{marginTop:"30px"}} >
                            <h1 style={{fontFamily:"a"}} >
                                Probabilities
                            </h1>
                            <div className="content" >
                                <ul style={{fontSize:"16px", width:"60%"}} >
                                    <li>Describe and distinguish between continuous and discrete random variables.</li>
                                    <li>Define and distinguish between the probability density function, cumulative distribution function and inverse cumulative distribution function</li>
                                    <li>Calculate the probability of an event.</li>
                                    <li>Distinguish between independent and mutually exclusive events.</li>
                                    <li>Define joint probability, describe a probability matrix and calculate join probabilities.</li>
                                    <li>Define and calculation conditional probability and distinguish between conditional and unconditional probability.</li>
                                </ul>
                                <div>
                                    <img src={image1} />
                                </div> 
                            </div>
                               
                        </div>
                    </div>

                    <div className="faq-wrap" id='level-2' >
                        <div className='python-container' >
                            <h1 style={{fontFamily:"a"}} >
                                Bayesian Analysis
                            </h1>
                            <div className="content">
                                <ul style={{fontSize:"16px", width:"60%"}} >
                                    <li>Describe Bayes Theorem.</li>
                                    <li>Bayes theorem Vs Frequentist approach.</li>
                                    <li>Application of Bayes Theorem.</li>
                                </ul>
                                <div>
                                    <img src={image1} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="faq-wrap" id='level-3' >
                        <div className='python-container' >
                            <h1 style={{fontFamily:"a"}} >
                                Basic Statistics
                            </h1>
                            <div className="content">
                                <ul style={{fontSize:"16px", width:"60%"}} >
                                    <li>Calculate, interpret and apply the mean, standard deviation and variance of a random variable.</li>
                                    <li>Interpret and calculated the expected value of a discrete random variable.</li>
                                    <li>Calculate and Interpret the covariance and correlation between two random variables.</li>
                                    <li>Calculate the mean and variance of sums of variables.</li>
                                    <li>Describe the four central moments of a statistical variable or distribution.</li>
                                    <li>Interpret the skewness and kurtosis of a statistical distribution.</li>
                                    <li>Describe and interpret the best linear unbiased estimator</li>
                                </ul>
                                <div>
                                    <img src={image1} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="faq-wrap" id='level-3' >
                        <div className='python-container' >
                            <h1 style={{fontFamily:"a"}} >
                                Distributions
                            </h1>
                            <div className="content">
                                <ul style={{fontSize:"16px", width:"60%"}} >
                                    <li>Properties of different kinds of key distributions – uniform, Bernoulli, Binomial, Poisson, Normal, lognormal, Chi-squared, T and F distributions.</li>
                                    <li>Understand implications of Central Limit Theorem.</li>
                                    <li>I.I.D random variables and their implications and assumptions.</li>
                                    <li>Mixture distributions.</li>
                                </ul>
                                <div>
                                    <img src={image1} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="faq-wrap" id='level-3' >
                        <div className='python-container' >
                            <h1 style={{fontFamily:"a"}} >
                                Hypothesis Testing and Confidence Intervals
                            </h1>
                            <div className="content">
                                <ul style={{fontSize:"16px", width:"60%"}} >
                                    <li>Sample mean and sample variance.</li>
                                    <li>Construct and interpret confidence interval.</li>
                                    <li>One tailed and Two Tailed Distributions.</li>
                                    <li>Interpret results of hypothesis testing.</li>
                                </ul>
                                <div>
                                    <img src={image1} />
                                </div>
                            </div>        
                        </div>
                    </div>

                    <div className="faq-wrap" id='level-3' >
                        <div className='python-container' >
                            <h1 style={{fontFamily:"a"}} >
                                Regression
                            </h1>
                            <div className="content">
                                <ul style={{fontSize:"16px", width:"60%"}} >
                                    <li>Linear regression with one regressor.</li>
                                    <li>Interpret population regression function, regression coefficient, error term.</li>
                                    <li>OLS regression, assumptions and benefits.</li>
                                    <li>Hypothesis testing with single and multiple regressors.</li>
                                </ul>
                                <div>
                                    <img src={image1} />
                                </div>
                            </div>
                        </div>
                    </div>

                   

                    <MyFooter />
                </div>
            </React.Fragment>
        )
    }
}