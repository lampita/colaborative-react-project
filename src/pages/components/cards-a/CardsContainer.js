import Cards from '@/pages/components/cards-a/Cards'
import AIRPORT-SIMULATOR from './../../../../public/img-cards-a/AIRPORT-SIMULATOR.jpg';
import ALIEN-6 from './../../../../public/img-cards-a/ALIEN-6.png';
import AMONG-US from './.././../../public/img-cards-a/AMONG-US.jpg';
import ANTHEM from './../../../../public/img-cards-a/ANTHEM.png';
import BATTLE-FIELD from './../../../../public/img-cards-a/BATTLEFIELD.jpg';
import AO-TENNIS from './../../../../public/img-cards-a/AO-TENNIS.jpg';
import ASSASSING CREED from './../../../../public/img-cards-a/ASSASSING-CREED.jpg';
import BEN-10 from './../../../../public/img-cards-a/BEN10.png';
import BORDERLANDS from './../../../../public/img-cards-a/BORDERLANDS.jpg';
import ASSET-CORSA from './../../../../public/img-cards-a/ASSETTO-CORSA.jpg';




const tarjetas = [
    {
    id:1,
    img: AIRPORT-SIMULATOR,
    title: "Airport Simulator",
    bgcolor: "blue",
    },
    {
    id:2,
    img: ALIEN-6,
    title: "Alien 6",
    bgcolor: "blue",
    },
    {
    id:3,
    img: AMONG-US,
    title: "Among Us",
    bgcolor: "blue",
    },
    {
    id:4,
    img: ANTHEM,
    title: "Anthem",
    bgcolor: "blue",
    },
    {
    id:5,
    img: BORDERLANDS,
    title: "Borderlands 3",
    bgcolor: "blue",
    },
    {
    id:6,
    img: AO-TENNIS,
    title: "Australian Open Tennis",
    bgcolor: "blue",
    },
    {
    id:7,
    img: ASSASSING-CREED,
    title: "Assassing Creed",
    bgcolor: "blue",
    },
    {
    id:8,
    img: ASSETTO-CORSA,
    title: "Assetto Corsa",
    bgcolor: "blue",
    },
    {
    id:9,
    img: BATTLEFIELD,
    title: "BattleField",
    bgcolor: "blue",
    },
    {
    id:10,
    img: BEN-10,
    title: "Ben 10",
    bgcolor: "blue",
    }
];

const CardsContainer = () => {
    return (
      <>
        <div>
            {
            tarjetas.map(tarjetasvarias => <Cards />)
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




