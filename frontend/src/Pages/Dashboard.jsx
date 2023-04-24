import React from 'react'
import NavBarSmall from '../Components/NavBar/NavBarSmall'
import DashboardComponent from '../Components/Dashboard/DashboardComponent'
import SideBar from '../Components/NavBar/SideBar'

export default function Dashboard() {
  const user=localStorage.getItem("email")

  return (
    <div className='dashboard'>
      <NavBarSmall title={user}/>
      <div className="flex">
            <SideBar/>
            <div>
                <div className="nowPlayingHeader">Your Recent Podcasts</div>
                <DashboardComponent/>
            </div>
      </div>
    </div>
  )
}
