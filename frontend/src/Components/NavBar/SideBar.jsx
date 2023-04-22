import React from 'react'
import { Link, NavLink } from "react-router-dom";

import "./SideBar.css"
export default function SideBar() {
  return (
    <div className='sidebar'>
        <Link to="">Dashboard</Link>
        <Link to="">Home</Link>
        <Link to="">Favourites</Link>
        <Link to="">Logout</Link>
    </div>
  )
}