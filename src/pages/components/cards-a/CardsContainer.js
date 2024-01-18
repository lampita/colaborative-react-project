import Cards from './Cards'





const tarjetas = [
    {
    id:"1",
    img: "img-cards-a/AIRPORT-SIMULATOR.jpg",
    title: "Airport Simulator",
    bgcolor: "blue",
    },
    {
    id:2,
    img: "img-cards-a/ALIEN-6.png",
    title: "Alien 6",
    bgcolor: "blue",
    },
    {
    id:3,
    img: "img-cards-a/AMONG-US.jpg",
    title: "Among Us",
    bgcolor: "blue",
    },
    {
    id:4,
    img: "img-cards-a/ANTHEM.png",
    title: "Anthem",
    bgcolor: "blue",
    },
    {
    id:5,
    img: "img-cards-a/BORDERLANDS.jpg",
    title: "Borderlands 3",
    bgcolor: "blue",
    },
    {
    id:6,
    img: "img-cards-a/AO-TENNIS.jpg",
    title: "Australian Open Tennis",
    bgcolor: "blue",
    },
    {
    id:7,
    img: "img-cards-a/ASSASSING-CREED.jpg",
    title: "Assassing Creed",
    bgcolor: "blue",
    },
    {
    id:8,
    img: "img-cards-a/ASSETTO-CORSA.jpg",
    title: "Assetto Corsa",
    bgcolor: "blue",
    },
    {
    id:9,
    img: "img-cards-a/BATTLEFIELD.jpg",
    title: "BattleField",
    bgcolor: "blue",
    },
    {
    id:10,
    img: "img-cards-a/BEN10.png",
    title: "Ben 10",
    bgcolor: "blue",
    }
];

const CardsContainer = () => {
    return (
      <>
        <div>
            {
            tarjetas.map(tarjetasvarias => <Cards tarjetasvarias= {tarjetasvarias} />)
            }
        </div>

        <style jsx>
            {`
            div {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between; 
                }
            `}
        </style>
      </>  
    )
}

export default CardsContainer




