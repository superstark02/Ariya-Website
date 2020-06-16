import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Link } from 'react-router-dom';

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        backgroundColor: "rgba( 109, 15, 242,0.5)",
        color: '#04BFBF'
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


export default function MyAppBar(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar style={{ backgroundColor: 'rgba(255,255,255,0.3)' }} >
                    <Toolbar style={{ backgroundColor: 'rgba(4, 191, 191,0.5)' }} >
                        <Typography variant="h6" style={{ fontFamily: 'j', margin: '20px', fontSize: '35px', color: 'white' }} >{"<Coding Classes/>"}</Typography>
                        <div style={{ position: 'absolute', right: '0', marginLeft: 'auto', padding: '0px 40px', display: 'flex' }} >
                            <Link to='' className='Link' ><div class='topButton' >Sign Up</div></Link>
                            <Link to='' className='Link' ><div class='topButton' >Courses</div></Link>
                            <Link to='/coding_testimonials' className='Link'><div class='topButton' >Testimonials</div></Link>
                            <Link to='/about_us' className='Link'><div class='topButton' >About Us</div></Link>
                            <div class='topButton'  >Contact Us</div>
                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </React.Fragment>
    )
}