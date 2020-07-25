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
import { Parallax, Background } from 'react-parallax';
import './Images/future.jpg';
import './Images/ai.jpg';

const values = ["Welcome to the Real World!", "Keep Calm And Code...", "Coding is Awesome!"];

const courses = [
  {
    name: 'MATHEMATICS',
    color: "#dd5b49",
    des: "The CodingZen Greenhorn program instills the concept that technology is a creator's tool to the young curious minds. By using fun and educational technology kits, including Scratch, Hopscotch, LittleBits and Dash. CodingZen Greenhorn moves students beyond mobile and computer gaming, and gets them hands-on experience in programming and hardwares"
  },
  {
    name: "Statistics",
    color: "#46B39D",
    des: "The CodingZen Explorer program inspires technology savvy primary school students to go beyond mobile and computer gaming, and move to create their own games and apps. With the emphasis of creativity, CodingZen Explorer empowers students through problem solving using technology. Students learn computer science concepts, user centric design, and mobile app development."
  },
  {
    name: "Python",
    color: "#F0CA4D",
    des: "The CodingZen Creator program lays a solid foundation of computer science concepts and theories through developing technically challenging apps. With an emphasis on hands-on development and bringing ideas to reality, the program guides students to deepen their understanding on key current topics in technology, including privacy, security and social networking."
  },
  {
    name: "AI + ML",
    color: "#3498DB",
    des: "The CodingZen Creator program lays a solid foundation of computer science concepts and theories through developing technically challenging apps. With an emphasis on hands-on development and bringing ideas to reality, the program guides students to deepen their understanding on key current topics in technology, including privacy, security and social networking."
  }

]

const think = [
  {
    name: "KNOW YOUR WORLD",
    class: "one",
    color: "#dd5b49",
    des: "It’s a jungle out there.  We are surrounded by electronic devices that are shaping our lives. The internet was a privilege not a long time ago and it is now a utility that we can access simply with our voice or a wave of the palm. We will help you recognize its power and its risks.",
    imag: "./Images/ai.jpg"
  },
  {
    name: "THE EARLY BIRD GETS THE WORM",
    class: "two",
    color: "#46B39D",
    des: "Most professions already require some kind of coding knowledge. Hone this skill before you have to. We will help with the crawl, the walk, the run and the flight.",
    imag: "./Images/ai.jpg"
  },
  {
    name: "BUILD YOUR WORLD",
    class: "three",
    color: "#F0CA4D",
    des: "Get the skillsets to build that technologies to create the future you want. Harness the power of your imagination to be the change you want. We will help you bring out the creator and the entrepreneur in you.",
    imag: "./Images/ai.jpg"
  }
]

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

          <div style={{ textAlign: 'center' }} >
            <h1 style={{ fontFamily: "Lato, Helvetica, sans-serif", fontWeight: "700", fontSize: "55px", marginBottom: "5px", textTransform: "uppercase", marginTop: "100px" }} >
              Where is the future?
            </h1>
            <div className="wrap" style={{ fontFamily: "Lato, Helvetica, sans-serif", paddingTop: "0px", fontSize: "16px", paddingBottom: "30px" }}>
              Right here. And you are welcome to join.
            </div>
            <div className="wrap" >
              {
                think.map(item => {
                  return (
                    <div className="class-card" >
                      <div className={"home-avatar " + item.class} style={{ backgroundImage: "url("+ item.imag + ")", backgroundSize: "5%" }} >
                       
                      </div>
                      <div style={{ textAlign: "center", textTransform: "uppercase", fontWeight: "300", fontSize: "20px" }} >
                        {item.name}
                      </div>
                      <div style={{ width: "250px", backgroundColor: item.color, height: "2px", margin: '10px 0px' }} />
                      <div>
                        {item.des}
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>

         

          <div className="wrap" >
            <div>
              <div style={{ fontSize: "50px", fontWeight: "700", margin: "40px 0px" }} >
                OUR PATHWAY TO MACHINE LEARNING
              </div>
              <div className="wrap" style={{ alignItems: "inherit" }} >
                {
                  courses.map(item => {
                    return (
                      <div className="class-card" >
                        <div style={{ textAlign: "center", textTransform: "uppercase", fontWeight: "300", fontSize: "20px" }} >
                          {item.name}
                        </div>
                        <div style={{ width: "250px", backgroundColor: item.color, height: "2px", margin: '10px 0px' }} />
                        <div>
                          {item.des}
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>


          <div style={{ backgroundColor: "black", textAlign: "center", color: "white" }} >
            <div className="sub-footer wrap" >
              "Before coming to this workshop, programming seemed very difficult and complicated to me. After this <br /> workshop, I think programming is quite simple and easy to learn!"<br />
              <br /><br />
              Vanshika, St. Paul's Secondary School
            </div>
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
              <div className="wrap" >
                {
                  think.map(item => {
                    return (
                      <div className="class-card" style={{margin:"10px 0px"}} >
                        <div className={"home-avatar " + item.class} >

                        </div>
                        <div style={{ textAlign: "center", textTransform: "uppercase", fontWeight: "300", fontSize: "20px" }} >
                          {item.name}
                        </div>
                        <div style={{ width: "250px", backgroundColor: item.color, height: "2px", margin: '10px 0px' }} />
                        <div>
                          {item.des}
                        </div>
                      </div>
                    )
                  })
                }
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

            <div className="wrap" >
              <div>
                <div style={{ fontSize: "30px", fontWeight: "700", margin: "40px 0px" }} >
                  OUR PATHWAY TO MACHINE LEARNING
              </div>
                <div className="wrap" style={{ alignItems: "inherit" }} >
                  {
                    courses.map(item => {
                      return (
                        <div className="class-card" style={{margin:"20px"}} >
                          <div style={{ textAlign: "center", textTransform: "uppercase", fontWeight: "300", fontSize: "20px" }} >
                            {item.name}
                          </div>
                          <div style={{ width: "250px", backgroundColor: item.color, height: "2px", margin: '10px 0px' }} />
                          <div>
                            {item.des}
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: "black", textAlign: "center", color: "white" }} >
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
