import React, { useEffect, useState } from 'react'
import "../LoginAndRegister/login.css"
import { Link } from 'react-router-dom'
import {FcGoogle} from "react-icons/fc"
import {auth,provider} from "../../firebase.config"
import {signInWithPopup}from "firebase/auth"
import { useNavigate } from 'react-router-dom'


export default function Register() {
    const navigate=useNavigate()
    const[name,setname]=useState()
    const[phone,setphone]=useState()
    const[email,setemail]=useState()
    const[password,setpassword]=useState()

    // ---------------------satting localStorage data-------------------------
    const[localdata,setlocaldata]=useState()
    const[updateLocal,setupdateLocal]=useState(false)
    // -------------------useEffect run to save into data---------------
    const[isdata,setisdata]=useState(false)
    // ----------------register with google data stotred-------------------
    const [googledata,setgoogledata]=useState()
    // -----------------register with google---------------------------
    const register_with_gogole=async()=>{
        console.log("hello")
        const data=await signInWithPopup(auth,provider)
        const{firstName,lastName,email,photoUrl,phoneNumber}=data._tokenResponse
        setgoogledata({firstName,lastName,email,photoUrl,phoneNumber})
        setupdateLocal(true) 
        callServer()
    }
    
    
    useEffect(()=>{
        if(updateLocal){
            callServer()
        }
        
    },[updateLocal])

    // ------------------------------sending data to server-------------------------
    async function callServer(){
        if(updateLocal){
            const res=await fetch("http://localhost:8000/register",{
              method:"POST",
              credentials:"include",
              headers:{
                "content-type":"application/json"
              },
              body:JSON.stringify({
                googledata
              })
            })
            const result=await res.json()
            setlocaldata(result)
            if(localdata){
                navigate("/")
            }
            setisdata(true)
        }
        else{
            const res=await fetch("http://localhost:8000/register",{
              method:"POST",
              credentials:"include",
              headers:{
                "content-type":"application/json"
              },
              body:JSON.stringify({
                name,phone,email,password
              })
            })
            const result=await res.json()
            setlocaldata(result)
            setisdata(true)

        }
  }

  useEffect(()=>{
   if(isdata){
    localStorage.setItem("loginInfo",JSON.stringify(localdata))
    navigate("/")
   }
  },[isdata])

//   const data=localStorage.getItem("loginInfo");
//   useEffect(()=>{
//     if(data){
//         navigate("/")
//     }
//   },[data])


  return (
    <>
      <div className="main_login">
        <div className="child_log">
        <div className='child_heading'>
        <h1>Register</h1>
        <p>You alwase welcone to our store fresh testy food</p>
        <div className="register_with">
            <p>Only 3 secound register with google</p>
            <button onClick={register_with_gogole}>
                <FcGoogle className='widthgoogle'/>
            </button>
        </div>
        </div>
        <div className='login_infield'>
          <label htmlFor="">Name</label><br />
          <input type="name" name="name" id="name" placeholder='Name'
            value={name} onChange={e=>setname(e.target.value)}
          />
        </div>
        <div className='login_infield'>
          <label htmlFor="">Phone</label><br />
          <input type="text" name="phone" id="phone" placeholder='Phone'
            value={phone} onChange={e=>setphone(e.target.value)}
          />
        </div>
        <div className='login_infield'>
          <label htmlFor="">Email</label><br />
          <input type="email" name="email" id="email" placeholder='Email'
            value={email} onChange={e=>setemail(e.target.value)}
          />
        </div>
        <div className='login_infield'>
          <label htmlFor="">Password</label><br />
          <input type="text" name="password" id="password" placeholder='Password' 
            value={password} onChange={e=>setpassword(e.target.value)}
          />
        </div>
        <div className='keepLogin'>
          <input type="checkbox" name="keepme" id="keepme" />
          <label htmlFor="keepme">Keep me logged in</label>
        </div>
        <div className='login_bottom'>
        <button onClick={callServer}>Login</button>
        <h4>Forget password</h4>

        <p>Don't have an account? <span><Link to={"/login"}>Login</Link></span></p>

        </div>
        </div>

      </div>
    </>
  )
}
