import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './CSS/SignUpPage.css'
import signinImg from '../Components/Assets/19198860.jpg'

const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    username:""
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
      const response = await fetch("http://localhost:5000/signup", {
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
    <div className='signuppage'>
      <div className="sign-img">
        <img src={signinImg} alt=''/>
      </div>
      <div className="signup-container">
        <div className="signin-container-top">
        <div className="signin-container-heading">
            <h1>AI-Chatbot</h1>
        </div>
        <div className="signup-top-text">
            <p>Sign Up for Personalized Guidance and Wellness Support!</p>
        </div>
        <form onSubmit={handleSubmit} action="" method="post" className='signin-form'>
            <input onChange={handleChange} name="email" type='email' placeholder='Email address'/>
            <input onChange={handleChange} name="name" type='text' placeholder='Full Name'/>
            <input onChange={handleChange} name="username" type='text' placeholder='Username'/>
            <input onChange={handleChange} name="password" type='password' placeholder='Password'/>
            <p>By Signing up, you agree to our <span>Terms</span>, <span>Privacy Policy</span> and <span>Cookies Policy</span>.</p>
            <button type='submit'>Sign Up</button>
        </form>
        </div>
        <div className="sign-in-alt">
        <p>Have an account? <a href='/signin'>Log in</a></p>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
