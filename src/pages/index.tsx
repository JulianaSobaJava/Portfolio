/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import { BsChevronDoubleDown } from 'react-icons/bs'
import styles from '../styles/home.module.scss';
import Hero from '../components/hero';
import About from '../components/about';


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | Portfólio</title>
      </Head>
      <main>
        <Hero/>
        <About/>
          <div className={styles.arrowScrollDown}><BsChevronDoubleDown/></div>
          </main>
    </div>
  )
}

export default Home
