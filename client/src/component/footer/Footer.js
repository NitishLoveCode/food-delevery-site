import React from 'react'
import {CiFacebook}from "react-icons/ci"
import {TiSocialTwitterCircular}from "react-icons/ti"
import {FaInstagram}from "react-icons/fa"
import {AiOutlineYoutube}from "react-icons/ai"
import {TiSocialLinkedinCircular}from "react-icons/ti"
import "../footer/footer.css"

export default function Footer() {
  return (
    <>
        <div className="main_footer">
            <div className="footer_left">
                <div className="footer_logo">
                    <h3>Food <br /> <span>Delivery</span></h3>
                </div>
                <div className="footer_social">
                    <CiFacebook className='social_icon'/>
                    <TiSocialLinkedinCircular className='social_icon'/>
                    <FaInstagram className='social_icon'/>
                    <AiOutlineYoutube className='social_icon'/>
                    <TiSocialLinkedinCircular className='social_icon'/>
                </div>
                <p>@ 2023 Food delevery kit. All right Reserved <span>Terms of use </span><span>Privicy policy</span></p>
            </div>


            <div className="footer_right">
                <div className='Footer_menu'>
                    <span>Response</span>
                    <p>How it work</p>
                    <p>Guarantee</p>
                    <p>Security</p>
                    <p>Pricing</p>
                </div>
                <div className='Footer_menu'>
                    <span>Compny</span>
                    <p>How it work</p>
                    <p>Guarantee</p>
                    <p>Security</p>
                    <p>Pricing</p>
                </div>
                <div className='Footer_menu'>
                    <span>Sopport</span>
                    <p>How it work</p>
                    <p>Guarantee</p>
                    <p>Security</p>
                    <p>Pricing</p>
                </div>
            </div>
        </div>
    </>
  )
}
