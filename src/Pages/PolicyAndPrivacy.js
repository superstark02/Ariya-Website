import React, { Component } from 'react'
import MyAppBar from '../Components/AppBar'
import MyFooter from '../Components/Footer'
import MyAppBaMobile from '../Components/mAppBar'

export class PolicyAndPrivacy extends Component {
    render() {
        return (
            <div>
                <div className="responsive" >
                    <MyAppBar />
                </div>

                <div className="mobile" >
                    <MyAppBaMobile/>
                </div>

                <div style={{ textAlign: "center" }} >
                    <h1>Privacy And Policy</h1>
                </div>
                    
                
                <MyFooter />
            </div>
        )
    }
}

export default PolicyAndPrivacy
