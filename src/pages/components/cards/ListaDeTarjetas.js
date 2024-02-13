import Product from "./Productos";
import { useContext } from "react";
import { ProductsContext } from "@/pages/components/Reducer+Context/Reducer+Context";
const ListaDeTarjetas = () => {
  const [state, dispatch] = useContext(ProductsContext);
  const { products, cart, filtro } = state;

  const addToCart = (id) => {
    dispatch({ type: "ADD_TO_CART", payload: id });
  };

  return (
    <>
      <div className="cards-list">
        {products.length == 45 && filtro.length == 0
          ? products.map((product) => (
              <Product
                key={product.id}
                product={product}
                addToCart={(id) => addToCart(id)}
              />
            ))
          : filtro.map((product) => (
              <Product
                key={product.id}
                product={product}
                addToCart={(id) => addToCart(id)}
              />
            ))}
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          background-color: red;
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
