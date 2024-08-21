import { useContext } from 'react';
import styles from './PopUp.module.scss';
import { AppStateContext } from '../AppStateContext/AppStateContext';
import classNames from 'classnames';

const PopUp = () => {
  const { state } = useContext(AppStateContext);
  
  return (
    <div className={classNames(styles.box, {
      [styles.boxQuestion]: state.showPopUpQuestion,
      [styles.boxInfo]: state.showPopUpInfo
    })}>
      <div className={styles.tooltip}>{state.popUpText}</div>
    </div>
  )
}

export default PopUp;