import React from 'react'
 
import './Navbar.css' 
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <ul className='ul'>
       <li><Link to={'/'} className='Link'>Home</Link></li>
       <li><Link to={'/about'} className='Link'>About</Link></li>
       <li><Link to={'/services'} className='Link'>Services</Link></li>
       <li><Link to={'/contact'} className='Link'>Contact</Link></li>
       <li><Link to={'/UseState'} className='Link'>UseState</Link></li>
       <li><Link to={'/register'} className='Link'>Register</Link></li>
       <li><Link  to={'/login'}   className='Link'>Login</Link></li>

      </ul>
    </div>
  )
}

export default Navbar