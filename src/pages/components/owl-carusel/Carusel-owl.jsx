
import React from 'react';
import Cards from './Cards-owl';
import CardList from './Card-list';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '@/styles/carusel-owl.module.css'


const Carusel_owl = () => {


    return (
        <>
        <div className={styles.caruselContainer}>
            <div class="swiperContainer">
                <Swiper
                    loop={true}
                    modules={[Pagination, Autoplay]}
                    autodelay={1000}
                    pagination={{
                        'loop': true,
                        'el': '.pagination',
                        'clickable': true,
                        }}
                    slidesPerView={3}
                    breakpoint={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        }
                    }}
                    >
                    {/* {Cards.map((card) => (  */}
                    <SwiperSlide>
                        <Cards/>
                    </SwiperSlide>
                    {/* ))} */}
                </Swiper>
            </div>
            <div className="pagination" />
        </div>
        </>
    )
}

export default Carusel_owl

