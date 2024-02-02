import React from 'react';


const CardList = (props) => {
  return (

    <>
      <div className="container">
        <div className="card">
          <div>
            <img className="img" src={props.img} alt="Juego descargado" />
          </div>
        </div>
      </div>
      <style jsx>{`
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .card{
      border: 1px solid black;
      padding: 1px;
      height: 100px;
      width: 300px;
      flex-direction: row;
    }
    .container{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }
     `}
      </style>
    </>
  )
}

export default CardList