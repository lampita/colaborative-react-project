import Tarjeta from "./Tarjeta";
import { GamesContext } from "@/pages/context/GamesContextProvider";
import { useContext } from "react";

const ListaDeTarjetas = () => {
  const games = useContext(GamesContext);

  return (
    <>
      <div className="container">
        <div className="cards-list">
          {games.map((game, index) => (
            <Tarjeta key={index} game={game} />
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
