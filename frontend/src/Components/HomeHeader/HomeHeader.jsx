import React from "react";
import "./HomeHeader.css";
import { Link } from "react-router-dom";

export default function HomeHeader() {
  return (
    <div className="HomeHeader">
      <div className="headerText">
        <div className="headingText no-flex">
          Listen your favorite <span className="yellow">audio</span> &{" "}
          <span className="blue">video</span> podcasts in one place!
        </div>
        <div className="headerButton">
          <div className="explorePodcastButton">
            <Link to="/login">
              <button>Explore Podcasts</button>
            </Link>
          </div>
          <div className="startListeningButton">
            <Link to="/signup">
              <button>Start Listening</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="headerImage">
        <img
          src="https://uploads-ssl.webflow.com/63a4333d6709521275441c77/6442b27e39465332e9c19c92_Group%20108.png"
          alt=""
        />
      </div>
    </div>
  );
}
