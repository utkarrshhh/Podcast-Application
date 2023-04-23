import React from 'react'
import { Link, NavLink } from "react-router-dom";

import "./NavBar.css"

export default function NavBar(props) {
  return (
    <div className='NavBar'>
        <div className='logo'>
            <Link to='/'>
            <img src="https://uploads-ssl.webflow.com/63a4333d6709521275441c77/64429c22490d761efb73e6aa_Group%201.png" alt="" />
            </Link>
        </div>
        
        <div className="buttons">
            <div className="signup">
                <Link to={'/'+props.title}>
                    <button>{props.title}</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
