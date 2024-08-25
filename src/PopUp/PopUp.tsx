import { useContext } from 'react';
import styles from './PopUp.module.scss';
import { AppStateContext } from '../AppStateContext/AppStateContext';
import classNames from 'classnames';

type Props = {
  text?: string,
}

const PopUp: React.FC<Props> = ({ text }) => {
  const { state } = useContext(AppStateContext);
  
  return (
    <div>
      <div className={classNames(styles.box, {
      [styles.boxQuestion]: state.showPopUpQuestion,
      [styles.boxInfo]: state.showPopUpInfo
    })}>
      <div className={styles.tooltip}>{text}</div>
    </div>
    </div>
  )
}

export default PopUp;