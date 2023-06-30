import React from 'react'
import "../LoginAndRegister/login.css"

export default function Login() {
  return (
    <>
      <div className="main_login">
        <div className="child_log">
        <div className='child_heading'>
        <h1>Login</h1>
        <p>Sign in whith you data that you entered 
        while you registration</p>
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

        <p>Don't have an account? <span>Sign up</span></p>

        </div>
        </div>

      </div>
    </>
  )
}
