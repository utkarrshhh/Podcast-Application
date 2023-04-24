import React from 'react'
import { Link } from 'react-router-dom'
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
                <div className="dashboardRecent">
                  Your Recent Podcasts
                  <div className="dashboardUpload">
                    <Link to="/form">
                      <button>Upload Podcast</button>
                    </Link>
                  </div>
                </div>
                <DashboardComponent/>
            </div>
      </div>
    </div>
  )
}
