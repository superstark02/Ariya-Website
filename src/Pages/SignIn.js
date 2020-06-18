import React from 'react'
import GoogleLogIn from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import MyAppBar from '../Components/AppBar'
import MyAppBaMobile from '../Components/mAppBar'
import image from '../Images/signIn.png'
import Footer from '../Components/Footer'
import './SignIn.css'

export class SignIn extends React.Component {

    responseGoogle = (response) => {
        console.log(response)
    }

    render() {
        return (
            <React.Fragment>
                <div className='responsive'>
                    <MyAppBar />
                    <div style={{ display: 'flex', justifyContent: 'space-around' }} >
                        <div className='signIn' >
                            <div>
                                <img alt="s" src={image} width="500px" />
                            </div>
                            <div className="signInButton" >
                                <h1>Sign In</h1>
                                <div style={{width:'100%',margin:'10px 0px'}} >
                                    <h5>Sign In with Google</h5>
                                    <GoogleLogIn
                                        clientId="651681146366-f0sr4j5cm2uvv1tg9n15ccrjmrmpue11.apps.googleusercontent.com"
                                        buttonText="LogIn"
                                        onSuccess={this.responseGoogle}
                                        onFailure={this.responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                        disabledStyle
                                        style={{width:'100%'}}
                                    />
                                </div>
                                <div>Or</div> 
                                <div>
                                    <h5>Sign In with Facebook</h5>
                                    <FacebookLogin
                                        appId="274740753843880"
                                        autoLoad={true}
                                        fields="name,email,picture"
                                        onClick={console.log("Clicked")}
                                        callback={this.responseGoogle} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mobile' >
                    <MyAppBaMobile />
                    <div style={{ display: 'flex', justifyContent: 'space-around' }} >
                        <div className='signIn' >
                            <div>
                                <img alt="s" src={image} width="300px" style={{marginTop:'-70px'}} />
                            </div>
                            <div className="signInButton" >
                                <div style={{width:'100%',margin:'10px 0px'}} >
                                    <h5>Sign In with Google</h5>
                                    <GoogleLogIn
                                        clientId="651681146366-f0sr4j5cm2uvv1tg9n15ccrjmrmpue11.apps.googleusercontent.com"
                                        buttonText="LogIn"
                                        onSuccess={this.responseGoogle}
                                        onFailure={this.responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                        disabledStyle
                                        style={{width:'100%'}}
                                    />
                                </div>
                                <div>Or</div> 
                                <div>
                                    <h5>Sign In with Facebook</h5>
                                    <FacebookLogin
                                        appId="274740753843880"
                                        autoLoad={true}
                                        fields="name,email,picture"
                                        onClick={console.log("Clicked")}
                                        callback={this.responseGoogle} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}