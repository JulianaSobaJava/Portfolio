import styles from "./styles.module.scss";
import React,{ ElementType } from "react";

interface ButtonProps{
    text: string,
    icon: ElementType;
    link: string; 
}

const Button = ({text, icon, link}:ButtonProps) :JSX.Element => {
  return (
    <a href={link} type="button" className={styles.btn} target="_blank" rel="noreferrer">
      {React.createElement(icon,{color:""})}
      {text}
    </a>
  );
}

export default Button;
