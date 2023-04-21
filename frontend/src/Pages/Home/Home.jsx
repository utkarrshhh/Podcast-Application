import React from 'react'
import NavBar from "../../Components/NavBar/NavBar"
import HomeHeader from "../../Components/HomeHeader/HomeHeader"

import "./Home.css"
import Footer from '../../Components/Footer/Footer'

export default function Home() {
  return (
    <div className='home'>
        <NavBar />
        <HomeHeader/>
        <Footer/>
    </div>
  )
}
