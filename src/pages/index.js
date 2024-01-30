import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Section from './components/cards-a/Section'
import Card from './components/cards-a/Cards'
import CardsContainer from './components/cards-a/CardsContainer'
import Button from './components/cards-a/Button'
import Cards from './components/cards-a/Cards'
import { Rating as MUIRating } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./assets/logo.png" />
      </Head>
      <main>
      <Section />
      </main>
    </>
  )
}
