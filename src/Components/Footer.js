import React from 'react'
import '../CSS/Components/Footer/Footer.css'
import {FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaFacebookMessenger } from 'react-icons/fa';

export default class MyFooter extends React.Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <div>
                        <FaEnvelope/> Email: mail@ariyaonline.com
                    </div>
                    <div>
                        <FaPhone/> Call: +1 (201) 208-5403
                    </div>
                    <div>
                        <a href="https://www.instagram.com/ariyaonline/" >
                            <FaFacebookF style={{fontSize:"30px",margin:"0px 10px"}} />
                        </a>
                        <a href="https://m.facebook.com/ariyaonlinelearning/?__tn__=%2Cg" >
                            <FaFacebookMessenger style={{fontSize:"30px",margin:"0px 10px"}} />
                        </a>
                        <FaInstagram style={{fontSize:"30px",margin:"0px 10px"}} />
                    </div>
                </div>  
            </div>
        )
    }
}