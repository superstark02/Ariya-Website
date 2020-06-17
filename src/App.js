import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AboutUs from './Pages/About'
import Testimonials from './Pages/Testimonials'
import Courses from './Pages/Courses'

export default function App(){
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about_us' component={AboutUs} />
                <Route exact path='/coding_courses' component={Courses} />
                <Route exact path='/coding_testimonials' component={Testimonials} />
            </Switch>
        </Router>
    )
}