import React,{ useContext } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NavBar from "./Components/NavBar/NavBar"
import Footer from "./Components/Footer/Footer"
import LandingPage from "./Pages/LandingPage"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Home from "./Pages/Home"
import Dashboard from './Pages/Dashboard';
// import SearchPage from './Pages/SearchPage';
import Form from './Pages/Form';

import { AuthContext } from "./Components/Context/Context.jsx";

import "./App.css"
import Favourite from './Pages/Favourite';

export default function App() {
  const authContextValue=useContext(AuthContext);
  authContextValue.setLoggedIn(localStorage.getItem('id')?true:false)

  // window.addEventListener('beforeunload', function (e) {
  //   e.preventDefault();
  //   localStorage.removeItem('onLogin')
  //   localStorage.removeItem('id')
  //   localStorage.removeItem('token')
  //   localStorage.removeItem('email')
  // });

  return (
    <div className='bg'>
      <BrowserRouter>
        {/* <NavBar /> */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            {/* <Route path="/search" element={<SearchPage />}/> */}
            {authContextValue.loggedIn && (<Route path="/form" element={<Form/>}/>)}
            {authContextValue.loggedIn && (<Route path="/home" element={<Home/>}/>)}
            {authContextValue.loggedIn && (<Route path="/dashboard" element={<Dashboard/>}/>)}
            {authContextValue.loggedIn && (<Route path="/fav" element={<Favourite/>}/>)}
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  )
}

