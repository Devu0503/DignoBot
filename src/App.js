import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from './Pages/LandingPage'
import SignInPage from './Pages/SignInPage';
import SignupPage from './Pages/SignupPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/home' element={<HomePage />}/>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
