import React from 'react'
import Confetti from 'react-confetti'
import './Courses.css'
import useWindowSize from 'react-use/lib/useWindowSize'
import image from '../Images/coursesBG.png'
import MyAppBar from '../Components/AppBar'
import python from '../Images/python.png'
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Footer from '../Components/Footer'
import MyAppBaMobile from '../Components/mAppBar'
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import statistics from '../Images/stats.png'
import aws from '../Images/aws.png'
import devOps from '../Images/devOps.png'
import SignUp from '../Components/SignUp'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ButtonBases from '../Components/Images'

const images = [
    {
        url: 'https://image.freepik.com/free-vector/programmers-concept-with-flat-design_23-2147849844.jpg',
        title: 'Level 1',
        width: '33%',
        t: 'Level 1- Foundational',
        details: <div>{'3 months- $xxx per month/ 8 classes per month.'}
            <br />Kids will be learning:
                <ul>
                    <li>History of python language,</li>
                    <li>Core objects,</li>
                    <li>Built in functions,</li>
                    <li>Conditional statements and loops.</li>
                </ul>    
        </div>
    },
    {
        url: 'https://image.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg',
        title: 'Level 2',
        width: '33%',
        t: 'Level 2- Intermediate',
        details: <div>{'9 months - $xxx per month/ 8 classes per month.'}
            <br />In this level, kids will be learning:
            <ul>
                <li>Functions,</li>
                <li>Filing,</li>
                <li>Python modules and packages.</li>
            </ul>   
        </div>
    },
    {
        url: 'https://image.freepik.com/free-vector/programmers-concept-with-flat-design_23-2147841208.jpg',
        title: 'Level 3',
        width: '33%',
        t: 'Level 3- Advanced ',
        details: <div>{'18 months- $xxx per month/ 8 classes per month'}
            <br />In this level:
            <ul>
                <li>Exceptional handling</li>
                <li>Exceptional objects-oriented python</li>
            </ul>
        </div>
    },
];

const images1 = [
    {
        url: statistics,
        title: 'Statistics',
        width: '33%',
        t: 'Statistics',
    },
    {
        url: aws,
        title: 'AWS',
        width: '33%',
        t: 'Amazon Web Services',
    },
    {
        url: devOps,
        title: 'DevOps',
        width: '33%',
        t: 'DevOps',
    },
];


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
    container: {
        display: 'flex',
    },
    paper: {
        margin: theme.spacing(1),
    },
    polygon: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1,
    },
}));

