import React from 'react'
import AudioPodcastCard from '../AudioPodcastCard/AudioPodcastCard'
import VideoPodcastCard from '../VideoPodcastCard/VideoPodcastCard'

import { audio } from '../../Data/audio'

import "./Favourites.css"

export default function Favourites() {
  return (
    <div className='FAV'>
        {audio.map((data)=>{
                return(
                    <div className="elementsOfCarousel">
                        {data.category==="audio"
                        ?
                        (<div className="audioCard">
                            <AudioPodcastCard image={data.imageAudio} category="CATEGORY NAME - AUDIO" heading={data.headingAudio} subHeading={data.subHeadingAudio} creator={data.creatorAudio} source={data.fileurl} id={data.id}/>
                        </div>)
                        :
                        (<div className="videoCard">
                            <VideoPodcastCard image={data.imageVideo} category="CATEGORY NAME - VIDEO" heading={data.headingVideo} subHeading={data.subHeadingVideo} creator={data.creatorAudio} source={data.fileurl} id={data.id}/>
                        </div>)
                        }
                    </div>
                )
            })}
    </div>
  )
}
