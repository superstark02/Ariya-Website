import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import './App.css'
import { useDencrypt } from "use-dencrypt-effect";
import { Box, Button, ButtonBase } from '@material-ui/core';
import python from './Images/python.png';
import java from './Images/java.png';
import vue from './Images/vue.png';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FaPython, FaVuejs, FaAngular } from 'react-icons/fa';
import ButtonBases from './Components/Images';



const values = ["<Hello World/>", "Coding is Awesome", "Keep Calm And Code", "Machine Learning"];

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
    color:'#04BFBF'
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

export default function ElevateAppBar(props) {

  const { result, dencrypt  } = useDencrypt();
  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 2000);

    return () => clearInterval(action);
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar style={{backgroundColor:'rgba(255,255,255,0.3)'}} >
          <Toolbar style={{backgroundColor:'rgba(4, 191, 191,0.5)'}} >
            <Typography variant="h6" style={{fontFamily:'j',margin:'20px',fontSize:'35px',color:'white'}} >{"<Coding Classes/>"}</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      
      <div class='wallpaper' ></div>
      <div class='para' >
        <Box boxShadow={10} style={{height:'auto',width:'50%'}} ><div class='bg-text'>{result}</div></Box>
          <Box boxShadow={10} style={{height:'auto',width:'50%'}} ><div class='long-text'>
            Text <br/>
            Text Text <br/>
            Text Text Text<br/>
            Text Text Text Text<br/>
            Text Text Text Text Text<br/>
            Text Text Text Text<br/>
            Text Text Text<br/>
          </div></Box>
      </div>
      <div style={{padding:'20px',backgroundColor:'white',width:'100%'}} >
        <div style={{display:'flex',justifyContent:'space-evenly',padding:'0px 20px',width:'100%'}} >
            <div><img alt="img" src={python} class='image' width='200px' height='200px' style={{marginTop:'-60px'}} /><div class='sub' >Python</div></div>
            <div><img alt="img" src={java} class='image' width='200px' height='200px' style={{marginTop:'-60px'}} /><div  class='sub' >Java</div></div>
            <div><img alt="img" src={vue} class='image' width='200px' height='200px' style={{marginTop:'-60px'}} /><div  class='sub' >Vue</div></div>
        </div>
      </div>
      <div style={{width:'100%',backgroundColor:'white',display:'flex',justifyContent:'space-around'}} >
        <Box style={{width:'90%',marginTop:'40px',borderRadius:'40px'}}>
          <div class='heading' >
            Learn Trending And Potential Languages....
          </div>
          <div class='long' >
            <List component="nav" aria-label="main mailbox folders">
              <ListItem button>
                <ListItemIcon>
                  <FaPython/>
                </ListItemIcon>
                <ListItemText primary="Coding" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <FaVuejs/>
                </ListItemIcon>
                <ListItemText primary="Is Awesome" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <FaAngular/>
                </ListItemIcon>
                <ListItemText primary="Learn Coding" />
              </ListItem>
            </List>
          </div>
        <ButtonBase style={{marginLeft:'40px',marginTop:'40px',marginBottom:'40px'}} >
        <Button class='glow' >
          ENROLL NOW
        </Button>
        </ButtonBase>
        </Box>
      </div>
      <div style={{padding:'40px',backgroundColor:'white'}} >
        <ButtonBases/>
      </div>
      
    </React.Fragment>
  );
}
