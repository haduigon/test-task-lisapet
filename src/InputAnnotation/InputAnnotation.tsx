import { useContext } from "react";
import { AppStateContext } from "../AppStateContext/AppStateContext";
import styles from './InputAnnotation.module.scss';

const InputAnnotation = () => {
  const { state } = useContext(AppStateContext);
  return (
    <div>
      <p className={styles.text}>{state.annotation}</p>
    </div>
  )
}

export default InputAnnotation;