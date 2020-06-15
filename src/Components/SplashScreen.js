import React from 'react'
import { Frame } from "framer";
import { FaCode } from 'react-icons/fa';

export default class SplashScreen extends React.Component{
    render(){
        return(
            <div style={{position:'fixed',top:'0',bottom:'0',left:'0',right:'0',backgroundColor:'white',zIndex:'100',display:'flex',justifyContent:'space-around',alignItems:'center'}} >
                
                <Frame
                animate={{ y: [20,10,5,10,20] }}
                transition={{ type: 'spring',loop: Infinity, }}
                background={"#043540"}
                radius={10}
                size={150}
                style={{display:'flex',justifyContent:'space-around',alignItems:'center',padding:'10px'}}
                >
                    <FaCode size="100px" color="white"/>
                </Frame>
                    
            </div>
        )
    }
}