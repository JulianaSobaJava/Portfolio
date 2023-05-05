import type { NextComponentType } from "next";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { AiOutlineMenuUnfold} from "react-icons/ai";
import styles from "./styles.module.scss";
import { useState } from "react";

const Header: NextComponentType = () => {
  const [togle, setTogle] = useState(false);
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.headerContent}>
        <h1 className={styles.logo}>
          {" "}
          <span className={styles.span}></span>Juliana Soba
        </h1>
        <ul>
          <a className={styles.active}>Home</a>
          <a href="#about">About</a>
          <a>Experience</a>
          <a>Projects</a>
          <a>Funny</a>
          <a>Blog</a>
        </ul>
        <div className={styles.iconsgroup}>
        <div
          className={`${styles.icons} ${togle && styles.lightMode}`}
          onClick={() => setTogle(!togle)}
        >
          <button>{togle ? <BsSunFill /> : <BsMoonStarsFill />}</button>
        </div>
        <button className={styles.menu}>
          <AiOutlineMenuUnfold/>
        </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
