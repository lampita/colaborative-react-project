import { Container, Row, Col } from "react-bootstrap";
import { Tooltip } from "@mui/material";


const CartItem = ({ item, deleteFromCart, handleClose, addToCart }) => {
  const { id, image, title, price,  quantity } = item;

  return (
    <>
      <Container>
        <Row >
          <Col xl={4} lg={4} md={4} sm={6} xs={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "Gainsboro",
              }}
            >
              <img
                src={image}
                alt={title}
                style={{
                  width: "8rem",
                  boxShadow: "0.875rem 0.875rem 1.25rem 0 rgba(0, 0, 0, 0.3)",
                }}
              />
            </div>
          </Col>
          <Col xl={3} lg={3} md={4} sm={6} xs={12}
            style={{
              backgroundColor: "black",
              borderRadius: "1rem",
              boxShadow: "0.875rem 0.875rem 1.25rem 0 rgba(20, 20, 20, 0.3)",
              display: "grid",
              placeItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Tooltip title="Agregar uno" placement="top" PopperProps={{style:{zIndex:9000}}}>
                <img
                  src="/nav-bar/playTriangulo.png"
                  style={{ width: "3rem", margin: "0.5rem" }}
                  onClick={() => addToCart(item.id)}
                ></img>
              </Tooltip>
              <Tooltip title="Eliminar Uno" placement="top" PopperProps={{style:{zIndex:9000}}}>
                <img
                  src="/nav-bar/playRedondo.png"
                  style={{ width: "3rem", margin: "0.5rem"}}
                  onClick={() => deleteFromCart(id, false)}
                ></img>
              </Tooltip>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Tooltip title="Eliminar Todos" placement="bottom" PopperProps={{style:{zIndex:9000}}}>
                <img
                  src="/nav-bar/playCuadrado.png"
                  style={{ width: "3rem", margin: "0.5rem",zIndex:"3000" }}
                  onClick={() => deleteFromCart(id, true)}
                ></img>
              </Tooltip>
              <Tooltip title="Cerrar Carrito" placement="bottom" PopperProps={{style:{zIndex:9000}}} >
                <img
                  src="/nav-bar/playX.png"
                  style={{ width: "3rem", margin: "0.5rem",zIndex:"5000"}}
                  onClick={() => handleClose()}
                ></img>
              </Tooltip>
            </div>
          </Col>
          <Col xl={5} lg={5} md={4} sm={12} xs={12}>
            <div
              style={{
                border: "solid grey",
                padding: "1rem",

                borderRadius: "1rem",
                boxShadow: "0.875rem 0.875rem 1.25rem 0 rgba(20, 20, 20, 0.3)",
              }}
            >
              <div style={{ fontSize: "0.9rem" }}>
                <Tooltip title={title} placement="top" arrow PopperProps={{style:{zIndex:9000}}}>
                  <strong>
                    {title.slice(0, 20 - 1).toUpperCase() + " \u2026"}
                  </strong>
                </Tooltip>
              </div>

              <div style={{ fontSize: "0.8rem" }}>
                {`Cantidad= ${quantity}`}
              </div>
              <div style={{ fontSize: "0.8rem" }}>
                <div style={{ fontSize: "0.8rem" }}>
                  Unidad={" "}
                  {Intl.NumberFormat("es-AR", {
                    style: "currency",
                    currency: "ARS",
                    maximumFractionDigits: 0,
                  }).format(price)}
                </div>
                Subtotal=
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
    </>
  );
};
export default CartItem;
