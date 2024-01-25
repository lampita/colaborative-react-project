import Head from "next/head";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import CartNavBar from "./components/nav-bar/cart_nav_bar";
import Seccion from "./components/cards/Seccion";
import GamesContextProvider from "./context/GamesContextProvider";
import Carousel from "./carrucel";

export default function Home() {
  return (
    <>
      <Head>
        <title>Maluma Store</title>
        <meta name="Trabajo práctico colaborativo Academia Numem" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./assets/logo.jpg" />
      </Head>

      <main>
        <GamesContextProvider>
          <CartNavBar num={1} />
          <Seccion />
          <div className="container">
            <Carousel />
          </div>
        </GamesContextProvider>
      </main>
    </>
  );
}
