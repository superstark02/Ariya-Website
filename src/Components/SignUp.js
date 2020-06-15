import React from 'react'
import { Button } from '@material-ui/core'
import { FaTerminal } from 'react-icons/fa'

export default function SignUp(){
    return(
        <div style={{width:'70%',padding:'10px',backgroundColor:'white',boxShadow:'2px 5px 10px',marginTop:'-40px',marginBottom:'-40px'}} >
            <div class="features" style={{color:'black'}} >
                Sign Up
            </div>
            <div class="userName" >
                <div>
                    {"#include<"}<input style={{outline:'none',border:'none',width:'auto',textAlign:'center',margin:'10px'}} placeholder="username" />{">;"}
                    <div>
                    {"#include<"}<input style={{outline:'none',border:'none',width:'auto',textAlign:'center',margin:'10px'}} placeholder="email" />{">;"}
                    </div>
                    <div style={{width:'100%',display:'flex',justifyContent:'space-around',marginTop:'50px'}} >  
                        <Button class='glow1' >SignUp <FaTerminal/></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}