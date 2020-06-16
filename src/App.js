import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AboutUs from './Pages/About'
import Testimonials from './Pages/Testimonials'

export default class App extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about_us' component={AboutUs} />
                    <Route exact path='/coding_testimonials' component={Testimonials} />
                </Switch>
            </Router>
        )
    }
}