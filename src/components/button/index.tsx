import { FaGithub } from "react-icons/fa";
import styles from "./styles.module.scss";

interface ButtonProps{
    text: string,
    color?:string,
}

const Button = ({text}:ButtonProps) :JSX.Element => {
  return (
    <button type="button" className={styles.btn}>
      <FaGithub color="#eba417" />
      {text}
    </button>
  );
}

export default Button;
