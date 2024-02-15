import React from "react";
import ListaDeTarjetas from "./ListaDeTarjetas";

const Seccion = () => {
  return (
    <>
      <section className="cont">
        <hr />
        <h3 className="cat">
          
          CATALOGO PS4
          
        </h3>
        <hr />
        <ListaDeTarjetas />
      </section>

      <style jsx>{`
        .cont{padding:0rem; margin-top: 3rem; margin-bottom: 8rem

        }
        .cat {
          color: white;
          display: flex;
          justify-content: center;
        }
        hr {
          vertical-align: middle;
          height: 3px;
          width: 100%;
          display: inline-block;
          border: 1px solid white;
          margin: 1rem;
        }
      `}</style>
    </>
  );
};

export default Seccion;
