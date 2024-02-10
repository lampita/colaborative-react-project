//import { shoppingInitialState } from "../../initial-state/InitialState";
import React, { useReducer, createContext, useState, useEffect } from "react";
import { TYPES } from "../../actions/actions";
import axios from "axios";

export const ProductsContext = createContext();
const shoppingInitialState = { products: [], cart: [], filtro:[] };

const ENDPOINTS = {
  products: "http://localhost:5000/products",
  cart: "http://localhost:5000/cart",
};

const ShoppingReducer =  (state, action) => {

// const prueba=axios.get(ENDPOINTS.products).then((response) => {(response.data)});
// console.log(prueba)

// const getProducts = async () => {
//   const response = await axios.get(ENDPOINTS.products);
//   const productaso = await response.data;

//     return productaso;
// };

// Obtener los productos y usarlos en otra parte del código
// const prueba = getProducts();
// console.log(prueba)

 
  switch (action.type) {
    case TYPES.READ_STATE: {
      return {
        ...state,
        products: action.payload.products,
        cart: action.payload.cart,
      };
    }

    case TYPES.OPCION_DE_MAPEO: {
      
      const copyDeState=[...state.products]

      const filteredProducts = copyDeState.filter(
        (product) => product.status === action.payload
      );

      return {
        ...state,
        filtro: [...filteredProducts],
      };
    }

    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
    }

    case TYPES.REMOVE_ONE_PRODUCT: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === itemToDelete.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== itemToDelete.id),
          };
    }

    case TYPES.REMOVE_ALL_PRODUCTS: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART: {
      return { ...state, cart: [] };
    }

    default:
      return state;
  }
};

export const ProductsContextProvider = ({ children }) => {
  const updateState = async () => {
    const responseProducts = await axios.get(ENDPOINTS.products);
    const responseCart = await axios.get(ENDPOINTS.cart);
    const productList = await responseProducts.data;
    const cartItems = await responseCart.data;

    dispatch({
      type: "READ_STATE",
      payload: { products: productList, cart: cartItems },
    });
  };

  useEffect(() => {
    updateState();
  }, []);

 const [state, dispatch] = useReducer(ShoppingReducer, shoppingInitialState);

  return (
    <ProductsContext.Provider value={[state, dispatch]}>
      {children}
    </ProductsContext.Provider>
  );
};
