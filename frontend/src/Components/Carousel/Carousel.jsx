import React from 'react'
import CarouselComponent from "../CarouselComponent/CarouselComponent"

import "./Carousel.css"

export default function Carousel() {
  return (
    <div className='carousel'>
        <div className="carouselHeading">
            <div className="carouselText">Popular podcasts in your area</div>
            <div className="carouselViewAll">View All</div>
        </div>
        <div className="carouselElemets">
            <CarouselComponent/>
        </div>
    </div>
  )
}
