import React,{ useState, useEffect } from 'react'
import { motion } from "framer-motion";
import { shuffle } from "lodash";
import './Components.css'

const initialColors = [
  {
    color:"#FF008C",
    text:'C'
  },
  {
    color:"#D309E1",
    text:'O'
  },
  {
    color:"#9C1AFF",
    text:'D'
  },
  {
    color:"#7700FF",
    text:'E'
  },
];

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300
};

export default function MyCode (){
  const [colors, setColors] = useState(initialColors);

  useEffect(() => {
    setTimeout(() => setColors(shuffle(colors)), 1000);
  }, [colors]);

  return(
    <div class='container' >
      <ul className='ul' >
        {colors.map(background => (
          <motion.li className='licode'
            key={background.color}
            layoutTransition={spring}
            style={ {backgroundColor:background.color} }
          >{background.text}</motion.li>
        ))}
      </ul>
    </div>
  )
}