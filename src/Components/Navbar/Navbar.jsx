import React from 'react'
import { FiMessageSquare } from "react-icons/fi"
import { RxAvatar } from "react-icons/rx";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-left">
        <FiMessageSquare size={26}/>
        <h3>AI-Chatbot</h3>
      </div>
      <div className="nav-right">
        <a href='/signin'>Login</a>
      </div>
    </div>
  )
}

export default Navbar
