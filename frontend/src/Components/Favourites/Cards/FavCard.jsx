import React from 'react'
import AudioPodcastCard from '../../AudioPodcastCard/AudioPodcastCard'
import VideoPodcastCard from '../../VideoPodcastCard/VideoPodcastCard'

import "./FavCard.css"

export default function FavCard(props) {
  return (
    <div className='FAV'>
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
