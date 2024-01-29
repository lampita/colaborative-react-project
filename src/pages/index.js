import Head from "next/head";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import {
  CartContext,
  CartDispatchContext,
} from "./context/ShoppingContext.jsx";
import CartNavBar from "./components/nav-bar/CartNavBar.jsx";
import CartEngine from "@/pages/components/nav-bar/CartEngine.jsx";
import ListaDeTarjetas from "./components/cards/ListaDeTarjetas";
import Carrusel from "./components/carusel/carrucel.jsx";

import { useReducer } from "react";
import { ShoppingReducer } from "@/pages/reducer/ShoppingReducer.jsx";
import { shoppingInitialState } from "./initial-state/InitialState.jsx";



export default function Home() {
  const [state, dispatch] = useReducer(ShoppingReducer, shoppingInitialState);

  return (
    <>
      <Head>
        <title>Maluma Store</title>
        <meta name="Trabajo práctico colaborativo Academia Numem" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./assets/logo.jpg" />
      </Head>

      <main>

        <CartContext.Provider value={state}>
          <CartDispatchContext.Provider value={dispatch}>
            <CartEngine />
            <CartNavBar num={1} />
            <Carrusel />
            <ListaDeTarjetas />
          </CartDispatchContext.Provider>
        </CartContext.Provider>

      </main>
    </>
  );
}
