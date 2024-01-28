import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import style from "@/styles/carusel.module.css"; 
import imagen1 from 'carusel/imagen1.webp'
import imagen2 from 'carusel/imagen2.avif'
import imagen3 from 'carusel/imagen3.webp'
import imagen4 from 'carusel/imagen4.webp'

const Carousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-80"
          src={imagen1}
          alt="lego2k"
        />
        <Carousel.Caption>
          <h3>Lego 2K Drive</h3>
          <p>Te damos la bienvenida a Piezilandia, hogar de las carreras de mundo abierto</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-80"
          src={imagen2}
          alt="sbale"
        />
        <Carousel.Caption>
          <h3>Sable</h3>
          <p>Embárcate en viaje único e inolvidable en el que acompañarás a Sable durante su planeo, un rito de iniciación que la llevará a recorrer vastos desiertos y parajes impresionantes repletos de maravillas de otros tiempos y de restos de naves espaciales.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-80"
          src={imagen3}
          alt="powerwash"
        />
        <Carousel.Caption>
          <h3>PowerWash Simulator</h3>
          <p>Un satisfactorio juego de limpieza donde la tensión es baja y la presión del agua es alta..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-80"
          src={imagen4}
          alt="psplus"
        />
        <Carousel.Caption>
          <h3>Ps Plus</h3>
          <p>Descubre Playstation Plus
Disfruta de cientos de títulos clásicos, de PS5 y PS4, el multijugador online y muchos más beneficios imperdibles.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
};

export default Carousel;
