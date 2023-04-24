import React from 'react'

import "./DashboardPodcast.css"

import AudioPodcastCard from "../../AudioPodcastCard/AudioPodcastCard"
import VideoPodcastCard from "../../VideoPodcastCard/VideoPodcastCard"

export default function DashboardPodcast(props) {

  return (
    <div className='dashboardPodcast'>
        {props.data.map((data)=>{
                return(
                    <div className="elementsOfCarousel">
                        {data.category==="audio"
                        ?
                        (<div className="audioCard">
                            <AudioPodcastCard image={data.thumbnail} category="CATEGORY NAME - AUDIO" heading={data.name} subHeading={data.description} creator={data.author} source={data.fileurl} id={data.id} isFav={data.isfav} time={data.time}/>
                        </div>)
                        :
                        (<div className="videoCard">
                            <VideoPodcastCard image={data.thumbnail} category="CATEGORY NAME - VIDEO" heading={data.name} subHeading={data.description} creator={data.author} source={data.fileurl} id={data.id} isFav={data.isfav} time={data.time} />
                        </div>)
                        }
                    </div>
                )
            })}
    </div>
  )
}