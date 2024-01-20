const Tarjeta = (props) => {
  return (
    <>
      <figure>
        <a href="#">
          <img src={props.game.image} alt={props.game.title} />
        </a>
        <figcaption>
          <h3>JUEGO DIGITAL PS4</h3>

          <h2>{props.game.title}</h2>

          <div>
            <h4>${props.game.price} </h4>
          </div>
        </figcaption>
      </figure>

      <style jsx>{`
        h2 {
          font-size: 1.1rem;
        }

        h4 {
          font-size: 1.1rem;
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

export default Tarjeta;
