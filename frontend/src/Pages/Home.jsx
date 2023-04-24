import React from "react";
import NavBarHome from "../Components/NavBar/NavBarHome";
import SideBar from "../Components/NavBar/SideBar";
import "./Home.css";
import ContinueWatching from "../Components/ContinueWatching/ContinueWatching";
import NowPlaying from "../Components/NowPlayingComponent/NowPlaying";
import BingeWorthy from "../Components/BingeWorthy/BingeWorthy";

export default function Home() {
  const user=localStorage.getItem("email")
  return (
    <div className="home">
      <NavBarHome title={user} />
      <div className="flex">
        <SideBar />
        <div>
          <div>
            <div className="nowPlayingHeader">Now Playing</div>
            <NowPlaying/>
            <div className="nowPlayingHeader">Pick Up Where You Left Off</div>
            <ContinueWatching/>
            <div className="nowPlayingHeader" id="BW">Bingeworthy Podcasts</div>
            <BingeWorthy/>
          </div>
        </div>
      </div>
    </div>
  );
}
