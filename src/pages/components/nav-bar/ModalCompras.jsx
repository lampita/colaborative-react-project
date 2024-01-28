import { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import {CartContext, CartDispatchContext,} from "@/pages/context/ShoppingContext.jsx";
import CartItem from "./CartItem";
import { TYPES } from "@/pages/actions/actions";

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
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.map((item, index) => (
            <CartItem key={index} item={item} deleteFromCart={deleteFromCart} />
          ))}
        <Button variant="primary" onClick={clearCart}>Limpiar Carrito</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCompras;