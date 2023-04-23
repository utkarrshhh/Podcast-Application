import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="logo">
        <Link to="/">
          <img
            src="https://uploads-ssl.webflow.com/63a4333d6709521275441c77/64429c22490d761efb73e6aa_Group%201.png"
            alt=""
          />
        </Link>
      </div>
      <div className="search">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.88693 18.0544C12.0355 18.0544 14.0961 17.2011 15.6154 15.6823C17.1346 14.1635 17.9882 12.1036 17.9882 9.95575C17.9882 7.80787 17.1346 5.74796 15.6154 4.22917C14.0961 2.71039 12.0355 1.85715 9.88693 1.85715C7.73835 1.85715 5.67777 2.71039 4.1585 4.22917C2.63922 5.74796 1.78571 7.80787 1.78571 9.95575C1.78571 12.1036 2.63922 14.1635 4.1585 15.6823C5.67777 17.2011 7.73835 18.0544 9.88693 18.0544V18.0544ZM17.025 18.6753C17.5021 20.115 18.5912 20.259 19.4284 18.9992C20.1935 17.8474 19.6894 16.9026 18.3032 16.9026C17.277 16.8936 16.701 17.6944 17.025 18.6753V18.6753Z"
            stroke="white"
            stroke-width="1.92857"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        {/* Implement Search Functionality in the Search bar */}
        
        <input type="text" placeholder="Start looking for the best podcasts" />
      </div>
      <div className="buttons">
        <div className="loginNav">
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="signup">
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
