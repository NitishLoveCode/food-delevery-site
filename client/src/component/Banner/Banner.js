import React from 'react'
import "../Banner/banner.css"
import img1 from "./1.png"
import img2 from "./2.png"

export default function Banner() {
  return (
    <div className="main_banner">
        <div className="img_banner left_color">
            <div className='banner_img'>
            <img src={img1} alt="img" />
            </div>
            
            <div className='left'>
            <h3>All deserts</h3>
            <h4>20% OFF</h4>
            <p>Desery</p>
            </div>

        </div>


        <div className="img_banner right_color">
            <div className='banner_img'>
                <img src={img2} alt="img" />
            </div>
            <div className='right'>
                <h3>Big Burgers</h3>
                <h4>20% OFF</h4>
                <p>Fooddies</p>
            </div>
        </div>


    </div>
  )
}
