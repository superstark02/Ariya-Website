import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AboutUs from './Pages/About'
import Testimonials from './Pages/Testimonials'
import Contact from './Pages/Contact'
import { SignIn } from './Pages/SignIn'
import Faqs from './Pages/faq'
import PyhtonDescription from './Pages/python'
import Stats from './Pages/stats'
import PolicyAndPrivacy from './Pages/PolicyAndPrivacy'
import CoursesForProfessionals from './Pages/CoursesForProfessionals'
import TrialClasses from './Pages/TrialClasses'
import Courses from './Pages/Courses'
import KidsPython from './Pages/python-kids'
import ProfessionalsPython from './Pages/python-professionals'
import StatisticsCourse from './Pages/statistics-course'
import MathsCourse from "./Pages/maths"

export default function App(){
    return(
        <Router>
            <Switch>
                <Route exact path='/about_us' component={AboutUs} />
                <Route exact path='/coding_courses' component={Courses} />
                <Route exact path='/python_kids' component={KidsPython} />
                <Route exact path='/python_professionals' component={ProfessionalsPython} />
                <Route exact path='/statistics_course' component={StatisticsCourse} />
                <Route exact path='/coding_contact' component={Contact} />
                <Route exact path='/coding_testimonials' component={Testimonials} />
                <Route exact path='/coding_signIn' component={SignIn} />
                <Route exact path='/maths' component={MathsCourse} />
                <Route exact path='/coding_questions' component={Faqs} />
                <Route exact path='/coding_python' component={PyhtonDescription} />
                <Route exact path='/coding_statistics' component={Stats} />
                <Route exact path='/policy_and_privacy' component={PolicyAndPrivacy} />
                <Route exact path='/courses_for_professionals' component={CoursesForProfessionals} />
                <Route exact path='/trial_classes' component={TrialClasses} />
                <Route exact path='/' component={Home} />
                <Route exact path='*' component={Home} />
            </Switch>
        </Router>
    )
}