import React,{useEffect,useState} from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import './CSS/HomePage.css'
import ChatSection from '../Components/ChatSection/ChatSection'

const HomePage = () => {
    const [user, setUser] = useState(null);

    const fetchUserDetails = async () => {
      try {
        const response = await fetch('http://localhost:5000/get-user', {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const userData = await response.json();
        console.log(userData);
        setUser(userData.user);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };
  
    useEffect(() => {
      fetchUserDetails();
    }, []);
  return (
    <div className='homepage'>
      <Sidebar user={user}/>
      <ChatSection />
    </div>
  )
}

export default HomePage
