const Product = ({ product, addToCart }) => {
  const { image, name, price, stars, agotado, id } = product;

  return (
    <>
      <figure>
        <a href="#">
          <img src={image} alt={name} />
        </a>
        <figcaption>
          <h3>JUEGO DIGITAL PS4</h3>

          <h2>{name}</h2>

          <div>
            <h4>${price} </h4>
          </div>
        </figcaption>
        <button onClick={() => addToCart(id)}>Agregar</button>
      </figure>

      <style jsx>{`
        h3 {
          font-size: 0.8rem;
          display: inline;
        }

        h2 {
          font-size: 0.7rem;
        }

        h4 {
          font-size: 0.7rem;
          display: inline;
        }

        a {
          text-decoration: none;
          color: rgb(255, 255, 255);
          text-align: center;
        }

        figure {
          background-color: transparent;
          width: 180px;
          height: 380px;
          border: 1px rgb(238, 238, 238);
          aling-items: center;
          margin: 10px;
          font-size: 0.7rem;
        }

        img {
          width: 100%;
        }

        figcaption {
          font-family: "Roboto";
          padding: 1rem;
          padding-top: 0;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          aling-items: center;
          gap: 10px;
        }
      `}</style>
    </>
  );
};

export default Product;
