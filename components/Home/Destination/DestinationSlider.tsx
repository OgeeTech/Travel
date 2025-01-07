import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
   desktop: {
        breakpoint: {max: 3000, min:1324},
        items: 5, 
        slidesToSlide: 1 // optional, defualt to 1
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 2,
        slidesToSlide: 1 // optional, defualt to 1
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, defualt to 1
    },
};

const DestinationSlider = () => {

  return (
    <div>
      
    </div>
  )
}

export default DestinationSlider
