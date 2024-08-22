import { useContext } from "react";
import { AppStateContext } from "../AppStateContext/AppStateContext";
import styles from './InputAnnotation.module.scss';
import classNames from "classnames";

const InputAnnotation = () => {
  const { state } = useContext(AppStateContext);
  return (
    <div>
      <p
        className={classNames(styles.text, {
          [styles.textError]: state.hasError,
        })}
        // className={styles.text}
      >
        {state.annotation}
      </p>
    </div>
  )
}

export default InputAnnotation;