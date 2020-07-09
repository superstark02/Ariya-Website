import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Drawer from '@material-ui/core/Drawer';
import { IconButton, Divider} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import LocalPhoneOutlinedIcon from '@material-ui/icons/LocalPhoneOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';

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

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function MyAppBaMobile(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div style={{ padding: '0px 15px' }} >
                <div style={{width:'100%',height:'50px'}} >
                    LOGO IMAGE
                </div>
                <List>
                    <a href='/' className='Link' ><ListItem button >
                        <ListItemIcon><HomeOutlinedIcon/></ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem></a>

                    <a href='/coding_courses' className='Link' ><ListItem button >
                        <ListItemIcon><ListAltOutlinedIcon/></ListItemIcon>
                        <ListItemText primary='Courses' />
                    </ListItem></a>

                    <a href='/coding_questions' className='Link' ><ListItem button >
                        <ListItemIcon><QuestionAnswerOutlinedIcon/></ListItemIcon>
                        <ListItemText primary='FAQs' />
                    </ListItem></a>

                    <a href='/coding_testimonials' className='Link'><ListItem button >
                        <ListItemIcon><SchoolOutlinedIcon/></ListItemIcon>
                        <ListItemText primary='Students Say' />
                    </ListItem></a>
                </List>
                <Divider/>
                <List>
                    <a href='/about_us' className='Link'><ListItem button >
                        <ListItemIcon><PeopleOutlineOutlinedIcon/></ListItemIcon>
                        <ListItemText primary='About Us' />
                    </ListItem></a>

                    <a href='/coding_contact' className='Link'><ListItem button >
                        <ListItemIcon><LocalPhoneOutlinedIcon/></ListItemIcon>
                        <ListItemText primary='Contact Us' />
                    </ListItem></a>
                </List>
            </div>
        </div>
    );

    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar style={{ backgroundColor: 'rgba(255,255,255,0.3)' }} >
                    <Toolbar style={{ backgroundColor: 'rgba(4, 191, 191,0.5)', display: 'flex', justifyContent: 'space-between' }} >
                        <Typography style={{ fontFamily: 'j', margin: '10px', fontSize: '20px', color: 'white' }} >
                            <Link to='/' className="Link" >{"<Coding Classes/>"}</Link>
                        </Typography>
                        <IconButton onClick={toggleDrawer('right', true)} color="inherit"><FaBars color='white' /></IconButton>
                        <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
                            {list('right')}
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </React.Fragment>
    )
}