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

const images = [
    {
        url: '/static/images/grid-list/breakfast.jpg',
        title: 'Level 1',
        width: '33%',
    },
    {
        url: '/static/images/grid-list/burgers.jpg',
        title: 'Level 2',
        width: '33%',
    },
    {
        url: '/static/images/grid-list/camera.jpg',
        title: 'Level 3',
        width: '33%',
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
}));

export default function Courses() {
    const { width, height } = useWindowSize();
    const classes = useStyles();
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
                    <h5>Subtitle of the page.</h5>
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
                <div className="coursesShow" >
                    <h1>For Professionals</h1>
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
            </div>
            <Footer/>
        </React.Fragment>
    )
}