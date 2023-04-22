import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NavBar from "./Components/NavBar/NavBar"
import Footer from "./Components/Footer/Footer"
import LandingPage from "./Pages/LandingPage"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Home from "./Pages/Home"

import "./App.css"

export default function App() {
  return (
    <div className='bg'>
      <BrowserRouter>
        {/* <NavBar /> */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/home" element={<Home/>}/>

          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  )
}

