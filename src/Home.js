import React from 'react';
import './App.css'
import { useDencrypt } from "use-dencrypt-effect";
import { Box } from '@material-ui/core';
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
          <div class='wallpaper'>
            <div className='para'>
              <Box style={{ height: 'auto', width: '800px' }} ><div class='bg-text'>{result}</div></Box>
            </div>
          </div>

          <div className="wrap" >
            <h1 style={{ fontWeight: "700", fontSize: "55px", marginBottom: "5px" }} >
              WHY KIDS SHOULD LEARN CODING?
            </h1>
            <div className="wrap" >
              Its not about learning to CODE - its about learning to THINK!
            </div>
          </div>

          <div className="wrap" style={{ backgroundColor: "#6CD9BA" }} >
            <div className="home-green" >
              <h5>
                Sign Up For Coding Zen Classes in your area!
              </h5>
              <h5>
                New Batches start every Saturday in Delhi NCR
              </h5>
            </div>
            <div className="wrap" >
              <button className="try-now-button" >
                APPLY NOW!
              </button>
            </div>

          </div>

          <div style={{ backgroundColor: "black", textAlign: "center", color: "white" }} >
            <div className="about-container" >
              <h1 style={{ fontWeight: "700" }} >
                ABOUT
              </h1>
            </div>
            <div className="wrap" >
              <div style={{ fontSize: "70px", fontWeight: "100", textAlign: "right" }} >
                TURNING <br />
                IDEAS INTO <br />
                REALITY
              </div>
              <div style={{ width: "300px", margin: "0px 30px", textAlign: "left" }} >
                There’s been a lot of buzz about kids learning to code lately. This year, almost 200 million students around the world were exposed to coding <br /><br /><br />

                Like Mathematics, programming can only be mastered by lots of practice. Our courses are designed to make sure kids spend more time practicing than just learning theory.<br /><br /><br />

                We include all sorts of activities like solving puzzles & playing games, this keeps the whole learning environment interactive and fun
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center" }} >
                  <div className="circle" style={{ borderColor: "#E74C3C" }} >
                    100
                    </div>
                  <div className="circle-text" >
                    READY-TO-USE CURRICULUM
                    </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div className="circle" style={{ borderColor: "#46B39D" }}  >
                    100
                    </div>
                </div>

                <div style={{ display: "flex" }} >
                  <div className="circle" style={{ borderColor: "#F0CA4D" }} >
                    100
                    </div>
                </div>

                <div style={{ display: "flex" }} >
                  <div className="circle" >
                    100
                    </div>
                </div>
              </div>
            </div>

            <div className="sub-footer wrap" >
              "Before coming to this workshop, programming seemed very difficult and complicated to me. After this <br /> workshop, I think programming is quite simple and easy to learn!"<br />
              <br /><br />
              Vanshika, St. Paul's Secondary School
            </div>
          </div>

          <div style={{ width: '100%', backgroundColor: 'white', paddingTop: '20px', textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'j' }} >Testimonials;</h1>
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
            </div>

            <div className="wrap" >
              <h1 style={{ fontWeight: "700", fontSize: "30px", marginBottom: "5px" }} >
                WHY KIDS SHOULD LEARN CODING?
              </h1>
              <div className="wrap" >
                Its not about learning to CODE - its about learning to THINK!
              </div>
            </div>

            <div className="wrap" style={{ backgroundColor: "#6CD9BA" }} >
              <div className="home-green" >
                <h5>
                  Sign Up For Coding Zen Classes in your area!
              </h5>
                <h5>
                  New Batches start every Saturday in Delhi NCR
              </h5>
              </div>
              <div className="wrap" >
                <button className="try-now-button" >
                  APPLY NOW!
              </button>
              </div>

            </div>

            <div style={{ backgroundColor: "black", textAlign: "center", color: "white" }} >
              <div className="about-container" >
                <h1 style={{ fontWeight: "700" }} >
                  ABOUT
              </h1>
              </div>
              <div className="wrap" >
                <div style={{ fontSize: "70px", fontWeight: "100", textAlign: "right" }} >
                  TURNING <br />
                IDEAS INTO <br />
                REALITY
              </div>
                <div style={{ width: "300px", margin: "0px 30px", textAlign: "left" }} >
                  There’s been a lot of buzz about kids learning to code lately. This year, almost 200 million students around the world were exposed to coding <br /><br /><br />

                Like Mathematics, programming can only be mastered by lots of practice. Our courses are designed to make sure kids spend more time practicing than just learning theory.<br /><br /><br />

                We include all sorts of activities like solving puzzles & playing games, this keeps the whole learning environment interactive and fun
              </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center" }} >
                    <div className="circle" style={{ borderColor: "#E74C3C" }} >
                      100
                    </div>
                    <div className="circle-text" >
                      READY-TO-USE CURRICULUM
                    </div>
                  </div>

                  <div style={{ display: "flex" }}>
                    <div className="circle" style={{ borderColor: "#46B39D" }}  >
                      100
                    </div>
                  </div>

                  <div style={{ display: "flex" }} >
                    <div className="circle" style={{ borderColor: "#F0CA4D" }} >
                      100
                    </div>
                  </div>

                  <div style={{ display: "flex" }} >
                    <div className="circle" >
                      100
                    </div>
                  </div>
                </div>
              </div>

              <div className="sub-footer wrap" >
                "Before coming to this workshop, programming seemed very difficult and complicated to me. After this <br /> workshop, I think programming is quite simple and easy to learn!"<br />
                <br /><br />
              Vanshika, St. Paul's Secondary School
            </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: "20px" }} ><h2 style={{ fontFamily: 'j' }} >Testimonials;</h2></div>
            <Carousel />

            <MyFooter />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
