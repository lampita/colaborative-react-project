// import Swiper core and required modules


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CaruselOwl = () => {
  return ((
  <div style={{display:"flex", justifyContent:"center"}}>
    <Swiper
    modules={[Navigation, Pagination]}

      spaceBetween={1}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      style={{width:"95%", backgroundColor:"#333333", padding:"3rem", margin: "2rem"}}
     
      
      
      
    >
      <SwiperSlide><img src="/owl-carusel/img/cliente1.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/owl-carusel/img/cliente2.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/owl-carusel/img/cliente4.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/owl-carusel/img/cliente5.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/owl-carusel/img/cliente10.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/owl-carusel/img/cliente11.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/owl-carusel/img/cliente12.jpeg" alt="" /></SwiperSlide>
      ...
    </Swiper>
    </div>
  )
  

  )
}

export default CaruselOwl