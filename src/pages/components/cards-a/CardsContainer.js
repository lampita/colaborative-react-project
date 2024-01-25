import Cards from './Cards'



const tarjetas = [
    {
    id:"1",
    img: "img-cards-a/AIRPORT-SIMULATOR.jpg",
    title: "Airport Simulator",
    },
    {
    id:2,
    img: "img-cards-a/ALIEN-6.png",
    title: "Alien 6",
    },
    {
    id:3,
    img: "img-cards-a/AMONG-US.jpg",
    title: "Among Us",
    },
    {
    id:4,
    img: "img-cards-a/ANTHEM.png",
    title: "Anthem",
    },
    {
    id:5,
    img: "img-cards-a/BORDERLANDS.jpg",
    title: "Borderlands 3",
    },
    {
    id:6,
    img: "img-cards-a/AO-TENNIS.jpg",
    title: "Australian Open Tennis",
    },
    {
    id:7,
    img: "img-cards-a/ASSASSING-CREED.jpg",
    title: "Assassing Creed",
    },
    {
    id:8,
    img: "img-cards-a/ASSETTO-CORSA.jpg",
    title: "Assetto Corsa",
    },
    {
    id:9,
    img: "img-cards-a/BATTLEFIELD.jpg",
    title: "BattleField",
    },
    {
    id:10,
    img: "img-cards-a/BEN10.png",
    title: "Ben 10",
    },
    {
    id:11,
    img: "img-cards-a/7-DAYS-TO-DIE.jpg",
    title: "7 Day to die",
    },
    {
    id:12,
    img: "img-cards-a/A-WAY-OUT-321x400.jpg",
    title: "A Way out",
    },
    {
    id:13,
    img: "img-cards-a/ACE-COMBAT-8-SKIES.jpg",
    title: "Ace-Combat-8",
    },
    {
    id:14,
    img: "img-cards-a/ALAN-WAKE.jpg",
    title: "Alan Wake",
    },
    {
    id:15,
    img: "img-cards-a/ARK-SURVIVAL-EVOLVED.jpg",
    title: "Ark Survival",
    },
    {
    id:16,
    img: "img-cards-a/ODYSSEY.jpg",
    title: "Odyssey",
    },
    {
    id:17,
    img: "img-cards-a/ARMORED-CORE-VI.jpg",
    title: "Armored 6",
    },
    {
    id:18,
    img: "img-cards-a/ASSASSINS-CREED-VALHALLA.jpg",
    title: "Assassins Creed Valhalla",
    },
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
                row-gap: 80px;
                }
            `}
        </style>
      </>  
    )
}

export default CardsContainer




