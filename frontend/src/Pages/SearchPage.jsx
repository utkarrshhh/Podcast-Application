import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import {audio} from "../Data/audio.js"
import AudioPodcastCard from "../Components/AudioPodcastCard/AudioPodcastCard";
import "../Components/CarouselComponent/CarouselComponent.css"

export default function SearchPage() {
    return(
    <div>
        <NavBar/>
        <h1>Search Page</h1>
        {audio.map((data)=>{

            console.log(data);
            return(
            <div className="audioCard">
                <AudioPodcastCard image={data.imageAudio} category={data.categoryAudio} heading={data.headingAudio} subHeading={data.subHeadingAudio} creator={data.creatorAudio} time={data.timeAudio} logo={data.logoAudio} />
            </div>
            );
        })}
        


    </div>
    );
}
