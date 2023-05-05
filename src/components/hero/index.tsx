import Button from '../button';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import styles from '../../styles/home.module.scss';
export default function Hero() {


  return (
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
  )
}
