import React from 'react'

import PodcastForm from "../Components/PodcastForm/PodcastForm.jsx"
import SideBar from "../Components/NavBar/SideBar";
import NavBarHome from "../Components/NavBar/NavBarHome";

export default function Form() {
  return (
    <div className='form'>
      <NavBarHome title="Admin" />
      <div className="flex">
        <SideBar />
        <div>
            <div className="formHeading">Upload New Podcast</div>
            <PodcastForm/>
        </div>
      </div>
    </div>
  )
}
