import React from 'react';
import './App.css'
import { useDencrypt } from "use-dencrypt-effect";
import { Box} from '@material-ui/core';
import python from './Images/python.png';
import devops from './Images/devOps.png'
import aws from './Images/aws.png'
import stats from './Images/stats.png'
import ImageGridList from './Components/Features';
import SplashScreen from './Components/SplashScreen';
import MyAppBar from './Components/AppBar';
import MyAppBaMobile from './Components/mAppBar';
import MyFooter from './Components/Footer';
import { Carousel } from './Components/Carousel';
import { Link } from 'react-router-dom';

const values = ["Welcome to the Real World!", "Keep Calm And Code...", "Coding is Awesome!"];


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
    }, 3700);

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
            <Box style={{ height: 'auto', width: '800px' }} ><div class='bg-text'>{result}</div></Box>
          </div>

          <div style={{ backgroundColor: 'white', display: 'flex', paddingTop: '40px' }} >
            <div class='offers' >
              <div class='features'>{"<Courses/>"}</div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignContent: 'center', flexWrap: 'wrap' }} >
                  <a href="/coding_python">
                  <div className='courseTile' >
                    <div>
                      <img alt='s' src={python} width='70px' height='70px' />
                    </div>
                    <div>
                      Python
                    </div>
                  </div>
                  </a>

                  <div className='courseTile' >
                    <div>
                      <img alt='s' src={devops} width='90px' height='90px' />
                    </div>
                    <div>
                      DevOps
                    </div>
                  </div>

                  <div className='courseTile' >
                    <div>
                      <img alt='s' src={aws} width='90px' height='90px' />
                    </div>
                    <div>
                      AWS
                    </div>
                  </div>

                  <a href="/coding_statistics">
                  <div className='courseTile' >
                    <div>
                      <img alt='s' src={stats} width='70px' height='70px' />
                    </div>
                    <div>
                      Statistics
                    </div>
                  </div>
                  </a>

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

          <div style={{ width: '100%', backgroundColor: 'white', paddingTop: '20px',textAlign:'center' }}>
            <h1 style={{fontFamily:'j'}} >Testimonials;</h1>
            <Carousel />
          </div>

          <div>
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

            <div style={{ padding: '10px' }} >
              <div class='offers'>
                <div class='features'>{"<Courses/>"}</div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignContent: 'center', flexWrap: 'wrap' }} >
                  <a href="/coding_python">
                  <div className='courseTile' >
                    <div>
                      <img alt='s' src={python} width='70px' />
                    </div>
                    <div>
                      Python
                    </div>
                  </div>
                  </a>

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

                  <a href="/coding_statistics">
                  <div className='courseTile' >
                    <div>
                      <img alt='s' src={stats} width='70px' />
                    </div>
                    <div>
                      Statistics
                    </div>
                  </div>
                  </a>

                </div>
                <div style={{color:'white'}} ><Link to='/coding_courses' className='Link' >Show All</Link></div>
              </div>
            </div>

            <div>
              <ImageGridList/>
            </div>

            <div style={{textAlign:'center',marginTop:"20px"}} ><h2 style={{fontFamily:'j'}} >Testimonials;</h2></div>
            <Carousel />

            <MyFooter />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
