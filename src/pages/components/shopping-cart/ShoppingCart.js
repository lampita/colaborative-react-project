import { useReducer } from "react";
import { shoppingInitialState } from "@/pages/initial-state/InitialState";
import { TYPES } from "@/pages/actions/actions";
import { shoppingReducer } from "@/pages/reducer/ShoppingReducer";
import CartItem from "../products/cart-item";
import Product from "../products/products";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const deleteFromCart = (id, all) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
    }

    const deleteFromCart = (id) => {
      if (all) {
        dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
      } else {
        dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
      }
    };
  };
  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });
  return (
    <>
      <h2>Carrito Compras</h2>
      <h3>Productos</h3>
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
      <div></div>
      <h3>Carrito</h3>
      {cart.map((item, index) => (
        <CartItem key={index} item={item} deleteFromCart={deleteFromCart} />
      ))}
      <button onClick={clearCart}>Limpiar Carrito</button>
    </>
  );
};

export default ShoppingCart;
