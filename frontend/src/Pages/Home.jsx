import React,{useState,useEffect} from "react";
import NavBarHome from "../Components/NavBar/NavBarHome";
import SideBar from "../Components/NavBar/SideBar";
import "./Home.css";
// import ContinueWatching from "../Components/ContinueWatching/ContinueWatching";
import NowPlaying from "../Components/NowPlayingComponent/NowPlaying";
import BingeWorthy from "../Components/BingeWorthy/BingeWorthy";

export default function Home() {
  const useremail=localStorage.getItem("email")
  const [podcast,setPodcast]=useState([]);
    useEffect(()=>{
      const fetchData =async()=>{
          const data=await fetch("/file/topcharts")
          const json=await data.json();
          setPodcast(json)
      }
      fetchData();
    },[])
  return (
    <div className="home">
      <NavBarHome title={useremail} />
      <div className="flex">
        <SideBar />
        <div>
          <div>
            <div className="nowPlayingHeader">Now Playing</div>
            <NowPlaying/>
            {/* <div className="nowPlayingHeader">Pick Up Where You Left Off</div> */}
            {/* <ContinueWatching/> */}
            <div className="nowPlayingHeader" id="BW">Bingeworthy Podcasts</div>
            <BingeWorthy data={podcast}/>
          </div>
        </div>
      </div>
    </div>
  );
}
