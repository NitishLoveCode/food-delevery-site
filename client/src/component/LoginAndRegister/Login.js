import React, { useEffect, useState } from 'react'
import "../LoginAndRegister/login.css"
import { Link } from 'react-router-dom'
import {FcGoogle} from "react-icons/fc"
import { useNavigate } from 'react-router-dom'
import {auth,provider}from "../../firebase.config"
import {signInWithPopup}from "firebase/auth"

export default function Login() {
  const navigate=useNavigate()

  const [googledata,setgoogledata]=useState()

  // --------------login with google-------------------------
  const login_with_google=async()=>{
    const data=await signInWithPopup(auth,provider)
    if(data){
      const{firstName,lastName,email,photoUrl,phoneNumber}=data._tokenResponse
      setgoogledata({firstName,lastName,email,photoUrl,phoneNumber})
    }
  }
  const hello="fsdfasd"

  async function credentialsMatch(){
    console.log(googledata)
      const res=await fetch("http://localhost:8000/login",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify({
          googledata
        })
      })
      const result=await res.json()
      console.log(result)
  }

  useEffect(()=>{
      credentialsMatch()
  },[googledata])

  // useEffect(()=>{
  //   if(googledata!=undefined){
  //     localStorage.setItem("loginInfo",JSON.stringify(googledata))
  //   }
  //   if(googledata){
  //     window.location.reload(false);
  //   }

  // },[googledata!=undefined])






  const data= JSON.parse(localStorage.getItem("loginInfo"))
  console.log(data)
  useEffect(()=>{
    if(data){
      navigate("/")
    }
  },[])


  return (
    <>
      <div className="main_login">
        <div className="child_log">
        <div className='child_heading'>
        <h1>Login</h1>
        <p>Sign in whith you data that you entered 
        while you registration</p>
        </div>
        <div className="register_with">
            <p>Only 3 secound Login with google</p>
            <button onClick={login_with_google}>
                <FcGoogle className='widthgoogle'/>
            </button>
        </div>
        <div className='login_infield'>
          <label htmlFor="">Email</label><br />
          <input type="email" name="email" id="email" placeholder='Email'/>
        </div>
        <div className='login_infield'>
          <label htmlFor="">Password</label><br />
          <input type="text" name="password" id="password" placeholder='Password' />
        </div>
        <div className='keepLogin'>
          <input type="checkbox" name="keepme" id="keepme" />
          <label htmlFor="keepme">Keep me logged in</label>
        </div>
        <div className='login_bottom'>
        <button>Login</button>
        <h4>Forget password</h4>

        <p>Don't have an account? <span><Link to={"/register"}>Register</Link></span></p>

        </div>
        </div>

      </div>
    </>
  )
}
