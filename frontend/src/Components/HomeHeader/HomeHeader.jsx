import React from 'react'
import "./HomeHeader.css"

export default function HomeHeader() {
  return (
    <div className='HomeHeader'>
        <div className="headerText">
            <div className="headingText">Listen your favorite audio & video podcasts in one place!</div>
            <div className="headerButton">
                <div className="explorePodcastButton">
                    <button>Explore Podcasts</button>
                </div>
                <div className="startListeningButton">
                    <button>Start Listening</button>
                </div>
            </div>
        </div>
        <div className="headerImage">
            <img src="https://uploads-ssl.webflow.com/63a4333d6709521275441c77/6442b27e39465332e9c19c92_Group%20108.png" alt="" />
        </div>
    </div>
  )
}
