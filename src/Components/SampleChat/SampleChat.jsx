import React from 'react'
import './SampleChat.css'
import sample_pfp from '../Assets/sample-pfp.png'
import { FaMicrophone } from "react-icons/fa"
import { IoPaperPlane } from "react-icons/io5";

const SampleChat = () => {
  return (
    <div className='sample-chat'>
      <div className="s-chat-top">
        <img src={sample_pfp} alt=''/>
        <p>AI Bot</p>
      </div>
      <div className="s-chat-messages">
        <ul>
            <li className='s-msg-left'>
                <img src={sample_pfp} alt=''/>
                <div className="s-msg">Hey, I have a question</div>
            </li>
            <li className='s-msg-left'>
                <img src={sample_pfp} alt='' style={{visibility: 'hidden'}}/>
                <div className="s-msg">Hey, I have a question</div>
            </li>
            <li className='s-msg-right'>
                <img src={sample_pfp} alt=''/>
                <div className="s-msg">Hey, I have a question</div>
            </li>
            <li className='s-msg-right'>
                <img src={sample_pfp} alt='' style={{visibility:'hidden'}}/>
                <div className="s-msg">Hey, I have a question</div>
            </li>
            <li className='s-msg-left'>
                <img src={sample_pfp} alt=''/>
                <div className="s-msg">Hey, I have a question</div>
            </li>
            <li className='s-msg-right'>
                <img src={sample_pfp} alt=''/>
                <div className="s-msg">Hey, I have a question</div>
            </li>
            <li className='s-msg-left'>
                <img src={sample_pfp} alt=''/>
                <div className="s-msg">Hey, I have a question</div>
            </li>
            <li className='s-msg-right'>
                <img src={sample_pfp} alt=''/>
                <div className="s-msg">Hey, I have a question</div>
            </li>
        </ul>
      </div>
      <div className="s-chat-bottom">
        <div className="s-chat-bottom-left">
            <p>Type your Message...</p>
        </div>
        <div className="s-chat-bottom-right">
            <FaMicrophone size={22}/>
            <IoPaperPlane size={22} />
        </div>
      </div>
    </div>
  )
}

export default SampleChat
