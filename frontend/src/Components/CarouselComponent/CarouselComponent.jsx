import Slider from "react-slick";
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselComponent.css"

import AudioPodcastCard from "../AudioPodcastCard/AudioPodcastCard"
import VideoPodcastCard from "../VideoPodcastCard/VideoPodcastCard"

import {audio} from "../../Data/audio"

export default function SimpleSlider() {
//   render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
    };
    return (
      <div>
        <Slider {...settings}>
            {audio.map((data)=>{
                return(
                    <div className="elementsOfCarousel">
                        <div className="audioCard">
                            <AudioPodcastCard image={data.imageAudio} category={data.categoryAudio} heading={data.headingAudio} subHeading={data.subHeadingAudio} creator={data.creatorAudio} time={data.timeAudio} logo={data.logoAudio} />
                        </div>
                        <div className="videoCard">
                            <VideoPodcastCard image={data.imageVideo} category={data.categoryVideo} heading={data.headingVideo} subHeading={data.subHeadingVideo} creator={data.creatorVideo} time={data.timeVideo}/>
                        </div>
                    </div>
                )
            })}
        </Slider>
      </div>
    );
  }
// }
