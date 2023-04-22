import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"

import "./App.css"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  )
}

