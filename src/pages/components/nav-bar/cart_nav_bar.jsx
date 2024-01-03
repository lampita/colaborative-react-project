import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/Cart-nav-bar.module.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import Dropdown from "react-bootstrap/Dropdown";

function CartNavBar() {
  return (
    <>
      <Navbar expand="sm" sticky="top" style={{ padding: "0rem" }}>
        <Container fluid className={styles.container}>
          <Image
            roundedCircle
            src="nav-bar/logo.jpg"
            alt="icono del comercio"
            className={styles.img_display}
          />

          <Navbar.Brand className={styles.brand} href="#home">
            Maluma-Store
          </Navbar.Brand>

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
              <div>
                <Image
                  className="cart_img"
                  src="/nav-bar/icono_carrito.svg"
                  alt="icono de un carrito"
                />
                <Badge bg="danger">0</Badge>
              </div>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar expand="sm" style={{ padding: "0rem" }}>
        <Container
          className={styles.container_2}
          fluid
          style={{
            justifyContent: "space-evenly",
            padding: "0rem 3rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <Nav.Link href="#home">INICIO</Nav.Link>

          <Dropdown>
            <Dropdown.Toggle
              style={{ color: "white" }}
              variant=""
              id="dropdown-basic"
            >
              PLAYSTATION 4
            </Dropdown.Toggle>
            <Dropdown.Menu
              variant="dark"
              style={{
                color: "white",
                backgroundColor: "#585858",
                padding: "0",
              }}
            >
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                href="#/action-1"
              >
                TODOS LOS JUEGOS
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                href="#/action-2"
              >
                MAS VENDIDOS
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                href="#/action-3"
              >
                OFERTAS
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                href="#/action-3"
              >
                PREVENTAS
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav.Link href="#link">OFERTAS</Nav.Link>
          <Nav.Link href="#link">PLAYSTATION-5</Nav.Link>

          <Dropdown>
            <Dropdown.Toggle
              style={{ color: "white" }}
              variant=""
              id="dropdown-basic"
            >
              CUENTAS PS PLUS
            </Dropdown.Toggle>
            <Dropdown.Menu
              variant="dark"
              style={{
                color: "white",
                backgroundColor: "#585858",
                padding: "0",
              }}
            >
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                href="#/action-1"
              >
                ESSENTIAL
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                href="#/action-2"
              >
                EXTRA
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                href="#/action-3"
              >
                DELUXE
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle
              style={{ color: "white" }}
              variant=""
              id="dropdown-basic"
            >
              GIFT CARDS
            </Dropdown.Toggle>
            <Dropdown.Menu
              variant="dark"
              style={{
                color: "white",
                backgroundColor: "#585858",
                padding: "0",
              }}
            >
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                href="#/action-1"
              >
                PSN CARDS
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                href="#/action-2"
              >
                NINTENDO ESHOP
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                href="#/action-3"
              >
                PLAYSTATION PLUS
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav.Link href="#link">FORNITE</Nav.Link>

          <Dropdown>
            <Dropdown.Toggle
              style={{ color: "white" }}
              variant=""
              id="dropdown-basic"
            >
              MAS INFO
            </Dropdown.Toggle>
            <Dropdown.Menu
              variant="dark"
              style={{
                color: "white",
                backgroundColor: "#585858",
                padding: "0",
              }}
            >
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                href="#/action-1"
              >
                COMO COMPRAR
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                href="#/action-2"
              >
                OPINIONES
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                href="#/action-3"
              >
                FAQ
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                href="#/action-3"
              >
                TERMINOS Y CONDICIONES
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </>
  );
}

export default CartNavBar;
