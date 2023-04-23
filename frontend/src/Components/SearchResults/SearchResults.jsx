import React from "react";
import { audio } from "../../Data/audio.js";
import AudioPodcastCard from "../AudioPodcastCard/AudioPodcastCard";
import "../BingeWorthy/BingeWorthy.css";
import VideoPodcastCard from "../VideoPodcastCard/VideoPodcastCard";

export default function SearchResults() {
  return (
    <div className="bingeWorthy">
      {audio.map((data) => {
        return (
          <div className="elementsOfCarousel">
            <div className="audioCard">
              <AudioPodcastCard
                image={data.imageAudio}
                category={data.categoryAudio}
                heading={data.headingAudio}
                subHeading={data.subHeadingAudio}
                creator={data.creatorAudio}
                time={data.timeAudio}
                logo={data.logoAudio}
              />
            </div>
            <div className="videoCard">
              <VideoPodcastCard
                image={data.imageVideo}
                category={data.categoryVideo}
                heading={data.headingVideo}
                subHeading={data.subHeadingVideo}
                creator={data.creatorVideo}
                time={data.timeVideo}
              />
            </div>
            <div className="audioCard">
              <AudioPodcastCard
                image={data.imageAudio}
                category={data.categoryAudio}
                heading={data.headingAudio}
                subHeading={data.subHeadingAudio}
                creator={data.creatorAudio}
                time={data.timeAudio}
                logo={data.logoAudio}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
