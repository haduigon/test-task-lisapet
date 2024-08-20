import { useContext } from "react";
import { AppStateContext } from "../AppStateContext/AppStateContext";
import styles from './InputAnnotation.module.scss';

const InputAnnotation = () => {
  const { state } = useContext(AppStateContext);
  return (
    <div>
      <text className={styles.text}>{state.annotation}</text>
    </div>
  )
}

export default InputAnnotation;