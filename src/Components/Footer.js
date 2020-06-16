import React from 'react'
import {FaPhone, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default class MyFooter extends React.Component {
    render() {
        return (
            <div>
                <div class='footer' >
                    <table style={{ width: '100%', height: '100%' }} >
                        <tr>
                            <td style={{ fontSize: '50px', fontFamily: 'j' }} className='responsive' >{"</>"}</td>
                            <th>Contact</th>
                            <th>Help</th>
                            <th>About</th>
                            <th>Social Media</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td><FaPhone color="#FFFF" /> +91 9999 9999 99</td>
                            <td> FAQs</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><FaMapMarkerAlt color="#FFFF" /> Map Location</td>
                            <td>How to enroll</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><FaEnvelope color="#FFFF" /> someone@exapmle.com</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><FaWhatsapp color="#FFFF" /> WhatsApp</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}