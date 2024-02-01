import { Container, Row, Col } from "react-bootstrap";
import { Tooltip } from "@mui/material";
const CartItem = ({ item, deleteFromCart, handleClose, addToCart }) => {
  const { image, title, price, id, quantity } = item;




  return (
    <Container>
      <Row style={{ alignItems: "center" }}>
        <Col>
          <div
            style={{
              display: "flex",

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={image}
              alt=""
              style={{
                width: "70%",
                boxShadow: "blak",
                boxShadow: "14px 14px 20px 0 rgba(20, 20, 20, 0.3)",
              }}
            />
          </div>
        </Col>
        <Col>
          <div
            style={{
              display: "flex",

              justifyContent: "center",
              alignItems: "center",
              borderTop: "solid black",
              borderLeft: "solid black",
              borderRight: "solid black",
              borderBottom: "none",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              backgroundColor: "black",
              boxShadow: "14px 14px 20px 0 rgba(20, 20, 20, 0.3)",
            }}
          >
            <Tooltip title="Agregar uno" placement="bottom">
              <img
                src="/nav-bar/playTriangulo.png"
                style={{ width: "25%", margin: "0.5rem" }}
                onClick={() => addToCart(item.id)}
              ></img>
            </Tooltip>
            <Tooltip title="Eliminar Uno" placement="top">
              <img
                src="/nav-bar/playRedondo.png"
                style={{ width: "25%", margin: "0.5rem" }}
                onClick={() => deleteFromCart(id, false)}
              ></img>
            </Tooltip>

          </div>
          <div
            style={{
              display: "flex",

              justifyContent: "center",
              alignItems: "center",
              justifyContent: "center",
              borderTop: "none",
              borderLeft: "solid black",
              borderRight: "solid black",
              borderBottom: "solid black",
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
              backgroundColor: "black",
              boxShadow: "14px 14px 20px 0 rgba(20, 20, 20, 0.3)",
            }}
          >
                        <Tooltip title="Eliminar Todos" placement="top">
              <img
                src="/nav-bar/playCuadrado.png"
                style={{ width: "25%", margin: "0.5rem" }}
                onClick={() => deleteFromCart(id, true)}
              ></img>
            </Tooltip>
            <Tooltip title="Cerrar Carrito" placement="bottom">
              <img
                src="/nav-bar/playX.png"
                style={{ width: "25%", margin: "0.5rem" }}
                onClick={() => handleClose()}
              ></img>
            </Tooltip>
          </div>
        </Col>
        <Col>
          <div
            style={{
              border: "solid grey",
              padding: "1.2rem",
              borderRadius: "20px",
              boxShadow: "14px 14px 20px 0 rgba(20, 20, 20, 0.3)",
            }}
          >
            <div>
              <strong>{title.toUpperCase()}</strong>
            </div>
            <div>
              Precio= <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
              {Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 0,
              }).format(price)}
            </div>
            <div>
              Cantidad=<>&nbsp;</> {quantity}
            </div>
            <div>
              {" "}
              Subtotal= <>&nbsp;&nbsp;&nbsp;</>{" "}
              {Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 0,
              }).format(price * quantity)}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default CartItem;
