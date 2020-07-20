import React from 'react'
import MyAppBar from '../Components/AppBar'
import MyAppBaMobile from '../Components/mAppBar'
import MyFooter from '../Components/Footer'
import './python.css'

export default class Stats extends React.Component{
    render() {
        return (
            <div>
                <div className='responsive' >
                    <MyAppBar/>

                    <div className='python-header stats-bg' style={{height:"60vh"}}>
                        Statistics
                    </div>

                    <div className="faq-wrap" id='level-1' >
                        <div className='python-container' style={{marginTop:"30px"}} >
                            <h1 style={{fontFamily:"j"}} >
                                Probabilities
                            </h1>
                            <ul style={{fontSize:"20px"}} >
                                <li>Describe and distinguish between continuous and discrete random variables.</li>
                                <li>Define and distinguish between the probability density function, cumulative distribution function and inverse cumulative distribution function</li>
                                <li>Calculate the probability of an event.</li>
                                <li>Distinguish between independent and mutually exclusive events.</li>
                                <li>Define joint probability, describe a probability matrix and calculate join probabilities.</li>
                                <li>Define and calculation conditional probability and distinguish between conditional and unconditional probability.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="faq-wrap" id='level-2' >
                        <div className='python-container' >
                            <h1 style={{fontFamily:"j"}} >
                                Bayesian Analysis
                            </h1>
                            <ul style={{fontSize:"20px"}} >
                                <li>Describe Bayes Theorem.</li>
                                <li>Bayes theorem Vs Frequentist approach.</li>
                                <li>Application of Bayes Theorem.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="faq-wrap" id='level-3' >
                        <div className='python-container' >
                            <h1 style={{fontFamily:"j"}} >
                                Basic Statistics
                            </h1>
                            <ul style={{fontSize:"20px"}} >
                                <li>Calculate, interpret and apply the mean, standard deviation and variance of a random variable.</li>
                                <li>Interpret and calculated the expected value of a discrete random variable.</li>
                                <li>Calculate and Interpret the covariance and correlation between two random variables.</li>
                                <li>Calculate the mean and variance of sums of variables.</li>
                                <li>Describe the four central moments of a statistical variable or distribution.</li>
                                <li>Interpret the skewness and kurtosis of a statistical distribution.</li>
                                <li>Describe and interpret the best linear unbiased estimator</li>
                            </ul>
                        </div>
                    </div>

                    <div className="faq-wrap" id='level-3' >
                        <div className='python-container' >
                            <h1 style={{fontFamily:"j"}} >
                                Distributions
                            </h1>
                            <ul style={{fontSize:"20px"}} >
                                <li>Properties of different kinds of key distributions – uniform, Bernoulli, Binomial, Poisson, Normal, lognormal, Chi-squared, T and F distributions.</li>
                                <li>Understand implications of Central Limit Theorem.</li>
                                <li>I.I.D random variables and their implications and assumptions.</li>
                                <li>Mixture distributions.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="faq-wrap" id='level-3' >
                        <div className='python-container' >
                            <h1 style={{fontFamily:"j"}} >
                                Hypothesis Testing and Confidence Intervals
                            </h1>
                            <ul style={{fontSize:"20px"}} >
                                <li>Sample mean and sample variance.</li>
                                <li>Construct and interpret confidence interval.</li>
                                <li>One tailed and Two Tailed Distributions.</li>
                                <li>Interpret results of hypothesis testing.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="faq-wrap" id='level-3' >
                        <div className='python-container' >
                            <h1 style={{fontFamily:"j"}} >
                                Regression
                            </h1>
                            <ul style={{fontSize:"20px"}} >
                                <li>Linear regression with one regressor.</li>
                                <li>Interpret population regression function, regression coefficient, error term.</li>
                                <li>OLS regression, assumptions and benefits.</li>
                                <li>Hypothesis testing with single and multiple regressors.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="faq-wrap" id='level-3' >
                        <div className='python-container' >
                            <div style={{marginBottom:"40px"}} >
                                Payment details, price, time period etc.
                            </div>
                            <button className="enroll-button" >ENROLL</button>
                        </div>
                    </div>

                </div>
                <div className='mobile' >
                    <MyAppBaMobile/>

                    <div className='python-header stats-bg' >
                        Statistics
                    </div>

                    <div className="faq-wrap" id='level-1' >
                        <div className='python-container' >
                            <h1 style={{fontFamily:"j"}} >
                                Probabilities
                            </h1>
                            <ul style={{fontSize:"20px"}} >
                                <li>Describe and distinguish between continuous and discrete random variables.</li>
                                <li>Define and distinguish between the probability density function, cumulative distribution function and inverse cumulative distribution function</li>
                                <li>Calculate the probability of an event.</li>
                                <li>Distinguish between independent and mutually exclusive events.</li>
                                <li>Define joint probability, describe a probability matrix and calculate join probabilities.</li>
                                <li>Define and calculation conditional probability and distinguish between conditional and unconditional probability.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="faq-wrap" id='level-2' >
                        <div className='python-container' >
                            <h1 style={{fontFamily:"j"}} >
                                Bayesian Analysis
                            </h1>
                            <ul style={{fontSize:"20px"}} >
                                <li>Describe Bayes Theorem.</li>
                                <li>Bayes theorem Vs Frequentist approach.</li>
                                <li>Application of Bayes Theorem.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="faq-wrap" id='level-3' >
                        <div className='python-container' >
                            <h1 style={{fontFamily:"j"}} >
                                Basic Statistics
                            </h1>
                            <ul style={{fontSize:"20px"}} >
                                <li>Calculate, interpret and apply the mean, standard deviation and variance of a random variable.</li>
                                <li>Interpret and calculated the expected value of a discrete random variable.</li>
                                <li>Calculate and Interpret the covariance and correlation between two random variables.</li>
                                <li>Calculate the mean and variance of sums of variables.</li>
                                <li>Describe the four central moments of a statistical variable or distribution.</li>
                                <li>Interpret the skewness and kurtosis of a statistical distribution.</li>
                                <li>Describe and interpret the best linear unbiased estimator</li>
                            </ul>
                        </div>
                    </div>

                    <div className="faq-wrap" id='level-3' >
                        <div className='python-container' >
                            <h1 style={{fontFamily:"j"}} >
                                Distributions
                            </h1>
                            <ul style={{fontSize:"20px"}} >
                                <li>Properties of different kinds of key distributions – uniform, Bernoulli, Binomial, Poisson, Normal, lognormal, Chi-squared, T and F distributions.</li>
                                <li>Understand implications of Central Limit Theorem.</li>
                                <li>I.I.D random variables and their implications and assumptions.</li>
                                <li>Mixture distributions.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="faq-wrap" id='level-3' >
                        <div className='python-container' >
                            <h1 style={{fontFamily:"j"}} >
                                Hypothesis Testing and Confidence Intervals
                            </h1>
                            <ul style={{fontSize:"20px"}} >
                                <li>Sample mean and sample variance.</li>
                                <li>Construct and interpret confidence interval.</li>
                                <li>One tailed and Two Tailed Distributions.</li>
                                <li>Interpret results of hypothesis testing.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="faq-wrap" id='level-3' >
                        <div className='python-container' >
                            <h1 style={{fontFamily:"j"}} >
                                Regression
                            </h1>
                            <ul style={{fontSize:"20px"}} >
                                <li>Linear regression with one regressor.</li>
                                <li>Interpret population regression function, regression coefficient, error term.</li>
                                <li>OLS regression, assumptions and benefits.</li>
                                <li>Hypothesis testing with single and multiple regressors.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="faq-wrap" id='level-3' >
                        <div className='python-container' >
                            <div style={{marginBottom:"40px"}} >
                                Payment details, price, time period etc.
                            </div>
                            <button className="enroll-button" >ENROLL</button>
                        </div>
                    </div>

                </div>
                <MyFooter/>
            </div>
        )
    }
    
}