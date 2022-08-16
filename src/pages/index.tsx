/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '../components/button';
import { BsChevronDoubleDown } from 'react-icons/bs'
import styles from '../styles/home.module.scss';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | Portfólio</title>
      </Head>
      <main>
          <section className={styles.contentContainer}>
              <section className={styles.hero}>
                  <span>👏 Hey, welcome</span>
                  <h1>
                      Eu sou <span>Juliana Soba</span>.<br />
                          Desenvolvedora Front-End
                  </h1>
                  <p>

                  </p>
                  <div className={styles.buttons}>
                  <Button text='LinkedIn'/>
                  <Button text='GitHub' />
                  </div>
              </section>
              <img src="/avatar.svg" alt="Girl Coding" className={styles.myAvatar}/>
          </section>
          <div className={styles.arrowScrollDown}><BsChevronDoubleDown/></div>
          </main>
    </div>
  )
}

export default Home
