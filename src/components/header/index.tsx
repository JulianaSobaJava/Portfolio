import type { NextComponentType } from 'next'
import { BsChevronLeft, BsChevronRight, BsSlashLg } from 'react-icons/bs';
import styles from "./styles.module.scss";

const Header: NextComponentType = () => {
    return (
        <header className={styles.headerContainer}>
            <nav className={styles.headerContent}>
                <h1 className={styles.logo}><BsChevronLeft />JS <span>/</span><BsChevronRight /></h1>
                <ul>
                    <li className={styles.active}>Home</li>
                    <li>Sobre</li>
                    <li>Experiência</li>
                    <li>Projectos</li>
                    <li>Funny</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
