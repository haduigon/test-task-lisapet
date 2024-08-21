import { useContext } from 'react';
import styles from './PopUp.module.scss';
import { AppStateContext } from '../AppStateContext/AppStateContext';

const PopUp = () => {
  const { state } = useContext(AppStateContext)
  return (
    <div className={styles.box}>
      <div className={styles.tooltip}>{state.popUpText}</div>
    </div>
  )
}

export default PopUp;