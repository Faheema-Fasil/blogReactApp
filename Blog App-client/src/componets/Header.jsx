import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/blog.svg'
import {FaBars} from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [isNavShowing,setNavShowing]=useState(window.innerWidth>800?true:false)
  const closeNavHandler=()=>{
    if (window.innerWidth<800) {
      setNavShowing(false)
    }else{
      setNavShowing(true)
    }
  }
  useEffect(() => {
    const handleResize = () => setNavShowing(window.innerWidth > 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div>
      <nav>
        <div className="container nav__container">
           <Link to="/" className='nav_logo' onClick={closeNavHandler}>
           <img src={Logo} alt="" />
           </Link>
          { isNavShowing &&<ul className='nav__menu'>
            <li><Link to="/profile/sdfsdf" onClick={closeNavHandler}>Ernest Achiever</Link></li>
            <li><Link to="/create" onClick={closeNavHandler}>Create Post</Link></li>
            <li><Link to="/authors" onClick={closeNavHandler}> Authors</Link></li>
            <li><Link to="/logout" onClick={closeNavHandler}>Logout</Link></li>
           </ul>}
           <button className='nav_toggle-btn' onClick={()=> setNavShowing(!isNavShowing)}>
            {isNavShowing? <AiOutlineClose/> : <FaBars/>}
           </button>
        </div>
      </nav>
    </div>
  )
}

export default Header
