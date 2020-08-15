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
    des: <div>Build a robust foundation through grade school curriculum.<br /><br /> Customized learning sessions for kids of all ages</div>
  },
  {
    name: "Statistics",
    color: "#46B39D",
    des: <div>Learn the key concepts that are building blocks for AI and ML.<br /><br />Train using real life examples from the industry.</div>
  },
  {
    name: "Python For Kids",
    color: "#F0CA4D",
    des: <div>Introduce the world of programming early with actual coding tools and methods. <br /><br />Training plans that use school-based curriculum </div>
  },
  {
    name: "Python for Professionals",
    color: "#3498DB",
    des: <div>Intensive and immersive course content to develop solid skillset in Python coding. <br /><br />Coaching style that works for all skill levels.</div>
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
          <div className="home-wallpaper-head" style={{ margin: "50px 0px" }} >
            <div className="home-wallpaper-text wrap" style={{ textAlign: "left" }} >
              <div>
                <p>
                  Robotics already replacing humans for jobs, accelerated by recent pandemic!!!!
                </p>
                <p>
                  Prepare for next generation of technology- Machine Learning (ML)/ Artificial Intelligence (AI)!!!!
                </p>
                <p>
                  Learn <b style={{ color: "#f0ca4e" }} >Mathematics</b>, <b style={{ color: "#5bb3a9" }} >Python</b> and <b style={{ color: "#e37b3e" }} >Statistics</b> -fundamentals to ML from our top teachers at the convenience
                of your home!!!!!!
                </p>
                <p>
                  Offering online one-to-one or group sessions for age group 9 and above!!!!!
              </p>
              </div>
            </div>
            <div>
              <img src={wallpaper} className="home-image" />
            </div>
          </div>

          <div className="wrap" >
            <div>
              <div style={{ fontSize: "50px", fontWeight: "700", margin: "40px 0px" }} >
                <i>OUR PATHWAY TO MACHINE LEARNING</i>
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
                        <div style={{ textAlign: "left" }} >
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
              "Artificial Intelligence is the new electricity"
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