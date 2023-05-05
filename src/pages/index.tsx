/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '../components/button';
import { BsChevronDoubleDown } from 'react-icons/bs'
import {FaGithub, FaLinkedin} from "react-icons/fa";
import styles from '../styles/home.module.scss';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | Portfólio</title>
      </Head>
      <main>
          <section className={styles.contentContainer}>
          <img src="/avatar.svg" alt="Girl Coding" className={styles.myAvatar}/>
              <section className={styles.hero}>
                  <h1>
                    <span className={styles.span}>Hello!</span>
                    <br/> 
                      I&apos;m Juliana Soba.<br />
                     a Front-End<span> Developer</span> 
                  </h1>
                  <p>

                  </p>
                  <div className={styles.buttons}>
                  <Button text='LinkedIn' icon={FaLinkedin}  link="https://www.linkedin.com/in/julianasoba/"/>
                  <Button text='GitHub' icon={FaGithub} link="https://github.com/JulianaSobaJava"/>
                  </div>
              </section>
          </section>
          <div className={styles.arrowScrollDown}><BsChevronDoubleDown/></div>
          </main>
    </div>
  )
}

export default Home
