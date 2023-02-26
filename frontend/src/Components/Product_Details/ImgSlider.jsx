import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../Styles/productdeatilslider.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Image } from "@chakra-ui/react";

const ImgSlider = ({data}) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      {data?.map((item, index) =>{
        return <SwiperSlide key={index} >
            <Image w="100%" src={item.url} alt= "imges"/>
        </SwiperSlide>
      })}
      </Swiper>
    </>
  )
}

export default ImgSlider;

const dummy=[
    {
        img: "https://images.dailyobjects.com/marche/product-images/1703/hive-desk-caddy-images/Hive-Desk-Caddy-vw.png?tr=cm-pad_resize,v-2,w-768,h-644,dpr-1"
    },
    {
        img:"https://images.dailyobjects.com/marche/product-images/1703/hive-desk-caddy-images/Hive-Desk-Caddy-1.png?tr=cm-pad_resize,v-2,w-768,h-644,dpr-1"
    },
    {
        img:"https://images.dailyobjects.com/marche/product-images/1703/hive-desk-caddy-images/Hive-Desk-Caddy-5t.jpg?tr=cm-pad_crop,v-2,w-768,h-644,dpr-1"
    },
    {
        img:"https://images.dailyobjects.com/marche/product-images/1703/hive-desk-caddy-images/Hive-Desk-Caddy-6t.jpg?tr=cm-pad_crop,v-2,w-768,h-644,dpr-1"
    },
    {
        img:"https://images.dailyobjects.com/marche/product-images/1703/hive-desk-caddy-images/Hive-Desk-Caddy-2n.png?tr=cm-pad_resize,v-2,w-768,h-644,dpr-1"
    },
    {
        img:"https://images.dailyobjects.com/marche/product-images/1703/hive-desk-caddy-images/Hive-Desk-Caddy-3.png?tr=cm-pad_resize,v-2,w-768,h-644,dpr-1"
    },{
        img:"https://images.dailyobjects.com/marche/product-images/1703/hive-desk-caddy-images/Hive-Desk-Caddy-4.png?tr=cm-pad_resize,v-2,w-768,h-644,dpr-1"
    },{
        img:"https://images.dailyobjects.com/marche/product-images/1703/hive-desk-caddy-images/Hive-Desk-Caddy-8t.jpg?tr=cm-pad_crop,v-2,w-768,h-644,dpr-1"
    }
]