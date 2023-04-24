import React from 'react'
import SideBar from '../Components/NavBar/SideBar'
import NavBarSmall from '../Components/NavBar/NavBarSmall'
import Favourites from '../Components/Favourites/Favourites'

export default function Favourite() {
  const userEmail=localStorage.getItem("email")

  return (
    <div className='fav'>
      <NavBarSmall title={userEmail}/>
      <div className="flex">
        <SideBar/>
        <div>
          <div className="favHeading">
            Your Favourites
          </div>
          <Favourites/>
        </div>
      </div>
    </div>
  )
}
