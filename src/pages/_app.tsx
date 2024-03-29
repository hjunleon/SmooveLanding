import '@/styles/globals.css'

import { Montserrat } from 'next/font/google'
import localFont from "next/font/local";

import type { AppProps } from 'next/app'
import Head from "next/head";





const arcade_gamer = localFont({
  src: [
    {
      path: "../fonts/ArcadeGamer-Regular.18697fd0762c7671d1c8.1997f35de457033ac913820c0604e6a1.woff2",
      weight: '400',
      style: "normal"
    }
  ],
  variable: "--my-arcade-gamer"
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: "--my-mon"
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.png" />

      </Head>
      <main className={`${montserrat.variable} ${arcade_gamer.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}