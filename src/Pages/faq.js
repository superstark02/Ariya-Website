import React from 'react'
import MyAppBar from '../Components/AppBar'
import './faq.css'

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MyFooter from '../Components/Footer';
import MyAppBaMobile from '../Components/mAppBar';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: '100vh',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        padding: "20px",
        textAlign: "left"
    },
}));

export default function Faqs() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={{backgroundColor:"white"}} >
            <div className='responsive'>
                <MyAppBar />
                <div className='faq-landing' >
                    <div style={{ fontSize: "100px", fontWeight: "700", width: '50%', whiteSpace: "pre-wrap" }} >
                        Have a Question?
                        </div>
                    <div style={{ fontSize: "20px", width: '50%' }} >
                        Here is everything you need to know about us.
                        </div>
                </div>
                <div className='faq-wrap'>
                    <div className='faq-cat' >
                        <div className={classes.root} style={{ flexDirection: "column" }} >
                            <div style={{ padding: "0px 40px" }} >
                                <h3 style={{ margin: "0px 0px" }} >Categories:</h3>
                            </div>
                            <div className={classes.root} >
                                <Tabs
                                    orientation="vertical"
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="Vertical tabs example"
                                    className={classes.tabs}
                                >

                                    <Tab label="Courses" {...a11yProps(0)} style={{ textTransform: "none", textAlign: "left", fontSize: '15px' }} ></Tab>
                                    <Tab label="Teachers" {...a11yProps(1)} style={{ textTransform: "none", textAlign: "left", fontSize: '15px' }} />
                                    <Tab label="Timings" {...a11yProps(2)} style={{ textTransform: "none", textAlign: "left", fontSize: '15px' }} />
                                    <Tab label="Payments And Refunds" {...a11yProps(3)} style={{ textTransform: "none", textAlign: "left", fontSize: '15px' }} />
                                    <Tab label="Item Five" {...a11yProps(4)} style={{ textTransform: "none", textAlign: "left", fontSize: '15px' }} />
                                    <Tab label="Item Six" {...a11yProps(5)} style={{ textTransform: "none", textAlign: "left", fontSize: '15px' }} />
                                    <Tab label="Item Seven" {...a11yProps(6)} style={{ textTransform: "none", textAlign: "left", fontSize: '15px' }} />
                                </Tabs>
                                <TabPanel value={value} index={0}>
                                    <h1>Questions:</h1>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <h1>  Item Two</h1>
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <h1>Item Three</h1>
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    <h1> Item Four</h1>
                                </TabPanel>
                                <TabPanel value={value} index={4}>
                                    <h1> Item Five</h1>
                                </TabPanel>
                                <TabPanel value={value} index={5}>
                                    <h1>  Item Six</h1>
                                </TabPanel>
                                <TabPanel value={value} index={6}>
                                    <h1>Item Seven</h1>
                                </TabPanel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobile' >
                <MyAppBaMobile />
                <div className="faq-landing" >
                    <h1 style={{ fontWeight: "700" }} >Have a Question?</h1>
                    Here is everything you need to know about us.
                </div>

                <div style={{margin:"50px 0px"}} >
                    <ExpansionPanel elevation={0} >
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Category - 1</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                <b>Question?</b> <br/>
                                Ans. Answer.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel elevation={0} >
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Category - 2</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel elevation={0} >
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Category - 3</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel elevation={0} >
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Category - 4</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel elevation={0} >
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Category - 5</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                </div>

            </div>
            <MyFooter />
        </div>
    )
}