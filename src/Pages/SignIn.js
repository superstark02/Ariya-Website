import React from 'react'
import GoogleLogIn from 'react-google-login'
import FacebookLogin from 'react-facebook-login'

export class SignIn extends React.Component {

    responseGoogle = (response) => {
        console.log(response)
    }

    render() {
        return (
            <React.Fragment>
                <GoogleLogIn
                    clientId="651681146366-f0sr4j5cm2uvv1tg9n15ccrjmrmpue11.apps.googleusercontent.com"
                    buttonText="LogIn"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />

                <FacebookLogin
                    appId="274740753843880"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={console.log("Clicked")}
                    callback={this.responseGoogle} />

            </React.Fragment>
        )
    }
}