import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Register() {
  const [userData,setUserData]=useState({
    name:'',
    email:'',
    password:'',
    password2:''
  })
  function changeInputHandler(e){
    setUserData(prevState=>{
      return{...prevState,[e.target.name]:e.target.value}
    })
  }
  return (
    <>
     <section className='register'>
      <div className="container">
        <h2>Sign Up</h2>
       <form className='form register_form'>
        <p className='form__error-message'>This is an error message</p>
        <input type="text" placeholder='Full Name' name="name" value={userData.name} onChange={changeInputHandler} autoFocus />
        <input type="email" placeholder='Email Id' name="email" value={userData.email} onChange={changeInputHandler}  />
        <input type="password" placeholder='Password' name="password" value={userData.password} onChange={changeInputHandler}  />
        <input type="password" placeholder='Confirm Password' name="password2" value={userData.password2} onChange={changeInputHandler} />
        <button type='submit' className='btn primary'>Register</button>
       </form>
       <small>Already have an account <Link to="/login">sign up</Link></small>
      </div>
     </section>

    </>
  )
}

export default Register
