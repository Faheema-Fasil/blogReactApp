import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Login() {
  const [userData,setUserData]=useState({

    email:'',
    password:''

  })
  function changeInputHandler(e){
    setUserData(prevState=>{
      return{...prevState,[e.target.name]:e.target.value}
    })
  }
  return (
    <>
     <section className='login'>
      <div className="container">
        <h2>Sign In</h2>
       <form className='form login_form'>
        <p className='form__error-message'>This is an error message</p>

        <input type="email" placeholder='Email Id' name="email" value={userData.email} onChange={changeInputHandler} autoFocus />
        <input type="password" placeholder='Password' name="password" value={userData.password} onChange={changeInputHandler}  />

        <button type='submit' className='btn primary'>Login</button>
       </form>
       <small>Don't have an account <Link to="/register">sign up</Link></small>
      </div>
     </section>

    </>
  )
}

export default Login
