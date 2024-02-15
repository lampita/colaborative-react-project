
import styles from '@/styles/carusel-owl.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CaruselOwl = () => {
  return ((
    <div className={styles.swiper_container}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop= {true}
        spaceBetween={8}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: false }}
        breakpoints= {{
          // when window width is >= 200px
          200: {
            slidesPerView : 1,
          },
          // when window width is >= 480px
          480 : {
            slidesPerView: 2,
            spaceBetween: 3,
          },
          // when window width is >= 640px
          640 : {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          780 : {
            slidesPerView: 3,
            spaceBetween: 5,
          }
          }}
        
      >
        <div className={styles.cardItem}>
          <div>
            <SwiperSlide className={styles.cardItem}><img className={styles.images} src="/owl-carusel/img/cliente1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className={styles.cardItem}><img className={styles.images} src="/owl-carusel/img/cliente2.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className={styles.cardItem}><img className={styles.images} src="/owl-carusel/img/cliente3.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className={styles.cardItem}><img className={styles.images} src="/owl-carusel/img/cliente4.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className={styles.cardItem}><img className={styles.images} src="/owl-carusel/img/cliente5.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className={styles.cardItem}><img className={styles.images} src="/owl-carusel/img/cliente6.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className={styles.cardItem}><img className={styles.images} src="/owl-carusel/img/cliente7.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className={styles.cardItem}><img className={styles.images} src="/owl-carusel/img/cliente8.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className={styles.cardItem}><img className={styles.images} src="/owl-carusel/img/cliente9.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className={styles.cardItem}><img className={styles.images} src="/owl-carusel/img/cliente10.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className={styles.cardItem}><img className={styles.images} src="/owl-carusel/img/cliente11.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className={styles.cardItem}><img className={styles.images} src="/owl-carusel/img/cliente12.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className={styles.cardItem}><img className={styles.images} src="/owl-carusel/img/cliente13.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className={styles.cardItem}><img className={styles.images} src="/owl-carusel/img/cliente14.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className={styles.cardItem}><img className={styles.images} src="/owl-carusel/img/cliente15.jpg" alt="" /></SwiperSlide>
          </div>
        </div>
      </Swiper>
    </div>
  )


  )
}

export default CaruselOwl;
