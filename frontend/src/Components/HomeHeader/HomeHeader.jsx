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
        </div>
    </div>
  )
}
