import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useContext } from "react";
import {Button} from "react-bootstrap";
import { Modal } from "react-bootstrap";
import {
  CartContext,
  CartDispatchContext,
} from "@/pages/context/ShoppingContext.jsx";
import CartItem from "./CartItem";
import { TYPES } from "@/pages/actions/actions";
import Paper from "@mui/material/Paper";

function ModalCompras(props) {
  const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
  useEffect(() => {
    setShow(props.props);
  }, [props.props]);

  const dispatch = useContext(CartDispatchContext);

  const deleteFromCart = (id, all) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
    }
  };
  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });
  const contenido = useContext(CartContext);
  const { products, cart } = contenido;
  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  




  return (
    <>
      <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Carrito de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "grey",
          }}
        >
          {cart.length >= 1 ? (
            cart.map((item, index) => (
              <Paper
                key={index}
                elevation={24}
                style={{
                  margin: "0.5rem",
                  padding: "0.8rem",
                  
                }}
              >
                
                  <CartItem  
                    key={index}
                    item={item}
                    deleteFromCart={deleteFromCart}
                    handleClose={handleClose}
                    addToCart={addToCart}

                  />
           

              </Paper>
            ))
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2>CARRITO VACÍO!</h2>
              <img src="/nav-bar/mariokart.png" style={{ width: "30%" }} />
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          {cart.length > 0 ? (
            <>
              <Button variant="primary" onClick={clearCart}>
                Limpiar Carrito
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
            </>
          ) : (
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCompras;
