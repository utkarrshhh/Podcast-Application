import React,{useContext} from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Context";

import "./SideBar.css"
export default function SideBar() {
  const authContextValue=useContext(AuthContext);
  // const redirect=useNavigate();

  const handleLogout=async()=>{
    authContextValue.setLoggedIn(false);
    localStorage.removeItem('id')
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    // redirect('/')
  }

  return (
    <div className='sidebar'>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/home">Home</Link>
        <Link to="">Favourites</Link>
        <Link to="/" onClick={handleLogout}>Logout</Link>
    </div>
  )
}