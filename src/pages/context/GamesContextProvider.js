import { createContext, useState } from "react";

export const GamesContext = createContext();

const GamesContextProvider = ({ children }) => {
  const [games, setGames] = useState(productos);

  return (
    <GamesContext.Provider value={games}>{children}</GamesContext.Provider>
  );
};

export default GamesContextProvider;

const productos= [
  {
    id: "1",
    stars: "5",
    agotado: false,

    image: "https://storegamesargentina.com/wp-content/uploads/2023/07/XBOX-SERIES-5-2-220x275.png",
    title: "EA SPORTS FC 24 PS4",
    price: "24490",
  },
  {
    id: "2",
    stars: "5",
    agotado: false,
    image:
      "https://storegamesargentina.com/wp-content/uploads/2023/09/Diseno-sin-titulo-2023-09-10T230107.065-1-220x274.png",
    title: "NBA 2K24 PS4",
    price: "38514",
  },
  {
    id: "3",
    stars: "5",
    agotado: false,
    image:
      "https://storegamesargentina.com/wp-content/uploads/2022/11/CALL-OF-DUTY-MODERN-WARFARE-2-220x274.jpg",
    title: "CALL OF DUTY MODERN WARFARE II PS4",
    price: "32764",
  },
  {
    id: "4",
    stars: "5",
    agotado: false,
    image:
      "https://storegamesargentina.com/wp-content/uploads/2023/04/Diseno-sin-titulo-82-1-220x275.png",
    title: "Dead Island II PS4",
    price: "43.996",
  },

  {
    id: "5",
    stars: "5",
    agotado: false,
    image:
      "https://storegamesargentina.com/wp-content/uploads/2023/01/RESIDENT-EVIL-4-REMAKE-220x274.jpg",
    title: "Resident Evil 4 Remake PS4",
    price: "25490",
  },

  {
    id: "6",
    stars: "5",
    agotado: false,
    image:
      "https://storegamesargentina.com/wp-content/uploads/2023/01/WWE-2K23-PS4-DIGITAL--220x274.jpg",
    title: "WWE 2K23",
    price: "21264",
  },

  {
    id: "7",
    stars: "5",
    agotado: false,
    image:
      "https://storegamesargentina.com/wp-content/uploads/2021/11/GOD-OF-WAR-RAGNAROK-220x274.jpg",
    title: "God of War Ragnarok",
    price: "24490",
  },

  {
    id: "8",
    stars: "5",
    agotado: false,
    image:
      "https://storegamesargentina.com/wp-content/uploads/2021/12/FIFA-23-220x274.jpg",
    title: "Fifa 23 Español Latino PS4",
    price: "21264",
  },

  {
    id: "9",
    stars: "5",
    agotado: false,
    image:
      "https://storegamesargentina.com/wp-content/uploads/2023/02/NBA-2K23-220x274.jpg",
    title: "NBA 2K23",
    price: "20114",
  },

  {
    id: "10",
    stars: "5",
    agotado: false,
    image:
      "https://storegamesargentina.com/wp-content/uploads/2023/04/Diseno-sin-titulo-82-1-220x275.png",
    title: "Dead Island 2 PS4",
    price: "31614",
  },

  {
    id: "11",
    stars: "5",
    agotado: false,
    image:
      "https://storegamesargentina.com/wp-content/uploads/2021/11/A-WAY-OUT-220x274.jpg",
    title: "A Way Out PS4",
    price: "25490",
  },

  {
    id: "12",
    stars: "5",
    agotado: false,
    image:
      "https://storegamesargentina.com/wp-content/uploads/2021/08/ACE-COMBAT-8-SKIES-220x274.jpg",
    title: "Ace Combat 7: Skies Unknown",
    price: "15514",
  },

  {
    id: "13",
    stars: "5",
    agotado: false,
    image:
      "https://storegamesargentina.com/wp-content/uploads/2023/11/AIRPORT-SIMULATOR-DAY-NIGHT-1-220x275.jpg",
    title: "Airport Simulator : Day & Night",
    price: "9660",
  },

  {
    id: "14",
    stars: "5",
    agotado: false,
    image:
      "https://storegamesargentina.com/wp-content/uploads/2023/11/ALAN-WAKE-REMASTERED-220x275.jpg",
    title: "Alan Wake: Remastered",
    price: "12650",
  },

  {
    id: "15",
    stars: "5",
    agotado: false,
    image:
      "https://storegamesargentina.com/wp-content/uploads/2023/10/XBOX-SERIES-6-220x275.png",
    title: "Alien: Isolation ",
    price: "12064",
  },

  {
    id: "16",
    stars: "5",
    agotado: false,
    image:
      "https://storegamesargentina.com/wp-content/uploads/2023/10/XBOX-SERIES-7-220x275.png",
    title: "Anthem",
    price: "17584",
  },

  {
    id: "17",
    stars: "5",
    agotado: false,
    image:
      "https://storegamesargentina.com/wp-content/uploads/2021/08/AO-INTERNACIONAL-TENNIS-220x274.jpg",
    title: "AO International Tennis",
    price: "16664",
  },

  {
    id: "18",
    stars: "5",
    agotado: false,
    image:
      "https://storegamesargentina.com/wp-content/uploads/2021/08/ARK-SURVIVAL-EVOLVED-220x274.jpg",
    title: "Ark Survival Evolved",
    price: "14470",
  },

  {
    id: "19",
    stars: "5",
    agotado: false,
    image:
      "https://storegamesargentina.com/wp-content/uploads/2023/09/ARMORED-CORE-VI-220x274.jpg",
    title: "Armored Core VI Fires of Rubicon PS4",
    price: "41964",
  },

  {
    id: "20",
    stars: "5",
    agotado: false,
    image:
      "https://storegamesargentina.com/wp-content/uploads/2021/06/ASSETTO-CORSA-220x274.jpg",
    title: "Assetto Corsa",
    price: "9764",
  },

  {
    id: "21",
    stars: "5",
    agotado: false,
    image:
      "https://storegamesargentina.com/wp-content/uploads/2021/06/BATTLEFIELD-2042-321x400.jpg",
    title: "Battlefield 2042",
    price: "11144",
  },

  {
    id: "22",
    stars: "5",
    agotado: false,
    image:
      "https://storegamesargentina.com/wp-content/uploads/2021/06/BATTLEFIELD-1-321x400.jpg",
    title: "Battlefield 1",
    price: "9764",
  },

  {
    id: "23",
    stars: "5",
    agotado: false,
    image:
      "https://storegamesargentina.com/wp-content/uploads/2021/06/BATTLEFIELD-4-321x400.jpg",
    title: "Battlefield 4",
    price: "17814",
  },

  {
    id: "24",
    stars: "5",
    agotado: false,
    image:
      "https://storegamesargentina.com/wp-content/uploads/2023/11/BATTLEFIELD-HARDLINE-321x400.jpg",
    title: "Battlefield Hardline",
    price: "6314",
  },
]