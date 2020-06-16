import React from 'react';
import './App.css'
import { useDencrypt } from "use-dencrypt-effect";
import { Box, Button, ButtonBase } from '@material-ui/core';
import python from './Images/python.png';
import devops from './Images/devOps.png'
import aws from './Images/aws.png'
import stats from './Images/stats.png'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ButtonBases from './Components/Images';
import ImageGridList from './Components/Features';
import MyCode from './Components/code';
import SignUp from './Components/SignUp';
import SplashScreen from './Components/SplashScreen';
import MyAppBar from './Components/AppBar';
import MyAppBaMobile from './Components/mAppBar';
import CloudCircleOutlinedIcon from '@material-ui/icons/CloudCircleOutlined';
import StorageOutlinedIcon from '@material-ui/icons/StorageOutlined';
import MyFooter from './Components/Footer';
import { Carousel } from './Components/Carousel';

const values = ["<Hello World/>", "Coding is Awesome", "Keep Calm And Code", "Machine Learning"];
const first = <div>
  Artificial intelligence (AI) and machine learning is now considered to be one of the biggest innovations since the microchip.
  Some of the ways in which they impact our lives:
  <ul>
    <li>Self-Driving Cars and Automated Transportation</li>
    <li>Taking Over Dangerous Jobs</li>
    <li>Enhanced Health Care</li>
  </ul>
</div>

const second = <div>Cloud computing is perhaps the most flamboyant technological innovation of the 21st century.
   This is because it has seen the fastest adoption into the mainstream than any other technology in the domain.<br></br>
  <br></br>
   In addition to this, emerging technologies such as Artificial Intelligence, distributed ledger technology,
   and many other capabilities are becoming available as services through cloud computing.
</div>

const third = <div>Our society is a network society;
that is, a society constructed around personal and organizational networks powered by
   digital networks and communicated by the Internet.<br /><br />
   Modern technology has paved the way for multi-functional devices like the smartwatch and the smartphone.
    Computers are increasingly faster, more portable, and higher-powered than ever before.
</div>

