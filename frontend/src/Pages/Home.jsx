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
            <div className="nowPlayingHeader">Now Playing</div>
            <NowPlaying/>
          </div>
        </div>
      </div>
    </div>
  );
}
