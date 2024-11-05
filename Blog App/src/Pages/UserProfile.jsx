import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../assets/avatar15.jpg'
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";


function UserProfile() {
  const[avatar,setAvatar]=useState(Avatar)
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[currentPassword,setCurrentPassword]=useState('')
  const[newPassword,setNewPassword]=useState('')
  const[confirmNewPassword,setConfirmNewPassword]=useState('')
  return (
    <>
      <section className="profile">
        <div className="container profile__container">
           <Link to={`/myposts/sdfsdf`}>My Posts</Link>
        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={avatar} alt="" />
            </div>
            {/* form to update avatar */}
            <form action="" className="avatar__form">
              <input type="file" name='avatar' id='avatar' onChange={e=>setAvatar(e.target.files[0])} accept='png,jpg,jpeg' />
              <label htmlFor="avatar"><FaEdit/></label>
            </form>
           
          </div>
          <h1>Ernest Achiever</h1>
          {/* form to update userr details */}
          <form className='form profile__form'>
            <p className='form__error-message'>
              This is an errorr message
            </p>
            <input type="text" placeholder='Full Name' value={name} onChange={e=>setName(e.target.value)} />
            <input type="email" placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} />
            <input type="password" placeholder='currrent password' value={currentPassword} onChange={e=>setConfirmNewPassword(e.target.value)} />
            <input type="password" placeholder='new password' value={newPassword} onChange={e=>setNewPassword(e.target.value)} />
            <input type="password" placeholder='confirm new password' value={confirmNewPassword} onChange={e=>setConfirmNewPassword(e.target.value)} />
            <button type='submit'className='btn primary'> Update Details</button>
          </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default UserProfile
