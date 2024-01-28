import { TYPES } from "@/pages/actions/actions";
import Product from "./Products";
import { CartContext, CartDispatchContext } from "@/pages/context/ShoppingContext";
import { useContext } from "react";

const ListaDeTarjetas = () => {
  const dispatch = useContext(CartDispatchContext);
  const contenido = useContext(CartContext);
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
