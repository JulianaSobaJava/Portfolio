import type { NextComponentType } from 'next'
import { BsMoonStarsFill, BsSunFill} from 'react-icons/bs';
import styles from "./styles.module.scss";
import { useState } from 'react';

const Header: NextComponentType = () => {

    const [togle, setTogle] = useState(false)
    return (
        <header className={styles.headerContainer}>
            <nav className={styles.headerContent}>
                <h1 className={styles.logo}> <span className={styles.span}></span>Juliana Soba</h1>
                <ul>
                    <li className={styles.active}>Home</li>
                    <li>Sobre</li>
                    <li>Experiência</li>
                    <li>Projectos</li>
                    <li>Funny</li>
                    <li>Blog</li>
                </ul>
                <div className={`${styles.icons} ${togle && styles.lightMode}`} onClick={()=>setTogle(!togle)}>
                <button>{togle ? <BsSunFill/> : <BsMoonStarsFill/>}</button>
                </div>
            </nav>
        </header>
    )
}

export default Header
