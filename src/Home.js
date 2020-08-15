import React from 'react';
import './App.css'
import { useDencrypt } from "use-dencrypt-effect";
import SplashScreen from './Components/SplashScreen';
import MyAppBar from './Components/AppBar';
import MyFooter from './Components/Footer';
import image1 from './Images/future.jpg';
import image2 from './Images/ai.jpg';
import wallpaper from './Images/Home/home-head.png'

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
    name: "Students Python Program",
    color: "#F0CA4D",
    des: "The CodingZen Creator program lays a solid foundation of computer science concepts and theories through developing technically challenging apps. With an emphasis on hands-on development and bringing ideas to reality, the program guides students to deepen their understanding on key current topics in technology, including privacy, security and social networking."
  },
  {
    name: "Python for Professionals",
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
    imag: image1
  },
  {
    name: "THE EARLY BIRD GETS THE WORM",
    class: "two",
    color: "#3498DB",
    des: "Most professions already require some kind of coding knowledge. Hone this skill before you have to. We will help with the crawl, the walk, the run and the flight.",
    imag: image2
  },
  {
    name: "BUILD YOUR WORLD",
    class: "three",
    color: "#F0CA4D",
    des: "Get the skillsets to build that technologies to create the future you want. Harness the power of your imagination to be the change you want. We will help you bring out the creator and the entrepreneur in you.",
    imag: image2
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
        <div>
          <MyAppBar />
          <div className="home-wallpaper-head" style={{margin:"50px 0px"}} >
            <div className="home-wallpaper-text wrap" >
              <p>
                Robotics already replacing humans for jobs, accelerated by recent pandemic!!!!
              </p>
              <p>
                Prepare for next generation of technology- Machine Learning (ML)/ Artificial Intelligence (AI)!!!!
              </p>
              <p>
                Learn <b style={{color:"#f0ca4e"}} >Mathematics</b>, <b style={{color:"#5bb3a9"}} >Python</b> and <b style={{color:"#e37b3e"}} >Statistics</b> -fundamentals to ML from our top teachers at the convenience 
                of your home!!!!!!
              </p>
              <p>
                Offering online one-to-one or group sessions for age group 9 and above!!!!!
              </p>
            </div>
            <div>
              <img src={wallpaper} className="home-image" />
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
                      <div className="class-card"  >
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

          <div className="home-green wrap" >
            <p style={{ width: "70%", fontWeight: "700" }} >
              “We have seen AI providing conversation and comfort to the lonely; we have also seen AI engaging in racial discrimination. Yet the biggest harm that AI is likely to do to individuals in the short term is job displacement, as the amount of work we can automate with AI is vastly larger than before. As leaders, it is incumbent on all of us to make sure we are building a world in which every individual has an opportunity to thrive.”
              <br />
              <br />
              <i style={{ fontSize: "18px", fontWeight: "200" }} >
                Andrew Ng, Co-founder and lead of Google Brain.
              </i>
            </p>
          </div>

          <MyFooter />
        </div>
      </React.Fragment>
    );
  }
}
//Soon, robotics will be replacing humans for jobs in most of the areas. Prepare your kids for the next generation of technology – “Machine Learning/Artificial Intelligence”. Learn Mathematics, Statistics and Python which are fundamentals to Machine Learning from our top teachers at the convenience of your home.