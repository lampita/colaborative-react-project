import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/CartNavBar.module.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import { useContext } from "react";
import { ProductsContext } from "@/pages/components/Reducer+Context/Reducer+Context";

function AuxBar() {
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
      <Navbar expand="sm" style={{ padding: "0rem", }}>
        <Container
          className={styles.container_2}
          fluid
          style={{
            justifyContent: "space-evenly",
            padding: "0rem 3rem",
            flexWrap: "wrap",
            gap: "1rem",
            position:"fixed",
            zIndex: 50
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
              className={styles.press}
            >
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                onClick={() => {
                  opcionMapeo("all");
                }}
                className={styles.press}
              >
                TODOS LOS JUEGOS
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                onClick={() => {
                  opcionMapeo("masVendido");
                }}
                className={styles.press}
              >
                MAS VENDIDOS
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                onClick={() => {
                  opcionMapeo("ofertas");
                }}
                className={styles.press}
              >
                OFERTAS
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                onClick={() => {
                  opcionMapeo("preventa");
                }}
                className={styles.press}
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
              className={styles.press}
            >
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                href="#/action-1"
                className={styles.press}
              >
                ESSENTIAL
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                href="#/action-2"
                className={styles.press}
              >
                EXTRA
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                href="#/action-3"
                className={styles.press}
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
              className={styles.press}
            >
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                href="#/action-1"
                className={styles.press}
              >
                PSN CARDS
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                href="#/action-2"
                className={styles.press}
              >
                NINTENDO ESHOP
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                href="#/action-3"
                className={styles.press}
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
              className={styles.press}
            >
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                href="#/action-1"
                className={styles.press}
              >
                COMO COMPRAR
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                href="#/action-2"
                className={styles.press}
              >
                OPINIONES
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                href="#/action-3"
                className={styles.press}
              >
                FAQ
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "white", fontSize: "0.8rem" }}
                href="#/action-3"
                className={styles.press}
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

export default AuxBar;
