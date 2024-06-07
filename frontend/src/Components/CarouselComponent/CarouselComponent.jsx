import Slider from "react-slick";
import React, { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselComponent.css";

import AudioPodcastCard from "../AudioPodcastCard/AudioPodcastCard";
import VideoPodcastCard from "../VideoPodcastCard/VideoPodcastCard";
import axios from "axios";

export default function SimpleSlider() {
  const [podcast, setPodcast] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/file/topcharts");
      const json = res.data;
      setPodcast(json);
    };
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {podcast.map((data) => {
          return (
            <div className="elementsOfCarousel">
              {data.category === "audio" ? (
                <div className="audioCard">
                  <AudioPodcastCard
                    image={data.thumbnail}
                    category="CATEGORY NAME - AUDIO"
                    heading={data.name}
                    subHeading={data.description}
                    creator={data.author}
                    source={data.fileurl}
                    id={data.id}
                    time={data.time}
                  />
                </div>
              ) : (
                <div className="videoCard">
                  <VideoPodcastCard
                    image={data.thumbnail}
                    category="CATEGORY NAME - VIDEO"
                    heading={data.name}
                    subHeading={data.description}
                    creator={data.author}
                    source={data.fileurl}
                    id={data.id}
                    time={data.time}
                  />
                </div>
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
// }
