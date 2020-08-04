import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Drawer from '@material-ui/core/Drawer';
import { IconButton, Divider } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import LocalPhoneOutlinedIcon from '@material-ui/icons/LocalPhoneOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import ClassOutlinedIcon from '@material-ui/icons/ClassOutlined';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import logo from '../Images/logo.png'

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
        color: 'grey'
    },
    fullList: {
        width: 'auto',
        color: 'grey'
    },
});

export default function MyAppBar(props) {
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
            onKeyDown={toggleDrawer(anchor, false)}
            style={{ width: "300px" }}
        >
            <div style={{ padding: '0px 15px' }} >
                <div style={{ width: '100%' }} className="wrap" >
                    <div>
                        <div>
                            <img src={logo} style={{width:"50px",height:"50px"}} alt="s" />
                        </div>
                        <div style={{fontFamily: 'j'}} >
                            Ariya
                        </div>
                    </div>
                </div>
                <List>
                    <a href='/' className='Link' ><ListItem button >
                        <ListItemIcon><HomeOutlinedIcon /></ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem></a>

                    <ListItem style={{ padding: "0px" }} >
                        <Accordion elevation={0} >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <ListItemIcon><ListAltOutlinedIcon /></ListItemIcon>
                                <ListItemText style={{color:"grey"}} primary='Courses' />
                            </AccordionSummary>
                            <AccordionDetails >
                                <List >
                                    <a href="/python_kids" className='Link' ><ListItem button >
                                        <ListItemIcon></ListItemIcon>
                                        <ListItemText primary='Kid’s Python Program' />
                                    </ListItem></a>
                                    <a href="/python_professionals" className='Link' ><ListItem button >
                                        <ListItemIcon></ListItemIcon>
                                        <ListItemText primary='Python for Professionals' />
                                    </ListItem></a>
                                    <a href="/statistics_course" className='Link' ><ListItem button >
                                        <ListItemIcon></ListItemIcon>
                                        <ListItemText primary='Statistics' />
                                    </ListItem></a>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    </ListItem>

                    <ListItem style={{ padding: "0px" }} >
                        <Accordion elevation={0} >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <ListItemIcon><ListAltOutlinedIcon /></ListItemIcon>
                                <ListItemText style={{color:"grey"}} primary='About Us' />
                            </AccordionSummary>
                            <AccordionDetails >
                                <List >
                                    <a href='/about_us' className='Link' ><ListItem button >
                                        <ListItemIcon><PeopleOutlineOutlinedIcon /></ListItemIcon>
                                        <ListItemText primary='Our Philosophy' />
                                    </ListItem></a>                
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    </ListItem>


                    <a href='/trial_classes' className='Link' ><ListItem button >
                        <ListItemIcon><ClassOutlinedIcon /></ListItemIcon>
                        <ListItemText primary='Trial Class' />
                    </ListItem></a>

                    <a href='/coding_questions' className='Link' ><ListItem button >
                        <ListItemIcon><QuestionAnswerOutlinedIcon /></ListItemIcon>
                        <ListItemText primary='FAQs' />
                    </ListItem></a>

                </List>
                <Divider />
                <List>

                    <a href='/policy_and_privacy' className='Link'><ListItem button >
                        <ListItemIcon><AssignmentOutlinedIcon /></ListItemIcon>
                        <ListItemText primary='Privacy And Policy' />
                    </ListItem></a>


                    <a href='/coding_contact' className='Link'><ListItem button >
                        <ListItemIcon><LocalPhoneOutlinedIcon /></ListItemIcon>
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
                    <Toolbar style={{ backgroundColor: 'rgba(255,255,255,0.5)', display: 'flex', justifyContent: 'space-between', padding: "10px 50px" }} >
                        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", fontSize: '30px', fontFamily: 'j' }} >
                            <Link to='/' className="Link" >
                                <div style={{ margin: "0px", display: "flex", alignItems:"center" }} >
                                    <div>
                                        <img src={logo} style={{width:"60px", height:"60px",margin:"0px 30px"}} />
                                    </div>
                                    <div>
                                        Ariya
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer('right', true)} >
                            <FaBars color="inherit" />
                        </IconButton>
                        <Drawer anchor={"right"} open={state['right']} onClose={toggleDrawer('right', false)}>
                            {list("right")}
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </React.Fragment>
    )
}