export default function Home() {
  const [screen, setScreen] = React.useState(true);
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    setScreen(true)
    setInterval(() => { setScreen(false) }, 2000);
    let i = 0;
    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 3000);

    return () => clearInterval(action);
  }, []);

  if (screen) {
    return <SplashScreen />
  }

  else {
    return (
      <React.Fragment>
        <div className='responsive' >
          <MyAppBar />
          <div class='wallpaper' ></div>
          <div class='para'>
            <Box boxShadow={10} style={{ height: 'auto', width: '600px' }} ><div class='bg-text'>{result}</div></Box>
            <Box boxShadow={10} style={{ height: 'auto', width: '600px' }} ><div class='long-text'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div></Box>
          </div>

          <div style={{ width: '100%', backgroundColor: 'white', display: 'flex', justifyContent: 'space-around' }} >
            <Box style={{ width: '90%', marginTop: '40px', borderRadius: '40px' }}>
              <div class='heading' >
                Learn Trending And Potential Languages....
            </div>
              <div class='long' >
                <List component="nav" aria-label="main mailbox folders" style={{ width: '100%' }} >
                  <ListItem style={{ padding: '0' }} >
                    <ListItemIcon>
                      AI
                      </ListItemIcon>
                    <ListItemText primary="AI and Machine Learning" secondary={first} />
                  </ListItem>
                  <ListItem style={{ padding: '0' }} >
                    <ListItemIcon>
                      <CloudCircleOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cloud Computing" secondary={second} />
                  </ListItem>
                  <ListItem style={{ padding: '0' }} >
                    <ListItemIcon>
                      <StorageOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Information Technology" secondary={third} />
                  </ListItem>
                </List>
              </div>
              <ButtonBase style={{ marginLeft: '40px', marginTop: '40px', marginBottom: '40px' }} >
                <Button class='glow' >
                  ENROLL NOW
                </Button>
              </ButtonBase>
            </Box>
          </div>

          <div>
            <ImageGridList />
          </div>

          <div style={{ backgroundColor: 'white', display: 'flex', paddingTop: '40px' }} >
            <MyCode />
            <div class='offers' >
              <div class='features'>{"<Courses/>"}</div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignContent: 'center', flexWrap: 'wrap' }} >
                  <div className='courseTile' >
                    <div>
                      <img alt='s' src={python} width='70px' />
                    </div>
                    <div>
                      Python
                    </div>
                  </div>

                  <div className='courseTile' >
                    <div>
                      <img alt='s' src={devops} width='70px' />
                    </div>
                    <div>
                      DevOps
                    </div>
                  </div>

                  <div className='courseTile' >
                    <div>
                      <img alt='s' src={aws} width='70px' />
                    </div>
                    <div>
                      AWS
                    </div>
                  </div>

                  <div className='courseTile' >
                    <div>
                      <img alt='s' src={stats} width='70px' />
                    </div>
                    <div>
                      Statistics
                    </div>
                  </div>
                <div className='offers' style={{backgroundImage:'none',color:'white'}} >
                  Show All
                </div>
                </div>
            </div>
          </div>
          <div style={{ backgroundColor: 'white', height: '100px' }}></div>

          <div style={{ width: '100%', height: '600px', backgroundColor: 'white', padding: '20px' }}>
            <Carousel />
          </div>

          <div class='signUp'>
            <SignUp />
          </div>
          <MyFooter />
        </div>

        <div className='mobile' >
          <MyAppBaMobile />
          <div style={{ position: 'absolute', top: '0', width: '100%' }} >
            <div className='para'>
              <Box boxShadow={10} style={{ height: 'auto', width: '100%', marginTop: '10%' }} ><div class='bg-text'>{result}</div></Box>
              <Box boxShadow={10} style={{ height: 'auto', width: '100%' }} ><div class='long-text'>
                Learn. Code. Develop. <br></br>
                Ace the world of coding. Develop understanding of programming.
              </div></Box>
            </div>

            <div style={{ width: '100%', backgroundColor: 'white', display: 'flex', justifyContent: 'space-around' }} >
              <Box style={{ width: '90%', marginTop: '20px', borderRadius: '20px' }}>
                <div class='heading'>
                  Why learn coding?
                </div>
                <div class='long' >
                  <List component="nav" aria-label="main mailbox folders">
                    <ListItem style={{ padding: '0' }} >
                      <ListItemIcon>
                        AI
                      </ListItemIcon>
                      <ListItemText primary="AI and Machine Learning" secondary={first} />
                    </ListItem>
                    <ListItem style={{ padding: '0' }} >
                      <ListItemIcon>
                        <CloudCircleOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Cloud Computing" secondary={second} />
                    </ListItem>
                    <ListItem style={{ padding: '0' }} >
                      <ListItemIcon>
                        <StorageOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Information Technology" secondary={third} />
                    </ListItem>
                  </List>
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }} >
                  <ButtonBase style={{ marginLeft: '40px', marginTop: '40px', marginBottom: '40px' }} >
                    <Button class='glow' >
                      ENROLL NOW
                    </Button>
                  </ButtonBase>
                </div>
              </Box>
            </div>

            <MyCode />

            <ButtonBases />

            <div style={{ padding: '10px' }} >
              <div class='offers'>
                <div class='features'>{"<Courses/>"}</div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignContent: 'center', flexWrap: 'wrap' }} >
                  <div className='courseTile' >
                    <div>
                      <img alt='s' src={python} width='70px' />
                    </div>
                    <div>
                      Python
                    </div>
                  </div>

                  <div className='courseTile' >
                    <div>
                      <img alt='s' src={devops} width='70px' />
                    </div>
                    <div>
                      DevOps
                    </div>
                  </div>

                  <div className='courseTile' >
                    <div>
                      <img alt='s' src={aws} width='70px' />
                    </div>
                    <div>
                      AWS
                    </div>
                  </div>

                  <div className='courseTile' >
                    <div>
                      <img alt='s' src={stats} width='70px' />
                    </div>
                    <div>
                      Statistics
                    </div>
                  </div>

                </div>
                <div style={{color:'white'}} >Show All</div>
              </div>
            </div>

            <Carousel />

            <MyFooter />
          </div>
        </div>
      </React.Fragment>
    );
  }
}