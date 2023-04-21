import React from 'react'
import NavBar from "../../Components/NavBar/NavBar"
import HomeHeader from "../../Components/HomeHeader/HomeHeader"
import Carousel from "../../Components/Carousel/Carousel"

import "./Home.css"
import Footer from '../../Components/Footer/Footer'

// import {audio} from "../../Data/audio.js"

export default function Home() {
  return (
    <div className='home'>
        <NavBar />
        <HomeHeader/>
        <Carousel/>
        {/* <AudioPodcastCard/> */}
        <Footer/>
    </div>
  )
}
