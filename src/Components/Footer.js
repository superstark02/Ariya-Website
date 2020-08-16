import React from 'react'
import '../CSS/Components/Footer/Footer.css'
import {FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default class MyFooter extends React.Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <div>
                        <FaEnvelope/> Email: mail@ariyaonline.com
                    </div>
                    <div>
                        <FaPhone/> Call: +1 
                    </div>
                    <div>
                        <FaFacebookF style={{fontSize:"30px",margin:"0px 10px"}} /> 
                        <FaTwitter style={{fontSize:"30px",margin:"0px 10px"}} /> 
                        <FaInstagram style={{fontSize:"30px",margin:"0px 10px"}} />
                    </div>
                </div>  
            </div>
        )
    }
}