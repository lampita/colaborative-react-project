import Product from "./Productos";
import { useContext } from "react";
import { ProductsContext } from "@/pages/components/Reducer+Context/Reducer+Context";
import Spinner from "../assets/Spinner";

const ListaDeTarjetas = () => {
  const [state, dispatch] = useContext(ProductsContext);
  const { products, cart, filtro } = state;

  const addToCart = (id) => {
    dispatch({ type: "ADD_TO_CART", payload: id });
  };

  return (
    <>
      {/* <Spinner /> */}

      <div className="container">
        <div className="cards-list">
        
        <div className="container">
  <div className="cards-list">
    {products.length ==45 && filtro.length ==0 ? (
      // Render filtered products using 'filtro'
      products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToCart={(id) => addToCart(id)}
        />
      ))
    ) : (
      // Render all products using 'products'
      filtro.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToCart={(id) => addToCart(id)}
        />
      ))
    )}
  </div>
</div>



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
