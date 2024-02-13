import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/CartNavBar.module.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col, Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import { useState, useContext } from "react";
import { ProductsContext } from "@/pages/components/Reducer+Context/Reducer+Context";
import ModalCompras from "./ModalCompras";

function CartNavBar() {
  const [verModal, setVerModal] = useState(false);

  const [state, dispatch] = useContext(ProductsContext);
  const { cart, products } = state;
  const totalQuantity = cart.reduce(
    (qty, product) => qty + product.quantity,
    0
  );

  const opcionMapeo = (op) => {
    dispatch({ type: "OPCION_DE_MAPEO", payload: op });
  };

  return (
    <>
      <ModalCompras props={verModal} />

      <Navbar id="inicio" expand="sm" sticky="top" style={{ padding: "0rem" }}>
        <Container fluid className={styles.container}>
          <Image
            roundedCircle
            src="assets/logo.png"
            alt="icono comercial"
            className={styles.img_display}
          />

          <div className={styles.brand}>
            <a style={{ color: "white" }} href="http://localhost:3000/">
              {" "}
              Maluma-Store
            </a>
          </div>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className={styles.burga_boton}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Container className={styles.container_1}>
              <InputGroup style={{ width: "80%" }}>
                <Form.Control
                  placeholder="Juegos disponibles"
                  aria-label="Buscador"
                />

                <Button variant="outline-secondary">Buscar</Button>
              </InputGroup>

              <Button
                style={{ backgroundColor: "black", border: "black" }}
                type="button"
                onClick={() => {
                  setVerModal(true);
                }}
                onMouseUp={() => {
                  setVerModal(false);
                }}
              >
                <Image
                  className="cart_img"
                  src="/nav-bar/icono_carrito.svg"
                  alt="icono de un carrito"
                />
                <Badge pill bg="danger" style={{ display: "inline-block" }}>
                  {totalQuantity}
                </Badge>
              </Button>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container
        variant="dark"
        fluid
        style={{
          height: "3rem",
          position: "fixed",
          top: "bottom",
          zIndex: "100",
          width: "100",
        }}
      >
        <Row style={{ backgroundColor: "black", paddingBottom: "0.5rem" }}>
          <Col>
            <Dropdown>
              <Dropdown.Toggle style={{backgroundColor:"black", color:"white"}} variant="dark" id="dropdown-basic">
                CUENTAS PS PLUS
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className={styles.press}
              
                >
                  <strong>EXTRA</strong>
                </Dropdown.Item>
                <Dropdown.Item
                  className={styles.press}
                >
                  <strong>ESSENTIAL</strong>
                </Dropdown.Item>
                <Dropdown.Item
                  className={styles.press}
                >
                  <strong>DELUXE</strong>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle  style={{backgroundColor:"black", color:"white"}} variant="dark"  id="dropdown-basic">
                PLAYSTATION - 4
              </Dropdown.Toggle>

              <Dropdown.Menu >
                <Dropdown.Item
                  onClick={() => {
                    opcionMapeo("all");
                  }}
                  className={styles.press}
                  
                >
                  <strong>TODOS LOS JUEGOS</strong>
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    opcionMapeo("masVendido");
                  }}
                  className={styles.press}
                  
                  
                >
                  <strong>MAS VENDIDOS</strong>
                </Dropdown.Item>
                <Dropdown.Item
                  className={styles.press}
                  
                  onClick={() => {
                    opcionMapeo("ofertas");
                  }}
                >
                  <strong>OFERTAS</strong>
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    opcionMapeo("preventa");
                  }}
                  className={styles.press}
                  
                >
                  <strong>PREVENTAS</strong>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle style={{backgroundColor:"black", color:"white"}} variant="dark" id="dropdown-basic">
                PLAYSTATION - 5
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  className={styles.press}
                >
                  <strong>Demo 1</strong>
                </Dropdown.Item>
                <Dropdown.Item
                  className={styles.press}
                >
                  <strong>Demo 2</strong>
                </Dropdown.Item>
                <Dropdown.Item
                  className={styles.press}
                >
                  <strong>Demo 3</strong>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle style={{backgroundColor:"black", color:"white"}} variant="dark" id="dropdown-basic">
                GIFT CARDS
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  className={styles.press}
                >
                  <strong>Demo 1</strong>
                </Dropdown.Item>
                <Dropdown.Item
                  className={styles.press}
                >
                  <strong>Demo 2</strong>
                </Dropdown.Item>
                <Dropdown.Item
                  className={styles.press}
                >
                  <strong>Demo 3</strong>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle style={{backgroundColor:"black", color:"white"}} variant="dark" id="dropdown-basic">
                NINTENDO ESHOP
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  className={styles.press}
                >
                  <strong>Demo 1</strong>
                </Dropdown.Item>
                <Dropdown.Item
                  className={styles.press}
                >
                  <strong>Demo 2</strong>
                </Dropdown.Item>
                <Dropdown.Item
                  className={styles.press}
                >
                  <strong>Demo 3</strong>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle style={{backgroundColor:"black", color:"white"}} variant="dark" id="dropdown-basic">
                PSN CARDS
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  className={styles.press}
                >
                  <strong>Demo 1</strong>
                </Dropdown.Item>
                <Dropdown.Item
                  className={styles.press}
                >
                  <strong>Demo 2</strong>
                </Dropdown.Item>
                <Dropdown.Item
                  className={styles.press}
                >
                  <strong>Demo 3</strong>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CartNavBar;
