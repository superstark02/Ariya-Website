import React from 'react';
import './App.css'
import { useDencrypt } from "use-dencrypt-effect";
import { Box} from '@material-ui/core';
import python from './Images/python.png';
import devops from './Images/devOps.png'
import aws from './Images/aws.png'
import stats from './Images/stats.png'
import ButtonBases from './Components/Images';
import ImageGridList from './Components/Features';
import MyCode from './Components/code';
import SignUp from './Components/SignUp';
import SplashScreen from './Components/SplashScreen';
import MyAppBar from './Components/AppBar';
import MyAppBaMobile from './Components/mAppBar';
import MyFooter from './Components/Footer';
import { Carousel } from './Components/Carousel';
import { Link } from 'react-router-dom';

const values = ["<Hello World/>", "Coding is Awesome", "Keep Calm And Code", "Machine Learning"];


export default function Home() {
  const [screen, setScreen] = React.useState(true);
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    setScreen(true)
    setInterval(() => { setScreen(false) }, 0);
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
          <div className='para'>
            <Box style={{ height: 'auto', width: '600px' }} ><div class='bg-text'>{result}</div></Box>
            <Box><div className='long-text'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </div></Box>
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
                  <Link to='/coding_courses' className='Link' >Show All</Link>
                </div>
                </div>
            </div>
          </div>

          <div>
            <ImageGridList />
          </div>

          
          <div style={{ backgroundColor: 'white', height: '100px' }}></div>

          <div style={{ width: '100%', height: '600px', backgroundColor: 'white', padding: '20px',textAlign:'center' }}>
            <h1 style={{fontFamily:'j'}} >Testimonials;</h1>
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
              <Box style={{ height: 'auto', marginTop: '10%' }} ><div class='bg-text'>{result}</div></Box>
              <Box><div className='long-text'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </div></Box>
            </div>

            <div>
              <ImageGridList/>
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
                <div style={{color:'white'}} ><Link to='/coding_courses' className='Link' >Show All</Link></div>
              </div>
            </div>

            <div style={{textAlign:'center'}} ><h2 style={{fontFamily:'j'}} >Testimonials;</h2></div>
            <Carousel />

            <MyFooter />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
