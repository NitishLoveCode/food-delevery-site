import React from 'react'
import "../foodmenu/foodmenu.css"
import piza from "../Banner/1.png"
import burger from "../Banner/2.png"

export default function Foodmenu() {
  return (
    <>
        <div className="food_menu">
            <div className='menu_box'>
                <img src={piza} alt="piza" />
                <p>Pizza</p>
            </div>
            <div className='menu_box'>
                <img src={piza} alt="piza" />
                <p>Pizza</p>
            </div>
            <div className='menu_box'>
                <img src={piza} alt="piza" />
                <p>Pizza</p>
            </div><div className='menu_box'>
                <img src={burger} alt="piza" />
                <p>Pizza</p>
            </div>
            <div className='menu_box'>
                <img src={burger} alt="piza" />
                <p>Pizza</p>
            </div>
            <div className='menu_box'>
                <img src={burger} alt="piza" />
                <p>Pizza</p>
            </div>
            
        </div>
    </>
  )
}
