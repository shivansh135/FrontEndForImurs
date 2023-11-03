import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './courosal.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { FeedbackNew } from '../feedback1-cards/card1';
import { MainHeading } from '../../../headings/heading';

export default function Courosal() {
  return (
    <div style={{marginTop:'40px'}}>
        <MainHeading name="Nostalgia Champions"/>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 10,
          modifier: 1,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <FeedbackNew name="Mahi & Siddharth" img="feedbackimages/mahi_&_Siddharth.jpg" text="Reliving our special day through its pages brought tears and joy. Grateful!" city="Get Souvenir"/>
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackNew name="Harshita & Akhil" img="feedbackimages/Harshita_&_Akhil.jpg" text="Each page captured our love story perfectly. Cherished memories beautifully preserved!" city="Get Souvenir"/>
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackNew name="Nitya and Shivam" img="feedbackimages/Nitya_&_Shivam.jpeg"  text="Our memories turned into a beautiful tangible keepsake. Loved this concept" city="Get Souvenir"/>
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackNew name="Namita & Akshay" img="feedbackimages/Namita_&_Akshay.jpg"  text="Imurs exceeded expectations, beautifully curated. It's our love story in print!" city="Get Souvenir"/>
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackNew name="Jasmine & Siddharth" img="feedbackimages/Jasmine_&_Siddharth.jpg"  text="A heartfelt journey through memories on our coffee table. Thankful to Crescent Studios and Imurs for this." city="Get Souvenir"/>
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackNew name="Sahiba & Mayank" img="feedbackimages/Mayank_&_Sahiba.jpg"  text="Every page radiated our love story—it's more than a keepsake; it's priceless joy!" city="Get Souvenir"/>
        </SwiperSlide>
      </Swiper>
       
    </div>
  );
}
