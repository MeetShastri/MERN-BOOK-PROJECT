import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import card1Image from '../assets/cardimages/card1.jpg';
import card2Image from '../assets/cardimages/card2.jpeg';
import card3Image from '../assets/cardimages/card3.jpeg';
import card4Image from '../assets/cardimages/card4.jpeg';
import card5Image from '../assets/cardimages/card5.jpeg';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Card.css';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

const Card = () => {
  return (
    <div className='card'>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide>
          <img src={card1Image} alt="sory" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={card2Image} alt="sory" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={card3Image} alt="sory" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={card4Image} alt="sory" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={card5Image} alt="sory" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Card