export default function Courses() {
    const { width, height } = useWindowSize();
    const classes = useStyles();

    const [checked, setChecked] = React.useState(false);
    const [checked1, setChecked1] = React.useState(false);

    const [title, setTitle] = React.useState();
    const [title1, setTitle1] = React.useState();
    const [para, setPara] = React.useState();
    const [para1, setPara1] = React.useState();


    const handleChange = (details, title) => {
        if (!checked) {
            setChecked((prev) => !prev);
        }
        setTitle(title)
        setPara(details)
    };

    const handleChange1 = (details, title) => {
        if (!checked1) {
            setChecked1((prev) => !prev);
        }
        setTitle1(title)
        setPara1(details)
    };

    return (
        <React.Fragment>
            <div className='responsive' >
                <MyAppBar />

                <div className='wrap' style={{ width: width, height: height }} >
                    <Confetti
                        width={width}
                        height={height}
                        numberOfPieces={100}
                        gravity={0.03}
                        style={{ position: 'absolute', width: width, height: height }}
                    />
                    <div className='conForeground' style={{ height: height }} >
                        <div>
                            Coding Courses
                    <h5>Browse through our online courses.</h5>
                        </div>
                    </div>
                    <div className='conImage' style={{ height: height }} >
                        <div className='courseText' >
                            <img alt="s" src={image} width='500px' />
                        </div>
                    </div>
                </div>
                <div className="coursesShow" >
                    <h1><img src={python} alt="s" width="50px" />  Python For Kids</h1>
                </div>
                <div className={classes.root}>
                    {images.map((image) => (
                        <ButtonBase
                            focusRipple
                            key={image.title}
                            className={classes.image}
                            focusVisibleClassName={classes.focusVisible}
                            style={{
                                width: image.width,
                            }}
                            onClick={() => { handleChange(image.details, image.t) }}
                        >
                            <span
                                className={classes.imageSrc}
                                style={{
                                    backgroundImage: `url(${image.url})`,
                                }}
                            />
                            <span className={classes.imageBackdrop} />
                            <span className={classes.imageButton}>
                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    color="inherit"
                                    className={classes.imageTitle}
                                >
                                    {image.title}
                                    <span className={classes.imageMarked} />
                                </Typography>
                            </span>
                        </ButtonBase>
                    ))}
                </div>

                <div>
                    <div>
                        <div className={classes.container}>
                            <Collapse in={checked}>
                                <Paper elevation={4} className={classes.paper}>
                                    <div style={{ width: width, padding: '40px' }} >
                                        <h3>{title}</h3>
                                        <p className='courseDes' >
                                            {para}
                                        </p>
                                    </div>
                                </Paper>
                            </Collapse>
                        </div>
                    </div>
                </div>

                <div className="coursesShow" >
                    <h1>For Professionals</h1>
                </div>
                <div className={classes.root}>
                    {images1.map((image) => (
                        <ButtonBase
                            focusRipple
                            key={image.title}
                            className={classes.image}
                            focusVisibleClassName={classes.focusVisible}
                            style={{
                                width: image.width,
                            }}
                            onClick={() => { handleChange1(image.details, image.t) }}
                        >
                            <span
                                className={classes.imageSrc}
                                style={{
                                    backgroundImage: `url(${image.url})`,
                                }}
                            />
                            <span className={classes.imageBackdrop} />
                            <span className={classes.imageButton}>
                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    color="inherit"
                                    className={classes.imageTitle}
                                >
                                    {image.title}
                                    <span className={classes.imageMarked} />
                                </Typography>
                            </span>
                        </ButtonBase>
                    ))}
                </div>
                <div>
                    <div className={classes.container}>
                        <Collapse in={checked1}>
                            <Paper elevation={4} className={classes.paper}>
                                <div style={{ width: width, height: '300px', padding: '40px' }} >
                                    <h3>{title1}</h3>
                                    <p className='courseDes' >
                                        {para1}
                                    </p>
                                </div>
                            </Paper>
                        </Collapse>
                    </div>
                </div>
                <div style={{ width: '100%', display: 'flex', alignContent: 'center', justifyContent: 'space-around', margin: '60px 0px' }} >
                    <SignUp />
                </div>
            </div>
            <div className='mobile' >
                <MyAppBaMobile />
            </div>

            <div className='mobile' >
                <div className='wrap' style={{ width: width, height: 2 * height / 3 }} >
                    <Confetti
                        width={width}
                        height={height}
                        numberOfPieces={100}
                        gravity={0.03}
                        style={{ position: 'absolute', width: width, height: 2 * height / 3 }}
                    />
                    <div className='conForeground' style={{ height: 2 * height / 3 }} >
                        <div>
                            <div>
                                Coding Courses
                                <h5>Browse through our online courses.</h5>
                            </div>
                            <div className='courseText' >
                                <img alt="s" src={image} width='200px' />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div style={{width:'100%',textAlign:'center'}} >
                        <h3><img src={python} alt="s" width='30px' ></img> Python</h3>
                    </div>
                    {
                        images.map(item => {
                            return (
                                <ExpansionPanel elevation={0} >
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>{item.t}</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails style={{display:'block'}} >
                                        <div>{item.details}</div>
                                        <div className='courseImage' style={{backgroundImage:"url("+item.url+")"}} >

                                        </div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            )
                        })
                    }
                </div>

                <div>
                    <div style={{width:'100%',textAlign:'center'}} >
                        <h3>For Professionals</h3>
                    </div>
                    {
                        images1.map(item => {
                            return (
                                <ExpansionPanel elevation={0}>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>{item.title}</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <div>{item.details}</div>
                                        <div className='courseImage' style={{backgroundImage:"url("+item.url+")"}} >

                                        </div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            )
                        })
                    }
                </div>
                <div style={{margin:'20px 0px'}} >
                    <ButtonBases/>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}