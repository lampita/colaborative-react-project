import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/CartNavBar.module.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import Dropdown from "react-bootstrap/Dropdown";
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

          <div className={styles.brand}>Maluma-Store</div>

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
    </>
  );
}

export default CartNavBar;
