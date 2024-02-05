import React from 'react';
import './Message.css';
import { RiRobot2Line } from "react-icons/ri";
import pfp from '../Assets/sample-pfp.png'

const Message = (props) => {
  const messageClasses = `message ${props.type === 'user-msg' ? 'user-msg' : ''}`;

  return (
    <div className={messageClasses}>
      {props.type === 'user-msg' ? (
        <img src={pfp} alt='' />
      ) : (
        <RiRobot2Line size={100} />
      )}
      <div className="name-and-msg">
        <p>{props.type === 'user-msg' ? 'You' : 'Chatbot'}</p>
        <p>
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default Message;
