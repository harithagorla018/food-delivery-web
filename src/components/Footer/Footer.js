import React from 'react'
import './Footer.css';
import logo from '../../images/FD1.webp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={logo} alt='' width={100}/>
                <p>Eating a wide variety of nutritious foods, including fruit, vegetables, nuts, seeds, and lean protein can help support your wealth</p>
                <div className='footer-social-icons'>
                    <FacebookIcon/>
                    <TwitterIcon style={{marginLeft:'10px',marginRight:'10px'}}/>
                    <LinkedInIcon/>
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 &copy; - All Rights Reserved.</p>
    </div>
  )
}

export default Footer