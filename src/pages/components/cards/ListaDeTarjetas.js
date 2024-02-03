import { TYPES } from "@/pages/actions/actions";
import Product from "./Productos";
import { CartContext, CartDispatchContext } from "@/pages/context/ShoppingContext";
import { useContext, useEffect } from "react";
import axios from "axios";

const ListaDeTarjetas = () => {
  
  const dispatch = useContext(CartDispatchContext);
  const contenido = useContext(CartContext);

  const updateState = async () => {
    const ENDPOINTS = {
      products: "http://localhost:5000/products",
      cart: "http://localhost:5000/cart",
    };
    const responseProducts = await axios.get(ENDPOINTS.products);
    const responseCart = await axios.get(ENDPOINTS.cart);
    
    const productList = await responseProducts.data;
    
    const cartItems = await responseCart.data;
    dispatch({type: TYPES.READ_STATE, payload: {products: productList, cart: cartItems}});
  };

     
 useEffect(() => {updateState()}, [])
  





  
  const { products, cart } = contenido;
  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };



  return (
    <>
      <div className="container">
        <div className="cards-list">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              addToCart={(id) => addToCart(product.id)}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          heigth: 100%;
          background-color: black;
        }
        .cards-list {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          
        }
      `}</style>
    </>
  );
};

export default ListaDeTarjetas;
