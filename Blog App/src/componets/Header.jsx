import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/blog.svg'
import {FaBars} from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  return (
    <div>
      <nav>
        <div className="container nav__container">
           <Link to="/" className='nav_logo'>
           <img src={Logo} alt="" />
           </Link>
           <ul className='nav__menu'>
            <li><Link to="/profile/sdfsdf">Ernest Achiever</Link></li>
            <li><Link to="/create">Create Post</Link></li>
            <li><Link to="/authors"> Authors</Link></li>
            <li><Link to="/logout">Logout</Link></li>
           </ul>
           <button className='nav_toggle-btn'>
            <AiOutlineClose/>
           </button>
        </div>
      </nav>
    </div>
  )
}

export default Header
