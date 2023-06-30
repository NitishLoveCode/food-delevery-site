import React from 'react'
import "../Header/header.css"
import {BsSearch} from "react-icons/bs"
import {RxAvatar} from "react-icons/rx"
import {AiOutlineMenu} from "react-icons/ai"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className="menu_left">
        <Link to={"/"}>
        <div className="logo">
          <h1>Food <br /><span>Delivery</span></h1>
        </div>
        </Link>
        <div className="hidden search flex">
          <input type="text" name="search" id="Search" placeholder='search'/>
          <BsSearch className='font1rem gray'/>
        </div>
      </div>

      <div className="flex right_menu gap3">
      
      <div className='left_slider main_manu flex gap3'>
            <div className='flex gap3'>
              <p>Restorents</p> 
              <p>Deals</p>
            </div>
            <div className='flex gap3'>
              <div>
                <p>My orders</p>
              </div>
            </div>
        </div>


          <div>
            <AiOutlineShoppingCart className='font3rem'/>
          </div>
          <Link to={"/Login"}>
          <div className='bg-gray flex user justify_canter border-radius width gray'>
            <RxAvatar className='user gray'/>
          </div>
          </Link>
          <div className='only_mobile'>
            <AiOutlineMenu className='font25rem gray'/>
          </div>
      </div>
    </header>
  )
}
