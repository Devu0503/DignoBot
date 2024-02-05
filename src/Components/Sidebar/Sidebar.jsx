import React from 'react'
import './Sidebar.css'
import { SiChatbot } from "react-icons/si";
import pfp from '../Assets/sample-pfp.png'

const Sidebar = (props) => {
  return (
    <div className='sidebar'>
        <div className="sidebar-top">
            <div className="logo">
                <SiChatbot size={26} color='rgb(95, 43, 226)'/>
                <h3 style={{fontWeight:'500'}}>AI Chatbot</h3>
            </div>
            <button>+ New Chat</button>
            <ul className='prev-chats'>
                <li>Chat 1</li>
                <li>Chat 2</li>
                <li>Chat 3</li>
                <li>Chat 4</li>
                <li>Chat 5</li>
                <li>Chat 6</li>
                <li>Chat 7</li>
            </ul>
      </div>
      <div className="curr-user">
        <img src={pfp} alt=''/>
        <p>Dheeraj Sharma</p>
      </div>
    </div>
  )
}

export default Sidebar
