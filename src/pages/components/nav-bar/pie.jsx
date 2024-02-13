import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ActualYear from "../assets/ActualYear";

import { FaTwitter, FaWhatsapp, FaInstagram, FaTiktok, FaEnvelope, FaHome, FaPhoneAlt, FaTabletAlt} from "react-icons/fa";

const Pie = () => {
  return (
    <div>
      {/* Your main content here */}

      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#45526e" }}
      >
        <Container p-4 pb-0>
          <section className="">
            <Row>
              <Col md={3} lg={3} xl={3} mx-auto mt-3>
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Maluma Store
                </h6>
                <p>
                Somos una tienda en línea de Juegos digitales, gift cards, recargas y mucho más, siempre brindando la mejor atención y servicio a todos nuestros clientes desde 2020, que además se benefician de promociones cada mes!
                </p>
              </Col>

              <Col md={3} lg={3} xl={3} mx-auto mt-3>
                <h6 class="text-uppercase mb-4 font-weight-bold">Calidad y Seguridad</h6>
                <p className="text-white">Nuestros juegos digitales son versiones originales y completas, no tienen límite de uso, quedan para siempre en tu consola.
                </p>
                <p className="text-white" >Tu compra está protegida y nuestros productos cuentan con garantía ilimitada. Nunca caduca el acceso al juego.
                  
                </p>
                
              </Col>

              <Col md={3} lg={3} xl={3} mx-auto mt-3>
                <h6 class="text-uppercase mb-4 font-weight-bold">
                 Link Utiles
                </h6>
                <p>
                  <a class="text-white">Mi Cuenta</a>
                </p>
                <p>
                  <a class="text-white">Como Comprar</a>
                </p>
                <p>
                  <a class="text-white">Faq</a>
                </p>
                <p>
                  <a class="text-white">Ayuda</a>
                </p>
              </Col>

              <Col md={3} lg={3} xl={3} mx-auto mt-3>
                <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p>
                <FaHome /> Buenos Aires, 1426, AR
                </p>
                <p>
                <FaEnvelope /> info@gmail.com
                </p>
                <p>
                <FaPhoneAlt /> + 54 234 567 88
                </p>
                <p>
                <FaTabletAlt /> + 54 234 567 89
                </p>
              </Col>
            </Row>
          </section>

          <hr className="my-3" />

          <section className="p-3 pt-0">
            <Row d-flex align-items-center>
              <Col md={7} lg={8} text-center text-md-start>
                <div className="p-3">
                  ©Copyright: <ActualYear />
                  <a href="https://mdbootstrap.com/" className="text-white">
                    Maluma.com.ar
                  </a>
                </div>
              </Col>
              <Col md={7} lg={8} text-center text-md-start>
                <a
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <FaWhatsapp />
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <FaInstagram />
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <FaTwitter />
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <FaTiktok />
                </a>
              </Col>
            </Row>
          </section>
        </Container>
      </footer>
    </div>
  );
};

export default Pie;
