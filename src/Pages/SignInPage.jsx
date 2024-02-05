import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './CSS/SignInPage.css'
import signinImg from '../Components/Assets/19198860.jpg'
import { AiFillFacebook } from "react-icons/ai";

const SignInPage = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/signin", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/home");
      } else {
        const data = await response.json();
        alert(data.errorMessage);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className='signinpage'>
      <div className="sign-img">
        <img src={signinImg} alt=''/>
      </div>
      <div className="signin-container">
        <div className="signin-container-top">
        <div className="signin-container-heading">
            <h1>AI-Chatbot</h1>
        </div>
        <form onSubmit={handleSubmit} action="" method="post" className='signin-form'>
            <input onChange={handleChange} name='email' type='email' placeholder='Email address'/>
            <input onChange={handleChange} name='password' type='password' placeholder='Password'/>
            <button type='submit'>Login</button>
        </form>
        <div className="or-div">
            <p>OR</p>
        </div>
        <div className="login-with-fb">
            <AiFillFacebook size={24} color='#385185'/>
            <p>Log in with Facebook</p>
        </div>
        <div className="forgot-pass">
            <p>Forgot password?</p>
        </div>
        </div>
        <div className="sign-up-alt">
            <p>Don't have an account? <a href='/signup'>Sign up</a></p>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
