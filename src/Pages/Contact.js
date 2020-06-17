import React from 'react'
import MyAppBar from '../Components/AppBar'
import MyAppBaMobile from '../Components/mAppBar'
import Footer from '../Components/Footer'
import './Contact.css'
import useWindowSize from 'react-use/lib/useWindowSize'
import image from '../Images/contact.png'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    },
})(TextField);

export default function Contact() {
    const { width, height } = useWindowSize();
    return (
        <React.Fragment>
            <div className='responsive'>
                <MyAppBar />
                <div className='page' style={{ width: width, height: height }} >
                    <div className='elevated' style={{ width: '90%', height: '70%' }}>
                        <div>
                            <img src={image} alt="s"  />
                        </div>
                        <div>
                            <h1 style={{ fontWeight: 'bold' }} >Drop Us A Line</h1>
                            <div>
                                <form noValidate autoComplete="off">
                                    <div style={{ margin: '10px' }} ><CssTextField id="standard-basic" label="Full Name" /></div>
                                    <div style={{ margin: '10px' }} ><CssTextField id="standard-basic" label="Email" /></div>
                                    <div style={{ margin: '10px' }} ><CssTextField id="standard-basic" multiline fullWidth label="Message" /></div>
                                </form>
                            </div>
                            <div style={{ margin: '30px 0px' }} >
                                <Button
                                    style={{
                                        color: 'white', fontWeight: '700', padding: '10px 20px',
                                        backgroundImage: 'linear-gradient(to bottom right,#f50057,#f73378)',
                                        borderRadius: '10px',
                                        boxShadow: '0px 0px 10px #f50057',
                                        fontSize: '15px'
                                    }}
                                    variant='contained'>
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobile' >
                <MyAppBaMobile />
                <div className='page'>
                    <div className='elevated'>
                        <div>
                            <img src={image} alt="s" width='300px' style={{marginTop:'-50px'}} />
                        </div>
                        <div>
                            <h1 style={{ fontWeight: 'bold' }} >Drop Us A Line</h1>
                            <div>
                                <form noValidate autoComplete="off">
                                    <div style={{ margin: '10px' }} ><CssTextField id="standard-basic" label="Full Name" /></div>
                                    <div style={{ margin: '10px' }} ><CssTextField id="standard-basic" label="Email" /></div>
                                    <div style={{ margin: '10px' }} ><CssTextField id="standard-basic" multiline fullWidth label="Message" /></div>
                                </form>
                            </div>
                            <div style={{ margin: '30px 0px' }} >
                                <Button
                                    style={{
                                        color: 'white', fontWeight: '700', padding: '10px 20px',
                                        backgroundImage: 'linear-gradient(to bottom right,#f50057,#f73378)',
                                        borderRadius: '10px',
                                        boxShadow: '0px 0px 10px #f50057',
                                        fontSize: '15px'
                                    }}
                                    variant='contained'>
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}