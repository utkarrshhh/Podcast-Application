import React from "react";
import NavBarHome from "../Components/NavBar/NavBarHome";
import SideBar from "../Components/NavBar/SideBar";
import "./Home.css";
import NowPlaying from "../Components/NowPlayingComponent/NowPlaying";
export default function Home() {
  return (
    <div className="home">
      <NavBarHome title="Ajay Khatri" />
      <div className="flex">
        <SideBar />
        <div>
          <div>
            <h2>Now Playing</h2>
            <NowPlaying/>
          </div>
        </div>
      </div>
    </div>
  );
}
