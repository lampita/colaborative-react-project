import { useReducer, useEffect } from "react";
import { shoppingInitialState } from "@/pages/initial-state/InitialState";
import { TYPES } from "@/pages/actions/actions";
import { ShoppingReducer } from "@/pages/reducer/ShoppingReducer";
import { CartContext, CartDispatchContext } from "@/pages/context/ShoppingContext";





const ShoppingCart = () => {

  const [state, dispatch] = useReducer(ShoppingReducer, shoppingInitialState);
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
  };
  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });
  



  return (
    <>
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>

      </CartDispatchContext.Provider>
    </CartContext.Provider>
    </>
  );
};

export default ShoppingCart;
