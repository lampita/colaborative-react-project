import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import styles from "@/styles/carusel.module.css";

const Carrusel = () => {
  return (

    <Carousel indicators={false} controls={false}>
      <Carousel.Item interval={6000}>

        <img
          className="d-block w-100"
          style={{ maxWidth: "100%", margin: "0 auto" }}
          src="/carusel/img/intro.jpg"
          alt="pantalla intro"
        />
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          style={{ maxWidth: "100%", margin: "0 auto" }}
          src="/carusel/img/imagen1.jpg"
          alt="lego2k"
        />
        <Carousel.Caption className={styles.carouselCaption}>
          <h3>Lego 2K Drive</h3>
          <p>
            Te damos la bienvenida a Piezilandia, hogar de las carreras de mundo
            abierto
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          style={{ maxWidth: "100%", margin: "0 auto" }}
          src="/carusel/img/imagen2.jpg"
          alt="sable"
        />
        <Carousel.Caption className={styles.carouselCaption}>
          <h3>Sable</h3>
          <p>
            Embárcate en viaje único e inolvidable en el que acompañarás a Sable
            durante su planeo, un rito de iniciación que la llevará a recorrer
            vastos desiertos y parajes impresionantes repletos de maravillas de
            otros tiempos y de restos de naves espaciales.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          style={{ maxWidth: "100%", margin: "0 auto" }}
          src="/carusel/img/imagen3.jpg"
          alt="powerwash"
        />
        <Carousel.Caption className={styles.carouselCaption}>
          <h3>PowerWash Simulator</h3>
          <p>
            Un satisfactorio juego de limpieza donde la tensión es baja y la
            presión del agua es alta..
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrusel;