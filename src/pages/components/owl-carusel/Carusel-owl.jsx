
import React from 'react';
import Cards from './Cards-owl';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '@/styles/carusel-owl.module.css'


const Carusel_owl = () => {
    // const Swiper = "new Swiper";
    // ('.swiper',
    // {
    //     // Optional parameters
    //     direction: 'horizontal',
    //     loop: true,
    //     // If we need pagination
    //     pagination: {
    //         el: '.swiper-pagination',
    //     },
    //     // Navigation arrows
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     // And if we need scrollbar
    //     scrollbar: {
    //         el: '.swiper-scrollbar',
    //     },
    // });

    return (
        <div className={styles.caruselContainer}>
            <swiper-container slides-per-view="3" speed="500" loop="true" css-mode="true">
                <swiper-slide><Cards/></swiper-slide>
                
            </swiper-container>


        </div>
    )
}

export default Carusel_owl

